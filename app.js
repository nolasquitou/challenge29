let carrito = [];
let tienda = ["gaseosa", "cervesa", "speed", "vino", "agua"];

document.write(`Tienda: <br> ${tienda.join(" - ")}`);

const mostrarCarrito = () => {
    alert(carrito.join(" - "))
}

const agregarProduct = () => {
    let producto = prompt("Que elemento quiere agregar al carrito").toLowerCase()
    if (tienda.includes(producto)) {
        carrito.push(producto)
        alert("Producto agregado exitosamente")
        return producto
    } else {
        alert("Producto no encontrado")
    }
}

const buscarProduct = () => {
    let producto = prompt("Que producto desea buscar en el carrito").toLowerCase()
    if (carrito.includes(producto)) {
        alert("este producto ya existe en el carrito")
    } else {
        alert("este producto no esta en el carrito")
    }
}

const deleteProducto = () => {
    let producto = prompt("Que producto desea eliminar en el carrito").toLowerCase()
    if (carrito.includes(producto)) {
        let position = carrito.indexOf(producto)
        carrito.splice(position, 1)
        alert("Producto eliminado exitosamente")
    } else {
        alert("Este Producto no existe en tu carrito")
    }
}

const buscarCoincidencias = () => {
    const buscar = prompt("buscar producto").toLowerCase();
    const resultado = tienda.filter(bebidas => bebidas.includes(buscar));
    alert(resultado)
}