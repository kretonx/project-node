const http = require('http');

const server = http.createServer((req, res) => {
  console.log("Requisição recebida");
  res.write('Servidor Node rodando!');
  res.end();
});

server.listen(3000, () => {
  console.log('Servidor escutando na porta 3000');
});
