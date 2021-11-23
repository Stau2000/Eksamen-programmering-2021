const submitButton = document.getElementById("submit");

const init = () => {
    submitButton.addEventListener("click", deleteUser);
}
const deleteUser = (e) => {
    e.preventDefault()
    const id = localStorage.getItem("id")
    fetch(`http://localhost:4000/slet_profil/${id}`, {
        method: "DELETE"
    }).then(content => {
        console.log(content)
        
        localStorage.clear()
        
        window.location.replace("http://localhost:4000/");
        alert("Din profil er nu slettet")
    })
}
init ()

