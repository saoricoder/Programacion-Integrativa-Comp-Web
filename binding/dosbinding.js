// Function 1 one binding
function one_binding() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    document.getElementById('oneWayName').textContent = `Nombre: ${name}`;
    document.getElementById('oneWayAge').textContent = `Edad: ${age}`;
}

// funcion 2 two binding
function two_binding() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    function updateDisplay() {
        document.getElementById('twoWayName').textContent = `Nombre: ${nameInput.value}`;
        document.getElementById('twoWayAge').textContent = `Edad: ${ageInput.value}`;
    }

    // Initial update
    updateDisplay();

    // Update display on input change
    nameInput.addEventListener('input', updateDisplay);
    ageInput.addEventListener('input', updateDisplay);
}
