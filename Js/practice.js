//Arrays de los Cafes
class Cafe {
  static id = 0;
  constructor( nombre,precio,cafe,trabajar,platoDestacado,petfriendly,ambiente,estrellas,estilo) {
    this.id = Cafe.id++;
    this.nombre = nombre;
    this.precio = precio;
    this.cafe = cafe;
    this.trabajar = trabajar;
    this.platoDestacado = platoDestacado;
    this.petfriendly = petfriendly;
    this.ambiente = ambiente;
    this.estrellas = estrellas;
    this.estilo = estilo;
  }
}
const cafeQuiz = [];
cafeQuiz.push(
  new Cafe("cuervo café", "alto","espresso",false,"salado",true, "concurrido", false,"moderno")
);

cafeQuiz.push(
  new Cafe("úsina cafetera","alto","latte",true,"pasteleria",true,"tranquilo", false, "tradicional"
  )
);
cafeQuiz.push(
  new Cafe("gorrión café","medio","latte",true,"brunch",true,"tranquilo",false,"moderno")
);
cafeQuiz.push(
  new Cafe("pocho café","medio","latte",true,"brunch",true,"tranquilo",false,"moderno"
  )
);
cafeQuiz.push(
  new Cafe("pulso speciality coffe","medio","espresso",true,"salado",true,"tranquilo",false,"tradicional")
);
  cafeQuiz.push(
  new Cafe("deniks","alto","latte",false,"pasteleria",true,"concurrido",true,"moderno")
);
cafeQuiz.push(
  new Cafe("maru botana café","medio","latte",false,"pasteleria",true,"concurrido",false,"tradicional")
);
  cafeQuiz.push(
  new Cafe("stumpy coffee point","bajo","latte", true,"brunch",true,"tranquilo", false,"tradicional")
);
  cafeQuiz.push(
  new Cafe("co-pain","bajo","espresso",true,"pasteleria",true,"tranquilo",false,"tradicional")
);
//Calcular el mejor café según las respuestas del usuario

function calcularMejorCafe(cafeQuiz, respuestasUsuario) {
  const resultados = [];

  for (const cafe of cafeQuiz) {
    let puntaje = 0;

    if (cafe.ambiente === respuestasUsuario.ambiente) puntaje++;
    if (cafe.precio === respuestasUsuario.precio) puntaje++;
    if (cafe.petfriendly === respuestasUsuario.petfriendly) puntaje++;
    if (cafe.estilo === respuestasUsuario.estilo) puntaje++;
    if (cafe.cafe === respuestasUsuario.cafe) puntaje++;
    if (cafe.estrellas === respuestasUsuario.estrellas) puntaje++;
    if (cafe.opcionesComida === respuestasUsuario.opcionesComida) puntaje++;
    if (cafe.platoDestacado === respuestasUsuario.platoDestacado) {puntaje += 2;}

    resultados.push({
      nombre: cafe.nombre,
      puntaje: puntaje
    });
  }
  let mejorCafe = resultados[0];
  for (const resultado of resultados) {
    if (resultado.puntaje > mejorCafe.puntaje) {
      mejorCafe = resultado;
    }
  }

  return mejorCafe;
}
//Obtener respuestas del Usuario
const preguntas = document.querySelectorAll(".question");
const botonesOpciones = document.querySelectorAll(".option-btn");

let preguntaActual = 0;
let respuestasUsuario = {};
botonesOpciones.forEach(boton => {
  boton.addEventListener("click", () => {
    const eleccionusuario = boton.dataset.value;
    const numeroPregunta = boton.closest(".question").dataset.question;
    guardarRespuesta(numeroPregunta, eleccionusuario);

  });
});

function guardarRespuesta(numeroPregunta, valor) {

  switch (numeroPregunta) {
    case "1":respuestasUsuario.ambiente = valor;
      break;
    case "2":respuestasUsuario.cafe = valor;
      break;
    case "3":respuestasUsuario.petfriendly = valor === "true";
      break;
    case "4":respuestasUsuario.precio = valor;
      break;
    case "5":respuestasUsuario.platoDestacado = valor;
      break;
    case "6":respuestasUsuario.estilo = valor;
      break;
    case "7":respuestasUsuario.estrellas = valor === "true";
      break;
    case "8":respuestasUsuario.opcionesComida = valor === "true";
      break;
  }

//Mostras el resultado
}
function mostrarResultadoFinal() {
  const mejorCafe = calcularMejorCafe(cafeQuiz, respuestasUsuario);
  sessionStorage.setItem("cafeIdeal", JSON.stringify(mejorCafe));
  mostrarCafeGuardado(mejorCafe);
}

function mostrarCafeGuardado(mejorCafe) {
  const resultadoDiv =document.getElementById("resultado");
  const botonResultado =document.getElementById("verResultado");
  if (botonResultado) {botonResultado.style.display = "none";
  } 
  resultadoDiv.innerHTML = `
    <div class="card resultadoDiv p-4 shadow text-center">
      <h2>Tu cafetería ideal es:</h2>
      <h3 class="mt-3">
        ${mejorCafe.nombre}
      </h3>

      <button id="rehacerQuiz" class="btn btn-outline-dark mt-3">
        Rehacer quiz
      </button>

    </div>
  `;

  document.getElementById("rehacerQuiz").addEventListener("click", function () {
             sessionStorage.removeItem("cafeIdeal");
             location.reload()
    });
}

document.getElementById("verResultado") .addEventListener("click",mostrarResultadoFinal);
document.addEventListener("DOMContentLoaded",
  function () {
    const cafeGuardado =sessionStorage.getItem("cafeIdeal");
    if (cafeGuardado) {
      const cafe =JSON.parse(cafeGuardado);
      mostrarCafeGuardado(cafe);
    }
  });

