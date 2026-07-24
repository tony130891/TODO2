import { taskVisualizer, taskArr, currentDate } from './DOM.js';
import { format, formatDistance, subDays } from 'date-fns';

let storedItem;
let getStored;

export function storageTasks() { 
  for(let task of taskArr) {
   getStored = localStorage.setItem(`${task.title}`, JSON.stringify(task))
   storedItem = localStorage.getItem(`${task.title}`);
  }
  //taskArr.push(JSON.parse(storedItem));
  console.log(taskArr)
}

//const obj = JSON.parse(getStored);
// tofix

export function retreiveTasks() {

if (taskFromStorage) {
    for (let task of obj) {
      taskArr.push(task)
      taskVisualizer(task)
    }
  console.log(taskArr)
  } else {
    console.log("No data in local storage");
  }
}