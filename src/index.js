const firstName = 'John';
const lastName = 'Doe';

$('input#login').click(function() {
    const g = G$(firstName, lastName);
    $('div#login').hide();
    g.setLanguage($('#language').val()).HTMLGreeting('#greeting', true).log();
})