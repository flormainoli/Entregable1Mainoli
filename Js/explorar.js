// El array 'cafes' y función 'visualizarCafes' se cargan desde practice.js
visualizarCafes(cafes);
const buscador = document.querySelector("#searchbar");

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const cafesFiltrados = cafes.filter(cafe => cafe.nombre.toLowerCase().includes(texto));
   if (cafesFiltrados.length === 0) {
    document.getElementById("contenedor-cafes").innerHTML =
      `<p class="text-center mt-4"> No se encontraron cafeterías con ese nombre</p>`;
  } else {
    visualizarCafes(cafesFiltrados);
  }
});
