const main = document.querySelector('.main');
const title = document.querySelector('.title');

//TOFIX: 
export function pageloader(tab) {
    main.replaceChildren()
    title.textContent = `${tab.textContent}`;

}

export function firstLoad(tab) {
     main.replaceChildren()
    title.textContent = `${tab.textContent}`;
}