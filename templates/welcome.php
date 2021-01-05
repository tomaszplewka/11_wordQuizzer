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
        <div class="is-flex is-justify-content-space-between">
            <a id="add-new-quiz-back-btn" class="control-btn">
                <span class="">
                    Go Back
                </span>
            </a>
        </div>
        <div id="add-quiz-form-wrapper" class="columns is-mobile m-0 has-text-centered is-multiline">
            <div class="column is-12-mobile is-12 p-0">
                <form action="" id="add-quiz-form">
                    <div class="columns is-mobile m-0 is-vcentered is-multiline">
                        <div class="column is-12-mobile is-12 p-0 has-text-centered my-2">
                            <input class="input py-1" type="text" name="quiz-name" placeholder="Name">
                        </div>
                        <div class="column is-12-mobile is-12 p-0 has-text-centered my-2">
                            <div class="select text-ghost-white">
                                <select class="py-1">
                                    <option>Quiz type</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                        <div class="column is-12-mobile is-12 p-0 has-text-centered my-2 number-input-wrapper">
                            <div class="number-input">
                                <button class="decrement"></button>
                                <input id="quiz-options" class="quantity input mx-3" name="quiz-options" min="2" max="6" step="1" value="2" type="number">
                                <button class="increment plus"></button>
                            </div>
                        </div>
                        <div class="column is-12-mobile is-12 p-0 has-text-centered mt-2 mb-5 number-input-wrapper">
                            <div class="number-input">
                                <button class="decrement"></button>
                                <input id="quiz-questions" class="quantity input mx-3" name="quiz-options" min="4" max="10" step="1" value="4" type="number">
                                <button class="increment plus"></button>
                            </div>
                        </div>
                        <div class="column is-12-mobile is-12 p-0">
                            <button type="submit" name="quiz-generate" id="" class="btn btn-invert m-0">
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
        addQuizBackBtn.addEventListener('click', () => {
            welcomeWrapper.classList.toggle('hidden-options');
            addQuizWrapper.classList.toggle('hidden-options');
            // 
            setTimeout(() => {
                welcomeWrapper.firstElementChild.classList.remove('shrink');
            }, 600);
        });
        // 
        const increment = document.querySelectorAll('.increment');
        const decrement = document.querySelectorAll('.decrement');
        // const quizOptions = document.querySelector('#quiz-options');
        // 
        // increment.forEach(incrBtn => {
        //     console.log(incrBtn);
        //     incrBtn.addEventListener('click', e => {
        //         console.log(e.target);
        //         if (!(e.target.previousElementSibling.value >= e.target.previousElementSibling.max)) {
        //             e.target.previousElementSibling.value ++;
        //         }
        //         // 
        //         e.preventDefault();
        //     });
        // });
        // decrement.forEach(decrBtn => {
        //     console.log(decrBtn);
        //     decrBtn.addEventListener('click', e => {
        //         console.log(e.target);
        //         if (e.target.nextElementSibling.value > e.target.nextElementSibling.min) {
        //             e.target.nextElementSibling.value --;
        //         }
        //         // 
        //         e.preventDefault();
        //     });
        // });
        // 
        const addQuizForm = document.querySelector('#add-quiz-form');
        // 
        addQuizForm.addEventListener('click', e => {
            if (e.target.classList.contains('increment')) {
                if (!(Number(e.target.previousElementSibling.value) >= Number(e.target.previousElementSibling.max))) {
                    e.target.previousElementSibling.value ++;
                }
                // 
                e.preventDefault();
            }
            if (e.target.classList.contains('decrement')) {
                if ((Number(e.target.nextElementSibling.value) > Number(e.target.nextElementSibling.min))) {
                    e.target.nextElementSibling.value --;
                }
                // 
                e.preventDefault();
            }
        });


        

    </script>