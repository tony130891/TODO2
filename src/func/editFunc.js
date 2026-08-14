import { taskVisualizer, taskArr, currentDate, checkedbtn, taskRemover } from './DOM.js';
import { format, formatDistance, subDays } from 'date-fns';
import { TaskCreator } from './taskCreator.js';
import { todayTasks } from "../pages/today.js";
import { tomorrowTasks } from "../pages/tomorrow.js";
import { soonTasks } from "../pages/soon.js";
import { doneTasks, taskVisualizerDone } from '../pages/done.js';
import { priorityChanger } from './priorityFunc.js';

const main = document.querySelector('.main');
const doneTab = document.querySelector('.done');

export function storageTasks() {
  localStorage.setItem('tasks', JSON.stringify(taskArr));
}


function taskRender(taskrender) {

       const div = document.createElement('div');
        div.classList.add('project');
        div.setAttribute('data-name', taskrender.title);
        main.appendChild(div);

        const div2 = document.createElement("div");
        div2.classList.add('sort');
        div.appendChild(div2);

        const details = document.createElement('details');
        details.classList.add('details');
        details.setAttribute('open', 'true');
        div.appendChild(details);
        const summary = document.createElement('summary');
        summary.textContent = `${taskrender.title}`;
        details.appendChild(summary);

        const h2 = document.createElement('h2');
        h2.textContent = `${taskrender.title}`
        details.appendChild(h2);

        const para = document.createElement('p');
        para.textContent = `${taskrender.description}`;
        details.appendChild(para);

        const div1 = document.createElement('div');
        div1.classList.add('labels');
        details.appendChild(div1);    

        
        const svglabel = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        div1.appendChild(svglabel);

        const remainingDate = formatDistance(currentDate, taskrender.dueDate);
        const duedate = document.createElement('p');
        duedate.textContent = `${remainingDate}`
        div1.appendChild(duedate);
        
            //TOADD: TAB
            switch (true) {
            case remainingDate.includes("minutes") ||
              remainingDate.includes("minute") ||
              remainingDate.includes("hours") ||
              remainingDate.includes("hour"):
              // apply taskRender in todaypage
              todayTasks.push(taskrender);
              break;
            case remainingDate.includes("days"):
              soonTasks.push(taskrender);
              break;
            case remainingDate.includes("day"):
              tomorrowTasks.push(taskrender);
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
        
        if(taskrender.priority == 'low') {
                svglabel.classList.add('svglow');
                labelInput.style.backgroundColor = "#c2c2fb";
            } else if (taskrender.priority == 'medium') {
                svglabel.classList.add('svgmedium');
                labelInput.style.backgroundColor = "yellow";
            } else {
                svglabel.classList.add('svghigh');
                labelInput.style.backgroundColor = "#ed4d4d";
            }
        
             taskDone.addEventListener('change', () => {
                taskrender.checklist = true;
                for(let task of taskArr) {
                  if(task.checklist == true) {
                        doneTasks.push(task)
                        taskRemover(task.title)
                        removeTask(task)
                        taskArr.splice(task, 1);
                    }
                }
                console.log(taskArr)
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
              taskrender.title = h2.textContent;
              para.setAttribute("contenteditable", "false");
              taskrender.description = para.textContent;
              editBtn.textContent = "Edit";
            }
        });

}

export function retrieveTasks() {
  const storedTasks = localStorage.getItem('tasks')
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks)
    for(let task of tasks) {
      task = new TaskCreator(task.title, task.description, task.dueDate, task.priority, task.checklist);
      taskArr.push(task)
      taskRender(task)
      console.log(taskArr)
    }
  } else {
    console.log("No data in local storage");
  }
}


export function removeTask(taskToRemove) {
  const storedTasks = localStorage.getItem('tasks')
  const tasks = storedTasks ? JSON.parse(storedTasks) : [];
  
  let result = JSON.parse(storedTasks).filter((task) => task.title !== taskToRemove["title"])
  
  let resultJSON = JSON.stringify(result);

  localStorage.setItem('tasks', resultJSON)
}

