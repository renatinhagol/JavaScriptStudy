var listElement =  document.querySelector('#app ul');
var inputElement =  document.querySelector('#app input');
var buttonElement =  document.querySelector('#app button');
var toDo = JSON.parse(localStorage.getItem('list_toDo') || '');


function renderTodo(){
    listElement.innerHTML= '';

    for(todo of toDo){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Delete');
        var pos = toDo.indexOf(todo);

        linkElement.setAttribute('href','#');
        linkElement.setAttribute('onclick','deleteTodo(' + pos +')');
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
renderTodo();

function addTodo(){
    var todoText = inputElement.value;
    toDo.push(todoText);
    inputElement.value = ' ';
    renderTodo();
}
buttonElement.onclick =addTodo;

function deleteTodo(pos){
    toDo.splice(pos,1);
    renderTodo();
    saveTodo();
}

function saveTodo(){
    localStorage.setItem('list_toDo', JSON.stringify(toDo));
}