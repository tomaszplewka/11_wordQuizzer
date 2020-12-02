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