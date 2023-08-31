const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 },
];

// Hent HTML #id med getElementById
const searchInput = document.getElementById("name");
const filterInput = document.getElementById("age");
const filterBtn = document.getElementById("filter");
const usersUl = document.getElementById("users");

// Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const printUsers = (users) => {
  usersUl.innerHTML = "";
  users.forEach((user) => {
    //console.log(i + ": " + users[i].name);
    const liElement = document.createElement("li");
    liElement.textContent = `id: ${user.id}, name: ${user.name}, age: ${user.age}`;
    usersUl.appendChild(liElement);
  });
};

// Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const handleSearchName = () => {
  const input = searchInput.value.toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(input)
  );

  usersUl.innerHTML = "";
  filteredUsers.forEach((user) => {
    const liElement = document.createElement("li");
    liElement.textContent = `id: ${user.id}, name: ${user.name}, age: ${user.age}`;
    usersUl.appendChild(liElement);
  });
};

// Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const handleFilter = () => {
  const minAge = parseInt(filterInput.value);
  if (!isNaN(minAge)) {
    const filteredUsers = users.filter((user) => user.age >= minAge);
    usersUl.innerHTML = "";

    filteredUsers.forEach((user) => {
      const liElement = document.createElement("li");
      liElement.textContent = `id: ${user.id}, name: ${user.name}, age: ${user.age}`;

      usersUl.appendChild(liElement);
    });
  } else if (filterInput.value != null || filterInput.value != "") {
    printUsers(users);
  } else {
    alert("Please enter a valid minimum age.");
  }
};

printUsers(users);

// Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch),
searchInput.addEventListener("input", handleSearchName);

// Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterBtn.addEventListener("click", handleFilter);
