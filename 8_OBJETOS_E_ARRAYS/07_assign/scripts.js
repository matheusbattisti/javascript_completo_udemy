let carro = {
  portas: 2,
  portamalas: '200l',
  motor: '2.0'
}

console.log(carro);

let adicionais = {
  tetosolar: true,
  arcondicionado: true,
}

Object.assign(carro, adicionais);

console.log(carro);