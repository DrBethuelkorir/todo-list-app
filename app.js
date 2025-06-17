const body = document.body;
const icon = document.querySelector(".mode img");

icon.addEventListener("click", () => {
  body.classList.toggle("mode-light");

  if (body.classList.contains("mode-light")) {
    icon.src = "images/icon-moon.svg";
    icon.alt = "night mode";
  } else {
    icon.src = "images/icon-sun.svg";
    icon.alt = "light mode";
  }
});

const input = document.getElementById("create-today");
const taskList = document.querySelector(".form-others");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo(input.value.trim()); 
    input.value = ""; 
  }
});

function addTodo(taskText) { 
  if (taskText === "") return;

  const taskId = "todo" + (document.querySelectorAll(".radio-box").length + 1); 

  const newTask = document.createElement("div");
  newTask.className = "radio-box";
  newTask.innerHTML = `
    <input type="radio" id="${taskId}" name="todo" />
    <label for="${taskId}">${taskText}</label>
  `;

  taskList.appendChild(newTask);
}
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) =>{
  checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
      checkbox.parentElement.classList.add("strikethrouh")
    }
    else{
      checkbox.parentElement.classList.remove("strikethrouh")
    }
  })
})