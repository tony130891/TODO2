import { taskArr, taskRemover, taskVisualizer } from './DOM.js';

const doneTab = document.querySelector('.done');
const main = document.querySelector('.main');
export const doneTasks = [];
        // TOFIC: Everytime is clicked, the function is run, therefore, adding the task again
export function taskVisualizerDone() {
        for(let tasks of doneTasks) {
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
        }
}