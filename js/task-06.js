const input = document.querySelector("#validation-input");
input.addEventListener("blur", checkInput);

function checkInput(event) {
    
  const inputColor = event.currentTarget;
  const inputLength = Number(inputColor.dataset.length);
    
  if (inputColor.value.length === inputLength) {
  inputColor.classList.remove('invalid');
    inputColor.classList.add('valid');
  } else {
    inputColor.classList.remove('valid');
      inputColor.classList.add('invalid');
  }
};
