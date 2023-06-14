// localetoggle.js

$(document).ready(function() {
    var currentLocale = '{{ page.locale }}'; // Get the current page locale
    var defaultLocale = '{{ site.default_locale }}'; // Get the default locale from the site config

    // Set the active class on the current locale link
    $('#' + currentLocale).addClass('active');

    // Language toggle click event handler
    $('#language-toggle a').click(function(e) {
        e.preventDefault();
        var targetLocale = $(this).attr('id');

        // Update the URL to the selected language
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace('/' + currentLocale + '/', '/' + targetLocale + '/');
        window.location.href = newUrl;
    });
});
