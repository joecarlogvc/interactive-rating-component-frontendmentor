"use strict";

const button = document.querySelector('button');



// ratingMessage.forEach(el => console.log(el.textContent))



button.addEventListener('click', function() {
    const cards = document.querySelectorAll('#card');
    const ratingOnText = document.querySelector(".thank-you__rating");
    const selectOutOf = document.querySelectorAll('input[type="radio"]')
    const selection = document.querySelector('input[type="radio"]:checked');

    if(!selection) alert('You must select a value');
    
    cards.forEach(element => element.classList.toggle('visible'));

    ratingOnText.textContent = `You selected ${selection.value} out of ${selectOutOf.length}`;
})
