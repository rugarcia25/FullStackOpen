const ruben = {
  name: "Ruben Garcia",
  age: 27,
  education: "FPGS",

  saludar: function () {
    console.log("Hola, mi nombre es " + this.name);
  },

  adicional: function (a, b) {
    console.log(a + b);
  },
};

ruben.adicional(1, 4); // 5 es impreso

const referenceToAddition = ruben.adicional;

// Llamo a la constante
referenceToAddition(10, 15); // 25 es impreso

ruben.crecer = () => {
  this.age += 1;
};

ruben.saludar(); // "Hola, mi nombre es Ruben Garcia" es impreso
console.log(ruben.age); // 27
ruben.crecer();
console.log(ruben.age); // 28

ruben.saludar(); // "Hola, mi nombre es Ruben Garcia"
const referenceToSaludar = ruben.saludar();
referenceToSaludar(); // "Hola, mi nombre es undefined" --> saca undefined ya que no le estamos indicando el parámetro a la función

setTimeout(ruben.saludar, 1000);
setTimeout(ruben.saludar.bind(ruben), 1000); // bind --> obliga al this a apuntar al objeto, en este caso, Ruben
