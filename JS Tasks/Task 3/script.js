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

const ENDPOINT = 'https://api.github.com/users';
document.getElementById('btn').addEventListener('click', obtenirUtilisateur);
function obtenirUtilisateur(event) {
    event.preventDefault();
    fetch(ENDPOINT)
        .then((response) => response.json())
        .then((data) => lirePersonne(data));


}
function lirePersonne(personne) {
    let root = document.getElementById('output');
    for (let i = 0; i < personne.length; i++) {
        console.log(personne);
        let githubUser = document.createElement('div');
       Element.className = 'githubUsers';
        root.appendChild(githubUser);
        
        document.getElementsByClassName("githubUsers").innerText = personne[i].login;
        // document.getElementById("output").innerText = person[0].avatar_url;
    }
}