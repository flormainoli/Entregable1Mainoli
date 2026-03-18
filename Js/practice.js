//array de cafes
const cafes = [
  {
    id: 0,
    nombre: "Cuervo Café",
    precio: "alto",
    coffee: "espresso",
    trabajar: false,
    platoDestacado: "salado",
    petfriendly: true,
    ambiente: "concurrido",
    reseñas:true,
    opcionesComida: true,
    estilo: "moderno",
    link: "https://www.cuervocafe.com/",
    img: ["cuervo1.png", "cuervo2.png", "cuervo3.png"],
    descripcion: "Cafetería de especialidad con granos de Colombia y Brasil. Se destacan con su creatividad de combinar granos con distintos sabores y texturas. Tiene opciones de desayuno, brunch y helado. Es muy concurrido, por lo que puede haber una espera, totalmente valiosa",
    platoDestcado: "Chipa",
    tipocafe: "Moccaccino",
    ubi: ["Juramento 1284"],
    linkubi: "https://maps.app.goo.gl/8q83wLNLDbXKyTno7",
    menu: "https://cuervocafe.com/menu-espanol/",
    instagram: "cuervocafe",
    estrellas: 4.4,
    linkinstagram: "https://www.instagram.com/cuervocafe/",
    diasCerrado: [1],
    horarioMin:"08:00",
    horarioMax:"20:00"
  },
  {
    id: 1,
    nombre: "Gorrión Café",
    precio: "medio",
    coffee: "latte",
    trabajar: true,
    platoDestacado: "brunch",
    petfriendly: true,
    ambiente: "tranquilo",
    reseñas:true,
    opcionesComida: true,
    estrellas: 4.6,
    estilo: "moderno",
    link: "https://gorrionbakery.com/",
    img: ["gorrion1.png", "gorrion2.png", "gorrion3.png"],
    descripcion: "Cafetería de especialidad y panadería artesanal, con varias sucursales en Buenos Aires. Ofrece pastelería casera y opciones para desayunos, brunch y almuerzos. Con opciones veganas y sin TACC.<br>Tiene un ambiente cálido y moderno. Es pet friendly y una excelente opción para trabajar tipo coffee office (buen Wi-Fi y tranquilidad).",
    platoDestcado: "Avocado Toast",
    tipocafe: "Latte nutella",
    ubi: ["Virrey Arredondo 2424"],
    linkubi: "https://share.google/5VjRJC5fe4MDtLkwF",
    menu:"",
    instagram: "gorrion",
    linkinstagram: "https://www.instagram.com/gorrion.ar/?hl=es",
    diasCerrado: [],
    horarioMin:"08:30", 
    horarioMax:"19:00"
  },
  {
    id: 2,
    nombre: "Pocho Café",
    precio: "medio",
    coffee: "latte",
    trabajar: true,
    platoDestacado: "brunch",
    petfriendly: true,
    ambiente: "tranquilo",
    reseñas:true,
    opcionesComida: true,
    estilo: "moderno",
    link: "",
    img: ["pocho1.png", "pocho2.png", "pocho3.png"],
    descripcion: "Cafetería de especialidad, con los cafes típicos y variedad de Syrups. Se destaca por su propuesta original de sándwiches de chipa y croissants con rellenos abundantes y variados. Ofrece opciones para cualquier momento del día. Tiene un ambiente acogedor, con excelente luz natural, ideal para trabajar, es pet friendly. Cuenta con opciones veganas  y tragos.",
    platoDestcado: "Sandwich de Chipa",
    tipocafe: "Macchiato",
    ubi: ["11 de septiembre 1888 2490"],
    linkubi: "https://maps.app.goo.gl/JjhT8SikQSTR6h11A",
    menu: "https://menu.fu.do/pochocafe/qr-menu?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnHJ5tOC4Xixb7bSi-j9UgvjzhymSCe-R9tIIg7ucB7wLj-CKZ_HtevFc82sU_aem_elL-4kWSZHPW8RSe7E_qRA",
    instagram: "pochocafe",
    estrellas: 4.9,
    linkinstagram: "https://www.instagram.com/pochocafe/",
    diasCerrado: [0,1],
    horarioMin:"10:00",
    horarioMax:"19:00"
  },
  {
    id: 3,
    nombre: "Úsina Cafetera",
    precio: "alto",
    coffee: "latte",
    trabajar: true,
    platoDestacado: "pasteleria",
    petfriendly: true,
    ambiente: "tranquilo",
    reseñas:false,
    opcionesComida: true,
    estilo: "tradicional",
    link: "https://www.usinacafetera.com.ar/",
    img: ["usina1.png", "usina2.png", "usina3.png"],
    descripcion: "Cafetería de especialidad que trabaja con una combinación propia de Cafe orgánico, elaborado con granos del Caribe, logrando una experiencia unica.<br> Además, cuentan con opciones de almuerzos y de desayunos varios y opciones veganas y sin TACC. Tiene un espacio amplio y tranquilo, ideal para trabajar o relajar.",
    platoDestcado: "Carrot Cake",
    tipocafe: "Cafe Magic",
    ubi: ["Echeverria 2930"],
    linkubi: "https://maps.app.goo.gl/hY6gLhZJ8Ur9K1Lw7",
    menu: "https://menu.fu.do/usinacafetera/qr-menu?fbclid=PAZXh0bgNhZW0CMTEAAacIve3O0VysRwSgs7-plD30Qw8pfZLC6NUQ9CZAya1LBT9z7i9CFBwN-4Z8VA_aem_qPGgKZhZTPaG72ZefReNlA",
    instagram: "usinacafetera",
    linkinstagram: "https://www.instagram.com/usinacafetera/",
    estrellas: 4.1,
    diasCerrado: [],
    horarioMin:"08:30",
    horarioMax:"20:00"
  },
  {
    id: 4,
    nombre: "Pulso Speciality Coffee",
    precio: "medio",
    coffee: "espresso",
    trabajar: true,
    platoDestacado: "salado",
    petfriendly: true,
    ambiente: "tranquilo",
    reseñas:false,
    opcionesComida: true,
    estrellas: 4.8,
    estilo: "tradicional",
    link: "https://www.pulso.cafe/",
    img: ["pulso1.png", "pulso2.png", "pulso3.png"],
    descripcion: "Cafetería de especialidad ubicada en la esquina de Blanco Encalada. Ofrece gran variedad de cafés, infusiones y jugos, además de opciones dulces y saladas para distintas comidas del día. <br>Cuenta con espacio interior y exterior, wifi y un entorno cómodo y relajado para trabajar. Con precios super accesibles.",
    platoDestcado: "Tostones Salados",
    tipocafe: "Latte Saborizado",
    ubi: ["Blanco encalada 1992"],
    linkubi: "https://maps.app.goo.gl/431Zu3pe5Gn39pBn9",
    menu: "https://drive.google.com/file/d/1l80OAoIkirXJhILRWaGVzbfdP3Md1rAu/view",
    instagram: "pulsocafe",
    linkinstagram: "https://www.instagram.com/_pulsocafe/",
    diasCerrado: [],
    horarioMin:"08:30",
    horarioMax:"19:30"
  },
  {
    id: 5,
    nombre: "Deniks Bakery",
    precio: "alto",
    coffee: "latte",
    trabajar: false,
    platoDestacado: "pasteleria",
    petfriendly: true,
    ambiente: "concurrido",
    reseñas:false,
    opcionesComida: false,
    estrellas: 4.4,
    estilo: "moderno",
    link: "https://deniksbakery.com/tienda/",
    img: ["denkins1.png", "denkis2.png", "denkis3.png"],
    descripcion: "Cafetería de especialidad que ofrece cafe calsico ya que se destaca por su chocolatería y pastelería profesional, creativa y de calidad. Tiene varias opciones de meriendas, brunch y mas acotadas para el almuerzo con panadería y ensaladas frescas. El establecimiento es pequeño y se llena con facilidad, por lo que se recomienda ir temprano, especialmente para la merienda",
    platoDestcado: "Tortas petits",
    tipocafe: "Latte Doble",
    ubi: ["Migueletes 1717"],
    linkubi: "https://maps.app.goo.gl/M4qNskgotLXUtsCX7",
    menu: "https://deniksbakery.com/carta-deniks/",
    instagram: "deniksbakery",
    linkinstagram: "https://www.instagram.com/deniksbakery/",
    diasCerrado: [],
    horarioMin:"08:00",
    horarioMax:"20:00"
  },
  {
    id: 6,
    nombre: "Maru Botana Café",
    precio: "medio",
    coffee: "latte",
    trabajar: false,
    platoDestacado: "pasteleria",
    petfriendly: true,
    ambiente: "concurrido",
    reseñas:false,
    opcionesComida: true,
    estrellas: 4.4,
    estilo: "tradicional",
    link: "https://deniksbakery.com/tienda/",
    img: ["marub1.png", "marub2.png", "marub3.png"],
    descripcion: "Cafetería creada por la reconocida chef Maru Botana, tiene 3 locales en Belgrano. Su propuesta gira en torno a tortas abundantes clasicas, frutales y chocolatosas. Sin embargo también cuenta con opciones para  el desayuno, pasteleria artesanal y vegana. Los locales son pequeños y se llenan rápido. Disponen de mesas en el interior y al aire libre, donde se aceptan mascotas.",
    platoDestcado: "Tortas Clasicas",
    tipocafe: "Cafe con leche",
    ubi: ["Echeverría 3230", ],
    linkubi: ["https://maps.app.goo.gl/M4qNskgotLXUtsCX7"],
    menu: "https://marubotana.com/institucional/menu/menu.pdf",
    instagram: "marubotanadulceysalado",
    linkinstagram: "https://www.instagram.com/marubotanadulceysalado/",
    diasCerrado: [],
    horarioMin:"09:00",
    horarioMax:"20:30"
  },
  {
    id: 7,
    nombre: "Stumpy Coffee Point",
    precio: "bajo",
    coffee: "latte",
    trabajar: true,
    platoDestacado: "brunch",
    petfriendly: true,
    ambiente: "tranquilo",
    estrellas: 4.3,
    reseñas:false,
    opcionesComida: true,
    estilo: "tradicional",
    link: "https://stumpycoffee.com/",
    img: ["stumpy1.png", "stumpy2.png", "stumpy3.png"],
    descripcion: "Cafetería de especialidad con dos sucursales en Belgrano. Trabaja con granos de Brasil y Colombia, con una gran variedad de cafe con creativas opciones para combinarlos. Estos se pueden acompañar con amplia variedad de pastelería y panadería dulce y salada, además de una amplia carta para almorzar.<br>Tiene un ambiente tranquilo y cálido, con mesas adentro y afuera. Es pet friendly y muy elegido para trabajar.",
    platoDestcado: "Cookie de Pistacho",
    tipocafe: "Moka",
    ubi: ["Echeverría 1568", "Mendoza 2020"],
    linkubi: ["https://maps.app.goo.gl/hpVcaf3i7tsxJ52U7"],
    menu: "https://www.google.com/maps/place/Stumpy+coffee+point+belgrano/@-34.5574793,-58.4502826,17z/data=!4m7!3m6!1s0x95bcb5190eb3df2f:0xc27a2acf11e3dd93!8m2!3d-34.5582304!4d-58.4477077!10e9!16s%2Fg%2F11sdyf0gcb?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D",
    instagram: "stumpycoffeepoint",
    linkinstagram: "https://www.instagram.com/stumpycoffeepoint/",
    diasCerrado: [],
    horarioMin:"09:00",
    horarioMax:"20:00"
  },
  {
    id: 8,
    nombre: "Co-Pain",
    precio: "bajo",
    coffee: "espresso",
    trabajar: true,
    platoDestacado: "pasteleria",
    petfriendly: true,
    ambiente: "tranquilo",
    estrellas: 4.3,
    reseñas:false,
    opcionesComida: true,
    estilo: "tradicional",
    link: "https://copain.com.ar/",
    img: ["co-pain1.png", "co-pain2.png", "co-pain3.png"],
    descripcion: "Cafetería de especialidad reconocida por su panadería y pastelería francesa. Ofrece desayunos, brunch y almuerzos con ingredientes de calidad. Con muy linda estética, mesas en el interior y al aire libre. Ideal para coffee work. Cuenta con opciones vegetarianas y sin TACC, y precios accesibles.",
    tipocafe: "Vainilla Latte",
    platoDestcado: "Croissants rellenos",
    ubi: ["Migueletes 1672"],
    linkubi: "https://maps.app.goo.gl/o3EreNnzTsHv3YJg8",
    menu: "https://drive.google.com/file/d/1gWMYl4u78MNnj9hkXvCCwOcNlFTbIT40/view",
    instagram: "copain",
    linkinstagram: "https://www.instagram.com/copain/",
    diasCerrado: [],
    horarioMin:"08:00",
    horarioMax:"19:00"
  }
];
const cafeQuiz = cafes;
//funcion para visualizar cards
function visualizarCafes(lista, contenedorId = "contenedor-cafes") {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return; // Si no existe el contenedor, no hacer nada
  contenedor.innerHTML = "";
  lista.forEach((cafe, index) => {
    contenedor.innerHTML += `<div class="col primera">
                <div class="card mb-2 ">
                  <div id="carousel-${index}"  class="carousel slide carousel-card" data-bs-ride="carousel"data-bs-interval="3000" >
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carousel-${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carousel-${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carousel-${index}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="/img/${cafe.img[0]}" class="d-block card-img-top w-100" alt="Imagen cafeteria">
                      </div>
                      <div class="carousel-item">
                         <img src="/img/${cafe.img[1]}" class="d-block card-img-top w-100" alt="Imagen cafeteria">
                      </div>
                      <div class="carousel-item">
                        <img src="/img/${cafe.img[2]}" class="d-block card-img-top w-100" alt="Imagen cafeteria">
                      </div>
                    </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${index}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                   <button class="carousel-control-next" type="button" data-bs-target="#carousel-${index}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="card-body">
                  <h5 class="card-title text-start">${cafe.nombre}</h5>
                  <p class="card-text fs-6 m-2 text-start">${cafe.descripcion}</p>
                  <div class="row">
                    <h6 class="col text-start">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-fork-knife m-2" viewBox="0 0 16 16">
                        <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z"/>
                       </svg>${cafe.platoDestcado}
                   </h6>
                  </div>
                  <div class="row">
                    <h6 class="col text-start"><i class="bi bi-cup-hot-fill m-2"></i>${cafe.tipocafe}</h6>
                  </div>
                  <div class="row">
                    <a class="card-text col text-start menu-link" href="${cafe.menu}" data-id="${index}"><i class="bi bi-map m-2"></i>Menu</a>
                    <a class="card-text col  text-end me-3" href="${cafe.linkinstagram}"><i class="bi bi-instagram m-2"></i>${cafe.instagram}</a>
                  </div>
                  <div class="row">
                    <a class="card-text col text-start" href="${cafe.linkubi}"><i class="bi bi-geo-alt-fill m-2"></i>${cafe.ubi}</a>
                    <p class="card-text col  text-end me-3"><i class="bi bi-star-fill m-2"></i>${cafe.estrellas}</p>
                  </div>
                   <div class="text-center mt-4">
                    <button class="reservarMesaBtn btn btn-dark"data-id="${index}">
                        Reservar Mesa
                    </button>
                    </div>
                    <div class="reserva mt-4"></div>
                </div>
              </div>
            </div>`;
  });
  document.querySelectorAll(".reservarMesaBtn").forEach((boton) => {
  boton.addEventListener("click", () => {
    const id = boton.dataset.id;
    reservarMesa(lista[id], boton);
  });
});
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    try {
      const id = link.dataset.id;
      const cafe = lista[id];
      if (!cafe.menu) {e.preventDefault(); 
        throw new Error("Menu no disponible");
      }
    } catch (error) {
      Toastify({
        text: "El Menú de esta cafetería no está disponible",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {background: "linear-gradient(to right, #6f4e37, #c4a484)"
        }
      }).showToast();
    } finally {
      console.log("menu solicitado no existente");
    }
  });
});
}

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

  eventosBotones();
  botonAtras();

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
const btnResultado = document.getElementById("verResultado");
const resultadoDiv = document.getElementById("resultado");
//funcion para  mostrar el resultado final en pantalla
function mostrarCafeGuardado(mejorCafe,) {
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
  visualizarCafes([mejorCafe.cafecard], "contenedor-cafes-resultado");
  document.getElementById("rehacerQuiz").addEventListener("click", () => {
    sessionStorage.removeItem("cafeIdeal");
    location.reload();
  });
}
if (btnResultado) {
  btnResultado.addEventListener("click", mostrarResultadoFinal);}
