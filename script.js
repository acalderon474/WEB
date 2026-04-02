// 1. Seleccionamos los elementos del DOM (el HTML)
const cartCountElement = document.getElementById('cart-count');
const ctaButton = document.querySelector('.btn-cta');

// 2. Creamos una variable para llevar la cuenta
let totalProducts = 0;

// 3. Agregamos un "escuchador de eventos" al botón
ctaButton.addEventListener('click', (event) => {
    // Evitamos que el enlace recargue la página
    event.preventDefault();

    // Aumentamos el contador
    totalProducts++;

    // Actualizamos el texto en el HTML
    cartCountElement.innerText = totalProducts;

    // Un pequeño efecto visual: cambiar el color del contador temporalmente
    cartCountElement.style.color = "#38bdf8";
    cartCountElement.style.fontWeight = "bold";

    // Mostramos un mensaje en la consola (puedes verlo con F12)
    console.log(`Producto agregado. Total: ${totalProducts}`);
    
    alert("¡Producto añadido al carrito de CeluMarket! 🚀");
});