// const startBtn = document.querySelector('#front-page-start-btn');
// const demoBtn = document.querySelector('#front-page-demo-btn');
// const loginBtn = document.querySelector('#front-page-login-btn');
// const registerBtn = document.querySelector('#front-page-register-btn');
// const logo = document.querySelector('#front-page-logo');
// const logoFaceFront = document.querySelector('.face.front');
// const logoFaceTop = document.querySelector('.face.top');
// const logoFaceLeft = document.querySelector('.face.left');
// // 
// startBtn.addEventListener('click', () => {
//     logo.classList.add('loader-wrapper');
//     logoFaceFront.classList.add('loader-face-front');
//     logoFaceTop.classList.add('loader-face-top');
//     logoFaceLeft.classList.add('loader-face-left');
//     // 
//     startBtn.classList.add('button-dissapear');
//     // 
//     setTimeout(() => {
//         logoFaceFront.classList.add('strip-background-border');
//         logoFaceTop.classList.add('strip-background-border');
//         logoFaceLeft.classList.add('strip-background-border');
//         // 
//         setTimeout(() => {
//             logo.parentElement.classList.add('logo-enlarge');
//             // 
//             setTimeout(() => {
//                 demoBtn.parentElement.classList.remove('hide');
//                 demoBtn.classList.remove('hidden');
//                 loginBtn.classList.remove('hidden');
//                 registerBtn.parentElement.classList.remove('hidden');
                
