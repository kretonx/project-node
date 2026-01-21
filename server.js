const http = require('http');
const tickets = [];
const { json } = require('stream/consumers');

const server = http.createServer((req, res)=>{
  console.log('METHOD:', req.method);
  console.log('URL:', JSON.stringify(req.url));

  let body = '';

  req.on('data', chunk =>{
    body += chunk;
  });

  req.on('end', () =>{
    if(req.url === '/tickets'&& req.method === 'POST'){
      const data = JSON.parse(body);

      const ticket = {
        id: tickets.length + 1,
        title: data.title,
        description: data.description,
        status: 'open',
        createdAt: new Date().toISOString()
      };

      tickets.push(ticket);

      res.writeHead(201, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(ticket));
      return;
    }

  

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
if (req.url.startsWith('/tickets/') && req.method === 'PUT') {
  const id = Number(req.url.split('/')[2]);
  const data = JSON.parse(body);
  
  if (!data.title || !data.description) {
  res.writeHead(400, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'title and description are required' }));
  return;
}


  const ticket = tickets.find(t => t.id === id);

  if (!ticket) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'ticket not found' }));
    return;
  }

  ticket.status = data.status;

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(ticket));
  return;
} if (req.url.startsWith('/tickets/') && req.method === 'PUT') {
  const id = Number(req.url.split('/')[2]);
  const data = JSON.parse(body);

  const ticket = tickets.find(t => t.id === id);

  if (!ticket) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'ticket not found' }));
    return;
  }

  ticket.status = data.status;

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(ticket));
  return;
}



  res.writeHead(404, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({error: 'rota nao encontrada'}));
})
});


server.listen(3000, () => {
  console.log('Servidor escutando na porta 3000');
});
