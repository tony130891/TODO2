import { taskVisualizer, taskArr } from './DOM.js';

export function storageTasks() { 
    localStorage.setItem('task', JSON.stringify(taskArr));
}

export function retreiveTasks() {
    const taskFromStorage = localStorage.getItem('task');
    const obj = JSON.parse(taskFromStorage);

    if (taskFromStorage) {
      for (let task of obj) {
        taskArr.push(task)
        console.log(task)
      }
  } else {
    console.log("No data in local storage");
  }
}