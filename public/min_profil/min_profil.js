const table = document.getElementsByTagName("table")[0];

//henter varer fra databasen tilhørende brugerens ID
const getProducts = (id) => {
    fetch(`http://localhost:4000/hent_annoncer/all-${id}`, {
        method: 'GET'
    }).then(resp => {
        return resp.json()
    }).then(data => {

        //laver HTML i JS. Når værdierne er fyldt ud tillægger den en "linje" i form af htmlString +=
        let htmlString = ''
        data.forEach(product => {
            htmlString += ` 
                <tr class="product">
                    <td>${product.category}</td>
                    <td>${product.userId}</td>
                    <td>${product.image}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                    <td><a href="/opdater_annonce/${product.id}">Opdater</a></td>
                </tr>
            `
        });
        table.innerHTML = htmlString
        
        
        //JSON.stringify(data)
    })

}

const id = localStorage.getItem("id")
getProducts(id)