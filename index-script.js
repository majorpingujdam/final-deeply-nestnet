// Select the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Variable to track the current theme (true for green/orange/purple, false for white/orange)
let isOriginalTheme = true;

// Function to switch themes
function switchTheme() {
    if (isOriginalTheme) {
        // Switch to white and orange contrast theme
        document.body.style.background = 'linear-gradient(135deg, #ffffff, #ffa500)'; // White to orange gradient
        document.body.style.color = '#333'; // Dark text for better contrast
        document.querySelectorAll('h1, h2').forEach(heading => {
            heading.style.color = '#ff4500'; // Dark orange headings
            heading.style.textShadow = 'none'; // Remove neon glow
        });
        document.querySelectorAll('p').forEach(p => {
            p.style.color = '#555'; // Darker paragraph text
        });
        document.querySelectorAll('.container').forEach(container => {
            container.style.backgroundColor = '#f2f2f2'; // Light container background
            container.style.border = '2px solid #ff9933'; // Orange border
            container.style.boxShadow = 'none'; // Remove neon glow
        });
        document.querySelector('footer').style.backgroundColor = '#f2f2f2'; // Light footer background
        document.querySelector('footer p').style.color = '#ff4500'; // Dark orange footer text

        // Update button text
        themeToggleButton.textContent = "Switch Back to Original Theme";
    } else {
        // Switch back to green/orange/purple theme
        document.body.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)'; // Original dark gradient
        document.body.style.color = '#e0e0e0'; // Light text for dark background
        document.querySelectorAll('h1, h2').forEach(heading => {
            heading.style.color = '#66ff99'; // Neon green headings
            heading.style.textShadow = '0 0 8px #32ff7e, 0 0 16px #00ff44'; // Add neon glow
        });
        document.querySelectorAll('p').forEach(p => {
            p.style.color = '#ffdd99'; // Soft orange text
        });
        document.querySelectorAll('.container').forEach(container => {
            container.style.backgroundColor = '#212121'; // Dark background
            container.style.border = '2px solid #66ff99'; // Green neon border
            container.style.boxShadow = '0 0 10px #32ff7e, 0 0 20px #00ff44'; // Neon glow
        });
        
        document.querySelector('footer').style.backgroundColor = '#1b1b2f'; // Dark footer background
        document.querySelector('footer p').style.color = '#ffdd99'; // Soft orange footer text

        // Update button text
        themeToggleButton.textContent = "Switch to White and Orange Theme";
    }

    // Toggle the theme tracker
    isOriginalTheme = !isOriginalTheme;
}

// Add event listener to the theme toggle button
themeToggleButton.addEventListener('click', switchTheme);

