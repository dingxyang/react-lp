// server.js

const http = require('http')
const port = 7000;

http.createServer(function (req, res) {
  // 开启Cors
  res.writeHead(200, {
    //设置允许跨域的域名，也可设置*允许所有域名
    'Access-Control-Allow-Origin': '*',
    //跨域允许的请求方法，也可设置*允许所有方法
    "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
    //允许的header类型
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  let list = []
  let num = 0

  // 生成10万条数据的list
  for (let i = 0; i < 100000; i++) {
    num++
    list.push({
      src: 'https://raw.githubusercontent.com/dingxyang/images/master/img20220828144600.jpg',
      text: `序号：${num}`,
      tid: num
    })
  }
  res.end(JSON.stringify(list));
}).listen(port, function () {
  console.log('server is listening on port ' + port);
})