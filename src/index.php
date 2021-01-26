<?php include('src/includes/header.php'); ?>
<!-- Main screen -->
<section class="section background-space-cadet-gradient is-flex is-flex-direction-column is-justify-content-center py-2 is-clipped is-relative" id="main-section-wrapper">
    <?php if (isset($_SESSION["user_loggedIn"]) && $_SESSION["user_loggedIn"] === true) : ?>
        <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline has-text-centered scale-content" id="logged-in-main-content-wrapper"></div>
    <?php else : ?>
        <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline has-text-centered scale-content" id="front-page-main-content-wrapper"></div>
    <?php endif; ?>
</section>
<!-- Sign Up screen -->
<section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="register-wrapper">
    <div class="feedback-wrapper background-black-coral-gradient p-5 hidden-options" id="register-feedback-wrapper"></div>
    <div class="background-black-coral-gradient is-flex is-flex-direction-column is-justify-content-center has-text-centered position-guest-mode p-5 hidden-options" id="hint-wrapper"></div>
    <form action="register.php" method="POST" id="register-form">
        <div class="is-relative is-clipped">
            <div class="input-wrapper is-relative">
                <input class="register-tabindex" type="text" name="username" placeholder="e.g. user666*" tabindex="-1">
                <span class="icon-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon-validation" id="username-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper is-relative">
                <input class="register-tabindex" type="email" name="email" placeholder="e.g. user666@gmail.com*" tabindex="-1">
                <span class="icon-left">
                    <i class="fas fa-at"></i>
                </span>
                <span class="icon-validation" id="email-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper is-relative">
                <input class="register-tabindex" type="password" name="password" placeholder="Password*" tabindex="-1">
                <span class="icon-left">
                    <i class="fas fa-key"></i>
                </span>
                <span class="icon-validation" id="password-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper is-relative">
                <input class="register-tabindex" type="password" name="confirm-password" placeholder="Confirm Password*" tabindex="-1">
                <span class="icon-left">
                    <i class="fas fa-key"></i>
                </span>
                <span class="icon-validation" id="confirm-password-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
        </div>
        <div class="submit-btn-wrapper mt-4">
            <button type="submit" name="register-submit" class="btn btn-invert disabled register-tabindex" tabindex="-1">
                <span>submit</span>
            </button>
        </div>
    </form>
</section>
<!-- Login screen -->
<section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="login-wrapper">
    <div class="feedback-wrapper background-black-coral-gradient p-5 hidden-options" id="login-feedback-wrapper"></div>
    <form action="login.php" method="POST" id="login-form">
        <div class="is-relative is-clipped">
            <div class="input-wrapper is-relative">
                <input class="register-tabindex" type="email" name="email" placeholder="e.g. user666@gmail.com*" tabindex="-1">
                <span class="icon-left">
                    <i class="fas fa-at"></i>
                </span>
                <span class="icon-validation" id="login-email-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper is-relative">
                <input class="login-tabindex" type="password" name="password" placeholder="Password" tabindex="-1">
                <span class="icon-left">
                    <i class="fas fa-key"></i>
                </span>
                <span class="icon-validation" id="login-password-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
        </div>
        <div class="submit-btn-wrapper mt-4">
            <button type="submit" name="login-submit" class="btn btn-invert disabled login-tabindex" tabindex="-1">
                <span>submit</span>
            </button>
        </div>
    </form>
</section>
<!-- Browse screen -->
<section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="browse-wrapper">
    <div id="filter-quiz-wrapper" class="scaleY background-ghost-white p-5 is-flex is-flex-direction-column is-justify-content-start">
        <form action="" id="filter-form">
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
                        <span>clear all</span>
                    </button>
                </div>
                <div class="column is-6-mobile is-6 p-0">
                    <button type="submit" name="filter-apply" id="" class="btn btn-invert btn-small btn-vertical m-0">
                        <span>apply</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
    <div id="search-quiz-wrapper" class="scaleY background-ghost-white p-5 is-flex is-flex-direction-column is-justify-content-start">
        <form action="" id="search-form">
            <div class="columns is-mobile m-0 is-vcentered is-multiline">
                <div class="column is-12-mobile is-12 p-0 has-text-centered my-2">
                    <input class="input" type="search" name="search" placeholder="Type here">
                </div>
            </div>
        </form>
        HERE SHOW LOADER WHILE SEARCHING AND WHEN IT'S DONE SHOW HOW MANY RESULTS
    </div>
    <div class="quiz-display-wrapper is-flex is-flex-direction-column is-justify-content-start">
        <div class="quiz is-flex is-flex-direction-column is-justify-content-space-between text-ghost-white my-4">
            <div class="is-flex is-flex-direction-column is-justify-content-start column is-12-mobile is-12 p-0"></div>
            <div class="is-flex is-justify-content-space-between column is-12-mobile is-12 p-0">
                <a id="browse-quizzes-previous" class="control-btn">
                    <span class="">Previous</span>
                </a>
                <a id="browse-quizzes-next" class="control-btn">
                    <span class="">Next</span>
                </a>
            </div>
        </div>
    </div>
