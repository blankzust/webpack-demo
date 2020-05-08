const marked = require('marked')

module.exports = src => {
  const htmlStr = marked(src);
  const code = `export default ${JSON.stringify(htmlStr)}`
  return code;
}