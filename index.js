const express = require('express');
const app = express();
app.use(express.json());

var lista = [{
    id: '1',
    nombre: 'Oliver'

}, {
    id: '2',
    nombre: 'Garcia'
}];

//programación del web service type:GET
app.get('/nombre', (req, res) => {
    res.json(lista);
});

app.get('/suma', (req, res) => {
    let resultado=1+5;
    res.send(`${resultado}`);
});

app.get('/sumaparametros', (req, res) => {
    const query=req.query;
    let num1=parseInt(query.num1);
    let num2=parseInt(query.num2);
    
    let resultado=num1+num2;
    res.send(`${resultado}`);
});

//llamada al puerto por defecto de node 3000
app.listen(3000, () => {
    console.log('Escuchando a través del puerto 3000')
});