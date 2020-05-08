const marked = require('marked')

module.exports = src => {
  const htmlStr = marked(src);
  console.log(htmlStr)
  return htmlStr;
}