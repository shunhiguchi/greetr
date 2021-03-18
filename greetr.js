(function(global, $) {
    const greetr = function(firstName, lastName, language) {
        return new greetr.init(firstName, lastName, language);
    };

    // Internal attributes
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

    // Public atttributes and methods
    greetr.prototype = {
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        validate: function() {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },
        greeting: function() {
            return `${greetings[this.language]} ${this.firstName}.`
        },
        formalGreeting: function() {
            return `${formalGreetings[this.language]}, ${this.fullName()}.`
        },
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
        log: function() {
            if (console) {
                console.log(`${logMessages[this.language]}: ${this.fullName()}`);
            }
            return this;
        },
        setLanguage: function(language) {
            this.language = language;
            this.validate;
            return this;
        },
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

    greetr.init = function(firstName = '', lastName = '', language = 'en') {
        const self = this;
        self.firstName = firstName;
        self.lastName = lastName;
        self.language = language;
    }
    greetr.init.prototype = greetr.prototype;
    global.greetr = global.G$ = greetr;
})(window, jQuery);