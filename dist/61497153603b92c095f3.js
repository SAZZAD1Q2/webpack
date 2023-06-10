import htmlContent from "./index.html";
import css from "./style.css";

const element = document.createElement('h3');
element.innerText = "Hello World";

const text = document.getElementById('text');
text.appendChild(element);

// Load HTML content from file.html
const htmlElement = document.createElement('div');
htmlElement.innerHTML = htmlContent;
text.appendChild(htmlElement);
