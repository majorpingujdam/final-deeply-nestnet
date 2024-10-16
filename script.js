// Fetch the data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const currentPage = document.title.split(" ")[0].toLowerCase(); // Extract borough from title
        displayGentrificationData(data, currentPage);
    })
    .catch(error => console.error('Error fetching the data:', error));

// Function to display gentrification data for a borough
function displayGentrificationData(data, region) {
    const container = document.querySelector('.container');
    if (data[region]) {
        const regionData = data[region];
        container.innerHTML = `
            <h2>Population</h2>
            <p>${regionData.population}</p>

            <h2>Median Income</h2>
            <p>$${regionData.medianIncome}</p>

            <h2>Gentrification Index</h2>
            <p>${regionData.gentrificationIndex}</p>

            <h2>Neighborhoods</h2>
            ${regionData.neighborhoods.map(neigh => `
                <h3>${neigh.name}</h3>
                <p>Population: ${neigh.population}</p>
                <p>Median Rent: $${neigh.medianRent}</p>
                <p>Gentrification Stage: ${neigh.gentrificationStage}</p>
            `).join('')}
        `;
    } else {
        container.innerHTML = `<p>Data not available for ${capitalize(region)}.</p>`;
    }
}

// Utility function to capitalize region names
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Event listener for changing the background color on index.html
document.getElementById('change-bg').addEventListener('click', function() {
    const colors = ['#1a1a2e', '#16213e', '#4ecca3', '#ff9933', '#6a0572']; // Array of colors
    const currentColor = document.body.style.backgroundColor;
    
    // Choose a random new color that's different from the current one
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Change the background color
    document.body.style.background = newColor;
});


