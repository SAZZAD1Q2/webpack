import htmlContent from "./index.html";

const element = document.createElement('h3');
element.innerText = "Hello World";

const text = document.getElementById('text');
text.appendChild(element);

// Load HTML content from index.html
const htmlElement = document.createElement('div');
htmlElement.innerHTML = htmlContent;
text.appendChild(htmlElement);
