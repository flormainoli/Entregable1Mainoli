let cafes = [];
fetch("../Js/cafes.json") 
  .then(response => response.json())
  .then(data => {

    cafes = data;
    visualizarCafes(cafes, "contenedor-cafes", "../img/");

    const buscador = document.querySelector("#searchbar");

    buscador.addEventListener("input", () => {
      const texto = buscador.value.toLowerCase();

      const cafesFiltrados = cafes.filter(cafe =>
        cafe.nombre.toLowerCase().includes(texto)
      );

      if (cafesFiltrados.length === 0) {
        document.getElementById("contenedor-cafes").innerHTML =
          `<p class="text-center mt-4">No se encontraron cafeterías</p>`;
      } else {
        visualizarCafes(cafesFiltrados);
      }
    });

  })
  .catch(error => console.error("Error:", error));