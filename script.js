// let grand = document.querySelector(".todo-list")

// let parent = document.querySelector("#items")
// let child = grand.querySelectorAll(".item");

// console.log(child); 

// const child = document.querySelector(".item");

// const parent = child.parentElement;

// const child = document.querySelector(".input");
// const parent = child.parentElement;
// const parent = document.querySelector(".input");const grand = parent.closest(".item")
// console.log(grand);

// console.dir(document);
// console.log(typeof(document));
// console.log(document.title);
// document.title = "New title";
// console.log(document.title);
// console.log(typeof(document.title));
// console.log(document.head);
// console.log(typeof(document.head));
// console.dir(document.body);
// console.log(typeof(document.body));

// console.log(document.all);

// for (let e of document.all){
//     console.log(e);
// }
// console.log(document.links);
// console.log(document.images);
// console.log(document.lastChild);
// console.log(document.nextSibling);
// console.log(document.children);

// let wrapper = document.getElementById("header") ;

// let newText = wrapper.textContent;
// let secondText = wrapper.innerText;
// let thirdText = wrapper.innerHTML;
// console.dir(newText);
// console.dir(secondText);
// console.dir(thirdText);

// var classSelect = document.getElementsByClassName("item")[0];

//  for (let e of document.getElementsByClassName("item")){
//      console.log(e);
//      e.style.color ="green";
//      e.style.fontWeight = "900";
//  }


// let selectItem = document.querySelector("#items").querySelectorAll(".item:nth-child(2)");
// console.log(selectItem);
// let lastItem = document.querySelectorAll(".item:last-child");
// console.log(lastItem);

// for (let e of selectItem){
//     e.style.color = "red";
// }

// for (let ele of lastItem){
//     ele.style.color = "green"
// }

// let grandParent = document.querySelector(".todo-list");
// console.log(grandParent);


// let parent = grandParent.children;
// console.log(parent);


// for (let e of parent){
//     e.style.color = "green";
// }

// let children = grandParent.querySelectorAll(".item");

// for (let ele of children){
//     ele.style.color = "blue";
// }

// let child = document.querySelector(".item");
// console.log(child);
// let parent = child.parentElement;
// console.log(parent);


// let child = document.querySelector(".item");
// console.log(child);

// let parent = child.closest("#items");
// console.log(parent);

// let grandParent = parent.closest(".todo-list");
// console.log(grandParent);


// let grandParent = document.getElementById("items");
// console.log(grandParent);
// let parent = grandParent.children;
// console.log(parent);
// let child = parent[1].children;
// console.dir(child);


// let child = document.querySelector(".item");
// console.log(child);
// let nextSib = child.nextElementSibling;
// nextSib.style.color ="blue";
// let next2 = nextSib.nextElementSibling;
// next2.style.color = "green";
// let previous = next2.previousElementSibling;
// previous.style.color = "red";
// let previous2 = previous.previousElementSibling;
// previous2.style.color ="yellow";
// console.log(previous2);
// console.log(previous);
// console.log(next2);
// console.log(nextSib);



// const divCreate = document.createElement("div");

// divCreate.className = "wrap";
// divCreate.setAttribute("id", "wrapper");
// divCreate.setAttribute("title", "New title");
// divCreate.setAttribute("href", "www.facebook.com");
// divCreate.setAttribute("data-target", "_blank");
// // divCreate.classList =("one, two, three");

// const selectDiv = document.querySelector(".todo-list");

// const h2Select = document.querySelector("h2");

// selectDiv.insertBefore(divCreate, h2Select);

// selectDiv.append(divCreate);

// selectDiv.appendChild(divCreate);

// selectDiv.append("New text", divCreate,document.createElement("p"));
// selectDiv.appendChild(divCreate);

// const header = document.querySelector(".header");

// header.addEventListener("mouseenter", (event)=>{
//     console.log(event);
// })


// let form = document.querySelector("form");
// let inputBox = document.querySelector('.newTask');

