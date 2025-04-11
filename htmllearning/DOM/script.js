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