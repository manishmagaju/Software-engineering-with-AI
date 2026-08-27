const fruits = [
    {
        name: "Apple",
        price: 200,
        color: "Red"
    },
    {
        name: "Banana",
        price: 100,
        color: "Yellow"
    },
    {
        name: "Orange",
        price: 150,
        color: "Orange"
    },
    {
        name: "Mango",
        price: 250,
        color: "Yellow"
    }
];

const fruitList = document.getElementById("fruitList");

fruits.forEach(function(fruit) {

    fruitList.innerHTML += `
        <div>
            <h2>${fruit.name}</h2>
            <p>Price: Rs. ${fruit.price}</p>
            <p>Color: ${fruit.color}</p>
            <hr>
        </div>
    `;

});