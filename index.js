const express = require('express');

const app = express();

app.get('/',(request,response)=>{

    response.send('Deu tudo certo!');

});

app.listen(8080,()=>{

    console.log('Servidor iniciado na porta 8080');
    

});