# Greetr

Greetr is a JavaScript library, which generates greetings. It supports jQuery, and it can be used to inject greetings within an HTML file.

## Requiements

Functions
- Generate formal and informal greetings when given a first name, last name, and optional language.

Constraints
- The library shall support English and Spanish languages.
- The library shall be reusable.
- The library shall support jQuery.
- Users shall be able to use the library with the `G$()` structure.

Objectives
- N/A.

## Usage

To use `greetr.js`:

```javascript
const firstName = 'John';
const lastName = 'Doe';

$('input#login').click(function() {
    const g = G$(firstName, lastName);
    g.setLanguage($('#language').val()).HTMLGreeting('#greeting', true).log();
})
```

## Notes

This library was created as part of a [JavaScript course by Anthony Alicea](https://www.udemy.com/course/understand-javascript/).
