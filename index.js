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
    
    let resultado=`Area del cuadrado es ${area}\n Perimetro del cuadrado es ${perimetro}`;
    res.send(`${resultado}`);
});

app.get('/rombo', (req, res) => {
    const query=req.query;
    let lado=parseInt(query.lado);
    let Dmayor=parseInt(query.Dmayor);
    let Dmenor=parseInt(query.Dmenor);

    let area=Dmayor*Dmenor;
    let perimetro=lado*4;
    
    let resultado=`Area del rombo es ${area}\n Perimetro del rombo es ${perimetro}`;
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

    let perimetro=lado+lado+base1+base2;
    
    let resultado=`Area del rombo es ${area}\n Perimetro del rombo es ${perimetro}`;
    res.send(`${resultado}`);
});

app.get('/trinomio', (req, res) => {
    const query=req.query;
    let val1=parseInt(query.val1);
    let val2=parseInt(query.val2);

    let term1=val1*val1;
    let term2=2*val1*val2;
    let term3=val2*val2;

    let resultado1=`${val1}^2+2(${val1})(${val2})+${val2}^2`
    let resultado2=term1+"+"+term2+"+"+term3;
    let resultado3=term1+term2+term3;
    res.send(`El primer resultado: ${resultado1} segundo resultado: ${resultado2} tercer resultado: ${resultado3}`);
});

app.get('/trinomioEjercicio', (req, res) => {
    const query=req.query;
    let trinomio=query.trin;

    trinomio = trinomio.replace(/\s+/g, '');
    const regex = /^(-?\d*)x\^2([+-]\d+)x([+-]\d+)$/;
    const match = trinomio.match(regex);

    // Extraer coeficientes
    const a = parseInt(match[1] || '1', 10);
    const b = parseInt(match[2], 10);
    const c = parseInt(match[3], 10);

    // Verificar si es un trinomio cuadrado perfecto
    if (4 * a * c === b * b) {
        const factor = `${Math.sign(a) === -1 ? '-' : ''}${Math.sqrt(Math.abs(a))}x ${b / (2 * a) >= 0 ? '+' : '-'} ${Math.sqrt(Math.abs(c))}`;
        res.send(`(${factor})^2`);
    } 
});

//llamada al puerto por defecto de node 3000
app.listen(3000, () => {
    console.log('Escuchando a través del puerto 3000')
});

