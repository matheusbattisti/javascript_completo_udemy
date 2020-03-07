let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2
};

delete onibus.rodas;

console.log(onibus.rodas);

onibus.janelas = 20;

console.log(onibus);
console.log(onibus.janelas);