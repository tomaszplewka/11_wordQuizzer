// 
// 
// 
const UICtrl = (function() {
    // Selectors
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
        registerForm: document.querySelector('#register-form'),
        registerBackBtn: '#register-back-btn',
        formRegisterSubmitFeedback: '#register-submit-feedback',
        formLoginSubmitFeedback: '#login-submit-feedback',
        formCreateQuizSubmitFeedback: '#create-quiz-submit-feedback',
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
        createQuizFeedback: document.querySelector('#create-quiz-feedback-wrapper'),
        loginBackBtn: '#login-back-btn',
        burger: document.querySelector('#burger'),
        times: document.querySelector('#times'),
        options: document.querySelector('#options-wrapper'),
        browseWrapper: document.querySelector('#browse-wrapper'),
        filterWrapper: document.querySelector('#filter-quiz-wrapper'),
        filterForm: document.querySelector('#filter-form'),
        searchWrapper: document.querySelector('#search-quiz-wrapper'),
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
        errorOverlay: '.error-overlay',
        quizQuestion: document.querySelector('#question-text'),
        quitBtn: '#quiz-quit-btn',
        nextBtn: '#quiz-next-btn',
        qNumber: '#quiz-which-question',
        quitConfirmationWrapper: '.quiz-quit-confirmation-wrapper',
        quitYes: '#quiz-quit-yes-btn',
        quizSubmitBtn: '#quiz-form-submit',
        quizRetryBtn: '#quiz-retry-btn',
        settingsOption: document.querySelector('#options-settings-btn'),
        logOutBtn: '#options-logout-btn',
        logOutConfirmation: '.logout-confirmation-wrapper',
        logOutForm: '#logout-form',
        browseBtn: '#browse-btn',
        createQuizBtn: '#create-quiz-btn',
        createQuizWrapper: document.querySelector('#create-quiz-wrapper'),
        createQuizBackBtn: '#create-quiz-back-btn',
        createQuizForm: document.querySelector('#create-quiz-form'),
        increment: '.increment',
        decrement: '.decrement',
        generateConfirmation: document.querySelector('#generate-confirmation'),
        filterBackBtn: '#filter-back-btn',
        searchBackBtn: '#search-back-btn',
        filterBtn: '#filter-btn',
        searchBtn: '#search-btn',
        browseNextQuizzes: document.querySelector('#browse-quizzes-next'),
        browsePreviousQuizzes: document.querySelector('#browse-quizzes-previous')
    };
    // Global vars
    const global = {
        quizzes: [],
        index: 0,
        questions: [],
        answers: [],
        correctAnswers: [],
        value: [],
        apiKey: "f8a63bbfd2mshc496f00dfd1b54cp168d18jsn749a1f9f4065"
    };
    // Basic building blocks
    const createA = function(aClass, aId = '') {
        let a = document.createElement('a');
        a.className = aClass;
        a.id = aId;
        return a;
    };
    const createSpan = function(spanClass = '', spanId = '', spanText = '') {
        let span = document.createElement('span');
        span.className = spanClass;
        span.id = spanId;
        span.textContent = spanText;
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
    const createBtn = function(aClass, aId, spanText, divClass = '') {
        const a = createA(aClass, aId);
        const span = createSpan('', '', spanText);
        a.appendChild(span);
        if (divClass) {
            const div = createDiv(divClass);
            div.appendChild(a);
            return div;
        }
        return a;
    };
    const createMainBtns = function() {
        const divMain = createBtn('btn', 'front-page-demo-btn', 'demo', 'button-wrapper-secondary');
        const login = createBtn('btn', 'front-page-login-btn', 'login');
        divMain.appendChild(login);
        let divRegister = createBtn('side-btn', 'front-page-register-btn', 'register', 'is-flex is-justify-content-end');
        divMain.appendChild(divRegister);
        return divMain;
    };
    const createBrowseOptions = function() {
        const divWrapper = createBtn('control-btn', 'browse-back-btn', 'go back', 'is-flex is-justify-content-space-between is-align-items-center');
        const divOptionsWrapper = createBtn('control-btn mx-1', 'filter-btn', '', 'is-flex is-justify-content-center');
        const iFilter = createIcon('filter');
        divOptionsWrapper.firstElementChild.firstElementChild.appendChild(iFilter);
        const aSearch = createBtn('control-btn mx-1', 'search-btn', '');
        const iSearch = createIcon('search');
        aSearch.firstElementChild.appendChild(iSearch);
        divOptionsWrapper.appendChild(aSearch);
        divWrapper.appendChild(divOptionsWrapper);
        return divWrapper;
    };
    const createQuizNavigation = function() {
        const divWrapper = createBtn('control-btn', 'quiz-quit-btn', 'quit', 'is-flex is-justify-content-space-between is-align-items-center column is-12-mobile is-12 p-0')
        const paraQuiz = createPara('quiz-view-questions', 'quiz-which-question');
        paraQuiz.innerHTML = `
        <span id="quiz-current-question" class="">1</span>
        /
        <span id="quiz-total-questions" class=""></span>
        `;
        divWrapper.appendChild(paraQuiz);
        const aNext = createBtn('control-btn', 'quiz-next-btn', 'next');
        divWrapper.appendChild(aNext);
        UISelectors.quizContent.before(divWrapper);
    };
    const createDataFeedback = function(inputArr, target) {
        const targetFeedback = document.querySelector(`#${target}-feedback-wrapper`);
        const goBack = createBtn('control-btn', 'feedback-back-btn', 'go back', 'is-flex is-justify-content-start');
        const feedbackHeader = createDiv('feedback-header');
        const h = createHeader('feedback');
        feedbackHeader.appendChild(h);
        const feedbackBody = createDiv('feedback-body mb-5');
        inputArr.forEach(input => {
            feedbackBody.innerHTML += errorWrapper(input);
            feedbackBody.innerHTML += okWrapper(input);
        });
        targetFeedback.appendChild(goBack);
        targetFeedback.appendChild(feedbackHeader);
        targetFeedback.appendChild(feedbackBody);
    };
    const createFormConfirmation = function(target, text = 'registered') {
        const targetForm = document.querySelector(`#${target}-form`);
        let div = createDiv(`${target}-confirmation is-flex is-justify-content-center is-align-items-center hidden-options background-mountain-meadow-gradient`, `${target}-confirmation`);
        let p = createPara(`${target}-cofirmation-text text-ghost-white p-2`);
        let html = `
        User <span class="${target}-cofirmation-user is-lowercase text-smoky-black"></span> has been ${text}.
        `;
        p.innerHTML = html;
        div.appendChild(p);
        targetForm.firstElementChild.appendChild(div);
    };
    const createLoader = function(target) {
        let div = createDiv('is-flex is-flex-direction-column is-justify-content-center is-align-items-center secondary-loader-wrapper');
        let loader = createDiv('loader');
        div.appendChild(loader);
        target.appendChild(div);
    };
    const removeLoader = function() {
        const loader = document.querySelector('.secondary-loader-wrapper');
        loader.classList.add('shrink');
        setTimeout(() => {
            loader.remove();
        }, 500);
    };
    const createOption = function(pText) {
        const li = document.createElement('li');
        if (pText.length) {
            const p = createPara('has-text-centered username-text-info mb-5 is-uppercase');
            p.textContent = pText;
            li.appendChild(p);
        } else {
            const a = createBtn('btn', 'options-logout-btn', 'log out');
            li.appendChild(a);
        }
        return li;
    };
    const createIcon = function(iconClass) {
        let i = document.createElement('i');
        i.className = `fas fa-${iconClass}`;
        return i;
    };
    const createQuizQuitConfirmation = function() {
        const divWrapper = createDiv('quiz-quit-confirmation-wrapper background-copper-red is-flex is-justify-content-center is-align-items-center column is-12-mobile is-12 p-0 hidden-options');
        const p = createPara('quiz-quit-confirmation-text');
        p.textContent = 'are you sure?';
        const divBtn = createBtn('btn btn-vertical mx-2 my-0', 'quiz-quit-yes-btn', 'yes', 'quiz-quit-confirmation-btn-wrapper is-flex is-justify-content-center');
        divWrapper.appendChild(p);
        divWrapper.appendChild(divBtn);
        UISelectors.quizContent.before(divWrapper);
    };
    const createHintIcon = function() {
        let span = document.createElement('span');
        span.innerHTML = `<img src="./imgs/hint.png" alt="input hints" class="input-hint">`;
        UISelectors.registerForm.appendChild(span);
    };
    const removeElement = function(target) {
        target.remove();
    };
    const setAttributes = function(el, attrs) {
        for(var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    };
    const createSubmitBtn = function() {
        let btn = document.createElement('button');
        setAttributes(btn, {"id": "quiz-form-submit", "class": "control-btn", "type": "submit", "form": "quiz-form", "style": "display: none; background-color: transparent;"});
        const span = createSpan();
        span.textContent = 'submit';
        btn.appendChild(span);
        return btn;
    };
    const createErrorDiv = function(content = 'Internal error. Contact app provider.') {
        document.querySelector('body').appendChild(createDiv('error-overlay is-flex is-justify-content-center is-align-items-center has-text-centered'));
        const p = createPara('');
        p.textContent = content;
        document.querySelector(UISelectors.errorOverlay).appendChild(p);
    };
    const appendAnswer = function(html, target) {
        const div = createDiv('');
        div.innerHTML = html;
        target.appendChild(div);
    };
    // Render UI components & HTML templates
    const showMainLogo = function() {
        return `
        <div class="perspective-box-far logo-dimensions" id="front-page-logo">
            <div class="face logo-dimensions front">
                <img src="imgs/logo-main.png" alt="">
            </div>
            <div class="face logo-dimensions top">
                <img src="imgs/logo-main.png" alt="">
            </div>
            <div class="face logo-dimensions left">
                <img src="imgs/logo-main.png" alt="">
            </div>
        </div>
        `;
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
                    <p class="${target}-error-text text-copper-red"></p>
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
    const createLogOutConfirmation = function() {
        const li = document.createElement('li');
        li.className = 'logout-confirmation-wrapper background-copper-red hidden-options';
        li.innerHTML = `
        <p class="logout-confirmation-text">are you sure?</p>
        <div class="logout-confirmation-btn-wrapper is-flex is-justify-content-center mb-2">
            <form action="logout.php" method="POST" id="logout-form">
                <button type="submit" name="yes" class="btn btn-invert mx-3">
                    <span>yes</span>
                </button>
            </form>
        </div>
        `;
        return li;
    };
    const renderQuizzes = function(page, data) {
        let html = '';
        const quizStart = 0 + (page - 1) * 3;
        const quizEnd = 3 + (page - 1) * 3;
        // Get total number of pages
        const pages = Math.ceil(data.length / 3);
        if (pages) {
            // Create 3 quizzes
            for (let index = quizStart; index < quizEnd; index++) {
                if (data[index] === undefined) { break; }
                // Set vars
                const quizID = data[index]["quiz_id"];
                const quizCategory = data[index]["quiz_type"];
                const quizName = data[index]["quiz_name"];
                const quizAnswers = data[index]["quiz_answers"];
                const quizQuestions = data[index]["quiz_questions"];
                const quizCreatedAt = new Date(data[index]["created_at"]).toLocaleString();
                let quizUpdateddAt = new Date(data[index]["updated_at"]).toLocaleString();
                if (new Date(data[index]["created_at"]).getTime() === new Date(data[index]["updated_at"]).getTime()) {
                    quizUpdateddAt = 'NA';
                }
                let quizScore = data[index]["score"];
                if (quizScore === null) {
                    quizScore = 'NA';
                } else {
                    quizScore += '%';
                }
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
                <div data-id="${quizID}" id ="" class="more-info-wrapper scaleY background-corn-gradient columns is-mobile m-0 has-text-centered p-5 is-multiline is-flex is-flex-direction-column is-justify-content-start" >
                    <div class="is-flex is-justify-content-start column is-12-mobile is-12 p-0" >
                        <a id="" class="control-btn more-info-back-btn" >
                            <span class="">go back</span>
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
                                <p class="text-smoky-black" > Recent Score: ${quizScore}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            };
            if (page === 1) {
                UISelectors.browsePreviousQuizzes.classList.add('disabled');
            } else {
                UISelectors.browsePreviousQuizzes.classList.remove('disabled');
            }
            if (page === pages) {
                UISelectors.browseNextQuizzes.classList.add('disabled');
            } else {
                UISelectors.browseNextQuizzes.classList.remove('disabled');
            }
            UISelectors.quizWrapper.firstElementChild.innerHTML = html;
        } else {
            UISelectors.browseNextQuizzes.classList.add('disabled');
            UISelectors.browsePreviousQuizzes.classList.add('disabled');
            html = createPara('has-text-centered');
            html.textContent = 'No quizzes to display!';
            UISelectors.quizWrapper.firstElementChild.innerHTML = '';
            UISelectors.quizWrapper.firstElementChild.appendChild(html);
        }
        UISelectors.quizWrapper.setAttribute('data-page', page);
    };
    const createAnswer = function(answer, index) {
        return `
        <div class="quiz-view-answer-wrapper has-text-centered p-2 m-0">
            <div class="is-relative">
                <input type="radio" name="${answer.q_ID}" value="${index}" id="${answer.a_ID}" class="btn m-0 p-0">
                <label for="${answer.a_ID}">
                    ${answer.answer}
                </label>
            </div>
        </div>
        `;
    };
    const createQuestion = function(target, content) {
        target.innerHTML = '';
        const question = createPara('quiz-view-question');
        question.textContent = content.toUpperCase();
        target.appendChild(question);
    };
    const createQuestionFeedback = function(content, feedback) {
        return `
        <li class="is-flex is-justify-content-space-between is-align-items-center quiz-li-feedback input-${feedback}">
            <p class="">
                ${content}
            </p>
            <span class="icon-validation" id="">
                <i class="fas fa-check icon-${feedback}"></i>
            </span>
        </li>
        `;
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
    const createBrowseLogo = function() {
        return `
        <div class="box-floating logo-dimensions" id="welcome-logo-browse">
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
        <div class="box-floating logo-dimensions" id="">
            <div class="create-quiz-logo">
                <img src="imgs/logo-create-quiz.png" alt="">
            </div>
        </div>
        `;
    };
    const generateQuizConfirmation = function() {
        UISelectors.generateConfirmation.innerHTML = `
        <div class="column is-12-mobile is-12 p-0 m-0">
            <div class="" id="generate-quiz-loader">
                <img src="imgs/logo-main.png" alt="">
            </div>
        </div>
        <div class="column is-12-mobile is-12 p-0 m-0">
            <p class="login-confirmation-text text-ghost-white p-2">
                Your quiz is being generated.
            </p>
            <p class="login-confirmation-text text-ghost-white p-2" id="generate-quiz-text-feedback">
                Hold on! This may take a while.
            </p>
        </div>
        `;
    };

    
    
    
    
    
    
    
    
    
    
    // Form interaction
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
    // 
    // 
    // 
    // DATA CONTROLLER
    // 
    // 
    // 
    const patterns = {
        usernamePattern: /^(\w+( \w+)*){6,}$/,
        emailPattern: /^([a-zA-Z]{1}[\w\.]{0,20})@([a-zA-Z]{2,})\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/,
        // passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*[\s])(?=.{8,})/,
        passwordPattern: /^[a-zA-Z]{4,}$/
    };
    const resetForm = function(target) {
        const inputElements = document.querySelectorAll(`#${target}-form input`);
        const submitBtn = document.querySelector(`#${target}-form button`);
        Array.from(inputElements).forEach(input => {
            if (input.type !== 'hidden' && input.type !== 'number') {
                input.value = '';
                input.classList.remove('input-valid');
                input.classList.remove('input-invalid');
                if (!input.parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
                    input.parentElement.lastElementChild.firstElementChild.classList.add('hide');
                }
                if (!input.parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
                    input.parentElement.lastElementChild.lastElementChild.classList.add('hide');
                }
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
    const inputValid = function(target) {
        if (target.classList.contains('input-invalid')) {
            target.nextElementSibling.nextElementSibling.lastElementChild.classList.add('hide');
            target.classList.remove('input-invalid');
        }
        target.nextElementSibling.nextElementSibling.firstElementChild.classList.remove('hide');
        target.classList.add('input-valid');
    };
    const inputValidRemove = function(target) {
        target.nextElementSibling.nextElementSibling.firstElementChild.classList.add('hide');
        target.classList.remove('input-valid');
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
    const stripValidation = function(inputs) {
        const form = UISelectors.createQuizForm;
        inputs.forEach(input => {
            if (form[input].classList.contains('input-invalid')) {
                inputInvalidRemove(form[input]);
            } else {
                inputValidRemove(form[input]);
            }
        });
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
    const checkField = function(input) {
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
    };
    const handleFormData = function(data, target) {
        const targetForm = document.querySelector(`#${target}-form`);
        // Count errors
        let err_count = 0;
        Object.keys(data).forEach(input => {
            if ((data[input].field !== 'db') && (data[input].field !== 'quiz-db') && (data[input].field !== 'session')) {
                if (checkField(data[input])) {
                    err_count ++;
                    inputInvalid(targetForm[data[input].field]);
                    if (target === 'register') {
                        hintFeedback(data[input].field, false);
                    }
                } else {
                    inputValid(targetForm[data[input].field]);
                    if (target === 'register') {
                        hintFeedback(data[input].field);
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
    const checkIfEmptyQuiz = function() {
        const form = UISelectors.createQuizForm;
        if (form["quiz-name"].value !== '' && form["quiz-type"].value !== 'QUIZ TYPE' && form["quiz-answers"].value !== '' && form["quiz-questions"].value !== '' && (form["quiz-answers"].value >= 2 && form["quiz-answers"].value <= 4) && (form["quiz-questions"].value >= 4 && form["quiz-questions"].value <= 10)) {
            form["quiz-generate"].classList.remove('disabled');
        } else {
            form["quiz-generate"].classList.add('disabled');
        }
    };
    const shuffleArray = function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[j], array[i]] = [array[i], array[j]];
        }
    };


    // 
    // 
    // 
    // APP CONTROLLER
    // 
    // 
    // 
    const loadStartScreen = function() {
        // Clear
        UISelectors.mainSectionWrapper.firstElementChild.innerHTML = '';
        // Render UI
        const divLogo = createDiv('column is-12-mobile is-12 pt-0 mb-3');
        const divBtns = createDiv('column is-12-mobile is-12 mt-5 px-0 pb-5 is-relative buttons-wrapper');
        UISelectors.mainSectionWrapper.firstElementChild.appendChild(divLogo);
        UISelectors.mainSectionWrapper.firstElementChild.appendChild(divBtns);
        // Load main logo
        UISelectors.mainSectionWrapper.firstElementChild.firstElementChild.innerHTML = showMainLogo();
        // Load start btn
        UISelectors.mainSectionWrapper.firstElementChild.lastElementChild.appendChild(createBtn('btn', 'front-page-start-btn', 'start', 'button-wrapper-primary'));
        // Adjust UI display
        document.querySelector('#front-page-footer').classList.remove('hidden-options');
        UISelectors.mainSectionWrapper.classList.remove('welcome-wrapper');
        UISelectors.mainSectionWrapper.classList.add('background-space-cadet-gradient');
        UISelectors.mainSectionWrapper.classList.remove('background-copper-red-gradient');
    };
    const loadLoggedInScreen = function() {
        // Clear
        UISelectors.mainSectionWrapper.firstElementChild.innerHTML = '';
        // Render UI
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
        // Adjust UI display
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
    // 
    // API & DATABASE CONTROLLER
    // 
    // 
    // 
    const apiParams = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": `${global.apiKey}`,
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
    };
    const questionsTemplate = [
        "What is the definition of $?",
        "How would you define $?",
        "How to define $?",
        "What is the meaning of $?",
        "What does $ mean?"
    ];
    const postData = async function(data, endpoint) {
        return await (
            fetch(endpoint, {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }));
    };
    const fetchQuizzes = async function(endpoint) {
        return await (
            fetch(endpoint, {
                method: "GET",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            }));
    };
    const getAllWords = async function(pageNum = 1) {
        return await (
            fetch('https://wordsapiv1.p.rapidapi.com/words/?'+ new URLSearchParams({
                letterPattern: '^[A-z]{2,}$',
                page: pageNum
            }), apiParams)
            .then(response => {
                if (!response.ok) { throw new Error(response.statusText) }
                return response.json();
            }));
    };
    const getWordsByRandomPages = async function(numberOfQuestions, numOfAnswers) {
        // Get all words
        return await (
            getAllWords()
            .then(doc => {
                // Total number of pages
                let pages = doc.results.total;
                // Generate random pages
                let randomPages = [];
                while (randomPages.length < numberOfQuestions * numOfAnswers) {
                    const r = Math.floor(Math.random() * Math.ceil(pages / 100));
                    if (randomPages.indexOf(r) === -1) {
                        randomPages.push(r);
                    }
                }
                // Add promises in a loop
                let promises = [];
                for (let i = 0; i < randomPages.length; i++) {
                    promises.push(getAllWords(randomPages[i]));
                }
                return Promise.all(promises);
            }));
    };
    const getWordDefinitions = async function(words) {
        let i = 0
        let wordsDefinitions = {};
        // Loop to get all words specified in words array
        while (i < words.length) {
            const word = words[i];
            // Fetch word
            const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/' + word + '/definitions', apiParams);
            // Convert to json
            if (!response.ok) { throw new Error(response.statusText) }
            const doc = await response.json();
            // If fetched word has definition, add it to wordDefinitions object
            if (doc.definitions.length) {
                wordsDefinitions[word] = doc.definitions;
            }
            i++;
        }
        return wordsDefinitions;
    }
    const getRandomWordDefinitions = async function(missingWords, oldWordDefinitions) {
        let wordsDefinitions = {};
        // Loop till word with definition is found
        while (true) {
            // Fetch random word
            const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/?' + new URLSearchParams({
                random: 'true'
            }), apiParams);
            if (!response.ok) { throw new Error(response.statusText) }
            const doc = await response.json();
            // Get word field
            const word = doc.word;
            // Check if fetched word is unique
            if (!Object.keys(oldWordDefinitions).includes(word)) {
                // Fetch definition for this word
                const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/' + word + '/definitions', apiParams);
                if (!response.ok) { throw new Error(response.statusText) }
                const doc = await response.json();
                // If fetched word has definition, add it to wordDefinitions object
                if (doc.definitions.length) {
                    wordsDefinitions[word] = doc.definitions;
                }
                // If wordDefinitions has specified length, break from the loop
                if (Object.keys(wordsDefinitions).length === missingWords) {
                    break;
                }
            }
        }
        return wordsDefinitions;
    };
    








    const loadLogOutEvent = function() {
        const form = grab(UISelectors.logOutForm);
        form.addEventListener('submit', e => {
            // Prevent default
            e.preventDefault();
            // Set vars
            const action = form.action;
            const method = form.method;
            // Disable options
            selector.burger.classList.add('disabled');
            // Show loader
            selector.options.appendChild(UICtrl.createDiv(selector.overlay.slice(1)));
            UICtrl.createLoader(grab(selector.overlay));
            // Send async post request
            fetch(action, {
                method: method,
                body: new FormData(form)
            })
            .then(response => response.json() )
            .then(docs => {
                // Handle input data
                if (docs.loggedOut) {
                    // User successfully logged out
                    // Fetch demo quizzes
                    return fetchQuizzes('fetchQuizzes.php');
                } else {
                    // User was not logged in
                    // Hide loader
                    UICtrl.removeLoader();
                    UICtrl.removeElement(grab(selector.overlay));
                    // Show message overlay
                    UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        grab(selector.errorOverlay).remove();
                        // Adjust UI depending on where user currently is
                        const screen = document.querySelector('body').getAttribute('data-screen');
                        if(screen === 'browse' || screen === 'more-info' || screen === 'filter' || screen === 'search') {
                            // Show main section
                            selector.browseWrapper.classList.toggle('hidden-options');
                            selector.mainSectionWrapper.classList.toggle('hidden-options');
                            selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                            // Remove UI components
                            selector.browseWrapper.firstElementChild.remove();
                            selector.filterWrapper.firstElementChild.remove();
                            selector.filterWrapper.firstElementChild.remove();
                            selector.searchWrapper.firstElementChild.remove();
                            selector.searchWrapper.firstElementChild.remove();
                            // Reset data screen
                            grab('body').removeAttribute('data-screen');
                            if (screen === 'more-info') {
                                const infoDiv = grab('.more-info-wrapper.active');
                                infoDiv.classList.add('scaleY');
                            } else if (screen === 'filter') {
                                selector.filterWrapper.classList.add('scaleY');
                            } else if (screen === 'search') {
                                selector.searchWrapper.classList.add('scaleY');
                            } else if (screen === 'quiz') {
                                // Reset global vars
                                UICtrl.global.index = 0,
                                UICtrl.global.questions = [],
                                UICtrl.global.answers = [],
                                UICtrl.global.correctAnswers = [],
                                UICtrl.global.value = [],
                                // Adjust UI display
                                grab(selector.quitConfirmationWrapper).classList.toggle('hidden-options');
                                selector.quizViewWrapper.classList.toggle('hidden-options');
                                if (grab(selector.quizResults) !== null) {
                                    grab(selector.quizResults).classList.add('hidden-options');
                                }
                                selector.quizContent.classList.remove('hidden-options');
                                // Remove UI components
                                grab(selector.quitBtn).parentElement.remove();
                                grab(selector.quitConfirmationWrapper).remove();
                                if (grab(selector.quizResults) !== null) {
                                    grab(selector.quizResults).remove();
                                }
                                selector.quizForm.lastElementChild.innerHTML = '';
                                selector.quizContent.firstElementChild.firstElementChild.innerHTML = '';
                                // Reset data screen
                                grab('body').removeAttribute('data-screen');
                            }
                        } else if(screen === 'create') {
                            selector.mainSectionWrapper.classList.toggle('hidden-options');
                            selector.createQuizWrapper.classList.toggle('hidden-options');
                            selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                            // set tabindex="-1"
                            UICtrl.addTabindex('create-tabindex');
                            // reset form
                            selector.createQuizForm.reset();
                            selector.createQuizForm["quiz-select"].value = '';
                            // disable submit btn
                            if (!selector.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                                selector.createQuizForm["quiz-generate"].classList.add('disabled');
                            }
                            // Remove rendered UI components
                            grab(selector.createQuizBackBtn).parentElement.remove();
                            grab('.main-create-quiz-header').remove();
                            if (grab(selector.formCreateQuizSubmitFeedback) !== null) {
                                grab(selector.formCreateQuizSubmitFeedback).remove();
                            }
                            // Reset data screen
                            grab('body').removeAttribute('data-screen');
                        }
                        setTimeout(() => {
                            // Close options screen
                            selector.burger.classList.toggle('hide');
                            selector.times.classList.toggle('hide');
                            selector.options.classList.toggle('hidden-options');
                            // Rerender UI display
                            UICtrl.loadStartScreen();
                            // Remove UI components
                            selector.options.firstElementChild.firstElementChild.remove();
                            selector.options.firstElementChild.firstElementChild.remove();
                            selector.options.firstElementChild.firstElementChild.remove();
                            selector.options.classList.remove('options-welcome');
                            setTimeout(() => {
                                // Enable options
                                selector.burger.classList.remove('disabled');
                            }, 250);
                        }, 1500);
                    }, 2000);
                }
            })
            .then(response => response.json() )
            .then(data => {
                global.quizzes = data.data.fields;
                // Adjust UI depending on where user currently is
                const screen = document.querySelector('body').getAttribute('data-screen');
                if(screen === 'browse' || screen === 'more-info' || screen === 'filter' || screen === 'search') {
                    // Show main section
                    selector.browseWrapper.classList.toggle('hidden-options');
                    selector.mainSectionWrapper.classList.toggle('hidden-options');
                    selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                    // Remove UI components
                    selector.browseWrapper.firstElementChild.remove();
                    selector.filterWrapper.firstElementChild.remove();
                    selector.filterWrapper.firstElementChild.remove();
                    selector.searchWrapper.firstElementChild.remove();
                    selector.searchWrapper.firstElementChild.remove();
                    // Reset data screen
                    grab('body').removeAttribute('data-screen');
                    if (screen === 'more-info') {
                        const infoDiv = grab('.more-info-wrapper.active');
                        infoDiv.classList.add('scaleY');
                    } else if (screen === 'filter') {
                        selector.filterWrapper.classList.add('scaleY');
                    } else if (screen === 'search') {
                        selector.searchWrapper.classList.add('scaleY');
                    } else if (screen === 'quiz') {
                        // Reset global vars
                        UICtrl.global.index = 0,
                        UICtrl.global.questions = [],
                        UICtrl.global.answers = [],
                        UICtrl.global.correctAnswers = [],
                        UICtrl.global.value = [],
                        // Adjust UI display
                        grab(selector.quitConfirmationWrapper).classList.toggle('hidden-options');
                        selector.quizViewWrapper.classList.toggle('hidden-options');
                        if (grab(selector.quizResults) !== null) {
                            grab(selector.quizResults).classList.add('hidden-options');
                        }
                        selector.quizContent.classList.remove('hidden-options');
                        // Remove UI components
                        grab(selector.quitBtn).parentElement.remove();
                        grab(selector.quitConfirmationWrapper).remove();
                        if (grab(selector.quizResults) !== null) {
                            grab(selector.quizResults).remove();
                        }
                        selector.quizForm.lastElementChild.innerHTML = '';
                        selector.quizContent.firstElementChild.firstElementChild.innerHTML = '';
                        // Reset data screen
                        grab('body').removeAttribute('data-screen');
                    }
                } else if(screen === 'create') {
                    selector.mainSectionWrapper.classList.toggle('hidden-options');
                    selector.createQuizWrapper.classList.toggle('hidden-options');
                    selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                    // set tabindex="-1"
                    UICtrl.addTabindex('create-tabindex');
                    // reset form
                    selector.createQuizForm.reset();
                    selector.createQuizForm["quiz-select"].value = '';
                    // disable submit btn
                    if (!selector.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                        selector.createQuizForm["quiz-generate"].classList.add('disabled');
                    }
                    // Remove rendered UI components
                    grab(selector.createQuizBackBtn).parentElement.remove();
                    grab('.main-create-quiz-header').remove();
                    if (grab(selector.formCreateQuizSubmitFeedback) !== null) {
                        grab(selector.formCreateQuizSubmitFeedback).remove();
                    }
                    // Reset data screen
                    grab('body').removeAttribute('data-screen');
                }
                setTimeout(() => {
                    // Close options screen
                    selector.burger.classList.toggle('hide');
                    selector.times.classList.toggle('hide');
                    selector.options.classList.toggle('hidden-options');
                    // Rerender UI display
                    UICtrl.loadStartScreen();
                    setTimeout(() => {
                        // Remove loader
                        UICtrl.removeLoader();
                        UICtrl.removeElement(grab(selector.overlay));
                        // Remove UI components
                        selector.options.firstElementChild.firstElementChild.remove();
                        selector.options.firstElementChild.firstElementChild.remove();
                        selector.options.firstElementChild.firstElementChild.remove();
                        selector.options.classList.remove('options-welcome');
                        // Enable options
                        selector.burger.classList.remove('disabled');
                    }, 250);
                }, 1500);
            })
            .catch(error => {
                // Hide loader
                UICtrl.removeLoader();
                UICtrl.removeElement(grab(selector.overlay));
                // Show message overlay
                UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                setTimeout(() => {
                    grab(selector.errorOverlay).remove();
                    selector.burger.classList.toggle('hide');
                    selector.times.classList.toggle('hide');
                    selector.options.classList.toggle('hidden-options');
                    // Enable options
                    selector.burger.classList.remove('disabled');
                }, 2000);
            });
        });
    };
    return {
        init: function() {
            // Show loader
            createLoader(UISelectors.mainSectionWrapper);
            // Guest mode
            if (`#${UISelectors.mainSectionWrapper.firstElementChild.id}` === UISelectors.startPage) {
                // Fetch demo quizzes
                fetchQuizzes('fetchQuizzes.php')
                .then(response => response.json() )
                .then(data => {
                    global.quizzes = data.data.fields;
                    setTimeout(() => {
                        removeLoader();
                        setTimeout(() => {
                            loadStartScreen();
                            // Load all event listeners
                        }, 600);
                    }, 1000);
                })
                .catch(error => {
                    // Hide loader
                    removeLoader();
                    // Show message overlay
                    createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        document.querySelector(UISelectors.errorOverlay).remove();
                        loadStartScreen();
                    }, 2000);
                });
            } else {
                // Fetch user's quizzes
                fetchQuizzes('fetchQuizzes.php')
                .then(response => response.json() )
                .then(data => {
                    global.quizzes = data.data.fields;
                    setTimeout(() => {
                        removeLoader();
                        setTimeout(() => {
                            loadLoggedInScreen();
                            // Set user id
                            selector.createQuizForm["user-id"].value = data.user.id;
                            // Render options
                            UISelectors.settingsOption.parentElement.before(createOption('You are currently logged in'));
                            UISelectors.settingsOption.parentElement.before(createOption(''));
                            UISelectors.settingsOption.parentElement.before(createLogOutConfirmation());
                            UISelectors.options.classList.add('options-welcome');
                            // Load all event listeners
                            // Load log out event listener separately
                            loadLogOutEvent();
                            setTimeout(() => {
                                document.querySelector('#front-page-footer').classList.add('hidden-options');
                            }, 150);
                        }, 600);
                    }, 1000);
                })
                .catch(error => {
                    // Hide loader
                    removeLoader();
                    // Show message overlay
                    createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        document.querySelector(UISelectors.errorOverlay).remove();
                        loadStartScreen();
                    }, 2000);
                });
            }
        },
        UISelectors,
        global,
        patterns,
        createMainBtns,
        removeTabindex,
        addTabindex,
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
        lockInput,
        unlockInput,
        createHintIcon,
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
        fetchQuizzes,
        createOption,
        createLogOutConfirmation,
        loadStartScreen,
        checkIfEmptyQuiz,
        generateQuizConfirmation,
        getWordsByRandomPages,
        getWordDefinitions,
        getRandomWordDefinitions,
        postData,
        loadLogOutEvent,
        createErrorDiv,
        createAnswer,
        appendAnswer,
        createQuestion,
        createQuestionFeedback,
        questionsTemplate,
        inputValidRemove,
        stripValidation
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
            // Switch animating logo to static image
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
            selector.registerFeedback.before(UICtrl.createBtn('control-btn', 'register-back-btn', 'go back', 'is-flex is-justify-content-start'));
            selector.registerFeedback.after(UICtrl.createHeader('sign up', 'main-register-header'));
            UICtrl.createHintIcon();
            UICtrl.createHintContent();
            // Adjust UI display
            selector.mainSectionWrapper.classList.toggle('hidden-options');
            selector.registerWrapper.classList.toggle('hidden-options');
            // remove tabindex="-1"
            UICtrl.removeTabindex('register-tabindex');
            // set focus on first input
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
        if(grab(selector.submitFeedbackError).parentElement.parentElement.id.includes('create-quiz')) {
            selector.createQuizWrapper.classList.toggle('is-clipped');
            // Create mode is active
            grab('body').setAttribute('data-screen', 'create');
        }
    }
    // submitFeedbackError clicked
    if (e.target.classList.contains(selector.submitFeedbackError.substring(1)) || e.target.parentElement.classList.contains(selector.submitFeedbackError.substring(1)) || e.target.parentElement.parentElement.classList.contains(selector.submitFeedbackError.substring(1))) {
        if (grab(selector.submitFeedbackError).parentElement.parentElement.id.includes('login')) {
            selector.loginFeedback.classList.toggle('hidden-options');
        } else if(grab(selector.submitFeedbackError).parentElement.parentElement.id.includes('create-quiz')) {
            selector.createQuizFeedback.classList.toggle('hidden-options');
            selector.createQuizWrapper.scrollTop = 0;
            selector.createQuizWrapper.classList.toggle('is-clipped');
            // Feedback mode is active
            grab('body').setAttribute('data-screen', 'feedback');
        } else {
            selector.registerFeedback.classList.toggle('hidden-options');
        }
    }
    // LoginBtn clicked
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.loginBtn) || (`#${e.target.id}` === selector.loginBtn)) {
        selector.mainSectionWrapper.firstElementChild.classList.add('shrink');
        setTimeout(() => {
            // Render UI elements
            selector.loginFeedback.before(UICtrl.createBtn('control-btn', 'login-back-btn', 'go back', 'is-flex is-justify-content-start'));
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
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.demoBtn) || (`#${e.target.id}` === selector.demoBtn) || (e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.browseBtn) || (`#${e.target.id}` === selector.browseBtn)) {
        let id;
        if (e.target.tagName === 'SPAN') {
            id = e.target.parentElement.id;
        } else {
            id = e.target.id;
        }
        // Render UI display
        selector.filterWrapper.before(UICtrl.createBrowseOptions());
        // Include these when filter btn is clicked
        selector.filterForm.before(UICtrl.createBtn('control-btn', 'filter-back-btn', 'go back', 'is-flex is-justify-content-start'));
        selector.filterForm.before(UICtrl.createHeader('filter', 'main-filter-header'));
        // Include these when search btn is clicked
        selector.searchForm.before(UICtrl.createBtn('control-btn', 'search-back-btn', 'go back', 'is-flex is-justify-content-start'));
        selector.searchForm.before(UICtrl.createHeader('search', 'main-search-header'));
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
        if (`#${id}` === selector.demoBtn) {
            // Demo mode is active
            grab('body').setAttribute('data-id', 'demo-mode');
        }
        // Browse mode is active
        grab('body').setAttribute('data-screen', 'browse');
    }
    // BrowseBackBtn clicked
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.browseBackBtn) || (`#${e.target.id}` === selector.browseBackBtn)) {
        const dataId = grab('body').getAttribute('data-id');
        if (dataId === 'demo-mode') {
            // Hide browse section
            document.querySelector('#front-page-footer').classList.remove('hidden-options');
            grab('body').setAttribute('data-id', '');
        }
        selector.browseWrapper.classList.toggle('hidden-options');
        // Show main section
        setTimeout(() => {
            selector.mainSectionWrapper.classList.toggle('hidden-options');
            setTimeout(() => {
                selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                // Reset mode
                grab('body').setAttribute('data-id', '');
                // Remove UI components
                selector.browseWrapper.firstElementChild.remove();
                selector.filterWrapper.firstElementChild.remove();
                selector.filterWrapper.firstElementChild.remove();
                selector.searchWrapper.firstElementChild.remove();
                selector.searchWrapper.firstElementChild.remove();
            }, 500);
        }, 350);
        // Start mode is active
        grab('body').setAttribute('data-screen', '');
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
        // Show appropriate div with more info
        const divMoreInfo = document.querySelector(`div[data-id="${quizID}"]`);
        divMoreInfo.classList.remove('scaleY');
        divMoreInfo.classList.add('active');
        // More info mode is active
        grab('body').setAttribute('data-screen', 'more-info');
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
        // Hide appropriate div with more info
        const divMoreInfo = document.querySelector(`div[data-id="${quizID}"]`);
        divMoreInfo.classList.add('scaleY');
        divMoreInfo.classList.remove('active');
        // Browse mode is active
        grab('body').setAttribute('data-screen', 'browse');
    }
    // FilterBtn clicked
    // if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.filterBtn) || (`#${e.target.id}` === selector.filterBtn) || (e.target.tagName === 'svg' && `#${e.target.parentElement.parentElement.id}` === selector.filterBtn) || (e.target.tagName === 'path' && `#${e.target.parentElement.parentElement.parentElement.id}` === selector.filterBtn)) {
    //     selector.filterWrapper.classList.remove('scaleY');
    //     // Filter mode is active
    //     grab('body').setAttribute('data-screen', 'filter');
    // }
    // FilterBackBtn clicked
    // if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.filterBackBtn) || (`#${e.target.id}` === selector.filterBackBtn)) {
    //     selector.filterWrapper.classList.add('scaleY');
    //     // Browse mode is active
    //     grab('body').setAttribute('data-screen', 'browse');
    // }
    // SearchBtn clicked
    // if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.searchBtn) || (`#${e.target.id}` === selector.searchBtn) || (e.target.tagName === 'svg' && `#${e.target.parentElement.parentElement.id}` === selector.searchBtn) || (e.target.tagName === 'path' && `#${e.target.parentElement.parentElement.parentElement.id}` === selector.searchBtn)) {
    //     selector.searchWrapper.classList.remove('scaleY');
    //     // Search mode is active
    //     grab('body').setAttribute('data-screen', 'search');
    // }
    // SearchBackBtn clicked
    // if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.searchBackBtn) || (`#${e.target.id}` === selector.searchBackBtn)) {
    //     selector.searchWrapper.classList.add('scaleY');
    //     // Browse mode is active
    //     grab('body').setAttribute('data-screen', 'browse');
    // }
    // Browse quiz next
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === selector.browseNextQuizzes.id) || (e.target.id === selector.browseNextQuizzes.id && e.target.tagName === 'A')) {
        const page = parseInt(selector.quizWrapper.getAttribute('data-page'));
        UICtrl.renderQuizzes(page + 1, UICtrl.global.quizzes);
    }
    // Browse quiz previous
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === selector.browsePreviousQuizzes.id) || (e.target.id === selector.browsePreviousQuizzes.id && e.target.tagName === 'A')) {
        const page = parseInt(selector.quizWrapper.getAttribute('data-page'));
        UICtrl.renderQuizzes(page - 1, UICtrl.global.quizzes);
    }
    // Play btn clicked
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.classList.contains(selector.playBtn.slice(1))) || (e.target.classList.contains(selector.playBtn.slice(1)) && e.target.tagName === 'A')) {
        // Quiz mode is active
        grab('body').setAttribute('data-screen', 'quiz');
        // Show loader
        selector.browseWrapper.appendChild(UICtrl.createDiv(selector.overlay.slice(1)));
        UICtrl.createLoader(grab(selector.overlay));
        // Get quiz id
        let quizID;
        if (e.target.tagName === 'SPAN') {
            quizID = e.target.parentElement.parentElement.parentElement.parentElement.id;
        } else {
            quizID = e.target.parentElement.parentElement.parentElement.id;
        }
        // Assign ID to quizForm
        selector.quizForm.setAttribute('data-id', quizID);
        // Get true quiz ID
        let ID = '';
        UICtrl.global.quizzes.some(quiz => {
            if (quiz.quiz_id === quizID) {
                ID = quiz.quiz_name;
                return true;
            }
        });
        const data = { ID };
        // Disable options
        selector.burger.classList.add('disabled');
        // Fetch quiz
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
            // Check if user is logged in
            if (data.session.loggedIn) {
                // User logged in
                setTimeout(() => {
                    // Adjust UI display
                    UICtrl.removeLoader();
                    UICtrl.removeElement(grab(selector.overlay));
                    selector.quizViewWrapper.classList.toggle('hidden-options');
                    // Render UI
                    UICtrl.createQuizNavigation();
                    UICtrl.createQuizQuitConfirmation();
                    // Assign quizID to hidden input
                    selector.quizForm["quiz-id"].value = quizID;
                    // Render question
                    const questions = data.questions.fields;
                    const questionID = questions[UICtrl.global.index]["question_ID"];
                    UICtrl.createQuestion(selector.quizQuestion, questions[UICtrl.global.index]["question"]);
                    // Render answers
                    let answers = data.answers.fields;
                    let currAnswers = [];
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
                    // Shuffle answers
                    UICtrl.shuffleArray(currAnswers);
                    // Assign correct answers
                    let correctAnswers = [];
                    let aHtml = '';
                    currAnswers.forEach((currAnswer, index) => {
                        if (currAnswer.is_correct) {
                            correctAnswers.push(index);
                        }
                        aHtml += UICtrl.createAnswer(currAnswer, index);
                    });
                    // Append answer
                    UICtrl.appendAnswer(aHtml, selector.quizForm.lastElementChild);
                    // Update question number
                    grab(selector.qNumber).lastElementChild.textContent = questions.length;
                    // Enable options
                    selector.burger.classList.remove('disabled');
                    // Set global vars
                    UICtrl.global.questions = questions;
                    UICtrl.global.answers = answers;
                    UICtrl.global.correctAnswers = correctAnswers;
                }, 1000);
            } else {
                // User not logged in
                // Hide loader
                UICtrl.removeLoader();
                UICtrl.removeElement(grab(selector.overlay));
                // Show message overlay
                UICtrl.createErrorDiv('You are not authorized. Log in first.');
                setTimeout(() => {
                    grab(selector.errorOverlay).remove();
                    // Adjust UI display
                    document.querySelector('#front-page-footer').classList.remove('hidden-options');
                    selector.browseWrapper.classList.toggle('hidden-options');
                    setTimeout(() => {
                        selector.mainSectionWrapper.classList.toggle('hidden-options');
                        setTimeout(() => {
                            selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                            // Enable options
                            selector.burger.classList.remove('disabled');
                            // Reset mode
                            grab('body').setAttribute('data-id', '');
                            // Remove UI components
                            selector.browseWrapper.firstElementChild.remove();
                            selector.filterWrapper.firstElementChild.remove();
                            selector.filterWrapper.firstElementChild.remove();
                            selector.searchWrapper.firstElementChild.remove();
                            selector.searchWrapper.firstElementChild.remove();
                        }, 500);
                    }, 350);
                }, 2000);
            }
        })
        .catch(error => {
            // Hide loader
            UICtrl.removeLoader();
            UICtrl.removeElement(grab(selector.overlay));
            // Show message overlay
            UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
            setTimeout(() => {
                grab(selector.errorOverlay).remove();
                // Adjust UI display
                document.querySelector('#front-page-footer').classList.remove('hidden-options');
                selector.browseWrapper.classList.toggle('hidden-options');
                setTimeout(() => {
                    selector.mainSectionWrapper.classList.toggle('hidden-options');
                    setTimeout(() => {
                        selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                        // Enable options
                        selector.burger.classList.remove('disabled');
                        // Reset mode
                        grab('body').setAttribute('data-id', '');
                        // Remove UI components
                        selector.browseWrapper.firstElementChild.remove();
                        selector.filterWrapper.firstElementChild.remove();
                        selector.filterWrapper.firstElementChild.remove();
                        selector.searchWrapper.firstElementChild.remove();
                        selector.searchWrapper.firstElementChild.remove();
                    }, 500);
                }, 350);
            }, 2000);
        });
    }
    // Next btn clicked
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === selector.nextBtn.slice(1)) || (e.target.id === selector.nextBtn.slice(1) && e.target.tagName === 'A')) {
        if ((UICtrl.global.index + 1) === UICtrl.global.questions.length) {
            grab(selector.nextBtn).after(UICtrl.createSubmitBtn());
            grab(selector.nextBtn).remove();
            grab(selector.quizSubmitBtn).style.display = 'flex';
        }
        // Check if radio button is checked
        const currName = UICtrl.global.questions[UICtrl.global.index - 1].question_ID;
        const target = [...selector.quizForm[currName]].filter(r => r.checked)[0];
        if (target !== undefined) {
            // Update user answers
            UICtrl.global.value.push(target.value);
            // Update question number
            grab(selector.qNumber).firstElementChild.textContent = (UICtrl.global.index + 1);
            // Render new question
            selector.quizForm.lastElementChild.lastElementChild.classList.add('hidden-options');
            const questions = UICtrl.global.questions;
            const questionID = questions[UICtrl.global.index]["question_ID"];
            UICtrl.createQuestion(selector.quizQuestion, questions[UICtrl.global.index]["question"]);
            // Render answers
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
            // Shuffle answers
            UICtrl.shuffleArray(currAnswers);
            // Assign correct answer
            let aHtml = '';
            currAnswers.forEach((currAnswer, index) => {
                if (currAnswer.is_correct) {
                    UICtrl.global.correctAnswers.push(index);
                }
                aHtml += UICtrl.createAnswer(currAnswer, index);
            });
            // Append answer
            UICtrl.appendAnswer(aHtml, selector.quizForm.lastElementChild);
        } else {
            // Show message overlay
            UICtrl.createErrorDiv('You need to pick your answer!');
            setTimeout(() => {
                grab(selector.errorOverlay).remove();
            }, 2000);
        }
    }
    // Quit btn clicked
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === selector.quitBtn.slice(1)) || (e.target.id === selector.quitBtn.slice(1) && e.target.tagName === 'A')) {
        // Adjust UI display
        grab(selector.quitConfirmationWrapper).classList.toggle('hidden-options');
    }
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === selector.quitYes.slice(1)) || (e.target.id === selector.quitYes.slice(1) && e.target.tagName === 'A')) {
        // Browse mode is active
        grab('body').setAttribute('data-screen', 'browse');
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
                if (grab(selector.quizResults) !== null) {
                    grab(selector.quizResults).remove();
                }
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
            // Hide loader
            UICtrl.removeLoader();
            UICtrl.removeElement(grab(selector.overlay));
            // Adjust UI display
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
            const questions = UICtrl.global.questions;
            const questionID = questions[UICtrl.global.index]["question_ID"];
            UICtrl.createQuestion(selector.quizQuestion, questions[UICtrl.global.index]["question"]);
            // Insert answers
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
            // Shuffle answers
            UICtrl.shuffleArray(currAnswers);
            // Reset corrent answer
            let aHtml = '';
            currAnswers.forEach((currAnswer, index) => {
                if (currAnswer.is_correct) {
                    UICtrl.global.correctAnswers.push(index);
                }
                aHtml += UICtrl.createAnswer(currAnswer, index);
            });
            // Append answer
            UICtrl.appendAnswer(aHtml, selector.quizForm.lastElementChild);
            // Update question number
            grab(selector.qNumber).lastElementChild.textContent = UICtrl.global.questions.length;
        }, 1000);
    }
    // CreateQuizBtn clicked
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === selector.createQuizBtn.slice(1)) || (e.target.id === selector.createQuizBtn.slice(1) && e.target.tagName === 'A')) {
        // Create mode is active
        grab('body').setAttribute('data-screen', 'create');
        // Hide main section
        selector.mainSectionWrapper.firstElementChild.classList.add('shrink');
        setTimeout(() => {
            // Render UI elements
            selector.createQuizForm.before(UICtrl.createBtn('control-btn', 'create-quiz-back-btn', 'go back', 'is-flex is-justify-content-start'));
            selector.createQuizForm.before(UICtrl.createHeader('create quiz', 'main-create-quiz-header'));
            selector.mainSectionWrapper.classList.toggle('hidden-options');
            // Show create quiz section
            selector.createQuizWrapper.classList.toggle('hidden-options');
            setTimeout(() => {
                // Set focus on first input
                selector.createQuizForm['quiz-name'].focus();
            }, 500);
        }, 600);
    }
    // CreateQuizBackBtn clicked
    if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === selector.createQuizBackBtn) || (`#${e.target.id}` === selector.createQuizBackBtn)) {
        // Start mode is active
        grab('body').setAttribute('data-screen', '');
        // Adjust UI display
        selector.mainSectionWrapper.classList.toggle('hidden-options');
        selector.createQuizWrapper.classList.toggle('hidden-options');
        setTimeout(() => {
            selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
            // set tabindex="-1"
            UICtrl.addTabindex('create-tabindex');
            // reset form
            selector.createQuizForm.reset();
            selector.createQuizForm["quiz-select"].value = '';
            // Strip validation classes
            UICtrl.stripValidation(["quiz-name", "quiz-type", "quiz-questions", "quiz-answers"]);
            // disable submit btn
            if (!selector.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                selector.createQuizForm["quiz-generate"].classList.add('disabled');
            }
            // Remove rendered UI components
            grab(selector.createQuizBackBtn).parentElement.remove();
            grab('.main-create-quiz-header').remove();
            if (grab(selector.formCreateQuizSubmitFeedback) !== null) {
                grab(selector.formCreateQuizSubmitFeedback).remove();
            }
        }, 600);
    }
    // Decrement & Increment Btns
    if (e.target.classList.contains('increment')) {
        if (!(Number(e.target.previousElementSibling.value) >= Number(e.target.previousElementSibling.max))) {
            e.target.previousElementSibling.value++;
            UICtrl.checkIfEmptyQuiz();
        }
        // Prevent default
        e.preventDefault();
    }
    if (e.target.classList.contains('decrement')) {
        if ((Number(e.target.nextElementSibling.value) > Number(e.target.nextElementSibling.min))) {
            e.target.nextElementSibling.value--;
            UICtrl.checkIfEmptyQuiz();
        }
        // Prevent default
        e.preventDefault();
    }
    // LogOutBtn clicked
    if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === selector.logOutBtn.slice(1)) || (e.target.id === selector.logOutBtn.slice(1) && e.target.tagName === 'A')) {
        grab(selector.logOutConfirmation).classList.toggle('hidden-options');
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
// Check Name
selector.createQuizForm["quiz-name"].addEventListener('keyup', () => {
    UICtrl.checkIfEmptyQuiz();
});
selector.createQuizForm["quiz-name"].addEventListener('blur', () => {
    UICtrl.checkIfEmptyQuiz();
});
// Check Type
selector.createQuizForm["quiz-type"].addEventListener('change', () => {
    UICtrl.checkIfEmptyQuiz();
});
// Check Answers
selector.createQuizForm["quiz-answers"].addEventListener('keyup', () => {
    UICtrl.checkIfEmptyQuiz();
});
// Check Answers
selector.createQuizForm["quiz-answers"].addEventListener('blur', () => {
    UICtrl.checkIfEmptyQuiz();
});
// Check Questions
selector.createQuizForm["quiz-questions"].addEventListener('keyup', () => {
    UICtrl.checkIfEmptyQuiz();
});
// Check Questions
selector.createQuizForm["quiz-questions"].addEventListener('blur', () => {
    UICtrl.checkIfEmptyQuiz();
});










// Submit events
// Register form
selector.registerForm.addEventListener('submit', e => {
    // Prevent default behaviour
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
    // Disable options
    selector.burger.classList.add('disabled');
    if (UICtrl.checkIfAllValid('register')) {
        // Lock input fields
        UICtrl.lockInput('register');
        // Disable submit btn
        if (!selector.registerForm["register-submit"].classList.contains('disabled')) {
            selector.registerForm["register-submit"].classList.add('disabled');
        }
        // Show loader
        selector.registerWrapper.appendChild(UICtrl.createDiv(selector.overlay.slice(1)));
        UICtrl.createLoader(grab(selector.overlay));
        // Post data using the Fetch API
        let err_count = 0;
        fetch(selector.registerForm.action, {
            method: selector.registerForm.method,
            body: new FormData(selector.registerForm)
        })
        .then(response => response.json() )
        .then(docs => {
            // Handle input data
            err_count = UICtrl.handleFormData(docs, 'register');
            if (err_count) { // errors found
                setTimeout(() => {
                    submitFeedback.lastElementChild.classList.add('hide');
                    submitFeedback.firstElementChild.classList.remove('hide');
                    // Unlock fields
                    UICtrl.unlockInput('register');
                    // Enable options
                    selector.burger.classList.remove('disabled');
                    // Hide loader
                    UICtrl.removeLoader();
                    UICtrl.removeElement(grab(selector.overlay));
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
                            selector.loginFeedback.before(UICtrl.createBtn('control-btn', 'login-back-btn', 'go back', 'is-flex is-justify-content-start'));
                            selector.loginFeedback.after(UICtrl.createHeader('login', 'main-login-header'));
                            // Show login screen
                            selector.mainSectionWrapper.classList.toggle('hidden-options');
                            selector.loginWrapper.classList.toggle('hidden-options');
                            // Enable options
                            selector.burger.classList.remove('disabled');
                            // Hide loader
                            UICtrl.removeLoader();
                            UICtrl.removeElement(grab(selector.overlay));
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
            // Hide loader
            UICtrl.removeLoader();
            UICtrl.removeElement(grab(selector.overlay));
            // Show message overlay
            UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
            setTimeout(() => {
                grab(selector.errorOverlay).remove();
                // Adjust UI display
                selector.mainSectionWrapper.classList.toggle('hidden-options');
                selector.registerWrapper.classList.toggle('hidden-options');
                setTimeout(() => {
                    selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                    // Unlock fields
                    UICtrl.unlockInput('register');
                    // Enable options
                    selector.burger.classList.remove('disabled');
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
            }, 2000);
        });        
    }
});
// Login form
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
        // Disable options
        selector.burger.classList.add('disabled');
        // Show loader
        selector.loginWrapper.appendChild(UICtrl.createDiv(selector.overlay.slice(1)));
        UICtrl.createLoader(grab(selector.overlay));
        // Post data using the Fetch API
        let err_count = 0;
        fetch(selector.loginForm.action, {
            method: selector.loginForm.method,
            body: new FormData(selector.loginForm)
        })
        .then(response => response.json() )
        .then(docs => {
            // First check if user is logged in
            if (docs.session.loggedIn) {
                // Unlock fields
                UICtrl.unlockInput('login');
                setTimeout(() => {
                    // Adjust UI display
                    selector.mainSectionWrapper.classList.toggle('hidden-options');
                    selector.loginWrapper.classList.toggle('hidden-options');
                    // set tabindex="-1"
                    UICtrl.addTabindex('login-tabindex');
                    // Show welcome screen
                    selector.mainSectionWrapper.classList.toggle('hidden-options');
                    setTimeout(() => {
                        // Rerender UI
                        UICtrl.loadLoggedInScreen();
                        // Render options
                        selector.settingsOption.parentElement.before(UICtrl.createOption('You are currently logged in'));
                        selector.settingsOption.parentElement.before(UICtrl.createOption(''));
                        selector.settingsOption.parentElement.before(UICtrl.createLogOutConfirmation());
                        selector.options.classList.add('options-welcome');
                        // Load log out event listener
                        UICtrl.loadLogOutEvent();
                        // Adjust UI display
                        selector.mainSectionWrapper.classList.toggle('hidden-options');
                        selector.mainSectionWrapper.firstElementChild.classList.toggle('shrink');
                        // Hide loader
                        UICtrl.removeLoader();
                        UICtrl.removeElement(grab(selector.overlay));
                        setTimeout(() => {
                            // Enable options
                            selector.burger.classList.remove('disabled');
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
                        // Hide loader
                        UICtrl.removeLoader();
                        UICtrl.removeElement(grab(selector.overlay));
                        // Enable options
                        selector.burger.classList.remove('disabled');
                        return undefined;
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
                    // Set user id
                    selector.createQuizForm["user-id"].value = docs.session["user_id"];
                    // Fetch user's quizzes
                    return UICtrl.fetchQuizzes('fetchQuizzes.php');
                }
            }
        })
        .then(response => response !== undefined ? response.json() : undefined )
        .then(data => {
            if (data !== undefined) {
                UICtrl.global.quizzes = data.data.fields;
                // Unlock fields
                UICtrl.unlockInput('login');
                setTimeout(() => {
                    // Adjust UI display
                    selector.mainSectionWrapper.classList.toggle('hidden-options');
                    selector.loginWrapper.classList.toggle('hidden-options');
                    // set tabindex="-1"
                    UICtrl.addTabindex('login-tabindex');
                    // Show welcome screen
                    selector.mainSectionWrapper.classList.toggle('hidden-options');
                    setTimeout(() => {
                        // Rerender UI
                        UICtrl.loadLoggedInScreen();
                        // Render options
                        selector.settingsOption.parentElement.before(UICtrl.createOption('You are currently logged in'));
                        selector.settingsOption.parentElement.before(UICtrl.createOption(''));
                        selector.settingsOption.parentElement.before(UICtrl.createLogOutConfirmation());
                        selector.options.classList.add('options-welcome');
                        // Load log out event listener
                        UICtrl.loadLogOutEvent();
                        // Adjust UI display
                        selector.mainSectionWrapper.classList.toggle('hidden-options');
                        selector.mainSectionWrapper.firstElementChild.classList.toggle('shrink');
                        // Hide loader
                        UICtrl.removeLoader();
                        UICtrl.removeElement(grab(selector.overlay));
                        setTimeout(() => {
                            // Enable options
                            selector.burger.classList.remove('disabled');
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
            }
        })
        .catch(error => {
            // Hide loader
            UICtrl.removeLoader();
            UICtrl.removeElement(grab(selector.overlay));
            // Show message overlay
            UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
            setTimeout(() => {
                grab(selector.errorOverlay).remove();
                // Adjust UI display
                selector.mainSectionWrapper.classList.toggle('hidden-options');
                selector.loginWrapper.classList.toggle('hidden-options');
                setTimeout(() => {
                    selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                    // Unlock fields
                    UICtrl.unlockInput('login');
                    // Enable options
                    selector.burger.classList.remove('disabled');
                    // set tabindex="-1"
                    UICtrl.addTabindex('login-tabindex');
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
            }, 2000);
        });
    }
});
selector.quizForm.addEventListener('submit', e => {
    // Prevent default
    e.preventDefault();
    // Check if radio button is checked
    const currName = UICtrl.global.questions[UICtrl.global.index - 1].question_ID;
    const target = [...selector.quizForm[currName]].filter(r => r.checked)[0];
    if (target !== undefined) {
        // Disable options
        selector.burger.classList.add('disabled');
        // Show loader
        selector.quizViewWrapper.appendChild(UICtrl.createDiv(selector.overlay.slice(1)));
        UICtrl.createLoader(grab(selector.overlay));
        // Adjust UI display
        selector.quizContent.classList.toggle('hidden-options');
        grab(selector.qNumber).style.opacity = 0;
        // Render retry btn
        grab(selector.quizSubmitBtn).after(UICtrl.createBtn('control-btn', 'quiz-retry-btn', 'retry'));
        grab(selector.quizSubmitBtn).remove();
        grab(selector.quizRetryBtn).style.display = 'flex';
        // Output quiz feedback
        let score = 0;
        let uHtml = '';
        UICtrl.global.questions.forEach((question, index) => {
            if (selector.quizForm[question.question_ID].value == UICtrl.global.correctAnswers[index]) {
                score++;
                uHtml += UICtrl.createQuestionFeedback(question.question, 'valid');
            } else {
                uHtml += UICtrl.createQuestionFeedback(question.question, 'invalid');
            }
        });
        // Get quizID
        const quizID = selector.quizForm.getAttribute('data-id');
        // Calculate score
        const finalScore = (score / UICtrl.global.questions.length) * 100;
        // Update db
        const data = { finalScore, quizID };
        fetch(selector.quizForm.action, {
            method: selector.quizForm.method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json() )
        .then(() => UICtrl.fetchQuizzes('fetchQuizzes.php') )
        .then(response => response.json() )
        .then(data => {
            UICtrl.global.quizzes = data.data.fields;
            // Render data using JS
            UICtrl.renderQuizzes(1, UICtrl.global.quizzes);
            setTimeout(() => {
                // Hide loader
                UICtrl.removeLoader();
                UICtrl.removeElement(grab(selector.overlay));
                // Adjust UI display
                selector.quizContent.after(UICtrl.createQuizResults());
                grab(selector.quizResults).classList.toggle('hidden-options');
                // Output feedback & score
                grab(selector.quizScore).textContent = finalScore + '%';
                grab(selector.quizFeedback).innerHTML = uHtml;
                // Enable options
                selector.burger.classList.remove('disabled');
            }, 1000);
        })
        .catch(error => {
            // Hide loader
            UICtrl.removeLoader();
            UICtrl.removeElement(grab(selector.overlay));
            // Show message overlay
            UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
            setTimeout(() => {
                grab(selector.errorOverlay).remove();
                // Reset global vars
                UICtrl.global.index = 0;
                UICtrl.global.questions = [];
                UICtrl.global.answers = [];
                UICtrl.global.correctAnswers = [];
                UICtrl.global.value = [];
                // Adjust UI display
                selector.quizViewWrapper.classList.toggle('hidden-options');
                setTimeout(() => {
                    if (grab(selector.quizResults) !== null) {
                        grab(selector.quizResults).classList.add('hidden-options');
                    }
                    selector.quizContent.classList.remove('hidden-options');
                    // Remove UI components
                    grab(selector.quitBtn).parentElement.remove();
                    grab(selector.quitConfirmationWrapper).remove();
                    if (grab(selector.quizResults) !== null) {
                        grab(selector.quizResults).remove();
                    }
                    selector.quizForm.lastElementChild.innerHTML = '';
                    selector.quizContent.firstElementChild.firstElementChild.innerHTML = '';
                    // Enable options
                    selector.burger.classList.remove('disabled');
                }, 500);
            }, 2000);
            
        });
    } else {
        // Show message overlay
        UICtrl.createErrorDiv('You need to pick your answer!');
        setTimeout(() => {
            grab(selector.errorOverlay).remove();
        }, 2000);
    }
});
// submit generate form
selector.createQuizForm.addEventListener('submit', e => {
    // Prevent the default form submit
    e.preventDefault();
    // Set local vars
    const form = selector.createQuizForm;
    const quizName = form["quiz-name"].value;
    const quizType = form["quiz-type"].value;
    const quizAnswers = form["quiz-answers"].value;
    const quizQuestions = form["quiz-questions"].value;
    // Add formRegisterSubmitFeedback
    if (grab(selector.formCreateQuizSubmitFeedback) === null) {
        UICtrl.createSubmitFeedback('create-quiz');
    }
    const submitFeedback = grab(selector.formCreateQuizSubmitFeedback);
    // Add data feedback
    selector.createQuizFeedback.innerHTML = '';
    UICtrl.createDataFeedback(['quiz-name', 'quiz-type', 'quiz-answers', 'quiz-questions', 'quiz-db'], 'create-quiz');
    // Adjust UI display
    selector.createQuizWrapper.scrollTop = 0;
    // Check if there is anything in inputs
    if (form["quiz-name"].value !== '' && form["quiz-type"].value !== 'QUIZ TYPE' && form["quiz-answers"].value !== '' && form["quiz-questions"].value !== '' && (form["quiz-answers"].value >= 2 && form["quiz-answers"].value <= 4) && (form["quiz-questions"].value >= 4 && form["quiz-questions"].value <= 10) && !form["quiz-name"].hasAttribute('readonly') && !form["quiz-type"].hasAttribute('disabled') && !form["quiz-answers"].hasAttribute('readonly') && !form["quiz-questions"].hasAttribute('readonly')) {
        // Adjust UI
        if (submitFeedback.classList.contains('hide')) {
            submitFeedback.classList.remove('hide');
            submitFeedback.lastElementChild.classList.remove('hide');
        } else {
            submitFeedback.firstElementChild.classList.add('hide');
            submitFeedback.lastElementChild.classList.remove('hide');
        }
        // Lock input fields & submit btn
        form["quiz-name"].setAttribute("readonly", true);
        form["quiz-type"].setAttribute("disabled", true);
        form["quiz-select"].value = quizType;
        form["quiz-answers"].setAttribute("readonly", true);
        form["quiz-questions"].setAttribute("readonly", true);
        form["quiz-generate"].classList.add("disabled");
        // Disable options
        selector.burger.classList.add('disabled');
        // Show loader
        selector.createQuizWrapper.appendChild(UICtrl.createDiv(selector.overlay.slice(1)));
        UICtrl.createLoader(grab(selector.overlay));
        // Set local vars
        let err_count = 0;
        let wordDefinitions = [];
        // Post data using Fetch API
        fetch(form.action, {
            method: form.method,
            body: new FormData(form)
        })
        .then(response => response.json() )
        .then(docs => {
            // Handle input data
            err_count = UICtrl.handleFormData(docs, 'create-quiz');
            if (err_count) { throw true }
            else { // no errors
                // Hide loader
                UICtrl.removeLoader();
                UICtrl.removeElement(grab(selector.overlay));
                // Adjust UI display
                selector.createQuizWrapper.scrollTop = 0;
                selector.createQuizWrapper.classList.toggle('is-clipped');
                // Render UI
                UICtrl.generateQuizConfirmation();
                // Quiz confirmation mode is active
                grab('body').setAttribute('data-screen', 'quiz-confirmation');
                // Show confirmation wrapper & loader, set text
                selector.generateConfirmation.classList.remove('hidden-options');
                selector.generateConfirmation.firstElementChild.firstElementChild.classList.add('start-loader');
                selector.generateConfirmation.lastElementChild.lastElementChild.textContent = 'Fetching words...';
                // Fetch data from WordAPI
                return UICtrl.getWordsByRandomPages(quizQuestions, quizAnswers);
            }
        })
        .then(docs => {
            // reset form
            selector.createQuizForm.reset();
            selector.createQuizForm["quiz-select"].value = '';
            form["quiz-name"].classList.remove('input-valid');
            form["quiz-name"].classList.remove('input-invalid');
            if (!form["quiz-name"].parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
                form["quiz-name"].parentElement.lastElementChild.firstElementChild.classList.add('hide');
            }
            if (!form["quiz-name"].parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
                form["quiz-name"].parentElement.lastElementChild.lastElementChild.classList.add('hide');
            }
            form["quiz-type"].classList.remove('input-valid');
            form["quiz-type"].classList.remove('input-invalid');
            if (!form["quiz-type"].parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
                form["quiz-type"].parentElement.lastElementChild.firstElementChild.classList.add('hide');
            }
            if (!form["quiz-type"].parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
                form["quiz-type"].parentElement.lastElementChild.lastElementChild.classList.add('hide');
            }
            form["quiz-answers"].classList.remove('input-valid');
            form["quiz-answers"].classList.remove('input-invalid');
            if (!form["quiz-answers"].parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
                form["quiz-answers"].parentElement.lastElementChild.firstElementChild.classList.add('hide');
            }
            if (!form["quiz-answers"].parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
                form["quiz-answers"].parentElement.lastElementChild.lastElementChild.classList.add('hide');
            }
            form["quiz-questions"].classList.remove('input-valid');
            form["quiz-questions"].classList.remove('input-invalid');
            if (!form["quiz-questions"].parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
                form["quiz-questions"].parentElement.lastElementChild.firstElementChild.classList.add('hide');
            }
            if (!form["quiz-questions"].parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
                form["quiz-questions"].parentElement.lastElementChild.lastElementChild.classList.add('hide');
            }
            // Disable submit button
            if (!form["quiz-generate"].classList.contains('disabled')) {
                form["quiz-generate"].classList.add('disabled');
            }
            // Generate random word indexes
            let randomIndexes = [];
            let randomWords = [];
            while (randomIndexes.length < quizQuestions * quizAnswers) {
                const r = Math.floor(Math.random() * 100) + 1;
                if (randomIndexes.indexOf(r) === -1) {
                    randomIndexes.push(r);
                }
            }
            // Get random words based on randomIndexes
            docs.forEach((doc, index) => {
                randomWords.push(doc.results.data[randomIndexes[index]]);
            });
            // Update UI text
            selector.generateConfirmation.lastElementChild.lastElementChild.textContent = 'Fetching definitions...';
            // Fetch definitions
            return UICtrl.getWordDefinitions(randomWords);
        })
        .then(definitions => {
            wordDefinitions = definitions;
            // Check if length of wordDefinitions is greater than or equal to
            if (Object.keys(wordDefinitions).length === quizQuestions * quizAnswers) {
                return undefined;
            } else {
                const missingWords = quizQuestions * quizAnswers - Object.keys(wordDefinitions).length;
                return UICtrl.getRandomWordDefinitions(missingWords, wordDefinitions);
            }
        })
        .then(definition => {
            if (definition !== undefined) {
                wordDefinitions = { ...wordDefinitions, ...definition };
            }
            // Generate questions & answers
            const questionsTemplate = UICtrl.questionsTemplate;
            let questions = {};
            // Iterate over word definitions
            for (const key in wordDefinitions) {
                let definition, partOfSpeech = '';
                // If word has more than one definition, choose a random one
                if (wordDefinitions[key].length > 1) {
                    // Get random definition
                    const r = Math.floor(Math.random() * wordDefinitions[key].length);
                    definition = wordDefinitions[key][r].definition;
                    partOfSpeech = wordDefinitions[key][r].partOfSpeech;
                } else {
                    definition = wordDefinitions[key][0].definition;
                    partOfSpeech = wordDefinitions[key][0].partOfSpeech;
                }
                // Add answer
                questions[key] = {};
                questions[key].correctAnswer = definition;
                // Get random question template
                const r = Math.floor(Math.random() * questionsTemplate.length);
                // Create question
                questions[key].question = questionsTemplate[r].replace("$", `${key} (${partOfSpeech})`);
            }
            // Generate questions to save & remaining answers
            const questionsKeys = Object.keys(questions);
            let indexes = [];
            while (indexes.length < quizQuestions) { // number of questions
                const r = Math.floor(Math.random() * questionsKeys.length);
                if (indexes.indexOf(r) === -1) {
                    indexes.push(r);
                }
            }
            let questionsToSave = {};
            let answersToSave = [];
            questionsKeys.forEach((key, index) => {
                if (indexes.includes(index)) {
                    questionsToSave[key] = questions[key];
                } else {
                    const lolo = questions[key];
                    answersToSave.push(lolo.correctAnswer);
                }
            });
            const data = {
                questions: questionsToSave,
                answers: answersToSave,
                quizID: quizName,
                answersTotal: quizAnswers
            };
            // Update UI text
            selector.generateConfirmation.lastElementChild.lastElementChild.textContent = 'Saving...';
            // Save questions & answers
            return UICtrl.postData(data, 'store.php');
        })
        .then(response => response.json() )
        .then(docs => {
            // Count errors
            let err_count = 0;
            Object.keys(docs).forEach(input => {
                if (docs[input].php_error) { err_count ++; }
            });
            if (err_count) { throw new Error(docs.db.msg); }
            else {
                UICtrl.global.quizzes = docs['snapshot'];
                selector.generateConfirmation.lastElementChild.lastElementChild.textContent = 'Done!';
                selector.generateConfirmation.firstElementChild.firstElementChild.classList.remove('start-loader');
                setTimeout(() => {
                    // Unlock input fields & submit btn
                    form["quiz-name"].removeAttribute("readonly");
                    form["quiz-type"].removeAttribute("disabled");
                    form["quiz-answers"].removeAttribute("readonly");
                    form["quiz-questions"].removeAttribute("readonly");
                    form["quiz-generate"].classList.remove("disabled");
                    // Enable options
                    selector.burger.classList.remove('disabled');
                    // Adjust UI display
                    selector.generateConfirmation.classList.add('hidden-options');
                    selector.createQuizWrapper.classList.toggle('is-clipped');
                    selector.mainSectionWrapper.classList.toggle('hidden-options');
                    selector.createQuizWrapper.classList.toggle('hidden-options');
                    setTimeout(() => {
                        selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                        // set tabindex="-1"
                        UICtrl.addTabindex('create-tabindex');
                        // reset form
                        selector.createQuizForm.reset();
                        selector.createQuizForm["quiz-select"].value = '';
                        // disable submit btn
                        if (!selector.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                            selector.createQuizForm["quiz-generate"].classList.add('disabled');
                        }
                        // Remove rendered UI components
                        grab(selector.createQuizBackBtn).parentElement.remove();
                        grab('.main-create-quiz-header').remove();
                        if (grab(selector.formCreateQuizSubmitFeedback) !== null) {
                            grab(selector.formCreateQuizSubmitFeedback).remove();
                        }
                        // Render UI display
                        selector.filterWrapper.before(UICtrl.createBrowseOptions());
                        // Include these when filter btn is clicked
                        selector.filterForm.before(UICtrl.createBtn('control-btn', 'filter-back-btn', 'go back', 'is-flex is-justify-content-start'));
                        selector.filterForm.before(UICtrl.createHeader('filter', 'main-filter-header'));
                        // Include these when search btn is clicked
                        selector.searchForm.before(UICtrl.createBtn('control-btn', 'search-back-btn', 'go back', 'is-flex is-justify-content-start'));
                        selector.searchForm.before(UICtrl.createHeader('search', 'main-search-header'));
                        // Hide main section
                        selector.mainSectionWrapper.firstElementChild.classList.add('shrink');
                        // Render data using JS
                        UICtrl.renderQuizzes(1, UICtrl.global.quizzes);
                        setTimeout(() => {
                            selector.mainSectionWrapper.classList.toggle('hidden-options');
                            // Show browse section
                            selector.browseWrapper.classList.toggle('hidden-options');
                            // Browse mode is active
                            grab('body').setAttribute('data-screen', 'browse');
                            // Strip validation classes
                            UICtrl.stripValidation(["quiz-name", "quiz-type", "quiz-questions", "quiz-answers"]);
                        }, 500);
                    }, 600);
                }, 600);
            }
        })
        .catch(error => {
            if (error === true) {
                // Unlock input fields & submit btn
                form["quiz-name"].removeAttribute("readonly");
                form["quiz-type"].removeAttribute("disabled");
                form["quiz-answers"].removeAttribute("readonly");
                form["quiz-questions"].removeAttribute("readonly");
                setTimeout(() => {
                    submitFeedback.lastElementChild.classList.add('hide');
                    submitFeedback.firstElementChild.classList.remove('hide');
                    // Strip validation classes
                    UICtrl.stripValidation(["quiz-name", "quiz-type", "quiz-questions", "quiz-answers"]);
                    form["quiz-generate"].classList.remove("disabled");
                    // Hide loader
                    UICtrl.removeLoader();
                    UICtrl.removeElement(grab(selector.overlay));
                    // Enable options
                    selector.burger.classList.remove('disabled');
                }, 2000);
            } else {
                // Get current data-screen mode
                const screen = grab('body').getAttribute('data-screen');
                if (screen === 'create') {
                    // Hide loader
                    UICtrl.removeLoader();
                    UICtrl.removeElement(grab(selector.overlay));
                    // Adjust UI display
                    selector.createQuizWrapper.classList.toggle('is-clipped');
                    // Show error message
                    UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        grab(selector.errorOverlay).remove();
                        // Start mode is active
                        grab('body').setAttribute('data-screen', '');
                        // Adjust UI display
                        selector.mainSectionWrapper.classList.toggle('hidden-options');
                        selector.createQuizWrapper.classList.toggle('hidden-options');
                        setTimeout(() => {
                            selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                            // set tabindex="-1"
                            UICtrl.addTabindex('create-tabindex');
                            // reset form
                            selector.createQuizForm.reset();
                            selector.createQuizForm["quiz-select"].value = '';
                            // disable submit btn
                            if (!selector.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                                selector.createQuizForm["quiz-generate"].classList.add('disabled');
                            }
                            // Remove rendered UI components
                            grab(selector.createQuizBackBtn).parentElement.remove();
                            grab('.main-create-quiz-header').remove();
                            if (grab(selector.formCreateQuizSubmitFeedback) !== null) {
                                grab(selector.formCreateQuizSubmitFeedback).remove();
                            }
                            // Enable options
                            selector.burger.classList.remove('disabled');
                            // Adjust UI display
                            selector.createQuizWrapper.classList.toggle('is-clipped');
                        }, 600);
                    }, 2000);
                } else if (screen === 'quiz-confirmation') {
                    // Show message overlay
                    UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        grab(selector.errorOverlay).remove();
                        // Adjust UI display
                        selector.generateConfirmation.firstElementChild.firstElementChild.classList.remove('start-loader');
                        setTimeout(() => {
                            selector.generateConfirmation.classList.add('hidden-options');
                            // Adjust UI display
                            selector.createQuizWrapper.classList.toggle('is-clipped');
                            // Unlock input fields & submit btn
                            form["quiz-name"].removeAttribute("readonly");
                            form["quiz-type"].removeAttribute("disabled");
                            form["quiz-answers"].removeAttribute("readonly");
                            form["quiz-questions"].removeAttribute("readonly");
                            form["quiz-generate"].classList.remove("disabled");
                            // Enable options
                            selector.burger.classList.remove('disabled');
                            // Start mode is active
                            grab('body').setAttribute('data-screen', '');
                            // Adjust UI display
                            selector.mainSectionWrapper.classList.toggle('hidden-options');
                            selector.createQuizWrapper.classList.toggle('hidden-options');
                            setTimeout(() => {
                                selector.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                                // set tabindex="-1"
                                UICtrl.addTabindex('create-tabindex');
                                // reset form
                                selector.createQuizForm.reset();
                                selector.createQuizForm["quiz-select"].value = '';
                                // disable submit btn
                                if (!selector.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                                    selector.createQuizForm["quiz-generate"].classList.add('disabled');
                                }
                                // Remove rendered UI components
                                grab(selector.createQuizBackBtn).parentElement.remove();
                                grab('.main-create-quiz-header').remove();
                                if (grab(selector.formCreateQuizSubmitFeedback) !== null) {
                                    grab(selector.formCreateQuizSubmitFeedback).remove();
                                }
                            }, 600);
                        }, 600);
                    }, 2000);
                }
            }
        });
    } else {
        // Show message overlay
        UICtrl.createErrorDiv('Specify quiz parameters!');
        setTimeout(() => {
            grab(selector.errorOverlay).remove();
        }, 2000);
    }
});
// export default UICtrl;