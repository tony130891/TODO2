import { taskArr, taskRemover, taskVisualizer } from '../func/DOM.js';
export const soonTasks = [];
const main = document.querySelector(".main");

export function taskVisualizerSoon() {
   for(let tasks of soonTasks) {
          const div = document.createElement('div');
          div.classList.add('project');
          div.setAttribute('data-name', tasks.title);
          main.appendChild(div);
  
          const h2 = document.createElement('h2');
          h2.textContent = `${tasks.title}`
          div.appendChild(h2);
  
          const para = document.createElement('p');
          para.classList.add('hiddenP')
          para.textContent = `${tasks.description}`;
          h2.appendChild(para);

          soonTasks.splice(tasks, 1)
          }
          console.log(soonTasks)
}

// i click the btn
// reads the objects in the array
// apply the objects to the page
// if the object is already inside the page, dont do anything
// create a funct that only shows the object, and another that add them to the page
// taskVisual is the one adding