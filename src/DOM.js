import { format, formatDistance, subDays } from 'date-fns';
import { TaskCreator } from './taskCreator.js'
import { todayTasks } from "./today.js";
import { tomorrowTasks } from "./tomorrow.js";
import { soonTasks } from "./soon.js";
import { doneTasks, taskVisualizerDone } from './done.js';

const inputTitle = document.querySelector('#input-title');
const inputDescription = document.querySelector('#input-description');
const inputDuedate = document.querySelector('#input-duedate');
const inputPriority = document.querySelectorAll("input[name='priority']");
const main = document.querySelector('.main');
const doneTab = document.querySelector('.done');

const currentDate = format(new Date(), "yyyy-MM-dd");


 export const checkedbtn = () => {
        let selectedRadio = document.querySelector("input[name='priority']:checked");
        return selectedRadio.value
    }

export function taskRemover(task) {
            const divEl = document.querySelector(`[data-name="${task}"]`);
            return divEl.remove()   
        }

export function taskVisualizer() { 

    const newTask = new TaskCreator(inputTitle.value, inputDescription.value, inputDuedate.value, checkedbtn(), 'notyet');
    taskArr.push(newTask);
        
        const div = document.createElement('div');
        div.classList.add('project');
        div.setAttribute('data-name', newTask.title);
        main.appendChild(div);

        const details = document.createElement('details');
        div.appendChild(details);
        const summary = document.createElement('summary');
        summary.textContent = `${newTask.title}`;
        details.appendChild(summary);

        const h2 = document.createElement('h2');
        h2.textContent = `${newTask.title}`
        details.appendChild(h2);

        const para = document.createElement('p');
        para.textContent = `${newTask.description}`;
        details.appendChild(para);


        const div1 = document.createElement('div');
        div1.classList.add('labels');
        details.appendChild(div1);    

        
        const svglabel = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        div1.appendChild(svglabel);


    const remainingDate = formatDistance(currentDate, inputDuedate.value);
    const duedate = document.createElement('p');
    duedate.textContent = `${remainingDate}`
    div1.appendChild(duedate);

    //TOADD: TAB
    if(remainingDate.includes('minute')) {
        todayTasks.push(newTask)            
    }

    const divCheck = document.createElement('div');
    para.appendChild(divCheck);
    divCheck.classList.add('done')
    const labelInput = document.createElement('label');
    divCheck.appendChild(labelInput);
    const taskDone = document.createElement('input');
    taskDone.type = 'checkbox';
    labelInput.classList.add('Btndone')
    labelInput.appendChild(taskDone)
    div.appendChild(divCheck)

if(newTask.priority == 'low') {
        svglabel.classList.add('svglow');
        labelInput.style.backgroundColor = "#c2c2fb";
    } else if (newTask.priority == 'medium') {
        svglabel.classList.add('svgmedium');
        labelInput.style.backgroundColor = "yellow";
    } else {
        svglabel.classList.add('svghigh');
        labelInput.style.backgroundColor = "#ed4d4d";
    }

    taskDone.addEventListener('change', () => {
        newTask.checklist = true
        for(let task of taskArr) {
            if(task.checklist == true) {
                doneTasks.push(task)
                taskRemover(task.title)
                taskArr.splice(task, 1);
            }
        }

    })
        const editBtn = document.createElement('button');
        editBtn.textContent = "edit";
        editBtn.classList.add('editBtn');
        div.appendChild(editBtn)
        
        console.log(taskArr);
    };


export const taskArr = [];