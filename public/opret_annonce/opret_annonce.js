
//henter inputfelter fra frontend
const submitButton = document.getElementById("submit");
const category = document.getElementById("category")
const image = document.getElementById("image");
const price = document.getElementById("price");
const description = document.getElementById("description");

//giver knappen funktionalitet
const init = () => {
    submitButton.addEventListener("click", createGood);
}

//fetcher data skrevet i frontend
const createGood = (e) => {
    e.preventDefault()
    console.log(description.value)

    const id = localStorage.getItem("id") //tillægger varen et userid, så den tilkobles brugeren der laver varen
    fetch(`http://localhost:4000/opret_annonce/${id}-${category.value}-${image.value}-${price.value}-${description.value}`, {
        method: "POST"
    })
        window.location.replace("http://localhost:4000/");
}
init ()

