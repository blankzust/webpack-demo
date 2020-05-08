// 静态资源服务器
var http = require('http')
var url = require('url')
var fs = require("fs")
http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log(pathname)
  fs.readFile(`./${pathname}`, function(err, data) {
    res.end(data);
  })
}).listen(8085, "127.0.0.1")