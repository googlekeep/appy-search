const shoppingCart = [
    {name:'show', price:1200},
    {name:'shirt', price:3200},
    {name:'pant', price:1500},
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    return Sum;
}
const expense = totalCost(shoppingCart);
console.log('total expense today', expense);