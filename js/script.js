document.addEventListener('DOMContentLoaded', function() {
    const selectForm = document.getElementById('select-form');
    const radioForm = document.getElementById('radio-form');
    const ytho = document.getElementById('ytho');
    const interest = document.getElementById('interest');
    const reveal = document.getElementById('reveal');
    const nameForm = document.getElementById('name-form');
    const directGreet = document.getElementById('directgreet');
    const realQuestion = document.getElementById('realquestion');
    const preferA = document.getElementById('preferA');
    const preferB = document.getElementById('preferB');
    const opHtml = document.getElementById('opHtml');
    const opCSharp = document.getElementById('opCSharp');
    const opJavascript = document.getElementById('opJavas');
    const resetButton = document.getElementById('reset');
    const goodbye = document.getElementById('goodbye');
    let nameInput;

    radioForm.classList.add('hidden');
    reveal.classList.add('hidden');
    nameForm.classList.add('hidden');
    directGreet.classList.add('hidden');
   

    selectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedOption = interest.options[interest.selectedIndex].value;
//gated entry to determine interest
        if (selectedOption === 'Yes') {
            radioForm.classList.remove('hidden');
            ytho.classList.add('hidden');
        } else {
            ytho.classList.remove('hidden');
            radioForm.classList.add('hidden');
        }
    });

    radioForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedPet = document.querySelector('input[name="pet"]:checked').value;
//selected favorite pet controls progression
        if (selectedPet === 'cat') {
            reveal.classList.remove('hidden');
            nameForm.classList.remove('hidden');
        } else if (selectedPet === 'dog') {
            ytho.classList.remove('hidden');
            radioForm.classList.add('hidden');
            reveal.classList.add('hidden');
            nameForm.classList.add('hidden');
            realQuestion.classList.add('hidden');
            directGreet.classList.add('hidden');
            opCSharp.classList.add('hidden');
            opHtml.classList.add('hidden');
            opJavascript.classList.add('hidden');
        }
    });

    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        nameInput = document.getElementById("nameInputField").value;
        const directParagraph = document.getElementById("directgreet");
        directParagraph.textContent = `Nice to meet you, ${nameInput}!`;
        directGreet.classList.remove('hidden');
        realQuestion.classList.remove('hidden');
    });

    realQuestion.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedA = preferA.options[preferA.selectedIndex].value;
        const selectedB = preferB.options[preferB.selectedIndex].value;


//hides or shows correct paragraph based on choice
        if (selectedA === '1a' && selectedB === '1b') {
            opHtml.classList.remove('hidden');
            opCSharp.classList.add('hidden');
            opJavascript.classList.add('hidden');
        } else if (selectedA === '1a' && selectedB === '2b') {
            opHtml.classList.remove('hidden');
            opCSharp.classList.add('hidden');
            opJavascript.classList.add('hidden');
        } else if (selectedA === '1a' && selectedB === '3b') {
            opHtml.classList.add('hidden');
            opCSharp.classList.add('hidden');
            opJavascript.classList.remove('hidden');
        } else if (selectedA === '2a' && selectedB === '1b') {
            opHtml.classList.add('hidden');
            opCSharp.classList.add('hidden');
            opJavascript.classList.remove('hidden');
        } else if (selectedA === '2a' && selectedB === '2b') {
            opHtml.classList.add('hidden');
            opCSharp.classList.add('hidden');
            opJavascript.classList.remove('hidden');
        } else if (selectedA === '2a' && selectedB === '3b') {
            opHtml.classList.add('hidden');
            opCSharp.classList.remove('hidden');
            opJavascript.classList.add('hidden');
        } else if (selectedA === '3a' && selectedB === '1b') {
            opHtml.classList.remove('hidden');
            opCSharp.classList.add('hidden');
            opJavascript.classList.add('hidden');
        } else if (selectedA === '3a' && selectedB === '2b') {
            opHtml.classList.add('hidden');
            opCSharp.classList.add('hidden');
            opJavascript.classList.remove('hidden');
        } else if (selectedA === '3a' && selectedB === '3b') {
            opHtml.classList.remove('hidden');
            opCSharp.classList.add('hidden');
            opJavascript.classList.add('hidden');
        }
        goodbye.classList.remove('hidden');
        resetButton.addEventListener('click', function() {
                window.location.reload();
        });
    
    });

});