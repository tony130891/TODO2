import { tomorrowTasks } from '../pages/tomorrow.js';
import { todayTasks } from '../pages/today.js';
import { soonTasks } from '../pages/soon.js';
import { taskArr, taskRemover } from './DOM.js';
import { taskRender, removeTask, storageTasks } from './editFunc.js';
const dialog = document.querySelector('#todoDialog');

export function priorityChanger(task) {
    const priorityBtn = document.querySelector('.priorityBtn');
    const dropdownContent = document.querySelector('#myDropdown')
    const btnSubmit = document.querySelector('.radioSubmit');

    dropdownContent.classList.toggle("show"); 
    
    btnSubmit.addEventListener('click', () => {
        // select the current value of the obj priority
        const oldValue = dialog.querySelector('input[name="priority"]:checked');
        //assign the current value by checking a radio button
        const currentValue = document.querySelector('input[name="priority"]:checked');
        
        console.log(oldValue.value);
        console.log(currentValue.value);
        //change the previous value with the current one
        let taskValue = task.priority;
        // create a longer condition to make it work
        taskValue == oldValue.value ? task.priority = currentValue.value :  task.priority = oldValue.value;
        taskRemover(task);
        removeTask(task);
        if(tomorrowTasks.includes(task)) {
            tomorrowTasks.splice(task, 1);
        } else if (todayTasks.includes(task)) {
            todayTasks.splice(task, 1);
        } else {
            soonTasks.splice(task, 1);
        }
        taskRender(task)
        storageTasks()       
    })
}

