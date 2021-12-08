
//henter inputfelter fra frontend
const submitButton = document.getElementById("submit");
const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("name");
const city = document.getElementById("city");
const address = document.getElementById("address");
const phonenumber = document.getElementById("phonenumber");

//opretter forbindelse API'et og sender den indtastede data fra frontend
const init = () => {
    submitButton.addEventListener("click", createProfile);
}

const createProfile = (e) => {
    e.preventDefault()
    console.log(address.value)
    fetch(`http://localhost:4000/opret_bruger/${email.value}-${password.value}-${username.value}-${city.value}-${address.value}-${phonenumber.value}`, {
        method: "POST"
    })
    alert(`Velkommen ${username.value}. Det er nu muligt at logge ind`)
    window.location.replace("http://localhost:4000/log_ind");  
}
init ()