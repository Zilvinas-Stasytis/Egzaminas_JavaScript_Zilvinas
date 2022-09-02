/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'cars.json';
// const voiture = JSON.stringify(ENDPOINT);
// console.log(voiture);
let root = document.getElementById("output");
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
// paragraph1.className = "githubUser";
// paragraph2.className = "avatarURL";
// paragraph1.textContent = personnes[i].login;
// paragraph2.textContent =  personnes[i].avatar_url;
// cardImg.src = "github.png";
