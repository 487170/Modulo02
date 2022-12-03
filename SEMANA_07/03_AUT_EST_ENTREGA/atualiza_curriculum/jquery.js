$('#btn').on("click", deletar)

function deletar(){
    $('.hr_08').remove()
    $('.font').remove()
}

$('#btn2').on("click", excluir)

function excluir(){
    $('.fotominha').remove()
}

$('#btn3').on('click', mudarcor)

function mudarcor(){
    $('body').css("color","rgb(0, 153, 41)")
    $('.container').css("box-shadow"," 0 0 5px rgb(0, 153, 41)")
    $('#btn').css("color","rgb(0, 153, 41)")
    $('#btn2').css("color","rgb(0, 153, 41)")
    $('#btn3').css("color","rgb(0, 153, 41)")
    
}

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("descubraProjeto").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ATVS7.txt");
    xhttp.send();
  }