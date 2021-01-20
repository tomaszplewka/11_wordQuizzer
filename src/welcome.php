<?php include('src/includes/header.php'); ?>
<!-- Welcome screen & demo screen -->
<!-- <section class="background-copper-red-gradient is-flex is-flex-direction-column is-justify-content-start p-5 is-relative" id="welcome-wrapper"> -->
<!-- hidden-options -->
<!-- <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline" id="welcome-content-wrapper"> -->
<!-- <div class="column is-12-mobile is-12 py-0 mt-5"> -->
<!-- <div class="box-floating" id="welcome-logo-browse">
                <div class="db-disc-top">
                    <img src="imgs/wordRiddler_db_disc_x3.png" alt="">
                </div>
                <div class="db-disc-middle">
                    <img src="imgs/wordRiddler_db_disc_x3.png" alt="">
                </div>
                <div class="db-disc-bottom">
                    <img src="imgs/wordRiddler_db_disc_x3.png" alt="">
                </div>
            </div> -->
<!-- </div> -->
<!-- <div class="column is-12-mobile is-12 px-0 pt-0 pb-5 is-relative">
            <div class="button-wrapper-primary">
                <a id="welcome-browse-btn" class="btn btn-invert">
                    <span>
                        browse
                    </span>
                </a>
            </div>
        </div> -->
<!-- <div class="column is-12-mobile is-12 py-0">
            <div class="box-floating" id="welcome-logo-new-quiz">
                <div class="new-quiz">
                    <img src="imgs/wordRiddler_add_new_x3.png" alt="">
                </div>
            </div>
        </div> -->
<!-- <div class="column is-12-mobile is-12 px-0 pt-0 pb-5 is-relative">
            <div class="button-wrapper-primary">
                <a id="welcome-add-new-quiz-btn" class="btn btn-invert">
                    <span>
                        add new quiz
                    </span>
                </a>
            </div>
        </div> -->
<!-- </div>
</section> -->
<!-- Add new quiz screen -->
<section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="add-new-quiz-wrapper">
    <div class="generate-confirmation hidden-options background-mountain-meadow columns is-mobile m-0 p-5 has-text-centered is-vcentered is-multiline" id="generate-confirmation">
        <div class="column is-12-mobile is-12 p-0 m-0">
            <div class="" id="generate-quiz-loader">
                <img src="imgs/wordRiddler_logo_shadow_x3.png" alt="">
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
    </div>
    <div class="is-flex is-justify-content-space-between">
        <a id="add-new-quiz-back-btn" class="control-btn">
            <span class="">
                Go Back
            </span>
        </a>
    </div>
    <div class="feedback-wrapper background-smoky-black p-5 hidden-options" id="generate-feedback-wrapper">
        <div class="is-flex is-justify-content-start">
            <a id="generate-feedback-back-btn" class="control-btn">
                <span class="">
                    Go Back
                </span>
            </a>
        </div>
        <div class="feedback-header">
            <h2 class="is-size-1 form-header">FEEDBACK</h2>
        </div>
        <div class="feedback-body mb-5">
            <div class="generate-name-wrapper-if-error">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-failure has-text-left">name</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-copper-red has-text-centered p-0 px-2">
                        <i class="fas fa-exclamation fa-2x"></i>
                    </div>
                    <div class="column is-12-mobile is-12 text-copper-red has-text-centered p-0">
                        <p class="generate-name-error-text"></p>
                    </div>
                </div>
            </div>
            <div class="generate-name-wrapper-if-ok">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-ok has-text-left">name</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                </div>
            </div>
            <div class="generate-type-wrapper-if-error">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-failure has-text-left">type</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-copper-red has-text-centered p-0 px-2">
                        <i class="fas fa-exclamation fa-2x"></i>
                    </div>
                    <div class="column is-12-mobile is-12 text-copper-red has-text-centered p-0">
                        <p class="generate-type-error-text"></p>
                    </div>
                </div>
            </div>
            <div class="generate-type-wrapper-if-ok">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-ok has-text-left">type</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                </div>
            </div>
            <div class="generate-answers-wrapper-if-error">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-failure has-text-left">answers</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-copper-red has-text-centered p-0 px-2">
                        <i class="fas fa-exclamation fa-2x"></i>
                    </div>
                    <div class="column is-12-mobile is-12 text-copper-red has-text-centered p-0">
                        <p class="generate-answers-error-text"></p>
                    </div>
                </div>
            </div>
            <div class="generate-answers-wrapper-if-ok">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-ok has-text-left">answers</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                </div>
            </div>
            <div class="generate-questions-wrapper-if-error">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-failure has-text-left">questions</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-copper-red has-text-centered p-0 px-2">
                        <i class="fas fa-exclamation fa-2x"></i>
                    </div>
                    <div class="column is-12-mobile is-12 text-copper-red has-text-centered p-0">
                        <p class="generate-questions-error-text"></p>
                    </div>
                </div>
            </div>
            <div class="generate-questions-wrapper-if-ok">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-ok has-text-left">questions</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                </div>
            </div>
            <div class="generate-db-wrapper-if-error">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-failure has-text-left">questions</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-copper-red has-text-centered p-0 px-2">
                        <i class="fas fa-exclamation fa-2x"></i>
                    </div>
                    <div class="column is-12-mobile is-12 text-copper-red has-text-centered p-0">
                        <p class="generate-db-error-text"></p>
                    </div>
                </div>
            </div>
            <div class="generate-db-wrapper-if-ok">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-ok has-text-left">questions</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="add-quiz-form-wrapper" class="columns is-mobile m-0 has-text-centered is-multiline">
        <div class="column is-12-mobile is-12 p-0">
            <form action="generate.php" method="POST" id="add-quiz-form">
                <div class="columns is-mobile m-0 is-vcentered is-multiline">
                    <div class="column is-12-mobile is-12 p-0 has-text-centered my-2 input-wrapper">
                        <input class="input py-1" type="text" name="quiz-name" placeholder="Name">
                        <span class="icon-left">
                            <i class="fas fa-pencil-alt"></i>
                        </span>
                        <span class="icon-validation" id="generate-name-validation">
                            <i class="fas fa-check icon-valid hide"></i>
                            <i class="fas fa-times icon-invalid hide"></i>
                        </span>
                    </div>
                    <div class="column is-12-mobile is-12 p-0 has-text-centered my-2 input-wrapper">
                        <div class="select text-ghost-white">
                            <select class="py-1" name="quiz-type">
                                <option selected disabled>Quiz Type</option>
                                <option>Definitions</option>
                            </select>
                            <span class="icon-left">
                                <i class="fas fa-cube"></i>
                            </span>
                            <span class="icon-validation" id="generate-type-validation">
                                <i class="fas fa-check icon-valid hide"></i>
                                <i class="fas fa-times icon-invalid hide"></i>
                            </span>
                        </div>
                    </div>
                    <div class="column is-12-mobile is-12 p-0 has-text-centered m-0 p-0">
                        <input class="input py-1" type="hidden" name="quiz-select">
                    </div>
                    <div class="column is-12-mobile is-12 p-0 has-text-centered m-0 p-0">
                        <input class="input py-1" type="hidden" name="user-id" value="<?php echo $_SESSION["user_id"]; ?>">
                    </div>
                    <div class="column is-12-mobile is-12 p-0 has-text-centered my-2 number-input-wrapper">
                        <div class="number-input input-wrapper">
                            <button class="decrement"></button>
                            <input id="quiz-answers" class="quantity input mx-3" name="quiz-answers" min="2" max="4" step="1" value="2" type="number">
                            <button class="increment plus"></button>
                            <span class="icon-validation" id="generate-answers-validation">
                                <i class="fas fa-check icon-valid hide"></i>
                                <i class="fas fa-times icon-invalid hide"></i>
                            </span>
                        </div>
                    </div>
                    <div class="column is-12-mobile is-12 p-0 has-text-centered mt-2 mb-0 number-input-wrapper">
                        <div class="number-input input-wrapper">
                            <button class="decrement"></button>
                            <input id="quiz-questions" class="quantity input mx-3" name="quiz-questions" min="4" max="10" step="1" value="4" type="number">
                            <button class="increment plus"></button>
                            <span class="icon-validation" id="generate-questions-validation">
                                <i class="fas fa-check icon-valid hide"></i>
                                <i class="fas fa-times icon-invalid hide"></i>
                            </span>
                        </div>
                    </div>
                    <div class="submit-feedback mt-4 p-0 hide column is-12-mobile is-12" id="submit-generate-feedback">
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
                    </div>
                    <div class="column is-12-mobile is-12 p-0 mt-4">
                        <button type="submit" name="quiz-generate" id="generate-quiz" class="btn btn-invert m-0 disabled">
                            <span>
                                generate
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
<!-- Browse screen -->
<!-- <section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="browse-wrapper">
    <div class="is-flex is-justify-content-space-between">
        <a id="browse-back-btn" class="control-btn">
            <span class="">
                Go Back
            </span>
        </a>
        <div class="is-flex is-justify-content-center">
            <a id="filter-back-btn" class="control-btn mx-1">
                <span class="">
                    <i class="fas fa-filter"></i>
                </span>
            </a>
            <a id="search-back-btn" class="control-btn mx-1">
                <span class="">
                    <i class="fas fa-search"></i>
                </span>
            </a>
        </div>
    </div>
    <div id="filter-quiz-wrapper" class="scaleY background-ghost-white p-5 ">
        <div class="columns is-mobile m-0 is-vcentered is-multiline is-flex is-flex-direction-column is-justify-content-start">
            <div class="is-flex is-justify-content-start column is-12-mobile is-12 p-0">
                <a id="filter-quiz-back-btn" class="control-btn">
                    <span class="text-smoky-black">
                        Go Back
                    </span>
                </a>
            </div>
            <div class="column is-12-mobile is-12 p-0 has-text-centered">
                <h2 class="is-size-1 form-header text-smoky-black">FILTER</h2>
            </div>
            <div class="column is-12-mobile is-12 p-0">
                <form action="">
                    <div class="columns is-mobile m-0 is-vcentered is-multiline">
                        <div class="column is-12-mobile is-12 p-0 has-text-centered my-2">
                            <label class="filter-label" for="category">Quiz category</label>
                            <div class="select">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                        <div class="column is-6-mobile is-6 p-0">
                            <button type="submit" name="filter-clear" id="" class="btn btn-invert btn-small btn-vertical m-0">
                                <span>
                                    clear all
                                </span>
                            </button>
                        </div>
                        <div class="column is-6-mobile is-6 p-0">
                            <button type="submit" name="filter-apply" id="" class="btn btn-invert btn-small btn-vertical m-0">
                                <span>
                                    apply
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div id="search-quiz-wrapper" class="scaleY background-ghost-white p-5 ">
        <div class="columns is-mobile m-0 is-vcentered is-multiline is-flex is-flex-direction-column is-justify-content-start">
            <div class="is-flex is-justify-content-start column is-12-mobile is-12 p-0">
                <a id="search-quiz-back-btn" class="control-btn">
                    <span class="text-smoky-black">
                        Go Back
                    </span>
                </a>
            </div>
            <div class="column is-12-mobile is-12 p-0 has-text-centered">
                <h2 class="is-size-1 form-header text-smoky-black">SEARCH</h2>
            </div>
            <div class="column is-12-mobile is-12 p-0">
                <form action="">
                    <div class="columns is-mobile m-0 is-vcentered is-multiline">
                        <div class="column is-12-mobile is-12 p-0 has-text-centered my-2">
                            <input class="input" type="search" name="search" placeholder="Type here">
                        </div>
                    </div>
                </form>
            </div>
            <div class="column is-12-mobile is-12 p-0">
                HERE SHOW LOADER WHILE SEARCHING AND WHEN IT'S DONE SHOW HOW MANY RESULTS
            </div>
        </div>
    </div>
    <div class="quiz-display-wrapper is-flex is-flex-direction-column is-justify-content-start">
        <div class="quiz is-flex is-flex-direction-column is-justify-content-space-between text-ghost-white my-4">
            <div class="is-flex is-flex-direction-column is-justify-content-start column is-12-mobile is-12 p-0"></div>
            <div class="is-flex is-justify-content-space-between column is-12-mobile is-12 p-0">
                <a id="browse-quizzes-previous" class="control-btn">
                    <span class="">
                        Previous
                    </span>
                </a>
                <a id="browse-quizzes-next" class="control-btn">
                    <span class="">
                        Next
                    </span>
                </a>
            </div>
        </div>
    </div>
    <div id="test" style="width: 100%;">scroll to understand</div>
    <div id="content"> </div>
