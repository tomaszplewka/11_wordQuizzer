<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <link rel="stylesheet" href="templates/css/style.css">
    <title>[@title]</title>
</head>
<body class="is-relative">
    <!-- Navbar -->
    <nav class="" role="navigation" aria-label="main navigation">
        <div class="background-ghost-white has-text-white is-relative" id="navbar">
            <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline">
                <div class="column is-10-mobile is-10" id="navbar-logo">
                    <span class="logo is-flex is-justify-content-flex-start is-align-items-center">
                        <img src="imgs/wordRiddler_logo_shadow_x3.png" alt="" class="logo-img mr-1">
                        <span class="logo-text text-smoky-black">WordRiddler</span>
                    </span>
                </div>
                <div class="column is-2-mobile is-2 is-flex is-justify-content-end">
                    <span class="icon" id="burger">
                        <i class="fas fa-bars fa-2x is-clickable text-smoky-black"></i>
                    </span>
                    <span class="icon hide" id="times">
                        <i class="fas fa-times fa-2x is-clickable text-smoky-black"></i>
                    </span>
                </div>
            </div>
        </div>
    </nav>
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
        <form action="">
            <div class="input-wrapper">
                <input type="text" name="username" placeholder="Username*">
                <span class="icon-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper">
                <input type="email" name="email" placeholder="Email*">
                <span class="icon-left">
                    <i class="fas fa-at"></i>
                </span>
                <span class="icon-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password*">
                <span class="icon-left">
                    <i class="fas fa-key"></i>
                </span>
                <span class="icon-validation">
                    <i class="fas fa-check icon-valid hide"></i>
                    <i class="fas fa-times icon-invalid hide"></i>
                </span>
            </div>
            <div class="input-wrapper">
                <input type="password" name="confirm-password" placeholder="Confirm Password*">
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
    <!-- Footer -->
    <footer id="front-page-footer" class="background-ghost-white is-vcentered">
        <div class="content has-text-centered py-4 px-3">
            <p>
                &copy; 2020 Tomoko. All rights reserved.
            </p>
        </div>
    </footer>
    <!-- Scripts -->
    <script src="templates/js/app.js"></script>
</body>
</html>