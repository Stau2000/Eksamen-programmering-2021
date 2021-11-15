
const submitButton = document.getElementById("submit");
const email = document.getElementById("email");
const username = document.getElementById("name");
const city = document.getElementById("city");
const category = document.getElementById("category")
const image = document.getElementById("image");
const price = document.getElementById("price");
const description = document.getElementById("description");

const init = () => {
    submitButton.addEventListener("click", createGood);
}

const createGood = (e) => {
    e.preventDefault()
    console.log(username.value)
    fetch(`http://localhost:4000/opret_annonce/${email.value}-${username.value}-${city.value}-${category.value}-${image.value}-${price.value}-${description.value}`, {
        method: "POST"
    })
}
init ()