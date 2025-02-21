// Get references to the canvas and other UI elements
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color');
const brushSizePicker = document.getElementById('brushSize');
const clearButton = document.getElementById('clearCanvas');

// Set up initial drawing settings
let drawing = false;
let brushColor = colorPicker.value;
let brushSize = brushSizePicker.value;

// Start drawing when mouse is pressed
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    draw(e);
});

// Stop drawing when mouse is released
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath(); // Start a new path after the drawing ends
});

// Draw when mouse moves while pressing
canvas.addEventListener('mousemove', draw);

// Function to handle the drawing
function draw(e) {
    if (!drawing) return;

    // Set the brush color and size
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round'; // Smooth corners of the lines

    // Draw the line
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath(); // Start a new path to avoid connected lines
    ctx.moveTo(e.offsetX, e.offsetY); // Move to current mouse position
}

// Update the brush color when the user selects a new color
colorPicker.addEventListener('input', (e) => {
    brushColor = e.target.value;
});

// Update the brush size when the user selects a new size
brushSizePicker.addEventListener('input', (e) => {
    brushSize = e.target.value;
});

// Clear the canvas when the "Clear Canvas" button is clicked
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
