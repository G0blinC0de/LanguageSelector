document.addEventListener('DOMContentLoaded', function() {
    const selectForm = document.getElementById('select-form');
    const radioForm = document.getElementById('radio-form');
    const ytho = document.getElementById('ytho');
    const reveal = document.getElementById('reveal');
    const nameForm = document.getElementById('name-form');
    const directGreet = document.getElementById('directgreet');
    const realQuestion = document.getElementById('realquestion');

    radioForm.classList.add('hidden');
    reveal.classList.add('hidden');
    nameForm.classList.add('hidden');
    directGreet.classList.add('hidden');

    selectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedOption = interest.options[interest.selectedIndex].value;

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

        if (selectedPet === 'cat') {
            reveal.classList.remove('hidden');
            nameForm.classList.remove('hidden');
        } else if (selectedPet === 'dog') {
            ytho.classList.remove('hidden');
            radioForm.classList.add('hidden');
            reveal.classList.add('hidden');
        }
    });

    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById("nameInput").value;
        const directParagraph = document.getElementById("directgreet");
        directParagraph.textContent = `Nice to meet you, ${nameInput}!`;
        directGreet.classList.remove('hidden');
        realQuestion.classList.remove('hidden');
    });
    realQuestion.addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('nameInput').value;
        const preferA = document.getElementById('preferA').value;
        const preferB = document.getElementById('preferB').value;
        const nameInput = document.getElementById('nameInput').value;
        if (preferA === '1a' && preferB === '1b') {
            document.getElementById('op-html').classList.remove('hidden');
            document.getElementById('op-c#').classList.add('hidden');
            document.getElementById('op-javas').classList.add('hidden');
        } else if (preferA === '2a' && preferB === '2b') {
            document.getElementById('op-html').classList.add('hidden');
            document.getElementById('op-c#').classList.remove('hidden');
            document.getElementById('op-javas').classList.add('hidden');
        } else if (preferA === '3a' && preferB === '3b') {
            document.getElementById('op-html').classList.add('hidden');
            document.getElementById('op-c#').classList.add('hidden');
            document.getElementById('op-javas').classList.remove('hidden');
        }

        });
    });



