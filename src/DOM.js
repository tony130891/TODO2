const main = document.querySelector('.main');
// render the task to the page
export function taskVisualizer() {   
        
    taskArr.forEach((task, index) => {
        const div = document.createElement('div');
        div.classList.add('project');
        main.appendChild(div);

        const h2 = document.createElement('h2');
        h2.textContent = `${task.title}`
        div.appendChild(h2);

        const para = document.createElement('p');
        para.textContent = `${task.description}`;
        h2.appendChild(para);

        const div1 = document.createElement('div');
        div1.classList.add('labels');
        para.appendChild(div1);    

        // add a label besides the description
        const svglabel = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        div1.appendChild(svglabel);

        if(task.priority == 'low') {
        svglabel.classList.add('svglow');
    } else if (task.priority == 'medium') {
        svglabel.classList.add('svgmedium');
    } else {
        svglabel.classList.add('svghigh');
    }
    // add the duedate string along with a svg calendar
    });

    }


export const taskArr = [];