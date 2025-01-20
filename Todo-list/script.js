

function addTodo() {
   
  const nameInput = document.getElementById("name");
  const dateInput = document.getElementById("duedate");
  const outputDisplay = document.getElementById("output");
 

    if(nameInput.value === "" || dateInput.value === ""){
    alert("Must Fill The Input Fields");
    return;
  }   

   const li = document.createElement("li");  
   li.classList.add("liitems");

   const fullContainer = document.createElement("div");
   fullContainer.classList.add("fullCointainer");

   const checkBoxContain = document.createElement('div');
   checkBoxContain.classList.add("custom-checkbox");

   const checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.id = "checkbox";
   checkbox.classList.add("check");

   const checkLable = document.createElement("lable");
   checkLable.classList.remove("checkbox");
   checkLable.htmlFor = checkbox.id;

   checkBoxContain.appendChild(checkbox);
   checkBoxContain.appendChild(checkLable);

   const inputName = document.createElement("span");
   inputName.classList.add("outname");
   inputName.innerHTML = nameInput.value;

   const inputDate = document.createElement("span");
   inputDate.classList.add("outdate");
   inputDate.innerHTML = dateInput.value;
   
   const buttondiv = document.createElement("div");
   buttondiv.classList.add("buttondiv");

   const deleteButton = document.createElement("button");
   deleteButton.classList.add("delete");
   deleteButton.textContent = "Delete";
   buttondiv.appendChild(deleteButton)

   deleteButton.addEventListener("click" , function () {
    li.remove();
   });
   
  fullContainer.appendChild(checkBoxContain);
  fullContainer.appendChild(inputName);
  fullContainer.appendChild(inputDate)

  li.appendChild(fullContainer);
  li.appendChild(buttondiv);
   
  outputDisplay.appendChild(li);
 
  checkbox.addEventListener("change", function(){
    if(checkbox.checked) {
      
      checkBoxContain.style.backgroundImage = "url('ticmarkcheck.svg')";
      checkBoxContain.style.backgroundPosition = "center";
      checkBoxContain.style.backgroundRepeat = "no-repect";
      checkBoxContain.style.backgroundSize = "contain";
      inputName.style.textDecoration = "line-through";
      inputName.style.color = "gray";
      inputDate.style.textDecoration = "line-through";
      inputDate.style.color = "gray";
  } else { 
    inputName.style.color = "";
    inputDate.style.color = "";
    checkBoxContain.style.background = "none";
    inputName.style.textDecoration = "none";
    inputDate.style.textDecoration = "none"; 
  }
 
});
  nameInput.value = "";
  dateInput.value = "";
  saveData();
}

function saveData() {
    const outputDisplay = document.getElementById("output");
    localStorage.setItem("dataa", JSON.stringify(outputDisplay.innerHTML));
}

function loadData() {
    const storedData = localStorage.getItem("dataa");
    if (storedData) {
        const data = document.getElementById("output");
        data.innerHTML = JSON.parse(storedData);

        // Reattach event listeners to existing checkboxes and delete buttons
        const checkboxes = data.querySelectorAll(".check");
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                const checkBoxContain = checkbox;
                const inputName = checkbox.closest('li').querySelector('.outname');
                const inputDate = checkbox.closest('li').querySelector('.outdate');
                if (checkbox.checked) {
                    checkBoxContain.style.backgroundImage = "url('ticmarkcheck.svg')";
                    checkBoxContain.style.backgroundPosition = "center";
                    checkBoxContain.style.backgroundRepeat = "no-repeat";
                    checkBoxContain.style.backgroundSize = "contain";
                    inputName.style.textDecoration = "line-through";
                    inputName.style.color = "gray";
                    inputDate.style.textDecoration = "line-through";
                    inputDate.style.color = "gray";
                } else {
                    inputName.style.color = "";
                    inputDate.style.color = "";
                    checkBoxContain.style.background = "none";
                    inputName.style.textDecoration = "none";
                    inputDate.style.textDecoration = "none";
                }
                saveData();
            });
        });

        const deleteButtons = data.querySelectorAll(".delete");
        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener("click", function () {
                deleteButton.closest('li').remove();
                saveData();
            });
        });
    }
}

// Initialize by loading any existing data from localStorage
loadData();

