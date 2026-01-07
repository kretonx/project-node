const http = require('http');
const { json } = require('stream/consumers');

const server = http.createServer((req, res)=>{
  console.log(req.method, req.url);
  if (req.url === 'health' && req.method === 'GET'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({status: 'ok'}));
    return;
  }
  if (req.url === '/tickets' && req.method === 'GET') {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    tickets: [],
    message: 'nenhum ticket criado ainda'
  }));
  return;
}
  res.writeHead(404, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({error: 'rota nao encontrada'}));
})



server.listen(3000, () => {
  console.log('Servidor escutando na porta 3000');
});
