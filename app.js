//selectors


    /*The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

    Note: The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.

    If the selector matches an ID in document that is used several times (Note that an "id" should be unique within a page and should not be used more than once), it returns the first matching element.*/ 

    //I used the class as the id in this instance
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');




//event listeners
    /*The addEventListener() method attaches an event handler to the specified element.

    The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

    You can add many event handlers to one element.

    You can add many event handlers of the same type to one element, i.e two "click" events.

    You can add event listeners to any DOM object not only HTML elements. i.e the window object.

    The addEventListener() method makes it easier to control how the event reacts to bubbling.

    When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

    You can easily remove an event listener by using the removeEventListener() method.
 */
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck);

//functions

function addTodo(event){

    //prevent form from submitting
    event.preventDefault();

    //todo Div
    /*creates a div to hold the li */
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create <li>
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    //adds the li (todo item) to the todoDiv
    todoDiv.appendChild(newTodo);


    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    //appends to the completed button
    todoDiv.appendChild(completedButton)

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    //appends to the trash button
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
        todo.addEventListener("transitioned", function(){
            todo.remove()
        });
    }

    //Check Mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }


}