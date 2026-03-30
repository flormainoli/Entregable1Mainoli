  let cafeQuiz = [];
fetch("../Js/cafes.json")
  .then(res => res.json())
  .then(data => {
    cafeQuiz = data;
       iniciarQuiz();
  }).catch(error => console.error(error));

  const btnResultado = document.getElementById("verResultado");
const resultadoDiv = document.getElementById("resultado");

  // funcion para calcular el mejor café según las respuestas del usuario
function calcularMejorCafe(cafeQuiz, respuestasUsuario) {
  const resultados = [];
  for (const cafe of cafeQuiz) {
    let puntaje = 0;
    if (cafe.ambiente === respuestasUsuario.ambiente) puntaje++;
    if (cafe.precio === respuestasUsuario.precio) puntaje++;
    if (cafe.petfriendly === respuestasUsuario.petfriendly) puntaje++;
    if (cafe.estilo === respuestasUsuario.estilo) puntaje++;
    if (cafe.coffee=== respuestasUsuario.coffee) puntaje++;
    if (cafe.reseñas === respuestasUsuario.reseñas) puntaje++;
    if (cafe.opcionesComida === respuestasUsuario.opcionesComida) puntaje++;
    if (cafe.platoDestacado === respuestasUsuario.platoDestacado) {puntaje += 2;}
    resultados.push({
      cafecard: cafe,
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

//obtener respuestas del Usuario
const preguntas = document.querySelectorAll(".question");
const botonesOpciones = document.querySelectorAll(".option-btn");
let preguntaActual = 1;
const preguntasTotal = 8;
let respuestasUsuario = {
  ambiente: null,
  coffee: null,
  petfriendly: null,
  precio: null,
  platoDestacado: null,
  estilo: null,
  reseñas: null,
  opcionesComida: null
};
  function iniciarQuiz() {
  eventosBotones();
  botonAtras();
 if (btnResultado) {
    btnResultado.addEventListener("click", mostrarResultadoFinal);
  }

  const cafeGuardado = sessionStorage.getItem("cafeIdeal");
  if (cafeGuardado) {
    const cafe = JSON.parse(cafeGuardado);
    if (btnResultado) btnResultado.style.display = "none";
    const quiz = document.querySelector(".quiz-content");
    if (quiz) quiz.style.display = "none";
    mostrarCafeGuardado(cafe);
  }
}
//funcion para  poder seleccionar los botones de opciones
function eventosBotones() {
  const botonesOpciones = document.querySelectorAll(".option-btn");
  botonesOpciones.forEach(boton => {
    boton.addEventListener("click", () => seleccionarBotones(boton));
  });
}

// funcion para manejar la seleccion del usuario
function seleccionarBotones(boton) {
  const pregunta = boton.closest(".question");
  if (!pregunta) return;
  const botones = pregunta.querySelectorAll(".option-btn");
  // sacar selección previa (permite cambiar respuesta)
  botones.forEach(btn => btn.classList.remove("selected"));
  boton.classList.add("selected");
  const numeroPregunta = pregunta.dataset.question;
  const eleccionUsuario = boton.dataset.value;
  guardarRespuesta(numeroPregunta, eleccionUsuario);

  //auto-avanzar
 setTimeout(() => {
  if (preguntaActual < preguntasTotal) {
    siguientePregunta();
  } else {
//ocultar preguntas
    document.querySelectorAll(".question").forEach(q => {
      q.classList.remove("active");
    });
    //mostrar botón resultado
    const btnResultado = document.getElementById("verResultado");
    if (btnResultado) {
      btnResultado.style.display = "block";
    }
  }
}, 400);}

//funcion para guardar las respuestas del usuario
function guardarRespuesta(numeroPregunta, valor) {
  switch (numeroPregunta) {
    case "1":respuestasUsuario.ambiente = valor;
      break;
    case "2":respuestasUsuario.coffee = valor;
      break;
    case "3":respuestasUsuario.petfriendly = valor === "true";
      break;
    case "4":respuestasUsuario.precio = valor;
      break;
    case "5":respuestasUsuario.platoDestacado = valor;
      break;
    case "6":respuestasUsuario.estilo = valor;
      break;
    case "7":respuestasUsuario.reseñas = valor === "true";
      break;
    case "8":respuestasUsuario.opcionesComida = valor === "true";
      break;
  }
}

// funcion para proseguir con la siguiente pregunta
function siguientePregunta() {
  document.querySelector(`[data-question="${preguntaActual}"]`)
    ?.classList.remove("active");
  preguntaActual++;
  document.querySelector(`[data-question="${preguntaActual}"]`)
    ?.classList.add("active");
  actualizarProgreso();
}

//funcion para volver a la pregunta anterior
function botonAtras() {
  const backBtns = document.querySelectorAll(".btn-back");
  backBtns.forEach(btn => {
    btn.addEventListener("click", () =>  {
    if (preguntaActual === 1) return;
    document.querySelector(`[data-question="${preguntaActual}"]`)
      ?.classList.remove("active");
    preguntaActual--;
    document.querySelector(`[data-question="${preguntaActual}"]`)
      ?.classList.add("active");
    actualizarProgreso();
  });
  });
}

//funcion para que la barra actualize el progreso
function actualizarProgreso() {
    const barraProgreso = document.getElementById('progress-bar');
    if (!barraProgreso) return;  
    const porcentaje = (preguntaActual / preguntasTotal) * 100;
    barraProgreso.style.width = porcentaje + "%";
}

//funcion para calcular, guardar y mandar a mostrar el resultado final
function mostrarResultadoFinal() {
  const mejorCafe = calcularMejorCafe(cafeQuiz, respuestasUsuario);
  sessionStorage.setItem("cafeIdeal", JSON.stringify(mejorCafe));
  mostrarCafeGuardado(mejorCafe);
}

//funcion para  mostrar el resultado final en pantalla
function mostrarCafeGuardado(mejorCafe) {
  resultadoDiv.style.display = "block";
  if (btnResultado) btnResultado.style.display = "none"; 
  resultadoDiv.innerHTML = `
    <div class="resultadoDiv result-card p-4 shadow">
      <h2>Tu cafetería ideal es:</h2>
      <h3 class="mt-3">${mejorCafe.nombre}</h3>
      <div id="contenedor-cafes-resultado" class="row mt-4"></div>
      <button id="rehacerQuiz" class="btn btn-outline-dark mt-3 d-block mx-auto">
        Rehacer quiz
      </button>
   </div>
  `;
  //llamada a funcion para ver la card
visualizarCafes([mejorCafe.cafecard], "contenedor-cafes-resultado", "../img/");;
   document.getElementById("rehacerQuiz").addEventListener("click", () => {
  sessionStorage.removeItem("cafeIdeal");

  resultadoDiv.style.display = "none";

  const quiz = document.querySelector(".quiz-content");
  if (quiz) quiz.style.display = "block";

  preguntaActual = 1;
  respuestasUsuario = {
    ambiente: null,
    coffee: null,
    petfriendly: null,
    precio: null,
    platoDestacado: null,
    estilo: null,
    reseñas: null,
    opcionesComida: null
  };

  document.querySelectorAll(".question").forEach(q => {
    q.classList.remove("active");
  });

  document.querySelector(`[data-question="1"]`)?.classList.add("active");

  if (btnResultado) btnResultado.style.display = "none";
});
}
