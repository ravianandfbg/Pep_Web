// const { append } = require("cheerio/lib/api/manipulation");

let addTodoButton = document.querySelector(".add-todo");
let todoInput = document.querySelector(".todo-input");
let todoList = document.querySelector(".todo-list-container");

//attach click event on addTodoButton
// addTodoButton.addEventListener("click" , addTodo);


//e : event
todoInput.addEventListener("keypress" , function(e){
      if(e.key == "Enter"){
            addTodo();
      }
});

addTodoButton.addEventListener("click" , function(e){
      addTodo();
});

// falsy value => "" (empty string) , 0 , undefined , null , false , NaN (not a number)
function addTodo() {
      let todoInputValue = todoInput.value;
      if(todoInputValue){
            // console.log(todoInputValue);
            appendTodo(todoInputValue);

            // it will empty the todoInput after giving one input
            todoInput.value = "";
      }
}


//for 
//<div class="todo-item">
//       <p class="todo-input">Learn CSS</p>
//        <button class="delete-todo">Delete</button>
// </div>

function appendTodo(todo){

      // for => <div class="todo-item">
      let todoItemDiv = document.createElement("div"); // from this line empty <div></div> will create
      todoItemDiv.classList.add("todo-item"); // from this line <div class="todo-item"> will create

      // for => <p class="todo-input">Learn CSS</p>
      let pTag = document.createElement("p"); //from this line empty <p></p> will create
      pTag.classList.add("todo-input"); //from this line <p class="todo-input"></p> will create
      pTag.textContent = todo; //fro this line <p class="todo-input">Learn CSS</p> will create

      //for => <button class="delete-todo">Delete</button>
      let deleteTodoButton = document.createElement("button"); // from this line empty <button></button> will create
      deleteTodoButton.classList.add("delete-todo"); //from this line <button class="delete-todo"></button> will create
      deleteTodoButton.textContent = "Delete"; //from this line <button class="delete-todo">Delete</button> will create

      todoItemDiv.append(pTag); //pTag will come in div
      todoItemDiv.append(deleteTodoButton); //after pTag, button tag will come under div

      todoList.append(todoItemDiv); //pTag and button Tag will come under div

      
}
