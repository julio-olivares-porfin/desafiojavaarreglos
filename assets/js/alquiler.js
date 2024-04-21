import { propiedadesAlquiler } from './data/propiedades_alquiler.js'

let cardVentas = document.querySelector('.card-container-alquiler')
let plantillaAlquiler = ""

propiedadesAlquiler.forEach((propiedad) => {
  if(propiedad.id >= 0 ){
    plantillaAlquiler +=
    `
    <div class="col-md-4 mb-4">
      <div class="card" id="${propiedad.id}">
          <img class="card-img" class="card-img-top" src="${propiedad.src}">
        <div class="card-body">
          <h3 class="card-title">${propiedad.nombre}</h3>
          <p class="card-text">${propiedad.descripcion}</p>
          <p>
            <i class="fa-solid fa-location-dot"></i>
            Ubicación: ${propiedad.ubicacion}
          </p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
          <p class="card-para">Precio: $${propiedad.costo}</p>
          ${propiedad.pets === true ? '<p class="text-success"><i class="fa-solid fa-paw"></i> Se permiten animales</p>':'<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten animales</p>'}
          ${propiedad.smoke === true ? '<p class="text-success"><i class="fa-solid fa-smoking"></i> Se permite fumar</p>':'<p class="text-danger"><i class="fa-solid fa-ban-smoking"></i> Prohibido Fumar</p>' }
        </div>
      </div>
    </div>
    `
  }
})

cardVentas.innerHTML = plantillaAlquiler