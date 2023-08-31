// Oppgave 1
const textTask1 = document.getElementById("remove");
const removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", () => {
  textTask1.innerHTML = "";
});

// Oppgave 2
const textTask2 = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener("click", () => {
  textTask2.innerHTML = "New Text!";
});

// Oppgave 3
const inputText = document.getElementById("input-text");
const input = document.getElementById("input");
input.addEventListener("input", () => {
  const inputValue = input.value;
  inputText.textContent = `You typed: ${inputValue}`;
});

// Oppgave 4
const writeListBtn = document.getElementById("write-list");
const ul = document.getElementById("ul");
const myList = ["item one", "item two", "item three"];
writeListBtn.addEventListener("click", () => {
  myList.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
  });
});

// OppGave 5
const placeholder = document.getElementById("placeholder");
const select = document.getElementById("select");
const text = document.getElementById("text");
const createBtn = document.getElementById("create");

createBtn.addEventListener("click", () => {
  const selectValue = select.value;
  const element = document.createElement(selectValue);
  element.textContent = text.value;
  placeholder.appendChild(element);
});

//Oppgave 6
const list = document.getElementById("list");
const removeLiBtn = document.getElementById("remove-li");

removeLiBtn.addEventListener("click", () => {
  const firstLi = list.querySelector("li");
  list.removeChild(firstLi);
});

//Oppgave 7
const inputName = document.getElementById("name");
const orderBtn = document.getElementById("order");

inputName.addEventListener("input", () => {
  const name = inputName.value;
  if (name.length > 4) {
    orderBtn.disabled = true;
    orderBtn.style.border = "2px solid red";
  } else {
    orderBtn.disabled = false;
    orderBtn.style.border = "";
  }
});

//Oppgave 8
const childrenList = document.querySelectorAll(".children li");
const colorBtn = document.getElementById("color");

colorBtn.addEventListener("click", () => {
  //console.log(listChildren.querySelectorAll("li"));

  childrenList.forEach((li) => {
    li.style.border = "2px solid red";
    li.style.width = "100px";
    li.style.margin = "1px";
  });
});
