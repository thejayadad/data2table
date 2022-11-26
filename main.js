
fetch("products.json")
.then(function(res) {
    return res.json();
})

.then(function(products) {
    let listings = document.getElementById("listings");
    let show = "";
    for(let product of products){
        show += `
        <tr>
        <td><img src="${product.image}"</td>
        <td>${product.make}</td>
        <td>$${product.price}</td>
        <td>${product.inventory}</td>
        </tr>

        `;
    }

    listings.innerHTML = show;
})