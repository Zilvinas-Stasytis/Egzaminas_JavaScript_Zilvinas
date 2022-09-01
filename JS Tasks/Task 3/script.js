/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
document.getElementById("btn").addEventListener("click", obtenirUtilisateur);
function obtenirUtilisateur(event) {
  event.preventDefault();
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => lirePersonne(data));
}
function lirePersonne(personnes) {
  let root = document.getElementById("output");
  root.textContent = "";
  console.log(personnes);
  for (let i = 0; i < personnes.length; i++) {
    const card = document.createElement("div");
    const divImage = document.createElement("div");
    const cardImg = document.createElement("img");
    const divPara = document.createElement("div");
    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p");
    card.append(divImage, divPara);
    divImage.append(cardImg);
    divPara.append(paragraph1, paragraph2);
    root.append(card);

    card.className = "card";
    divImage.className = "img";
    divPara.className = "card-footer";
    paragraph1.className = "githubUser";
    paragraph2.className = "avatarURL";
    paragraph1.textContent = personnes[i].login;
    paragraph2.textContent =  personnes[i].avatar_url;
    cardImg.src = "github.png";
  }
}
