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
           return response.json();
        }
        else {
            throw `error with status ${response.status}`;
        }
    }).then(content => {
        console.log(content.email)
        localStorage.setItem("email", content.email);
        localStorage.setItem("name", content.name);
        localStorage.setItem("phonenumber", content.phonenumber);
        localStorage.setItem("city", content.city);
        localStorage.setItem("id", content.id);
        localStorage.setItem("password", content.password)
        localStorage.setItem("address", content.address)
        window.location.replace("http://localhost:4000/");
    })
}
init ()
