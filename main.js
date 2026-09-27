const input = document.getElementById("input-text");
const addBtn = document.getElementById("add-btn");
const containerOuput = document.getElementById("output");
const unOrderList = document.createElement("ul");

containerOuput.append(unOrderList);


function deleteList(list) {
  if (confirm("Do you want delete ?")) {
    list.remove()
  } else {
    return;
  }
}


addBtn.addEventListener("click", () => {
  const inputValue = input.value.trim();

  if (!inputValue) {
    alert("The input field must be filled in!");
    return;
  }

  const list = document.createElement("li");
  const checkbox = document.createElement("input");
  const text = document.createElement("p");
  const removeBtn = document.createElement("button");
  
  checkbox.type = "checkbox";
  text.textContent = inputValue;
  removeBtn.textContent = "Delete";
  removeBtn.classList.add("del-btn");

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      text.style.color = "red";
      removeBtn.setAttribute("disabled", true);
    } else {
      text.style.color = "black";
      removeBtn.removeAttribute("disabled");
    }
  });

  removeBtn.addEventListener("click", () => {
    deleteList(list);
  });

  list.append(checkbox, text, removeBtn);
  unOrderList.append(list);

  input.value = "";
  input.focus();
});
