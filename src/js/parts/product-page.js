const buttons = document.querySelectorAll('._data');

if (buttons.length) {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (document.querySelector('_data._active')) {
                buttons.forEach(button => {
                    button.classList.remove('_active');
                })

                button.classList.toggle('_active');

            } else {
                button.classList.toggle('_active');
            }
        })
    })
}

const buttonsUl = document.querySelectorAll('._data ul li');

if (buttonsUl) {
    buttonsUl.forEach(buttonsUl => {
        buttonsUl.addEventListener('click', (e) => {
            console.log();
            let span = e.target.closest('._data').querySelector('button span');
            span.textContent = e.target.textContent
        })
    })
}
