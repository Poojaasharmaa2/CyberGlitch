document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('weightForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        calculateWeightOnMercury();
    });
});

function calculateWeightOnMercury() {
    const weightOnEarth = document.getElementById('weight').value;
    const mercuryGravity = 0.91; // Mercury's gravity relative to Earth's
    const weightOnMercury = weightOnEarth * mercuryGravity;
    document.getElementById('result').innerText = `Your weight on Venus would be ${weightOnMercury.toFixed(2)} kg`;
}