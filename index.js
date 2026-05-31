const taskAdder = document.querySelector('.Today');
const dialog = document.querySelector('#todoDialog');
const closeDialog = dialog.querySelector('#close-dialog');
const inputTitle = document.querySelector('#input-title');
const inputDescription = document.querySelector('#input-description');
const inputDuedate = document.querySelector('#input-duedate');
const inputPriority = document.querySelectorAll("input[name='priority']");
const inputPriorityLow = document.querySelector("#prioritylow");
const inputPrioritymedium = document.querySelector("#prioritymedium");
const inputPriorityhigh = document.querySelector("#priorityhigh");
const submitBtn = document.querySelector("#todoForm");
const main = document.querySelector('.main');
const taskArr = [];


// render the task to the page
function taskVisualizer() {   
    const div = document.createElement('div');
    div.classList.add('project');
    main.appendChild(div);

    const h2 = document.createElement('h2');
    h2.textContent = `text ${taskArr[0].title}`
    div.appendChild(h2);

    const para = document.createElement('p');
    para.textContent = `${taskArr[0].description}`;
    h2.appendChild(para);
    const div1 = document.createElement('div');
    div1.classList.add('labels');
    para.appendChild(div1);    
    // add a label besides the description
    const svglabel = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    div1.appendChild(svglabel);
    // if priority is high(), the label is red, if medium yellow, is low blue
    if(taskArr[0].priority == 'low') {
        svglabel.classList.add('svglow');
    } else if (taskArr[0].priority == 'medium') {
        svglabel.classList.add('svgmedium');
    } else {
        svglabel.classList.add('svghigh');
    }
    // add the duedate string along with a svg calendar
}

taskAdder.addEventListener('click', () => {
 dialog.showModal(); 
})

closeDialog.addEventListener('click', () => {
    dialog.close();
})

submitBtn.addEventListener('submit', () => {

    const checkedbtn = () => {
        let selectedRadio = document.querySelector("input[name='priority']:checked");
        return selectedRadio.value
    }

    inputPriority.forEach(radiobtn => {
    radiobtn.addEventListener('change', checkedbtn)
})

    taskArr.push(taskCreator(inputTitle.value, inputDescription.value, 'tomorrow', checkedbtn(), true, 'notyet'));
    console.log(taskArr);
    taskVisualizer();
})
// try to put this following solid principles
const taskCreator = (title, description, dueDate, priority, checklist, category) => {
    return { 
        title: title, 
        description: description,
        dueDate: dueDate,
        priority: priority,
        checklist: checklist,
        category: category,
     }
}



// show the creation of the todos on the mainPage, DOMSTUFF

function tabulator() {
    //everytime i click a list, it will create on the main, a div with a title and a child para
}



// UPLOAD IT TO GITHUB, PROCEED WITH WEBPACK