if (resultadoDiv) {
  resultadoDiv.style.display = "none";}
// restaurar café guardado en sessionStorage
const cafeGuardado = sessionStorage.getItem("cafeIdeal");
if (cafeGuardado) {
  const cafe = JSON.parse(cafeGuardado);
  if (btnResultado) btnResultado.style.display = "none";
  const quiz = document.querySelector(".quiz-content");
  if (quiz) quiz.style.display = "none";
  mostrarCafeGuardado(cafe);
} 

// funcion para hacer una reserva
function reservarMesa(cafe, botonReserva) {
  // encontrar el contenedor correspondiente a esta tarjeta
  const contenedorReserva = botonReserva
    ? botonReserva.closest('.card').querySelector('.reserva')
    : document.querySelector('.reserva');
  if (!contenedorReserva) {
    return; 
  }
  contenedorReserva.innerHTML = `
  <div class="modal fade" id="modalReserva-${cafe.id}" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Reservar Mesa en ${cafe.nombre}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form id="formReserva-${cafe.id}">
                <div class="mb-3 form-group ">
                    <input type="number" class="form-control" id="comensales-${cafe.id}" min="1" max="10" placeholder="Seleccione la cantidad de comensales" required>
                </div>
                <div class="form-group mb-3 hidepass" id="show-servicio-${cafe.id}">
                   <select class="form-control mb-4" id="servicio-${cafe.id}" required disabled>
                   <option value="" disabled selected>Seleccione el tipo de servicio</option>
                    <option>Desayuno</option>
                    <option>Brunch</option>
                    <option >Merienda</option>
                  </select>
                </div>
                <div class="form-group mb-3 hidepass flatpickr" id="show-fecha-${cafe.id}">
                  <input type="text"  class="form-control" placeholder="Seleccione la fecha de reserva..." data-input id="datepicker-${cafe.id}" required disabled>
                </div> 
                <div class="form-group  mb-3 hidepass" id="show-hora-${cafe.id}">
                    <input type="text" class="form-control" id="hora-${cafe.id}" placeholder="Seleccione una hora de reserva" required disabled>
                </div>
                <div class="form-group mb-3 hidepass" id="show-nombre-${cafe.id}">
                   <input type="text" class="form-control" id="nombreApellido-${cafe.id}" placeholder="Escriba su nombre y apellido" required disabled>
                </div>
                <div class="form-group mb-3 hidepass" id="show-email-${cafe.id}">
                   <input type="email" class="form-control" id="email-${cafe.id}" placeholder="Escriba su correo electrónico" required disabled>
                </div>
                <div class="modal-footer hidepass" id="show-confirmar-${cafe.id}">
                   <button type="submit" class="btn btn-dark w-100" >Confirmar reserva</button>
                 </div>
             </form>
         </div>
      </div>
    </div>
  </div>      
  `;
    const cont = contenedorReserva;
//funcion para que se muestre cada paso a medida que se van completando el formulario
  function mostrarPaso(id) {
  const paso = cont.querySelector("#" + id);
  paso.classList.remove("hidepass");
  paso.classList.add("showpass");
  paso.querySelectorAll("input,select,button")
      .forEach(el => el.disabled = false);
}

//calendario con librería flatpickr
setTimeout(() => {
  flatpickr(".flatpickr", {
    wrap: true,
    locale: "es",
    minDate: "today",
    dateFormat: "d/m/Y",
     clickOpens: true,
      appendTo: document.body,
      disable: [
      function(date) {
        return cafe.diasCerrado?.includes(date.getDay());}]
  });
}, 100);
flatpickr(`#hora-${cafe.id}`, {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
  minuteIncrement: 60,  
  minTime: cafe.horarioMin,
  maxTime: cafe.horarioMax,
});

//mostar modal boostrap
  const modalEl = document.getElementById(`modalReserva-${cafe.id}`);
  if (modalEl && typeof bootstrap !== 'undefined') { 
    const modalObj = new bootstrap.Modal(modalEl); 
    modalObj.show();
  }
  const comensales = cont.querySelector(`#comensales-${cafe.id}`);
    const servicio = cont.querySelector(`#servicio-${cafe.id}`);
    const fecha = cont.querySelector(`#datepicker-${cafe.id}`);
    const hora = cont.querySelector(`#hora-${cafe.id}`);
    const nombreApellido = cont.querySelector(`#nombreApellido-${cafe.id}`);
    const email = cont.querySelector(`#email-${cafe.id}`);
  //eventos para mostrar y guardar cada paso del formulario
 comensales.addEventListener("change", () => {
    if (comensales.value > 0)
      mostrarPaso(`show-servicio-${cafe.id}`);
  });
  servicio.addEventListener("change", () => {
    if (servicio.value)
      mostrarPaso(`show-fecha-${cafe.id}`);
  });
  fecha.addEventListener("change", () => {
    if (fecha.value)
      mostrarPaso(`show-hora-${cafe.id}`);
  });
  hora.addEventListener("change", () => {
    if (hora.value)
      mostrarPaso(`show-nombre-${cafe.id}`);});
  nombreApellido.addEventListener("input", () => {
    if (nombreApellido.value.length > 2)
      mostrarPaso(`show-email-${cafe.id}`);
  });
  email.addEventListener("input", () => {
    if (email.value.includes("@"))
      mostrarPaso(`show-confirmar-${cafe.id}`);
  });
  
  //para mandar el form
  const form = cont.querySelector(`#formReserva-${cafe.id}`);
  if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const datosReserva = {
      cafe: cafe.nombre,
      comensales: comensales.value,
      servicio: servicio.value,
      fecha: fecha.value,
      hora: hora.value,
      nombreApellido: nombreApellido.value,
      email: email.value
    };
    const clave = "reserva-" + cafe.id;
    localStorage.setItem(clave, JSON.stringify(datosReserva));
    mostrarReservaConfirmada(cafe);
  });
}}
//funcion para msotrar reserva
function mostrarReservaConfirmada(cafe) {
  const reserva = JSON.parse( localStorage.getItem("reserva-" + cafe.id));
  const modalBody = document.getElementById(`modalReserva-${cafe.id}`) ?.querySelector(".modal-body");
  if (!modalBody) return;
  modalBody.innerHTML = `
    <div class="text-center p-4">
      <h4>✅ ¡Reserva confirmada!</h4>
      <p><strong>En ${cafe.nombre}</strong></p>
      <p>Para ${reserva.comensales} personas - ${reserva.servicio}</p>
      <p>El día ${reserva.fecha} a las ${reserva.hora}</p>
      <p>La confirmación fue enviada a: ${reserva.email}</p>
      <button id="cancelarReservaBtn-${cafe.id}" class="btn btn-outline-danger mt-3">
        Cancelar reserva
      </button>
    </div>
  `;
  document.getElementById(`cancelarReservaBtn-${cafe.id}`).addEventListener("click", () => {
      localStorage.removeItem("reserva-" + cafe.id);
      modalBody.innerHTML = `
        <div class="text-center p-4">
          <h5>Reserva cancelada</h5>
          <button class="btn btn-dark mt-3" data-bs-dismiss="modal">
            Cerrar
          </button>
        </div>
      `;
    });
}

const cafesDestacados = cafes
  .sort((a, b) => b.estrellas - a.estrellas)
  .slice(0, 3);
visualizarCafes(cafesDestacados, "cafes-destacados");

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