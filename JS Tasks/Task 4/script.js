/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
fetch(ENDPOINT)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    lireVoitures(data);
  });
function lireVoitures(voitures) {
  let root = document.getElementById("output");
  for (let i = 0; i < voitures.length; i++) {
    const card = document.createElement("div");
    const divImage = document.createElement("div");
    const cardImg = document.createElement("img");
    const divPara = document.createElement("div");
    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p");
    const modelList = document.createElement("select");
     for (j = 0; j < voitures[i].models.length; j++) {
    const modelName = document.createElement("option"); 
    modelName.textContent=voitures[i].models[j];
    modelList.appendChild(modelName);
      }
    card.append(divImage, divPara);
    divImage.append(cardImg);
    divPara.append(paragraph1, paragraph2, modelList);
    root.append(card);

    card.className = "card";
    divImage.className = "img";
    divPara.className = "card-footer";
    paragraph1.className = "voiture";
    modelList.className = "models";
    paragraph1.textContent = voitures[i].brand;
    paragraph2.innerText = "Models of this brand";
    cardImg.src =voitures[i].picture;
      }
}
