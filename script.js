function startPrompt() {
    let number;
    while (true) {
        const input = prompt("Please enter a number:");
        number = parseInt(input);
        if (!isNaN(number) && number > 0) {
            break;
        } else {
            alert("Invalid input. Please enter a positive numerical value.");
        }
    }
    displayShape(number);
}

function displayShape(number) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>Number inputted: ${number}</p>`;
    const shape = generateShape(number);
    outputDiv.innerHTML += `<pre class="shape">${shape}</pre>`;
}

function generateShape(number) {
    let shape = "";
    if (number % 2 !== 0) {
        // Generate a rectangle
        shape = createRectangle(number);
    } else {
        // Generate a triangle
        shape = createTriangle(number);
    }
    return shape;
}

function createRectangle(number) {
    let rectangle = "";
    for (let i = number; i > 0; i--) {
        rectangle += `${i} `.repeat(number).trim() + '\n';
    }
    return rectangle;
}

function createTriangle(number) {
    let triangle = "";
    for (let i = number; i > 0; i--) {
        triangle += `${i} `.repeat(i).trim() + '\n';
    }
    return triangle;
}
