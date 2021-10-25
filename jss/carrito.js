//---------------------------------------------------------
//---------------------VARIABLES---------------------------
//---------------------------------------------------------
//-----VARIABLE PRECIO TOTAL DE CARRITO
totalSuma = 0;
idDivCarritoElement = 100;
//-------------ELEMENTOS DEL DOM---------
//-----TEXTO "CARRITO VACIO" DEL CARRITO
carritoVacio = document.getElementById("carritoVacio");
//-----DIV DONDE SE ENLISTAN LOS ITEMS DEL CARRITO
popupItems = document.getElementById("popupItems");
//-----ELEMENTOS DEL TOTAL DEL CARRITO
totalCarritoElement = document.getElementById("totalCarrito");
resultadoTotalCarritoElement = document.getElementById("resultadoTotalCarrito");
//-----ARRAY CARRITO
carrito = [];
//---------------------------------------------------------
//---------------------FUNCIONES---------------------------
//---------------------------------------------------------
//-----FUNCION GUARDADO DEL CARRITO EN LOCAL STORAGE
function guardarCarrito () {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
//-----FUNCION SUMAR PRECIOS AL CARRITO
const sumarPrecio = x => totalSuma = totalSuma + x;
//-----FUNCION RENDER TOTAL SUMA DEL CARRITO
function renderTotalSuma () {
    resultadoTotalCarritoElement.innerHTML = "$" + totalSuma;
}
//-----FUNCION MODIFICAR CANTIDAD DE PRODUCTOS EN CARRITO
function renderCantidad (x) {
    item = document.getElementById(`item-${x.id}`);
    cantidad = parseInt(item.children[3].innerHTML.slice(10));
    cantidad += 1;
    item.children[3].innerHTML = `Cantidad: ${cantidad}`;
}
//-----RENDERIZADO DEL CARRITO SI EXISTE EN LOCAL STORAGE
function renderCarro () {
    let localCarrito = localStorage.getItem("carrito");
    if (localCarrito != null) {
        carrito = JSON.parse(localCarrito);    
        for (x of carrito) {
            sumarPrecio(x.precio);
            renderTotalSuma();
            if ($(`#item-${x.id}`).length == 0) {
                agregarCarrito(x);
                renderBtnCarrito();
            } else {
               renderCantidad(x);
            }
        }
    }
}
renderCarro();
//-----FUNCION RENDERIZADO CARRITO VACIO
function renderCarritoVacio () {
    carritoVacio.style.display = "block";
    totalCarritoElement.style.display = "none";
    btnVaciarCarrito.style.display = "none";
    btnComprarCarrito.style.display = "none";
}
//-----FUNCION RENDERIZADO BOTONES DEL CARRITO CON ITEMS
function renderBtnCarrito () {
    carritoVacio.style.display = "none";
    totalCarritoElement.style.display = "flex";
    totalCarritoElement.style.flexDirection = "row";
    totalCarritoElement.style.justifyContent = "space-evenly";
    btnVaciarCarrito.style.display = "block";
    btnComprarCarrito.style.display = "block";
}
//-----FUNCION SUMAR ITEMS AL CARRITO
function agregarCarrito (x) {
    if ($(`#item-${x.id}`).length == 0) {
        let contenedor = document.createElement("div");
        contenedor.setAttribute("id", `item-${x.id}`);
        contenedor.setAttribute("class", "popup-prod");
        popupItems.appendChild(contenedor);
        let cerrar = document.createElement("i");
        cerrar.innerHTML = `<i class="fas fa-window-close modal-cerrar" onclick=eliminarItemCarrito(${x.id})></i>`;
        contenedor.appendChild(cerrar);
        let imagen = document.createElement("img");
        imagen.setAttribute("class", "popup-img");
        imagen.src = x.imagen;
        contenedor.appendChild(imagen);
        let producto = document.createElement("p");
        producto.innerHTML = `${x.nombre}`;
        contenedor.appendChild(producto);
        let cantidad = document.createElement("p");
        cantidad.innerHTML = `Cantidad: 1`;
        contenedor.appendChild(cantidad);
        let precio = document.createElement("p");
        precio.innerHTML = `Precio: $${x.precio}`;
        precio.style.fontWeight = 600;
        contenedor.appendChild(precio);

    } else {
        renderCantidad(x);
    }
}
//-----FUNCION VACIAR CARRITO
function vaciarCarrito () {
    carrito = [];
    totalSuma = 0;
    popupItems.parentNode.removeChild(popupItems);
    let items = document.createElement("div");
    items.setAttribute("id", "popupItems");
    popupItems = items;
    popupCont.appendChild(items);
    renderCarritoVacio();
    localStorage.removeItem("carrito");
}
//-----FUNCION ELIMINAR ITEM DEL CARRITO
function eliminarItemCarrito (x) {
    if (popupItems.childElementCount == 1) {
        vaciarCarrito();
    } else {
        item = document.getElementById(`item-${x}`);
        item.parentNode.removeChild(item);
        for (carro of carrito) {
        carrito.filter(function(carro) {
            if (carro.id == x) {
                carrito = carrito.filter(function(carro) {
                    return carro.id !== x; 
                });
                totalSuma = totalSuma - carro.precio;
            }
        });
        }
        guardarCarrito();
        renderTotalSuma();
    }
}
//---------------------------------------------------------
//------------------EVENTOS DE BOTONES---------------------
//---------------------------------------------------------
//-----BOTON VACIAR CARRITO COMPLETO
btnVaciarCarrito.onclick = () => {
    vaciarCarrito();
}
//-----BOTON COMPRAR CARRITO
btnComprarCarrito.onclick = () => {
    const carritoJson = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJson);
    location.href = "resumenCarrito.html";
}
//---------------------------------------------------------
//------------------COMPRAR CARRITO------------------------
//---------------------------------------------------------
//-----AGREGAR AL CARRITO
function btnClickAgregar(x) {
    sumarPrecio(misDatos[x].precio);
    agregarCarrito(misDatos[x]);
    carrito.push(misDatos[x]);
    guardarCarrito();
    renderTotalSuma();
    renderBtnCarrito();
};