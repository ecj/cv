function changeLanguage() {
    alert("hallo von changeLanguage");
}
    
// Assuming you have a button with id="language-toggle" for language switching
var languageToggle = document.getElementById('language-toggle');

languageToggle.addEventListener('click', function() {
    // Get the current language setting or flag
    var currentLanguage = document.documentElement.getAttribute('lang');

    // Check the current language and toggle to the other language
    if (currentLanguage === 'de') {
        // If current language is German, switch to English
        switchLanguage('en');
      alert("sprache englisch");
    } else {
        // If current language is English or other, switch to German
        switchLanguage('de');
      alert("sprache deutsch");
    }
});

function switchLanguage(lang) {
    // Fetch language-specific content from your Jekyll files
    // Replace this with your logic to load content based on the chosen language
    // For example, if you have separate files for German and English content

    // Update the language attribute in HTML to reflect the chosen language
    document.documentElement.setAttribute('lang', lang);

    // Optionally, update other elements or content on the page based on the chosen language
    // You might need to update text inside elements or switch between different content blocks
}
