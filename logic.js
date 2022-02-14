const button = document.querySelector(".btn");
const result = document.querySelector(".result");

button.addEventListener('click',palindrome);

function palindrome(){

    const word = document.querySelector(".input-text").value.toLowerCase()
    const len = word.length

    const begin = word.substring(0,Math.floor(len/2));
    const end = word.substring(len - Math.floor(len/2));

    const flip = begin.split("").reverse().join("");

    if(end === flip){
        result.textContent = `${word.toUpperCase()} is a palindrome!`
    } else {
        result.innerHTML = `${word.toUpperCase()} is not a palindrome.`
    }
}