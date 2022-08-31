/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum() {
    return this.a + this.b;
  }
  subtraction() {
    return this.a - this.b;
  } 
  multiplication() {
    return this.a * this.b;
  } 
  division() {
    return this.a / this.b;
  }  
}
const suma = new Calculator(5, 6);
console.log(suma.sum());
const skirtumas = new Calculator(5, 6);
console.log(suma.subtraction());
const sandauga = new Calculator(5, 6);
console.log(suma.multiplication());
const dalmuo = new Calculator(5, 6);
console.log(suma.division().toFixed(4));
