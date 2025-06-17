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
    <input type="checkbox" id="${taskId}" name="todo" />
    <label for="${taskId}">${taskText}</label>
  `;

  taskList.appendChild(newTask);
  const newCheckbox = newTask.querySelector("input[type='checkbox']");
  newCheckbox.addEventListener("change", () => {
    if (newCheckbox.checked) {
      newCheckbox.parentElement.classList.add("strikethrouh");
    } else {
      newCheckbox.parentElement.classList.remove("strikethrouh");
    }
    update(); // update counts
  });
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
    update();
  })
})
function update() {
  const total = document.querySelectorAll('input[type="checkbox"]').length;
  const span = document.getElementById("all");
  span.textContent = total;
  const checkedboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
  const completed = document.getElementById("completed");
  completed.textContent=checkedboxes;
  const unchecked = document.querySelectorAll('input[type="checkbox"]:not(:checked)').length;
  const active = document.getElementById("left");
 active.textContent = unchecked;
}
update();
const removecheck = document.getElementById("clear-completed");
removecheck.addEventListener("click",()=>{
   const checkedboxes = document.querySelectorAll('input[type="checkbox"]:checked');
   checkedboxes.forEach((checkbox)=>{
    const pardiv = checkbox.parentElement;
    pardiv.remove();
   })
   update();
})