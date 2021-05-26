//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');




//event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck);

//functions

function addTodo(event){

    //prevent form from submitting
    event.preventDefault();

    //todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create <li>
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);


    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)
    

    //Append to list
    todoList.appendChild(todoDiv)

    //Clear todo Input Value
    todoInput.value = "";
    
} 

function deleteCheck(e){
    const item = e.target;
    //Delete the todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        //todo.remove()
    }

    //Check Mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }


}