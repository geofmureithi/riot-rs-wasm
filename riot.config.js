const { registerPreprocessor } = require('@riotjs/compiler')
const fs = require('fs');

// register the rust preprocessor
registerPreprocessor('javascript', 'rust', (code, options) => {
  const javascript = options.fragments.javascript
  const { attributes, text } = javascript
  const rustCode = text.text
  const module = attributes.find(a => a.name =='module').value
  const nowWhitespaceRust = rustCode.replace(/\s/g,'')
  const [_, state, dispatch, __, ___, actionEnum ] = rustCode.match(/export!\((\w+), (\w+), (\w+), (\w+), (\w+)\);/)
  const actions = nowWhitespaceRust.replace(/\s/g,'').match(/enum(\w+\1){((\w+\2(\(\w+\))?,?)*)}/)[2].trim().split(',').map(z => z.split("(")[0]).filter(x =>!!x).map(x => x.trim())
  writeModuleToFile(module, rustCode)
  const actionsMethod = actions.map(action => `    ${action}(){  this.update(dispatch(this.state, arguments[0]?{ "${action}" : arguments[0] }: "${action}"))},`).join("\n")    
  return {
    code : `
    import lib from '../Cargo.toml'
    const state = lib.${state}
    const dispatch = lib.${dispatch}
    console.log(lib)
        export default {
            ${actionsMethod}
            onMounted(){
                this.update(state())
            }
        }
    `
  }
})


module.exports = {
  javascript: 'rust'
} 

function writeModuleToFile(module, code) {
    const stream = fs.createWriteStream(`src/autogenerated/${module}.rs`);
    stream.once('open', function(fd) {
        stream.write(code);
        stream.end();
    });
}
function appendModuleToLib(module) {
    const stream = fs.createWriteStream(`src/autogenerated/mod.rs`, {flags: 'a'});
    stream.once('open', function(fd) {
        stream.write(`\nmod ${module};`);
        stream.end();
    });
}


