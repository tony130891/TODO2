import { TaskCreator} from './taskCreator.js';
import { taskVisualizer, taskArr, checkedbtn, doneCount } from "./DOM.js";
import "./styles.css";
import labellow from "./low.svg";
import labelhigh from "./high.svg";
import medium from "./medium.svg";
import editContent from "./edit.svg";
import { todayTasks } from "./today.js";
import { tomorrowTasks } from "./tomorrow.js";
import { soonTasks } from "./soon.js";
import { doneTasks, taskVisualizerDone } from './done.js';
import { firstLoad, pageloader } from './pageload.js';
import { tabVisualizer } from './home.js';

const img = new Image();
const img2 = new Image();
const img3 = new Image();
const img4 = new Image();

img.src = labellow;
img2.src = medium;
img3.src = labelhigh;
img4.src = editContent;

const taskAdder = document.querySelector('.addTask');
const dialog = document.querySelector('#todoDialog');
const submitsubmit = dialog.querySelector('#submit-task')
const dialogContent = dialog.querySelector('.dialogContent');
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
const homeTab = document.querySelector('.home');
const todayTab = document.querySelector('.today');
const tomorrowTab = document.querySelector('.tomorrow');
const soonTab = document.querySelector('.soon');
const doneTab = document.querySelector('.done');
const editable = document.querySelector('.editBtn');

firstLoad(homeTab);

taskAdder.addEventListener('click', () => {
 dialog.showModal();
})

closeDialog.addEventListener('click', () => {
    dialog.close();
})

submitsubmit.addEventListener('click', () => {

    inputPriority.forEach(radiobtn => {
    radiobtn.addEventListener('change', checkedbtn)
})
  
taskVisualizer();
})

todayTab.addEventListener('click', () => {
    pageloader(todayTab)
    console.log(todayTasks)
})

doneTab.addEventListener('click', () => {
    pageloader(doneTab);
    taskVisualizerDone()
})

tomorrowTab.addEventListener('click', () => {
    pageloader(tomorrowTab);
})

soonTab.addEventListener('click', () => {
    pageloader(soonTab);
})

homeTab.addEventListener('click', () => {
    pageloader(homeTab);
    tabVisualizer(taskArr);
    console.log(taskArr)
})

