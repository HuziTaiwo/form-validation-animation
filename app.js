function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nxtForm = parent.nextElementSibling;

            // Check for Validation
            if(input.type === 'text' && validateUser(input)) {
                nxtSlide(parent, nxtForm);
            } else if(input.type === 'email' && validateEmail(input)) {
                nxtSlide(parent, nxtForm);
            } else if(input.type === 'password' && validateUser(input)){
                nxtSlide(parent, nxtForm);
            } else {
                parent.style.animation = 'wiggle 0.5s ease';
            }
            // EndAnimation
            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            });
        });
    });
}
// NameValidation
function validateUser(user) {
    if(user.value.length < 6 ) {
        console.log('not enough character')
        alert('#c65757');
    } else {
        alert('#008080');
        return true
    }
}
// EmailValidaion
function validateEmail(email) {
    if(email.value.length <8 ) {
        console.log('not enough character')
        alert('#c65757');
    } else {
        alert('#008080');
        return true
    }
}

function nxtSlide(parent, nxtForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nxtForm.classList.add('active');
}

function alert(color) {
    document.body.style.backgroundColor = color;
}
animatedForm();