<?php include('templates/includes/header.php'); ?>
    <!-- Main screen -->
    <section class="section background-space-cadet-gradient is-flex is-flex-direction-column is-justify-content-center py-2 is-relative" id="main-section-wrapper">
        <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline" id="front-page-main-content-wrapper">
            <div class="column is-12-mobile is-12 pt-0 mb-5">
                <div class="perspective-box-far" id="front-page-logo">
                    <div class="face front">
                        <img src="imgs/wordRiddler_logo_shadow_x3.png" alt="">
                    </div>
                    <div class="face top">
                        <img src="imgs/wordRiddler_logo_shadow_x3.png" alt="">
                    </div>
                    <div class="face left">
                        <img src="imgs/wordRiddler_logo_shadow_x3.png" alt="">
                    </div>
                </div>
            </div>
            <div class="column is-12-mobile is-12 mt-5 px-0 pb-5 is-relative buttons-wrapper">
                <div class="button-wrapper-primary">
                    <a id="front-page-start-btn" class="btn">
                        <span>
                            start
                        </span>
                    </a>
                </div>
                <div class="hide button-wrapper-secondary">
                    <a id="front-page-demo-btn" class="btn hidden">
                        <span>
                            demo
                        </span>
                    </a>
                    <a id="front-page-login-btn" class="btn hidden mb-0">
                        <span>
                            log in
                        </span>
                    </a>
                    <div class="is-flex is-justify-content-end hidden">
                        <a id="front-page-register-btn" class="side-btn">
                            <span>
                                register
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Sign Up screen -->
    <div class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 hidden-options" id="register-wrapper">
        <div class="is-flex is-justify-content-start">
            <a id="register-back-btn" class="control-btn">
                <span class="">
                    Go Back
                </span>
            </a>
        </div>
        <h2 class="is-size-1 form-header">SIGN UP</h2>
        <form action="index.php" method="POST" id="register-form">
            <div class="input-wrapper">
                <input type="text" name="username" placeholder="e.g. tomoko666*">
                <span class="icon-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon-validation" id="username-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper">
                <input type="email" name="email" placeholder="e.g. tomoko666@gmail.com*">
                <span class="icon-left">
                    <i class="fas fa-at"></i>
                </span>
                <span class="icon-validation" id="email-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password*">
                <span class="icon-left">
                    <i class="fas fa-key"></i>
                </span>
                <span class="icon-validation" id="password-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper">
                <input type="password" name="confirm-password" placeholder="Confirm Password*">
                <span class="icon-left">
                    <i class="fas fa-key"></i>
                </span>
                <span class="icon-validation" id="confirm-password-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <p role="alert" class="status-failure" hidden>Connection failure, please try again.</p>
            <p role="alert" class="status-busy" hidden>Busy sending data, please wait.</p>
            <div class="submit-btn-wrapper mt-4">
                <button type="submit" name="register-submit" class="btn btn-invert">
                    <span>
                        submit
                    </span>
                </button>
            </div>
        </form>
    </div>
    <!-- Log In screen -->
    <div class="background-smoky-black is-flex is-flex-direction-column is-justify-content-start p-5 hidden-options" id="login-wrapper">
        <div class="is-flex is-justify-content-start">
            <a id="login-back-btn" class="control-btn">
                <span class="">
                    Go Back
                </span>
            </a>
        </div>
        <h2 class="is-size-1 form-header">LOG IN</h2>
        <form action="">
            <div class="input-wrapper">
                <input type="text" name="username" placeholder="Username">
                <span class="icon-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password">
                <span class="icon-left">
                    <i class="fas fa-key"></i>
                </span>
                <span class="icon-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="submit-btn-wrapper mt-4">
                <button type="submit" name="register-submit" class="btn btn-invert">
                    <span>
                        submit
                    </span>
                </button>
            </div>
        </form>
    </div>
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
<?php include('templates/includes/footer.php'); ?>