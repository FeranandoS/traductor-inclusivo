function hablar(){

let texto=document.getElementById("texto").value;

let voz=new SpeechSynthesisUtterance(texto);

speechSynthesis.speak(voz);

}

function voz(){

let reconocimiento=new webkitSpeechRecognition();

reconocimiento.lang="es-ES";

reconocimiento.start();

reconocimiento.onresult=function(event){

document.getElementById("resultado").innerHTML=

event.results[0][0].transcript;

};

}

function modo(){

document.body.classList.toggle("light");

}