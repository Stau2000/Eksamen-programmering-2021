
const submitButton = document.getElementById("submit");
const category = document.getElementById("category")
const image = document.getElementById("image");
const price = document.getElementById("price");
const description = document.getElementById("description");

const init = () => {
    submitButton.addEventListener("click", createGood);
}

const createGood = (e) => {
    e.preventDefault()
    console.log(description.value)

    const id = localStorage.getItem("id")
    fetch(`http://localhost:4000/opret_annonce/${id}-${category.value}-${image.value}-${price.value}-${description.value}`, {
        method: "POST"
    })
        window.location.replace("http://localhost:4000/");
}
init ()