// inputBox.addEventListener("keypress", (e)=>{
//     // e.preventDefault();
//     console.log(e.target);
// })




// Create to do app

// select all items 

// let newTask = document.querySelector(".newTask");
// let form = document.querySelector("form");
// // let inComplete = document.querySelector(".todo-list");
// let inCompleteUl = document.querySelector("#items")
// // let complete = document.querySelector("complete-list");
// let completeUl = document.querySelector(".ComItems");


// // Create task function
// const createTask = function (task) {
//     let listItem = document.createElement("li");
//     let checkBox = document.createElement("input");
//     let label = document.createElement("label");

//     label.innerText = task;
//     checkBox.type = "checkbox";

//     listItem.appendChild(checkBox);
//     listItem.appendChild(label);

//     return listItem;

// }

// // Add task function
// const addTask = function (event) {
//     event.preventDefault();
//     let itemList = createTask(newTask.value);
//     inCompleteUl.appendChild(itemList);
//     newTask.value = "";

//     // incomplete task bind function

//     bindIncompleteTask(itemList, completeTask)


// }
// const completeTask = function () {
//     let itemList = this.parentNode;
//     let deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
//     deleteBtn.className = "delete";
//     itemList.appendChild(deleteBtn);

//     let checkBox = itemList.querySelector("[type='checkbox']");
//     checkBox.remove();
//     completeUl.appendChild(itemList);

//     bindCompleteTask(itemList, deleteTask);
// }

// const deleteTask = function () {
//     let itemList = this.parentNode;
//     let ul = itemList.parentNode;

//     ul.removeChild(itemList);
// }

// const bindIncompleteTask = function (taskItem, checkboxClick) {
//     let checkBox = taskItem.querySelector("input[type='checkbox']");
//     checkBox.onchange = checkboxClick;

// }

// const bindCompleteTask = function (taskItem, deleteBtnClick) {
//     let deleteBtn = taskItem.querySelector(".delete");
//     deleteBtn.onclick = deleteBtnClick;
// }

// // for (let i = 0; i < inCompleteUl.children.length; i++) {
// //     bindIncompleteTask(inCompleteUl[i], completeTask)
// // }

// // for (let i = 0; i < completeUl.children.length; i++) {
// //     bindCompleteTask(completeTask[i], deleteTask)
// // }

// form.addEventListener("submit", addTask);


// Create todo app

// select all items

let newTask = document.querySelector(".newTask");
let form = document.querySelector("form");
let todoUl = document.querySelector(".items");
let ComItems = document.querySelector(".ComItems");

// functions
const createTask = function (task) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    checkBox.type = "checkbox";
    label.innerText = task;

    return listItem;
}

const addTask = function (e){
    e.preventDefault();
    let listItem = createTask(newTask.value);

    todoUl.appendChild(listItem);
    // newTask.value = "";
    if(newTask.value =""){
        alert("Enter Your Value");
    }else{
        newTask.value =""; 
    }

    bindInCompleteTask(listItem, completeTask);

}
const completeTask = function () {
    let listItem = this.parentNode;
    let button = document.createElement("button");
    button.innerText = "Delete";
    button.className = 'delete';
    listItem.appendChild(button);

    let checkBox = listItem.querySelector("input[type='checkbox']");

    checkBox.remove();
    ComItems.appendChild(listItem);

    bindCompleteTask(listItem, deleteTask);

}

const bindInCompleteTask = function(taskList, checkBoxClick) {
    let checkbox = taskList.querySelector("input[type='checkbox']");
    checkbox.onchange = checkBoxClick;
}

const deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

const bindCompleteTask = function (taskItem, deleteItem) {
    let deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.onclick = deleteItem;
}

// for(i=0; i<todoUl.children.length; i++){
//     bindInCompleteTask(todoUl.children.length[i], completeTask);
// }

// for(a=0; a<ComItems.children.length; a++){
//     bindCompleteTask(ComItems.children.length[a], deleteTask);
// }
form.addEventListener("submit", addTask);