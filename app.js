//Adding todos
const addTodos = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//function to generate todos template
const generateTemplate = todo =>{
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <lord-icon
                class="delete"
                src="https://cdn.lordicon.com/jmkrnisz.json"
                trigger="hover"
                style="width:30px;height:30px">
            </lord-icon>
        </li>
    `;

    list.innerHTML += html;
}

addTodos.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addTodos.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addTodos.reset();
    }
});

//Deleting Todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//search function
const filterTodos = searchValue => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(searchValue))
        .forEach(todo =>  todo.classList.add('filtered'));

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(searchValue))
        .forEach(todo =>  todo.classList.remove('filtered'));
}

search.addEventListener( 'keyup', () =>{
    const searchValue = search.value.trim().toLowerCase();
    filterTodos(searchValue);
} )