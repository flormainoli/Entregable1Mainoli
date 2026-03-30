
let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
mostrarReservas("actuales");
configurarFiltros();
function mostrarReservas(filtro = "actuales") {
  const contenedor = document.getElementById("contenedor-reservas");
  const sinReservas = document.getElementById("sin-reservas");

  if (!contenedor) return;

  contenedor.innerHTML = "";

  let reservasFiltradas = filtrarReservas(filtro);

  actualizarContadores();

  if (reservasFiltradas.length === 0) {
    if (sinReservas) sinReservas.classList.remove("d-none");
    return;
  }

  if (sinReservas) sinReservas.classList.add("d-none");

  reservasFiltradas.forEach((reserva, index) => {
    contenedor.innerHTML += `
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm p-3">
          <h5>${reserva.cafe}</h5>
          <p><strong>Nombre:</strong> ${reserva.nombreApellido}</p>
          <p><strong>Personas:</strong> ${reserva.comensales}</p>
          <p><strong>Fecha:</strong> ${reserva.fecha}</p>
          <p><strong>Hora:</strong> ${reserva.hora}</p>

          <div class="d-flex justify-content-between mt-3">
           <button class="btn btn-warning btn-sm btn-editar" data-index="${index}">
  Editar
</button>
<button class="btn btn-danger btn-sm btn-eliminar" data-index="${index}">
  Eliminar
</button>
          </div>
        </div>
      </div>
    `;});
    document.querySelectorAll(".btn-editar").forEach(btn => {
  btn.addEventListener("click", () => {
    const index = btn.dataset.index;
    abrirModalEdicion(index);
  });
});

document.querySelectorAll(".btn-eliminar").forEach(btn => {
  btn.addEventListener("click", () => {
    const index = btn.dataset.index;
    eliminarReserva(index);
  });
}); 
}
 
function abrirModalEdicion(index) {
  const reserva = reservas[index];
  document.getElementById("editIndex").value = index;
  document.getElementById("editNombre").value = reserva.nombreApellido;
  document.getElementById("editComensales").value = reserva.comensales;
  document.getElementById("editFecha").value = reserva.fecha;
  document.getElementById("editHora").value = reserva.hora;
  const modal = new bootstrap.Modal(document.getElementById("modalEditarReserva"));
  modal.show();
}
const formEditar = document.getElementById("formEditarReserva");

if (formEditar) {
  formEditar.addEventListener("submit", function(e) {
    e.preventDefault();
    const index = document.getElementById("editIndex").value;
    const nombre = document.getElementById("editNombre").value.trim();
    const comensales = document.getElementById("editComensales").value;
    const fecha = document.getElementById("editFecha").value;
    const hora = document.getElementById("editHora").value;
    reservas[index].nombreApellido = nombre;
    reservas[index].comensales = comensales;
    reservas[index].fecha = fecha;
    reservas[index].hora = hora;
    localStorage.setItem("reservas", JSON.stringify(reservas));
    bootstrap.Modal.getInstance(document.getElementById("modalEditarReserva")).hide();
    mostrarReservas();
  });
}

function filtrarReservas(tipo) {
  const hoy = new Date();
  if (tipo === "actuales") {
    return reservas.filter(r => new Date(r.fecha) >= hoy);
  }
  if (tipo === "pasadas") {
    return reservas.filter(r => new Date(r.fecha) < hoy);
  }
  return reservas;
}
function actualizarContadores() {
  const hoy = new Date();
  const pasadas = reservas.filter(r => new Date(r.fecha) < hoy).length;
  document.getElementById("countActuales").textContent = reservas.length;
  document.getElementById("countPasadas").textContent = pasadas;
}

function configurarFiltros() {
  document.getElementById("filtrosActuales").addEventListener("click", () => activarFiltro("actuales"));
  document.getElementById("filtrosPasados").addEventListener("click", () => activarFiltro("pasadas"));
}

function activarFiltro(tipo) {
  document.querySelectorAll(".btn-group button").forEach(btn => {
    btn.classList.remove("active");
  });
  if (tipo === "actuales") document.getElementById("filtrosActuales").classList.add("active");
  if (tipo === "pasadas") document.getElementById("filtrosPasados").classList.add("active");
  mostrarReservas(tipo);
}

function eliminarReserva(index) {
  reservas.splice(index, 1);
  localStorage.setItem("reservas", JSON.stringify(reservas));
  mostrarReservas();
}