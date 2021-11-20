const submitButton = document.getElementById("submit");

const init = () => {
    submitButton.addEventListener("click", logOut);

}
const logOut = (e) => {
    e.preventDefault()
    fetch("http://localhost:4000/log_ud/", {
        method: "POST"
    }).then(content => {
        console.log(content)
        localStorage.removeItem("email", content.email);
        localStorage.removeItem("username", content.username);
        localStorage.removeItem("phonenumber", content.phonenumber);
        localStorage.removeItem("city", content.city);
        localStorage.removeItem("id", content.id);
        
        window.location.replace("http://localhost:4000/");
    })
}
init ()
