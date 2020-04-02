const express = require('express');
const canadianDollarParser = require('../NodeInActionModule/index');

const app = express();

app.get('/',(request,response)=>{

    response.send('Deu tudo certo!');

});

app.get('/canadian',(request,response)=>{

    response.send(canadianDollarParser.canadianToUs(10));

});

app.get('/us',(request,response)=>{

    response.send(canadianDollarParser.UsToCanadian(10));

});

app.listen(8080,()=>{

    console.log('Servidor iniciado na porta 8080');
    

});