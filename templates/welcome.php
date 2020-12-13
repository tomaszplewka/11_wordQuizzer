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
        <div class="quiz-info-wrapper background-smoky-black p-5 hidden-options" id="quiz-info-wrapper">
            <div class="is-flex is-justify-content-start">
                <a id="quiz-info-back-btn" class="control-btn">
                    <span class="">
                        Go Back
                    </span>
                </a>
            </div>
            <div class="quiz-info-header">
                <h2 class="is-size-1 form-header">DETAILS</h2>
            </div>
            <div class="quiz-info-body mb-5">

            </div>
        </div>
        <!-- <h2 class="is-size-1 form-header">LOG IN</h2> -->
        
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
    </script>