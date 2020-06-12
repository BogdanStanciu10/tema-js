function validate(event) {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    const error = document.querySelector(".error");
    event.preventDefault();
    if (username == "admin" && password == "123") {
        window.location.href = "./index.html";
    }
    else {
        error.innerHTML = "Wrong username or password";
    }
}
