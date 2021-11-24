const table = document.getElementsByTagName("table")[0];

const getProducts = (id) => {
    fetch(`http://localhost:4000/hent_annoncer/all-${id}`, {
        method: 'GET'
    }).then(resp => {
        return resp.json()
    }).then(data => {

        let htmlString = ''
        data.forEach(product => {
            htmlString += `
                <tr class="product">
                    <td>${product.category}</td>
                    <td>${product.userId}</td>
                    <td>${product.image}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                </tr>
            `
        });
        table.innerHTML = htmlString
        
        
        //JSON.stringify(data)
    })

}

const id = localStorage.getItem("id")
getProducts(id)