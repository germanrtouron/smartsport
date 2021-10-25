//-----JSON DE PRODUCTOS
const PROJSON = "https://germanrtouron.github.io/productos/productos.json";
//-----ARRAY DONDE SE GUARDA EL JSON
let misDatos = [];
//-----RENDER DEL ARRAY EN EL DOM
$.getJSON(PROJSON, function (respuesta, estado) {
    if(estado === "success"){
      misDatos = respuesta;
      for (const dato of misDatos) {
        if (dato.tipo == "zapatillas") {
        $("#zapaContent").append(
            `<div class="tarjetaProducto col">
                <img src="${dato.imagen}" class="tarjetaProducto-img"></img>
                <h4>${dato.nombre}</h4>
                <ul class="tarjetaProducto-lista">
                  <li>${dato.descripcion["horma"]}</li>
                  <li>${dato.descripcion["exterior"]}</li>
                  <li>${dato.descripcion["suela"]}</li>
                  <li>Color: ${dato.descripcion["color"]}</li>
                  <li>Talle: ${dato.descripcion["talle"]}</li>
                  <li>Código: ${dato.descripcion["articulo"]}</li>
                </ul>
                <h5>Precio de lista: $${dato.precio}</h5>
                <button type="button" class="btn btn-dark" onclick=btnClickAgregar(${dato.id})>Agregar al carrito</button>
            </div>`) }
        else if (dato.tipo == "pantalon") {
          $("#pantContent").append(
            `<div class="tarjetaProducto col">
                <img src="${dato.imagen}"></img>
                <h4>${dato.nombre}</h4>
                <ul class="tarjetaProducto-lista">
                  <li>${dato.descripcion["corte"]}</li>
                  <li>${dato.descripcion["cintura"]}</li>
                  <li>${dato.descripcion["material"]}</li>
                  <li>Color: ${dato.descripcion["color"]}</li>
                  <li>Talle: ${dato.descripcion["talle"]}</li>
                  <li>Código: ${dato.descripcion["articulo"]}</li>
                </ul>
                <h5>Precio de lista: $${dato.precio}</h5>
                <button type="button" class="btn btn-dark" onclick=btnClickAgregar(${dato.id})>Agregar al carrito</button>
            </div>`) }
        else if (dato.tipo == "remera") {
          $("#remContent").append(
            `<div class="tarjetaProducto col">
                <img src="${dato.imagen}"></img>
                <h4>${dato.nombre}</h4>
                <ul class="tarjetaProducto-lista">
                  <li>${dato.descripcion["corte"]}</li>
                  <li>${dato.descripcion["cuello"]}</li>
                  <li>${dato.descripcion["material"]}</li>
                  <li>Color: ${dato.descripcion["color"]}</li>
                  <li>Talle: ${dato.descripcion["talle"]}</li>
                  <li>Código: ${dato.descripcion["articulo"]}</li>
                </ul>
                <h5>Precio de lista: $${dato.precio}</h5>
                <button type="button" class="btn btn-dark" onclick=btnClickAgregar(${dato.id})>Agregar al carrito</button>
            </div>`) }
        else if (dato.tipo == "accesorio") {
          $("#acceContent").append(
            `<div class="tarjetaProducto col">
                <img src="${dato.imagen}"></img>
                <h4>${dato.nombre}</h4>
                <ul class="tarjetaProducto-lista">
                  <li>${dato.descripcion["material"]}</li>
                  <li>${dato.descripcion["1"]}</li>
                  <li>${dato.descripcion["2"]}</li>
                  <li>Color: ${dato.descripcion["3"]}</li>
                  <li>Talle: ${dato.descripcion["color"]}</li>
                  <li>Código: ${dato.descripcion["articulo"]}</li>
                </ul>
                <h5>Precio de lista: $${dato.precio}</h5>
                <button type="button" class="btn btn-dark" onclick=btnClickAgregar(${dato.id})>Agregar al carrito</button>
            </div>`) 
        }
      }  
    }
});