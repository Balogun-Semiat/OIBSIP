const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const completedTasksList = document.getElementById('completedTasksList');
let msg = document.querySelector('.msg');


addTaskBtn.addEventListener('click', function() {
    const tasktext = taskInput.value;
    if(tasktext === ''){
        alert('Please enter a task');
        return;
    } else{
        addTaskToList(tasktext)
        taskInput.value = '';
    }    
})

function addTaskToList(tasktext) {
    const li = document.createElement('li');
    li.classList.add('list-group-item');

    const taskSpan = document.createElement('span');
    // taskSpan.classList.add('task-text');
    taskSpan.style.fontSize = '20px'

    taskSpan.textContent = tasktext;
    li.appendChild(taskSpan);

    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit'
    editBtn.style.backgroundColor = '#ffc107'
    editBtn.addEventListener('click', function() {
        let currentTask = taskSpan.textContent;
        let newTask = prompt('Enter new task', currentTask);
        if(newTask !== null && newTask.trim !== ''){
            taskSpan.textContent = newTask;
        }
        // tasktext = li.textContent
        console.log(currentTask)
    })


     // Complete Button
    const completedBtn = document.createElement('button');
    completedBtn.textContent = 'Complete';
    completedBtn.style.backgroundColor = '#28a745'

    completedBtn.addEventListener('click', function() {
        tasktext = taskSpan.textContent;
        console.log(tasktext)

        movetoCompleted(tasktext, li)
    })

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    btnGroup.appendChild(editBtn)
    btnGroup.appendChild(completedBtn)

    li.appendChild(btnGroup)
   

    taskList.appendChild(li);
  
    li.style.display = 'flex'
    li.style.gap = '2rem'
    li.style.justifyContent = 'between'

}


function movetoCompleted(tasktext, li) {
    console.log(li)
    li.remove()

    const completedLi = document.createElement('li');
    completedLi.classList.add('list-group-item');

    const span = document.createElement('span');
    span.style.fontSize = '20px'

    span.textContent = tasktext;
    completedLi.appendChild(span);

    // Undo Button
    const undoBtn = document.createElement('button');
    undoBtn.textContent = 'Undo';
    undoBtn.style.backgroundColor = '#dc3545'
    undoBtn.addEventListener('click', function() {
        addTaskToList(tasktext, li)
        completedLi.remove()
    })

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.backgroundColor = '#ffc107'
    editBtn.addEventListener('click', function() {
        let currentTask = span.textContent;
        let newTask = prompt('Enter new task', currentTask);
        if(newTask!== null && newTask.trim!== ''){
            span.textContent = newTask;
        }
    
        console.log(currentTask);
    })

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    btnGroup.appendChild(undoBtn)
    btnGroup.appendChild(editBtn)

    completedLi.appendChild(btnGroup)
    completedTasksList.appendChild(completedLi)
}