//             }, 750);
//         }, 500);
//     }, 1500);
// });
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
// const mainSectionWrapper = document.querySelector('#main-section-wrapper');
// const registerWrapper = document.querySelector('#register-wrapper');
// // 
// registerBtn.addEventListener('click', () => {
//     mainSectionWrapper.firstElementChild.classList.add('shrink');
//     // 
//     setTimeout(() => {
//         mainSectionWrapper.classList.toggle('hidden-options');
//         registerWrapper.classList.toggle('hidden-options');
//         // remove tabindex="-1"
//         removeTabindex('register-tabindex');
//         // set focus on first input
//         setTimeout(() => {
//             registerForm.username.focus();
//         }, 500);
//     }, 600);
// });
// 
const registerBackBtn = document.querySelector('#register-back-btn');
// 
registerBackBtn.addEventListener('click', () => {
    mainSectionWrapper.classList.toggle('hidden-options');
    registerWrapper.classList.toggle('hidden-options');
    // 
    setTimeout(() => {
        mainSectionWrapper.firstElementChild.classList.remove('shrink');
        // set tabindex="-1"
        addTabindex('register-tabindex');
        // reset form
        resetForm('#register-form input', registerForm['register-submit']);
    }, 600);
});
// 
// const loginWrapper = document.querySelector('#login-wrapper');
// // 
// loginBtn.addEventListener('click', () => {
//     mainSectionWrapper.firstElementChild.classList.add('shrink');
//     // 
//     setTimeout(() => {
//         mainSectionWrapper.classList.toggle('hidden-options');
//         loginWrapper.classList.toggle('hidden-options');
//         // remove tabindex="-1"
//         removeTabindex('login-tabindex');
//         // set focus on first input
//         setTimeout(() => {
//             loginForm.username.focus();
//         }, 500);
//     }, 600);
// });
// // 
// const loginBackBtn = document.querySelector('#login-back-btn');
// // 
// loginBackBtn.addEventListener('click', () => {
//     mainSectionWrapper.classList.toggle('hidden-options');
//     loginWrapper.classList.toggle('hidden-options');
//     // 
//     setTimeout(() => {
//         mainSectionWrapper.firstElementChild.classList.remove('shrink');
//         // set tabindex="-1"
//         addTabindex('login-tabindex');
//         // reset form
//         resetForm('#login-form input', loginForm['login-submit']);
//     }, 600);
// });
// 
const registerForm = document.querySelector('#register-form');
const usernamePattern = /^(\w+( \w+)*){6,20}$/;
const emailPattern = /^([a-zA-Z]{1}[\w\.]{0,20})@([a-zA-Z]{2,15})\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;
// const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*[\s])(?=.{8,15})/;
const passwordPattern = /^[a-zA-Z]{4,}$/;
const usernameValidationIcons = document.querySelector('#username-validation');
const emailValidationIcons = document.querySelector('#email-validation');
const passwordValidationIcons = document.querySelector('#password-validation');
const confirmPasswordValidationIcons = document.querySelector('#confirm-password-validation');
// 
// Helper functions
const checkIfAllValid = function() {
    if (
		registerForm.username.classList.contains('input-valid') &&
		registerForm.email.classList.contains('input-valid') &&
		registerForm.password.classList.contains('input-valid') &&
		registerForm['confirm-password'].classList.contains('input-valid')
	) {
        registerForm['register-submit'].classList.remove('disabled');
        return true;
		//
	} else {
        registerForm['register-submit'].classList.add('disabled');
        return false;
		//
	}
}
// 
const removeTabindex = function(selector) {
    const tabindexedElements = document.querySelectorAll(`.${selector}`);
    Array.from(tabindexedElements).forEach(element => {
        element.removeAttribute('tabindex');
    });
}
// 
const addTabindex = function(selector) {
    const tabindexedElements = document.querySelectorAll(`.${selector}`);
    Array.from(tabindexedElements).forEach(element => {
        element.setAttribute('tabindex', '-1');
    });
}
// Event listener to disable enter key
document.addEventListener('keypress', function (e) {
    if (e.key === 13) {
        e.preventDefault();
        return false;
    }
    
});
// adjust UI on click or blur events
const inputValid = function(target, feedback) {
    if (!feedback.lastElementChild.classList.contains('hide')) {
        feedback.lastElementChild.classList.add('hide');
        target.classList.remove('input-invalid');
        target.classList.add('input-valid');
    }
    feedback.firstElementChild.classList.remove('hide');
    target.classList.add('input-valid');
}
const inputInvalid = function(target, feedback) {
    if (!feedback.firstElementChild.classList.contains('hide')) {
        feedback.firstElementChild.classList.add('hide');
        target.classList.remove('input-valid');
        target.classList.add('input-invalid');
    }
    feedback.lastElementChild.classList.remove('hide');
    target.classList.add('input-invalid');
}
const formFeedback = function(pattern, target, feedback) {
    if (pattern.test(target.value)) {
        inputValid(target, feedback);
		//
	} else {
        inputInvalid(target, feedback);
		//
	}
}
// reset form
const resetForm = function(targetSelector, submitBtn) {
    const inputElements = document.querySelectorAll(targetSelector);
    Array.from(inputElements).forEach(input => {
        input.value = '';
        input.classList.remove('input-valid');
        input.classList.remove('input-invalid');
        if (!input.parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
            input.parentElement.lastElementChild.firstElementChild.classList.add('hide');
        }
        if (!input.parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
            input.parentElement.lastElementChild.lastElementChild.classList.add('hide');
        }
    });
    // disable submit btn
    if (!submitBtn.classList.contains('disabled')) {
        submitBtn.classList.add('disabled');
    }
}
// client-side form validation
// Check Username
registerForm.username.addEventListener('keyup', () => {
    formFeedback(usernamePattern, registerForm.username, usernameValidationIcons);
	checkIfAllValid();
	//
});
registerForm.username.addEventListener('blur', () => {
    formFeedback(usernamePattern, registerForm.username, usernameValidationIcons);
	checkIfAllValid();
	//
});
// Check Email
registerForm.email.addEventListener('keyup', () => {
    formFeedback(emailPattern, registerForm.email, emailValidationIcons);
	checkIfAllValid();
	//
});
registerForm.email.addEventListener('blur', () => {
    formFeedback(emailPattern, registerForm.email, emailValidationIcons);
	checkIfAllValid();
	//
});
// Check Password
registerForm.password.addEventListener('keyup', () => {
    formFeedback(passwordPattern, registerForm.password, passwordValidationIcons);
    // 
    if (registerForm.password.classList.contains('input-valid') && registerForm.password.value !== '' && (registerForm['confirm-password'].value === registerForm.password.value)) {
        inputValid(registerForm['confirm-password'], confirmPasswordValidationIcons);
		//
	} else {
		inputInvalid(registerForm['confirm-password'], confirmPasswordValidationIcons);
		//
    }
    // 
	checkIfAllValid();
	//
});
registerForm.password.addEventListener('blur', () => {
    formFeedback(passwordPattern, registerForm.password, passwordValidationIcons);
    // 
    if (registerForm.password.classList.contains('input-valid') && registerForm.password.value !== '' && (registerForm['confirm-password'].value === registerForm.password.value)) {
        inputValid(registerForm['confirm-password'], confirmPasswordValidationIcons);
		//
	} else {
		inputInvalid(registerForm['confirm-password'], confirmPasswordValidationIcons);
		//
    }
    // 
	checkIfAllValid();
	//
});
// Check Confirm Password
registerForm['confirm-password'].addEventListener('keyup', () => {
	if (registerForm.password.classList.contains('input-valid') && registerForm.password.value !== '' && (registerForm['confirm-password'].value === registerForm.password.value)) {
        inputValid(registerForm['confirm-password'], confirmPasswordValidationIcons);
		//
	} else {
		inputInvalid(registerForm['confirm-password'], confirmPasswordValidationIcons);
		//
	}
	//
	checkIfAllValid();
	//
});
registerForm['confirm-password'].addEventListener('blur', () => {
	if (registerForm.password.classList.contains('input-valid') && registerForm.password.value !== '' && (registerForm['confirm-password'].value === registerForm.password.value)) {
        inputValid(registerForm['confirm-password'], confirmPasswordValidationIcons);
		//
	} else {
		inputInvalid(registerForm['confirm-password'], confirmPasswordValidationIcons);
		//
	}
	//
	checkIfAllValid();
	//
});
// submit register form
registerForm.addEventListener('submit', e => {

    if (checkIfAllValid()) {
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
            .then(res => {
                // Check if response ok
                if (!res.ok) {
                    // Throw an exception
                    throw new Error('Network problem.');
                }
                return res.json();
            })
            .then(doc => {
                console.log(doc);
                // Handle when resolved
                // Fetch promise rejects only when there is network error
                // Handle input data
                // if (doc.php_error) {
                //     console.log(doc.error_msg);
                // } else {
                //     console.log(doc.msg);
                // }
                // code
            })
            .catch(err => {
                console.log(err);
                // Handle when rejected (only network exceptions)
                // code
            });
            // .then(doc => {
            //     // console.log(doc);
            // })
            // .catch(err => {
            //     console.log(err);
            // });
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
        
    }
    

    // Prevent the default form submit
    e.preventDefault();

});
// 
const loginForm = document.querySelector('#login-form');
const loginUsernameValidationIcons = document.querySelector('#login-username-validation');
const loginPasswordValidationIcons = document.querySelector('#login-password-validation');
// validate username and password against data in db --> if valid/invalid, add classes/or messages and show icons