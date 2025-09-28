
document.getElementsByClassName("btn")[0].addEventListener("click", async () => {
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        const productsDiv = document.getElementById('productList');
        productsDiv.innerHTML = ''; 

        products.forEach(product => {
            const item = document.createElement('div');
            item.classList.add('product');

            item.innerHTML =`
            <img src = "${product.image}" alt = "${product.title}" />
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
            <p>Category: ${product.category}</p>`;
            productsDiv.appendChild(item);
    });
 
}    catch(error){
        console.error('Error fetching products:', error);
    }
});