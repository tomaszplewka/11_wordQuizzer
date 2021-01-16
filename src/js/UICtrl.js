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
        registerForm: '#register-form',
        registerFeedback: document.querySelector('#register-feedback-wrapper'),
        registerForm: document.querySelector('#register-form')
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
    const createHeader = function(text) {
        let h = document.createElement('h2');
        h.className = 'is-size-1 is-uppercase form-header';
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
    const createFeedback = function(inputArr) {
        const goBack = goBackBtn('feedback-back-btn');
        const feedbackHeader = `
        <div class="feedback-header">
            <h2 class="is-size-1 form-header">FEEDBACK</h2>
        </div>
        `;
        const feedbackBody = createDiv('feedback-body mb-5');
        // Add error/ok wrappers in a loop based on inputArr
        UISelectors.registerFeedback.appendChild(goBack);
        UISelectors.registerFeedback.appendChild(feedbackHeader);
        UISelectors.registerFeedback.appendChild(feedbackBody);
    };
    const createFormConfirmation = function() {
        let div = createDiv('registration-confirmation is-flex is-justify-content-center is-align-items-center hidden-options background-mountain-meadow', 'registration-confirmation');
        let p = createPara('registration-cofirmation-text text-ghost-white p-2');
        let html = `
        User <span class="registration-cofirmation-user text-smoky-black"></span> has been registered.
        `;
        p.innerHTML = html;
        div.appendChild(p);
        UISelectors.registerForm.firstElementChild.appendChild(div);
    };
    const createInputWrapper = function() {
        
    };
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
    // 
    // This one should go to DataCtrl
    const patterns = {
        usernamePattern: /^(\w+( \w+)*){6,20}$/,
        emailPattern: /^([a-zA-Z]{1}[\w\.]{0,20})@([a-zA-Z]{2,15})\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/,
        // passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?!.*[\s])(?=.{8,})/,
        passwordPattern: /^[a-zA-Z]{4,}$/
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
        createMainBtns,
        removeTabindex,
        addTabindex,
        goBackBtn,
        createHeader
    };
})();
UICtrl.init();
// Load event listeners (AppCtrl)
document.addEventListener('click', e => {
    const grab = document.querySelector.bind(document);
    const selector = UICtrl.UISelectors;
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
            selector.registerFeedback.after(UICtrl.createHeader('sign up'));
            // Adjust UI display
            selector.mainSectionWrapper.classList.toggle('hidden-options');
            selector.registerWrapper.classList.toggle('hidden-options');
            // remove tabindex="-1"
            // UICtrl.removeTabindex('register-tabindex');
            // // set focus on first input -- consider autofocus on html element
            // setTimeout(() => {
            //     grab(selector.registerForm).username.focus();
            // }, 500);
        }, 600);
    }
});





// export default UICtrl;