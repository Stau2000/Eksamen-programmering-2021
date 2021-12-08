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
        localStorage.removeItem("name", content.name);
        localStorage.removeItem("phonenumber", content.phonenumber);
        localStorage.removeItem("city", content.city);
        localStorage.removeItem("id", content.id);
        localStorage.removeItem("address", content.address);
        localStorage.removeItem("password", content.password);
        window.location.replace("http://localhost:4000/");
    })
}
init ()












