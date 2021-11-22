const submitButton = document.getElementById("submit");
const category = document.getElementById("category")

const init = () => {
    submitButton.addEventListener("click", deleteGood);
}
//dette sletter den kategori, som varen er under. Der kan dog ved fejltagelse blive slettet flere varer, hvis kategorien er den samme
const deleteGood = (e) => {
    e.preventDefault()
    console.log(category.value)
    fetch(`http://localhost:4000/slet_annonce/${category.value}`, {
        method: "DELETE"
    })        
        
        window.location.replace("http://localhost:4000/min_profil");
        alert(`${category} er nu slettet`)

}
init ()

