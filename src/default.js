import { greeting } from './greeting.js';
import printMe from "./greeting.js";

import "./styles.css";
// import img src create element class to import the svg files, restaurant

console.log(greeting)

function component() {
   const element = document.createElement('div');
    const btn = document.createElement('button');

     btn.innerHTML = 'Click me and check the console!';
     btn.onclick = printMe;

     element.appendChild(btn);

     return element
 }

 document.body.appendChild(component());