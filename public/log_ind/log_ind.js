const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit")
const init = () => {
    submitButton.addEventListener("click", login);
}

const login = (e) => {
    e.preventDefault()
    console.log(email.value)
    fetch(`http://localhost:4000/log_ind/${email.value}-${password.value}`, {
        method: "POST"
    })
}
init ()
