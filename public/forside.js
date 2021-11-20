const content = document.getElementById("content");
/*
const getUsers = () => {
    fetch(`http://localhost:4000/brugere`, {
        method: 'GET'
    }).then(resp => {
        return resp.json()
    }).then(data => {
        content.innerHTML = JSON.stringify(data)
    })

}

getUsers()
*/

console.log(localStorage.getItem("email"))

const email = localStorage.getItem("email")
if (email) {
    const body = document.getElementsByTagName ("body")[0]
    body.classList.add("logged_in");
} else {
    const body = document.getElementsByTagName ("body")[0]
    body.classList.add("logged_out");
}