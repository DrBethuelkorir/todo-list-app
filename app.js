const body = document.body;
const icon = document.querySelector(".mode img");

icon.addEventListener("click", () => {
    body.classList.toggle("mode-light");

    // Swap icon image and alt text
   if(body.classList.contains("mode-light")){
    icon.src="images/icon-moon.svg"
    icon.alt="switch to dark mode"
   }else{
    icon.src="images/icon-sun.svg"
    icon.src="switch to light mode"
   }

});

const input = document.getElementById("create-today");
const taskList = document.querySelector(".form-others");

// Listen for Enter key
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo(input.value.trim());
    input.value = ""; // Clear input after adding
  }
});

function addTodo(taskText) {
  if (taskText === "") return;

  // Create unique ID
  const taskId = "todo" + (document.querySelectorAll(".radio-box").length + 1);

  // Create new radio-box
  const newTask = document.createElement("div");
  newTask.className = "radio-box";
  newTask.innerHTML = `
    <input type="radio" id="${taskId}" name="todo" />
    <label for="${taskId}">${taskText}</label>
  `;

  taskList.appendChild(newTask);
}
