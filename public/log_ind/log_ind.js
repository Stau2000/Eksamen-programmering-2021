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
    }).then((response) => {
        if (response.status == 200) {
            console.log("LOGGED IN!");
           // window.location.replace("http://localhost:4000/");
           return response.json();
        }
        else {
            throw `error with status ${response.status}`;
        }
    })
    .then(content => {
        console.log(content)
    })
}
init ()
