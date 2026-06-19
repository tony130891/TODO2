import { format, formatDistance, subDays } from 'date-fns';

const inputTitle = document.querySelector('#input-title');
const inputDescription = document.querySelector('#input-description');
const inputDuedate = document.querySelector('#input-duedate');
const inputPriority = document.querySelectorAll("input[name='priority']");

const main = document.querySelector('.main');
// render the task to the page

const currentDate = format(new Date(), "yyyy/MM/dd");

class TaskCreator {
  constructor(title,description,dueDate,priority, category) 
  {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = false;
    this.category = category;
  }
}



 export const checkedbtn = () => {
        let selectedRadio = document.querySelector("input[name='priority']:checked");
        return selectedRadio.value
    }

export function taskVisualizer() { 

    const newTask = new TaskCreator(inputTitle.value, inputDescription.value, inputDuedate.value, checkedbtn(), 'notyet');
    taskArr.push(newTask);
        
        const div = document.createElement('div');
        div.classList.add('project');
        main.appendChild(div);

        const h2 = document.createElement('h2');
        h2.textContent = `${newTask.title}`
        div.appendChild(h2);

        const para = document.createElement('p');
        para.textContent = `${newTask.description}`;
        h2.appendChild(para);


        const div1 = document.createElement('div');
        div1.classList.add('labels');
        para.appendChild(div1);    

        
        const svglabel = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        div1.appendChild(svglabel);

        if(newTask.priority == 'low') {
        svglabel.classList.add('svglow');
    } else if (newTask.priority == 'medium') {
        svglabel.classList.add('svgmedium');
    } else {
        svglabel.classList.add('svghigh');
    }

    // duedate text content should take the date from today and subtract the date given in the calendar,
    // therefore, giving the x number of days lasted for the task to be done
    const duedate = document.createElement('p');
    duedate.textContent = `${newTask["dueDate"]}`
    h2.appendChild(duedate);

    const taskDone = document.createElement('input');
    taskDone.type = 'checkbox';
    taskDone.classList.add('Btndone')
    div.appendChild(taskDone)

    // TO-ADD: event listener to add the project into the category DONE
    taskDone.addEventListener('change', () => {
        newTask.checklist = true
        console.log(newTask.checklist)
    })

     console.log(newTask.checklist)
    };


export const taskArr = [];