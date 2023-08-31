//import "./styles.css";

//   Sett startverdien for de ulike tellerene
let wordCounter = 0;
let positionCounter = 0;
let wrongCounter = 0;

//   Lag en liste med ulike ord
const words = ["this", "is", "a", "list", "of", "words"];

//   Hent ut HTML #id og knappen
const word = document.getElementById("word");
const wrongs = document.getElementById("wrongs");
const letter = document.getElementById("letter");
const button = document.querySelector("button[type='button']");

const setWord = () => {
  //   Skriv ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
  if (wordCounter >= words.length) {
    alert("no more word!");
  }
  const ord = words[wordCounter];
  word.innerHTML = ord;

  updateUI();
};

const changeWord = () => {
  //   Nullstill posisjonstelleren
  //   Oppdater telleren vi bruker for å velge ut ord
  positionCounter = 0;
  wordCounter++;
  setWord();
};

//   Sjekk vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkPosition = (word, position, letter) => {
  if (word.charAt(position) === letter) return true;
  return false;
};

//   Sjekk om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const wordIsCorrect = (word, position) => {
  if (word.length === position) return true;
};

const handleKeyUp = ({ key }) => {
  console.log("KEY => " + key);
  //   Hent ut ordet vi skal skrive
  const word = words[wordCounter];
  if (checkPosition(word, positionCounter, key)) {
    //   Øk posisjonstelleren
    positionCounter++;
    if (wordIsCorrect(word, positionCounter)) {
      //   Trigg funksjonen som bytter ord
      changeWord();
    }
  } else {
    wrongCounter++;
    //   Oppdater telleren for "feil"
  }
  updateUI(key);
};

const updateUI = (key) => {
  if (words[wordCounter]) {
    wrongs.innerHTML = wrongCounter;
    letter.innerHTML = key;
    word.innerHTML = `<span class="green">${words[wordCounter].slice(
      0,
      positionCounter
    )}</span>${words[wordCounter].slice(positionCounter)}`;
  }
};

window.addEventListener("keyup", handleKeyUp);
button.addEventListener("click", () => {
  console.log("Clicked!");
  button.disabled = true;
  setWord();
});
