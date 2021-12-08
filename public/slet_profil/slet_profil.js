const submitButton = document.getElementById("submit"); //henter "slet" knappen

//sætter click funktionen igang
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
        
        localStorage.clear()// sletter profil fra localStorage
        
        window.location.replace("http://localhost:4000/"); //henviser til homepage
        alert("Din profil er nu slettet")
    })
}
init ()

