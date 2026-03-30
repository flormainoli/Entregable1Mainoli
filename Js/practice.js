
//funcion para visualizar cards
function visualizarCafes(lista, contenedorId = "contenedor-cafes", rutaImg ) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return; 
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
                        <img src="${rutaImg}${cafe.img[0]}" class="d-block card-img-top w-100" alt="Imagen cafeteria">
                      </div>
                      <div class="carousel-item">
                         <img src="${rutaImg}${cafe.img[1]}" class="d-block card-img-top w-100" alt="Imagen cafeteria">
                      </div>
                      <div class="carousel-item">
                        <img src="${rutaImg}${cafe.img[2]}" class="d-block card-img-top w-100" alt="Imagen cafeteria">
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
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

reservas.push({
  id: Date.now(),
  cafe: cafe.nombre,
  comensales: comensales.value,
  servicio: servicio.value,
  fecha: fecha.value,
  hora: hora.value,
  nombreApellido: nombreApellido.value,
  email: email.value
});
const nombre = nombreApellido.value.trim();

  const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

  if (!nombreValido.test(nombre)) {
    Toastify({
      text: "El nombre solo puede contener letras",
      duration: 3000,
      gravity: "top",
      position: "right",
      style: { background: "red" }
    }).showToast();
    return;}

localStorage.setItem("reservas", JSON.stringify(reservas));
   mostrarReservaConfirmada(cafe, datosReserva);
  });
}
}

//funcion para msotrar reserva
function mostrarReservaConfirmada(cafe, reserva) {
  const modalBody = document
    .getElementById(`modalReserva-${cafe.id}`)
    ?.querySelector(".modal-body");

  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="text-center p-4">
      <h4>✅ ¡Reserva confirmada!</h4>
      <p><strong>En ${cafe.nombre}</strong></p>
      <p>Para ${reserva.comensales} personas - ${reserva.servicio}</p>
      <p>El día ${reserva.fecha} a las ${reserva.hora}</p>
      <p>La confirmación fue enviada a: ${reserva.email}</p>
      <button class="btn btn-dark mt-3" data-bs-dismiss="modal">
        Cerrar
      </button>
    </div>
  `;
}

