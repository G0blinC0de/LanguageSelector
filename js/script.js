document.addEventListener('DOMContentLoaded', function() {
    const selectForm = document.getElementById('select-form');
    const radioForm = document.getElementById('radio-form');
    const ytho = document.getElementById('ytho');
    const reveal = document.getElementById('reveal');

    radioForm.classList.add('hidden');
    reveal.classList.add('hidden');

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
        radioForm.addEventListener('submit', function(event){
            event.preventDefault();
            const selectedPet = document.querySelector('input[name="pet"]:checked').value;
            if (selectedPet === 'cat') {
                reveal.classList.remove('hidden');

            } else if (selectedPet === 'dog') {
                ytho.classList.remove('hidden');
                radioForm.classList.add('hidden');
                reveal.classList.add('hidden');
            }
        })
    
        })

});

