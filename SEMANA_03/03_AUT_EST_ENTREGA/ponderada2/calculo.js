function calculaVel0(){
    var vel0 = parseFloat (document.getElementById('V0').value);
    document.getElementById('saida').innerHTML = "Resultado: " + (vel0 / 10) + "s" ;
}

function calculaHmax(){
    var vel0 = parseFloat (document.getElementById('V0').value);
    document.getElementById('resultado').innerHTML = "Resultado: " + (vel0*vel0) / (2*10) + "m";
}

function calculaXv(){
    var va = parseFloat (document.getElementById('a').value);
    var vb = parseFloat (document.getElementById('b').value);
    document.getElementById('resultadoXv').innerHTML = "Resultado: " + (-(vb/(2*va)));
}

function calculaYv(){
    var va = parseFloat (document.getElementById('a').value);
    var vb = parseFloat (document.getElementById('b').value);
    var vc = parseFloat (document.getElementById('c').value);
    document.getElementById('resultadoYv').innerHTML = "Resultado: " + (((((-vb*(-vb))-4*(va*vc))/(4*va))));
}

function changeToCelcius(){
    var tf = parseFloat (document.getElementById('temperatura').value);
    document.getElementById('resultadoTc').innerHTML = "Resultado: " + (((tf-32) / 9)*5) + "°C";
}

function changeToFahrenheit(){
    var tc = parseFloat (document.getElementById('temperatura').value);
    document.getElementById('resultadoTf').innerHTML = "Resultado: " + ((tc/5)*9+32) + "°F";
}
    
function totalPagar(){
    var Kwh = parseFloat (document.getElementById('Kwh').value);
    var valorKwh = parseFloat (document.getElementById('valorKwh').value);
    var resultado = (Kwh * valorKwh)
    
    if(Kwh > 100 && Kwh <= 200){
        var resultado = (resultado + (resultado*0.25));
        document.getElementById('resultadoConta').innerHTML = "Total a pagar: " + (resultado);
    }else if(Kwh > 200){
       var resultado = (resultado + (resultado*0.50));
        document.getElementById('resultadoConta').innerHTML = "Total a pagar: " + (resultado);
    }else{
        var resultado = resultado;
        document.getElementById('resultadoConta').innerHTML = "Total a pagar: " + (resultado);
    }

}
