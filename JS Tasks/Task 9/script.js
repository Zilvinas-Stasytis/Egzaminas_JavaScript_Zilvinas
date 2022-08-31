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
  constructor(title, director, budget, cost) {
    (this.title = title),
      (this.director = director),
      (this.budget = budget),
      (this.cost = cost);
    function wasExpensive(budget) {
      if (budget > 100000000) {
        cost = true;
      } else {
        cost = false;
      }
      return cost;
    }
  }
}

const movie1 = new Movie("Bladerunner", "Ridley Scott", 25000);
movie.wasExpensive(25000);
const movie2 = new Movie("Birds", "Alfred Hitchcock", 255000);

console.log(movie2.cost);
