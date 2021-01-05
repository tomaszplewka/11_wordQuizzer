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
                
            }, 500);
        }, 250);
    }, 750);
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
        // remove tabindex="-1"
        removeTabindex('register-tabindex');
        // set focus on first input
        setTimeout(() => {
            registerForm.username.focus();
        }, 500);
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
        // set tabindex="-1"
        addTabindex('register-tabindex');
        // reset form
        resetForm('#register-form input', registerForm['register-submit']);
        // hide submit feedback div
        hideSubmitFeedback(submitFeedback);
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
        // remove tabindex="-1"
        removeTabindex('login-tabindex');
        // set focus on first input
        setTimeout(() => {
            loginForm.email.focus();
        }, 500);
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
        // set tabindex="-1"
        addTabindex('login-tabindex');
        // reset form
        resetForm('#login-form input', loginForm['login-submit']);
        // hide submit feedback div
        hideSubmitFeedback(submitLoginFeedback);
    }, 600);
});
// 
const registerForm = document.querySelector('#register-form');
const usernamePattern = /^(\w+( \w+)*){6,20}$/;
const emailPattern = /^([a-zA-Z]{1}[\w\.]{0,20})@([a-zA-Z]{2,15})\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;
// const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*[\s])(?=.{8,})/;
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
const inputInvalidRemove = function(target, feedback) {
    feedback.lastElementChild.classList.add('hide');
    target.classList.remove('input-invalid');
}
const formFeedback = function(pattern, target, feedback, checkArr = false) {
    if (checkArr === 'username') {
        if (pattern.test(target.value) && !invalidUsernameArr.includes(target.value)) {
            inputValid(target, feedback);
        } else { inputInvalid(target, feedback); }
    } else if (checkArr === 'email') {
        if (pattern.test(target.value) && !invalidEmailArr.includes(target.value)) {
            inputValid(target, feedback);
        } else { inputInvalid(target, feedback); }
    } else {
        if (pattern.test(target.value)) {
            inputValid(target, feedback);
        } else { inputInvalid(target, feedback); }
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
const hideLoginFeedbackDiv = function() {
    if (
		registerForm.username.classList.contains('input-valid') &&
		registerForm.email.classList.contains('input-valid') &&
		registerForm.password.classList.contains('input-valid') &&
		registerForm['confirm-password'].classList.contains('input-valid')
	) {
        if (!submitFeedback.classList.contains('hide')) {
            submitFeedback.firstElementChild.classList.add('hide');
            submitFeedback.classList.add('hide');
        }
    }
}
// client-side form validation
let invalidUsernameArr = [];
let invalidEmailArr = [];
// Check Username
registerForm.username.addEventListener('keyup', () => {
    formFeedback(usernamePattern, registerForm.username, usernameValidationIcons, 'username');
    checkIfAllValid();
    // hideFeedbackDiv();
	//
});
registerForm.username.addEventListener('blur', () => {
    formFeedback(usernamePattern, registerForm.username, usernameValidationIcons, 'username');
    checkIfAllValid();
    // hideFeedbackDiv();
	//
});
// Check Email
registerForm.email.addEventListener('keyup', () => {
    formFeedback(emailPattern, registerForm.email, emailValidationIcons, 'email');
    checkIfAllValid();
    // hideFeedbackDiv();
	//
});
registerForm.email.addEventListener('blur', () => {
    formFeedback(emailPattern, registerForm.email, emailValidationIcons, 'email');
    checkIfAllValid();
    // hideFeedbackDiv();
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
    // hideFeedbackDiv();
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
    // hideFeedbackDiv();
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
    // hideFeedbackDiv();
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
    // hideFeedbackDiv();
	//
});
// Handle form feedback
const handleFormData = function(data) {
    // Count errors
    let err_count = 0;
    // Check username
    if (checkField(data.username)) { 
        err_count ++;
        inputInvalid(registerForm.username, usernameValidationIcons);
        invalidUsernameArr.push(registerForm.username.value);
    }
    // Check email
    if (checkField(data.email)) {
        err_count ++;
        inputInvalid(registerForm.email, emailValidationIcons);
        invalidEmailArr.push(registerForm.email.value);
    }
    // Check password
    if (checkField(data.password)) {
        err_count ++;
        inputInvalid(registerForm.password, passwordValidationIcons);
    }
    // Check confirm_password
    if (checkField(data.confirm_password)) {
        err_count ++;
        inputInvalid(registerForm["confirm-password"], confirmPasswordValidationIcons);
    }
    // Check db
    err_count += checkField(data.db);
    
    return err_count;
}
const handleFormDataLogin = function(data) {
    // Count errors
    let err_count = 0;
    // Check username
    if (checkField(data.email)) { 
        err_count ++;
        inputInvalid(loginForm.email, loginEmailValidationIcons);
        // 
        setTimeout(() => {
            inputInvalidRemove(loginForm.email, loginEmailValidationIcons);
        }, 2000);
        // 
        return err_count;
    } else {
        inputValid(loginForm.email, loginEmailValidationIcons);
    }
    // Check password
    if (checkField(data.password)) {
        err_count ++;
        inputInvalid(loginForm.password, loginPasswordValidationIcons);
        // 
        setTimeout(() => {
            inputInvalidRemove(loginForm.password, loginPasswordValidationIcons);
        }, 2000);
    } else {
        inputValid(loginForm.password, loginPasswordValidationIcons);
    }
    // Check db
    err_count += checkField(data.db);
    
    return err_count;
}
const checkField = function(field) {
    // console.log(field);
    // Check for error & adjust UI
    if (field.php_error) {
        const feedbacIfError = document.querySelector(`.${field.field}-wrapper-if-error`);
        feedbacIfError.firstElementChild.classList.remove('hide');
        const feedbackMsg = feedbacIfError.querySelector(`.${field.field}-error-text`);
        feedbackMsg.textContent = field.msg;

        return 1;
    } else {
        const feedbacIfOk = document.querySelector(`.${field.field}-wrapper-if-ok`);
        feedbacIfOk.firstElementChild.classList.remove('hide');

        return 0;
    }
}
// 
const registerFormInputs = document.querySelectorAll('#register-form input');
const loginFormInputs = document.querySelectorAll('#login-form input');
// 
const lockInputFields = function(target) { 
    Array.from(target).forEach(input => {
        input.setAttribute("readonly", true);
    });
}
const unlockInputFields = function(target) { 
    Array.from(target).forEach(input => {
        input.removeAttribute("readonly");
    });
}
// Show/hide errors
const showErrors = document.querySelector('#submit-feedback .error-icon-wrapper');
const feedbackWrapper = document.querySelector('#feedback-wrapper');
const feedbackBackBtn = document.querySelector('#feedback-back-btn');
// 
showErrors.addEventListener('click', () => {
    feedbackWrapper.classList.toggle('hidden-options');
})
// 
feedbackBackBtn.addEventListener('click', () => {
    feedbackWrapper.classList.toggle('hidden-options');
})
// 
const submitFeedback = document.querySelector('#submit-feedback');
const registrationConfirmation = document.querySelector('#registration-confirmation');
// submit register form
registerForm.addEventListener('submit', e => {
    // Adjust UI
    if (submitFeedback.classList.contains('hide')) {
        submitFeedback.classList.remove('hide');
        submitFeedback.lastElementChild.classList.remove('hide');
    } else {
        submitFeedback.firstElementChild.classList.add('hide');
        submitFeedback.lastElementChild.classList.remove('hide');
    } 
    // Lock input fields
    lockInputFields(registerFormInputs);
    // Clear feedback div
    clearFeedbackDiv(feedbackWrapper);
    if (checkIfAllValid()) {
        // 
        let err_count = 0;
        // Disable submit btn
        if (!registerForm["register-submit"].classList.contains('disabled')) {
            registerForm["register-submit"].classList.add('disabled');
        }
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
            .then(docs => {
                // console.log(docs);
                // Handle when resolved
                // Fetch promise rejects only when there is network error
                // Handle input data
                err_count = handleFormData(docs);
                if (err_count) { // errors found
                    setTimeout(() => {
                        submitFeedback.lastElementChild.classList.add('hide');
                        submitFeedback.firstElementChild.classList.remove('hide');
                        // Unlock fields
                        unlockInputFields(registerFormInputs);
                    }, 500);
                } else { // no errors
                    setTimeout(() => {
                        // Unlock fields
                        unlockInputFields(registerFormInputs);
                        // Hide submit feedback div
                        submitFeedback.classList.add('hide');
                        submitFeedback.firstElementChild.classList.add('hide');
                        setTimeout(() => {
                            // Show confirmation
                            const confirmUser = registrationConfirmation.querySelector('span');
                            confirmUser.textContent = registerForm.username.value;
                            registrationConfirmation.classList.remove('hidden-options');
                            // Clear form
                            resetForm('#register-form input', registerForm['register-submit']);
                            // 
                            setTimeout(() => {
                                mainSectionWrapper.classList.toggle('hidden-options');
                                registerWrapper.classList.toggle('hidden-options');
                                // set tabindex="-1"
                                addTabindex('register-tabindex');
                                // 
                                setTimeout(() => {
                                    // Hide confirmation
                                    registrationConfirmation.classList.add('hidden-options');
                                    // Show login screen
                                    mainSectionWrapper.classList.toggle('hidden-options');
                                    loginWrapper.classList.toggle('hidden-options');
                                    // 
                                    setTimeout(() => {
                                        // remove tabindex="-1"
                                        removeTabindex('login-tabindex');
                                        // set focus on first input
                                        loginForm.email.focus();
                                    }, 600);
                                }, 1500);
                            }, 1000);
                        }, 500);
                    }, 1000);
                }
            })
            .catch(err => {
                // here you can handle also error from php
                // they come in a js form: JSON.parse blah blah
                console.log(err);
                // Handle when rejected (only network exceptions)
                if (err_count) {
                    setTimeout(() => {
                        submitFeedback.lastElementChild.classList.add('hide');
                        submitFeedback.firstElementChild.classList.remove('hide');
                        // Unlock fields
                        unlockInputFields(registerFormInputs);
                    }, 500);
                }
            });        
    }
    // Prevent the default form submit
    e.preventDefault();
});
// 
const loginForm = document.querySelector('#login-form');
const loginEmailValidationIcons = document.querySelector('#login-email-validation');
const loginPasswordValidationIcons = document.querySelector('#login-password-validation');
// 
const checkIfEmpty = function() {
    if (loginForm.email.value !== '' && emailPattern.test(loginForm.email.value) && loginForm.password.value !== '') {
        loginForm["login-submit"].classList.remove('disabled');
    } else {
        loginForm["login-submit"].classList.add('disabled');
    }
}
// Check Email
loginForm.email.addEventListener('keyup', () => {
    checkIfEmpty();
});
loginForm.email.addEventListener('blur', () => {
    checkIfEmpty();
});
// Check Password
loginForm.password.addEventListener('keyup', () => {
    checkIfEmpty();
});
loginForm.password.addEventListener('blur', () => {
    checkIfEmpty();
});
// Show/hide errors
const showLoginErrors = document.querySelector('#submit-login-feedback .error-icon-wrapper');
const loginFeedbackWrapper = document.querySelector('#login-feedback-wrapper');
const loginFeedbackBackBtn = document.querySelector('#login-feedback-back-btn');
// 
showLoginErrors.addEventListener('click', () => {
    loginFeedbackWrapper.classList.toggle('hidden-options');
})
// 
loginFeedbackBackBtn.addEventListener('click', () => {
    loginFeedbackWrapper.classList.toggle('hidden-options');
})
const clearFeedbackDiv = function(target) {
    Array.from(target.lastElementChild.children).forEach(childDiv => {
        if (!childDiv.firstElementChild.classList.contains('hide')) {
            childDiv.firstElementChild.classList.add('hide');
        }
    });
}
const hideSubmitFeedback = function(target) {
    if (!target.classList.contains('hide')) {
        if (!target.firstElementChild.classList.contains('hide')) {
            target.firstElementChild.classList.add('hide');
        }
        if (!target.lastElementChild.classList.contains('hide')) {
            target.lastElementChild.classList.add('hide');
        }
        target.classList.add('hide');
    }
}
// 
const submitLoginFeedback = document.querySelector('#submit-login-feedback');
const loginConfirmation = document.querySelector('#login-confirmation');
// submit register form
loginForm.addEventListener('submit', e => {
    // Check if there is anything in inputs
    if (loginForm.email.value !== '' && emailPattern.test(loginForm.email.value) && loginForm.password.value !== '' && !loginForm.email.hasAttribute('readonly') && !loginForm.password.hasAttribute('readonly')) {
        // Adjust UI
        if (submitLoginFeedback.classList.contains('hide')) {
            submitLoginFeedback.classList.remove('hide');
            submitLoginFeedback.lastElementChild.classList.remove('hide');
        } else {
            submitLoginFeedback.firstElementChild.classList.add('hide');
            submitLoginFeedback.lastElementChild.classList.remove('hide');
        } 
        // Lock input fields
        lockInputFields(loginFormInputs);
        // Clear feedback div
        clearFeedbackDiv(loginFeedbackWrapper);
        // 
        let err_count = 0;
        // Post data using the Fetch API
        fetch(loginForm.action, {
                method: loginForm.method,
                body: new FormData(loginForm)
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
            .then(docs => {
                // console.log(docs);
                // Handle when resolved
                // Fetch promise rejects only when there is network error
                // Handle input data
                err_count = handleFormDataLogin(docs);
                if (err_count) { // errors found
                    setTimeout(() => {
                        submitLoginFeedback.lastElementChild.classList.add('hide');
                        submitLoginFeedback.firstElementChild.classList.remove('hide');
                        // Unlock fields
                        unlockInputFields(loginFormInputs);
                    }, 500);
                } else { // no errors
                    setTimeout(() => {
                        // Unlock fields
                        unlockInputFields(loginFormInputs);
                        // Hide submit feedback div
                        submitLoginFeedback.classList.add('hide');
                        submitLoginFeedback.firstElementChild.classList.add('hide');
                        setTimeout(() => {
                            // Show confirmation
                            loginConfirmation.classList.remove('hidden-options');
                            // Clear form
                            resetForm('#login-form input', loginForm['login-submit']);
                            // 
                            setTimeout(() => {
                                mainSectionWrapper.classList.toggle('hidden-options');
                                loginWrapper.classList.toggle('hidden-options');
                                // set tabindex="-1"
                                addTabindex('login-tabindex');
                                // 
                                setTimeout(() => {
                                    // Hide confirmation
                                    loginConfirmation.classList.add('hidden-options');
                                    // Show welcome screen
                                    mainSectionWrapper.classList.toggle('hidden-options');
                                    // Redirect
                                    window.location = './welcome.php';
                                }, 500);
                            }, 1500);
                        }, 500);
                    }, 1000);
                }
            })
            .catch(err => {
                // here you can handle also error from php
                // they come in a js form: JSON.parse blah blah
                console.log(err);
                // Handle when rejected (only network exceptions)
                if (err_count) {
                    setTimeout(() => {
                        submitLoginFeedback.lastElementChild.classList.add('hide');
                        submitLoginFeedback.firstElementChild.classList.remove('hide');
                        // Unlock fields
                        unlockInputFields();
                    }, 500);
                }
            });
    } else {
        // tutaj pokaz ERRORS FOUND i zmien feedback
    }
    // Prevent the default form submit
    e.preventDefault();
});
// 