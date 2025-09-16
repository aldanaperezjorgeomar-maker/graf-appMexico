// Elementos
const greenStripe = document.getElementById("green-stripe");
const whiteStripe = document.getElementById("white-stripe");
const redStripe = document.getElementById("red-stripe");

const greenRange = document.getElementById("greenRange");
const whiteRange = document.getElementById("whiteRange");
const redRange = document.getElementById("redRange");

const greenHex = document.getElementById("greenHex");
const whiteHex = document.getElementById("whiteHex");
const redHex = document.getElementById("redHex");

// Función para convertir valor a HEX
function toHex(c) {
  let hex = Number(c).toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

// Función para actualizar colores
function updateColors() {
  // Verde (afecta componente G)
  let g = parseInt(greenRange.value);
  let greenColor = `#00${toHex(g)}00`;
  greenStripe.style.background = greenColor;
  greenHex.textContent = greenColor.toUpperCase();

  // Blanco (gris en escala)
  let w = parseInt(whiteRange.value);
  let whiteColor = `#${toHex(w)}${toHex(w)}${toHex(w)}`;
  whiteStripe.style.background = whiteColor;
  whiteHex.textContent = whiteColor.toUpperCase();

  // Rojo (afecta componente R)
  let r = parseInt(redRange.value);
  let redColor = `#${toHex(r)}0000`;
  redStripe.style.background = redColor;
  redHex.textContent = redColor.toUpperCase();
}

// Eventos
greenRange.addEventListener("input", updateColors);
whiteRange.addEventListener("input", updateColors);
redRange.addEventListener("input", updateColors);

// Inicializar
updateColors();
