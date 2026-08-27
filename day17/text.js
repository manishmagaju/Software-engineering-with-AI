//map
const prices = [100, 200, 300];

const newPrices = prices.map(function(price) {
    return price + 50;
});

console.log(newPrices);

//filter
const pricess = [100, 200, 300, 400];

const result = pricess.filter(function(price) {
    return price >= 200;
});

console.log(result);

//reduce
const numbers = [10, 20, 30];

const total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log(total);