</section>
<!-- Create quiz screen -->
<section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="create-quiz-wrapper">
    <div class="generate-confirmation hidden-options background-mountain-meadow-gradient columns is-mobile m-0 p-5 has-text-centered is-vcentered is-multiline" id="generate-confirmation"></div>
    <div class="feedback-wrapper background-black-coral-gradient p-5 hidden-options" id="create-quiz-feedback-wrapper"></div>
    <form action="generate.php" method="POST" id="create-quiz-form" class="mb-5">
        <div class="columns is-mobile m-0 is-vcentered is-multiline">
            <div class="column is-12-mobile is-12 p-0 has-text-centered my-2 input-wrapper is-relative">
                <input class="input py-1 create-tabindex" type="text" name="quiz-name" placeholder="NAME">
                <span class="icon-left">
                    <i class="fas fa-pencil-alt"></i>
                </span>
                <span class="icon-validation" id="generate-name-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="column is-12-mobile is-12 p-0 has-text-centered my-2 input-wrapper is-relative">
                <div class="select text-ghost-white">
                    <select class="py-1" name="quiz-type">
                        <option selected disabled>QUIZ TYPE</option>
                        <option>DEFINITIONS</option>
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
                <input class="input py-1" type="hidden" name="user-id" value="">
            </div>
            <div class="column is-12-mobile is-12 p-0 has-text-centered mt-2 mb-0 number-input-wrapper">
                <label for="quiz-questions">questions</label>
                <div class="number-input input-wrapper is-relative">
                    <button class="decrement create-tabindex"></button>
                    <input id="quiz-questions" class="quantity input mx-3 create-tabindex" name="quiz-questions" min="4" max="10" step="1" value="4" type="number">
                    <button class="increment plus create-tabindex"></button>
                    <span class="icon-validation" id="generate-questions-validation">
                        <i class="fas fa-check icon-valid hide"></i>
                        <i class="fas fa-times icon-invalid hide"></i>
                    </span>
                </div>
            </div>
            <div class="column is-12-mobile is-12 p-0 has-text-centered my-2 number-input-wrapper">
                <label for="quiz-answers">answers</label>
                <div class="number-input input-wrapper is-relative">
                    <button class="decrement create-tabindex"></button>
                    <input id="quiz-answers" class="quantity input mx-3 create-tabindex" name="quiz-answers" min="2" max="4" step="1" value="2" type="number">
                    <button class="increment plus create-tabindex"></button>
                    <span class="icon-validation" id="generate-answers-validation">
                        <i class="fas fa-check icon-valid hide"></i>
                        <i class="fas fa-times icon-invalid hide"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="columns is-mobile m-0 is-vcentered is-multiline">
            <div class="column is-12-mobile is-12 p-0 mt-4">
                <button type="submit" name="quiz-generate" id="generate-quiz" class="btn btn-invert m-0 disabled">
                    <span>generate</span>
                </button>
            </div>
        </div>
    </form>
</section>
<!-- Quiz view -->
<section class="section background-ghost-white-gradient is-flex is-flex-direction-column is-justify-content-start position-guest-mode p-5 hidden-options" id="quiz-view-wrapper">
    <div id="quiz-content" class="column is-12-mobile is-12 p-0">
        <div class="is-flex is-justify-content-space-between is-align-items-center my-2">
            <div id="question-text" class="quiz-view-question-wrapper has-text-centered p-2"></div>
        </div>
        <div class="is-flex is-justify-content-space-between is-align-items-center">
            <form action="quiz.php" method="POST" id="quiz-form">
                <div class="column is-12-mobile is-12 p-0 has-text-centered m-0 p-0">
                    <input class="py-1" type="hidden" name="quiz-id" value="">
                </div>
                <div id="quiz-answers-wrapper"></div>
            </form>
        </div>
    </div>
</section>
<!-- Options -->
<section class="section background-ghost-white-gradient is-flex is-flex-direction-column is-justify-content-center position-guest-mode p-5 hidden-options" id="options-wrapper">
    <ul>
        <li>
            <a id="options-settings-btn" class="btn">
                <span>settings</span>
            </a>
        </li>
        <li>
            <a id="options-rate-us-btn" class="btn">
                <span>rate us</span>
            </a>
        </li>
        <li>
            <a id="options-donate-btn" class="btn">
                <span>donate</span>
            </a>
        </li>
    </ul>
</section>
<?php include('src/includes/footer.php'); ?>