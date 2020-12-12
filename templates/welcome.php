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
                    <a id="welcome-browse-btn" class="btn btn-invert">
                        <span>
                            add new quiz
                        </span>
                    </a>
                </div>
            </div>
        </div>
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
    </script>