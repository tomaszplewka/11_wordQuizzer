<?php include('templates/includes/header.php'); ?>
    <!-- Welcome screen & demo screen -->
    <section class="background-copper-red-gradient is-flex is-flex-direction-column is-justify-content-start p-5 is-relative" id="welcome-wrapper"><!-- hidden-options -->
        <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline" id="welcome-content-wrapper">
            <!-- <div class="is-flex is-justify-content-start">
                <a id="welcome-back-btn" class="control-btn">
                    <span class="">
                        Go Back
                    </span>
                </a>
            </div> -->
            <div class="column is-12-mobile is-12 py-0 mt-5">
                <div class="box-floating" id="welcome-logo-browse">
                    <div class="db-disc-top">
                        <img src="imgs/wordRiddler_db_disc_x3.png" alt="">
                    </div>
                    <div class="db-disc-middle">
                        <img src="imgs/wordRiddler_db_disc_x3.png" alt="">
                    </div>
                    <div class="db-disc-bottom">
                        <img src="imgs/wordRiddler_db_disc_x3.png" alt="">
                    </div>
                </div>
            </div>
            <div class="column is-12-mobile is-12 px-0 pt-0 pb-5 is-relative">
                <div class="button-wrapper-primary">
                    <a id="welcome-browse-btn" class="btn btn-invert">
                        <span>
                            browse
                        </span>
                    </a>
                </div>
            </div>
            <div class="column is-12-mobile is-12 py-0">
                <div class="box-floating" id="welcome-logo-new-quiz">
                    <div class="new-quiz">
                        <img src="imgs/wordRiddler_add_new_x3.png" alt="">
                    </div>
                </div>
            </div>
            <div class="column is-12-mobile is-12 px-0 pt-0 pb-5 is-relative">
                <div class="button-wrapper-primary">
                    <a id="welcome-add-new-quiz-btn" class="btn btn-invert">
                        <span>
                            add new quiz
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- Add new quiz screen -->
    <section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="add-new-quiz-wrapper">
        <div class="generate-confirmation is-flex is-justify-content-center is-align-items-center hidden-options background-mountain-meadow" id="login-confirmation">
            <p class="login-confirmation-text text-ghost-white p-2">
                Your quiz is being generated. Hold on! This may take a while.
            </p>
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
                            <p role="alert" class="status-failure has-text-left" >name</p>
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
                            <p role="alert" class="status-ok has-text-left" >name</p>
                        </div>
                        <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                            <i class="fas fa-check fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div class="generate-type-wrapper-if-error">
                    <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                        <div class="column is-10-mobile is-10 p-2">
                            <p role="alert" class="status-failure has-text-left" >type</p>
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
                            <p role="alert" class="status-ok has-text-left" >type</p>
                        </div>
                        <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                            <i class="fas fa-check fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div class="generate-answers-wrapper-if-error">
                    <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                        <div class="column is-10-mobile is-10 p-2">
                            <p role="alert" class="status-failure has-text-left" >answers</p>
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
                            <p role="alert" class="status-ok has-text-left" >answers</p>
                        </div>
                        <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                            <i class="fas fa-check fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div class="generate-questions-wrapper-if-error">
                    <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                        <div class="column is-10-mobile is-10 p-2">
                            <p role="alert" class="status-failure has-text-left" >questions</p>
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
                            <p role="alert" class="status-ok has-text-left" >questions</p>
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
                        <div class="column is-12-mobile is-12 p-0 has-text-centered my-2">
                            <input class="input py-1" type="text" name="quiz-name" placeholder="NAME">
                        </div>
                        <div class="column is-12-mobile is-12 p-0 has-text-centered my-2">
                            <div class="select text-ghost-white">
                                <select class="py-1" name="quiz-type">
                                    <option selected disabled>Quiz Type</option>
                                    <option>Definitions</option>
                                </select>
                            </div>
                        </div>
                        <div class="column is-12-mobile is-12 p-0 has-text-centered my-2">
                            <input class="input py-1" type="hidden" name="quiz-select">
                        </div>
                        <div class="column is-12-mobile is-12 p-0 has-text-centered my-2 number-input-wrapper">
                            <div class="number-input">
                                <button class="decrement"></button>
                                <input id="quiz-answers" class="quantity input mx-3" name="quiz-answers" min="2" max="6" step="1" value="2" type="number">
                                <button class="increment plus"></button>
                            </div>
                        </div>
                        <div class="column is-12-mobile is-12 p-0 has-text-centered mt-2 mb-0 number-input-wrapper">
                            <div class="number-input">
                                <button class="decrement"></button>
                                <input id="quiz-questions" class="quantity input mx-3" name="quiz-questions" min="4" max="10" step="1" value="4" type="number">
                                <button class="increment plus"></button>
                            </div>
                        </div>
                        <div class="submit-feedback mt-4 hide column is-12-mobile is-12" id="submit-generate-feedback">
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
                                    <p role="alert" class="status-ok" >Busy sending data.</p>
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
    <section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="browse-wrapper">
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
        <div id="more-info-wrapper" class="scaleY background-ghost-white columns is-mobile m-0 has-text-centered p-5 is-multiline">
            <div class="is-flex is-justify-content-start column is-12-mobile is-12 p-0">
                <a id="more-info-back-btn" class="control-btn">
                    <span class="text-smoky-black">
                        Go Back
                    </span>
                </a>
            </div>
            <div class="swiped-right column is-1-mobile is-1 p-0 is-flex is-flex-direction-column is-justify-content-center is-align-items-center text-smoky-black">
                <i class="fas fa-caret-left"></i>
            </div>
            <div class="column is-10-mobile is-10 p-0">
                <div class="more-info-quiz-info columns is-mobile m-0 is-vcentered is-multiline is-flex is-flex-direction-column is-justify-content-center">
                    <div class="column is-12-mobile is-12 p-0">
                        <a id="" class="m-0">
                            <span>
                                HERE DISPLAY INFO ABOUT THE QUIZ: NAME, TYPE (CATEGORY), AVERAGE SCORE, LAST ACTIVITY
                            </span>
                        </a>
                    </div>
                    <div class="column is-12-mobile is-12 p-0">
                        <a id="" class="btn m-0">
                            <span>
                                play
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="swiped-left column is-1-mobile is-1 p-0 is-flex is-flex-direction-column is-justify-content-center is-align-items-center text-smoky-black">
                <i class="fas fa-caret-right"></i>
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
            <div class="quiz text-ghost-white my-4">
                <div class="quiz-header acronym columns is-mobile m-0 is-vcentered has-text-centered py-2">
                    <div class="column is-3-mobile is-3 py-0">
                        <span class="quiz-header-icon text-smoky-black">
                            A
                        </span>
                    </div>
                    <div class="quiz-header-name column is-9-mobile is-9 py-0">
                        Name goes here!
                    </div>
                </div>
                <div class="quiz-body columns is-mobile m-0 is-vcentered has-text-centered p-0">
                    <div class="quiz-body-more-info column is-6-mobile is-6 p-0">
                        <a id="" class="btn btn-invert btn-small btn-vertical m-0 more-info-btn">
                            <span>
                                more info
                            </span>
                        </a>
                    </div>
                    <div class="quiz-body-play column is-6-mobile is-6 p-0">
                        <a id="" class="btn btn-invert btn-small btn-vertical m-0">
                            <span>
                                play
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="quiz text-ghost-white my-4">
                <div class="quiz-header acronym columns is-mobile m-0 is-vcentered has-text-centered py-2">
                    <div class="column is-3-mobile is-3 py-0">
                        <span class="quiz-header-icon text-smoky-black">
                            A
                        </span>
                    </div>
                    <div class="quiz-header-name column is-9-mobile is-9 py-0">
                        Name goes here!
                    </div>
                </div>
                <div class="quiz-body columns is-mobile m-0 is-vcentered has-text-centered p-0">
                    <div class="quiz-body-more-info column is-6-mobile is-6 p-0">
                        <a id="" class="btn btn-invert btn-small btn-vertical m-0">
                            <span>
                                more info
                            </span>
                        </a>
                    </div>
                    <div class="quiz-body-play column is-6-mobile is-6 p-0">
                        <a id="" class="btn btn-invert btn-small btn-vertical m-0">
                            <span>
                                play
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="quiz text-ghost-white my-4">
                <div class="quiz-header acronym columns is-mobile m-0 is-vcentered has-text-centered py-2">
                    <div class="column is-3-mobile is-3 py-0">
                        <span class="quiz-header-icon text-smoky-black">
                            A
                        </span>
                    </div>
                    <div class="quiz-header-name column is-9-mobile is-9 py-0">
                        Name goes here!
                    </div>
                </div>
                <div class="quiz-body columns is-mobile m-0 is-vcentered has-text-centered p-0">
                    <div class="quiz-body-more-info column is-6-mobile is-6 p-0">
                        <a id="" class="btn btn-invert btn-small btn-vertical m-0">
                            <span>
                                more info
                            </span>
                        </a>
                    </div>
                    <div class="quiz-body-play column is-6-mobile is-6 p-0">
                        <a id="" class="btn btn-invert btn-small btn-vertical m-0">
                            <span>
                                play
                            </span>
                        </a>
                    </div>
                </div>
            </div>
                    <!-- <div class="quiz-footer columns is-mobile m-0 is-vcentered has-text-centered text-ghost-white py-2">
                        <div class="quiz-footer-date column is-6-mobile is-6 py-0">
                            <i class="far fa-clock"></i> 4-Dec-20
                        </div>
                        <div class="quiz-footer-score column is-6-mobile is-6 py-0">
                            <i class="fas fa-percentage"></i> 80%
                        </div>
                    </div> -->
        </div>
        <!-- <div id="test" style="width: 100%;">scroll to understand</div> -->
        <!-- <div id="content"> </div> -->       
    </section>
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
        const burger = document.querySelector('#burger');
        const times = document.querySelector('#times');
        const optionsWrapper = document.querySelector('#options-wrapper-welcome');
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
            // 
            if (!logOutConfirmation.classList.contains('hidden-options')) {
                logOutConfirmation.classList.add('hidden-options');
            }
        });
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
        browseBtn.addEventListener('click', () => {
            welcomeWrapper.firstElementChild.classList.add('shrink');
            // 
            setTimeout(() => {
                welcomeWrapper.classList.toggle('hidden-options');
                browseWrapper.classList.toggle('hidden-options');
            }, 600);
        });
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
            if ( ! xDown || ! yDown ) {
                return;
            }

            var xUp = evt.touches[0].clientX;                                    
            var yUp = evt.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {
                    /* left swipe */ 
                    console.log('swiped left');
                } else {
                    /* right swipe */
                    console.log('swiped right');
                }                       
            } else {
                if ( yDiff > 0 ) {
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
        const moreInfoBtn = document.querySelector('.more-info-btn');
        const moreInfoWrapper = document.querySelector('#more-info-wrapper');
        // 
        moreInfoBtn.addEventListener('click', () => {
            moreInfoWrapper.classList.remove('scaleY');
        });
        // 
        const moreInfoBackBtn = document.querySelector('#more-info-back-btn');
        // 
        moreInfoBackBtn.addEventListener('click', () => {
            moreInfoWrapper.classList.add('scaleY');
        });
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
                    e.target.previousElementSibling.value ++;
                    console.log('jestem tutaj');
                    checkIfEmpty();
                }
                // 
                e.preventDefault();
            }
            if (e.target.classList.contains('decrement')) {
                if ((Number(e.target.nextElementSibling.value) > Number(e.target.nextElementSibling.min))) {
                    e.target.nextElementSibling.value --;
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
                    "x-rapidapi-key": "",
                    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
                }
            })
            .then(response => response.json());
        }
        const getWordsByRandomPages = async function(numberOfQuestions, numOfAnswers) {
            // Get all words
            let pages = '', data = [], randomPages = [];
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
                    if (randomPages.indexOf(r) === -1) { randomPages.push(r); }
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
            while(true) {
                // Fetch random word
                const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/?' + new URLSearchParams({
                    random: 'true'
                }), {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "",
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
                            "x-rapidapi-key": "",
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
            let i = 0, wordsDefinitions = {};
            // Loop to get all words specified in words array
            while(i < words.length) {
                console.log(i);
                const word = words[i];
                // Fetch word
                const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/' + word + '/definitions', {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "",
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
            if (addQuizForm["quiz-name"].value !== '' && addQuizForm["quiz-type"].value !== 'Quiz Type' && addQuizForm["quiz-answers"].value !== '' && addQuizForm["quiz-questions"].value !== '' && (addQuizForm["quiz-answers"].value >= 2 && addQuizForm["quiz-answers"].value <= 6) && (addQuizForm["quiz-questions"].value >= 4 && addQuizForm["quiz-questions"].value <= 10)) {
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
        const submitGenerateFeedback = document.querySelector('#submit-generate-feedback');
        const generateConfirmation = document.querySelector('#generate-confirmation');
        const unlockInputFields = function(target) { 
            Array.from(target).forEach(input => {
                input.removeAttribute("readonly");
            });
        }
        // submit generate form
        addQuizForm.addEventListener('submit', e => {

            const quizName = addQuizForm["quiz-name"].value;
            const quizType = addQuizForm["quiz-type"].value;
            const quizAnswers = addQuizForm["quiz-answers"].value;
            const quizQuestions = addQuizForm["quiz-questions"].value;
            console.log(quizName);
            console.log(quizType);
            console.log(quizAnswers);
            console.log(quizQuestions);

            // Check if there is anything in inputs
            if (addQuizForm["quiz-name"].value !== '' && addQuizForm["quiz-type"].value !== 'Quiz Type' && addQuizForm["quiz-answers"].value !== '' && addQuizForm["quiz-questions"].value !== '' && (addQuizForm["quiz-answers"].value >= 2 && addQuizForm["quiz-answers"].value <= 6) && (addQuizForm["quiz-questions"].value >= 4 && addQuizForm["quiz-questions"].value <= 10) && !addQuizForm["quiz-name"].hasAttribute('readonly') && !addQuizForm["quiz-type"].hasAttribute('disabled') && !addQuizForm["quiz-answers"].hasAttribute('readonly') && !addQuizForm["quiz-questions"].hasAttribute('readonly')) {
                // Adjust UI
                if (submitGenerateFeedback.classList.contains('hide')) {
                    submitGenerateFeedback.classList.remove('hide');
                    submitGenerateFeedback.lastElementChild.classList.remove('hide');
                } else {
                    submitGenerateFeedback.firstElementChild.classList.add('hide');
                    submitGenerateFeedback.lastElementChild.classList.remove('hide');
                } 
                // Lock input fields
                addQuizForm["quiz-name"].setAttribute("readonly", true);
                addQuizForm["quiz-type"].setAttribute("disabled", true);
                addQuizForm["quiz-select"].value = addQuizForm["quiz-type"].value;
                addQuizForm["quiz-answers"].setAttribute("readonly", true);
                addQuizForm["quiz-questions"].setAttribute("readonly", true);
                // Clear feedback div
                clearFeedbackDiv(generateFeedbackWrapper);
                // 
                let err_count = 0;
                // Post data using the Fetch API
                fetch(addQuizForm.action, {
                        method: addQuizForm.method,
                        body: new FormData(addQuizForm)
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
                        console.log(docs);
                        // Handle when resolved
                        // Fetch promise rejects only when there is network error
                        // Handle input data
                        err_count = handleFormDataLogin(docs);
                        // if (err_count) { // errors found
                        //     setTimeout(() => {
                        //         submitLoginFeedback.lastElementChild.classList.add('hide');
                        //         submitLoginFeedback.firstElementChild.classList.remove('hide');
                        //         // Unlock fields
                        //         unlockInputFields(loginFormInputs);
                        //     }, 500);
                        // } else { // no errors
                        //     setTimeout(() => {
                        //         // Unlock fields
                        //         unlockInputFields(loginFormInputs);
                        //         // Hide submit feedback div
                        //         submitLoginFeedback.classList.add('hide');
                        //         submitLoginFeedback.firstElementChild.classList.add('hide');
                        //         setTimeout(() => {
                        //             // Show confirmation
                        //             loginConfirmation.classList.remove('hidden-options');
                        //             // Clear form
                        //             resetForm('#login-form input', loginForm['login-submit']);
                        //             // 
                        //             setTimeout(() => {
                        //                 mainSectionWrapper.classList.toggle('hidden-options');
                        //                 loginWrapper.classList.toggle('hidden-options');
                        //                 // set tabindex="-1"
                        //                 addTabindex('login-tabindex');
                        //                 // 
                        //                 setTimeout(() => {
                        //                     // Hide confirmation
                        //                     loginConfirmation.classList.add('hidden-options');
                        //                     // Show welcome screen
                        //                     mainSectionWrapper.classList.toggle('hidden-options');
                        //                     // Redirect
                        //                     window.location = './welcome.php';
                        //                 }, 500);
                        //             }, 1500);
                        //         }, 500);
                        //     }, 1000);
                        // }
                    })
                    .catch(err => {
                        // here you can handle also error from php
                        // they come in a js form: JSON.parse blah blah
                        console.log(err);
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
                            }, 500);
                        }
                    });
            } else {
                // tutaj pokaz ERRORS FOUND i zmien feedback
            }
            // Prevent the default form submit
            e.preventDefault();
        });
    </script>