const todos = [
  "Apprendre JS",
  "Apprendre React",
  "Apprendre PHP",
  "Apprendre Laravel",
];
const btnAjouter = document.querySelector("#ajouter");
const ul = document.getElementById("todo-lit");
// debugger
function addTodos() {
  // event.preventDefault();
  const textSaisi = document.getElementById("todo");


  if (textSaisi.value !== "") {
    todos.push(textSaisi.value.trim());
    ul.textContent = "";
    
    displayTodos();
    textSaisi.value=""
  }
}

function supTodo(event) {
  const parent = event.target.parentElement;
  let textCon = parent.textContent;
  textCon = textCon.substring(0, textCon.length - 2);

    //  console.log(textCon);

  for (const i in todos) {
    if (todos[i] === textCon) {
      todos.splice(i, 1);
      // console.log(todos);
      ul.textContent = "";

      displayTodos();

      break;
    }
  }
}

function griser(event) {
  const parent = event.target.parentElement;

  // let textCon=textCon.substring(0,textCon.length-1)

  const checkbox = event.target;
  if (checkbox.checked) {
    parent.style = "opacity: 0.3;";
  } else {
    parent.style = "opacity: unset;";
  }
}

function displayTodos() {
  for (const element of todos) {
    // console.log(element);
    const liste = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = "X";
    button.className = "sup";

    const checkbox = document.createElement("input");
    checkbox.className = "check";
    checkbox.type = "checkbox";

    // liste.textContent=element

    const TextElement = document.createTextNode(element+ " ");

    liste.append(checkbox, TextElement, button);

    // console.log(liste.textContent);

    ul.append(liste);
  }

  addEvSup();
  addEvCheck();
}

function main() {
  displayTodos();

  
}

main();

btnAjouter.addEventListener("click", addTodos);

function addEvSup() {
  const allSup = document.querySelectorAll(".sup");
  for (const element of allSup) {
    // console.log(element);
    element.addEventListener("click", supTodo);
  }
}

function addEvCheck() {
  const allCheck = document.querySelectorAll(".check");
  // console.log(allCheck);

  for (const element of allCheck) {
    element.addEventListener("input", griser);
  }
}



