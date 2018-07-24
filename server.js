const http = require('http');
const express = require('express');
var port = process.env.PORT || 8080
const app = express();
const clientPath = `${__dirname}`
console.log(`server started from ${clientPath}`);
app.use(express.static(clientPath));
const server = http.createServer(app);

app.get("/",function(req, res){
  res.render(clientPath + 'index.html');
});

server.on('error', (err) => {
  console.error('Server error: ', err);
});
server.listen(port,() => {
  console.log('Server has started correctly');
});
