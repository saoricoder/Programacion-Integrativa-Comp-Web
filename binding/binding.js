document.addEventListener('DOMContentLoaded', (event) => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const displayName = document.getElementById('displayName');
    const displayAge = document.getElementById('displayAge');

    // Data binding functions
    function updateName() {
        displayName.textContent = nameInput.value;
    }

    function updateAge() {
        displayAge.textContent = ageInput.value;
    }

    // Event listeners
    nameInput.addEventListener('input', updateName);
    ageInput.addEventListener('input', updateAge);
});
