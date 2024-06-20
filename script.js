import { spell } from './spellData.js'; 

const inputSpell = document.getElementById("inputSpell");
const result = document.getElementById("result");

inputSpell.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        const inputValue = inputSpell.value;
        displayResult(toSpell(inputValue)); 
    }
});

function toSpell(text) {
    console.log(text)
  if (spell.hasOwnProperty(text)) { 
    // Convert the Set to an array and join the elements
    return Array.from(spell[text]).join('<br>'); 
  } else {
    return 'no result';
  }
}

function displayResult(number) {
    result.innerHTML = number; // Use innerHTML instead of textContent
}