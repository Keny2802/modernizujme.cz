const form = document.getElementById("form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

form.addEventListener("submit", function(evt) {
    // evt.preventDefault();

    validateFormFields();
});

const setError = (element, message) => {
    const inputFormGroup = element.parentElement;
    const inputFormGroupErrorDisplay = inputFormGroup.querySelector(".form-group-error-text-content");

    inputFormGroupErrorDisplay.innerText = message;
    inputFormGroup.classList.add("error");
    inputFormGroup.classList.remove("success");
};

const setSuccess = element => {
    const inputFormGroup = element.parentElement;
    const inputFormGroupErrorDisplay = inputFormGroup.querySelector(".form-group-error-text-content");

    inputFormGroupErrorDisplay.innerText = "";
    inputFormGroup.classList.add("success");
    inputFormGroup.classList.remove("error");
};

const isValidMail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateFormFields = () => {
    const nameValue = nameField.value.trim();
    const emailValue = emailField.value.trim();
    const messageValue = messageField.value.trim();

    if (nameValue === "") {
        setError(nameField, "Vaše jméno není vyplněné");
    } else {
        setSuccess(nameField);
    };

    if (emailValue === "") {
        setError(emailField, "Váš mail není vyplněný");
    } else if (!isValidMail(emailValue)) {
        setError(emailField, "Emailová adresa není platná");
    } else {
        setSuccess(emailField);
    };

    if (messageValue === "") {
        setError(messageField, "Vaše zpráva je prázdná");
    } else {
        setSuccess(messageField);
    };
};