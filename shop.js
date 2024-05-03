// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Načtení produktů z localStorage a zobrazení v HTML
    var savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    var currentTime = new Date().getTime();
    var oneMonth = 30 * 24 * 60 * 60 * 1000; // Měsíc v milisekundách

    savedProducts = savedProducts.filter(function(product) {
        return currentTime - product.timestamp < oneMonth;
    });

    localStorage.setItem('products', JSON.stringify(savedProducts));

    var productList = document.getElementById('productList');
    savedProducts.forEach(function(product) {
        var productItem = document.createElement('li');
        productItem.textContent = product.name + ' - ' + product.description + ' - ' + product.price + ' Kč';
        productList.appendChild(productItem);
    });

    // Přidání nového produktu do localStorage a HTML
    document.getElementById('productForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var productName = document.getElementById('productName').value;
        var productDescription = document.getElementById('productDescription').value;
        var productPrice = document.getElementById('productPrice').value;

        var product = {
            name: productName,
            description: productDescription,
            price: productPrice,
            timestamp: new Date().getTime() // Přidání časového razítka
        };

        savedProducts.push(product);
        localStorage.setItem('products', JSON.stringify(savedProducts));

        var productItem = document.createElement('li');
        productItem.textContent = productName + ' - ' + productDescription + ' - ' + productPrice + ' Kč';
        productList.appendChild(productItem);

        // Vyčištění polí formuláře
        document.getElementById('productName').value = '';
        document.getElementById('productDescription').value = '';
        document.getElementById('productPrice').value = '';
    });
});
