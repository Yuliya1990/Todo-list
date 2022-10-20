const listContainer = document.querySelector('[data-lists]');

const LOCAL_STORAGE_TASK_KEY = 'list.tasks';
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || ['Add your first task!'];

function render() {
  clearElement(listContainer);
  console.log(tasks);

  tasks.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('task-name');
    taskElement.innerText = task;
    //add close btn
    listContainer.appendChild(taskElement);
  });
}

render();

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function delete_from_localStorage(element) {
  console.log('delete');
}

function saveAndRender() {
  save();
  render();
}
function save() {
  localStorage.setItem(LOCAL_STORAGE_TASK_KEY, JSON.stringify(tasks));
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },
  false,
);

function newElement() {
  var inputValue = document.getElementById('myInput').value;
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    tasks.push(inputValue);
  }
  document.getElementById('myInput').value = '';

  saveAndRender();
}

function clearAll() {
  localStorage.clear();
  tasks = [];
  saveAndRender();
}
