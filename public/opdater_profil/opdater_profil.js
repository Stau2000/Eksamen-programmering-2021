//henter inputfelter fra frontend
const submitButton = document.getElementById("submit");
const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("name");
const city = document.getElementById("city");
const address = document.getElementById("address");
const phonenumber = document.getElementById("phonenumber");

//indsætter oplysningerne om brugeren fra localStorage i felterne, så man kan se hvad man gerne vil ændre
const init = () => {
    email.value = localStorage.getItem("email")
    password.value = localStorage.getItem("password")
    username.value = localStorage.getItem("name")
    city.value = localStorage.getItem("city")
    address.value = localStorage.getItem("address")
    phonenumber.value = localStorage.getItem("phonenumber")
    submitButton.addEventListener("click", updateUser);
}

//fetcher oplysningerne til serveren
const updateUser = (e) => {
    e.preventDefault()
    console.log(address.value)
    const id = localStorage.getItem("id")
    fetch(`http://localhost:4000/opdater_profil/${id}-${email.value}-${password.value}-${username.value}-${city.value}-${address.value}-${phonenumber.value}`, {
        method: "PUT"
    })
    window.location.replace("http://localhost:4000/");
}
init ()