</section> -->
<!-- Quiz view -->
<!-- <section class="section background-ghost-white is-flex is-flex-direction-column is-justify-content-start p-5 hidden-options" id="quiz-view-wrapper">
    <div class="columns is-mobile m-0 is-vcentered is-multiline is-flex is-flex-direction-column is-justify-content-start">
        <div class="is-flex is-justify-content-space-between is-align-items-center column is-12-mobile is-12 p-0">
            <a id="quiz-quit-btn" class="control-btn">
                <span class="text-smoky-black">
                    Quit
                </span>
            </a>
            <p id="quiz-which-question" class="quiz-view-questions">
                <span id="quiz-current-question" class="">
                    1
                </span>
                /
                <span id="quiz-total-questions" class=""></span>
            </p>
            <a id="quiz-next-btn" class="control-btn">
                <span class="text-smoky-black">
                    Next
                </span>
            </a>
            <button id="quiz-form-submit" class="control-btn" type="submit" form="quiz-form" style="display: none; background-color: transparent;">
                <span class="text-smoky-black">
                    Submit
                </span>
            </button>
            <a id="quiz-retry-btn" class="control-btn" style="display: none;">
                <span class="text-smoky-black">
                    Retry
                </span>
            </a>
        </div>
        <div class="quiz-quit-confirmation-wrapper background-copper-red is-flex is-justify-content-center is-align-items-center column is-12-mobile is-12 p-0 hidden-options">
            <p class="quiz-quit-confirmation-text">
                are you sure?
            </p>
            <div class="quiz-quit-confirmation-btn-wrapper is-flex is-justify-content-center">
                <a id="quit-quiz-yes" class="btn btn-vertical mx-2 my-0">
                    <span>
                        yes
                    </span>
                </a>
            </div>
        </div>
        <div id="quiz-content" class="column is-12-mobile is-12 p-0">
            <div class="is-flex is-justify-content-space-between is-align-items-center my-2">
                <div id="question-text" class="quiz-view-question-text has-text-centered p-2">
                </div>
            </div>
            <div class="is-flex is-justify-content-space-between is-align-items-center">
                <form action="quiz.php" method="POST" id="quiz-form">
                    <div class="column is-12-mobile is-12 p-0 has-text-centered m-0 p-0">
                        <input class="py-1" type="hidden" name="quiz-id" value="">
                    </div>
                    <div id="quiz-answers-wrapper">
                    </div>
                </form>
            </div>
        </div>
        <div id="quiz-results" class="column is-12-mobile is-12 p-0 hidden-options">
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
        </div>
</section> -->
<!-- Options -->
<section class="section background-ghost-white is-flex is-flex-direction-column is-justify-content-center p-5 hidden-options" id="options-wrapper-welcome">
    <ul>
        <li>
            <p class="username-info-text">You are logged in as <span id="username-info"><?php echo $username; ?></span></p>
        </li>
        <li>
            <a id="options-logout-btn" class="btn">
                <span>
                    log out
                </span>
            </a>
        </li>
        <li class="logout-confirmation-wrapper background-copper-red hidden-options">
            <p class="logout-confirmation-text">
                are you sure?
            </p>
            <div class="logout-confirmation-btn-wrapper is-flex is-justify-content-center mb-2">
                <form action="logout.php" method="POST" id="logout-form">
                    <button type="submit" name="yes" class="btn btn-invert mx-3">
                        <span>
                            yes
                        </span>
                    </button>
                </form>
            </div>
        </li>
        <li>
            <a id="options-stats-btn" class="btn">
                <span>
                    stats
                </span>
            </a>
        </li>
        <li>
            <a id="options-settings-btn" class="btn">
                <span>
                    settings
                </span>
            </a>
        </li>
        <li>
            <a id="options-rate-us-btn" class="btn">
                <span>
                    rate us
                </span>
            </a>
        </li>
        <li>
            <a id="options-donate-btn" class="btn">
                <span>
                    donate
                </span>
            </a>
        </li>
    </ul>
