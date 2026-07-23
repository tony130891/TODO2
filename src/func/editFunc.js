import { taskVisualizer, taskArr } from './DOM.js';

export function storageTasks() { 
    localStorage.setItem('task', JSON.stringify(taskArr));
}

const taskFromStorage = localStorage.getItem('task');
const obj = JSON.parse(taskFromStorage);

export function retreiveTasks() {
  if (taskFromStorage) {
    for (let task of obj) {
      taskArr.push(task)
    }
  
  } else {
    console.log("No data in local storage");
  }
}