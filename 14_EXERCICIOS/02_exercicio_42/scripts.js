const validarId = /\d+ID\b/; 

console.log(validarId.test("384284ID"));
console.log(validarId.test("384284"));
console.log(validarId.test("asd"));
console.log(validarId.test("asdasdID"));
console.log(validarId.test("ID"));
console.log(validarId.test("555ID"));