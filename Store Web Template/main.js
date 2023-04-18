// Obtener el bot�n "Agregar al carrito"
const addToCartBtn = document.getElementById("add-to-cart-btn");

// Agregar un evento "click" al bot�n "Agregar al carrito"
addToCartBtn.addEventListener("click", addToCart);

// Funci�n que se ejecuta cuando se hace clic en el bot�n "Agregar al carrito"
function addToCart() {
    // Obtener el ID del producto seleccionado
    const productId = document.getElementById("product-id").value;

    // Obtener la cantidad seleccionada del producto
    const quantity = document.getElementById("product-quantity").value;

    // Realizar una solicitud a la API para agregar el producto al carrito
    fetch(`/api/cart/add/${productId}/${quantity}`, {
        method: "POST",
    })
        .then(response => {
            if (response.ok) {
                // Si la respuesta es exitosa, mostrar un mensaje al usuario
                alert("Producto agregado al carrito correctamente.");
            } else {
                // Si la respuesta no es exitosa, mostrar un mensaje de error al usuario
                alert("Error al agregar el producto al carrito.");
            }
        })
        .catch(error => {
            // Si ocurre un error, mostrar un mensaje de error al usuario
            alert("Error al agregar el producto al carrito.");
        });
}

// Funci�n que se ejecuta cuando se carga la p�gina
function init() {
    // ...
}

// Llamar a la funci�n "init" cuando se carga la p�gina
window.addEventListener("load", init);
