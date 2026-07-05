import { taskArr } from './DOM.js';
import { format, formatDistance, subDays } from 'date-fns';

const main = document.querySelector('.main');
const currentDate = format(new Date(), "yyyy-MM-dd");

export function tabVisualizer(arrayTask) {
    for(let task of arrayTask) {
            const div = document.createElement('div');
            div.classList.add('project');
            div.setAttribute('data-name', task.title);
            main.appendChild(div);
    
            const h2 = document.createElement('h2');
            h2.textContent = `${task.title}`
            div.appendChild(h2);
    
            const para = document.createElement('p');
            para.classList.add('hiddenP')
            para.textContent = `${task.description}`;
            h2.appendChild(para);
    
    
            const div1 = document.createElement('div');
            div1.classList.add('labels');
            h2.appendChild(div1);    
    
            
            const svglabel = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
            div1.appendChild(svglabel);
    
            
            const taskDate = String(task.dueDate);
            const remainingDate = formatDistance(currentDate, task.dueDate);
            const duedate = document.createElement('p');
            duedate.textContent = `${remainingDate}`
            div1.appendChild(duedate);
    
        const divCheck = document.createElement('div');
        para.appendChild(divCheck);
        const labelInput = document.createElement('label');
        divCheck.appendChild(labelInput);
        const taskDone = document.createElement('input');
        taskDone.type = 'checkbox';
        labelInput.classList.add('Btndone')
        labelInput.appendChild(taskDone)
    
    if(task.priority == 'low') {
            svglabel.classList.add('svglow');
            labelInput.style.backgroundColor = "#c2c2fb";
        } else if (task.priority == 'medium') {
            svglabel.classList.add('svgmedium');
            labelInput.style.backgroundColor = "yellow";
        } else {
            svglabel.classList.add('svghigh');
            labelInput.style.backgroundColor = "#ed4d4d";
        }
    
        taskDone.addEventListener('change', () => {
            task.checklist = true
            for(let task1 of taskArr) {
                if(task1.checklist == true) {
                    doneTasks.push(task1)
                    taskRemover(task1.title)
                    taskArr.splice(task1, 1);
                }
            }
        })
    }
        
}