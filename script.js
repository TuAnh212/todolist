
const newTaskButton = document.getElementById('newTaskButton');
const modal = document.querySelector('.modal');
const closeModalButton = document.getElementById('closeModalButton');
const createTaskButton = document.getElementById('createTaskButton');
const newTaskInput = document.getElementById('newTaskInput');
let classNameT = 0;

newTaskButton.addEventListener('click', () => {
  modal.style.display = 'flex';
  classNameT = 1;
});
newTaskButton2.addEventListener('click', () => {
  modal.style.display = 'flex';
  classNameT = 2;
});
newTaskButton3.addEventListener('click', () => {
  modal.style.display = 'flex';
  classNameT = 3;
});



closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
  newTaskInput.value = '';
});

createTaskButton.addEventListener('click', () => {
  const taskName = newTaskInput.value.trim();
  if (taskName) {
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.setAttribute('draggable', true);
    newTask.textContent = taskName;
    if (classNameT === 1) {
      document.querySelector('#todo .task-list').appendChild(newTask);
    }
    else if (classNameT === 2) {
      document.querySelector('#inprogress .task-list').appendChild(newTask);
    }
    else {
      document.querySelector('#done .task-list').appendChild(newTask);
    }

    modal.style.display = 'none';
    newTaskInput.value = '';
    addDragEvents(newTask);
  }
});
function addDragEvents(task) {
  task.addEventListener('dragstart', () => {
    task.classList.add('dragging');
  });

  task.addEventListener('dragend', () => {
    task.classList.remove('dragging');
  });
}

const taskLists = document.querySelectorAll('.task-list');
// const taskListstodo = document.querySelectorAll('.task-list-todo');
// const taskListstodo = document.querySelectorAll('.task-list-todo');


taskLists.forEach(taskList => {
  taskList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggingTask = document.querySelector('.dragging');
    taskList.appendChild(draggingTask);
  });
});
