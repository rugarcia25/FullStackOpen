class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("hello, my name is " + this.name);
  }
}

const ruben = new Person("Ruben Garcia", 28);
ruben.greet();

const alaya = new Person("Alaya Barcelo", 27);
alaya.greet();
