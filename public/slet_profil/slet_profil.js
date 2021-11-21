const submitButton = document.getElementById("submit");

const init = () => {
    submitButton.addEventListener("click", deleteUser);
}
const deleteUser = (e) => {
    e.preventDefault()
    fetch("http://localhost:4000/slet_profil/", {
        method: "DELETE"
    }).then(content => {
        console.log(content)
        
        localStorage.clear()
        
        window.location.replace("http://localhost:4000/");
    })
}
init ()

