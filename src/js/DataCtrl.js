// 
// Data Controller
// 
const DataCtrl = (function() {
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
        const form = document.querySelector('#create-quiz-form');
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
        const form = document.querySelector('#login-form');
        if (form.email.value !== '' && patterns.emailPattern.test(form.email.value) && form.password.value !== '') {
            form["login-submit"].classList.remove('disabled');
        } else {
            form["login-submit"].classList.add('disabled');
        }
    };
    const checkIfEmptyQuiz = function() {
        const form = document.querySelector('#create-quiz-form');
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
    const inputFeedback = function(pattern, input, target) {
        const form = document.querySelector('#register-form');
        formFeedback(patterns[pattern], form[input], input);
        checkIfAllValid(target);
    };
    return {
        removeTabindex,
        addTabindex,
        lockInput,
        unlockInput,
        resetForm,
        checkIfAllValid,
        inputValid,
        inputInvalid,
        stripValidation,
        hintFeedback,
        handleFormData,
        checkIfEmpty,
        checkIfEmptyQuiz,
        shuffleArray,
        inputFeedback,
        patterns
    }
})();
export default DataCtrl;