import html from "./file.html";

const element = document.createElement('h3');
element.innerText = "Hello World";
const text = document.getElementById('text');
text.appendChild(element);
