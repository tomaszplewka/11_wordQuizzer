<?php include('src/includes/header.php'); ?>
<!-- Main screen -->
<section class="section background-space-cadet-gradient is-flex is-flex-direction-column is-justify-content-center py-2 is-relative" id="main-section-wrapper">
    <?php if (isset($_SESSION["user_loggedIn"]) && $_SESSION["user_loggedIn"] === true) : ?>
        <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline has-text-centered" id="logged-in-main-content-wrapper"></div>
    <?php else : ?>
        <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline has-text-centered" id="front-page-main-content-wrapper"></div>
    <?php endif; ?>
</section>
<!-- Sign Up screen -->
<section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="register-wrapper">
    <!-- register back btn -->
    <!-- data feedback div -->
    <div class="feedback-wrapper background-smoky-black p-5 hidden-options" id="register-feedback-wrapper"></div>
    <!-- hint div -->
    <div class="background-smoky-black is-flex is-flex-direction-column is-justify-content-center has-text-centered p-5 hidden-options" id="hint-wrapper"></div>
    <!-- register header -->
    <!-- register form -->
    <form action="register.php" method="POST" id="register-form">
        <div class="is-relative is-clipped">
            <!-- registration confirmation -->
            <div class="input-wrapper">
                <input class="register-tabindex" type="text" name="username" placeholder="e.g. user666*" tabindex="-1">
                <span class="icon-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon-validation" id="username-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper">
                <input class="register-tabindex" type="email" name="email" placeholder="e.g. user666@gmail.com*" tabindex="-1">
                <span class="icon-left">
                    <i class="fas fa-at"></i>
                </span>
                <span class="icon-validation" id="email-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper">
                <input class="register-tabindex" type="password" name="password" placeholder="Password*" tabindex="-1">
                <span class="icon-left">
                    <i class="fas fa-key"></i>
                </span>
                <span class="icon-validation" id="password-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper">
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
        <!-- register submit feedback -->
        <div class="submit-btn-wrapper mt-4">
            <button type="submit" name="register-submit" class="btn btn-invert disabled register-tabindex" tabindex="-1">
                <span>submit</span>
            </button>
        </div>
    </form>
</section>
<!-- Login screen -->
<section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="login-wrapper">
    <!-- login back btn -->
    <!-- data feedback div -->
    <div class="feedback-wrapper background-smoky-black p-5 hidden-options" id="login-feedback-wrapper"></div>
    <!-- login header -->
    <!-- login form -->
    <form action="login.php" method="POST" id="login-form">
        <div class="is-relative is-clipped">
            <!-- login confirmation -->
            <div class="input-wrapper">
                <input class="register-tabindex" type="email" name="email" placeholder="e.g. user666@gmail.com*" tabindex="-1">
                <span class="icon-left">
                    <i class="fas fa-at"></i>
                </span>
                <span class="icon-validation" id="login-email-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper">
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
        <!-- login submit feedback -->
        <div class="submit-btn-wrapper mt-4">
            <button type="submit" name="login-submit" class="btn btn-invert disabled login-tabindex" tabindex="-1">
                <span>submit</span>
            </button>
        </div>
    </form>
</section>
<!-- Browse screen -->
<section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="browse-wrapper">
    <!-- browse options -->
    <div id="filter-quiz-wrapper" class="scaleY background-ghost-white p-5 is-flex is-flex-direction-column is-justify-content-start">
        <!-- <div class="is-flex is-justify-content-start">
            <a id="filter-quiz-back-btn" class="control-btn">
                <span class="text-smoky-black">
                    Go Back
                </span>
            </a>
        </div>
        <h2 class="is-size-1 form-header text-smoky-black">FILTER</h2> -->
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
        <!-- <div class="is-flex is-justify-content-start">
            <a id="search-quiz-back-btn" class="control-btn">
                <span class="text-smoky-black">
                    Go Back
                </span>
            </a>
        </div>
        <h2 class="is-size-1 form-header text-smoky-black">SEARCH</h2> -->
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
<!-- Quiz view -->
<section class="section background-ghost-white is-flex is-flex-direction-column is-justify-content-start p-5 hidden-options" id="quiz-view-wrapper">
    <div id="quiz-content" class="column is-12-mobile is-12 p-0">
        <div class="is-flex is-justify-content-space-between is-align-items-center my-2">
            <div id="question-text" class="quiz-view-question-text has-text-centered p-2"></div>
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
<section class="section background-ghost-white is-flex is-flex-direction-column is-justify-content-center p-5 hidden-options" id="options-wrapper">
    <ul>
        <?php if (isset($_SESSION["user_loggedIn"]) && $_SESSION["user_loggedIn"] === true) : ?>
            <li>
                <p class="username-info-text">
                    You are logged in as
                    <span class="is-lowercase" id="username-info">
                        <?php echo $_SESSION["user_name"]; ?>
                    </span>
                </p>
            </li>
            <li>
                <a id="options-logout-btn" class="btn">
                    <span>log out</span>
                </a>
            </li>
            <li class="logout-confirmation-wrapper background-copper-red hidden-options">
                <p class="logout-confirmation-text">are you sure?</p>
                <div class="logout-confirmation-btn-wrapper is-flex is-justify-content-center mb-2">
                    <form action="logout.php" method="POST" id="logout-form">
                        <button type="submit" name="yes" class="btn btn-invert mx-3">
                            <span>yes</span>
                        </button>
                    </form>
                </div>
            </li>
        <?php endif; ?>
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