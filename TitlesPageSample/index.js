const express = require('express');
const fs = require('fs');
const app = express();

app.get('/',(request,response)=>{

    const html = renderTitles(getTitles());

    if(html){

        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(html);

    } else {

        response.send('Server Error');

    }

});

app.listen(8080,()=>{
    console.log('Servidor iniciado');
    
});

function getTitles(){

    fs.readFile('./titles.json',(err,data)=>{

        if(err){
            console.log(err);            
            return null;
        } else{
            const titles = JSON.parse(data.toString());
            return titles;
        }

    });
}

function renderTitles(titles){

    fs.readFile('./template.html',(err,data)=>{

        if(err || titles === null){

            console.log(err);
            console.log(titles);            

        } else {

            const template = data.toString();
            const html = template.replace('%',titles.join('<li></li>'));
            
        }

    });

}
