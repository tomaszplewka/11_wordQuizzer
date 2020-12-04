const startBtn = document.querySelector('#front-page-start-btn');
const demoBtn = document.querySelector('#front-page-demo-btn');
const loginBtn = document.querySelector('#front-page-login-btn');
const registerBtn = document.querySelector('#front-page-register-btn');
const logo = document.querySelector('#front-page-logo');
const logoFaceFront = document.querySelector('.face.front');
const logoFaceTop = document.querySelector('.face.top');
const logoFaceLeft = document.querySelector('.face.left');
// 
startBtn.addEventListener('click', () => {
    logo.classList.add('loader-wrapper');
    logoFaceFront.classList.add('loader-face-front');
    logoFaceTop.classList.add('loader-face-top');
    logoFaceLeft.classList.add('loader-face-left');
    // 
    startBtn.classList.add('button-dissapear');
    // 
    setTimeout(() => {
        logoFaceFront.classList.add('strip-background-border');
        logoFaceTop.classList.add('strip-background-border');
        logoFaceLeft.classList.add('strip-background-border');
        // 
        setTimeout(() => {
            logo.parentElement.classList.add('logo-enlarge');
            // 
            setTimeout(() => {
                demoBtn.parentElement.classList.remove('hide');
                demoBtn.classList.remove('hidden');
                loginBtn.classList.remove('hidden');
                registerBtn.parentElement.classList.remove('hidden');
                
            }, 750);
        }, 500);
    }, 1500);
});
// 
const burger = document.querySelector('#burger');
const times = document.querySelector('#times');
const optionsWrapper = document.querySelector('#options-wrapper');
// 
burger.addEventListener('click', () => {
    burger.classList.toggle('hide');
    times.classList.toggle('hide');
    // 
    optionsWrapper.classList.toggle('hidden-options');
});
// 
times.addEventListener('click', () => {
    burger.classList.toggle('hide');
    times.classList.toggle('hide');
    // 
    optionsWrapper.classList.toggle('hidden-options');
});
// 
const mainSectionWrapper = document.querySelector('#main-section-wrapper');
const registerWrapper = document.querySelector('#register-wrapper');
// 
registerBtn.addEventListener('click', () => {
    mainSectionWrapper.firstElementChild.classList.add('shrink');
    // 
    setTimeout(() => {
        mainSectionWrapper.classList.toggle('hidden-options');
        registerWrapper.classList.toggle('hidden-options');
    }, 600);
});
// 
const registerBackBtn = document.querySelector('#register-back-btn');
// 
registerBackBtn.addEventListener('click', () => {
    mainSectionWrapper.classList.toggle('hidden-options');
    registerWrapper.classList.toggle('hidden-options');
    // 
    setTimeout(() => {
        mainSectionWrapper.firstElementChild.classList.remove('shrink');
    }, 600);
});
// 
const loginWrapper = document.querySelector('#login-wrapper');
// 
loginBtn.addEventListener('click', () => {
    mainSectionWrapper.firstElementChild.classList.add('shrink');
    // 
    setTimeout(() => {
        mainSectionWrapper.classList.toggle('hidden-options');
        loginWrapper.classList.toggle('hidden-options');
    }, 600);
});
// 
const loginBackBtn = document.querySelector('#login-back-btn');
// 
loginBackBtn.addEventListener('click', () => {
    mainSectionWrapper.classList.toggle('hidden-options');
    loginWrapper.classList.toggle('hidden-options');
    // 
    setTimeout(() => {
        mainSectionWrapper.firstElementChild.classList.remove('shrink');
    }, 600);
});
// 
const registerForm = document.querySelector('#register-form');
const usernamePattern = /^\w{1,15}$/;
const emailPattern = /^([a-zA-Z]{1}[\w\.]{0,20})@([a-zA-Z]{2,15})\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*[\s])(?=.{8,15})/;
const usernameValidationIcons = document.querySelector('#username-validation');
const emailValidationIcons = document.querySelector('#email-validation');
const passwordValidationIcons = document.querySelector('#password-validation');
const confirmPasswordValidationIcons = document.querySelector('#confirm-password-validation');
// 
// client-side form validation
// Check Username
registerForm.username.addEventListener('keyup', () => {
	if (usernamePattern.test(registerForm.username.value)) {
        if (!usernameValidationIcons.lastElementChild.classList.contains('hide')) {
            usernameValidationIcons.lastElementChild.classList.add('hide');
            registerForm.username.classList.remove('input-invalid');
            registerForm.username.classList.add('input-valid');
        }
        usernameValidationIcons.firstElementChild.classList.remove('hide');
        registerForm.username.classList.add('input-valid');
		//
	} else {
        if (!usernameValidationIcons.firstElementChild.classList.contains('hide')) {
            usernameValidationIcons.firstElementChild.classList.add('hide');
            registerForm.username.classList.remove('input-valid');
            registerForm.username.classList.add('input-invalid');
        }
        usernameValidationIcons.lastElementChild.classList.remove('hide');
        registerForm.username.classList.add('input-invalid');
		//
	}
	//
	// if (
	// 	username.classList.contains('valid') &&
	// 	email.classList.contains('valid') &&
	// 	password.classList.contains('valid')
	// ) {
	// 	//
	// 	loginAddCreateBtn.disabled = false;
	// 	//
	// } else {
	// 	//
	// 	loginAddCreateBtn.disabled = true;
	// 	//
	// }
	//
});
// submit register form
registerForm.addEventListener('submit', e => {
    
    // get status message references
    const statusBusy = registerForm.querySelector('.status-busy');
    const statusFailure = registerForm.querySelector('.status-failure');

    

   
    // Store reference to form to make later code easier to read
    // const form = e.target;

    // Post data using the Fetch API
    fetch(registerForm.action, {
            method: registerForm.method,
            body: new FormData(registerForm)
        })
        // We turn the response into text as we expect HTML
        .then(res => res.text())
        .then(doc => {
            console.log(doc);
        });
        // Let's turn it into an HTML document
        // .then(text => new DOMParser().parseFromString(text, 'text/html'))

        // // Now we have a document to work with let's replace the <form>
        // .then(doc => {
        //     console.log(doc);
        //     // Create result message container and copy HTML from doc
        //     const result = document.createElement('div');
        //     result.innerHTML = doc.body.innerHTML;
        //     console.log(result);

        //     // // Allow focussing this element with JavaScript
        //     // result.tabIndex = -1;

        //     // // And replace the form with the response children
        //     // form.parentNode.replaceChild(result, form);

        //     // // Move focus to the status message
        //     // result.focus();

        // })
        // .catch(err => {

        //     // Unlock form elements
        //     Array.from(form.elements).forEach(field => field.disabled = false);

        //     // Return focus to active element
        //     lastActive.focus();

        //     // Hide the busy state
        //     statusBusy.hidden = false;

        //     // Show error message
        //     statusFailure.hidden = false;

        // });

    // // Before we disable all the fields, remember the last active field
    // const lastActive = document.activeElement;

    // // Show busy state and move focus to it
    // statusBusy.hidden = false;
    // statusBusy.tabIndex = -1;
    // statusBusy.focus();

    // // Disable all form elements to prevent further input
    // Array.from(form.elements).forEach(field => field.disabled = true);

    // // Make sure connection failure message is hidden
    // statusFailure.hidden = true;

    // Prevent the default form submit
    e.preventDefault();

});