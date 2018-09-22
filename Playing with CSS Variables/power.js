const inputs = document.querySelectorAll('.controls input'); // select all inputs

// updates the value and the dataset.
function updateInput() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', updateInput));
inputs.forEach(input => input.addEventListener('mousemove', updateInput));