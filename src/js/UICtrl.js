// 
// 
// 
const UICtrl = (function() {
    const UISelectors = {
        mainSectionWrapper: document.querySelector('#main-section-wrapper'),
        mainLogo: '#front-page-logo',
        mainLogoFaceFront: '.face.front',
        mainLogoFaceTop: '.face.top',
        mainLogoFaceLeft: '.face.left',
        startBtn: '#front-page-start-btn',
        demoBtn: '#front-page-demo-btn',
        loginBtn: '#front-page-login-btn',
        registerBtn: '#front-page-register-btn',
        registerWrapper: document.querySelector('#register-wrapper'),
        registerFeedback: document.querySelector('#register-feedback-wrapper'),
        registerForm: document.querySelector('#register-form'),
        registerBackBtn: '#register-back-btn',
        usernameValidationIcons: document.querySelector('#username-validation'),
        emailValidationIcons: document.querySelector('#email-validation'),
        passwordValidationIcons: document.querySelector('#password-validation'),
        confirmPasswordValidationIcons: document.querySelector('#confirm-password-validation'),
        formSubmitFeedback: '#submit-feedback',
        inputHint: '.input-hint',
        hintWrapper: document.querySelector('#hint-wrapper'),
        feedbackBackBtn: '#feedback-back-btn',
        submitFeedbackError: '.error-icon-wrapper',
        confirmationWrapper: '.registration-confirmation',
        confirmationUser: '.registration-cofirmation-user',
        loginWrapper: document.querySelector('#login-wrapper'),
        loginForm: document.querySelector('#login-form')
    };
    const showMainLogo = function() {
        return `
        <div class="perspective-box-far" id="front-page-logo">
            <div class="face front">
                <img src="imgs/logo-main.png" alt="">
            </div>
            <div class="face top">
                <img src="imgs/logo-main.png" alt="">
            </div>
            <div class="face left">
                <img src="imgs/logo-main.png" alt="">
            </div>
        </div>
        `;
    };
    const createA = function(aClass, aId = '') {
        let a = document.createElement('a');
        a.className = aClass;
        a.id = aId;
        return a;
    };
    const createSpan = function(spanClass = '', spanId = '') {
        let span = document.createElement('span');
        span.className = spanClass;
        span.id = spanId;
        return span;
    };
    const createDiv = function(divClass, divId = '') {
        let div = document.createElement('div');
        div.className = divClass;
        div.id = divId;
        return div;
    };
    const createPara = function(pClass, pId = '') {
        let p = document.createElement('p');
        p.className = pClass;
        p.id = pId;
        return p;
    };
    const createHeader = function(text, customClass = '') {
        let h = document.createElement('h2');
        h.className = `is-size-1 is-uppercase form-header ${customClass}`;
        h.textContent = text;
        return h;
    };
    const createStartBtn = function() {
        const div = createDiv('button-wrapper-primary');
        const a = createA('btn', 'front-page-start-btn');
        const span = createSpan();
        span.textContent = 'start';
        a.appendChild(span);
        div.appendChild(a);
        return div;
    };
    const createMainBtns = function() {
        const divMain = createDiv('button-wrapper-secondary');
        const demo = createA('btn', 'front-page-demo-btn');
        const demoSpan = createSpan();
        demoSpan.textContent = 'demo';
        demo.appendChild(demoSpan);
        const login = createA('btn', 'front-page-login-btn');
        const loginSpan = createSpan();
        loginSpan.textContent = 'login';
        login.appendChild(loginSpan);
        divMain.appendChild(demo);
        divMain.appendChild(login);
        let divRegister = createDiv('is-flex is-justify-content-end');
        const register = createA('side-btn', 'front-page-register-btn');
        const registerSpan = createSpan();
        registerSpan.textContent = 'register';
        register.appendChild(registerSpan);
        divRegister.appendChild(register);
        divMain.appendChild(divRegister);
        return divMain;
    };
    const goBackBtn = function(btnId) {
        const div = createDiv('is-flex is-justify-content-start');
        const a = createA('control-btn', btnId);
        const span = createSpan();
        span.textContent = 'go back';
        a.appendChild(span)
        div.appendChild(a);
        return div;
    };
    const errorWrapper = function(target) {
        return `
        <div class="${target}-wrapper-if-error">
            <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                <div class="column is-10-mobile is-10 p-2">
                    <p role="alert" class="status-failure has-text-left">${target}</p>
                </div>
                <div class="column is-2-mobile is-2 text-copper-red has-text-centered p-0 px-2">
                    <i class="fas fa-exclamation fa-2x"></i>
                </div>
                <div class="column is-12-mobile is-12 text-copper-red has-text-centered p-0">
                    <p class="${target}-error-text"></p>
                </div>
            </div>
        </div>
        `;
    };
    const okWrapper = function(target) {
        return `
        <div class="${target}-wrapper-if-ok">
            <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                <div class="column is-10-mobile is-10 p-2">
                    <p role="alert" class="status-ok has-text-left">${target}</p>
                </div>
                <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                    <i class="fas fa-check fa-2x"></i>
                </div>
            </div>
        </div>
        `;
    };
    const createDataFeedback = function(inputArr) {
        const goBack = goBackBtn('feedback-back-btn');
        const feedbackHeader = createDiv('feedback-header');
        const h = createHeader('feedback');
        feedbackHeader.appendChild(h);
        const feedbackBody = createDiv('feedback-body mb-5');
        // Add error/ok wrappers in a loop based on inputArr
        inputArr.forEach(input => {
            feedbackBody.innerHTML += errorWrapper(input);
            feedbackBody.innerHTML += okWrapper(input);
        });
        // Make it more general by passing target to the function!!!
        UISelectors.registerFeedback.appendChild(goBack);
        UISelectors.registerFeedback.appendChild(feedbackHeader);
        UISelectors.registerFeedback.appendChild(feedbackBody);
    };
    const createFormConfirmation = function(target) {
        const targetForm = document.querySelector(`#${target}-form`);
        let div = createDiv('registration-confirmation is-flex is-justify-content-center is-align-items-center hidden-options background-mountain-meadow', 'registration-confirmation');
        let p = createPara('registration-cofirmation-text text-ghost-white p-2');
        let html = `
        User <span class="registration-cofirmation-user is-lowercase text-smoky-black"></span> has been registered.
        `;
        p.innerHTML = html;
        div.appendChild(p);
        targetForm.firstElementChild.appendChild(div);
    };
    const createSubmitFeedback = function(target) {
        const targetForm = document.querySelector(`#${target}-form`);
        const div = createDiv('submit-feedback mt-4 hide', 'submit-feedback');
        div.innerHTML = `
        <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline error-status hide">
            <div class="column is-10-mobile is-10">
                <p role="alert" class="status-failure">Errors found</p>
            </div>
            <div class="column is-2-mobile is-2 background-copper-red error-icon-wrapper">
                <i class="fas fa-exclamation"></i>
            </div>
        </div>
        <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline data-status hide">
            <div class="column is-12-mobile is-12">
                <p role="alert" class="status-ok">Busy sending data.</p>
            </div>
        </div>
        `;
        targetForm.firstElementChild.after(div);
    };
    const createHintContent = function() {
        let html = `
        <h2 class="is-size-1 is-uppercase form-header">hint</h2>
        <p class="text-ghost-white input-invalid" data-id="username">
            Username field must contain at least 6 characters (letters or numbers only).
        </p>
        <hr>
        <p class="text-ghost-white input-invalid" data-id="email">
            Email field must contain a valid email address.
        </p>
        <hr>
        <p class="text-ghost-white input-invalid" data-id="password">
            Password must be at least 8 characters long and contain at least 1 capital letter and 1 special symbol.
        </p>
        <hr>
        <p class="text-ghost-white input-invalid" data-id="confirm-password">
            Passwords must match.
        </p>
        `;
        UISelectors.hintWrapper.innerHTML = html;
    };
    // const createInput = function(inputType, inputName, inputPlaceholder) {
    //     return `
    //     <input class="register-tabindex" type="${inputType}" name="${inputName}" placeholder="${inputPlaceholder}*" tabindex="-1">
    //     `;
    // };
    // const createIcon = function(iconClass) {
    //     let i = document.createElement('i');
    //     i.className = `fas fa-${iconClass}`;
    //     return i;
    // };
    // const createInputWrapper = function(inputType, inputName, inputPlaceholder, leftIcon) {
    //     const div = createDiv('input-wrapper');
    //     div.innerHTML = createInput(inputType, inputName, inputPlaceholder);
    //     const leftSpan = createSpan('icon-left');
    //     const leftI = createIcon(leftIcon);
    //     leftSpan.appendChild(leftI);
    //     div.appendChild(leftSpan);
    //     const validationSpan = createSpan('icon-validation', `${inputName}-validation`);
    //     validationSpan.innerHTML = `
    //     <i class="fas fa-check icon-valid hide"></i>
    //     <i class="fas fa-times icon-invalid hide"></i>
    //     `;
    //     div.appendChild(validationSpan);
    //     return div;
    // };
    const removeTabindex = function(selector) {
        const tabindexedElements = document.querySelectorAll(`.${selector}`);
        Array.from(tabindexedElements).forEach(element => {
            element.removeAttribute('tabindex');
        });
    };
    const addTabindex = function(selector) {
        const tabindexedElements = document.querySelectorAll(`.${selector}`);
        Array.from(tabindexedElements).forEach(element => {
            element.setAttribute('tabindex', '-1');
        });
    };
    const lockInput = function(target) {
        const inputElements = document.querySelectorAll(`#${target}-form input`);
        Array.from(inputElements).forEach(input => {
            input.setAttribute("readonly", true);
        });
    };
    const unlockInput = function(target) { 
        const inputElements = document.querySelectorAll(`#${target}-form input`);
        Array.from(inputElements).forEach(input => {
            input.removeAttribute("readonly");
        });
    };
    const createInputHint = function() {
        let span = document.createElement('span');
        span.innerHTML = `<img src="./imgs/hint.png" alt="input hints" class="input-hint">`;
        UISelectors.registerForm.appendChild(span);
    };
    // const clearDataFeedback = function(target) {
    //     Array.from(target.lastElementChild.children).forEach(childDiv => {
    //         if (!childDiv.firstElementChild.classList.contains('hide')) {
    //             childDiv.firstElementChild.classList.add('hide');
    //         }
    //     });
    // };
    // 
    // This one should go to DataCtrl
    const patterns = {
        usernamePattern: /^(\w+( \w+)*){6,}$/,
        emailPattern: /^([a-zA-Z]{1}[\w\.]{0,20})@([a-zA-Z]{2,})\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/,
        // passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*[\s])(?=.{8,})/,
        passwordPattern: /^[a-zA-Z]{4,}$/
    };
    // reset form
    const resetForm = function(target) {
        const inputElements = document.querySelectorAll(`#${target}-form input`);
        const submitBtn = document.querySelector(`#${target}-form button`);
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
    };
    const checkIfAllValid = function(target) {
        const inputElements = document.querySelectorAll(`#${target}-form input`);
        const submitBtn = document.querySelector(`#${target}-form button`);
        let valid = 0;
        Array.from(inputElements).forEach(input => {
            valid += !!input.classList.contains('input-valid');
        });
        if (valid === inputElements.length) {
            submitBtn.classList.remove('disabled');
            return true;
        } else {
            submitBtn.classList.add('disabled');
            return false;
        }
    };
    // adjust UI on click or blur events
    const inputValid = function(target) {
        if (target.classList.contains('input-invalid')) {
            target.nextElementSibling.nextElementSibling.lastElementChild.classList.add('hide');
            target.classList.remove('input-invalid');
        }
        target.nextElementSibling.nextElementSibling.firstElementChild.classList.remove('hide');
        target.classList.add('input-valid');
    };
    const inputInvalid = function(target) {
        if (target.classList.contains('input-valid')) {
            target.nextElementSibling.nextElementSibling.firstElementChild.classList.add('hide');
            target.classList.remove('input-valid');
        }
        target.nextElementSibling.nextElementSibling.lastElementChild.classList.remove('hide');
        target.classList.add('input-invalid');
    };
    const inputInvalidRemove = function(target) {
        target.nextElementSibling.nextElementSibling.lastElementChild.classList.add('hide');
        target.classList.remove('input-invalid');
    };
    const hintFeedback = function(input, valid = true) {
        const p = document.querySelector(`p[data-id="${input}"]`);
        if (valid) {
            p.classList.remove('input-invalid');
            p.classList.add('input-valid');
        } else {
            p.classList.remove('input-valid');
            p.classList.add('input-invalid');
        }
    };
    const formFeedback = function(pattern, target, input) {
        if (pattern.test(target.value)) {
            inputValid(target);
            hintFeedback(input);
        } else {
            inputInvalid(target);
            hintFeedback(input, false);
        }
    };
    const hideLoginFeedbackDiv = function(target) {
        const inputElements = document.querySelectorAll(`#${target}-form input`);
        let valid = 0;
        Array.from(inputElements).forEach(input => {
            valid += parseInt(input.classList.contains('input-valid'));
        });
        if (valid === inputElements.length) {
            if (!UISelectors.submitFeedback.classList.contains('hide')) {
                UISelectors.submitFeedback.firstElementChild.classList.add('hide');
                UISelectors.submitFeedback.classList.add('hide');
            }
        }
    };
    const checkField = function(input) {
        // Check for error & adjust UI
        if (input.php_error) {
            const feedbacIfError = document.querySelector(`.${input.field}-wrapper-if-error`);
            feedbacIfError.firstElementChild.classList.remove('hide');
            const feedbackMsg = feedbacIfError.querySelector(`.${input.field}-error-text`);
            feedbackMsg.textContent = input.msg;
            return 1;
        } else {
            const feedbacIfOk = document.querySelector(`.${input.field}-wrapper-if-ok`);
            feedbacIfOk.firstElementChild.classList.remove('hide');
            return 0;
        }
    }
    // Handle form feedback
    const handleFormData = function(data, target) {
        const targetForm = document.querySelector(`#${target}-form`);
        // Count errors
        let err_count = 0;
        Object.keys(data).forEach(input => {
            if (!(data[input].field === 'db')) {
                if (checkField(data[input])) {
                    err_count ++;
                    inputInvalid(targetForm[data[input].field]);
                    hintFeedback(data[input].field, false);
                }
            }
        });
        err_count += checkField(data.db);
        return err_count;
    };
    // 
    // 
    return {
        init: function() {
            // Load main logo
            UISelectors.mainSectionWrapper.firstElementChild.firstElementChild.innerHTML = showMainLogo();
            // Load start btn
            UISelectors.mainSectionWrapper.firstElementChild.lastElementChild.appendChild(createStartBtn());

        },
        UISelectors,
        patterns,
        createMainBtns,
        removeTabindex,
        addTabindex,
        goBackBtn,
        createHeader,
        createFormConfirmation,
        createSubmitFeedback,
        createDataFeedback,
        resetForm,
        checkIfAllValid,
        inputValid,
        inputInvalid,
        inputInvalidRemove,
        hintFeedback,
        formFeedback,
        hideLoginFeedbackDiv,
        lockInput,
        unlockInput,
        createInputHint,
        createHintContent,
        handleFormData
    };
})();
UICtrl.init();
// Load event listeners (AppCtrl)
// Click events
const grab = document.querySelector.bind(document);
const selector = UICtrl.UISelectors;
document.addEventListener('click', e => {
    // StartBtn clicked
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.startBtn) || (`#${e.target.id}` === selector.startBtn)) {
        // Swtich animating logo to static image
        grab(selector.mainLogo).classList.add('loader-wrapper');
        grab(selector.mainLogoFaceFront).classList.add('loader-face-front');
        grab(selector.mainLogoFaceTop).classList.add('loader-face-top');
        grab(selector.mainLogoFaceLeft).classList.add('loader-face-left');
        // Hide startBtn
        grab(selector.startBtn).classList.add('button-dissapear');
        setTimeout(() => {
            // Swtich animating logo to static image
            grab(selector.mainLogoFaceFront).classList.add('strip-background-border');
            grab(selector.mainLogoFaceTop).classList.add('strip-background-border');
            grab(selector.mainLogoFaceLeft).classList.add('strip-background-border');
            setTimeout(() => {
                grab(selector.mainLogo).parentElement.classList.add('logo-enlarge');
                setTimeout(() => {
                    // Show demo, login & register btns
                    selector.mainSectionWrapper.firstElementChild.lastElementChild.appendChild(UICtrl.createMainBtns());
                }, 500);
            }, 250);
        }, 750);
    }
    // RegisterBtn clicked
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.registerBtn) || (`#${e.target.id}` === selector.registerBtn)) {
        // Hide main section
        selector.mainSectionWrapper.firstElementChild.classList.add('shrink');
        // Show register section
        setTimeout(() => {
            // Render UI elements
            selector.registerFeedback.before(UICtrl.goBackBtn('register-back-btn'));
            selector.registerFeedback.after(UICtrl.createHeader('sign up', 'main-register-header'));
            UICtrl.createInputHint();
            UICtrl.createHintContent();
            // Adjust UI display
            selector.mainSectionWrapper.classList.toggle('hidden-options');
            selector.registerWrapper.classList.toggle('hidden-options');
            // remove tabindex="-1"
            UICtrl.removeTabindex('register-tabindex');
            // set focus on first input -- consider autofocus on html element
            setTimeout(() => {
                selector.registerForm.username.focus();
            }, 500);
        }, 600);
    }
    // RegisterBackBtn clicked
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.registerBackBtn) || (`#${e.target.id}` === selector.registerBackBtn)) {
        selector.mainSectionWrapper.classList.toggle('hidden-options');
        selector.registerWrapper.classList.toggle('hidden-options');
        // 
        setTimeout(() => {
            selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
            // set tabindex="-1"
            UICtrl.addTabindex('register-tabindex');
            // reset form
            UICtrl.resetForm('register');
            // Remove rendered UI components
            grab(selector.registerBackBtn).parentElement.remove();
            grab('.main-register-header').remove();
            if (grab(selector.formSubmitFeedback) !== null) {
                grab(selector.formSubmitFeedback).remove();
            }
            grab(selector.inputHint).parentElement.remove();
            selector.hintWrapper.innerHTML = '';
            selector.registerFeedback.innerHTML = '';
        }, 600);
    }
    // HintBtn clicked
    if (e.target.classList.contains('input-hint')) {
        selector.hintWrapper.classList.toggle('hidden-options');
    }
    // FeedbackBackBtn clicked
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.feedbackBackBtn) || (`#${e.target.id}` === selector.feedbackBackBtn)) {
        selector.registerFeedback.classList.toggle('hidden-options');
    }
    // submitFeedbackError clicked
    if (document.querySelector(selector.submitFeedbackError).contains(e.target)) {
        selector.registerFeedback.classList.toggle('hidden-options');
    }
});
// Keyup & blur events
// Check Username
selector.registerForm.username.addEventListener('keyup', () => {
    UICtrl.formFeedback(UICtrl.patterns.usernamePattern, selector.registerForm.username, 'username');
    UICtrl.checkIfAllValid('register');
});
selector.registerForm.username.addEventListener('blur', () => {
    UICtrl.formFeedback(UICtrl.patterns.usernamePattern, selector.registerForm.username, 'username');
    UICtrl.checkIfAllValid('register');
});
// Check Email
selector.registerForm.email.addEventListener('keyup', () => {
    UICtrl.formFeedback(UICtrl.patterns.emailPattern, selector.registerForm.email, 'email');
    UICtrl.checkIfAllValid('register');
});
selector.registerForm.email.addEventListener('blur', () => {
    UICtrl.formFeedback(UICtrl.patterns.emailPattern, selector.registerForm.email, 'email');
    UICtrl.checkIfAllValid('register');
});
// Check Password
selector.registerForm.password.addEventListener('keyup', () => {
    UICtrl.formFeedback(UICtrl.patterns.passwordPattern, selector.registerForm.password, 'password');
    // 
    if (selector.registerForm.password.classList.contains('input-valid') && selector.registerForm.password.value !== '' && (selector.registerForm['confirm-password'].value === selector.registerForm.password.value)) {
        UICtrl.inputValid(selector.registerForm['confirm-password']);
	} else {
		UICtrl.inputInvalid(selector.registerForm['confirm-password']);
    }
    UICtrl.checkIfAllValid('register');
});
selector.registerForm.password.addEventListener('blur', () => {
    UICtrl.formFeedback(UICtrl.patterns.passwordPattern, selector.registerForm.password, 'password');
    // 
    if (selector.registerForm.password.classList.contains('input-valid') && selector.registerForm.password.value !== '' && (selector.registerForm['confirm-password'].value === selector.registerForm.password.value)) {
        UICtrl.inputValid(selector.registerForm['confirm-password']);
	} else {
		UICtrl.inputInvalid(selector.registerForm['confirm-password']);
    }
    UICtrl.checkIfAllValid('register');
});
// Check Confirm Password
selector.registerForm['confirm-password'].addEventListener('keyup', () => {
	if (selector.registerForm.password.classList.contains('input-valid') && selector.registerForm.password.value !== '' && (selector.registerForm['confirm-password'].value === selector.registerForm.password.value)) {
        UICtrl.inputValid(selector.registerForm['confirm-password']);
        UICtrl.hintFeedback('confirm-password');
	} else {
        UICtrl.inputInvalid(selector.registerForm['confirm-password']);
        UICtrl.hintFeedback('confirm-password', false);
	}
    UICtrl.checkIfAllValid('register');
});
selector.registerForm['confirm-password'].addEventListener('blur', () => {
	if (selector.registerForm.password.classList.contains('input-valid') && selector.registerForm.password.value !== '' && (selector.registerForm['confirm-password'].value === selector.registerForm.password.value)) {
        UICtrl.inputValid(selector.registerForm['confirm-password']);
        UICtrl.hintFeedback('confirm-password');
	} else {
        UICtrl.inputInvalid(selector.registerForm['confirm-password']);
        UICtrl.hintFeedback('confirm-password', false);
	}
    UICtrl.checkIfAllValid('register');
});
// Submit events
// submit register form
selector.registerForm.addEventListener('submit', e => {
    // Prevent the default form submit
    e.preventDefault();
    // Add formSubmitFeedback
    if (grab(selector.formSubmitFeedback) === null) {
        UICtrl.createSubmitFeedback('register');
    }
    const submitFeedback = grab(selector.formSubmitFeedback);
    // Add data feedback
    selector.registerFeedback.innerHTML = '';
    UICtrl.createDataFeedback(['username', 'email', 'password', 'confirm-password', 'db']);
    // Adjust UI
    if (submitFeedback.classList.contains('hide')) {
        submitFeedback.classList.remove('hide');
        submitFeedback.lastElementChild.classList.remove('hide');
    } else {
        submitFeedback.firstElementChild.classList.add('hide');
        submitFeedback.lastElementChild.classList.remove('hide');
    } 
    if (UICtrl.checkIfAllValid('register')) {
        // Lock input fields
        UICtrl.lockInput('register');
        // Disable submit btn
        if (!selector.registerForm["register-submit"].classList.contains('disabled')) {
            selector.registerForm["register-submit"].classList.add('disabled');
        }
        // Check for errors
        let err_count = 0;
        // Post data using the Fetch API
        fetch(selector.registerForm.action, {
            method: selector.registerForm.method,
            body: new FormData(selector.registerForm)
        })
        .then(response => {
            if (!response.ok) { throw new Error('Network problem. Please try again later'); }
            return response.json();
        })
        .then(docs => {
            console.log(docs);
            // Handle when resolved
            // Fetch promise rejects only when there is network error
            // Handle input data
            err_count = UICtrl.handleFormData(docs, 'register');
            if (err_count) { // errors found
                setTimeout(() => {
                    submitFeedback.lastElementChild.classList.add('hide');
                    submitFeedback.firstElementChild.classList.remove('hide');
                    // Unlock fields
                    UICtrl.unlockInput('register');
                }, 500);
            } else { // no errors
                // Add confirmation div
                UICtrl.createFormConfirmation('register');
                setTimeout(() => {
                    // Unlock fields
                    UICtrl.unlockInput('register');
                    // Hide submit feedback div
                    submitFeedback.classList.add('hide');
                    submitFeedback.firstElementChild.classList.add('hide');
                    setTimeout(() => {
                        // Show confirmation
                        grab(selector.confirmationUser).textContent = selector.registerForm.username.value;
                        grab(selector.confirmationWrapper).classList.remove('hidden-options');
                        // Clear form
                        UICtrl.resetForm('register');
                        setTimeout(() => {
                            selector.mainSectionWrapper.classList.toggle('hidden-options');
                            selector.registerWrapper.classList.toggle('hidden-options');
                            // set tabindex="-1"
                            UICtrl.addTabindex('register-tabindex');
                            // Show login screen
                            selector.mainSectionWrapper.classList.toggle('hidden-options');
                            selector.loginWrapper.classList.toggle('hidden-options');
                            setTimeout(() => {
                                // remove tabindex="-1"
                                UICtrl.removeTabindex('login-tabindex');
                                // set focus on first input
                                selector.loginForm.email.focus();
                                // Reset register UI
                                grab(selector.registerBackBtn).parentElement.remove();
                                grab('.main-register-header').remove();
                                if (grab(selector.formSubmitFeedback) !== null) {
                                    grab(selector.formSubmitFeedback).remove();
                                }
                                grab(selector.inputHint).parentElement.remove();
                                selector.hintWrapper.innerHTML = '';
                                selector.registerFeedback.innerHTML = '';
                                grab(selector.confirmationWrapper).remove();
                            }, 600);
                        }, 1000);
                    }, 500);
                }, 1000);
            }
        })
        .catch(err => {
            console.log(err);
            // Handle when rejected (only network exceptions)
            // For network show big red screen saying 'network problem. check your internet connection'
        });        
    }
});
// export default UICtrl;