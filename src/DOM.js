const inputTitle = document.querySelector('#input-title');
const inputDescription = document.querySelector('#input-description');
const inputDuedate = document.querySelector('#input-duedate');
const inputPriority = document.querySelectorAll("input[name='priority']");


const main = document.querySelector('.main');
// render the task to the page

class TaskCreator {
  constructor(title,description,dueDate,priority, checklist, category) 
  {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.category = category;
  }
}

 export const checkedbtn = () => {
        let selectedRadio = document.querySelector("input[name='priority']:checked");
        return selectedRadio.value
    }

export function taskVisualizer() { 

    const newTask = new TaskCreator(inputTitle.value, inputDescription.value, 'tomorrow', checkedbtn(), true, 'notyet');
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

        // add a label besides the description
        const svglabel = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        div1.appendChild(svglabel);

        if(newTask.priority == 'low') {
        svglabel.classList.add('svglow');
    } else if (newTask.priority == 'medium') {
        svglabel.classList.add('svgmedium');
    } else {
        svglabel.classList.add('svghigh');
    }
    // add the duedate string along with a svg calendar
    };


export const taskArr = [];