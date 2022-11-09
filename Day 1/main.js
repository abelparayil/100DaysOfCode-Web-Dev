const validateEmail = () => {
    const msg = document.querySelector(".field-input span");
    const icon = document.querySelector(".field-input i");
    const emailValue = document.getElementById("email").value;
    const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (emailValue.match(regexEmail)) {
        msg.classList.remove("invalid");
        msg.classList.add("valid");
        msg.innerHTML = "Email Valid";
        icon.classList.remove("fa-exclamation-circle");
        icon.classList.remove("fa-light");
        icon.classList.add("fa-check-circle");
    } else {
        msg.classList.add("invalid");
        msg.classList.remove("valid");
        msg.innerHTML = "Not a valid email";
        icon.classList.add("fa-exclamation-circle");
        icon.classList.add("fa-light");
        icon.classList.remove("fa-check-circle");
    }

    if (emailValue === "") {
        msg.innerHTML = "";
        msg.style.opacity = 0;
        icon.classList.remove("fa-exclamation-circle");
    } else {
        msg.style.opacity = 1;
    }

}