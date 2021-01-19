<?php include('src/includes/header.php'); ?>
<!-- Main screen -->
<section class="section background-space-cadet-gradient is-flex is-flex-direction-column is-justify-content-center py-2 is-relative" id="main-section-wrapper">
    <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline has-text-centered" id="front-page-main-content-wrapper">
        <!-- main logo div -->
        <!-- main btns div -->
    </div>
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
<!-- Options -->
<section class="section background-ghost-white is-flex is-flex-direction-column is-justify-content-center p-5 hidden-options" id="options-wrapper">
    <ul>
        <?php if (isset($_SESSION["user_loggedIn"]) && $_SESSION["user_loggedIn"]) : ?>
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