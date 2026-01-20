const cafes = [
  {
    nombre: "Cuervo Café",
    precio: "alto",
    cafe: "espresso",
    trabajar: false,
    platoDestacado: "salado",
    petfriendly: true,
    ambiente: "concurrido",
    estrellas: false,
    estilo: "moderno",
  },
  {
    nombre: "Usina Cafetera Belgrano",
    precio: "alto",
    cafe: "latte",
    trabajar: true,
    platoDestacado: "pasteleria",
    petfriendly: true,
    ambiente: "tranquilo",
    estrellas: false,
    estilo: "tradicional",
  },
  {
    nombre: "Gorrion Congreso",
    precio: "medio",
    cafe: "iced",
    trabajar: true,
    platoDestacado: "brunch",
    petfriendly: true,
    ambiente: "tranquilo",
    estrellas: true,
    estilo: "moderno",
  },
  {
    nombre: "Pocho Cafe",
    precio: "medio",
    cafe: "latte",
    trabajar:true,
    platoDestacado:"brunch",
    petfriendly:true,
    ambiente:"tranquilo",
    estrellas:true,
    estilo:"moderno"
  },
    {
    nombre: "Pulso Speciality Coffe",
    precio: "medio",
    cafe: "espresso",
    trabajar:true,
    platoDestacado:"Salado",
    petfriendly:true,
    ambiente:"tranquilo",
    estrellas:true,
    estilo:"tradicional",
  },
    {
    nombre: "Denkins",
    precio: "alto",
    cafe: "latte",
    trabajar:false,
    platoDestacado:"Pasteleria",
    petfriendly:true,
    ambiente:"concurrido",
    estrellas:true,
    estilo:"moderno",
  },
  {
    nombre: "Maru Botana",
    precio: "medio",
    cafe: "latte",
    trabajar:false,
    platoDestacado:"Pasteleria",
    petfriendly:true,
    ambiente:"concurrido",
    estrellas:false,
    estilo:"tradicional",
  },
  {
    nombre: "Stumpy coffe point",
    precio: "bajo",
    cafe: "latte",
    trabajar:true,
    platoDestacado:"brunch",
    petfriendly:true,
    ambiente:"tranquilo",
    estrellas:false,
    estilo:"tradicional",
  },
    {
    nombre: "Caza Nueza",
    precio: "alto",
    cafe: "iced",
    trabajar:true,
    platoDestacado:"Pasteleria",
    petfriendly:true,
    ambiente:"tranquilo",
    estrellas:false,
    estilo:"moderno",
  },
  {
    nombre: "Co-Pain",
    precio: "bajo",
    cafe: "espresso",
    trabajar:true,
    platoDestacado:"pasteleria",
    petfriendly:true,
    ambiente:"tranquilo",
    estrellas:true,
    estilo:"tradicional",
  }
];
function pedirOpcionValida(mensaje, opcionesValidas) {
  let respuesta = prompt(mensaje).toLowerCase();

  while (!opcionesValidas.includes(respuesta)) {
    alert(
      "Opción incorrecta.\n" +
      "Ingresá una de las siguientes opciones:\n" +
      opcionesValidas.join(" / ")
    );
    respuesta = prompt(mensaje).toLowerCase();
  }

  return respuesta;
}

//Entrada de Datos
function obtenerRespuestasUsuario() {
  let respuestas = {};

  respuestas.ambiente = pedirOpcionValida(
    "¿Qué ambiente preferís?\n- tranquilo\n- concurrido",
    ["tranquilo", "concurrido"]
  );

  respuestas.precio = pedirOpcionValida(
    "¿Qué rango de precio buscás?\n- bajo\n- medio\n- alto",
    ["bajo", "medio", "alto"]
  );

  respuestas.petfriendly = (
    "¿Querés que la cafetería sea pet friendly?"
  );

  respuestas.platoDestacado = pedirOpcionValida(
    "¿Qué te gusta acompañar con el café?\n- pasteleria\n- brunch\n- salado",
    ["pasteleria", "brunch", "salado"]
  );

  respuestas.estilo = pedirOpcionValida(
    "¿Qué estilo preferís?\n- moderno\n- tradicional",
    ["moderno", "tradicional"]
  );
  respuestas.cafe = pedirOpcionValida(
    "¿Qué tipo de café preferís?\n- espresso\n- latte\n- iced",
    ["espresso", "latte", "iced"]
  );
  respuestas.trabajar = confirm(
    "¿Necesitás un lugar para trabajar?"
  );
  respuestas.estrellas = confirm(
    "¿Te importa que la cafetería tenga buenas reseñas?"
  );

  return respuestas;
}



//Procesamiento

function calcularMejorCafe(cafes, respuestasUsuario) {
  let resultados = [];

  for (let i = 0; i < cafes.length; i++) {
    let puntaje = 0;

    if (cafes[i].ambiente === respuestasUsuario.ambiente) puntaje++;
    if (cafes[i].precio === respuestasUsuario.precio) puntaje++;
    if (cafes[i].petfriendly === respuestasUsuario.petfriendly) puntaje++;
    if (cafes[i].estilo === respuestasUsuario.estilo) puntaje++;

    if (cafes[i].platoDestacado === respuestasUsuario.platoDestacado) {
      puntaje += 2;
    }

    resultados.push({
      nombre: cafes[i].nombre,
      puntaje: puntaje
    });
  }
  

  let mejorCafe = resultados[0];

  for (let i = 1; i < resultados.length; i++) {
    if (resultados[i].puntaje > mejorCafe.puntaje) {
      mejorCafe = resultados[i];
    }
  }

  return mejorCafe;
}

//Salida de Datos
function mostrarResultado(mejorCafe) {
  alert(
    " RESULTADO DEL QUIZ:  " +
    "Tu cafetería ideal es  " +
    mejorCafe.nombre  );

  console.log("La cafetería recomendada es:", mejorCafe.nombre);
}

alert("Bienvenido al QUIZ: Tu Cafetería Ideal en Belgrano. Elegi entre las opciones que prefieras, y te recomendaremos la mejor cafetería para vos.");

let respuestasUsuario = obtenerRespuestasUsuario();
let mejorCafe = calcularMejorCafe(cafes, respuestasUsuario);
mostrarResultado(mejorCafe);
