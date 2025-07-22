// let text = document.querySelector("#text").value;
let btn = document.querySelector(".task");
let list = document.querySelector(".list");

function getTask() {
  let text = document.querySelector("#text").value.trim();
  if (text === "") {
    alert("Add a task");
    return;
  }
  // Task container
  let taskContainer = document.createElement("div");
  taskContainer.style.display = "flex";
  taskContainer.style.justifyContent = "space-between";
  taskContainer.style.alignItems = "center";
  // taskContainer.style.marginBottom = "10px";

  // Task text
  let p = document.createElement("p");
  p.textContent = text;

  // Delete button (❌ inside span)
  let delBtn = document.createElement("span");
  delBtn.className = "fas fa-trash"; // <-- THIS LINE IS IMPORTANT
  delBtn.style.cursor = "pointer";
  delBtn.style.marginLeft = "10px";

  // delBtn.style.color = "white";
  delBtn.style.padding = "2px 6px";
  delBtn.style.borderRadius = "4px";

  // Append elements
  taskContainer.appendChild(p);
  taskContainer.appendChild(delBtn);
  list.appendChild(taskContainer);

  // Delete functionality
  delBtn.addEventListener("click", () => {
    taskContainer.remove();
  });

  // Clear input
  document.querySelector("#text").value = "";
}

btn.addEventListener("click", () => {
  getTask();
});
