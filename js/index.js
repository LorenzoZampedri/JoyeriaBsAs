const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaJoya = document.createElement("div");
    nuevaJoya.classList = "tarjeta-producto"
    nuevaJoya.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Joya 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaJoya);
    nuevaJoya.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(joyas);