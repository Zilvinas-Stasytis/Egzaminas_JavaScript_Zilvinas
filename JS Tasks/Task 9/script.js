/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    (this.title = title),
      (this.director = director),
      (this.budget = budget)    
    }
    wasExpensive() {
      return this.budget > 100000000? true:false;
  }
}

const movie1 = new Movie("Bladerunner", "Ridley Scott", 25000);
console.log(movie1.wasExpensive());
const movie2 = new Movie("Birds", "Alfred Hitchcock", 255000000);
console.log(movie2.wasExpensive());
