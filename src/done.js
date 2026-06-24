import { taskArr } from './DOM.js';

const doneTab = document.querySelector('.done');
const main = document.querySelector('.main');
export const doneTasks = [];

export function taskVisualizerDone() {
   for(let task of taskArr) {
            if(task.checklist == true) {
        const div = document.createElement('div');
        div.classList.add('project');
        main.appendChild(div);

        const h2 = document.createElement('h2');
        h2.textContent = `${task.title}`
        div.appendChild(h2);

        const para = document.createElement('p');
        para.classList.add('hiddenP')
        para.textContent = `${task.description}`;
        h2.appendChild(para);
        }
    }
}