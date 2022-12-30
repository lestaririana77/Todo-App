// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value; // getting user entered value
    if(userData.trim() != 0){ //if user values aren't only spaces
       addBtn.classList.add("active"); //active the add button
    }else{
       addBtn.classList.remove("active"); //unactive the add button
    }
}
showTasks(); // calling showTasks function

// if user click on the add button
addBtn.onclick = ()=>{
    let userData = inputBox.value; // getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localStorage
    if(getLocalStorage == null){ //if localStorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
    }
    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)) //transforming js object into a json string
    showTasks(); // calling showTasks function
}

// function to add task list inside ul
function ahowTasks() {
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localStorage
    if(getLocalStorage == null){ //if localStorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = ""; // once task added leave the input field blank
    
}