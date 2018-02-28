var urljson = 'https://cdn.rawgit.com/aliciaciudad4/datajson/42999d58/preguntas.json';
var request = new XMLHttpRequest();
var preguntas;
request.open('GET', urljson);
request.responseType = 'json';
request.send();

request.onload = function() {
  preguntas = request.response;
  console.log(preguntas)
}
var nota = 0;

window.onload = function(){

 //CORREGIR al apretar el botón
 formElement=document.getElementById('formulario'); //recoge el elemento formulario por el id formulario
 formElement.onsubmit=function(){ //con el formulario capturado, tenemos el evento onsubmit que ejecuta funciones
  console.log("Form enviado");
  var indice = 0;
  var contadorpreguntas = 1;
  var valoresusuario = [];


  for (var i = 0; i< formElement.elements.length; i++){//recorremos todos los elementos del formulario
      console.log("Recorriendo elementos del form" + formElement.elements.length);
      console.log("elemento numero " +i);
    if(formElement.elements[i].name == contadorpreguntas ) { //si el name del campo de formulario es igual al contado se introducirá el valor en un arreglo. De este modo recorremos  todos los campos  pero los de pregunta que tienen el name de 1 al 10 los almacenamos.
      valoresusuario[indice] = formElement.elements[i].value; //guardamos el valor de la selección del usuario para tener todas sus respuesta y posteriomente compararlas.
      console.log("Valores del usuario guardados en array el valor es " + valoresusuario[indice]);
      contadorpreguntas++;
      indice++;
    }
  }
  for (var i = 0; i< valoresusuario.length; i++){
    console.log(valoresusuario[i].value);
  }

  var correctas = [];
  for (var i = 0; i< preguntas.length; i++){
    if(valoresusuario[i] == preguntas[i].respuesta) {
      nota = nota + 1;
      console.log('La pregunta ' + preguntas[i].pregunta + ' es correcta y ha seleccionado el valor :' + valoresusuario[i]  );
      correctas[i] = 'si';
    }else {
      correctas[i]= 'no';
            console.log('La pregunta ' + preguntas[i].pregunta + ' NO es correcta y ha seleccionado el valor :' + valoresusuario[i]  );
    }
  }

  console.log(nota);
   /*inicializar();
   if (comprobar()){
    corregirNumber();
    corregirSelect();
    corregirCheckbox();
    presentarNota();*/
   }
   return false;
 }
