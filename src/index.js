import UICtrl from './js/UICtrl';
import DataCtrl from './js/DataCtrl';
import ApiCtrl from './js/ApiCtrl';
// 
// App Controller
// 
const AppCtrl = (function(UICtrl, DataCtrl, ApiCtrl) {
    // Selectors
    const UISelectors = UICtrl.UISelectors;
    // Global vars
    const global = {
        quizzes: [],
        index: 0,
        questions: [],
        answers: [],
        correctAnswers: [],
        value: []
    };
    const grab = document.querySelector.bind(document);
    const loadEventListeners = function() {
        document.addEventListener('click', e => {
            // StartBtn clicked
            if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.startBtn) || (`#${e.target.id}` === UISelectors.startBtn)) {
                // Swtich animating logo to static image
                grab(UISelectors.mainLogo).classList.add('loader-wrapper');
                grab(UISelectors.mainLogoFaceFront).classList.add('loader-face-front');
                grab(UISelectors.mainLogoFaceTop).classList.add('loader-face-top');
                grab(UISelectors.mainLogoFaceLeft).classList.add('loader-face-left');
                // Hide startBtn
                grab(UISelectors.startBtn).classList.add('button-dissapear');
                setTimeout(() => {
                    // Switch animating logo to static image
                    grab(UISelectors.mainLogoFaceFront).classList.add('strip-background-border');
                    grab(UISelectors.mainLogoFaceTop).classList.add('strip-background-border');
                    grab(UISelectors.mainLogoFaceLeft).classList.add('strip-background-border');
                    setTimeout(() => {
                        grab(UISelectors.mainLogo).parentElement.classList.add('logo-enlarge');
                        setTimeout(() => {
                            // Show demo, login & register btns
                            UISelectors.mainSectionWrapper.firstElementChild.lastElementChild.appendChild(UICtrl.createMainBtns());
                        }, 500);
                    }, 250);
                }, 750);
            }
            // RegisterBtn clicked
            if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.registerBtn) || (`#${e.target.id}` === UISelectors.registerBtn)) {
                // Hide main section
                UISelectors.mainSectionWrapper.firstElementChild.classList.add('shrink');
                // Show register section
                setTimeout(() => {
                    // Render UI elements
                    UISelectors.registerFeedback.before(UICtrl.createBtn('control-btn', 'register-back-btn', 'go back', 'is-flex is-justify-content-start'));
                    UISelectors.registerFeedback.after(UICtrl.createHeader('sign up', 'main-register-header'));
                    UICtrl.createHintIcon();
                    UICtrl.createHintContent();
                    // Adjust UI display
                    UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                    UISelectors.registerWrapper.classList.toggle('hidden-options');
                    // remove tabindex="-1"
                    DataCtrl.removeTabindex('register-tabindex');
                    // set focus on first input
                    setTimeout(() => {
                        UISelectors.registerForm.username.focus();
                    }, 500);
                }, 600);
            }
            // RegisterBackBtn clicked
            if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.registerBackBtn) || (`#${e.target.id}` === UISelectors.registerBackBtn)) {
                UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                UISelectors.registerWrapper.classList.toggle('hidden-options');
                // 
                setTimeout(() => {
                    UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                    // set tabindex="-1"
                    DataCtrl.addTabindex('register-tabindex');
                    // reset form
                    DataCtrl.resetForm('register');
                    // Remove rendered UI components
                    grab(UISelectors.registerBackBtn).parentElement.remove();
                    grab('.main-register-header').remove();
                    if (grab(UISelectors.formRegisterSubmitFeedback) !== null) {
                        grab(UISelectors.formRegisterSubmitFeedback).remove();
                    }
                    grab(UISelectors.inputHint).parentElement.remove();
                    UISelectors.hintWrapper.innerHTML = '';
                    UISelectors.registerFeedback.innerHTML = '';
                }, 600);
            }
            // HintBtn clicked
            if (e.target.classList.contains('input-hint')) {
                UISelectors.registerWrapper.scrollTop = 0;
                // if (!UISelectors.registerWrapper.classList.contains('is-clipped')) {
                //     UISelectors.registerWrapper.classList.toggle('is-clipped');
                // };
                UISelectors.hintWrapper.classList.toggle('hidden-options');
            }
            // FeedbackBackBtn clicked
            if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.feedbackBackBtn) || (`#${e.target.id}` === UISelectors.feedbackBackBtn)) {
                grab(UISelectors.feedbackBackBtn).parentElement.parentElement.classList.toggle('hidden-options');
                if (grab(UISelectors.submitFeedbackError).parentElement.parentElement.id.includes('login')) {
                    UISelectors.loginWrapper.classList.toggle('is-clipped');
                } else if(grab(UISelectors.submitFeedbackError).parentElement.parentElement.id.includes('create-quiz')) {
                    UISelectors.createQuizWrapper.classList.toggle('is-clipped');
                    // Create mode is active
                    grab('body').setAttribute('data-screen', 'create');
                } else {
                    UISelectors.registerWrapper.classList.toggle('is-clipped');
                }
            }
            // submitFeedbackError clicked
            if (e.target.classList.contains(UISelectors.submitFeedbackError.substring(1)) || e.target.parentElement.classList.contains(UISelectors.submitFeedbackError.substring(1)) || e.target.parentElement.parentElement.classList.contains(UISelectors.submitFeedbackError.substring(1))) {
                if (grab(UISelectors.submitFeedbackError).parentElement.parentElement.id.includes('login')) {
                    UISelectors.loginWrapper.scrollTop = 0;
                    UISelectors.loginWrapper.classList.toggle('is-clipped');
                    UISelectors.loginFeedback.classList.toggle('hidden-options');
                } else if(grab(UISelectors.submitFeedbackError).parentElement.parentElement.id.includes('create-quiz')) {
                    UISelectors.createQuizWrapper.scrollTop = 0;
                    UISelectors.createQuizWrapper.classList.toggle('is-clipped');
                    UISelectors.createQuizFeedback.classList.toggle('hidden-options');
                    // Feedback mode is active
                    grab('body').setAttribute('data-screen', 'feedback');
                } else {
                    UISelectors.registerWrapper.scrollTop = 0;
                    UISelectors.registerWrapper.classList.toggle('is-clipped');
                    UISelectors.registerFeedback.classList.toggle('hidden-options');
                }
            }
            // LoginBtn clicked
            if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.loginBtn) || (`#${e.target.id}` === UISelectors.loginBtn)) {
                UISelectors.mainSectionWrapper.firstElementChild.classList.add('shrink');
                setTimeout(() => {
                    // Render UI elements
                    UISelectors.loginFeedback.before(UICtrl.createBtn('control-btn', 'login-back-btn', 'go back', 'is-flex is-justify-content-start'));
                    UISelectors.loginFeedback.after(UICtrl.createHeader('login', 'main-login-header'));
                    // Adjust UI display
                    UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                    UISelectors.loginWrapper.classList.toggle('hidden-options');
                    // remove tabindex="-1"
                    DataCtrl.removeTabindex('login-tabindex');
                    // set focus on first input
                    setTimeout(() => {
                        UISelectors.loginForm.email.focus();
                    }, 500);
                }, 600);
            }
            // LoginBackBtn clicked
            if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.loginBackBtn) || (`#${e.target.id}` === UISelectors.loginBackBtn)) {
                UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                UISelectors.loginWrapper.classList.toggle('hidden-options');
                // 
                setTimeout(() => {
                    UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                    // set tabindex="-1"
                    DataCtrl.addTabindex('register-tabindex');
                    // reset form
                    DataCtrl.resetForm('login');
                    // Remove rendered UI components
                    grab(UISelectors.loginBackBtn).parentElement.remove();
                    grab('.main-login-header').remove();
                    if (grab(UISelectors.formLoginSubmitFeedback) !== null) {
                        grab(UISelectors.formLoginSubmitFeedback).remove();
                    }
                    UISelectors.loginFeedback.innerHTML = '';
                }, 600);
            }
            // Burger clicked
            if ((e.target.tagName === 'SPAN' && e.target.id === UISelectors.burger.id) || (e.target.tagName === 'svg' && e.target.parentElement.id === UISelectors.burger.id) || (e.target.tagName === 'path' && e.target.parentElement.parentElement.id === UISelectors.burger.id)) {
                UISelectors.burger.classList.toggle('hide');
                UISelectors.times.classList.toggle('hide');
                UISelectors.options.classList.toggle('hidden-options');
            }
            // Times clicked
            if ((e.target.tagName === 'SPAN' && e.target.id === UISelectors.times.id) || (e.target.tagName === 'svg' && e.target.parentElement.id === UISelectors.times.id) || (e.target.tagName === 'path' && e.target.parentElement.parentElement.id === UISelectors.times.id)) {
                UISelectors.burger.classList.toggle('hide');
                UISelectors.times.classList.toggle('hide');
                UISelectors.options.classList.toggle('hidden-options');
                if (UISelectors.options.classList.contains('options-welcome') && grab('body').getAttribute('data-id') !== 'demo-mode') {
                    if (!grab(UISelectors.logOutConfirmation).classList.contains('hidden-options')) {
                        grab(UISelectors.logOutConfirmation).classList.toggle('hidden-options');
                    }
                }
            }
            // DemoBtn clicked
            if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.demoBtn) || (`#${e.target.id}` === UISelectors.demoBtn) || (e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.browseBtn) || (`#${e.target.id}` === UISelectors.browseBtn)) {
                let id;
                if (e.target.tagName === 'SPAN') {
                    id = e.target.parentElement.id;
                } else {
                    id = e.target.id;
                }
                // Render UI display
                UISelectors.filterWrapper.before(UICtrl.createBrowseOptions());
                // Include these when filter btn is clicked
                UISelectors.filterForm.before(UICtrl.createBtn('control-btn', 'filter-back-btn', 'go back', 'is-flex is-justify-content-start'));
                UISelectors.filterForm.before(UICtrl.createHeader('filter', 'main-filter-header'));
                // Include these when search btn is clicked
                UISelectors.searchForm.before(UICtrl.createBtn('control-btn', 'search-back-btn', 'go back', 'is-flex is-justify-content-start'));
                UISelectors.searchForm.before(UICtrl.createHeader('search', 'main-search-header'));
                // Hide main section
                UISelectors.mainSectionWrapper.firstElementChild.classList.add('shrink');
                // Render data using JS
                UICtrl.renderQuizzes(1, global.quizzes);
                setTimeout(() => {
                    UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                    // Show browse section
                    UISelectors.browseWrapper.classList.toggle('hidden-options');
                    setTimeout(() => {
                        document.querySelector('#front-page-footer').classList.add('hidden-options');
                    }, 500);
                }, 500);
                if (`#${id}` === UISelectors.demoBtn) {
                    // Demo mode is active
                    grab('body').setAttribute('data-id', 'demo-mode');
                    UISelectors.options.classList.add('options-welcome');
                }
                // Browse mode is active
                grab('body').setAttribute('data-screen', 'browse');
            }
            // BrowseBackBtn clicked
            if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.browseBackBtn) || (`#${e.target.id}` === UISelectors.browseBackBtn)) {
                const dataId = grab('body').getAttribute('data-id');
                if (dataId === 'demo-mode') {
                    // Hide browse section
                    document.querySelector('#front-page-footer').classList.remove('hidden-options');
                    grab('body').setAttribute('data-id', '');
                    UISelectors.options.classList.remove('options-welcome');
                }
                UISelectors.browseWrapper.classList.toggle('hidden-options');
                // Show main section
                setTimeout(() => {
                    UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                    setTimeout(() => {
                        UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                        // Reset mode
                        grab('body').setAttribute('data-id', '');
                        // Remove UI components
                        UISelectors.browseWrapper.firstElementChild.remove();
                        UISelectors.filterWrapper.firstElementChild.remove();
                        UISelectors.filterWrapper.firstElementChild.remove();
                        UISelectors.searchWrapper.firstElementChild.remove();
                        UISelectors.searchWrapper.firstElementChild.remove();
                    }, 500);
                }, 350);
                // Start mode is active
                grab('body').setAttribute('data-screen', '');
            }
            // More info btn clicked
            if ((e.target.tagName === 'SPAN' && e.target.parentElement.classList.contains(UISelectors.moreInfoBtn.slice(1))) || (e.target.classList.contains(UISelectors.moreInfoBtn.slice(1)) && e.target.tagName === 'A')) {
                // Get quiz id
                let quizID = '';
                if (e.target.tagName === 'SPAN') {
                    quizID = e.target.parentElement.parentElement.parentElement.parentElement.id;
                } else {
                    quizID = e.target.parentElement.parentElement.parentElement.id;
                }
                UISelectors.browseWrapper.scrollTop = 0;
                UISelectors.browseWrapper.classList.toggle('is-clipped');
                // Show appropriate div with more info
                const divMoreInfo = document.querySelector(`div[data-id="${quizID}"]`);
                divMoreInfo.classList.remove('scaleY');
                divMoreInfo.classList.add('active');
                // More info mode is active
                grab('body').setAttribute('data-screen', 'more-info');
            }
            // Back btn on more info wrapper clicked
            if ((e.target.tagName === 'SPAN' && e.target.parentElement.classList.contains(UISelectors.moreInfoBackBtn.slice(1))) || (e.target.classList.contains(UISelectors.moreInfoBackBtn.slice(1)) && e.target.tagName === 'A')) {
                // Get quiz id
                let quizID = '';
                if (e.target.tagName === 'SPAN') {
                    quizID = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
                } else {
                    quizID = e.target.parentElement.parentElement.getAttribute('data-id');
                }
                UISelectors.browseWrapper.classList.toggle('is-clipped');
                // Hide appropriate div with more info
                const divMoreInfo = document.querySelector(`div[data-id="${quizID}"]`);
                divMoreInfo.classList.add('scaleY');
                divMoreInfo.classList.remove('active');
                // Browse mode is active
                grab('body').setAttribute('data-screen', 'browse');
            }
            // FilterBtn clicked
            // if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.filterBtn) || (`#${e.target.id}` === UISelectors.filterBtn) || (e.target.tagName === 'svg' && `#${e.target.parentElement.parentElement.id}` === UISelectors.filterBtn) || (e.target.tagName === 'path' && `#${e.target.parentElement.parentElement.parentElement.id}` === UISelectors.filterBtn)) {
            //     UISelectors.filterWrapper.classList.remove('scaleY');
            //     // Filter mode is active
            //     grab('body').setAttribute('data-screen', 'filter');
            // }
            // FilterBackBtn clicked
            // if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.filterBackBtn) || (`#${e.target.id}` === UISelectors.filterBackBtn)) {
            //     UISelectors.filterWrapper.classList.add('scaleY');
            //     // Browse mode is active
            //     grab('body').setAttribute('data-screen', 'browse');
            // }
            // SearchBtn clicked
            // if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.searchBtn) || (`#${e.target.id}` === UISelectors.searchBtn) || (e.target.tagName === 'svg' && `#${e.target.parentElement.parentElement.id}` === UISelectors.searchBtn) || (e.target.tagName === 'path' && `#${e.target.parentElement.parentElement.parentElement.id}` === UISelectors.searchBtn)) {
            //     UISelectors.searchWrapper.classList.remove('scaleY');
            //     // Search mode is active
            //     grab('body').setAttribute('data-screen', 'search');
            // }
            // SearchBackBtn clicked
            // if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.searchBackBtn) || (`#${e.target.id}` === UISelectors.searchBackBtn)) {
            //     UISelectors.searchWrapper.classList.add('scaleY');
            //     // Browse mode is active
            //     grab('body').setAttribute('data-screen', 'browse');
            // }
            // Browse quiz next
            if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === UISelectors.browseNextQuizzes.id) || (e.target.id === UISelectors.browseNextQuizzes.id && e.target.tagName === 'A')) {
                const page = parseInt(UISelectors.quizWrapper.getAttribute('data-page'));
                UICtrl.renderQuizzes(page + 1, global.quizzes);
            }
            // Browse quiz previous
            if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === UISelectors.browsePreviousQuizzes.id) || (e.target.id === UISelectors.browsePreviousQuizzes.id && e.target.tagName === 'A')) {
                const page = parseInt(UISelectors.quizWrapper.getAttribute('data-page'));
                UICtrl.renderQuizzes(page - 1, global.quizzes);
            }
            // Play btn clicked
            if ((e.target.tagName === 'SPAN' && e.target.parentElement.classList.contains(UISelectors.playBtn.slice(1))) || (e.target.classList.contains(UISelectors.playBtn.slice(1)) && e.target.tagName === 'A')) {
                // Quiz mode is active
                grab('body').setAttribute('data-screen', 'quiz');
                // Show loader
                UISelectors.browseWrapper.appendChild(UICtrl.createDiv(UISelectors.overlay.slice(1)));
                UICtrl.createLoader(grab(UISelectors.overlay));
                // Get quiz id
                let quizID;
                if (e.target.tagName === 'SPAN') {
                    quizID = e.target.parentElement.parentElement.parentElement.parentElement.id;
                } else {
                    quizID = e.target.parentElement.parentElement.parentElement.id;
                }
                // Assign ID to quizForm
                UISelectors.quizForm.setAttribute('data-id', quizID);
                // Get true quiz ID
                let ID = '';
                global.quizzes.some(quiz => {
                    if (quiz.quiz_id === quizID) {
                        ID = quiz.quiz_name;
                        return true;
                    }
                });
                const data = { ID };
                // Disable options
                UISelectors.burger.classList.add('disabled');
                // Fetch quiz
                fetch("./fetchQsAs.php", {
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
                            UICtrl.removeElement(grab(UISelectors.overlay));
                            UISelectors.quizViewWrapper.classList.toggle('hidden-options');
                            // Render UI
                            UICtrl.createQuizNavigation();
                            UICtrl.createQuizQuitConfirmation();
                            // Assign quizID to hidden input
                            UISelectors.quizForm["quiz-id"].value = quizID;
                            // Render question
                            const questions = data.questions.fields;
                            const questionID = questions[global.index]["question_ID"];
                            UICtrl.createQuestion(UISelectors.quizQuestion, questions[global.index]["question"]);
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
                            global.index++;
                            // Shuffle answers
                            DataCtrl.shuffleArray(currAnswers);
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
                            UICtrl.appendAnswer(aHtml, UISelectors.quizForm.lastElementChild);
                            // Update question number
                            grab(UISelectors.qNumber).lastElementChild.textContent = questions.length;
                            // Enable options
                            UISelectors.burger.classList.remove('disabled');
                            // Set global vars
                            global.questions = questions;
                            global.answers = answers;
                            global.correctAnswers = correctAnswers;
                        }, 1000);
                    } else {
                        // User not logged in
                        // Hide loader
                        UICtrl.removeLoader();
                        UICtrl.removeElement(grab(UISelectors.overlay));
                        // Show message overlay
                        UICtrl.createErrorDiv('You are not authorized. Log in first.');
                        setTimeout(() => {
                            grab(UISelectors.errorOverlay).remove();
                            // Adjust UI display
                            document.querySelector('#front-page-footer').classList.remove('hidden-options');
                            UISelectors.browseWrapper.classList.toggle('hidden-options');
                            setTimeout(() => {
                                UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                                setTimeout(() => {
                                    UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                                    // Enable options
                                    UISelectors.burger.classList.remove('disabled');
                                    // Reset mode
                                    grab('body').setAttribute('data-id', '');
                                    // Remove UI components
                                    UISelectors.browseWrapper.firstElementChild.remove();
                                    UISelectors.filterWrapper.firstElementChild.remove();
                                    UISelectors.filterWrapper.firstElementChild.remove();
                                    UISelectors.searchWrapper.firstElementChild.remove();
                                    UISelectors.searchWrapper.firstElementChild.remove();
                                }, 500);
                            }, 350);
                        }, 2000);
                    }
                })
                .catch(error => {
                    // Hide loader
                    UICtrl.removeLoader();
                    UICtrl.removeElement(grab(UISelectors.overlay));
                    // Show message overlay
                    UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        grab(UISelectors.errorOverlay).remove();
                        // Adjust UI display
                        document.querySelector('#front-page-footer').classList.remove('hidden-options');
                        UISelectors.browseWrapper.classList.toggle('hidden-options');
                        setTimeout(() => {
                            UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                            setTimeout(() => {
                                UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                                // Enable options
                                UISelectors.burger.classList.remove('disabled');
                                // Reset mode
                                grab('body').setAttribute('data-id', '');
                                // Remove UI components
                                UISelectors.browseWrapper.firstElementChild.remove();
                                UISelectors.filterWrapper.firstElementChild.remove();
                                UISelectors.filterWrapper.firstElementChild.remove();
                                UISelectors.searchWrapper.firstElementChild.remove();
                                UISelectors.searchWrapper.firstElementChild.remove();
                            }, 500);
                        }, 350);
                    }, 2000);
                });
            }
            // Next btn clicked
            if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === UISelectors.nextBtn.slice(1)) || (e.target.id === UISelectors.nextBtn.slice(1) && e.target.tagName === 'A')) {
                if ((global.index + 1) === global.questions.length) {
                    grab(UISelectors.nextBtn).after(UICtrl.createSubmitBtn());
                    grab(UISelectors.nextBtn).remove();
                    grab(UISelectors.quizSubmitBtn).style.display = 'flex';
                }
                if (!grab(UISelectors.quitConfirmationWrapper).classList.contains('hidden-options')) {
                    grab(UISelectors.quitConfirmationWrapper).classList.toggle('hidden-options');
                }
                // Check if radio button is checked
                const currName = global.questions[global.index - 1].question_ID;
                const target = [...UISelectors.quizForm[currName]].filter(r => r.checked)[0];
                if (target !== undefined) {
                    // Update user answers
                    global.value.push(target.value);
                    // Update question number
                    grab(UISelectors.qNumber).firstElementChild.textContent = (global.index + 1);
                    // Render new question
                    UISelectors.quizForm.lastElementChild.lastElementChild.classList.add('hidden-options');
                    const questions = global.questions;
                    const questionID = questions[global.index]["question_ID"];
                    UICtrl.createQuestion(UISelectors.quizQuestion, questions[global.index]["question"]);
                    // Render answers
                    let currAnswers = [];
                    global.answers.forEach(answer => {
                        if (answer.question_ID === questionID) {
                            currAnswers.push({
                                answer: answer.answer,
                                a_ID: answer.answer_ID,
                                q_ID: answer.question_ID,
                                is_correct: answer.is_correct === "1"
                            });
                        }
                    });
                    global.index++;
                    // Shuffle answers
                    DataCtrl.shuffleArray(currAnswers);
                    // Assign correct answer
                    let aHtml = '';
                    currAnswers.forEach((currAnswer, index) => {
                        if (currAnswer.is_correct) {
                            global.correctAnswers.push(index);
                        }
                        aHtml += UICtrl.createAnswer(currAnswer, index);
                    });
                    // Append answer
                    UICtrl.appendAnswer(aHtml, UISelectors.quizForm.lastElementChild);
                } else {
                    // Show message overlay
                    UICtrl.createErrorDiv('You need to pick your answer!');
                    setTimeout(() => {
                        grab(UISelectors.errorOverlay).remove();
                    }, 2000);
                }
            }
            // Quit btn clicked
            if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === UISelectors.quitBtn.slice(1)) || (e.target.id === UISelectors.quitBtn.slice(1) && e.target.tagName === 'A')) {
                // Adjust UI display
                grab(UISelectors.quitConfirmationWrapper).classList.toggle('hidden-options');
            }
            if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === UISelectors.quitYes.slice(1)) || (e.target.id === UISelectors.quitYes.slice(1) && e.target.tagName === 'A')) {
                // Browse mode is active
                grab('body').setAttribute('data-screen', 'browse');
                // Reset global vars
                global.index = 0,
                global.questions = [],
                global.answers = [],
                global.correctAnswers = [],
                global.value = [],
                // Adjust UI display
                grab(UISelectors.quitConfirmationWrapper).classList.toggle('hidden-options');
                setTimeout(() => {
                    UISelectors.quizViewWrapper.classList.toggle('hidden-options');
                    setTimeout(() => {
                        if (grab(UISelectors.quizResults) !== null) {
                            grab(UISelectors.quizResults).classList.add('hidden-options');
                        }
                        UISelectors.quizContent.classList.remove('hidden-options');
                        // Remove UI components
                        grab(UISelectors.quitBtn).parentElement.remove();
                        grab(UISelectors.quitConfirmationWrapper).remove();
                        if (grab(UISelectors.quizResults) !== null) {
                            grab(UISelectors.quizResults).remove();
                        }
                        UISelectors.quizForm.lastElementChild.innerHTML = '';
                        UISelectors.quizContent.firstElementChild.firstElementChild.innerHTML = '';
                    }, 500);
                }, 500);
            }
            // RetryBtn clicked
            if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === UISelectors.quizRetryBtn.slice(1)) || (e.target.id === UISelectors.quizRetryBtn.slice(1) && e.target.tagName === 'A')) {
                // Hide quit confirmation
                if (!grab(UISelectors.quitConfirmationWrapper).classList.contains('hidden-options')) {
                    grab(UISelectors.quitConfirmationWrapper).classList.toggle('hidden-options');
                }
                // Show loader
                UISelectors.quizViewWrapper.appendChild(UICtrl.createDiv(UISelectors.overlay.slice(1)));
                UICtrl.createLoader(grab(UISelectors.overlay));
                // Reset global vars
                global.index = 0,
                global.correctAnswers = [],
                global.value = [],
                // Adjust UI display
                setTimeout(() => {
                    // Hide loader
                    UICtrl.removeLoader();
                    UICtrl.removeElement(grab(UISelectors.overlay));
                    // Adjust UI display
                    grab(UISelectors.quizResults).classList.add('hidden-options');
                    UISelectors.quizContent.classList.remove('hidden-options');
                    UISelectors.quizForm.lastElementChild.innerHTML = '';
                    UISelectors.quizContent.firstElementChild.firstElementChild.firstElementChild.innerHTML = '';
                    grab(UISelectors.qNumber).style.opacity = 1;
                    grab(UISelectors.qNumber).firstElementChild.textContent = 1;
                    grab(UISelectors.quizRetryBtn).before(UICtrl.createBtn('control-btn', 'quiz-next-btn', 'next'));
                    grab(UISelectors.quizRetryBtn).remove();
                    grab(UISelectors.nextBtn).style.display = 'flex';
                    // Output question
                    const questions = global.questions;
                    const questionID = questions[global.index]["question_ID"];
                    UICtrl.createQuestion(UISelectors.quizQuestion, questions[global.index]["question"]);
                    // Insert answers
                    let currAnswers = [];
                    global.answers.forEach(answer => {
                        if (answer.question_ID === questionID) {
                            currAnswers.push({
                                answer: answer.answer,
                                a_ID: answer.answer_ID,
                                q_ID: answer.question_ID,
                                is_correct: answer.is_correct === "1"
                            });
                        }
                    });
                    global.index++;
                    // Shuffle answers
                    DataCtrl.shuffleArray(currAnswers);
                    // Reset corrent answer
                    let aHtml = '';
                    currAnswers.forEach((currAnswer, index) => {
                        if (currAnswer.is_correct) {
                            global.correctAnswers.push(index);
                        }
                        aHtml += UICtrl.createAnswer(currAnswer, index);
                    });
                    // Append answer
                    UICtrl.appendAnswer(aHtml, UISelectors.quizForm.lastElementChild);
                    // Update question number
                    grab(UISelectors.qNumber).lastElementChild.textContent = global.questions.length;
                }, 1000);
            }
            // CreateQuizBtn clicked
            if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === UISelectors.createQuizBtn.slice(1)) || (e.target.id === UISelectors.createQuizBtn.slice(1) && e.target.tagName === 'A')) {
                // Create mode is active
                grab('body').setAttribute('data-screen', 'create');
                // Hide main section
                UISelectors.mainSectionWrapper.firstElementChild.classList.add('shrink');
                setTimeout(() => {
                    // Render UI elements
                    UISelectors.createQuizForm.before(UICtrl.createBtn('control-btn', 'create-quiz-back-btn', 'go back', 'is-flex is-justify-content-start'));
                    UISelectors.createQuizForm.before(UICtrl.createHeader('create quiz', 'main-create-quiz-header'));
                    UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                    // Show create quiz section
                    UISelectors.createQuizWrapper.classList.toggle('hidden-options');
                    setTimeout(() => {
                        // Set focus on first input
                        UISelectors.createQuizForm['quiz-name'].focus();
                    }, 500);
                }, 600);
            }
            // CreateQuizBackBtn clicked
            if ((e.target.tagName === 'SPAN' && `#${e.target.parentElement.id}` === UISelectors.createQuizBackBtn) || (`#${e.target.id}` === UISelectors.createQuizBackBtn)) {
                // Start mode is active
                grab('body').setAttribute('data-screen', '');
                // Adjust UI display
                UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                UISelectors.createQuizWrapper.classList.toggle('hidden-options');
                setTimeout(() => {
                    UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                    // set tabindex="-1"
                    DataCtrl.addTabindex('create-tabindex');
                    // reset form
                    UISelectors.createQuizForm.reset();
                    UISelectors.createQuizForm["quiz-select"].value = '';
                    // Strip validation classes
                    DataCtrl.stripValidation(["quiz-name", "quiz-type", "quiz-questions", "quiz-answers"]);
                    // disable submit btn
                    if (!UISelectors.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                        UISelectors.createQuizForm["quiz-generate"].classList.add('disabled');
                    }
                    // Remove rendered UI components
                    grab(UISelectors.createQuizBackBtn).parentElement.remove();
                    grab('.main-create-quiz-header').remove();
                    if (grab(UISelectors.formCreateQuizSubmitFeedback) !== null) {
                        grab(UISelectors.formCreateQuizSubmitFeedback).remove();
                    }
                }, 600);
            }
            // Decrement & Increment Btns
            if (e.target.classList.contains('increment')) {
                if (!(Number(e.target.previousElementSibling.value) >= Number(e.target.previousElementSibling.max))) {
                    e.target.previousElementSibling.value++;
                    DataCtrl.checkIfEmptyQuiz();
                }
                // Prevent default
                e.preventDefault();
            }
            if (e.target.classList.contains('decrement')) {
                if ((Number(e.target.nextElementSibling.value) > Number(e.target.nextElementSibling.min))) {
                    e.target.nextElementSibling.value--;
                    DataCtrl.checkIfEmptyQuiz();
                }
                // Prevent default
                e.preventDefault();
            }
            // LogOutBtn clicked
            if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === UISelectors.logOutBtn.slice(1)) || (e.target.id === UISelectors.logOutBtn.slice(1) && e.target.tagName === 'A')) {
                grab(UISelectors.logOutConfirmation).classList.toggle('hidden-options');
            }
        });
        // Keyup, keydown & blur events
        window.addEventListener('keydown', e => {
            if (e.key === "Enter") {
                if(e.target.type !== 'submit') {
                    e.preventDefault();
                    return false;
                }
            }
        });
        // Check Username
        UISelectors.registerForm.username.addEventListener('keyup', () => {
            DataCtrl.inputFeedback('usernamePattern', 'username', 'register');
        });
        UISelectors.registerForm.username.addEventListener('blur', () => {
            DataCtrl.inputFeedback('usernamePattern', 'username', 'register');
        });
        // Check Email
        UISelectors.registerForm.email.addEventListener('keyup', () => {
            DataCtrl.inputFeedback('emailPattern', 'email', 'register');
        });
        UISelectors.registerForm.email.addEventListener('blur', () => {
            DataCtrl.inputFeedback('emailPattern', 'email', 'register');
        });
        // Check Password
        UISelectors.registerForm.password.addEventListener('keyup', () => {
            DataCtrl.inputFeedback('passwordPattern', 'password', 'register');
            if (UISelectors.registerForm.password.classList.contains('input-valid') && UISelectors.registerForm.password.value !== '' && (UISelectors.registerForm['confirm-password'].value === UISelectors.registerForm.password.value)) {
                DataCtrl.inputValid(UISelectors.registerForm['confirm-password']);
            } else {
                DataCtrl.inputInvalid(UISelectors.registerForm['confirm-password']);
            }
        });
        UISelectors.registerForm.password.addEventListener('blur', () => {
            DataCtrl.inputFeedback('passwordPattern', 'password', 'register');
            if (UISelectors.registerForm.password.classList.contains('input-valid') && UISelectors.registerForm.password.value !== '' && (UISelectors.registerForm['confirm-password'].value === UISelectors.registerForm.password.value)) {
                DataCtrl.inputValid(UISelectors.registerForm['confirm-password']);
            } else {
                DataCtrl.inputInvalid(UISelectors.registerForm['confirm-password']);
            }
        });
        // Check Confirm Password
        UISelectors.registerForm['confirm-password'].addEventListener('keyup', () => {
            DataCtrl.checkIfAllValid('register');
            if (UISelectors.registerForm.password.classList.contains('input-valid') && UISelectors.registerForm.password.value !== '' && (UISelectors.registerForm['confirm-password'].value === UISelectors.registerForm.password.value)) {
                DataCtrl.inputValid(UISelectors.registerForm['confirm-password']);
                DataCtrl.hintFeedback('confirm-password');
            } else {
                DataCtrl.inputInvalid(UISelectors.registerForm['confirm-password']);
                DataCtrl.hintFeedback('confirm-password', false);
            }
        });
        UISelectors.registerForm['confirm-password'].addEventListener('blur', () => {
            DataCtrl.checkIfAllValid('register');
            if (UISelectors.registerForm.password.classList.contains('input-valid') && UISelectors.registerForm.password.value !== '' && (UISelectors.registerForm['confirm-password'].value === UISelectors.registerForm.password.value)) {
                DataCtrl.inputValid(UISelectors.registerForm['confirm-password']);
                DataCtrl.hintFeedback('confirm-password');
            } else {
                DataCtrl.inputInvalid(UISelectors.registerForm['confirm-password']);
                DataCtrl.hintFeedback('confirm-password', false);
            }
        });
        // Check Email
        UISelectors.loginForm.email.addEventListener('keyup', () => DataCtrl.checkIfEmpty() );
        UISelectors.loginForm.email.addEventListener('blur', () => DataCtrl.checkIfEmpty() );
        // Check Password
        UISelectors.loginForm.password.addEventListener('keyup', () => DataCtrl.checkIfEmpty() );
        UISelectors.loginForm.password.addEventListener('blur', () => DataCtrl.checkIfEmpty() );
        // Check Name
        UISelectors.createQuizForm["quiz-name"].addEventListener('keyup', () => DataCtrl.checkIfEmptyQuiz() );
        UISelectors.createQuizForm["quiz-name"].addEventListener('blur', () => DataCtrl.checkIfEmptyQuiz() );
        // Check Type
        UISelectors.createQuizForm["quiz-type"].addEventListener('change', () => DataCtrl.checkIfEmptyQuiz() );
        // Check Answers
        UISelectors.createQuizForm["quiz-answers"].addEventListener('keyup', () => DataCtrl.checkIfEmptyQuiz() );
        UISelectors.createQuizForm["quiz-answers"].addEventListener('blur', () => DataCtrl.checkIfEmptyQuiz() );
        // Check Questions
        UISelectors.createQuizForm["quiz-questions"].addEventListener('keyup', () => DataCtrl.checkIfEmptyQuiz() );
        UISelectors.createQuizForm["quiz-questions"].addEventListener('blur', () => DataCtrl.checkIfEmptyQuiz() );
        // Submit events
        // Register form
        UISelectors.registerForm.addEventListener('submit', e => {
            // Prevent default behaviour
            e.preventDefault();
            // Add formRegisterSubmitFeedback
            if (grab(UISelectors.formRegisterSubmitFeedback) === null) {
                UICtrl.createSubmitFeedback('register');
            }
            const submitFeedback = grab(UISelectors.formRegisterSubmitFeedback);
            // Add data feedback
            UISelectors.registerFeedback.innerHTML = '';
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
            UISelectors.burger.classList.add('disabled');
            if (DataCtrl.checkIfAllValid('register')) {
                // Lock input fields
                DataCtrl.lockInput('register');
                // Disable submit btn
                if (!UISelectors.registerForm["register-submit"].classList.contains('disabled')) {
                    UISelectors.registerForm["register-submit"].classList.add('disabled');
                }
                // Show loader
                UISelectors.registerWrapper.appendChild(UICtrl.createDiv(UISelectors.overlay.slice(1)));
                UICtrl.createLoader(grab(UISelectors.overlay));
                // Post data using the Fetch API
                let err_count = 0;
                fetch(UISelectors.registerForm.action, {
                    method: UISelectors.registerForm.method,
                    body: new FormData(UISelectors.registerForm)
                })
                .then(response => response.json() )
                .then(docs => {
                    // Handle input data
                    err_count = DataCtrl.handleFormData(docs, 'register');
                    if (err_count) { // errors found
                        setTimeout(() => {
                            submitFeedback.lastElementChild.classList.add('hide');
                            submitFeedback.firstElementChild.classList.remove('hide');
                            // Unlock fields
                            DataCtrl.unlockInput('register');
                            // Enable options
                            UISelectors.burger.classList.remove('disabled');
                            // Hide loader
                            UICtrl.removeLoader();
                            UICtrl.removeElement(grab(UISelectors.overlay));
                        }, 500);
                    } else { // no errors
                        // Add confirmation div
                        UICtrl.createFormConfirmation('register');
                        setTimeout(() => {
                            // Unlock fields
                            DataCtrl.unlockInput('register');
                            // Hide submit feedback div
                            submitFeedback.classList.add('hide');
                            submitFeedback.firstElementChild.classList.add('hide');
                            setTimeout(() => {
                                // Show confirmation
                                grab(UISelectors.confirmationUser).textContent = UISelectors.registerForm.username.value;
                                grab(UISelectors.registrationConfirmation).classList.remove('hidden-options');
                                // Clear form
                                DataCtrl.resetForm('register');
                                setTimeout(() => {
                                    UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                                    UISelectors.registerWrapper.classList.toggle('hidden-options');
                                    // set tabindex="-1"
                                    DataCtrl.addTabindex('register-tabindex');
                                    // Render UI elements
                                    UISelectors.loginFeedback.before(UICtrl.createBtn('control-btn', 'login-back-btn', 'go back', 'is-flex is-justify-content-start'));
                                    UISelectors.loginFeedback.after(UICtrl.createHeader('login', 'main-login-header'));
                                    // Show login screen
                                    UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                                    UISelectors.loginWrapper.classList.toggle('hidden-options');
                                    // Enable options
                                    UISelectors.burger.classList.remove('disabled');
                                    // Hide loader
                                    UICtrl.removeLoader();
                                    UICtrl.removeElement(grab(UISelectors.overlay));
                                    setTimeout(() => {
                                        // remove tabindex="-1"
                                        DataCtrl.removeTabindex('login-tabindex');
                                        // set focus on first input
                                        UISelectors.loginForm.email.focus();
                                        // Reset register UI
                                        grab(UISelectors.registerBackBtn).parentElement.remove();
                                        grab('.main-register-header').remove();
                                        submitFeedback.remove();
                                        grab(UISelectors.inputHint).parentElement.remove();
                                        UISelectors.hintWrapper.innerHTML = '';
                                        UISelectors.registerFeedback.innerHTML = '';
                                        grab(UISelectors.registrationConfirmation).remove();
                                    }, 600);
                                }, 1000);
                            }, 500);
                        }, 1000);
                    }
                })
                .catch(error => {
                    // Hide loader
                    UICtrl.removeLoader();
                    UICtrl.removeElement(grab(UISelectors.overlay));
                    // Show message overlay
                    UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        grab(UISelectors.errorOverlay).remove();
                        // Adjust UI display
                        UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                        UISelectors.registerWrapper.classList.toggle('hidden-options');
                        setTimeout(() => {
                            UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                            // Unlock fields
                            DataCtrl.unlockInput('register');
                            // Enable options
                            UISelectors.burger.classList.remove('disabled');
                            // set tabindex="-1"
                            DataCtrl.addTabindex('register-tabindex');
                            // reset form
                            DataCtrl.resetForm('register');
                            // Remove rendered UI components
                            grab(UISelectors.registerBackBtn).parentElement.remove();
                            grab('.main-register-header').remove();
                            if (grab(UISelectors.formRegisterSubmitFeedback) !== null) {
                                grab(UISelectors.formRegisterSubmitFeedback).remove();
                            }
                            grab(UISelectors.inputHint).parentElement.remove();
                            UISelectors.hintWrapper.innerHTML = '';
                            UISelectors.registerFeedback.innerHTML = '';
                        }, 600);
                    }, 2000);
                });        
            }
        });
        // Login form
        UISelectors.loginForm.addEventListener('submit', e => {
            // Prevent the default form submit
            e.preventDefault();
            // Add formLoginSubmitFeedback
            if (grab(UISelectors.formLoginSubmitFeedback) === null) {
                UICtrl.createSubmitFeedback('login');
            }
            const submitFeedback = grab(UISelectors.formLoginSubmitFeedback);
            // Add data feedback
            UISelectors.loginFeedback.innerHTML = '';
            UICtrl.createDataFeedback(['email', 'password', 'db'], 'login');
            // Check if there is anything in inputs
            if (UISelectors.loginForm.email.value !== '' && DataCtrl.patterns.emailPattern.test(UISelectors.loginForm.email.value) && UISelectors.loginForm.password.value !== '' && !UISelectors.loginForm.email.hasAttribute('readonly') && !UISelectors.loginForm.password.hasAttribute('readonly')) {
                // Adjust UI
                if (submitFeedback.classList.contains('hide')) {
                    submitFeedback.classList.remove('hide');
                    submitFeedback.lastElementChild.classList.remove('hide');
                } else {
                    submitFeedback.firstElementChild.classList.add('hide');
                    submitFeedback.lastElementChild.classList.remove('hide');
                } 
                // Lock input fields
                DataCtrl.lockInput('login');
                // Disable submit btn
                if (!UISelectors.loginForm["login-submit"].classList.contains('disabled')) {
                    UISelectors.loginForm["login-submit"].classList.add('disabled');
                }
                // Disable options
                UISelectors.burger.classList.add('disabled');
                // Show loader
                UISelectors.loginWrapper.appendChild(UICtrl.createDiv(UISelectors.overlay.slice(1)));
                UICtrl.createLoader(grab(UISelectors.overlay));
                // Post data using the Fetch API
                let err_count = 0;
                fetch(UISelectors.loginForm.action, {
                    method: UISelectors.loginForm.method,
                    body: new FormData(UISelectors.loginForm)
                })
                .then(response => response.json() )
                .then(docs => {
                    // First check if user is logged in
                    if (docs.session.loggedIn) {
                        // Unlock fields
                        DataCtrl.unlockInput('login');
                        setTimeout(() => {
                            // Adjust UI display
                            UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                            UISelectors.loginWrapper.classList.toggle('hidden-options');
                            // set tabindex="-1"
                            DataCtrl.addTabindex('login-tabindex');
                            // Show welcome screen
                            UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                            setTimeout(() => {
                                // Rerender UI
                                UICtrl.loadLoggedInScreen();
                                // Render options
                                UISelectors.settingsOption.parentElement.before(UICtrl.createOption('You are currently logged in'));
                                UISelectors.settingsOption.parentElement.before(UICtrl.createOption(''));
                                UISelectors.settingsOption.parentElement.before(UICtrl.createLogOutConfirmation());
                                UISelectors.options.classList.add('options-welcome');
                                // Load log out event listener
                                AppCtrl.loadLogOutEvent();
                                // Adjust UI display
                                UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                                UISelectors.mainSectionWrapper.firstElementChild.classList.toggle('shrink');
                                // Hide loader
                                UICtrl.removeLoader();
                                UICtrl.removeElement(grab(UISelectors.overlay));
                                setTimeout(() => {
                                    // Enable options
                                    UISelectors.burger.classList.remove('disabled');
                                    // Reset register UI
                                    grab(UISelectors.loginBackBtn).parentElement.remove();
                                    grab('.main-login-header').remove();
                                    submitFeedback.remove();
                                    UISelectors.loginFeedback.innerHTML = '';
                                    grab(UISelectors.loginConfirmation).remove();
                                    document.querySelector('#front-page-footer').classList.add('hidden-options');
                                }, 500);
                            }, 350);
                        }, 1000);
                    } else {
                        // Handle input data
                        err_count = DataCtrl.handleFormData(docs, 'login');
                        if (err_count) { // errors found
                            setTimeout(() => {
                                submitFeedback.lastElementChild.classList.add('hide');
                                submitFeedback.firstElementChild.classList.remove('hide');
                                // Unlock fields
                                DataCtrl.unlockInput('login');
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
                                UICtrl.removeElement(grab(UISelectors.overlay));
                                // Enable options
                                UISelectors.burger.classList.remove('disabled');
                                return undefined;
                            }, 500);
                        } else { // no errors
                            // Add confirmation div
                            UICtrl.createFormConfirmation('login', 'logged in');
                            // Hide submit feedback div
                            submitFeedback.classList.add('hide');
                            submitFeedback.firstElementChild.classList.add('hide');
                            // Show confirmation
                            grab(UISelectors.loginConfirmation).classList.remove('hidden-options');
                            // Clear form
                            DataCtrl.resetForm('login');
                            // Set user id
                            UISelectors.createQuizForm["user-id"].value = docs.session["user_id"];
                            // Fetch user's quizzes
                            return ApiCtrl.fetchQuizzes('./fetchQuizzes.php');
                        }
                    }
                })
                .then(response => response !== undefined ? response.json() : undefined )
                .then(data => {
                    if (data !== undefined) {
                        global.quizzes = data.data.fields;
                        // Unlock fields
                        DataCtrl.unlockInput('login');
                        setTimeout(() => {
                            // Adjust UI display
                            UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                            UISelectors.loginWrapper.classList.toggle('hidden-options');
                            // set tabindex="-1"
                            DataCtrl.addTabindex('login-tabindex');
                            // Show welcome screen
                            UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                            setTimeout(() => {
                                // Rerender UI
                                UICtrl.loadLoggedInScreen();
                                // Render options
                                UISelectors.settingsOption.parentElement.before(UICtrl.createOption('You are currently logged in'));
                                UISelectors.settingsOption.parentElement.before(UICtrl.createOption(''));
                                UISelectors.settingsOption.parentElement.before(UICtrl.createLogOutConfirmation());
                                UISelectors.options.classList.add('options-welcome');
                                // Load log out event listener
                                AppCtrl.loadLogOutEvent();
                                // Adjust UI display
                                UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                                UISelectors.mainSectionWrapper.firstElementChild.classList.toggle('shrink');
                                // Hide loader
                                UICtrl.removeLoader();
                                UICtrl.removeElement(grab(UISelectors.overlay));
                                // Adjust screen ID
                                UISelectors.mainSectionWrapper.firstElementChild.setAttribute('id', 'logged-in-main-content-wrapper');
                                setTimeout(() => {
                                    // Enable options
                                    UISelectors.burger.classList.remove('disabled');
                                    // Reset register UI
                                    grab(UISelectors.loginBackBtn).parentElement.remove();
                                    grab('.main-login-header').remove();
                                    submitFeedback.remove();
                                    UISelectors.loginFeedback.innerHTML = '';
                                    grab(UISelectors.loginConfirmation).remove();
                                    document.querySelector('#front-page-footer').classList.add('hidden-options');
                                }, 500);
                            }, 350);
                        }, 1000);
                    }
                })
                .catch(error => {
                    // Hide loader
                    UICtrl.removeLoader();
                    UICtrl.removeElement(grab(UISelectors.overlay));
                    // Show message overlay
                    UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        grab(UISelectors.errorOverlay).remove();
                        // Adjust UI display
                        UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                        UISelectors.loginWrapper.classList.toggle('hidden-options');
                        setTimeout(() => {
                            UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                            // Unlock fields
                            DataCtrl.unlockInput('login');
                            // Enable options
                            UISelectors.burger.classList.remove('disabled');
                            // set tabindex="-1"
                            DataCtrl.addTabindex('login-tabindex');
                            // reset form
                            DataCtrl.resetForm('login');
                            // Remove rendered UI components
                            grab(UISelectors.loginBackBtn).parentElement.remove();
                            grab('.main-login-header').remove();
                            if (grab(UISelectors.formLoginSubmitFeedback) !== null) {
                                grab(UISelectors.formLoginSubmitFeedback).remove();
                            }
                            UISelectors.loginFeedback.innerHTML = '';
                        }, 600);
                    }, 2000);
                });
            }
        });
        UISelectors.quizForm.addEventListener('submit', e => {
            // Prevent default
            e.preventDefault();
            // Hide quit confirmation
            if (!grab(UISelectors.quitConfirmationWrapper).classList.contains('hidden-options')) {
                grab(UISelectors.quitConfirmationWrapper).classList.toggle('hidden-options');
            }
            // Check if radio button is checked
            const currName = global.questions[global.index - 1].question_ID;
            const target = [...UISelectors.quizForm[currName]].filter(r => r.checked)[0];
            if (target !== undefined) {
                // Disable options
                UISelectors.burger.classList.add('disabled');
                // Show loader
                UISelectors.quizViewWrapper.appendChild(UICtrl.createDiv(UISelectors.overlay.slice(1)));
                UICtrl.createLoader(grab(UISelectors.overlay));
                // Adjust UI display
                UISelectors.quizContent.classList.toggle('hidden-options');
                grab(UISelectors.qNumber).style.opacity = 0;
                // Render retry btn
                grab(UISelectors.quizSubmitBtn).after(UICtrl.createBtn('control-btn', 'quiz-retry-btn', 'retry'));
                grab(UISelectors.quizSubmitBtn).remove();
                grab(UISelectors.quizRetryBtn).style.display = 'flex';
                // Output quiz feedback
                let score = 0;
                let uHtml = '';
                global.questions.forEach((question, index) => {
                    if (UISelectors.quizForm[question.question_ID].value == global.correctAnswers[index]) {
                        score++;
                        uHtml += UICtrl.createQuestionFeedback(question.question, 'valid');
                    } else {
                        uHtml += UICtrl.createQuestionFeedback(question.question, 'invalid');
                    }
                });
                // Get quizID
                const quizID = UISelectors.quizForm.getAttribute('data-id');
                // Calculate score
                const finalScore = (score / global.questions.length) * 100;
                // Update db
                const data = { finalScore, quizID };
                fetch(UISelectors.quizForm.action, {
                    method: UISelectors.quizForm.method,
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json() )
                .then(() => ApiCtrl.fetchQuizzes('./fetchQuizzes.php') )
                .then(response => response.json() )
                .then(data => {
                    global.quizzes = data.data.fields;
                    // Render data using JS
                    UICtrl.renderQuizzes(1, global.quizzes);
                    setTimeout(() => {
                        // Hide loader
                        UICtrl.removeLoader();
                        UICtrl.removeElement(grab(UISelectors.overlay));
                        // Adjust UI display
                        UISelectors.quizContent.after(UICtrl.createQuizResults());
                        grab(UISelectors.quizResults).classList.toggle('hidden-options');
                        // Output feedback & score
                        grab(UISelectors.quizScore).textContent = finalScore + '%';
                        grab(UISelectors.quizFeedback).innerHTML = uHtml;
                        // Enable options
                        UISelectors.burger.classList.remove('disabled');
                    }, 1000);
                })
                .catch(error => {
                    // Hide loader
                    UICtrl.removeLoader();
                    UICtrl.removeElement(grab(UISelectors.overlay));
                    // Show message overlay
                    UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        grab(UISelectors.errorOverlay).remove();
                        // Reset global vars
                        global.index = 0;
                        global.questions = [];
                        global.answers = [];
                        global.correctAnswers = [];
                        global.value = [];
                        // Adjust UI display
                        UISelectors.quizViewWrapper.classList.toggle('hidden-options');
                        setTimeout(() => {
                            if (grab(UISelectors.quizResults) !== null) {
                                grab(UISelectors.quizResults).classList.add('hidden-options');
                            }
                            UISelectors.quizContent.classList.remove('hidden-options');
                            // Remove UI components
                            grab(UISelectors.quitBtn).parentElement.remove();
                            grab(UISelectors.quitConfirmationWrapper).remove();
                            if (grab(UISelectors.quizResults) !== null) {
                                grab(UISelectors.quizResults).remove();
                            }
                            UISelectors.quizForm.lastElementChild.innerHTML = '';
                            UISelectors.quizContent.firstElementChild.firstElementChild.innerHTML = '';
                            // Enable options
                            UISelectors.burger.classList.remove('disabled');
                        }, 500);
                    }, 2000);
                    
                });
            } else {
                // Show message overlay
                UICtrl.createErrorDiv('You need to pick your answer!');
                setTimeout(() => {
                    grab(UISelectors.errorOverlay).remove();
                }, 2000);
            }
        });
        // submit generate form
        UISelectors.createQuizForm.addEventListener('submit', e => {
            // Prevent the default form submit
            e.preventDefault();
            // Set local vars
            const form = UISelectors.createQuizForm;
            const quizName = form["quiz-name"].value;
            const quizType = form["quiz-type"].value;
            const quizAnswers = form["quiz-answers"].value;
            const quizQuestions = form["quiz-questions"].value;
            // Add formRegisterSubmitFeedback
            if (grab(UISelectors.formCreateQuizSubmitFeedback) === null) {
                UICtrl.createSubmitFeedback('create-quiz');
            }
            const submitFeedback = grab(UISelectors.formCreateQuizSubmitFeedback);
            // Add data feedback
            UISelectors.createQuizFeedback.innerHTML = '';
            UICtrl.createDataFeedback(['quiz-name', 'quiz-type', 'quiz-answers', 'quiz-questions', 'quiz-db'], 'create-quiz');
            // Adjust UI display
            UISelectors.createQuizWrapper.scrollTop = 0;
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
                UISelectors.burger.classList.add('disabled');
                // Show loader
                UISelectors.createQuizWrapper.appendChild(UICtrl.createDiv(UISelectors.overlay.slice(1)));
                UICtrl.createLoader(grab(UISelectors.overlay));
                // Post data using Fetch API
                let err_count = 0;
                fetch(form.action, {
                    method: form.method,
                    body: new FormData(form)
                })
                .then(response => response.json() )
                .then(docs => {
                    // Handle input data
                    err_count = DataCtrl.handleFormData(docs, 'create-quiz');
                    if (err_count) { throw true }
                    else { // no errors
                        // Hide loader
                        UICtrl.removeLoader();
                        UICtrl.removeElement(grab(UISelectors.overlay));
                        // Adjust UI display
                        UISelectors.createQuizWrapper.scrollTop = 0;
                        UISelectors.createQuizWrapper.classList.toggle('is-clipped');
                        // Render UI
                        UICtrl.generateQuizConfirmation();
                        // Quiz confirmation mode is active
                        grab('body').setAttribute('data-screen', 'quiz-confirmation');
                        // Show confirmation wrapper & loader, set text
                        UISelectors.generateConfirmation.classList.remove('hidden-options');
                        UISelectors.generateConfirmation.firstElementChild.firstElementChild.classList.add('start-loader');
                        UISelectors.generateConfirmation.lastElementChild.lastElementChild.textContent = 'Fetching words...';
                        // Fetch data from WordAPI
                        return ApiCtrl.getRandomWordDefinitions(parseInt(quizQuestions), parseInt(quizAnswers));
                    }
                })
                .then(results => {
                    // reset form
                    UISelectors.createQuizForm.reset();
                    UISelectors.createQuizForm["quiz-select"].value = '';
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
                    const data = {
                        ...results,
                        quizID: quizName,
                        answersTotal: quizAnswers
                    };
                    // Update UI text
                    UISelectors.generateConfirmation.lastElementChild.lastElementChild.textContent = 'Saving...';
                    // Save questions & answers
                    return ApiCtrl.postData(data, './store.php');
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
                        global.quizzes = docs['snapshot'];
                        UISelectors.generateConfirmation.lastElementChild.lastElementChild.textContent = 'Done!';
                        UISelectors.generateConfirmation.firstElementChild.firstElementChild.classList.remove('start-loader');
                        setTimeout(() => {
                            // Unlock input fields & submit btn
                            form["quiz-name"].removeAttribute("readonly");
                            form["quiz-type"].removeAttribute("disabled");
                            form["quiz-answers"].removeAttribute("readonly");
                            form["quiz-questions"].removeAttribute("readonly");
                            form["quiz-generate"].classList.remove("disabled");
                            // Enable options
                            UISelectors.burger.classList.remove('disabled');
                            // Adjust UI display
                            UISelectors.generateConfirmation.classList.add('hidden-options');
                            UISelectors.createQuizWrapper.classList.toggle('is-clipped');
                            UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                            UISelectors.createQuizWrapper.classList.toggle('hidden-options');
                            setTimeout(() => {
                                UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                                // set tabindex="-1"
                                DataCtrl.addTabindex('create-tabindex');
                                // reset form
                                UISelectors.createQuizForm.reset();
                                UISelectors.createQuizForm["quiz-select"].value = '';
                                // disable submit btn
                                if (!UISelectors.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                                    UISelectors.createQuizForm["quiz-generate"].classList.add('disabled');
                                }
                                // Remove rendered UI components
                                grab(UISelectors.createQuizBackBtn).parentElement.remove();
                                grab('.main-create-quiz-header').remove();
                                if (grab(UISelectors.formCreateQuizSubmitFeedback) !== null) {
                                    grab(UISelectors.formCreateQuizSubmitFeedback).remove();
                                }
                                // Render UI display
                                UISelectors.filterWrapper.before(UICtrl.createBrowseOptions());
                                // Include these when filter btn is clicked
                                UISelectors.filterForm.before(UICtrl.createBtn('control-btn', 'filter-back-btn', 'go back', 'is-flex is-justify-content-start'));
                                UISelectors.filterForm.before(UICtrl.createHeader('filter', 'main-filter-header'));
                                // Include these when search btn is clicked
                                UISelectors.searchForm.before(UICtrl.createBtn('control-btn', 'search-back-btn', 'go back', 'is-flex is-justify-content-start'));
                                UISelectors.searchForm.before(UICtrl.createHeader('search', 'main-search-header'));
                                // Hide main section
                                UISelectors.mainSectionWrapper.firstElementChild.classList.add('shrink');
                                // Render data using JS
                                UICtrl.renderQuizzes(1, global.quizzes);
                                setTimeout(() => {
                                    UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                                    // Show browse section
                                    UISelectors.browseWrapper.classList.toggle('hidden-options');
                                    // Browse mode is active
                                    grab('body').setAttribute('data-screen', 'browse');
                                    // Strip validation classes
                                    DataCtrl.stripValidation(["quiz-name", "quiz-type", "quiz-questions", "quiz-answers"]);
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
                            DataCtrl.stripValidation(["quiz-name", "quiz-type", "quiz-questions", "quiz-answers"]);
                            form["quiz-generate"].classList.remove("disabled");
                            // Hide loader
                            UICtrl.removeLoader();
                            UICtrl.removeElement(grab(UISelectors.overlay));
                            // Enable options
                            UISelectors.burger.classList.remove('disabled');
                        }, 2000);
                    } else {
                        // Get current data-screen mode
                        const screen = grab('body').getAttribute('data-screen');
                        if (screen === 'create') {
                            // Hide loader
                            UICtrl.removeLoader();
                            UICtrl.removeElement(grab(UISelectors.overlay));
                            // Adjust UI display
                            UISelectors.createQuizWrapper.classList.toggle('is-clipped');
                            // Show error message
                            UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                            setTimeout(() => {
                                grab(UISelectors.errorOverlay).remove();
                                // Start mode is active
                                grab('body').setAttribute('data-screen', '');
                                // Adjust UI display
                                UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                                UISelectors.createQuizWrapper.classList.toggle('hidden-options');
                                setTimeout(() => {
                                    UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                                    // set tabindex="-1"
                                    DataCtrl.addTabindex('create-tabindex');
                                    // reset form
                                    UISelectors.createQuizForm.reset();
                                    UISelectors.createQuizForm["quiz-select"].value = '';
                                    // disable submit btn
                                    if (!UISelectors.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                                        UISelectors.createQuizForm["quiz-generate"].classList.add('disabled');
                                    }
                                    // Remove rendered UI components
                                    grab(UISelectors.createQuizBackBtn).parentElement.remove();
                                    grab('.main-create-quiz-header').remove();
                                    if (grab(UISelectors.formCreateQuizSubmitFeedback) !== null) {
                                        grab(UISelectors.formCreateQuizSubmitFeedback).remove();
                                    }
                                    // Enable options
                                    UISelectors.burger.classList.remove('disabled');
                                    // Adjust UI display
                                    UISelectors.createQuizWrapper.classList.toggle('is-clipped');
                                }, 600);
                            }, 2000);
                        } else if (screen === 'quiz-confirmation') {
                            // Show message overlay
                            UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                            setTimeout(() => {
                                grab(UISelectors.errorOverlay).remove();
                                // Adjust UI display
                                UISelectors.generateConfirmation.firstElementChild.firstElementChild.classList.remove('start-loader');
                                setTimeout(() => {
                                    UISelectors.generateConfirmation.classList.add('hidden-options');
                                    // Adjust UI display
                                    UISelectors.createQuizWrapper.classList.toggle('is-clipped');
                                    // Unlock input fields & submit btn
                                    form["quiz-name"].removeAttribute("readonly");
                                    form["quiz-type"].removeAttribute("disabled");
                                    form["quiz-answers"].removeAttribute("readonly");
                                    form["quiz-questions"].removeAttribute("readonly");
                                    form["quiz-generate"].classList.remove("disabled");
                                    // Enable options
                                    UISelectors.burger.classList.remove('disabled');
                                    // Start mode is active
                                    grab('body').setAttribute('data-screen', '');
                                    // Adjust UI display
                                    UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                                    UISelectors.createQuizWrapper.classList.toggle('hidden-options');
                                    setTimeout(() => {
                                        UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                                        // set tabindex="-1"
                                        DataCtrl.addTabindex('create-tabindex');
                                        // reset form
                                        UISelectors.createQuizForm.reset();
                                        UISelectors.createQuizForm["quiz-select"].value = '';
                                        // disable submit btn
                                        if (!UISelectors.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                                            UISelectors.createQuizForm["quiz-generate"].classList.add('disabled');
                                        }
                                        // Remove rendered UI components
                                        grab(UISelectors.createQuizBackBtn).parentElement.remove();
                                        grab('.main-create-quiz-header').remove();
                                        if (grab(UISelectors.formCreateQuizSubmitFeedback) !== null) {
                                            grab(UISelectors.formCreateQuizSubmitFeedback).remove();
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
                    grab(UISelectors.errorOverlay).remove();
                }, 2000);
            }
        });
    }
    const loadLogOutEvent = function() {
        const form = grab(UISelectors.logOutForm);
        form.addEventListener('submit', e => {
            // Prevent default
            e.preventDefault();
            // Set vars
            const action = form.action;
            const method = form.method;
            // Disable options
            UISelectors.burger.classList.add('disabled');
            // Show loader
            UISelectors.options.appendChild(UICtrl.createDiv(UISelectors.overlay.slice(1)));
            UICtrl.createLoader(grab(UISelectors.overlay));
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
                    return ApiCtrl.fetchQuizzes('./fetchQuizzes.php');
                } else {
                    // User was not logged in
                    // Hide loader
                    UICtrl.removeLoader();
                    UICtrl.removeElement(grab(UISelectors.overlay));
                    // Show message overlay
                    UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        grab(UISelectors.errorOverlay).remove();
                        // Adjust UI depending on where user currently is
                        const screen = document.querySelector('body').getAttribute('data-screen');
                        if(screen === 'browse' || screen === 'more-info' || screen === 'filter' || screen === 'search') {
                            // Show main section
                            UISelectors.browseWrapper.classList.toggle('hidden-options');
                            UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                            UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                            // Remove UI components
                            UISelectors.browseWrapper.firstElementChild.remove();
                            UISelectors.filterWrapper.firstElementChild.remove();
                            UISelectors.filterWrapper.firstElementChild.remove();
                            UISelectors.searchWrapper.firstElementChild.remove();
                            UISelectors.searchWrapper.firstElementChild.remove();
                            // Reset data screen
                            grab('body').removeAttribute('data-screen');
                            if (screen === 'more-info') {
                                const infoDiv = grab('.more-info-wrapper.active');
                                infoDiv.classList.add('scaleY');
                            } else if (screen === 'filter') {
                                UISelectors.filterWrapper.classList.add('scaleY');
                            } else if (screen === 'search') {
                                UISelectors.searchWrapper.classList.add('scaleY');
                            } else if (screen === 'quiz') {
                                // Reset global vars
                                global.index = 0,
                                global.questions = [],
                                global.answers = [],
                                global.correctAnswers = [],
                                global.value = [],
                                // Adjust UI display
                                grab(UISelectors.quitConfirmationWrapper).classList.toggle('hidden-options');
                                UISelectors.quizViewWrapper.classList.toggle('hidden-options');
                                if (grab(UISelectors.quizResults) !== null) {
                                    grab(UISelectors.quizResults).classList.add('hidden-options');
                                }
                                UISelectors.quizContent.classList.remove('hidden-options');
                                // Remove UI components
                                grab(UISelectors.quitBtn).parentElement.remove();
                                grab(UISelectors.quitConfirmationWrapper).remove();
                                if (grab(UISelectors.quizResults) !== null) {
                                    grab(UISelectors.quizResults).remove();
                                }
                                UISelectors.quizForm.lastElementChild.innerHTML = '';
                                UISelectors.quizContent.firstElementChild.firstElementChild.innerHTML = '';
                                // Reset data screen
                                grab('body').removeAttribute('data-screen');
                            }
                        } else if(screen === 'create') {
                            UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                            UISelectors.createQuizWrapper.classList.toggle('hidden-options');
                            UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                            // set tabindex="-1"
                            DataCtrl.addTabindex('create-tabindex');
                            // reset form
                            UISelectors.createQuizForm.reset();
                            UISelectors.createQuizForm["quiz-select"].value = '';
                            // disable submit btn
                            if (!UISelectors.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                                UISelectors.createQuizForm["quiz-generate"].classList.add('disabled');
                            }
                            // Remove rendered UI components
                            grab(UISelectors.createQuizBackBtn).parentElement.remove();
                            grab('.main-create-quiz-header').remove();
                            if (grab(UISelectors.formCreateQuizSubmitFeedback) !== null) {
                                grab(UISelectors.formCreateQuizSubmitFeedback).remove();
                            }
                            // Reset data screen
                            grab('body').removeAttribute('data-screen');
                        }
                        setTimeout(() => {
                            // Close options screen
                            UISelectors.burger.classList.toggle('hide');
                            UISelectors.times.classList.toggle('hide');
                            UISelectors.options.classList.toggle('hidden-options');
                            // Rerender UI display
                            UICtrl.loadStartScreen();
                            // Adjust screen ID
                            UISelectors.mainSectionWrapper.firstElementChild.setAttribute('id', 'front-page-main-content-wrapper');
                            // Remove UI components
                            UISelectors.options.firstElementChild.firstElementChild.remove();
                            UISelectors.options.firstElementChild.firstElementChild.remove();
                            UISelectors.options.firstElementChild.firstElementChild.remove();
                            UISelectors.options.classList.remove('options-welcome');
                            setTimeout(() => {
                                // Enable options
                                UISelectors.burger.classList.remove('disabled');
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
                if(screen === 'browse' || screen === 'more-info' || screen === 'filter' || screen === 'search' || screen === 'quiz') {
                    // Show main section
                    UISelectors.browseWrapper.classList.toggle('hidden-options');
                    UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                    UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                    // Remove UI components
                    UISelectors.browseWrapper.firstElementChild.remove();
                    UISelectors.filterWrapper.firstElementChild.remove();
                    UISelectors.filterWrapper.firstElementChild.remove();
                    UISelectors.searchWrapper.firstElementChild.remove();
                    UISelectors.searchWrapper.firstElementChild.remove();
                    // Reset data screen
                    grab('body').removeAttribute('data-screen');
                    if (screen === 'more-info') {
                        const infoDiv = grab('.more-info-wrapper.active');
                        infoDiv.classList.add('scaleY');
                    } else if (screen === 'filter') {
                        UISelectors.filterWrapper.classList.add('scaleY');
                    } else if (screen === 'search') {
                        UISelectors.searchWrapper.classList.add('scaleY');
                    } else if (screen === 'quiz') {
                        // Reset global vars
                        global.index = 0,
                        global.questions = [],
                        global.answers = [],
                        global.correctAnswers = [],
                        global.value = [],
                        // Adjust UI display
                        grab(UISelectors.quitConfirmationWrapper).classList.toggle('hidden-options');
                        UISelectors.quizViewWrapper.classList.toggle('hidden-options');
                        if (grab(UISelectors.quizResults) !== null) {
                            grab(UISelectors.quizResults).classList.add('hidden-options');
                        }
                        UISelectors.quizContent.classList.remove('hidden-options');
                        // Remove UI components
                        grab(UISelectors.quitBtn).parentElement.remove();
                        grab(UISelectors.quitConfirmationWrapper).remove();
                        if (grab(UISelectors.quizResults) !== null) {
                            grab(UISelectors.quizResults).remove();
                        }
                        UISelectors.quizForm.lastElementChild.innerHTML = '';
                        UISelectors.quizContent.firstElementChild.firstElementChild.innerHTML = '';
                        // Reset data screen
                        grab('body').removeAttribute('data-screen');
                    }
                } else if(screen === 'create') {
                    UISelectors.mainSectionWrapper.classList.toggle('hidden-options');
                    UISelectors.createQuizWrapper.classList.toggle('hidden-options');
                    UISelectors.mainSectionWrapper.firstElementChild.classList.remove('shrink');
                    // set tabindex="-1"
                    DataCtrl.addTabindex('create-tabindex');
                    // reset form
                    UISelectors.createQuizForm.reset();
                    UISelectors.createQuizForm["quiz-select"].value = '';
                    // disable submit btn
                    if (!UISelectors.createQuizForm["quiz-generate"].classList.contains('disabled')) {
                        UISelectors.createQuizForm["quiz-generate"].classList.add('disabled');
                    }
                    // Remove rendered UI components
                    grab(UISelectors.createQuizBackBtn).parentElement.remove();
                    grab('.main-create-quiz-header').remove();
                    if (grab(UISelectors.formCreateQuizSubmitFeedback) !== null) {
                        grab(UISelectors.formCreateQuizSubmitFeedback).remove();
                    }
                    // Reset data screen
                    grab('body').removeAttribute('data-screen');
                }
                setTimeout(() => {
                    // Close options screen
                    UISelectors.burger.classList.toggle('hide');
                    UISelectors.times.classList.toggle('hide');
                    UISelectors.options.classList.toggle('hidden-options');
                    // Rerender UI display
                    UICtrl.loadStartScreen();
                    // Adjust screen ID
                    UISelectors.mainSectionWrapper.firstElementChild.setAttribute('id', 'front-page-main-content-wrapper');
                    setTimeout(() => {
                        // Remove loader
                        UICtrl.removeLoader();
                        UICtrl.removeElement(grab(UISelectors.overlay));
                        // Remove UI components
                        UISelectors.options.firstElementChild.firstElementChild.remove();
                        UISelectors.options.firstElementChild.firstElementChild.remove();
                        UISelectors.options.firstElementChild.firstElementChild.remove();
                        UISelectors.options.classList.remove('options-welcome');
                        // Enable options
                        UISelectors.burger.classList.remove('disabled');
                    }, 250);
                }, 1500);
            })
            .catch(error => {
                // Hide loader
                UICtrl.removeLoader();
                UICtrl.removeElement(grab(UISelectors.overlay));
                // Show message overlay
                UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                setTimeout(() => {
                    grab(UISelectors.errorOverlay).remove();
                    UISelectors.burger.classList.toggle('hide');
                    UISelectors.times.classList.toggle('hide');
                    UISelectors.options.classList.toggle('hidden-options');
                    // Enable options
                    UISelectors.burger.classList.remove('disabled');
                }, 2000);
            });
        });
    };    
    return {
        init: function() {
            // Show loader
            UICtrl.createLoader(UISelectors.mainSectionWrapper);
            // Guest mode
            if (`#${UISelectors.mainSectionWrapper.firstElementChild.id}` === UISelectors.startPage) {
                // Fetch demo quizzes
                ApiCtrl.fetchQuizzes('./fetchQuizzes.php')
                .then(response => response.json() )
                .then(data => {
                    global.quizzes = data.data.fields;
                    setTimeout(() => {
                        UICtrl.removeLoader();
                        setTimeout(() => {
                            UICtrl.loadStartScreen();
                            loadEventListeners();
                        }, 600);
                    }, 1000);
                })
                .catch(error => {
                    // Hide loader
                    UICtrl.removeLoader();
                    // Show message overlay
                    UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        document.querySelector(UISelectors.errorOverlay).remove();
                        UICtrl.loadStartScreen();
                        loadEventListeners();
                    }, 2000);
                });
            } else {
                // Fetch user's quizzes
                ApiCtrl.fetchQuizzes('./fetchQuizzes.php')
                .then(response => response.json() )
                .then(data => {
                    global.quizzes = data.data.fields;
                    setTimeout(() => {
                        UICtrl.removeLoader();
                        setTimeout(() => {
                            UICtrl.loadLoggedInScreen();
                            // Set user id
                            UISelectors.createQuizForm["user-id"].value = data.user.id;
                            // Render options
                            UISelectors.settingsOption.parentElement.before(UICtrl.createOption('You are currently logged in'));
                            UISelectors.settingsOption.parentElement.before(UICtrl.createOption(''));
                            UISelectors.settingsOption.parentElement.before(UICtrl.createLogOutConfirmation());
                            UISelectors.options.classList.add('options-welcome');
                            loadEventListeners();
                            loadLogOutEvent();
                            setTimeout(() => {
                                document.querySelector('#front-page-footer').classList.add('hidden-options');
                            }, 150);
                        }, 600);
                    }, 1000);
                })
                .catch(error => {
                    // Hide loader
                    UICtrl.removeLoader();
                    // Show message overlay
                    UICtrl.createErrorDiv(`${error.message}. Please try again later or contact app provider.`);
                    setTimeout(() => {
                        document.querySelector(UISelectors.errorOverlay).remove();
                        UICtrl.loadStartScreen();
                        loadEventListeners();
                    }, 2000);
                });
            }
        }
    };
})(UICtrl, DataCtrl, ApiCtrl);
// Initialize App
AppCtrl.init();