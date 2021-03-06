<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <link rel="stylesheet" href="src/css/style.css">
    <title><?php echo isset($title) ? $title : WEBSITE_TITLE; ?></title>
</head>

<body class="is-relative is-clipped">
    <nav class="" role="navigation" aria-label="main navigation">
        <div class="background-ghost-white has-text-white is-relative" id="navbar">
            <div class="columns is-mobile m-0 has-text-centered is-vcentered is-multiline">
                <div class="column is-10-mobile is-10" id="navbar-logo">
                    <span class="logo is-flex is-justify-content-flex-start is-align-items-center">
                        <img src="src/imgs/logo-main.png" alt="" class="logo-img mr-1">
                        <span class="logo-text text-smoky-black">WordRiddler</span>
                    </span>
                </div>
                <div class="column is-2-mobile is-2 is-flex is-justify-content-flex-end">
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