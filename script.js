document.addEventListener('DOMContentLoaded', function() {
    // Знаходимо кнопку "Вхід" за класом ".buttontext"
    var loginButton = document.querySelector('.button .buttontext');

    // Додаємо обробник подій для кліку на кнопку "Вхід"
    loginButton.addEventListener('click', function() {
        // Переходимо на сторінку signIn.html
        window.location.href = 'login.html';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        clearErrorMessages();

        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Перевіряємо правильність введеного імені та прізвища
        if (!isValidName(firstName)) {
            displayErrorMessage('firstName', 'Ім\'я може містити тільки літери');
        }

        if (!isValidName(lastName)) {
            displayErrorMessage('lastName', 'Прізвище може містити тільки літери');
        }

        // Перевіряємо правильність введеної електронної пошти
        if (!isValidEmail(email)) {
            displayErrorMessage('email', 'Введіть коректну електронну пошту');
        }

        // Перевіряємо довжину пароля
        if (password.length < 8) {
            displayErrorMessage('password', 'Пароль повинен містити щонайменше 8 символів');
        }
    });

    //перевірка правильності введеного імені та прізвища
    function isValidName(name) {
        var regex = /^[A-Za-zА-Яа-яЁё]+$/;
        return regex.test(name);
    }

    //перевірки правильності введеної електронної пошти
    function isValidEmail(email) {
        var regex = /^\S+@\S+\.\S+$/;
        return regex.test(email);
    }

    //відображення повідомлення про помилку
    function displayErrorMessage(inputId, message) {
        var inputField = document.getElementById(inputId);
        inputField.classList.add('error');
        var errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = message;
        inputField.parentNode.appendChild(errorMessage);
    }

    //очищення попередніх повідомлень про помилки
    function clearErrorMessages() {
        var errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(errorMessage) {
            errorMessage.parentNode.removeChild(errorMessage);
        });
        var errorFields = document.querySelectorAll('.error');
        errorFields.forEach(function(errorField) {
            errorField.classList.remove('error');
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('signinForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrorMessages();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        //правильність введеної електронної пошти
        if (!isValidEmail(email)) {
            displayErrorMessage('email', 'Введіть коректну електронну пошту');
        }

        //довжина пароля
        if (password.length < 8) {
            displayErrorMessage('password', 'Пароль повинен містити щонайменше 8 символів');
        }
    });

    //перевірка правильності введеної електронної пошти
    function isValidEmail(email) {
        var regex = /^\S+@\S+\.\S+$/;
    }

    //відображення повідомлення про помилку
    function displayErrorMessage(inputId, message) {
        var inputField = document.getElementById(inputId);
        inputField.classList.add('error');
        var errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = message;
        inputField.parentNode.appendChild(errorMessage);
    }

    //очищення попередніх повідомлень про помилки
    function clearErrorMessages() {
        var errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(errorMessage) {
            errorMessage.parentNode.removeChild(errorMessage);
        });
        var errorFields = document.querySelectorAll('.error');
        errorFields.forEach(function(errorField) {
            errorField.classList.remove('error');
        });
    }
});

