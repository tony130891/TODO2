import { taskArr, currentDate, taskRemover } from '../func/DOM.js';
import { format, formatDistance, subDays } from 'date-fns';
import { priorityChanger } from '../func/priorityFunc.js';
import { todayTasks } from "../pages/today.js";
import { tomorrowTasks } from "../pages/tomorrow.js";
import { soonTasks } from "../pages/soon.js";
import { doneTasks, taskVisualizerDone } from '../pages/done.js';
import { removeTask } from '../func/editFunc.js';

const main = document.querySelector('.main');

export function tabVisualizer(arrayTask) {
    for(let task of arrayTask) {
        const div = document.createElement('div');
                div.classList.add('project');
                div.setAttribute('data-name', task.title);
                main.appendChild(div);
        
                const div2 = document.createElement("div");
                div2.classList.add('sort');
                div.appendChild(div2);
        
                const details = document.createElement('details');
                details.classList.add('details');
                details.setAttribute('open', 'true');
                div.appendChild(details);
                const summary = document.createElement('summary');
                summary.textContent = `${task.title}`;
                details.appendChild(summary);
        
                const h2 = document.createElement('h2');
                h2.textContent = `${task.title}`
                details.appendChild(h2);
        
                const para = document.createElement('p');
                para.textContent = `${task.description}`;
                details.appendChild(para);
        
        
                const div1 = document.createElement('div');
                div1.classList.add('labels');
                details.appendChild(div1);    
        
                
                const svglabel = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                div1.appendChild(svglabel);
        
        
            const remainingDate = formatDistance(currentDate, task.dueDate);
            const duedate = document.createElement('p');
            duedate.textContent = `${remainingDate}`
            div1.appendChild(duedate);
        
            //TOADD: TAB
           /* switch (true) {
            case remainingDate.includes("minutes") ||
              remainingDate.includes("minute") ||
              remainingDate.includes("hours") ||
              remainingDate.includes("hour"):
              todayTasks.push(task);
              break;
            case remainingDate.includes("days"):
              soonTasks.push(task);
              break;
            case remainingDate.includes("day"):
              tomorrowTasks.push(task);
              break;
          }
          */
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
              
              //const taskDone = document.querySelector('.Btndone');
              taskDone.addEventListener('change', () => {
                task.checklist = true;
                doneTasks.push(task)
                taskRemover(task);
              removeTask(task);
              taskArr.splice(task, 1);
              tomorrowTasks.splice(task, 1);
              todayTasks.splice(task, 1);
              soonTasks.splice(task, 1);
              })
         
                const priorityButton = document.createElement("button");
                priorityButton.classList.add("priorityBtn");
                
                const dropdown = document.createElement('div');
                dropdown.classList.add('dropdown');
                div2.appendChild(dropdown);
                dropdown.appendChild(priorityButton)
        
                const dropdownContent = document.createElement('div');
                dropdownContent.classList.add('dropdown-content');
                dropdownContent.id = 'myDropdown';
                dropdown.appendChild(dropdownContent);
        
                 const priorityHigh = document.createElement('input');
                    priorityHigh.type = 'radio';
                    priorityHigh.name = 'priority';
                    priorityHigh.value = 'high';
                    priorityHigh.id = 'priorityhigh'
                    
                                const labelHigh = document.createElement("label");
                                labelHigh.textContent = "high";
                                dropdownContent.appendChild(labelHigh)
                                dropdownContent.appendChild(priorityHigh);
                    
                                 const priorityMedium = document.createElement('input');
                                priorityMedium.type = 'radio';
                                priorityMedium.name = 'priority';
                                priorityMedium.value = 'medium';
                                priorityMedium.id = 'prioritymedium'
                                
                                const labelMedium = document.createElement("label");
                                labelMedium.textContent = "medium";
                                dropdownContent.appendChild(labelMedium)
                                dropdownContent.appendChild(priorityMedium);
                    
                                const priorityLow = document.createElement('input');
                                priorityLow.type = 'radio';
                                priorityLow.name = 'priority';
                                priorityLow.value = 'low';
                                priorityLow.id = 'prioritylow';
                    
                                const labelLow = document.createElement("label");
                                labelLow.textContent = "low";
                                dropdownContent.appendChild(labelLow)
                                dropdownContent.appendChild(priorityLow);
                    
                                priorityButton.addEventListener('click', () => {
                                priorityChanger();
                                })
        
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

}
/*taskDone.addEventListener('change', () => {
        doneTasks.push()
        for(let task of doneTasks) {
            taskRemover(task);
        }
        removeTask(newTask);
        taskArr.splice(newTask, 1);
    })
        */
}