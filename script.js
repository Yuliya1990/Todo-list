const listContainer = document.querySelector('[data-lists]');

const LOCAL_STORAGE_TASK_KEY = 'list.tasks';
//let tasks = [];
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || ['Add your first task!'];

function render() {
  clearElement(listContainer);
  tasks.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('task-name');
    taskElement.innerText = task;
    //add close btn
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    taskElement.appendChild(span);
    listContainer.appendChild(taskElement);
  });
}

render();

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function saveAndRender() {
  save();
  render();
}
function save() {
  localStorage.setItem(LOCAL_STORAGE_TASK_KEY, JSON.stringify(tasks));
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName('close');
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    //localStorage.removeItem()
    var div = this.parentElement;
    console.log(div);
    div.style.display = 'none';
  };
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
