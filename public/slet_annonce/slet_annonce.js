//henter kategorien fra frontenden
const submitButton = document.getElementById("submit");
const category = document.getElementById("category")

const init = () => {
    submitButton.addEventListener("click", deleteGood);
}

const deleteGood = (e) => {
    e.preventDefault()
    console.log(category.value)
    fetch(`http://localhost:4000/slet_annonce/${category.value}`, {
        method: "DELETE"
    })        
        
        window.location.replace("http://localhost:4000/min_profil");
        alert(`${category.value} er nu slettet`)

}
init ()

