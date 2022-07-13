// Variable + Function to generate new data from the API
var generateBtn = document.querySelector("#funfactBtn");
function getFunFactData() {
  fetch("https://asli-fun-fact-api.herokuapp.com/")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var funFact = data.data.fact
      var funFactEl = document.querySelector('#fact')
      funFactEl.innerText = `${funFact}`
    })

}
// Added button to start Function
generateBtn.addEventListener("click", getFunFactData);

// Variable + Function to generate new data from the API
var generateBtn1 = document.querySelector("#pokeBtn");
function getPokemonData() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var poke = JSON.stringify(data.results[19].name)
      var pokeEl = document.querySelector('#pokemon')
      var random = data.results[Math.floor(Math.random() * data.results.length)];
      pokeEl.innerText = `${random.name.toUpperCase()}`

    })

}
// Added button to start Function
generateBtn1.addEventListener("click", getPokemonData);


// Variable + Function to generate new data from the API
var generateBtn2 = document.querySelector("#excuseBtn");
function getExcuseData() {
  fetch("https://excuser.herokuapp.com/v1/excuse/college/4")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var excuse = data[3].excuse
      var excuseEl = document.querySelector('#excuse')
      excuseEl.innerText = `${excuse}`
    })

}
// Added button to start Function
generateBtn2.addEventListener("click", getExcuseData);

// Variable + Function to generate new data from the API
var generateBtn3 = document.querySelector("#triviaBtn");
function getTriviaData() {
  fetch("https://the-trivia-api.com/api/questions?limit=20")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var triviaQuestion = data[19].question
      var triviaAnswer = data[19].correctAnswer
      var triviaEl = document.querySelector('#question')
      triviaEl.innerText = `Question: ${triviaQuestion} Answer: ${triviaAnswer}`
    })
}
// Added button to start Function
generateBtn3.addEventListener("click", getTriviaData);


// Variables created to recognize the Array + HTML Elements + retrieve from local storage
var favorites = [];
if (localStorage.getItem("favorites")) {
  favorites = JSON.parse(localStorage.getItem("favorites"))
}

var excuseFav = document.getElementById('fvr-excuse')
var triviaFav = document.getElementById('fvr-trivia')
var pokemonFav = document.getElementById('fvr-poke')
var funFactFav = document.getElementById('fvr-fact')

// Button to add Excuses to your Favorites
excuseFav.addEventListener("click", function () {
  var excuseText = document.getElementById("excuse").innerHTML;
  if (excuseText === "") {
    return;
  }
  favorites.push(excuseText);
  localStorage.setItem("favorites", JSON.stringify(favorites));
});

// Button to add Trivia to your Favorites
triviaFav.addEventListener("click", function () {
  var triviaText = document.getElementById("question").innerHTML;
  if (triviaText === "") {
    return;
  }
  favorites.push(triviaText);
  localStorage.setItem("favorites", JSON.stringify(favorites));
});

// Button to add Pokemon to your Favorites
pokemonFav.addEventListener("click", function () {
  var pokemonText = document.getElementById("pokemon").innerHTML;
  if (pokemonText === "") {
    return;
  }
  favorites.push(pokemonText);
  localStorage.setItem("favorites", JSON.stringify(favorites));
});

// Button to add fun facts to your Favorites
funFactFav.addEventListener("click", function () {
  var funFactText = document.getElementById("fact").innerHTML;
  if (funFactText === "") {
    return;
  }
  favorites.push(funFactText);
  localStorage.setItem("favorites", JSON.stringify(favorites));
});

// Variables for the Modal
var modalBtn = document.getElementById('modal2')
var modalFav = document.getElementById('modalFav')
var favList = document.getElementById('favList')

// Modal button revealing favorites from local storage
modalBtn.addEventListener("click", event => {
  favList.innerText = "";
  for (let i = 0; i < favorites.length; i++) {
    favList.insertAdjacentHTML("beforeend", `<li>${favorites[i]}</li>`)
  };
  modalFav.style.display = 'block';
});

// Close button for the Modal
var closeModal = document.getElementsByClassName("modal-footer")[0];
closeModal.onclick = function () {
  modalFav.style.display = "none";
}