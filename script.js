const form = document.getElementById("formulario");
const notificacao = document.getElementById("notificacao");

form.addEventListener("submit", function(e){

e.preventDefault();

notificacao.innerText = "Mensagem enviada com sucesso! Entrarei em contacto em breve.";

form.reset();

});