export const tomorrowTasks = [];
const main = document.querySelector(".main");

export function taskVisualizerTomorrow() {
  for (let tasks of tomorrowTasks) {
    const div = document.createElement("div");
    div.classList.add("project");
    div.setAttribute("data-name", tasks.title);
    main.appendChild(div);

    const h2 = document.createElement("h2");
    h2.textContent = `${tasks.title}`;
    div.appendChild(h2);

    const para = document.createElement("p");
    para.classList.add("hiddenP");
    para.textContent = `${tasks.description}`;
    h2.appendChild(para);
  }
}
