// Select container
const container = document.querySelector("#container");
const content = document.createElement("div");
container.appendChild(content);

// Create and style header
const header = document.createElement("h1");
header.style.fontSize = "30px";
header.textContent = "My Shopping list";
header.style.fontWeight = "bold";
content.appendChild(header);

// Create and style paragraph
const para1 = document.createElement("p");
para1.textContent = "use the following form to add and remove items from your shopping list.";
para1.setAttribute("class", "italicText");
content.appendChild(para1);

// Create and append input
const listInput = document.createElement("input");
listInput.type = "text";
listInput.placeholder = "Enter item";
content.appendChild(listInput);

// Create and append button
const listButton = document.createElement("button");
listButton.textContent = "Add Item";
content.appendChild(listButton);

// Create array for shopping list
const shoppingList = [];

// Create a <ul> to display the list
const list = document.createElement("ul");
content.appendChild(list);

// Function to add item and update list
function addItem() {
    const item = listInput.value.trim(); // Get input value and remove whitespace
    if (item) { // Only add if input isn’t empty
        shoppingList.unshift(item); // Add to start of array
        listInput.value = ""; // Clear input field
        updateList(); // Update displayed list
    }
}

// Function to update the displayed list
function updateList() {
    list.innerHTML = ""; // Clear current list
    shoppingList.forEach((item, index) => {
        const li = document.createElement("li");
        
        // Add item text
        const itemText = document.createElement("span");
        itemText.textContent = item;
        li.appendChild(itemText);
        
        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete me";
        li.appendChild(deleteButton);
        
        // Add event listener to delete button
        deleteButton.addEventListener("click", () => {
            shoppingList.splice(index, 1); // Remove item at index
            updateList(); // Refresh list
        });
        
        list.appendChild(li);
    });
}

// Attach the function to the button’s click event
listButton.addEventListener("click", addItem);