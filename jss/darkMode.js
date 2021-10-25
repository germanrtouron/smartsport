//-----BOTON SWITCH MODO OSCURO
const switchButton = document.getElementById('switch');
//-----CARDS DE PRODUCTOS
let trjProd = document.getElementsByClassName("tarjetaProducto");
//-----VALOR DEL MODO OSCURO
darkModeFlag = localStorage.getItem("darkmode");
window.onload = function() {
darkModeDefault();
}
//-----EVENTO CLICK EN BOTON MODO OSCURO
switchButton.addEventListener('click', () => {
    darkMode();
    if (darkModeFlag == 1) {
        darkModeFlag = 0;
    } else {
        darkModeFlag = 1;
    }
    localStorage.setItem("darkmode", darkModeFlag);
});
//-----FUNCION MODO OSCURO POR DEFAULT
function darkModeDefault () {
    if (darkModeFlag == 1) {
        darkMode();
    }
}
//-----FUNCION MODO OSCURO
function darkMode () {
    let nav = document.getElementsByClassName(`nav`)[0];
    let navProd = document.getElementsByClassName(`nav-prod`)[0];
    let mdalContent = document.getElementsByClassName("modal-content")[0];
    let h1title = document.getElementsByClassName("nav-title")[0];
    let dropdownMenu = document.getElementsByClassName("dropdown-menu");
    let dropdownItem = document.getElementsByClassName("dropdown-item");
    let destacadosIndex = document.getElementsByClassName("tarjetaDestacados");
    document.body.classList.toggle('dark');
    nav.classList.toggle('dark');
    if (navProd) {
    navProd.classList.toggle('dark'); }
    mdalContent.classList.toggle('dark');
    h1title.classList.toggle('dark');
    for (x of trjProd) {
        x.classList.toggle('dark');
    }
    switchButton.classList.toggle('active');
    for (x of dropdownMenu) {
        x.classList.toggle('dark');
    }
    for (x of dropdownItem) {
        x.classList.toggle('dark');
    }
    for (x of destacadosIndex) {
        x.classList.toggle('dark');
    }
}