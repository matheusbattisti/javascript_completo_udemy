function checarTamanhoTexto(texto) {
  if(texto.length > 10) {
    console.log("Texto muito longo");
  } else {
    console.log("Texto dentro do limite");
  }
  console.log(texto.length);
}

checarTamanhoTexto("Teste");
checarTamanhoTexto("Vamos testar se funciona");
checarTamanhoTexto("10-");