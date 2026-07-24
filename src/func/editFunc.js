import { taskVisualizer, taskArr, currentDate } from './DOM.js';
import { format, formatDistance, subDays } from 'date-fns';

export function storageTasks() { 
  for(let task of taskArr) {
  localStorage.setItem(`${task.title}`, JSON.stringify(task));
  }
}


// tofix
const taskFromStorage = localStorage.getItem('task');
const obj = JSON.parse(taskFromStorage);

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