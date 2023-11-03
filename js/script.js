document.addEventListener('DOMContentLoaded', function() {
    const selectForm = document.getElementById('select-form');
    const radioForm = document.getElementById('radio-form');
    const ytho = document.getElementById('ytho');

    radioForm.classList.add('hidden');

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

    
        })

});

