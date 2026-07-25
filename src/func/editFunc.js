import { taskVisualizer, taskArr, currentDate } from './DOM.js';
import { format, formatDistance, subDays } from 'date-fns';

let getStored;
let storedItem;

export function storageTasks() { 
  for(let task of taskArr) {
   getStored = localStorage.setItem(`${task.title}`, JSON.stringify(task))
   storedItem = localStorage.getItem(`${task.title}`);
  }
}



// tofix
export function retreiveTasks() {
if (storedItem) {
  taskVisualizer(task)
  console.log(taskArr)
  } else {
    console.log("No data in local storage");
  }
}

//FIXED
export function removeTask() {
  const taskToErase = JSON.parse(storedItem);
  localStorage.removeItem(taskToErase.title);
}