// Get references to the buttons
const darkModeBtn = document.getElementById("darkModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");

// Function to enable Dark Mode
function enableDarkMode() {
    document.body.classList.add("dark-mode"); // Add the dark-mode class
    // Optionally, disable dark mode button and enable light mode button
    darkModeBtn.disabled = true;
    lightModeBtn.disabled = false;
}

// Function to enable Light Mode
function enableLightMode() {
    document.body.classList.remove("dark-mode"); // Remove the dark-mode class
    // Optionally, disable light mode button and enable dark mode button
    darkModeBtn.disabled = false;
    lightModeBtn.disabled = true;
}

// Add event listeners to buttons
darkModeBtn.addEventListener("click", enableDarkMode);
lightModeBtn.addEventListener("click", enableLightMode);
