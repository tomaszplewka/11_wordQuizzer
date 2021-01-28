// 
// UI Controller
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
        let divRegister = createBtn('side-btn', 'front-page-register-btn', 'register', 'is-flex is-justify-content-flex-end');
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
        span.innerHTML = `<img src="./assets/imgs/hint.png" alt="input hints" class="input-hint">`;
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
                <img src="./assets/imgs/logo-main.png" alt="">
            </div>
            <div class="face logo-dimensions top">
                <img src="./assets/imgs/logo-main.png" alt="">
            </div>
            <div class="face logo-dimensions left">
                <img src="./assets/imgs/logo-main.png" alt="">
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
            <form action="./logout.php" method="POST" id="logout-form">
                <button type="submit" name="yes" class="btn btn-invert mx-3">
                    <span>yes</span>
                </button>
            </form>
        </div>
        `;
        return li;
    };
    const renderQuizzes = function(page, data) {
        let howMany = 3;
        if (window.screen.height > 1050) {
            howMany = 7;
        } else if (window.screen.height > 900) {
            howMany = 6;
        } else if (window.screen.height > 750) {
            howMany = 5;
        } else if (window.screen.height > 600) {
            howMany = 4;
        }
        let html = '';
        const quizStart = 0 + (page - 1) * howMany;
        const quizEnd = howMany + (page - 1) * howMany;
        // Get total number of pages
        const pages = Math.ceil(data.length / howMany);
        if (pages) {
            // Create quizzes
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
                <div data-id="${quizID}" id ="" class="more-info-wrapper scaleY background-corn-gradient columns is-mobile m-0 has-text-centered p-5 is-flex is-flex-direction-column is-justify-content-start" >
                    <div class="is-flex is-justify-content-start column is-12-mobile is-12 p-0" >
                        <a id="" class="control-btn more-info-back-btn" >
                            <span class="">go back</span>
                        </a>
                    </div>
                    <div class="column is-12-mobile is-12 p-0 my-5" >
                        <div class="more-info-quiz-info columns is-mobile m-0 is-vcentered is-flex is-flex-direction-column is-justify-content-center" >
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
                <img src="./assets/imgs/logo-browse.png" alt="browse logo">
            </div>
            <div class="db-disc-middle">
                <img src="./assets/imgs/logo-browse.png" alt="browse logo">
            </div>
            <div class="db-disc-bottom">
                <img src="./assets/imgs/logo-browse.png" alt="browse logo">
            </div>
        </div>
        `;
    };
    const createCreateQuizLogo = function() {
        return `
        <div class="box-floating logo-dimensions" id="">
            <div class="create-quiz-logo">
                <img src="./assets/imgs/logo-create-quiz.png" alt="">
            </div>
        </div>
        `;
    };
    const generateQuizConfirmation = function() {
        UISelectors.generateConfirmation.innerHTML = `
        <div class="column is-12-mobile is-12 p-0 m-0">
            <div class="" id="generate-quiz-loader">
                <img src="./assets/imgs/logo-main.png" alt="">
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
    // UI display controller functions
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
    return {
        UISelectors,
        createHeader,
        createDiv,
        createBtn,
        createMainBtns,
        createBrowseOptions,
        createQuizNavigation,
        createDataFeedback,
        createFormConfirmation,
        createLoader,
        removeLoader,
        createOption,
        createQuizQuitConfirmation,
        createHintIcon,
        removeElement,
        createSubmitBtn,
        createErrorDiv,
        appendAnswer,
        createSubmitFeedback,
        createHintContent,
        createLogOutConfirmation,
        renderQuizzes,
        createAnswer,
        createQuestion,
        createQuestionFeedback,
        createQuizResults,
        generateQuizConfirmation,
        loadStartScreen,
        loadLoggedInScreen
    };
})();
export default UICtrl;