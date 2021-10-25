const userNameElement = document.getElementById("inputNombre");
const userEmailElement = document.getElementById("inputEmail");
const btnUserAccept = document.getElementById("btnUserAccept");
let saludo = document.getElementById("saludoElement");
let usuario = "";
let nombreUsuario = sessionStorage.getItem("usuario");
usuario = nombreUsuario;

if (usuario != null && saludo) {
    saludo.innerHTML = `<h4>¡Bienvenido, ${usuario}!</h4>`;
}
btnUserAccept.onclick = () => {
    sessionStorage.setItem("usuario", userNameElement.value);
    sessionStorage.setItem("email", userEmailElement.value);
    usuario = userNameElement.value;
    saludo.innerHTML = `<h4>¡Bienvenido, ${usuario}!</h4>`;
}