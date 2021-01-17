<?php include('src/includes/header.php'); ?>
<!-- Main screen -->
<section class="section background-space-cadet-gradient is-flex is-flex-direction-column is-justify-content-center py-2 is-relative" id="main-section-wrapper">
    <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline" id="front-page-main-content-wrapper">
        <!-- main logo div -->
        <div class="column is-12-mobile is-12 pt-0 mb-3"></div>
        <!-- main btns div -->
        <div class="column is-12-mobile is-12 mt-5 px-0 pb-5 is-relative buttons-wrapper"></div>
    </div>
</section>
<!-- Sign Up screen -->
<section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="register-wrapper">
    <!-- tutaj pomysl nad dodaniem jednego div wrappera tak jak na gorze -- zeby byc consistent -->
    <div class="feedback-wrapper background-smoky-black p-5 hidden-options" id="register-feedback-wrapper">
        <!-- <div class="is-flex is-justify-content-start">
            <a id="feedback-back-btn" class="control-btn">
                <span class="">
                    Go Back
                </span>
            </a>
        </div>
        <div class="feedback-header">
            <h2 class="is-size-1 form-header">FEEDBACK</h2>
        </div>
        <div class="feedback-body mb-5">
        </div> -->
    </div>
    <div class="background-space-cadet-gradient is-flex is-flex-direction-column is-justify-content-center has-text-centered p-5 hidden-options" id="hint-wrapper">
        <h2 class="is-size-1 is-uppercase form-header">hint</h2>
        <p class="text-smoky-black">
            Username field must contain at least 6 characters (letters or numbers only).
        </p>
        <hr>
        <p class="text-smoky-black">
            Email field must contain a valid email address.
        </p>
        <hr>
        <p class="text-smoky-black">
            Password must be at least 8 characters long and contain at least 1 capital letter and 1 special symbol.
        </p>
        <hr>
        <p class="text-smoky-black">
            Passwords must match.
        </p>
    </div>
    <form action="register.php" method="POST" id="register-form">
        <div class="is-relative is-clipped">
            <!-- <div class="registration-confirmation is-flex is-justify-content-center is-align-items-center hidden-options background-mountain-meadow" id="registration-confirmation">
                <p class="registration-cofirmation-text text-ghost-white p-2">
                    User <span class="registration-cofirmation-user text-smoky-black"></span> has been registered.
                </p>
            </div> -->
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
        <!-- <div class="submit-feedback mt-4 hide" id="submit-feedback">
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
        </div> -->
        <div class="submit-btn-wrapper mt-4">
            <button type="submit" name="register-submit" class="btn btn-invert disabled register-tabindex" tabindex="-1">
                <span>
                    submit
                </span>
            </button>
        </div>
    </form>
</section>
<!-- Log In screen -->
<section class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 is-relative hidden-options" id="login-wrapper">
    <div class="is-flex is-justify-content-start">
        <a id="login-back-btn" class="control-btn">
            <span class="">
                Go Back
            </span>
        </a>
    </div>
    <div class="feedback-wrapper background-smoky-black p-5 hidden-options" id="login-feedback-wrapper">
        <div class="is-flex is-justify-content-start">
            <a id="login-feedback-back-btn" class="control-btn">
                <span class="">
                    Go Back
                </span>
            </a>
        </div>
        <div class="feedback-header">
            <h2 class="is-size-1 form-header">FEEDBACK</h2>
        </div>
        <div class="feedback-body mb-5">
            <div class="login-email-wrapper-if-error">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-failure has-text-left">email</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-copper-red has-text-centered p-0 px-2">
                        <i class="fas fa-exclamation fa-2x"></i>
                    </div>
                    <div class="column is-12-mobile is-12 text-copper-red has-text-centered p-0">
                        <p class="login-email-error-text"></p>
                    </div>
                </div>
            </div>
            <div class="login-email-wrapper-if-ok">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-ok has-text-left">email</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                </div>
            </div>
            <div class="login-password-wrapper-if-error">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-failure has-text-left">password</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-copper-red has-text-centered p-0 px-2">
                        <i class="fas fa-exclamation fa-2x"></i>
                    </div>
                    <div class="column is-12-mobile is-12 text-copper-red has-text-centered p-0">
                        <p class="login-password-error-text"></p>
                    </div>
                </div>
            </div>
            <div class="login-password-wrapper-if-ok">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-ok has-text-left">password</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                </div>
            </div>
            <div class="login-db-wrapper-if-error">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-failure has-text-left">database</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-copper-red has-text-centered p-0 px-2">
                        <i class="fas fa-exclamation fa-2x"></i>
                    </div>
                    <div class="column is-12-mobile is-12 text-copper-red has-text-centered p-0">
                        <p class="login-db-error-text"></p>
                    </div>
                </div>
            </div>
            <div class="login-db-wrapper-if-ok">
                <div class="columns is-mobile m-0 is-vcentered is-multiline hide">
                    <div class="column is-10-mobile is-10 p-2">
                        <p role="alert" class="status-ok has-text-left">db</p>
                    </div>
                    <div class="column is-2-mobile is-2 text-mountain-meadow has-text-centered p-0 px-2">
                        <i class="fas fa-check fa-2x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h2 class="is-size-1 form-header">LOG IN</h2>
    <form action="login.php" method="POST" id="login-form">
        <div class="is-relative is-clipped">
            <div class="login-confirmation is-flex is-justify-content-center is-align-items-center hidden-options background-mountain-meadow" id="login-confirmation">
                <p class="login-confirmation-text text-ghost-white p-2">
                    You are now logged in!
                </p>
            </div>
            <div class="input-wrapper">
                <input class="register-tabindex" type="email" name="email" placeholder="e.g. tomoko666@gmail.com*" tabindex="-1">
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
        <div class="submit-feedback mt-4 hide" id="submit-login-feedback">
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
        <div class="submit-btn-wrapper mt-4">
            <button type="submit" name="login-submit" class="btn btn-invert disabled login-tabindex" tabindex="-1">
                <span>
                    submit
                </span>
            </button>
        </div>
    </form>
</section>
<!-- Options -->
<section class="section background-ghost-white is-flex is-flex-direction-column is-justify-content-center p-5 hidden-options" id="options-wrapper">
    <ul>
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
<?php include('src/includes/footer.php'); ?>