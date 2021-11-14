
const submitButton = document.getElementById("submit");
const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("name");
const address = document.getElementById("address");
const phonenumber = document.getElementById("phonenumber");

const init = () => {
    submitButton.addEventListener("click", createUser);
}

const createUser = (e) => {
    e.preventDefault()
    console.log(address.value)
    fetch(`http://localhost:4000/opret_bruger/${email.value}-${password.value}-${username.value}-${address.value}-${phonenumber.value}`, {
        method: "POST"
    })
}
init ()