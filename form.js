// Obtener referencias a los elementos
const showModalBtn = document.getElementById("showModalBtn");
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Mostrar el modal cuando se hace clic en el botón
showModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Ocultar el modal cuando se hace clic en la "X"
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Ocultar el modal si se hace clic fuera de él
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
