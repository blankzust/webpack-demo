const marked = require('marked')

module.exports = src => {
  const htmlStr = marked(src);
  const code = `module.exports=${JSON.stringify(htmlStr)}`
  return code;
}