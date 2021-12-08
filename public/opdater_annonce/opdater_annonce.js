const category = document.getElementById("kategori")
const image = document.getElementById("image")
const price = document.getElementById("price")
const description = document.getElementById("description")

const submitButton = document.getElementById("submit");

const init = () => {
    submitButton.addEventListener("click", updateGood);

}
const updateGood = (e) => {
    e.preventDefault()
    fetch(`http://localhost:4000/opdater_annonce/${id}-${category.value}-${image.value}-${price.value}-${description.value}`, {
        method: "POST"
    })
}
init ()
