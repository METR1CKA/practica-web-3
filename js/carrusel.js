// Obtener referencias a los elementos del carrusel
const carrusel = document.querySelector('.carrusel');
const slides = Array.from(carrusel.children);

// Configurar el carrusel
const intervalo = 3000; // Intervalo de tiempo entre cada slide (en milisegundos)
let slideActual = 0;

// Función para mostrar el siguiente slide
function mostrarSiguienteSlide() {
  // Ocultar el slide actual
  slides[slideActual].classList.remove('activo');

  // Calcular el índice del siguiente slide
  slideActual = (slideActual + 1) % slides.length;

  // Mostrar el siguiente slide
  slides[slideActual].classList.add('activo');
}

// Iniciar el carrusel
setInterval(mostrarSiguienteSlide, intervalo);
