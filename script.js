const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

let clearInput="false";
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (clearInput) {
        input.value = '';
        clearInput = false;
      }

    if (button.id === 'clear') {
      input.value = '';

    } 
    else if (button.id === 'calculate') {
      input.value = eval(input.value);
      clearInput = true;

    } 
    else if(button.id=='delete'){
       input.value= input.value.toString().slice(0,-1);
    }
    else {
      input.value += button.value;
    }
  });
});
