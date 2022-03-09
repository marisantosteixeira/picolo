class Retangulo{ 
  constructor(altura, largura){ 
    this.altura = altura;
    this.largura = largura;
  }

   calcularArea() {
    return this.altura * this.largura;

  }
}
let retangulo = new Retangulo("10", "10");
let retangule = new Retangulo("30", "60");
let retangulo2 = new Retangulo("12", "10");

console.log(retangulo.calcularArea())
console.log(retangule.calcularArea())
console.log(retangulo2.calcularArea())

 


