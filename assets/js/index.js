import {propiedadesVentas} from './data/propiedades_venta.js'
import { propiedadesAlquiler } from './data/propiedades_alquiler.js'


let cardVentas = document.querySelector('.card-container-ventas')
let cardAlquiler = document.querySelector('.card-container-alquiler')
const desplegarVentas = document.querySelector('#desplegar-ventas')
const desplegarAlquiler = document.querySelector('#desplegar-alquiler')
let containerVentas = document.querySelector('#container-ventas')
let containerAlquiler = document.querySelector('#container-alquiler')

let plantillaUno = ""
let plantillaDos = ""

propiedadesVentas.forEach((propiedad) => {
  if(propiedad.id <= 3){
    plantillaUno +=
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
          ${propiedad.pets === true ? '<p class="text-success"><i class="fa-solid fa-paw"></i>Se permiten animales</p>':'<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten animales</p>'}
          ${propiedad.smoke === true ? '<p class="text-success"><i class="fa-solid fa-smoking"></i>Se permite fumar</p>':'<p class="text-danger"><i class="fa-solid fa-ban-smoking"></i>Prohibido Fumar</p>' }
        </div>
      </div>
    </div>
    `
  }
})

propiedadesAlquiler.forEach((propiedad)=> {
  if(propiedad.id <= 3){
    plantillaDos +=
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
          ${propiedad.pets === true ? '<p class="text-success"><i class="fa-solid fa-paw"></i>Se permiten animales</p>':'<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten animales</p>'}
          ${propiedad.smoke === true ? '<p class="text-success"><i class="fa-solid fa-smoking"></i>Se permite fumar</p>':'<p class="text-danger"><i class="fa-solid fa-ban-smoking"></i>Prohibido Fumar</p>' }
        </div>
      </div>
    </div>
    `
  }
})

cardVentas.innerHTML = plantillaUno
cardAlquiler.innerHTML = plantillaDos



const onPropiedadVenta = () => {
  containerVentas.innerHTML = ''
  let plantillaTres = ''
  propiedadesVentas.forEach((propiedad)=>{
    if(propiedad.id > 3){
      plantillaTres =
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
            ${propiedad.pets === true ? '<p class="text-success"><i class="fa-solid fa-paw"></i>Se permiten animales</p>':'<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten animales</p>'}
            ${propiedad.smoke === true ? '<p class="text-success"><i class="fa-solid fa-smoking"></i>Se permite fumar</p>':'<p class="text-danger"><i class="fa-solid fa-ban-smoking"></i>Prohibido Fumar</p>' }
          </div>
        </div>
      </div>
      `
    }
    containerVentas.innerHTML += plantillaTres
  })
}

const offPropiedadVenta = () => containerVentas.innerHTML = ''

const toggledPropiedadVenta = () => {
  if(containerVentas.innerHTML === ''){
    onPropiedadVenta()
  }else{
    offPropiedadVenta()
  }
}

desplegarVentas.addEventListener('click', toggledPropiedadVenta)

const onPropiedadAlquiler = () => {
  containerAlquiler.innerHTML = ''
  let plantillaTres = ''
  propiedadesAlquiler.forEach((propiedad)=>{
    if(propiedad.id > 3){
      plantillaTres =
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
            ${propiedad.pets === true ? '<p class="text-success"><i class="fa-solid fa-paw"></i>Se permiten animales</p>':'<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten animales</p>'}
            ${propiedad.smoke === true ? '<p class="text-success"><i class="fa-solid fa-smoking"></i>Se permite fumar</p>':'<p class="text-danger"><i class="fa-solid fa-ban-smoking"></i>Prohibido Fumar</p>' }
          </div>
        </div>
      </div>
      `
    }
    containerAlquiler.innerHTML += plantillaTres
  })
}

const offPropiedadAlquiler = () => containerAlquiler.innerHTML = '' //VERIFICAR SI con cardAlquiler funciona

const toggledPropiedadAlquiler = () => {
  if(containerAlquiler.innerHTML === ''){
    onPropiedadAlquiler()
  }else{
    offPropiedadAlquiler()
  }
}

desplegarAlquiler.addEventListener('click', toggledPropiedadAlquiler)

