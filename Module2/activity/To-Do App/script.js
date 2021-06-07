let addTodoButton = document.querySelector(".add-todo");
let todoInput = document.querySelector(".todo-input");

//attach click event on addTodoButton
// addTodoButton.addEventListener("click" , addTodo);


todoInput.addEventListener("keypress" , function(e){
      if(e.key == "Enter"){
            addTodo();
      }
});

//e : event
addTodoButton.addEventListener("click" , function(e){
      addTodo();
});

// falsy value => "" (empty string) , 0 , undefined , null , false , NaN (not a number)
function addTodo() {
      let todoInputValue = todoInput.value;
      if(todoInputValue){
            console.log(todoInputValue);

            // it will empty the todoInput after giving one input
            todoInput.value = "";
      }
}
