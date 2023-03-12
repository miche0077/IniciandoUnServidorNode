const express = require('express');
const app = express()
app.use(express.json());



app.get('/', (req, res)=>{
    res.send('<h1>My First Server!</h1>')
})

//exercicio 4  
app.get('/envia/:name', (request, response) => {
    let name = request.params.name;
    response.send(`Rota de API criada pelo: ${name}`);
    console.log(`Rota de API criada pelo: ${name}`);
});

//exercicio 5
app.post('/enviaObjeto', (request, response) => {
    const object = request.body;
    response.json();
    console.log(`Enviado com sucesso ${JSON.stringify(object)}`);
});

app.listen(3000, ()=>{
    console.log('Init Server!')
})
