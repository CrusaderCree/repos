// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Create a <p> element
const para = document.createElement("p");
para.textContent = "Hey, I'm red!"
para.style.color = "red"
para.style.animationName = "fadeInOut"; // The name of the keyframes
para.style.animationDuration = "2s"; // Animation lasts 2 seconds
para.style.animationIterationCount = "infinite"; // Loops forever
para.style.animationDirection = "alternate"; // Plays forward, then backward, repeating
container.appendChild(para);

// create a blue <h3>
const fonttype  = document.createElement("h3");
fonttype.textContent = "Hey, I'm a blue <h3>!!";
fonttype.style.color = "blue";
container.appendChild(fonttype);

// create black boardered ping background
const blackBordereddiv  = document.createElement("div");
const pinkPara = document.createElement("p");
const newH1= document.createElement("h1");
newH1.textContent = "I'm in a div";
pinkPara.textContent = "ME TOO";
blackBordereddiv.style.backgroundColor = "pink";
blackBordereddiv.style.border = "black"
pinkPara.appendChild(blackBordereddiv);
newH1.appendChild(blackBordereddiv);
container.appendChild(blackBordereddiv);