(function(global, $) {
    // Create a 'new' object
    const greetr = function(firstName, lastName, language) {
        return new greetr.init(firstName, lastName, language);
    };

    // Properties hidden within the scope of the IIFE
    const supportedLanguages = ['en', 'es'];
    const greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    const formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    const logMessages = {
        en: 'Logged in',
        es: 'Inicio sesión'
    };

    // Directly accessible methods
    greetr.prototype = {
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        // Check that the language is supported, included in supportedLanguages
        validate: function() {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },
        // Informal gretting
        greeting: function() {
            return `${greetings[this.language]} ${this.firstName}.`
        },
        // Formal greeting
        formalGreeting: function() {
            return `${formalGreetings[this.language]}, ${this.fullName()}.`
        },
        // Chainable methods
        greet: function(formal) {
            let message;
            if (formal) {
                message = this.formalGreeting();
            } else {
                message = this.greeting();
            }
            if (console) {
                console.log(message);
            }
            return this;
        },
        // Log a person's name
        log: function() {
            if (console) {
                console.log(`${logMessages[this.language]}: ${this.fullName()}`);
            }
            return this;
        },
        // Set a language
        setLanguage: function(language) {
            this.language = language;
            this.validate;
            return this;
        },
        // Inject a greeting into HTML
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            if (!selector) {
                throw 'Missing jQuery selector'
            }
            let message;
            if (formal) {
                message = this.formalGreeting();
            } else {
                message = this.greeting();
            }
            $(selector).html(message);
            return this;
        }
    };

    // Create an object
    greetr.init = function(firstName = '', lastName = '', language = 'en') {
        const self = this;
        self.firstName = firstName;
        self.lastName = lastName;
        self.language = language;
        self.validate();
    }

    greetr.init.prototype = greetr.prototype;

    // Attach greetr to the global object and provide the shorthand 'G$'
    global.greetr = global.G$ = greetr;
    
})(window, jQuery);