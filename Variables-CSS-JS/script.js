const inputs = document.querySelectorAll('.controls input');

function handleToggle() {
  const changeState = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + changeState);
  // console.log(this.dataset);
};

inputs.forEach(input => input.addEventListener('change', handleToggle));
inputs.forEach(input => input.addEventListener('mousemove', handleToggle));