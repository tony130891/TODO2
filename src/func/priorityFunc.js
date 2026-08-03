
export function priorityChanger() {
    const priorityBtn = document.querySelector('.priorityBtn');
    const dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdownContent');
    priorityBtn.appendChild(dropdownContent);

    const priorityHigh = document.createElement('input');

    priorityHigh.type = 'radio';
    priorityHigh.name = 'priority';
    priorityHigh.value = 'high';
    priorityHigh.id = 'priorityhigh'

    const labelHigh = document.createElement("label");
    labelHigh.textContent = "high";

    const priorityMedium = document.createElement('input');
    priorityMedium.type = 'radio';
    priorityMedium.name = 'priority';
    priorityMedium.value = 'medium';
    priorityMedium.id = 'prioritymedium';

    const labelMedium = document.createElement("label");
    labelMedium.textContent = "medium";

    const priorityLow = document.createElement('input');
    priorityLow.type = 'radio';
    priorityLow.name = 'priority';
    priorityLow.value = 'low';
    priorityLow.id = 'prioritylow';

    const labelLow = document.createElement("label");
    labelLow.textContent = "low";

    dropdownContent.appendChild(priorityHigh);
    dropdownContent.appendChild(labelHigh)
    dropdownContent.appendChild(priorityMedium);
    dropdownContent.appendChild(labelMedium);
    dropdownContent.appendChild(priorityLow);
    dropdownContent.appendChild(labelLow);   

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'change';
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';

    dropdownContent.appendChild(submitBtn);
    dropdownContent.appendChild(cancelBtn);
}