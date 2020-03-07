const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1518"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("asdasdas"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("1511231231233123121323123121238"));