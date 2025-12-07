const calculadora = document.querySelector(".calculadora");
const botones = document.querySelectorAll("button");
const pantalla = document.getElementById("pantalla");
pantalla.value = "0";

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;
    if (botonApretado === "AC") {
      pantalla.value = "0";
      return;
    }
    if (botonApretado === "DE") {
      if (pantalla.value.length === 1) {
        pantalla.value = "0";
      } else {
        pantalla.value = pantalla.value.slice(0, -1);
      }
      return;
    }
    if (botonApretado === "=") {
      try {
        pantalla.value = Function(
          '"use strict"; return (' + pantalla.value + ")"
        )();
      } catch {
        pantalla.value = "Error";
      }
      return;
    }
    if (pantalla.value === "0") {
      pantalla.value = botonApretado;
    } else {
      pantalla.value += botonApretado;
    }
  });
});
