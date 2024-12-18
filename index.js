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
    res.send(`El resultado es: ${resultado}`);
});

app.get('/sumaparametros', (req, res) => {
    const query=req.query;
    let num1=parseInt(query.num1);
    let num2=parseInt(query.num2);
    
    let resultado=num1+num2;
    res.send(`El resultado es: ${resultado}`);
});

app.get('/cuadrado', (req, res) => {
    const query=req.query;
    let num1=parseInt(query.num1);

    let area=num1*num1;
    let perimetro=num1*4;
    
    let resultado=`Area del cuadrado es ${area}\nPerimetro del cuadrado es ${perimetro}`;
    res.send(`${resultado}`);
});

app.get('/rombo', (req, res) => {
    const query=req.query;
    let lado=parseInt(query.lado);
    let Dmayor=parseInt(query.Dmayor);
    let Dmenor=parseInt(query.Dmenor);

    let area=Dmayor*Dmenor;
    let perimetro=lado*4;
    
    let resultado=`Area del rombo es ${area}\nPerimetro del rombo es ${perimetro}`;
    res.send(`${resultado}`);
});

app.get('/trapecio', (req, res) => {
    const query=req.query;
    let altura=parseInt(query.altura);
    let base1=parseInt(query.base1);
    let lado=parseInt(query.lado);
    let base2=parseInt(query.base2);

    let bases=base1+base2;
    bases=bases*altura;

    let area=bases/2;

    let perimetro=lado+base1+base2;
    
    let resultado=`Area del rombo es ${area}\nPerimetro del rombo es ${perimetro}`;
    res.send(`${resultado}`);
});

//llamada al puerto por defecto de node 3000
app.listen(3000, () => {
    console.log('Escuchando a través del puerto 3000')
});