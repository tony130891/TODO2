import { TaskCreator} from './taskCreator.js';
import { taskVisualizer, taskArr, checkedbtn } from "./DOM.js";
import "./styles.css";


// TOFIX SVGLABELS


const taskAdder = document.querySelector('.Today');
const dialog = document.querySelector('#todoDialog');
const closeDialog = dialog.querySelector('#close-dialog');
const inputTitle = document.querySelector('#input-title');
const inputDescription = document.querySelector('#input-description');
const inputDuedate = document.querySelector('#input-duedate');
const inputPriority = document.querySelectorAll("input[name='priority']");
const inputPriorityLow = document.querySelector("#prioritylow");
const inputPrioritymedium = document.querySelector("#prioritymedium");
const inputPriorityhigh = document.querySelector("#priorityhigh");
const submitBtn = document.querySelector("#todoForm");
const main = document.querySelector('.main');



taskAdder.addEventListener('click', () => {
 dialog.showModal(); 
})

closeDialog.addEventListener('click', () => {
    dialog.close();
})

submitBtn.addEventListener('submit', () => {

    inputPriority.forEach(radiobtn => {
    radiobtn.addEventListener('change', checkedbtn)
})
  
    const newTask = new TaskCreator(inputTitle.value, inputDescription.value, 'tomorrow', checkedbtn(), true, 'notyet');
   // taskArr.push(newTask);
    //console.log(taskArr);
    taskVisualizer();
    console.log(taskArr);
})