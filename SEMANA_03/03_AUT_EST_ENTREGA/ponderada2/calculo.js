function calculaVel0(){
    var vel0 = parseFloat (document.getElementById('V0').value);
    document.getElementById('saida').innerHTML = vel0 / 10;
}

function calculaHmax(){
    var vel0 = parseFloat (document.getElementById('V0').value);
    document.getElementById('resultado').innerHTML = (vel0*vel0) / (2*10);
}

function calculaXv(){
    var va = parseFloat (document.getElementById('a').value);
    var vb = parseFloat (document.getElementById('b').value);
    document.getElementById('resultadoYv').innerHTML = (-(vb/(2*va)));
}

function calculaYv(){
    var va = parseFloat (document.getElementById('a').value);
    var vb = parseFloat (document.getElementById('b').value);
    var vc = parseFloat (document.getElementById('c').value);
    document.getElementById('resultadoYv').innerHTML = (((((-vb*(-vb))-4*(va*vc))/(4*va))));
}

function changeToCelcius(){
    var tf = parseFloat (document.getElementById('temperatura').value);
    document.getElementById('resultadoT').innerHTML = (((tf-32) / 9)*5);
}

function changeToFahrenheit(){
    var tc = parseFloat (document.getElementById('temperatura').value);
    document.getElementById('resultadoT').innerHTML = ((tc/5)*9+32);
}
    
function totalPagar(){
    var Kwh = parseFloat (document.getElementById('Kwh').value);
    var valorKwh = parseFloat (document.getElementById('valorKwh').value);
    var resultado = (Kwh * valorKwh)
    //document.getElementById('resultadoConta').innerHTML = (Kwh * valorKwh);
    if(Kwh > 100 && Kwh < 200){
        var resultado = (resultado + (resultado*0.25));
        document.getElementById('resultadoConta').innerHTML = resultado;
    }else if(Kwh > 200){
       var resultado = (resultado + (resultado*0.50));
        document.getElementById('resultadoConta').innerHTML = resultado;
    }else{
        var resultado = resultado;
        document.getElementById('resultadoConta').innerHTML = resultado;
    }

}
