//importar datos de cafes
let cafe = [];
fetch("Js/cafes.json")
  .then(response => response.json())
  .then(data => {
    cafe = data;
     cafeQuiz = data;
    const cafesDestacados = cafe
      .sort((a, b) => b.estrellas - a.estrellas)
      .slice(0, 3);
    visualizarCafes(cafesDestacados, "cafes-destacados", "img/");
  })
  .catch(error => console.error("Error cargando cafés:", error));

  const agregarCafe = document.getElementById("addCafeBtn");
 const formAgregarCafe = document.getElementById("formAgregarCafe");

if (formAgregarCafe) {
  formAgregarCafe.addEventListener("submit", (e) => {
    e.preventDefault();

    const nuevoCafe = {
      nombre: document.getElementById("nombreCafe").value,
      descripcion: document.getElementById("descripcionCafe").value,
      platoDestacado: document.getElementById("platoCafe").value,
      coffee: document.getElementById("tipoCafe").value,
      estrellas: parseFloat(document.getElementById("estrellasCafe").value),
      fechaPropuesta: new Date().toISOString(),
    };

    const propuestasGuardadas =
      JSON.parse(localStorage.getItem("propuestasCafes")) || [];
    propuestasGuardadas.push(nuevoCafe);
    localStorage.setItem("propuestasCafes", JSON.stringify(propuestasGuardadas));
    formAgregarCafe.reset();
    bootstrap.Modal.getInstance(
      document.getElementById("modalAgregarCafe")
    ).hide();
  // notificación
  Toastify({
    text: "☕ ¡Gracias! Tu cafetería fue enviada para revisión.",
    duration: 3500,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #6f4e37, #c4a484)"
    }
  }).showToast(); });
};
localStorage.getItem("propuestasCafes")
JSON.parse(localStorage.getItem("propuestasCafes"));