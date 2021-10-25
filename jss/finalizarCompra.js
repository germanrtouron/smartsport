//---------------------------------------------------------
//------------------SALUDO AL USUARIO----------------------
//---------------------------------------------------------
let gracias = $("#graciasElement");
let usuario = "";
let nombreUsuario = sessionStorage.getItem("usuario");
usuario = nombreUsuario;
if (usuario != null)
    gracias[0].innerHTML = `¡Muchas gracias por elegirnos, ${usuario}!`;
//---------------------------------------------------------
//--------------DE LOCAL STORAGE A VARIABLE----------------
//---------------------------------------------------------
carrito = JSON.parse(localStorage.getItem("carrito"));
precioTotal = 0;
//---------------------------------------------------------
//--------------------FUNCIONES----------------------------
//---------------------------------------------------------
//-----CALCULO DE IMPUESTO
const calcImpuesto = x => x * 0.21;
//---------------------------------------------------------
//----------------CONSTRUYENDO EL DOM----------------------
//---------------------------------------------------------
//-----AGREGANDO ITEMS
for (mostrarCarrito of carrito) {
    $('#itemsCarritoFinalizar').append(`<div class="col items">
                                            <img src="${mostrarCarrito.imagen}">
                                            </img>
                                            <p>Producto: ${mostrarCarrito.nombre}</p>
                                            <p class="items-precio">Precio: $${mostrarCarrito.precio}</p>
                                        </div>`);
    precioTotal = precioTotal + mostrarCarrito.precio;
}
//-----AGREGANDO PRECIO TOTAL
$('#totalCarritoFinalizar').append(`<p>Total: $${precioTotal}</p>`);
//-----AGREGANDO EL IMPUESTO
let impuesto = calcImpuesto(precioTotal);
let precioTotalConImpuesto = impuesto + precioTotal;
$('#totalCarritoFinalizar').append(`<p>Total C/IVA: $${precioTotalConImpuesto}</p>`);
//---------------------------------------------------------
//----------------------BOTONES----------------------------
//---------------------------------------------------------
//-----BOTON CONTINUAR DEL RESUMEN CARRITO
$("#btnFinalizarCompra").click(() => { 
    location.href="entrega.html";
});
//-----BOTON VACIAR Y VOLVER DEL RESUMEN CARRITO
$("#btnVaciarVolver").click(() => { 
    location.href="../html/productos.html";
});
//-----BOTON SUBMIT DEL FORMULARIO ENTREGA
$("#formEntrega").submit (function (e) {
    e.preventDefault();
    //-----MODAL ERROR DEL FORMULARIO ENTREGA
    let modal = $("#modal-error-entrega")[0];
    let btnModal = $(".modal-cerrar")[0];
    btnModal.onclick = function() {
    modal.style.display = "none";
    }
    let input = $(":input");
    let chkForm = $(":input")[11];
    //-----VALIDACION CHECK
    if (chkForm.checked == false) {
        $(".modal-entrega-mensaje")[0].innerHTML = `<span>Habilitado para mayores de 18 años</span>`
        modal.style.display = "block";
    }
    //-----VALIDACION INPUT
    else if (input[1, 2, 4, 5, 6, 7, 8, 9].value == "") {
        $(".modal-entrega-mensaje")[0].innerHTML = `<span>Por favor, complete los campos obligatorios de entrega</span>
                                                    <span class="campoObligatorio">*</span>`
        modal.style.display = "block";
    } else {
        location.href = "../html/pago.html";
    }
})
