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
        
        //change the label and colors
    })
}

