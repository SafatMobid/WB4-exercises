"use sripts"

let products = [
    
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Gummy Worms", price: 5.79},
    {product: "Swedish Fish", price: 3.79},
    {product: "Hersey Bar", price: 2.79},
    // TODO: fill the array with 10 candies of various
    //       price ranges
];

products.sort(function(a, b)
{
 if (a.product < b.product) return -1;
 else if (a.product == b.product) return 0;
 else return 1;
});

let numProduct = products.length;
for (let i = 0; i < numProduct; i++ )
{
 console.log("The candy in order based on name is " + products[i].product)
}
console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------")

products.sort(function(a, b)
{
 if (a.price < b.price) return -1;
 else if (a.price == b.price) return 0;
 else return 1;
});

let numPrice = products.length;
for (let i = 0; i < numPrice; i++ )
{
 console.log("The candy in order based on price is " + products[i].price)
}