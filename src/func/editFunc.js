import { taskVisualizer, taskArr } from './DOM.js';

export function storageTasks() { 
    localStorage.setItem('task', JSON.stringify(taskArr));
}

export function retreiveTasks() {
    const taskFromStorage = localStorage.getItem('task');

    if (taskFromStorage) {
     const obj = JSON.parse(taskFromStorage);
     //taskVisualizer(taskFromStorage);
     console.log(obj)
  } else {
    console.log("No data in local storage");
  }
}