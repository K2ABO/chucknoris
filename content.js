let div= document.getElementById("chuck")
let btn = document.getElementById("btn")

function mfunc(){
  fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(response => { 
    div.innerHTML=response.value
  })

.catch(error => alert("Erreur : " + error));
  
} 

btn.addEventListener("click", mfunc)