</section>
<script>
    // const burger = document.querySelector('#burger');
    // const times = document.querySelector('#times');
    // const optionsWrapper = document.querySelector('#options-wrapper-welcome');
    // 
    // burger.addEventListener('click', () => {
    //     burger.classList.toggle('hide');
    //     times.classList.toggle('hide');
    //     // 
    //     optionsWrapper.classList.toggle('hidden-options');
    // });
    // // 
    // times.addEventListener('click', () => {
    //     burger.classList.toggle('hide');
    //     times.classList.toggle('hide');
    //     // 
    //     optionsWrapper.classList.toggle('hidden-options');
    //     // 
    //     if (!logOutConfirmation.classList.contains('hidden-options')) {
    //         logOutConfirmation.classList.add('hidden-options');
    //     }
    // });
    // 
    const logOutBtn = document.querySelector('#options-logout-btn');
    const logOutConfirmation = document.querySelector('.logout-confirmation-wrapper');
    // 
    logOutBtn.addEventListener('click', () => {
        logOutConfirmation.classList.toggle('hidden-options');
    });
    // 
    const logOutForm = document.querySelector('#logout-form');
    // 
    logOutForm.addEventListener('submit', e => {
        // Send async post request to logout.php
        fetch(logOutForm.action, {
                method: logOutForm.method,
                body: new FormData(logOutForm)
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
                if (docs.loggedOut) {
                    // User successfully logged out
                    // Redirect to index/main page
                    setTimeout(() => {
                        // Close options screen
                        burger.classList.toggle('hide');
                        times.classList.toggle('hide');
                        optionsWrapper.classList.toggle('hidden-options');
                        // Redirect

                        // ANY TIME YOU REDIRECT -- SHOW LOADER OF STH LIKE THAT (LOGIN, LOGOUT)

                        window.location = './welcome.php';
                    }, 1000);
                } else {
                    // User was not logged in
                    // Redirect to index/main page

                }
            })
            .catch(err => {
                // here you can handle also error from php
                // they come in a js form: JSON.parse blah blah
                console.log(err);
                // Handle when rejected (only network exceptions)

                // IN CASE OF ANY ERROR IN FETCH, SHOW A POP UP WITH A MESSAGE!!!
            });
        // 
        e.preventDefault();
    });
    // 
    // we will add this content, replace for anything you want to add
    // var wrapper, content, test;
    // var more = '<div style="height:1000px; background:green;"></div>';

    // // this is the scroll event handler
    // function scroller() {
    //     // print relevant scroll info
    //     test.innerHTML = wrapper.scrollTop + " + " + wrapper.offsetHeight + " + 100 > " + content.offsetHeight;
    //     console.log(test.innerHTML);

    //     // add more contents if user scrolled down enough
    //     if (wrapper.scrollTop + wrapper.offsetHeight + 100 > content.offsetHeight) {
    //         content.innerHTML += more; // NK: Here you can make an Ajax call and fetch content to append to content.innerHTML
    //     }
    // }

    // wrapper = document.getElementById("browse-wrapper");
    // content = document.getElementById("content");
    // test = document.getElementById("test");

    // content.innerHTML = more;

    // wrapper.addEventListener("scroll", () => {
    //     scroller();
    //     console.log('scrolling');
    // });
    // 
    const browseBtn = document.querySelector('#welcome-browse-btn');
    const addQuizBtn = document.querySelector('#welcome-add-new-quiz-btn');
    const browseWrapper = document.querySelector('#browse-wrapper');
    const welcomeWrapper = document.querySelector('#welcome-wrapper');
    // 
    // let allQuizzes = [];
    // const quizWrapper = document.querySelector('.quiz');
    // const renderQuizzes = page => {
    //     let html = '';
    //     const quizStart = 0 + (page - 1) * 3;
    //     const quizEnd = 3 + (page - 1) * 3;
    //     const pages = Math.ceil(allQuizzes.length / 3);
    //     console.log(pages);
    //     for (let index = quizStart; index < quizEnd; index++) {
    //         if (allQuizzes[index] === undefined) {
    //             break;
    //         }
    //         const quizID = allQuizzes[index]["quiz_id"];
    //         const quizCategory = allQuizzes[index]["quiz_type"];
    //         const quizName = allQuizzes[index]["quiz_name"];
    //         const quizAnswers = allQuizzes[index]["quiz_answers"];
    //         const quizQuestions = allQuizzes[index]["quiz_questions"];
    //         const quizCreatedAt = allQuizzes[index]["created_at"];
    //         html += `
    //         <div id="${quizID}" class="my-2">
    //             <div class="quiz-header columns is-mobile m-0 is-vcentered has-text-centered py-2 ${quizCategory}">
    //                 <div class="column is-3-mobile is-3 py-0" >
    //                     <span class="quiz-header-icon text-smoky-black">
    //                         ${quizCategory[0]}
    //                     </span> 
    //                 </div>
    //                 <div class="quiz-header-name column is-9-mobile is-9 py-0" >
    //                     ${quizName}
    //                 </div>
    //             </div>
    //             <div class="quiz-body columns is-mobile m-0 is-vcentered has-text-centered p-0">
    //                 <div class="quiz-body-more-info column is-6-mobile is-6 p-0" >
    //                     <a id="" class="btn btn-invert btn-small btn-vertical m-0 more-info-btn" >
    //                         <span>
    //                             more info
    //                         </span>
    //                     </a>
    //                 </div>
    //                 <div class="quiz-body-play column is-6-mobile is-6 p-0" >
    //                     <a id="" class="btn btn-invert btn-small btn-vertical m-0 play-btn" >
    //                         <span>
    //                             play
    //                         </span>
    //                     </a> 
    //                 </div>
    //             </div>
    //         </div>
    //         <div data-id="${quizID}" id ="" class="more-info-wrapper scaleY background-ghost-white columns is-mobile m-0 has-text-centered p-5 is-multiline is-flex is-flex-direction-column is-justify-content-start" >
    //             <div class="is-flex is-justify-content-start column is-12-mobile is-12 p-0" >
    //                 <a id="" class="control-btn back-btn" >
    //                     <span class="text-smoky-black">
    //                         Go Back
    //                     </span>
    //                 </a>
    //             </div>
    //             <div class="column is-12-mobile is-12 p-0 my-5" >
    //                 <div class="more-info-quiz-info columns is-mobile m-0 is-vcentered is-multiline is-flex is-flex-direction-column is-justify-content-center" >
    //                     <div class="column is-12-mobile is-12 p-0 my-1" >
    //                         <p class="text-smoky-black" > Name: ${quizName}</p>
    //                     </div>
    //                     <div class="column is-12-mobile is-12 p-0 my-1">
    //                         <p class="text-smoky-black" > Category: ${quizCategory}</p>
    //                     </div>
    //                     <div class="column is-12-mobile is-12 p-0 my-1">
    //                         <p class="text-smoky-black" > Questions: ${quizQuestions}</p>
    //                     </div>
    //                     <div class="column is-12-mobile is-12 p-0 my-1">
    //                         <p class="text-smoky-black" > Answers: ${quizAnswers}</p>
    //                     </div>
    //                     <div class="column is-12-mobile is-12 p-0 my-1">
    //                         <p class="text-smoky-black" > Created at: ${quizCreatedAt}</p>
    //                     </div>
    //                     <div class="column is-12-mobile is-12 p-0 my-1">
    //                         <p class="text-smoky-black" > Last Attempted: NO IDEA</p>
    //                     </div>
    //                     <div class="column is-12-mobile is-12 p-0 my-1">
    //                         <p class="text-smoky-black" > Last Score: NO IDEA </p>
    //                     </div>
    //                     <div class="column is-12-mobile is-12 p-0 my-1">
    //                         <a id="" class="btn m-0">
    //                             <span>
    //                                 play
    //                             </span>
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         `;
    //     };
    //     if (page === 1) {
    //         quizWrapper.lastElementChild.firstElementChild.classList.add('disabled');
    //     } else {
    //         quizWrapper.lastElementChild.firstElementChild.classList.remove('disabled');
    //     }
    //     if (page === pages) {
    //         quizWrapper.lastElementChild.lastElementChild.classList.add('disabled');
    //     } else {
    //         quizWrapper.lastElementChild.lastElementChild.classList.remove('disabled');
    //     }
    //     let lastChild = quizWrapper.lastElementChild;
    //     quizWrapper.firstElementChild.innerHTML = html;
    //     quizWrapper.appendChild(lastChild);
    //     quizWrapper.setAttribute('data-page', page);
    // }
    // 
    // browseBtn.addEventListener('click', () => {
    // welcomeWrapper.firstElementChild.classList.add('shrink');
    // Render data using JS
    // renderQuizzes(1);
    // 
    // 
    // setTimeout(() => {
    //     welcomeWrapper.classList.toggle('hidden-options');
    //     browseWrapper.classList.toggle('hidden-options');
    // }, 600);
    // });
    // 
    const browseBackBtn = document.querySelector('#browse-back-btn');
    // 
    browseBackBtn.addEventListener('click', () => {
        welcomeWrapper.classList.toggle('hidden-options');
        browseWrapper.classList.toggle('hidden-options');
        // 
        setTimeout(() => {
            welcomeWrapper.firstElementChild.classList.remove('shrink');
        }, 600);
    });
    // 
    // Here implement swiping when browsing quizzes
    // Use fetch API for that










    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
                /* left swipe */
                console.log('swiped left');
            } else {
                /* right swipe */
                console.log('swiped right');
            }
        } else {
            if (yDiff > 0) {
                /* up swipe */
                console.log('swiped up');
            } else {
                /* down swipe */
                console.log('swiped down');
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };
    // 
    // const moreInfoBtn = document.querySelector('.more-info-btn');
    // const moreInfoWrapper = document.querySelector('.more-info-wrapper');
    // 
    // const fetchQuizzes = async function() {
    //     return await fetch("fetchQuizzes.php", {
    //         method: "GET",
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    // }
    // call this function when browse database is clicked
    // do it only once and checked if allQuizzes is not empty and has some kind of flag (meaning that was fetched already)
    // fetchQuizzes()
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         allQuizzes = data.data.fields;
    //     });
    // const quizViewWrapper = document.querySelector('#quiz-view-wrapper');
    // const quizForm = document.querySelector('#quiz-form');
    // let questions = [];
    // let answers = [];
    // let correctAnswers = [];
    // let value = [];
    // let index = 0;
    // const quizQuestion = document.querySelector('#question-text');
    // const quitBtn = document.querySelector('#quiz-quit-btn');
    // const nextBtn = document.querySelector('#quiz-next-btn');
    // const qNumber = document.querySelector('#quiz-which-question');
    // const quitConfirmationWrapper = document.querySelector('.quiz-quit-confirmation-wrapper');
    // const quitYes = document.querySelector('#quit-quiz-yes');
    // const shuffleArray = array => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[j], array[i]] = [array[i], array[j]];
    //     }
    // }
    // const quizContent = document.querySelector('#quiz-content');
    // const quizResults = document.querySelector('#quiz-results');
    // const quizScore = document.querySelector('#quiz-score');
    // const quizFeedback = document.querySelector('#quiz-feedback');
    // let quizID = '';
    // document.addEventListener('click', e => {
    // More info btn clicked
    // if ((e.target.tagName === 'SPAN' && e.target.parentElement.classList.contains('more-info-btn')) || (e.target.classList.contains('more-info-btn') && e.target.tagName === 'A')) {
    //     console.log('jestem tutaj');
    //     // Get quiz id
    //     let quizID = '';
    //     if (e.target.tagName === 'SPAN') {
    //         quizID = e.target.parentElement.parentElement.parentElement.parentElement.id;
    //     } else {
    //         quizID = e.target.parentElement.parentElement.parentElement.id;
    //     }
    //     // console.log(quizID);
    //     // Show appropriate div with more info
    //     const divMoreInfo = document.querySelector(`div[data-id="${quizID}"]`);
    //     divMoreInfo.classList.remove('scaleY');
    // }
    // // Back btn on more info wrapper clicked
    // if ((e.target.tagName === 'SPAN' && e.target.parentElement.classList.contains('back-btn')) || (e.target.classList.contains('back-btn') && e.target.tagName === 'A')) {
    //     // Get quiz id
    //     let quizID = '';
    //     if (e.target.tagName === 'SPAN') {
    //         quizID = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    //     } else {
    //         quizID = e.target.parentElement.parentElement.getAttribute('data-id');
    //     }
    //     // console.log(quizID);
    //     // Hide appropriate div with more info
    //     const divMoreInfo = document.querySelector(`div[data-id="${quizID}"]`);
    //     divMoreInfo.classList.add('scaleY');
    // }
    // // Play btn clicked
    // if ((e.target.tagName === 'SPAN' && e.target.parentElement.classList.contains('play-btn')) || (e.target.classList.contains('play-btn') && e.target.tagName === 'A')) {
    //     quizViewWrapper.classList.toggle('hidden-options');
    //     // Get quiz id
    //     if (e.target.tagName === 'SPAN') {
    //         quizID = e.target.parentElement.parentElement.parentElement.parentElement.id;
    //     } else {
    //         quizID = e.target.parentElement.parentElement.parentElement.id;
    //     }
    //     console.log(quizID);
    //     // Assign quizID to hidden input value
    //     quizForm["quiz-id"].value = quizID;
    //     // Render question
    //     // Fetch quiz first
    //     console.log(allQuizzes);
    //     let trueQuizId = '';
    //     allQuizzes.forEach(quiz => {
    //         if (quiz.quiz_id === quizID) {
    //             trueQuizId = quiz.quiz_name;
    //         }
    //     });
    //     const data = {
    //         ID: trueQuizId
    //     };
    //     fetch("fetchQsAs.php", {
    //             method: "POST",
    //             mode: 'cors',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             // 
    //             questions = data.questions.fields;
    //             // Insert question
    //             console.log(questions);
    //             quizQuestion.innerHTML = `
    //             <p class="quiz-view-header-text">
    //                 ${questions[index]["question"]}
    //             </p>
    //             `;
    //             // Insert answers
    //             const questionID = questions[index]["question_ID"];
    //             answers = data.answers.fields;
    //             let currAnswers = [];
    //             answers.forEach(answer => {
    //                 if (answer.question_ID === questionID) {
    //                     currAnswers.push({
    //                         answer: answer.answer,
    //                         a_ID: answer.answer_ID,
    //                         q_ID: answer.question_ID,
    //                         is_correct: answer.is_correct === "1"
    //                     });
    //                 }
    //             });
    //             index++;
    //             console.log(currAnswers);
    //             shuffleArray(currAnswers);
    //             console.log(currAnswers);
    //             let aHtml = '';
    //             currAnswers.forEach((currAnswer, index) => {
    //                 if (currAnswer.is_correct) {
    //                     correctAnswers.push(index);
    //                 }
    //                 aHtml += `
    //                 <div class="quiz-view-answer-text has-text-centered p-2 m-0">
    //                     <div class="is-relative">
    //                         <input type="radio" name="${currAnswer.q_ID}" value="${index}" id="${currAnswer.a_ID}" class="btn m-0 p-0">
    //                         <label for="${currAnswer.a_ID}">
    //                             ${currAnswer.answer}
    //                         </label>
    //                     </div>
    //                 </div>
    //                 `;
    //             });
    //             let div = document.createElement('div');
    //             div.innerHTML = aHtml;
    //             quizForm.lastElementChild.appendChild(div);
    //             console.log(correctAnswers);
    //             qNumber.lastElementChild.textContent = questions.length;
    //         })
    // }
    // // Next btn clicked
    // if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === 'quiz-next-btn') || (e.target.id === 'quiz-next-btn' && e.target.tagName === 'A')) {
    //     if ((index + 1) === questions.length) {
    //         nextBtn.style.display = 'none';
    //         nextBtn.nextElementSibling.style.display = 'flex';
    //     }
    //     // Check if radio button is checked
    //     // console.log('Index: ' + index);
    //     const currName = questions[index - 1].question_ID;
    //     // console.log('CurrName: ' + currName);
    //     const target = [...quizForm[currName]].filter(r => r.checked)[0];
    //     if (target !== undefined) {
    //         value.push(target.value);
    //         // console.log('Value: ' + value);
    //         // Update question number
    //         qNumber.firstElementChild.textContent = (index + 1);
    //         // 
    //         quizForm.lastElementChild.lastElementChild.classList.add('hidden-options');
    //         // Insert question
    //         quizQuestion.innerHTML = `
    //         <p class="quiz-view-header-text">
    //             ${questions[index]["question"]}
    //         </p>
    //         `;
    //         // Insert answers
    //         const questionID = questions[index]["question_ID"];
    //         let currAnswers = [];
    //         answers.forEach(answer => {
    //             if (answer.question_ID === questionID) {
    //                 currAnswers.push({
    //                     answer: answer.answer,
    //                     a_ID: answer.answer_ID,
    //                     q_ID: answer.question_ID,
    //                     is_correct: answer.is_correct === "1"
    //                 });
    //             }
    //         });
    //         index++;
    //         shuffleArray(currAnswers);
    //         let aHtml = '';
    //         let div = document.createElement('div');
    //         quizForm.lastElementChild.appendChild(div);
    //         currAnswers.forEach((currAnswer, index) => {
    //             if (currAnswer.is_correct) {
    //                 correctAnswers.push(index);
    //             }
    //             aHtml += `
    //                     <div class="quiz-view-answer-text has-text-centered p-2 m-0">
    //                         <div class="is-relative">
    //                             <input type="radio" name="${currAnswer.q_ID}" value="${index}" id="${currAnswer.a_ID}" class="btn m-0 p-0">
    //                             <label for="${currAnswer.a_ID}">
    //                                 ${currAnswer.answer}
    //                             </label>
    //                         </div>
    //                     </div>
    //                     `;
    //         });
    //         quizForm.lastElementChild.lastElementChild.innerHTML = aHtml;
    //         // console.log(correctAnswers);
    //     } else {
    //         // show message
    //     }
    // }
    // // Quit btn clicked
    // if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === 'quiz-quit-btn') || (e.target.id === 'quiz-quit-btn' && e.target.tagName === 'A')) {
    //     quitConfirmationWrapper.classList.toggle('hidden-options');
    // }
    // if ((e.target.tagName === 'SPAN' && e.target.parentElement.id === 'quit-quiz-yes') || (e.target.id === 'quit-quiz-yes' && e.target.tagName === 'A')) {
    //     // ZRESETUJ GLOBAL VARS (INDEX, ETC.) + ZRESETUJ UI DISPLAY
    //     // If at the end of a quiz

    //     quitConfirmationWrapper.classList.toggle('hidden-options');
    //     index = 0;
    //     setTimeout(() => {
    //         quizViewWrapper.classList.toggle('hidden-options');
    //         setTimeout(() => {
    //             if (!quizResults.classList.contains('hidden-options')) {
    //                 quizResults.classList.add('hidden-options');
    //             }
    //             quizContent.classList.remove('hidden-options');
    //             quizForm.lastElementChild.innerHTML = '';
    //             quizContent.firstElementChild.firstElementChild.firstElementChild.innerHTML = '';
    //             qNumber.style.opacity = 1;
    //             qNumber.firstElementChild.textContent = 1;
    //             nextBtn.style.display = 'flex';
    //             nextBtn.nextElementSibling.style.display = 'none';
    //             nextBtn.nextElementSibling.nextElementSibling.style.display = 'none';
    //         }, 500);
    //     }, 500);
    // }
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
    // });
    // const browseQuizNext = document.querySelector('#browse-quizzes-next');
    // browseQuizNext.addEventListener('click', e => {
    // });
    // const browseQuizPrevious = document.querySelector('#browse-quizzes-previous');
    // browseQuizPrevious.addEventListener('click', e => {
    // });
    // Quiz submitted
    // const createLoader = target => {
    //     let div = document.createElement('div');
    //     div.className = 'is-flex is-flex-direction-column is-justify-content-center is-align-items-center loader-wrapper2';
    //     let loader = document.createElement('div');
    //     loader.className = 'loader hide';
    //     target.appendChild(div);
    //     target.lastElementChild.appendChild(loader);
    //     setTimeout(() => {
    //         target.lastElementChild.firstElementChild.classList.remove('hide');
    //     }, 250);
    // };
    // const removeLoader = () => {
    //     const loader = document.querySelector('.loader-wrapper2');
    //     loader.remove();
    // }
    // quizForm.addEventListener('submit', e => {
    //     console.log('quiz submitted');
    //     // Show loader
    //     createLoader(quizViewWrapper);
    //     quizContent.classList.toggle('hidden-options');
    //     qNumber.style.opacity = 0;
    //     nextBtn.nextElementSibling.style.display = 'none';
    //     nextBtn.nextElementSibling.nextElementSibling.style.display = 'flex';
    //     let score = 0;
    //     // Adjust UI & interact with db
    //     // Output quiz feedback
    //     let uHtml = '';
    //     questions.forEach((question, index) => {
    //         // userAnswers.push(quizForm[question.question_ID].value);
    //         if (quizForm[question.question_ID].value == correctAnswers[index]) {
    //             score++;
    //             uHtml += `
    //             <li class="is-flex is-justify-content-space-between is-align-items-center quiz-li-feedback input-valid">
    //                 <p class="">
    //                     ${question.question}
    //                 </p>
    //                 <span class="icon-validation" id="">
    //                     <i class="fas fa-check icon-valid"></i>
    //                 </span>
    //             </li>
    //             `;
    //         } else {
    //             uHtml += `
    //             <li class="is-flex is-justify-content-space-between is-align-items-center quiz-li-feedback input-invalid">
    //                 <p class="">
    //                     ${question.question}
    //                 </p>
    //                 <span class="icon-validation" id="">
    //                     <i class="fas fa-times icon-invalid"></i>
    //                 </span>    
    //             </li>
    //             `;
    //         }
    //     });
    //     console.log(quizID);
    //     const finalScore = (score / questions.length) * 100;
    //     console.log(finalScore);
    //     const data = {
    //         finalScore,
    //         quizID
    //     };
    //     fetch(quizForm.action, {
    //             method: quizForm.method,
    //             mode: 'cors',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error('Network problem.');
    //             }
    //             return res.json();
    //         })
    //         .then(docs1 => {
    //             console.log(docs1);
    //             setTimeout(() => {
    //                 removeLoader();
    //                 quizResults.classList.toggle('hidden-options');
    //                 // Output feedback & score
    //                 quizScore.textContent = finalScore + '%';
    //                 quizFeedback.innerHTML = uHtml;
    //                 // console.log('Correct asnwers: ' + correctAnswers);
    //                 // console.log('My answers: ' + userAnswers);
    //                 // console.log('My score: ' + finalScore + '%');
    //             }, 1000);
    //         })
    //         .catch(error => console.log(error));
    //     // 
    //     e.preventDefault();
    // });
    // Retry quiz
    // const retryBtn = document.querySelector('#quiz-retry-btn');
    // retryBtn.addEventListener('click', e => {
    // index = 0;
    // setTimeout(() => {
    //     if (!quizResults.classList.contains('hidden-options')) {
    //         quizResults.classList.add('hidden-options');
    //     }
    //     quizContent.classList.remove('hidden-options');
    //     quizForm.lastElementChild.innerHTML = '';
    //     quizContent.firstElementChild.firstElementChild.firstElementChild.innerHTML = '';
    //     qNumber.style.opacity = 1;
    //     qNumber.firstElementChild.textContent = 1;
    //     nextBtn.style.display = 'flex';
    //     nextBtn.nextElementSibling.style.display = 'none';
    //     nextBtn.nextElementSibling.nextElementSibling.style.display = 'none';
    //     // Output question
    //     quizQuestion.innerHTML = `
    //             <p class="quiz-view-header-text">
    //                 ${questions[index]["question"]}
    //             </p>
    //             `;
    //     // Insert answers
    //     const questionID = questions[index]["question_ID"];
    //     let currAnswers = [];
    //     answers.forEach(answer => {
    //         if (answer.question_ID === questionID) {
    //             currAnswers.push({
    //                 answer: answer.answer,
    //                 a_ID: answer.answer_ID,
    //                 q_ID: answer.question_ID,
    //                 is_correct: answer.is_correct === "1"
    //             });
    //         }
    //     });
    //     index++;
    //     console.log(currAnswers);
    //     shuffleArray(currAnswers);
    //     console.log(currAnswers);
    //     let aHtml = '';
    //     // Reset corrent answer
    //     console.log(correctAnswers);
    //     correctAnswers = [];
    //     console.log(correctAnswers);
    //     currAnswers.forEach((currAnswer, index) => {
    //         if (currAnswer.is_correct) {
    //             correctAnswers.push(index);
    //         }
    //         aHtml += `
    //                 <div class="quiz-view-answer-text has-text-centered p-2 m-0">
    //                     <div class="is-relative">
    //                         <input type="radio" name="${currAnswer.q_ID}" value="${index}" id="${currAnswer.a_ID}" class="btn m-0 p-0">
    //                         <label for="${currAnswer.a_ID}">
    //                             ${currAnswer.answer}
    //                         </label>
    //                     </div>
    //                 </div>
    //                 `;
    //     });
    //     let div = document.createElement('div');
    //     div.innerHTML = aHtml;
    //     quizForm.lastElementChild.appendChild(div);
    //     console.log(correctAnswers);
    //     qNumber.lastElementChild.textContent = questions.length;
    // }, 250);
    // });
    // 
    const filterQuizBtn = document.querySelector('#filter-back-btn');
    const filterQuizWrapper = document.querySelector('#filter-quiz-wrapper');
    const filterQuizBackBtn = document.querySelector('#filter-quiz-back-btn');
    const searchQuizBtn = document.querySelector('#search-back-btn');
    const searchQuizWrapper = document.querySelector('#search-quiz-wrapper');
    const searchQuizBackBtn = document.querySelector('#search-quiz-back-btn');
    // 
    filterQuizBtn.addEventListener('click', () => {
        filterQuizWrapper.classList.remove('scaleY');
    });
    filterQuizBackBtn.addEventListener('click', () => {
        filterQuizWrapper.classList.add('scaleY');
    });
    // 
    searchQuizBtn.addEventListener('click', () => {
        searchQuizWrapper.classList.remove('scaleY');
    });
    searchQuizBackBtn.addEventListener('click', () => {
        searchQuizWrapper.classList.add('scaleY');
    });
    // 
    const addQuizWrapper = document.querySelector('#add-new-quiz-wrapper');
    const addQuizBackBtn = document.querySelector('#add-new-quiz-back-btn');
    // 
    addQuizBtn.addEventListener('click', () => {
        welcomeWrapper.firstElementChild.classList.add('shrink');
        // 
        setTimeout(() => {
            welcomeWrapper.classList.toggle('hidden-options');
            addQuizWrapper.classList.toggle('hidden-options');
        }, 600);
    });
    // reset form
    // const resetForm = function(targetSelector, submitBtn) {
    //     const inputElements = document.querySelectorAll(targetSelector);
    //     Array.from(inputElements).forEach(input => {
    //         input.value = '';
    //         input.classList.remove('input-valid');
    //         input.classList.remove('input-invalid');
    //         if (!input.parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
    //             input.parentElement.lastElementChild.firstElementChild.classList.add('hide');
    //         }
    //         if (!input.parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
    //             input.parentElement.lastElementChild.lastElementChild.classList.add('hide');
    //         }
    //     });
    //     // disable submit btn
    //     if (!submitBtn.classList.contains('disabled')) {
    //         submitBtn.classList.add('disabled');
    //     }
    // }
    addQuizBackBtn.addEventListener('click', () => {
        welcomeWrapper.classList.toggle('hidden-options');
        addQuizWrapper.classList.toggle('hidden-options');
        // 
        // RESET FORM
        addQuizForm["quiz-name"].value = '';
        addQuizForm["quiz-type"].value = 'Quiz Type';
        addQuizForm["quiz-answers"].value = 2;
        addQuizForm["quiz-questions"].value = 4;
        // disable submit btn
        if (!addQuizForm["quiz-generate"].classList.contains('disabled')) {
            addQuizForm["quiz-generate"].classList.add('disabled');
        }
        // Hide submit feedback
        hideSubmitFeedback(submitGenerateFeedback);
        // Reenable inputs & select !
        // 
        setTimeout(() => {
            welcomeWrapper.firstElementChild.classList.remove('shrink');
        }, 600);
    });
    // 
    const increment = document.querySelectorAll('.increment');
    const decrement = document.querySelectorAll('.decrement');
    // 
    const addQuizForm = document.querySelector('#add-quiz-form');
    // 
    addQuizForm.addEventListener('click', e => {
        if (e.target.classList.contains('increment')) {
            if (!(Number(e.target.previousElementSibling.value) >= Number(e.target.previousElementSibling.max))) {
                e.target.previousElementSibling.value++;
                console.log('jestem tutaj');
                checkIfEmpty();
            }
            // 
            e.preventDefault();
        }
        if (e.target.classList.contains('decrement')) {
            if ((Number(e.target.nextElementSibling.value) > Number(e.target.nextElementSibling.min))) {
                e.target.nextElementSibling.value--;
                console.log('jestem tutaj tez');
                checkIfEmpty();
            }
            // 
            e.preventDefault();
        }
    });














    const getAllWordsByPage = async function(pageNum = 1) {
        return await fetch('https://wordsapiv1.p.rapidapi.com/words/?' + new URLSearchParams({
                letterPattern: '^[A-z]{2,}$',
                page: pageNum
            }), {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "yourKey",
                    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
                }
            })
            .then(response => response.json());
    }
    const getWordsByRandomPages = async function(numberOfQuestions, numOfAnswers) {
        // Get all words
        let pages = '',
            data = [],
            randomPages = [];
        return await getAllWordsByPage()
            .then(doc => {
                // No errors -- proceed in a regular fashion
                // Total number of pages
                pages = doc.results.total;
                console.log(pages);
                console.log(Math.ceil(pages / 100));
                // Generate random pages
                while (randomPages.length < numberOfQuestions * numOfAnswers) {
                    const r = Math.floor(Math.random() * Math.ceil(pages / 100));
                    if (randomPages.indexOf(r) === -1) {
                        randomPages.push(r);
                    }
                }
                console.log(randomPages);
                // Get all words by randomPages
                let promises = [];
                // Add promises in a loop
                for (let i = 0; i < randomPages.length; i++) {
                    promises.push(getAllWordsByPage(randomPages[i]));
                }
                return Promise.all(promises);
            })
            .catch(error => {
                // Errors -- handle those in here
                console.log(error);
            });
    }
    const getRandomWordDefinitions = async function(missingWords, oldWordDefinitions) {
        let wordsDefinitions = {};
        console.log(missingWords);
        // Loop till word with definition is found
        while (true) {
            // Fetch random word
            const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/?' + new URLSearchParams({
                random: 'true'
            }), {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "yourKey",
                    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
                }
            });
            // Convert to json
            const doc = await response.json();
            // Get word field
            const word = doc.word;
            console.log(word);
            // Check if fetched word is unique
            if (!Object.keys(oldWordDefinitions).includes(word)) {
                // Fetch definition for this word
                const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/' + word + '/definitions', {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "yourKey",
                        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
                    }
                });
                // Convert to json
                const doc = await response.json();
                console.log(doc);
                // If fetched word has definition, add it to wordDefinitions object
                if (doc.definitions.length) {
                    wordsDefinitions[word] = doc.definitions;
                }
                // If wordDefinitions has specified length, break from the loop
                console.log(Object.keys(wordsDefinitions).length);
                if (Object.keys(wordsDefinitions).length === missingWords) {
                    break;
                }
            }
        }
        console.log('skonczylem drugi raz');
        return wordsDefinitions;
    }
    const getSpecifiedWordDefinitions = async function(words) {
        let i = 0,
            wordsDefinitions = {};
        // Loop to get all words specified in words array
        while (i < words.length) {
            console.log(i);
            const word = words[i];
            // Fetch word
            const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/' + word + '/definitions', {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "yourKey",
                    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
                }
            });
            // Convert to json
            const doc = await response.json();
            // If fetched word has definition, add it to wordDefinitions object
            if (doc.definitions.length) {
                console.log('jestem tutaaaaaaj');
                wordsDefinitions[word] = doc.definitions;
            }
            console.log(wordsDefinitions);
            // If wordDefinitions has specified length, break from the loop
            // console.log(Object.keys(wordsDefinitions).length);
            // if (Object.keys(wordsDefinitions).length === 2) {
            //     break;
            // }
            i++;
        }
        console.log('skonczylem');
        return wordsDefinitions;
    }
    // let words = ["scandalised", "destalinize"];
    const numOfQuestion = 2;
    const numOfAnswers = 4;
    // getWordsByRandomPages(numOfQuestion, numOfAnswers)
    // .then(docs => {
    //     console.log(docs);
    //     // Generate random word indexes
    //     let randomIndexes = [], randomWords = [];
    //     while (randomIndexes.length < numOfQuestion * numOfAnswers) {
    //         const r = Math.floor(Math.random() * 100) + 1;
    //         if (randomIndexes.indexOf(r) === -1) { randomIndexes.push(r); }
    //     }
    //     console.log(randomIndexes);
    //     // Get random words based on randomIndexes
    //     docs.forEach((doc, index) => {
    //         randomWords.push(doc.results.data[randomIndexes[index]]);
    //     });
    //     console.log(randomWords);
    //     // Get all words definitions
    //     let wordDefinitions = [];
    //     getSpecifiedWordDefinitions(randomWords)
    //     .then(definitions => {
    //         wordDefinitions = definitions;
    //         console.log(wordDefinitions);
    //         console.log('DONE');
    //         // Check if length of wordDefinitions is greater than or equal to length of numOfQuestions
    //         if (Object.keys(wordDefinitions).length === numOfQuestion * numOfAnswers) {
    //             // Yes - ok
    //             console.log('jest ok');
    //             // Here check if there is enough word to create answers
    //             // Yes -- 
    //             return undefined;
    //             // No -- fetch more word definitions -- you can do it in one if statement!!!
    //             // const missingWords = 2 - Object.keys(wordDefinitions).length;
    //             // return getRandomWordDefinitions(missingWords, wordDefinitions);
    //         } else {
    //             // No - show user a message that generator found that many words (is that ok?) + if not ok -- add async function that searches for random word within a while loop till it finds appropriate amount of words with definitions
    //             const missingWords = numOfQuestion * numOfAnswers - Object.keys(wordDefinitions).length;
    //             return getRandomWordDefinitions(missingWords, wordDefinitions);

    //         }
    //     })
    //     .then(definition => {
    //         if (definition === undefined) {
    //             console.log('jest ok, znowu');
    //         } else {
    //             console.log(definition);
    //             console.log({...wordDefinitions, ...definition});
    //         }
    //     });
    // });

    // Generate new quiz
    // addQuizForm.addEventListener('submit', e => {
    //     const quizName = addQuizForm["quiz-name"].value;
    //     const quizType = addQuizForm["quiz-type"].value;
    //     const quizAnswers = addQuizForm["quiz-answers"].value;
    //     const quizQuestions = addQuizForm["quiz-questions"].value;
    //     console.log(quizName);
    //     console.log(quizType);
    //     console.log(quizAnswers);
    //     console.log(quizQuestions);

    //     e.preventDefault();
    // });
    // 
    const checkIfEmpty = function() {
        if (addQuizForm["quiz-name"].value !== '' && addQuizForm["quiz-type"].value !== 'Quiz Type' && addQuizForm["quiz-answers"].value !== '' && addQuizForm["quiz-questions"].value !== '' && (addQuizForm["quiz-answers"].value >= 2 && addQuizForm["quiz-answers"].value <= 4) && (addQuizForm["quiz-questions"].value >= 4 && addQuizForm["quiz-questions"].value <= 10)) {
            addQuizForm["quiz-generate"].classList.remove('disabled');
        } else {
            addQuizForm["quiz-generate"].classList.add('disabled');
        }
    }
    // Check Name
    addQuizForm["quiz-name"].addEventListener('keyup', () => {
        console.log('jestem w name');
        checkIfEmpty();
    });
    addQuizForm["quiz-name"].addEventListener('blur', () => {
        console.log('jestem w name');
        checkIfEmpty();
    });
    // Check Type
    addQuizForm["quiz-type"].addEventListener('change', () => {
        console.log('jestem w type');
        checkIfEmpty();
    });
    // Check Answers
    addQuizForm["quiz-answers"].addEventListener('keyup', () => {
        console.log('jestem w type');
        checkIfEmpty();
    });
    // Check Answers
    addQuizForm["quiz-answers"].addEventListener('blur', () => {
        console.log('jestem w type');
        checkIfEmpty();
    });
    // Check Questions
    addQuizForm["quiz-questions"].addEventListener('keyup', () => {
        console.log('jestem w type');
        checkIfEmpty();
    });
    // Check Questions
    addQuizForm["quiz-questions"].addEventListener('blur', () => {
        console.log('jestem w type');
        checkIfEmpty();
    });
    // Show/hide errors
    const showGenerateErrors = document.querySelector('#submit-generate-feedback .error-icon-wrapper');
    const generateFeedbackWrapper = document.querySelector('#generate-feedback-wrapper');
    const generateFeedbackBackBtn = document.querySelector('#generate-feedback-back-btn');
    // 
    showGenerateErrors.addEventListener('click', () => {
        generateFeedbackWrapper.classList.toggle('hidden-options');
    })
    // 
    generateFeedbackBackBtn.addEventListener('click', () => {
        generateFeedbackWrapper.classList.toggle('hidden-options');
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
    const inputValid = function(target, feedback) {
        if (!target.classList.contains('input-valid')) {
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
    const generateNameValidationIcons = document.querySelector('#generate-name-validation');
    const generateTypeValidationIcons = document.querySelector('#generate-type-validation');
    const generateAnswersValidationIcons = document.querySelector('#generate-answers-validation');
    const generateQuestionsValidationIcons = document.querySelector('#generate-questions-validation');
    const handleFormDataLogin = function(data) {
        // Count errors
        let err_count = 0;
        // Check username
        if (checkField(data["quiz-name"])) {
            err_count++;
            console.log('jestem tutaj');
            inputInvalid(addQuizForm["quiz-name"], generateNameValidationIcons);
            // 
            setTimeout(() => {
                inputInvalidRemove(addQuizForm["quiz-name"], generateNameValidationIcons);
            }, 2000);
            // 
            return err_count;
        } else {
            inputValid(addQuizForm["quiz-name"], generateNameValidationIcons);
        }
        if (checkField(data["quiz-type"])) {
            err_count++;
            inputInvalid(addQuizForm["quiz-type"], generateTypeValidationIcons);
            // 
            setTimeout(() => {
                inputInvalidRemove(addQuizForm["quiz-type"], generateTypeValidationIcons);
            }, 2000);
            // 
            return err_count;
        } else {
            inputValid(addQuizForm["quiz-type"], generateTypeValidationIcons);
        }
        if (checkField(data["quiz-answers"])) {
            err_count++;
            inputInvalid(addQuizForm["quiz-answers"], generateAnswersValidationIcons);
            // 
            setTimeout(() => {
                inputInvalidRemove(addQuizForm["quiz-answers"], generateAnswersValidationIcons);
            }, 2000);
            // 
            return err_count;
        } else {
            inputValid(addQuizForm["quiz-answers"], generateAnswersValidationIcons);
        }
        if (checkField(data["quiz-questions"])) {
            err_count++;
            inputInvalid(addQuizForm["quiz-questions"], generateQuestionsValidationIcons);
            // 
            setTimeout(() => {
                inputInvalidRemove(addQuizForm["quiz-questions"], generateQuestionsValidationIcons);
            }, 2000);
            // 
            return err_count;
        } else {
            inputValid(addQuizForm["quiz-questions"], generateQuestionsValidationIcons);
        }
        // Check db
        err_count += checkField(data.db);

        return err_count;
    }
    const checkField = function(field) {
        console.log(field);
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
    const submitGenerateFeedback = document.querySelector('#submit-generate-feedback');
    const generateConfirmation = document.querySelector('#generate-confirmation');
    const unlockInputFields = function(target) {
        Array.from(target).forEach(input => {
            input.removeAttribute("readonly");
        });
    }
    // 

    const generateQuizTextFeddback = document.querySelector('#generate-quiz-text-feedback');
    const generateQuizLoader = document.querySelector('#generate-quiz-loader');
    const postData = async function(data) {
        return await fetch("store.php", {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    // submit generate form
    addQuizForm.addEventListener('submit', e => {
        // Assign var names
        const quizName = addQuizForm["quiz-name"].value;
        const quizType = addQuizForm["quiz-type"].value;
        const quizAnswers = addQuizForm["quiz-answers"].value;
        const quizQuestions = addQuizForm["quiz-questions"].value;
        // Check if there is anything in inputs
        if (addQuizForm["quiz-name"].value !== '' && addQuizForm["quiz-type"].value !== 'Quiz Type' && addQuizForm["quiz-answers"].value !== '' && addQuizForm["quiz-questions"].value !== '' && (addQuizForm["quiz-answers"].value >= 2 && addQuizForm["quiz-answers"].value <= 4) && (addQuizForm["quiz-questions"].value >= 4 && addQuizForm["quiz-questions"].value <= 10) && !addQuizForm["quiz-name"].hasAttribute('readonly') && !addQuizForm["quiz-type"].hasAttribute('disabled') && !addQuizForm["quiz-answers"].hasAttribute('readonly') && !addQuizForm["quiz-questions"].hasAttribute('readonly')) {
            // Adjust UI
            if (submitGenerateFeedback.classList.contains('hide')) {
                submitGenerateFeedback.classList.remove('hide');
                submitGenerateFeedback.lastElementChild.classList.remove('hide');
            } else {
                submitGenerateFeedback.firstElementChild.classList.add('hide');
                submitGenerateFeedback.lastElementChild.classList.remove('hide');
            }
            // Lock input fields & submit btn
            addQuizForm["quiz-name"].setAttribute("readonly", true);
            addQuizForm["quiz-type"].setAttribute("disabled", true);
            addQuizForm["quiz-select"].value = addQuizForm["quiz-type"].value;
            addQuizForm["quiz-answers"].setAttribute("readonly", true);
            addQuizForm["quiz-questions"].setAttribute("readonly", true);
            addQuizForm["quiz-generate"].classList.add("disabled");
            // Clear feedback div
            clearFeedbackDiv(generateFeedbackWrapper);
            // Set local var
            let err_count = 0;
            let wordDefinitions = [];
            // Post data using the Fetch API
            fetch(addQuizForm.action, {
                    method: addQuizForm.method,
                    body: new FormData(addQuizForm)
                })
                .then(res => {
                    // Check if response ok
                    if (!res.ok) {
                        throw new Error('Network problem.');
                    }
                    return res.json();
                })
                .then(docs1 => {
                    console.log(docs1);
                    // Handle when resolved
                    // Fetch promise rejects only when there is network error
                    // Handle input data
                    err_count = handleFormDataLogin(docs1);
                    if (err_count) { // errors found
                        setTimeout(() => {
                            submitGenerateFeedback.lastElementChild.classList.add('hide');
                            submitGenerateFeedback.firstElementChild.classList.remove('hide');
                            // Unlock input fields & submit btn
                            addQuizForm["quiz-name"].removeAttribute("readonly");
                            addQuizForm["quiz-type"].removeAttribute("disabled");
                            addQuizForm["quiz-answers"].removeAttribute("readonly");
                            addQuizForm["quiz-questions"].removeAttribute("readonly");
                            addQuizForm["quiz-generate"].classList.remove("disabled");
                        }, 500);
                    } else { // no errors
                        setTimeout(() => {
                            // Unlock input fields & submit btn
                            addQuizForm["quiz-name"].removeAttribute("readonly");
                            addQuizForm["quiz-type"].removeAttribute("disabled");
                            addQuizForm["quiz-answers"].removeAttribute("readonly");
                            addQuizForm["quiz-questions"].removeAttribute("readonly");
                            addQuizForm["quiz-generate"].classList.remove("disabled");
                            console.log('all good');
                            // Hide submit feedback div
                            submitGenerateFeedback.classList.add('hide');
                            submitGenerateFeedback.firstElementChild.classList.add('hide');
                            setTimeout(() => {
                                // Show confirmation wrapper & loader, set text
                                generateConfirmation.classList.remove('hidden-options');
                                generateQuizLoader.classList.add('start-loader');
                                generateQuizTextFeddback.textContent = 'Fetching words...';
                                // Fetch data from WordAPI
                                getWordsByRandomPages(quizQuestions, quizAnswers)
                                    .then(docs2 => {
                                        // Reset form
                                        addQuizForm["quiz-name"].value = '';
                                        addQuizForm["quiz-name"].classList.remove('input-valid');
                                        addQuizForm["quiz-name"].classList.remove('input-invalid');
                                        if (!addQuizForm["quiz-name"].parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
                                            addQuizForm["quiz-name"].parentElement.lastElementChild.firstElementChild.classList.add('hide');
                                        }
                                        if (!addQuizForm["quiz-name"].parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
                                            addQuizForm["quiz-name"].parentElement.lastElementChild.lastElementChild.classList.add('hide');
                                        }
                                        addQuizForm["quiz-type"].value = 'Quiz Type';
                                        addQuizForm["quiz-type"].classList.remove('input-valid');
                                        addQuizForm["quiz-type"].classList.remove('input-invalid');
                                        if (!addQuizForm["quiz-type"].parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
                                            addQuizForm["quiz-type"].parentElement.lastElementChild.firstElementChild.classList.add('hide');
                                        }
                                        if (!addQuizForm["quiz-type"].parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
                                            addQuizForm["quiz-type"].parentElement.lastElementChild.lastElementChild.classList.add('hide');
                                        }
                                        addQuizForm["quiz-answers"].value = 2;
                                        addQuizForm["quiz-answers"].classList.remove('input-valid');
                                        addQuizForm["quiz-answers"].classList.remove('input-invalid');
                                        if (!addQuizForm["quiz-answers"].parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
                                            addQuizForm["quiz-answers"].parentElement.lastElementChild.firstElementChild.classList.add('hide');
                                        }
                                        if (!addQuizForm["quiz-answers"].parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
                                            addQuizForm["quiz-answers"].parentElement.lastElementChild.lastElementChild.classList.add('hide');
                                        }
                                        addQuizForm["quiz-questions"].value = 4;
                                        addQuizForm["quiz-questions"].classList.remove('input-valid');
                                        addQuizForm["quiz-questions"].classList.remove('input-invalid');
                                        if (!addQuizForm["quiz-questions"].parentElement.lastElementChild.firstElementChild.classList.contains('hide')) {
                                            addQuizForm["quiz-questions"].parentElement.lastElementChild.firstElementChild.classList.add('hide');
                                        }
                                        if (!addQuizForm["quiz-questions"].parentElement.lastElementChild.lastElementChild.classList.contains('hide')) {
                                            addQuizForm["quiz-questions"].parentElement.lastElementChild.lastElementChild.classList.add('hide');
                                        }
                                        // disable submit btn
                                        if (!addQuizForm["quiz-generate"].classList.contains('disabled')) {
                                            addQuizForm["quiz-generate"].classList.add('disabled');
                                        }
                                        // Hide submit feedback
                                        hideSubmitFeedback(submitGenerateFeedback);
                                        // Generate random word indexes
                                        let randomIndexes = [],
                                            randomWords = [];
                                        while (randomIndexes.length < quizQuestions * quizAnswers) {
                                            const r = Math.floor(Math.random() * 100) + 1;
                                            if (randomIndexes.indexOf(r) === -1) {
                                                randomIndexes.push(r);
                                            }
                                        }
                                        // Get random words based on randomIndexes
                                        docs2.forEach((doc, index) => {
                                            randomWords.push(doc.results.data[randomIndexes[index]]);
                                        });
                                        // Update UI text
                                        generateQuizTextFeddback.textContent = 'Fetching definitions...';
                                        // Fetch definitions
                                        return getSpecifiedWordDefinitions(randomWords);
                                    })
                                    .then(definitions => {
                                        wordDefinitions = definitions;
                                        console.log('DONE');
                                        // Check if length of wordDefinitions is greater than or equal to
                                        if (Object.keys(wordDefinitions).length === quizQuestions * quizAnswers) {
                                            // Yes - ok
                                            console.log('jest ok');
                                            return undefined;
                                        } else {
                                            // No
                                            const missingWords = quizQuestions * quizAnswers - Object.keys(wordDefinitions).length;
                                            return getRandomWordDefinitions(missingWords, wordDefinitions);
                                        }
                                    })
                                    .then(definition => {
                                        if (definition === undefined) {
                                            console.log('jest ok, znowu');
                                        } else {
                                            wordDefinitions = {
                                                ...wordDefinitions,
                                                ...definition
                                            };
                                            console.log(wordDefinitions);
                                        }
                                        // Here words and their definitions were fetched correctly
                                        // Here generate questions
                                        console.log('jestem tu - przed ostatnim fetch');
                                        const questionTemplates = [
                                            "What is the definition of $?",
                                            "How would you define $?",
                                            "How to define $?",
                                            "What is the meaning of $?",
                                            "What does $ mean?"
                                        ];
                                        let questionsToSave = {};
                                        // Iterate over word definitions
                                        console.log('przed for loop');
                                        for (const key in wordDefinitions) {
                                            console.log(key);
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
                                            questionsToSave[key] = {};
                                            questionsToSave[key].correctAnswer = definition;
                                            // Get random question template
                                            const r = Math.floor(Math.random() * questionTemplates.length);
                                            // Create question
                                            questionsToSave[key].question = questionTemplates[r].replace("$", `${key} (${partOfSpeech})`);
                                        }
                                        // Here all questions & answer for each question is correctly generated
                                        console.log(questionsToSave);
                                        console.log('tututututu');
                                        // Generate questions to save & remaining answers
                                        const questionsKeys = Object.keys(questionsToSave);
                                        let indexes = [];
                                        while (indexes.length < quizQuestions) { // number of questions
                                            const r = Math.floor(Math.random() * questionsKeys.length);
                                            if (indexes.indexOf(r) === -1) {
                                                indexes.push(r);
                                            }
                                        }
                                        let questionsSaveSave = {};
                                        let answersSaveSave = [];
                                        questionsKeys.forEach((key, index) => {
                                            if (indexes.includes(index)) {
                                                questionsSaveSave[key] = questionsToSave[key];
                                            } else {
                                                const lolo = questionsToSave[key];
                                                answersSaveSave.push(lolo.correctAnswer);
                                            }
                                        });
                                        const data = {
                                            questions: questionsSaveSave,
                                            answers: answersSaveSave,
                                            quizID: quizName,
                                            answersTotal: quizAnswers
                                        };
                                        console.log(data);
                                        // Save to db as a transaction
                                        console.log('tutaj postData jest wywolany');
                                        // Update UI text
                                        generateQuizTextFeddback.textContent = 'Saving...';
                                        return postData(data);
                                    })
                                    .then(res => {
                                        // Check if response ok
                                        if (!res.ok) {
                                            throw new Error('Network problem.');
                                        }
                                        return res.json();
                                    })
                                    .then(docs3 => {
                                        console.log(docs3);
                                        console.log('jestem az tutaj');
                                        allQuizzes = docs3['snapshot'];
                                        console.log(allQuizzes);
                                        generateQuizTextFeddback.textContent = 'Done!';
                                        generateQuizLoader.classList.remove('start-loader');
                                        setTimeout(() => {
                                            generateConfirmation.classList.add('hidden-options');
                                            addQuizWrapper.classList.add('hidden-options');
                                            // Render quizzes
                                            renderQuizzes(1);
                                            browseWrapper.classList.toggle('hidden-options');
                                            // 
                                            // location.reload(true);
                                            // Jest opcja, zeby nie odswiezac -- zrob fetch wszystkich quizzow, wygeneruj templates za pomoca js

                                            // Jak to wszystko juz bedzie gotowe -- przenies uzytkownika na strone glowna quizu (tak jakby wybral ten quiz z puli quizzow)
                                            // Kazde pytanie na osobnej stronie
                                            // Daj mozliwosc powrotu do poprzedniego pytania
                                            // Na ostatniej stronie submit form ze wszystkimi odpowiedziami
                                            // Policz wynik, pokaz wynik, zapisz ostatni wynik do bazy danych
                                        }, 1500);
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    });
                            }, 500);
                        }, 1000);
                    }
                })
                .catch(error => {
                    // here you can handle also error from php
                    // they come in a js form: JSON.parse blah blah
                    console.log(error);
                    // Handle when rejected (only network exceptions)
                    if (err_count) {
                        setTimeout(() => {
                            submitGenerateFeedback.lastElementChild.classList.add('hide');
                            submitGenerateFeedback.firstElementChild.classList.remove('hide');
                            // Unlock input fields
                            addQuizForm["quiz-name"].removeAttribute("readonly");
                            addQuizForm["quiz-type"].removeAttribute("disabled");
                            addQuizForm["quiz-answers"].removeAttribute("readonly");
                            addQuizForm["quiz-questions"].removeAttribute("readonly");

                            addQuizForm["quiz-generate"].classList.remove("disabled");
                        }, 500);
                    }
                });
        } else {
            // W tym miejscu, nie przechodzi przez front-end validation
            // Pokaz error msg albo po prostu pozbadz sie else
        }
        // Prevent the default form submit
        e.preventDefault();
    });
</script>