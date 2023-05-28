//  Les sélecteur
// document.querySelector("h4").style.background = "yellow";

// const baliseHTML = document.querySelector("h4");

// console.log(baliseHTML);

// baliseHTML.style.background = "yellow"

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// addeventlistener pour créer un evenement
// Toujours faire un log pour vérifier si ça fonctionne
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// En css, #id > .class > baliseHTML  "!important" pour faire passer en priorité
//--------------------------------------------------------------

// Mouse events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  mousemove.style.border = "2px solid skyblue";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-25%, -25%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "red";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// -------------------------------------------------------------------

// Key Press event et sons
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./z.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "j") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "black";
  }
  // ring();
});

// ------------------------------------------------------

// Scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// -------------------------------------------------------

// Form event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
  console.log(language);
});

// Pour les bouttons et les checkbox pas besoin de déclarer de variables
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

// ---------------------------------------------------------

// Load Event

window.addEventListener("load", () => {
  console.log("Document chargé !");
});

// -----------------------------------------------------------

// Les forEach

const boxes = document.querySelectorAll(".box");

console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    // e.target.style.transform = "scale(0.7)"
  });
});

// ---------------------------------------------------------------

// addEventListener vs onclick
// Si 2 event, 1 er est écrasé
// On peut mettre le "onclick" en html

// bubbling => fin (de base c'est config en bubbling) (false)
document.body.addEventListener("click", () => {
  console.log("Click 1");
});

// Usecapture (True)
document.body.addEventListener(
  "click",
  () => {
    console.log("Click 2");
  },
  true
);

// --------------------------------------------------------------------

// Stop propagation
questionContainer.addEventListener("click", (e) => {
  // alert("Test !");
  e.stopPropagation();
});

// removeEventListener

// -----------------------------------------------------------------------

// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800");
// window.close()

// Evénement adossé à window
// alert("Hello")
// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

// prompt
let answer = "";

btn1.addEventListener("click", () => {
  answer = prompt("Entrez votre nom !");

  questionContainer.innerHTML += `<h3>Bravo ${answer} !</h3>`;
});

// setTimeout
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// setInterval
// let interval = setInterval(() => {
//   document.body.innerHTML += `<div class="box"><h2>Nouvelle boite</h2></div>`;
// }, 1000);

// window.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://google.com")

// window.onload = () => {
//   location.href = ("http://google.com")
// }

// Navigator
console.log(navigator.userAgent);

// Géolocoliser
// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History
// console.log(window.history);
// VOIR POURQUOI CA MARCHE PAS
// window.history.back();
// history.go(-2);

// -----------------------------------------------------------------

// setProperty

window.addEventListener("mousemove", (e) => {
  console.log(e);
  nav.style.setProperty("--x", e.layerX + "px")
  nav.style.setProperty("--y", e.layerY + "px")
})