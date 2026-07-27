import { format, formatDistance, subDays } from 'date-fns';
import { TaskCreator } from './taskCreator.js'
import { todayTasks } from "../pages/today.js";
import { tomorrowTasks } from "../pages/tomorrow.js";
import { soonTasks } from "../pages/soon.js";
import { doneTasks, taskVisualizerDone } from '../pages/done.js';
import { removeTask } from '../func/editFunc.js';

const inputTitle = document.querySelector('#input-title');
const inputDescription = document.querySelector('#input-description');
const inputDuedate = document.querySelector('#input-duedate');
const inputPriority = document.querySelectorAll("input[name='priority']");
const main = document.querySelector('.main');
const doneTab = document.querySelector('.done');

export const currentDate = format(new Date(), "yyyy-MM-dd");


 export const checkedbtn = () => {
        let selectedRadio = document.querySelector("input[name='priority']:checked");
        return selectedRadio.value
    }
// TOFIX 
export function taskRemover(task) {
            const divEl = document.querySelector(`[data-name="${task}"]`);

            return divEl.remove()   
        }
        
        
export function taskVisualizer(taskVis) { 
    const newTask = new TaskCreator(inputTitle.value, inputDescription.value, inputDuedate.value, checkedbtn(), 'notyet');
    taskArr.push(newTask);  

        const div = document.createElement('div');
        div.classList.add('project');
        div.setAttribute('data-name', inputTitle.value || taskVis.title);
        main.appendChild(div);

        const div2 = document.createElement("div");
        div2.classList.add('sort');
        div.appendChild(div2);

        const details = document.createElement('details');
        details.classList.add('details');
        details.setAttribute('open', 'true');
        div.appendChild(details);
        const summary = document.createElement('summary');
        summary.textContent = `${newTask.title || taskVis.title}`;
        details.appendChild(summary);

        const h2 = document.createElement('h2');
        h2.textContent = `${newTask.title || taskVis.title}`
        details.appendChild(h2);

        const para = document.createElement('p');
        para.textContent = `${newTask.description || taskVis.description}`;
        details.appendChild(para);


        const div1 = document.createElement('div');
        div1.classList.add('labels');
        details.appendChild(div1);    

        
        const svglabel = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        div1.appendChild(svglabel);


    const remainingDate = formatDistance(currentDate, inputDuedate.value || taskVis.dueDate);
    const duedate = document.createElement('p');
    duedate.textContent = `${remainingDate}`
    div1.appendChild(duedate);

    //TOADD: TAB
    switch (true) {
    case remainingDate.includes("minutes") ||
      remainingDate.includes("minute") ||
      remainingDate.includes("hours") ||
      remainingDate.includes("hour"):
      todayTasks.push(newTask);
      break;
    case remainingDate.includes("days"):
      soonTasks.push(newTask);
      break;
    case remainingDate.includes("day"):
      tomorrowTasks.push(newTask);
      break;
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
        newTask.checklist = true;
        for(let task of taskArr) {
            if(task.checklist == true) {
                doneTasks.push(task)
                taskRemover(task.title)
                taskArr.splice(task, 1);
            }
        }
        console.log(taskArr)
    })


        const priorityButton = document.createElement("button");
        priorityButton.classList.add("priorityBtn");
        div2.appendChild(priorityButton);

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.classList.add('editBtn');
        div2.appendChild(editBtn)
        
    editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "Edit") {
      h2.setAttribute("contenteditable", "true");
      para.setAttribute("contenteditable", "true");
      h2.setAttribute('id', 'focusmode');
      para.setAttribute('id', 'focusmode');
      h2.focus();
      para.focus();
  
      editBtn.textContent = "Save";
    } else {
      h2.setAttribute("contenteditable", "false");
      newTask.title = h2.textContent;
      para.setAttribute("contenteditable", "false");
      newTask.description = para.textContent;
      editBtn.textContent = "Edit";
    }
     });
     console.log(taskArr)
    };


export const taskArr = [];
