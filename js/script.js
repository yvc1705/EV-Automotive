// Smooth scroll for the Safety Rules button
document.getElementById('safetyRulesBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('safety-rules').scrollIntoView({ behavior: 'smooth' });
});

// Function to compare models
function compareModels() {
    const model1 = document.getElementById('modelSelect1').value;
    const model2 = document.getElementById('modelSelect2').value;

    const comparisons = {
        model1: {
            name: 'Model 1 - Eco Sedan',
            battery: '75 kWh',
            range: '350 miles',
            zeroToSixty: '6.0 seconds',
            topSpeed: '140 mph',
        },
        model2: {
            name: 'Model 2 - Urban Compact SUV',
            battery: '65 kWh',
            range: '300 miles',
            zeroToSixty: '6.5 seconds',
            topSpeed: '130 mph',
        },
        model3: {
            name: 'Model 3 - High-Performance Sports Car',
            battery: '85 kWh',
            range: '280 miles',
            zeroToSixty: '3.5 seconds',
            topSpeed: '155 mph',
        },
        model4: {
            name: 'Model 4 - Family SUV',
            battery: '90 kWh',
            range: '400 miles',
            zeroToSixty: '5.5 seconds',
            topSpeed: '145 mph',
        },
        model5: {
            name: 'Model 5 - Luxury Sedan',
            battery: '80 kWh',
            range: '320 miles',
            zeroToSixty: '5.0 seconds',
            topSpeed: '150 mph',
        },
        model6: {
            name: 'Model 6 - Compact City Car',
            battery: '50 kWh',
            range: '200 miles',
            zeroToSixty: '7.0 seconds',
            topSpeed: '120 mph',
        }
    };

    const selectedModel1 = comparisons[model1];
    const selectedModel2 = comparisons[model2];

    if (!selectedModel1 || !selectedModel2) {
        alert('Please select valid models.');
        return;
    }

    const result = `
        <h3>Comparison: ${selectedModel1.name} vs ${selectedModel2.name}</h3>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>${selectedModel1.name}</th>
                    <th>${selectedModel2.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Battery</td>
                    <td>${selectedModel1.battery}</td>
                    <td>${selectedModel2.battery}</td>
                </tr>
                <tr>
                    <td>Range</td>
                    <td>${selectedModel1.range}</td>
                    <td>${selectedModel2.range}</td>
                </tr>
                <tr>
                    <td>0-60 mph</td>
                    <td>${selectedModel1.zeroToSixty}</td>
                    <td>${selectedModel2.zeroToSixty}</td>
                </tr>
                <tr>
                    <td>Top Speed</td>
                    <td>${selectedModel1.topSpeed}</td>
                    <td>${selectedModel2.topSpeed}</td>
                </tr>
            </tbody>
        </table>
    `;
    document.getElementById('comparisonResults').innerHTML = result;
}

// Example function to set star rating
function setRating(rating) {
    const stars = document.querySelectorAll('.star-rating .star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}

// Call the function with a rating value (e.g., 3 out of 5 stars)
setRating(3);
