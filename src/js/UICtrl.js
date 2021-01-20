// 
// 
// 
const UICtrl = (function() {
    const UISelectors = {
        startPage: '#front-page-main-content-wrapper',
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
        loginFeedback: document.querySelector('#login-feedback-wrapper'),
        registerForm: document.querySelector('#register-form'),
        registerBackBtn: '#register-back-btn',
        formRegisterSubmitFeedback: '#register-submit-feedback',
        formLoginSubmitFeedback: '#login-submit-feedback',
        inputHint: '.input-hint',
        hintWrapper: document.querySelector('#hint-wrapper'),
        feedbackBackBtn: '#feedback-back-btn',
        submitFeedbackError: '.error-icon-wrapper',
        registrationConfirmation: '.register-confirmation',
        loginConfirmation: '.login-confirmation',
        confirmationUser: '.register-cofirmation-user',
        loginWrapper: document.querySelector('#login-wrapper'),
        loginForm: document.querySelector('#login-form'),
        loginFeedback: document.querySelector('#login-feedback-wrapper'),
        loginBackBtn: '#login-back-btn',
        burger: document.querySelector('#burger'),
        times: document.querySelector('#times'),
        options: document.querySelector('#options-wrapper'),
        browseWrapper: document.querySelector('#browse-wrapper'),
        filterWrapper: document.querySelector('#filter-quiz-wrapper'),
        filterForm: document.querySelector('#filter-form'),
        searchForm: document.querySelector('#search-form'),
        browseBackBtn: '#browse-back-btn',
        quizWrapper: document.querySelector('.quiz'),
        moreInfoBtn: '.more-info-btn',
        moreInfoBackBtn: '.more-info-back-btn',
        moreInfoWrapper: '.more-info-wrapper',
        playBtn: '.play-btn',
        quizViewWrapper: document.querySelector('#quiz-view-wrapper'),
        quizForm: document.querySelector('#quiz-form'),
        quizContent: document.querySelector('#quiz-content'),
        quizResults: '#quiz-results',
        quizScore: '#quiz-score',
        quizFeedback: '#quiz-feedback',
        overlay: '.overlay',
        quizQuestion: document.querySelector('#question-text'),
        quitBtn: '#quiz-quit-btn',
        nextBtn: '#quiz-next-btn',
        qNumber: '#quiz-which-question',
        quitConfirmationWrapper: '.quiz-quit-confirmation-wrapper',
        quitYes: '#quiz-quit-yes-btn',
        quizSubmitBtn: '#quiz-form-submit',
        quizRetryBtn: '#quiz-retry-btn'
    };
    const global = {
        quizzes: [],
        quizID: null,
        index: 0,
        questions: [],
        answers: [],
        correctAnswers: [],
        value: [],
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
    const createBrowseOptions = function() {
        const divWrapper = createDiv('is-flex is-justify-content-space-between is-align-items-center');
        const aBtn = createA('control-btn', 'browse-back-btn');
        const spanBtn = createSpan();
        spanBtn.textContent = 'go back';
        aBtn.appendChild(spanBtn);
        divWrapper.appendChild(aBtn);
        const divOptionsWrapper = createDiv('is-flex is-justify-content-center');
        const aFilter = createA('control-btn mx-1', 'filter-btn');
        const spanFilter = createSpan();
        const iFilter = createIcon('filter');
        spanFilter.appendChild(iFilter);
        aFilter.appendChild(spanFilter);
        divOptionsWrapper.appendChild(aFilter);
        const aSearch = createA('control-btn mx-1', 'search-btn');
        const spanSearch = createSpan();
        const iSearch = createIcon('search');
        spanSearch.appendChild(iSearch);
        aSearch.appendChild(spanSearch);
        divOptionsWrapper.appendChild(aSearch);
        divWrapper.appendChild(divOptionsWrapper);
        return divWrapper;
    };
    const createBtn = function(aClass, aID, aText) {
        const a = createA(aClass, aID);
        const span = createSpan('text-smoky-black');
        span.textContent = aText;
        a.appendChild(span);
        return a;
    };
    const createQuizNavigation = function() {
        const divWrapper = createDiv('is-flex is-justify-content-space-between is-align-items-center column is-12-mobile is-12 p-0');
        const aQuit = createA('control-btn', 'quiz-quit-btn');
        const spanQuit = createSpan('text-smoky-black');
        spanQuit.textContent = 'quit';
        aQuit.appendChild(spanQuit);
        divWrapper.appendChild(aQuit);
        const paraQuiz = createPara('quiz-view-questions', 'quiz-which-question');
        paraQuiz.innerHTML = `
        <span id="quiz-current-question" class="">1</span>
        /
        <span id="quiz-total-questions" class=""></span>
        `;
        divWrapper.appendChild(paraQuiz);
        const aNext = createA('control-btn', 'quiz-next-btn');
        const spanNext = createSpan('text-smoky-black');
        spanNext.textContent = 'next';
        aNext.appendChild(spanNext);
        divWrapper.appendChild(aNext);
        UISelectors.quizContent.before(divWrapper);
        // const html = `
        //     <button id="quiz-form-submit" class="control-btn" type="submit" form="quiz-form" style="display: none; background-color: transparent;">
        //         <span class="text-smoky-black">Submit</span>
        //     </button>
        //     <a id="quiz-retry-btn" class="control-btn" style="display: none;">
        //         <span class="text-smoky-black">Retry</span>
        //     </a>
        // `;
    };
    const createQuizQuitConfirmation = function() {
        const divWrapper = createDiv('quiz-quit-confirmation-wrapper background-copper-red is-flex is-justify-content-center is-align-items-center column is-12-mobile is-12 p-0 hidden-options');
        const p = createPara('quiz-quit-confirmation-text');
        p.textContent = 'are you sure?';
        const divBtn = createDiv('quiz-quit-confirmation-btn-wrapper is-flex is-justify-content-center');
        const aBtn = createA('btn btn-vertical mx-2 my-0', 'quiz-quit-yes-btn');
        const spanBtn = createSpan();
        spanBtn.textContent = 'yes';
        aBtn.appendChild(spanBtn);
        divBtn.appendChild(aBtn);
        divWrapper.appendChild(p);
        divWrapper.appendChild(divBtn);
        UISelectors.quizContent.before(divWrapper);
    };
    const createDataFeedback = function(inputArr, target) {
        const targetFeedback = document.querySelector(`#${target}-feedback-wrapper`);
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
        targetFeedback.appendChild(goBack);
        targetFeedback.appendChild(feedbackHeader);
        targetFeedback.appendChild(feedbackBody);
    };
    const createFormConfirmation = function(target, text = 'registered') {
        const targetForm = document.querySelector(`#${target}-form`);
        let div = createDiv(`${target}-confirmation is-flex is-justify-content-center is-align-items-center hidden-options background-mountain-meadow`, `${target}-confirmation`);
        let p = createPara(`${target}-cofirmation-text text-ghost-white p-2`);
        let html = `
        User <span class="${target}-cofirmation-user is-lowercase text-smoky-black"></span> has been ${text}.
        `;
        p.innerHTML = html;
        div.appendChild(p);
        targetForm.firstElementChild.appendChild(div);
    };
    const createSubmitFeedback = function(target) {
        const targetForm = document.querySelector(`#${target}-form`);
        const div = createDiv('submit-feedback mt-4 hide', `${target}-submit-feedback`);
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
    const createLoader = function(target) {
        let div = document.createElement('div');
        div.className = 'is-flex is-flex-direction-column is-justify-content-center is-align-items-center loader-wrapper2';
        let loader = document.createElement('div');
        // loader.className = 'loader hide';
        loader.className = 'loader';
        div.appendChild(loader);
        target.appendChild(div);
        // setTimeout(() => {
        //     target.lastElementChild.firstElementChild.classList.remove('hide');
        // }, 250);
    };
    // const createOverlay = function() {
    //     const div = createDiv('overlay', 'overlay');
    // };
    const removeLoader = function() {
        const loader = document.querySelector('.loader-wrapper2');
        loader.classList.add('shrink');
        setTimeout(() => {
            loader.remove();
        }, 500);
    }
    // const createInput = function(inputType, inputName, inputPlaceholder) {
    //     return `
    //     <input class="register-tabindex" type="${inputType}" name="${inputName}" placeholder="${inputPlaceholder}*" tabindex="-1">
    //     `;
    // };
    const createIcon = function(iconClass) {
        let i = document.createElement('i');
        i.className = `fas fa-${iconClass}`;
        return i;
    };
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
    const renderQuizzes = function(page, data) {
        let html = '';
        const quizStart = 0 + (page - 1) * 3;
        const quizEnd = 3 + (page - 1) * 3;
        const pages = Math.ceil(data.length / 3);
        console.log(pages);
        for (let index = quizStart; index < quizEnd; index++) {
            if (data[index] === undefined) { break; }
            // Set vars
            const quizID = data[index]["quiz_id"];
            const quizCategory = data[index]["quiz_type"];
            const quizName = data[index]["quiz_name"];
            const quizAnswers = data[index]["quiz_answers"];
            const quizQuestions = data[index]["quiz_questions"];
            const quizCreatedAt = new Date(data[index]["created_at"]).toLocaleString();
            const quizUpdateddAt = new Date(data[index]["updated_at"]).toLocaleString();
            const quizScore = data[index]["score"];
            // Create template
            html += `
            <div id="${quizID}" class="my-2">
                <div class="quiz-header columns is-mobile m-0 is-vcentered has-text-centered py-2 ${quizCategory}">
                    <div class="column is-3-mobile is-3 py-0" >
                        <span class="quiz-header-icon text-smoky-black">
                            ${quizCategory[0]}
                        </span> 
                    </div>
                    <div class="quiz-header-name column is-9-mobile is-9 py-0" >
                        ${quizName}
                    </div>
                </div>
                <div class="quiz-body columns is-mobile m-0 is-vcentered has-text-centered p-0">
                    <div class="quiz-body-more-info column is-6-mobile is-6 p-0" >
                        <a id="" class="btn btn-invert btn-small btn-vertical m-0 more-info-btn" >
                            <span>more info</span>
                        </a>
                    </div>
                    <div class="quiz-body-play column is-6-mobile is-6 p-0" >
                        <a id="" class="btn btn-invert btn-small btn-vertical m-0 play-btn" >
                            <span>play</span>
                        </a> 
                    </div>
                </div>
            </div>
            <div data-id="${quizID}" id ="" class="more-info-wrapper scaleY background-ghost-white columns is-mobile m-0 has-text-centered p-5 is-multiline is-flex is-flex-direction-column is-justify-content-start" >
                <div class="is-flex is-justify-content-start column is-12-mobile is-12 p-0" >
                    <a id="" class="control-btn more-info-back-btn" >
                        <span class="text-smoky-black">go back</span>
                    </a>
                </div>
                <div class="column is-12-mobile is-12 p-0 my-5" >
                    <div class="more-info-quiz-info columns is-mobile m-0 is-vcentered is-multiline is-flex is-flex-direction-column is-justify-content-center" >
                        <div class="column is-12-mobile is-12 p-0 my-1" >
                            <p class="text-smoky-black" > Name: ${quizName}</p>
                        </div>
                        <div class="column is-12-mobile is-12 p-0 my-1">
                            <p class="text-smoky-black" > Category: ${quizCategory}</p>
                        </div>
                        <div class="column is-12-mobile is-12 p-0 my-1">
                            <p class="text-smoky-black" > Questions: ${quizQuestions}</p>
                        </div>
                        <div class="column is-12-mobile is-12 p-0 my-1">
                            <p class="text-smoky-black" > Answers: ${quizAnswers}</p>
                        </div>
                        <div class="column is-12-mobile is-12 p-0 my-1">
                            <p class="text-smoky-black" > Created at: ${quizCreatedAt}</p>
                        </div>
                        <div class="column is-12-mobile is-12 p-0 my-1">
                            <p class="text-smoky-black" > Attempted on: ${quizUpdateddAt}</p>
                        </div>
                        <div class="column is-12-mobile is-12 p-0 my-1">
                            <p class="text-smoky-black" > Recent Score: ${quizScore}%</p>
                        </div>
                        <div class="column is-12-mobile is-12 p-0 my-1">
                            <a id="" class="btn m-0">
                                <span>play</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        };
        if (page === 1) {
            UISelectors.quizWrapper.lastElementChild.firstElementChild.classList.add('disabled');
        } else {
            UISelectors.quizWrapper.lastElementChild.firstElementChild.classList.remove('disabled');
        }
        if (page === pages) {
            UISelectors.quizWrapper.lastElementChild.lastElementChild.classList.add('disabled');
        } else {
            UISelectors.quizWrapper.lastElementChild.lastElementChild.classList.remove('disabled');
        }
        UISelectors.quizWrapper.firstElementChild.innerHTML = html;
        UISelectors.quizWrapper.setAttribute('data-page', page);
        // let lastChild = UISelectors.quizWrapper.lastElementChild;
        // UISelectors.quizWrapper.appendChild(lastChild);
    };
    const createQuizResults = function() {
        const quizResults = createDiv('column is-12-mobile is-12 p-0 hidden-options', 'quiz-results');
        quizResults.innerHTML = `
            <div class="is-flex is-justify-content-center is-align-items-center">
                <p class="quiz-view-questions">Your result</p>
            </div>
            <div class="is-flex is-justify-content-center is-align-items-center my-2">
                <p id="quiz-score" class="has-text-centered p-2">
                </p>
            </div>
            <div class="is-flex is-justify-content-space-between is-align-items-center">
                <ul id="quiz-feedback"></ul>
            </div>
        `;
        return quizResults;
    };
    const removeElement = function(target) {
        target.remove();
    };
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
            if ((data[input].field !== 'db') && (data[input].field !== 'session')) {
                if (checkField(data[input])) {
                    err_count ++;
                    inputInvalid(targetForm[data[input].field]);
                    if (target !== 'login') {
                        hintFeedback(data[input].field, false);
                    }
                }
            }
        });
        err_count += checkField(data.db);
        return err_count;
    };
    const checkIfEmpty = function() {
        if (UISelectors.loginForm.email.value !== '' && patterns.emailPattern.test(UISelectors.loginForm.email.value) && UISelectors.loginForm.password.value !== '') {
            UISelectors.loginForm["login-submit"].classList.remove('disabled');
        } else {
            UISelectors.loginForm["login-submit"].classList.add('disabled');
        }
    };
    // 
    // 
    const loadStartScreen = function() {
        const divLogo = createDiv('column is-12-mobile is-12 pt-0 mb-3');
        const divBtns = createDiv('column is-12-mobile is-12 mt-5 px-0 pb-5 is-relative buttons-wrapper');
        UISelectors.mainSectionWrapper.firstElementChild.appendChild(divLogo);
        UISelectors.mainSectionWrapper.firstElementChild.appendChild(divBtns);
        // Load main logo
        UISelectors.mainSectionWrapper.firstElementChild.firstElementChild.innerHTML = showMainLogo();
        // Load start btn
        UISelectors.mainSectionWrapper.firstElementChild.lastElementChild.appendChild(createStartBtn());
        // Adjust UI display
        document.querySelector('#front-page-footer').classList.remove('hide');
        UISelectors.mainSectionWrapper.classList.remove('welcome-wrapper');
        UISelectors.mainSectionWrapper.classList.add('background-space-cadet-gradient');
        UISelectors.mainSectionWrapper.classList.remove('background-copper-red-gradient');
    };
    const createBrowseLogo = function() {
        return `
        <div class="box-floating" id="welcome-logo-browse">
            <div class="db-disc-top">
                <img src="imgs/logo-browse.png" alt="browse logo">
            </div>
            <div class="db-disc-middle">
                <img src="imgs/logo-browse.png" alt="browse logo">
            </div>
            <div class="db-disc-bottom">
                <img src="imgs/logo-browse.png" alt="browse logo">
            </div>
        </div>
        `;
    };
    const createCreateQuizLogo = function() {
        return `
        <div class="box-floating" id="welcome-logo-new-quiz">
            <div class="new-quiz">
                <img src="imgs/logo-create-quiz.png" alt="">
            </div>
        </div>
        `;
    };
    const loadLoggedInScreen = function() {
        const divBrowse = createDiv('column is-12-mobile is-12 py-0 mt-5');
        divBrowse.innerHTML = createBrowseLogo();
        const divBrowseBtn = createDiv('column is-12-mobile is-12 px-0 pt-0 pb-5 is-relative');
        const browseWrapper = createDiv('button-wrapper-primary');
        const aBrowse = createA('btn btn-invert', 'browse-btn');
        const spanBrowse = createSpan();
        spanBrowse.textContent = 'browse';
        aBrowse.appendChild(spanBrowse);
        browseWrapper.appendChild(aBrowse);
        divBrowseBtn.appendChild(browseWrapper);
        const divCreateQuiz = createDiv('column is-12-mobile is-12 py-0');
        divCreateQuiz.innerHTML = createCreateQuizLogo();
        const divCreateQuizBtn = createDiv('column is-12-mobile is-12 px-0 pt-0 pb-5 is-relative');
        const createQuizWrapper = createDiv('button-wrapper-primary');
        const aCreateQuiz = createA('btn btn-invert', 'create-quiz-btn');
        const spanCreateQuiz = createSpan();
        spanCreateQuiz.textContent = 'create quiz';
        aCreateQuiz.appendChild(spanCreateQuiz);
        createQuizWrapper.appendChild(aCreateQuiz);
        divCreateQuizBtn.appendChild(createQuizWrapper);
        UISelectors.mainSectionWrapper.firstElementChild.innerHTML = '';
        UISelectors.mainSectionWrapper.firstElementChild.appendChild(divBrowse);
        UISelectors.mainSectionWrapper.firstElementChild.appendChild(divBrowseBtn);
        UISelectors.mainSectionWrapper.firstElementChild.appendChild(divCreateQuiz);
        UISelectors.mainSectionWrapper.firstElementChild.appendChild(divCreateQuizBtn);
        UISelectors.mainSectionWrapper.classList.add('welcome-wrapper');
        UISelectors.mainSectionWrapper.classList.add('background-copper-red-gradient');
        UISelectors.mainSectionWrapper.classList.remove('background-space-cadet-gradient');
    };
    // 
    // 
    // Db controller
    const fetchQuizzes = async function() {
        return await (
            fetch("fetchQuizzes.php", {
                method: "GET",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
        }));
    };
    // 
    // 
    const shuffleArray = function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[j], array[i]] = [array[i], array[j]];
        }
    };
    const setAttributes = function(el, attrs) {
        for(var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }
    const createSubmitBtn = function() {
        let btn = document.createElement('button');
        setAttributes(btn, {"id": "quiz-form-submit", "class": "control-btn", "type": "submit", "form": "quiz-form", "style": "display: none; background-color: transparent;"});
        const span = createSpan('text-smoky-black');
        span.textContent = 'submit';
        btn.appendChild(span);
        return btn;
    };
    return {
        init: function() {
            const mainWrapper = UISelectors.mainSectionWrapper;
            // Show loader
            createLoader(UISelectors.mainSectionWrapper);
            if (`#${mainWrapper.firstElementChild.id}` === UISelectors.startPage) {
                // Fetch demo quizzes
                fetchQuizzes()
                .then(response => {
                    if (!response.ok) { throw new Error('Network problem. Please try again later'); }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    global.quizzes = data.data.fields;
                    setTimeout(() => {
                        // Hide loader
                        removeLoader();
                        setTimeout(() => {
                            loadStartScreen();
                        }, 600);
                    }, 1000);
                })
                .catch(error => {
                    console.log(error);
                });
            } else {
                // Fetch user's quizzes
                fetchQuizzes()
                .then(response => {
                    if (!response.ok) { throw new Error('Network problem. Please try again later'); }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    global.quizzes = data.data.fields;
                    setTimeout(() => {
                        // Hide loader
                        removeLoader();
                        setTimeout(() => {
                            loadLoggedInScreen();
                            setTimeout(() => {
                                document.querySelector('#front-page-footer').classList.add('hidden-options');
                            }, 150);
                        }, 600);
                    }, 1000);
                })
                .catch(error => {
                    console.log(error);
                });
            }
        },
        UISelectors,
        global,
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
        handleFormData,
        checkIfEmpty,
        loadLoggedInScreen,
        createBrowseOptions,
        createLoader,
        removeLoader,
        renderQuizzes,
        createQuizResults,
        createQuizNavigation,
        createQuizQuitConfirmation,
        createDiv,
        removeElement,
        shuffleArray,
        createSubmitBtn,
        createBtn,
        fetchQuizzes
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
            if (grab(selector.formRegisterSubmitFeedback) !== null) {
                grab(selector.formRegisterSubmitFeedback).remove();
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
        grab(selector.feedbackBackBtn).parentElement.parentElement.classList.toggle('hidden-options');
    }
    // submitFeedbackError clicked
    if (e.target.classList.contains(selector.submitFeedbackError.substring(1)) || e.target.parentElement.classList.contains(selector.submitFeedbackError.substring(1)) || e.target.parentElement.parentElement.classList.contains(selector.submitFeedbackError.substring(1))) {
        if (grab(selector.submitFeedbackError).parentElement.parentElement.id.includes('login')) {
            selector.loginFeedback.classList.toggle('hidden-options');
        } else {
            selector.registerFeedback.classList.toggle('hidden-options');
        }
    }
    // LoginBtn clicked
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.loginBtn) || (`#${e.target.id}` === selector.loginBtn)) {
        selector.mainSectionWrapper.firstElementChild.classList.add('shrink');
        setTimeout(() => {
            // Render UI elements
            selector.loginFeedback.before(UICtrl.goBackBtn('login-back-btn'));
            selector.loginFeedback.after(UICtrl.createHeader('login', 'main-login-header'));
            // Adjust UI display
            selector.mainSectionWrapper.classList.toggle('hidden-options');
            selector.loginWrapper.classList.toggle('hidden-options');
            // remove tabindex="-1"
            UICtrl.removeTabindex('login-tabindex');
            // set focus on first input
            setTimeout(() => {
                selector.loginForm.email.focus();
            }, 500);
        }, 600);
    }
    // LoginBackBtn clicked
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.loginBackBtn) || (`#${e.target.id}` === selector.loginBackBtn)) {
        selector.mainSectionWrapper.classList.toggle('hidden-options');
        selector.loginWrapper.classList.toggle('hidden-options');
        // 
        setTimeout(() => {
            selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
            // set tabindex="-1"
            UICtrl.addTabindex('register-tabindex');
            // reset form
            UICtrl.resetForm('login');
            // Remove rendered UI components
            grab(selector.loginBackBtn).parentElement.remove();
            grab('.main-login-header').remove();
            if (grab(selector.formLoginSubmitFeedback) !== null) {
                grab(selector.formLoginSubmitFeedback).remove();
            }
            selector.loginFeedback.innerHTML = '';
        }, 600);
    }
    // Burger clicked
    if ((e.target.tagName === 'SPAN' && e.target.id === selector.burger.id) || (e.target.tagName === 'svg' && e.target.parentElement.id === selector.burger.id) || (e.target.tagName === 'path' && e.target.parentElement.parentElement.id === selector.burger.id)) {
        selector.burger.classList.toggle('hide');
        selector.times.classList.toggle('hide');
        selector.options.classList.toggle('hidden-options');
    }
    // Times clicked
    if ((e.target.tagName === 'SPAN' && e.target.id === selector.times.id) || (e.target.tagName === 'svg' && e.target.parentElement.id === selector.times.id) || (e.target.tagName === 'path' && e.target.parentElement.parentElement.id === selector.times.id)) {
        selector.burger.classList.toggle('hide');
        selector.times.classList.toggle('hide');
        selector.options.classList.toggle('hidden-options');
    }
    // DemoBtn clicked
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.demoBtn) || (`#${e.target.id}` === selector.demoBtn)) {
        // Render UI display
        selector.filterWrapper.before(UICtrl.createBrowseOptions());
        // Include these when filter btn is clicked
        // selector.filterForm.before(UICtrl.goBackBtn('filter-back-btn'));
        // selector.filterForm.before(UICtrl.createHeader('filter', 'main-filter-header'));
        // Include these when search btn is clicked
        // selector.searchForm.before(UICtrl.goBackBtn('search-back-btn'));
        // selector.searchForm.before(UICtrl.createHeader('search', 'main-search-header'));
        // Hide main section
        selector.mainSectionWrapper.firstElementChild.classList.add('shrink');
        // Render data using JS
        UICtrl.renderQuizzes(1, UICtrl.global.quizzes);
        setTimeout(() => {
            selector.mainSectionWrapper.classList.toggle('hidden-options');
            // Show browse section
            selector.browseWrapper.classList.toggle('hidden-options');
            setTimeout(() => {
                document.querySelector('#front-page-footer').classList.add('hidden-options');
            }, 500);
        }, 500);
        // Demo mode is active
        grab('body').setAttribute('data-id', 'demo-mode');
    }
    // BrowseBackBtn clicked
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.browseBackBtn) || (`#${e.target.id}` === selector.browseBackBtn)) {
        const dataId = grab('body').getAttribute('data-id');
        if (dataId === 'demo-mode') {
            // Hide browse section
            document.querySelector('#front-page-footer').classList.remove('hidden-options');
            setTimeout(() => {
                selector.browseWrapper.classList.toggle('hidden-options');
                // Show main section
                selector.mainSectionWrapper.classList.toggle('hidden-options');
                setTimeout(() => {
                    selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                    // Reset mode
                    grab('body').setAttribute('data-id', '');
                    // Remove UI components
                    selector.browseWrapper.firstElementChild.remove();
                }, 250);
            }, 500);
        } else {

        }
    }
    // More info btn clicked
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.classList.contains(selector.moreInfoBtn.slice(1))) || (e.target.classList.contains(selector.moreInfoBtn.slice(1)) && e.target.tagName === 'A')) {
        // Get quiz id
        let quizID = '';
        if (e.target.tagName === 'SPAN') {
            quizID = e.target.parentElement.parentElement.parentElement.parentElement.id;
        } else {
            quizID = e.target.parentElement.parentElement.parentElement.id;
        }
        // console.log(quizID);
        // Show appropriate div with more info
        const divMoreInfo = document.querySelector(`div[data-id="${quizID}"]`);
        divMoreInfo.classList.remove('scaleY');
    }
    // Back btn on more info wrapper clicked
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.classList.contains(selector.moreInfoBackBtn.slice(1))) || (e.target.classList.contains(selector.moreInfoBackBtn.slice(1)) && e.target.tagName === 'A')) {
        // Get quiz id
        let quizID = '';
        if (e.target.tagName === 'SPAN') {
            quizID = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
        } else {
            quizID = e.target.parentElement.parentElement.getAttribute('data-id');
        }
        // console.log(quizID);
        // Hide appropriate div with more info
        const divMoreInfo = document.querySelector(`div[data-id="${quizID}"]`);
        divMoreInfo.classList.add('scaleY');
    }
    // Play btn clicked
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.classList.contains(selector.playBtn.slice(1))) || (e.target.classList.contains(selector.playBtn.slice(1)) && e.target.tagName === 'A')) {
        // Show loader
        selector.browseWrapper.appendChild(UICtrl.createDiv(selector.overlay.slice(1)));
        UICtrl.createLoader(grab(selector.overlay));
        // Get quiz id
        if (e.target.tagName === 'SPAN') {
            UICtrl.global.quizID = e.target.parentElement.parentElement.parentElement.parentElement.id;
        } else {
            UICtrl.global.quizID = e.target.parentElement.parentElement.parentElement.id;
        }
        // not sure if need global quizID
        console.log(UICtrl.global.quizID);
        // Render question
        // Fetch quiz first
        let trueQuizId = '';
        UICtrl.global.quizzes.some(quiz => {
            if (quiz.quiz_id === UICtrl.global.quizID) {
                trueQuizId = quiz.quiz_name;
                return true;
            }
        });
        const data = {
            ID: trueQuizId
        };
        fetch("fetchQsAs.php", {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setTimeout(() => {
                // Adjust UI display
                UICtrl.removeLoader();
                UICtrl.removeElement(grab(selector.overlay));
                selector.quizViewWrapper.classList.toggle('hidden-options');
                // Render UI
                UICtrl.createQuizNavigation();
                UICtrl.createQuizQuitConfirmation();
                // Assign quizID to hidden input value
                selector.quizForm["quiz-id"].value = UICtrl.global.quizID;
                // questions global?
                let questions = data.questions.fields;
                // Insert question
                console.log(questions);
                selector.quizQuestion.innerHTML = `
                <p class="quiz-view-header-text">
                    ${questions[UICtrl.global.index]["question"]}
                </p>
                `;
                // Insert answers
                const questionID = questions[UICtrl.global.index]["question_ID"];
                // answers global?
                let answers = data.answers.fields;
                let currAnswers = [];
                let correctAnswers = [];
                answers.forEach(answer => {
                    if (answer.question_ID === questionID) {
                        currAnswers.push({
                            answer: answer.answer,
                            a_ID: answer.answer_ID,
                            q_ID: answer.question_ID,
                            is_correct: answer.is_correct === "1"
                        });
                    }
                });
                UICtrl.global.index++;
                console.log(currAnswers);
                UICtrl.shuffleArray(currAnswers);
                let aHtml = '';
                currAnswers.forEach((currAnswer, index) => {
                    if (currAnswer.is_correct) {
                        correctAnswers.push(index);
                    }
                    aHtml += `
                    <div class="quiz-view-answer-text has-text-centered p-2 m-0">
                        <div class="is-relative">
                            <input type="radio" name="${currAnswer.q_ID}" value="${index}" id="${currAnswer.a_ID}" class="btn m-0 p-0">
                            <label for="${currAnswer.a_ID}">
                                ${currAnswer.answer}
                            </label>
                        </div>
                    </div>
                    `;
                });
                let div = document.createElement('div');
                div.innerHTML = aHtml;
                selector.quizForm.lastElementChild.appendChild(div);
                console.log(correctAnswers);
                grab(selector.qNumber).lastElementChild.textContent = questions.length;
                // Set global vars
                UICtrl.global.questions = questions;
                UICtrl.global.answers = answers;
                UICtrl.global.correctAnswers = correctAnswers;
            }, 1000);
        })
    }
    // Next btn clicked
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === selector.nextBtn.slice(1)) || (e.target.id === selector.nextBtn.slice(1) && e.target.tagName === 'A')) {
        if ((UICtrl.global.index + 1) === UICtrl.global.questions.length) {
            grab(selector.nextBtn).after(UICtrl.createSubmitBtn());
            grab(selector.nextBtn).remove();
            grab(selector.quizSubmitBtn).style.display = 'flex';
        }
        // Check if radio button is checked
        console.log('Index: ' + UICtrl.global.index);
        const currName = UICtrl.global.questions[UICtrl.global.index - 1].question_ID;
        console.log('CurrName: ' + currName);
        const target = [...selector.quizForm[currName]].filter(r => r.checked)[0];
        console.log(target);
        if (target !== undefined) {
            UICtrl.global.value.push(target.value);
            // console.log('Value: ' + UICtrl.global.value);
            // Update question number
            grab(selector.qNumber).firstElementChild.textContent = (UICtrl.global.index + 1);
            // 
            selector.quizForm.lastElementChild.lastElementChild.classList.add('hidden-options');
            // Insert question
            selector.quizQuestion.innerHTML = `
            <p class="quiz-view-header-text">
                ${UICtrl.global.questions[UICtrl.global.index]["question"]}
            </p>
            `;
            // Insert answers
            const questionID = UICtrl.global.questions[UICtrl.global.index]["question_ID"];
            let currAnswers = [];
            UICtrl.global.answers.forEach(answer => {
                if (answer.question_ID === questionID) {
                    currAnswers.push({
                        answer: answer.answer,
                        a_ID: answer.answer_ID,
                        q_ID: answer.question_ID,
                        is_correct: answer.is_correct === "1"
                    });
                }
            });
            UICtrl.global.index++;
            UICtrl.shuffleArray(currAnswers);
            let aHtml = '';
            let div = document.createElement('div');
            selector.quizForm.lastElementChild.appendChild(div);
            currAnswers.forEach((currAnswer, index) => {
                if (currAnswer.is_correct) {
                    UICtrl.global.correctAnswers.push(index);
                }
                aHtml += `
                <div class="quiz-view-answer-text has-text-centered p-2 m-0">
                    <div class="is-relative">
                        <input type="radio" name="${currAnswer.q_ID}" value="${index}" id="${currAnswer.a_ID}" class="btn m-0 p-0">
                        <label for="${currAnswer.a_ID}">
                            ${currAnswer.answer}
                        </label>
                    </div>
                </div>
                `;
            });
            selector.quizForm.lastElementChild.lastElementChild.innerHTML = aHtml;
            // console.log(correctAnswers);
        } else {
            // show message
        }
    }
    // Quit btn clicked
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === selector.quitBtn.slice(1)) || (e.target.id === selector.quitBtn.slice(1) && e.target.tagName === 'A')) {
        // Adjust UI display
        grab(selector.quitConfirmationWrapper).classList.toggle('hidden-options');
    }
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === selector.quitYes.slice(1)) || (e.target.id === selector.quitYes.slice(1) && e.target.tagName === 'A')) {
        // Reset global vars
        UICtrl.global.index = 0,
        UICtrl.global.questions = [],
        UICtrl.global.answers = [],
        UICtrl.global.correctAnswers = [],
        UICtrl.global.value = [],
        // Adjust UI display
        grab(selector.quitConfirmationWrapper).classList.toggle('hidden-options');
        setTimeout(() => {
            selector.quizViewWrapper.classList.toggle('hidden-options');
            setTimeout(() => {
                if (grab(selector.quizResults) !== null) {
                    grab(selector.quizResults).classList.add('hidden-options');
                }
                selector.quizContent.classList.remove('hidden-options');
                // Remove UI components
                grab(selector.quitBtn).parentElement.remove();
                grab(selector.quitConfirmationWrapper).remove();
                grab(selector.quizResults).remove();
                selector.quizForm.lastElementChild.innerHTML = '';
                selector.quizContent.firstElementChild.firstElementChild.innerHTML = '';
            }, 500);
        }, 500);
    }
    // RetryBtn clicked
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === selector.quizRetryBtn.slice(1)) || (e.target.id === selector.quizRetryBtn.slice(1) && e.target.tagName === 'A')) {
        // Show loader
        selector.browseWrapper.appendChild(UICtrl.createDiv(selector.overlay.slice(1)));
        UICtrl.createLoader(grab(selector.overlay));
        // Reset global vars
        UICtrl.global.index = 0,
        UICtrl.global.correctAnswers = [],
        UICtrl.global.value = [],
        // Adjust UI display
        setTimeout(() => {
            // Adjust UI display
            UICtrl.removeLoader();
            UICtrl.removeElement(grab(selector.overlay));
            grab(selector.quizResults).classList.add('hidden-options');
            selector.quizContent.classList.remove('hidden-options');
            selector.quizForm.lastElementChild.innerHTML = '';
            selector.quizContent.firstElementChild.firstElementChild.firstElementChild.innerHTML = '';
            grab(selector.qNumber).style.opacity = 1;
            grab(selector.qNumber).firstElementChild.textContent = 1;
            grab(selector.quizRetryBtn).before(UICtrl.createBtn('control-btn', 'quiz-next-btn', 'next'));
            grab(selector.quizRetryBtn).remove();
            grab(selector.nextBtn).style.display = 'flex';
            // Output question
            selector.quizQuestion.innerHTML = `
            <p class="quiz-view-header-text">
                ${UICtrl.global.questions[UICtrl.global.index]["question"]}
            </p>
            `;
            // Insert answers
            const questionID = UICtrl.global.questions[UICtrl.global.index]["question_ID"];
            let currAnswers = [];
            UICtrl.global.answers.forEach(answer => {
                if (answer.question_ID === questionID) {
                    currAnswers.push({
                        answer: answer.answer,
                        a_ID: answer.answer_ID,
                        q_ID: answer.question_ID,
                        is_correct: answer.is_correct === "1"
                    });
                }
            });
            UICtrl.global.index++;
            UICtrl.shuffleArray(currAnswers);
            let aHtml = '';
            // Reset corrent answer
            currAnswers.forEach((currAnswer, index) => {
                if (currAnswer.is_correct) {
                    UICtrl.global.correctAnswers.push(index);
                }
                aHtml += `
                <div class="quiz-view-answer-text has-text-centered p-2 m-0">
                    <div class="is-relative">
                        <input type="radio" name="${currAnswer.q_ID}" value="${index}" id="${currAnswer.a_ID}" class="btn m-0 p-0">
                        <label for="${currAnswer.a_ID}">
                            ${currAnswer.answer}
                        </label>
                    </div>
                </div>
                `;
            });
            let div = document.createElement('div');
            div.innerHTML = aHtml;
            selector.quizForm.lastElementChild.appendChild(div);
            grab(selector.qNumber).lastElementChild.textContent = UICtrl.global.questions.length;
        }, 1000);
    }
    // // Browse quiz next
    // if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === 'browse-quizzes-next') || (e.target.id === 'browse-quizzes-next' && e.target.tagName === 'A')) {
    //     console.log('next clicked');
    //     const page = parseInt(quizWrapper.getAttribute('data-page'));
    //     console.log(page);
    //     renderQuizzes(page + 1);
    // }
    // // Browse quiz previous
    // if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === 'browse-quizzes-previous') || (e.target.id === 'browse-quizzes-previous' && e.target.tagName === 'A')) {
    //     console.log('previous clicked');
    //     const page = parseInt(quizWrapper.getAttribute('data-page'));
    //     console.log(page);
    //     renderQuizzes(page - 1);
    // }
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
// Check Email
selector.loginForm.email.addEventListener('keyup', () => {
    UICtrl.checkIfEmpty();
});
selector.loginForm.email.addEventListener('blur', () => {
    UICtrl.checkIfEmpty();
});
// Check Password
selector.loginForm.password.addEventListener('keyup', () => {
    UICtrl.checkIfEmpty();
});
selector.loginForm.password.addEventListener('blur', () => {
    UICtrl.checkIfEmpty();
});
// Submit events
// submit register form
selector.registerForm.addEventListener('submit', e => {
    // Prevent the default form submit
    e.preventDefault();
    // Add formRegisterSubmitFeedback
    if (grab(selector.formRegisterSubmitFeedback) === null) {
        UICtrl.createSubmitFeedback('register');
    }
    const submitFeedback = grab(selector.formRegisterSubmitFeedback);
    // Add data feedback
    selector.registerFeedback.innerHTML = '';
    UICtrl.createDataFeedback(['username', 'email', 'password', 'confirm-password', 'db'], 'register');
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
                        grab(selector.registrationConfirmation).classList.remove('hidden-options');
                        // Clear form
                        UICtrl.resetForm('register');
                        setTimeout(() => {
                            selector.mainSectionWrapper.classList.toggle('hidden-options');
                            selector.registerWrapper.classList.toggle('hidden-options');
                            // set tabindex="-1"
                            UICtrl.addTabindex('register-tabindex');
                            // Render UI elements
                            selector.loginFeedback.before(UICtrl.goBackBtn('login-back-btn'));
                            selector.loginFeedback.after(UICtrl.createHeader('login', 'main-login-header'));
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
                                submitFeedback.remove();
                                grab(selector.inputHint).parentElement.remove();
                                selector.hintWrapper.innerHTML = '';
                                selector.registerFeedback.innerHTML = '';
                                grab(selector.registrationConfirmation).remove();
                            }, 600);
                        }, 1000);
                    }, 500);
                }, 1000);
            }
        })
        .catch(error => {
            console.log(error);
            // Handle when rejected (only network exceptions)
            // For network show big red screen saying 'network problem. check your internet connection'
        });        
    }
});
// submit login form
selector.loginForm.addEventListener('submit', e => {
    // Prevent the default form submit
    e.preventDefault();
    // Add formLoginSubmitFeedback
    if (grab(selector.formLoginSubmitFeedback) === null) {
        UICtrl.createSubmitFeedback('login');
    }
    const submitFeedback = grab(selector.formLoginSubmitFeedback);
    // Add data feedback
    selector.loginFeedback.innerHTML = '';
    UICtrl.createDataFeedback(['email', 'password', 'db'], 'login');
    // Check if there is anything in inputs
    if (selector.loginForm.email.value !== '' && UICtrl.patterns.emailPattern.test(selector.loginForm.email.value) && selector.loginForm.password.value !== '' && !selector.loginForm.email.hasAttribute('readonly') && !selector.loginForm.password.hasAttribute('readonly')) {
        // Adjust UI
        if (submitFeedback.classList.contains('hide')) {
            submitFeedback.classList.remove('hide');
            submitFeedback.lastElementChild.classList.remove('hide');
        } else {
            submitFeedback.firstElementChild.classList.add('hide');
            submitFeedback.lastElementChild.classList.remove('hide');
        } 
        // Lock input fields
        UICtrl.lockInput('login');
        // Disable submit btn
        if (!selector.loginForm["login-submit"].classList.contains('disabled')) {
            selector.loginForm["login-submit"].classList.add('disabled');
        }
        // 
        let err_count = 0;
        // Post data using the Fetch API
        fetch(selector.loginForm.action, {
            method: selector.loginForm.method,
            body: new FormData(selector.loginForm)
        })
        .then(res => {
            if (!res.ok) { throw new Error('Network problem.'); }
            return res.json();
        })
        .then(docs => {
            console.log(docs);
            // First check if user is logged in, if so redirect to welcome page !!!
            if (docs.session.loggedIn) {
                // Do the redirect here
            } else {
                // Handle input data
                err_count = UICtrl.handleFormData(docs, 'login');
                if (err_count) { // errors found
                    setTimeout(() => {
                        submitFeedback.lastElementChild.classList.add('hide');
                        submitFeedback.firstElementChild.classList.remove('hide');
                        // Unlock fields
                        UICtrl.unlockInput('login');
                        // Reset input class
                        const inputElements = document.querySelectorAll('#login-form input')
                        Array.from(inputElements).forEach(input => {
                            input.classList.remove('input-valid');
                            input.classList.remove('input-invalid');
                            if (!input.parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
                                input.parentElement.lastElementChild.firstElementChild.classList.add('hide');
                            }
                            if (!input.parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
                                input.parentElement.lastElementChild.lastElementChild.classList.add('hide');
                            }
                        });
                    }, 500);
                } else { // no errors
                    // Add confirmation div
                    UICtrl.createFormConfirmation('login', 'logged in');
                    // Hide submit feedback div
                    submitFeedback.classList.add('hide');
                    submitFeedback.firstElementChild.classList.add('hide');
                     // Show confirmation
                    grab(selector.loginConfirmation).classList.remove('hidden-options');
                    // Clear form
                    UICtrl.resetForm('login');
                    // Fetch user's quizzes
                    return UICtrl.fetchQuizzes();
                }
            }
        })
        .then(response => {
            if (!response.ok) { throw new Error('Network problem. Please try again later'); }
            // Show loader
            selector.loginWrapper.appendChild(UICtrl.createDiv(selector.overlay.slice(1)));
            UICtrl.createLoader(grab(selector.overlay));
            return response.json();
        })
        .then(data => {
            console.log(data);
            UICtrl.global.quizzes = data.data.fields;
            // Unlock fields
            UICtrl.unlockInput('login');
            setTimeout(() => {
                // Hide loader
                UICtrl.removeLoader();
                UICtrl.removeElement(grab(selector.overlay));
                // Adjust UI display
                selector.mainSectionWrapper.classList.toggle('hidden-options');
                selector.loginWrapper.classList.toggle('hidden-options');
                // set tabindex="-1"
                UICtrl.addTabindex('login-tabindex');
                // Show welcome screen
                selector.mainSectionWrapper.classList.toggle('hidden-options');
                // 
                setTimeout(() => {
                    // Rerender UI
                    // CONSIDER SHRINKING CONTENT AT THE BEGINNING AND THEN REMOVING THAT!!!
                    UICtrl.loadLoggedInScreen();
                    // rerender options too !!!
                    selector.mainSectionWrapper.classList.toggle('hidden-options');
                    selector.mainSectionWrapper.firstElementChild.classList.toggle('shrink');
                    setTimeout(() => {
                        // Reset register UI
                        grab(selector.loginBackBtn).parentElement.remove();
                        grab('.main-login-header').remove();
                        submitFeedback.remove();
                        selector.loginFeedback.innerHTML = '';
                        grab(selector.loginConfirmation).remove();
                        document.querySelector('#front-page-footer').classList.add('hidden-options');
                    }, 500);
                }, 350);
            }, 1000);
        })
        .catch(error => {
            // here you can handle also error from php
            // they come in a js form: JSON.parse blah blah
            console.log(error);
            // Handle when rejected (only network exceptions)
        });
    }
});
selector.quizForm.addEventListener('submit', e => {
    // Prevent default
    e.preventDefault();
    // 
    const currName = UICtrl.global.questions[UICtrl.global.index - 1].question_ID;
    console.log('CurrName: ' + currName);
    const target = [...selector.quizForm[currName]].filter(r => r.checked)[0];
    console.log(target);
    if (target !== undefined) {
        console.log('quiz submitted');
        // Show loader
        selector.browseWrapper.appendChild(UICtrl.createDiv(selector.overlay.slice(1)));
        UICtrl.createLoader(grab(selector.overlay));
        selector.quizContent.classList.toggle('hidden-options');
        grab(selector.qNumber).style.opacity = 0;
        // Render retry btn
        grab(selector.quizSubmitBtn).after(UICtrl.createBtn('control-btn', 'quiz-retry-btn', 'retry'));
        grab(selector.quizSubmitBtn).remove();
        grab(selector.quizRetryBtn).style.display = 'flex';
        let score = 0;
        // Adjust UI & interact with db
        // Output quiz feedback
        let uHtml = '';
        UICtrl.global.questions.forEach((question, index) => {
            // userAnswers.push(quizForm[question.question_ID].value);
            if (selector.quizForm[question.question_ID].value == UICtrl.global.correctAnswers[index]) {
                score++;
                uHtml += `
                <li class="is-flex is-justify-content-space-between is-align-items-center quiz-li-feedback input-valid">
                    <p class="">
                        ${question.question}
                    </p>
                    <span class="icon-validation" id="">
                        <i class="fas fa-check icon-valid"></i>
                    </span>
                </li>
                `;
            } else {
                uHtml += `
                <li class="is-flex is-justify-content-space-between is-align-items-center quiz-li-feedback input-invalid">
                    <p class="">
                        ${question.question}
                    </p>
                    <span class="icon-validation" id="">
                        <i class="fas fa-times icon-invalid"></i>
                    </span>    
                </li>
                `;
            }
        });
        console.log(UICtrl.global.quizID);
        const finalScore = (score / UICtrl.global.questions.length) * 100;
        console.log(finalScore);
        const data = {
            finalScore,
            quizID: UICtrl.global.quizID
        };
        fetch(selector.quizForm.action, {
            method: selector.quizForm.method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network problem.');
            }
            return res.json();
        })
        .then(docs1 => {
            console.log(docs1);
            setTimeout(() => {
                UICtrl.removeLoader();
                UICtrl.removeElement(grab(selector.overlay));
                selector.quizContent.after(UICtrl.createQuizResults());
                grab(selector.quizResults).classList.toggle('hidden-options');
                // Output feedback & score
                grab(selector.quizScore).textContent = finalScore + '%';
                grab(selector.quizFeedback).innerHTML = uHtml;
            }, 1000);
        })
        .catch(error => console.log(error));
    } else {
        // show message
    }
});
// export default UICtrl;