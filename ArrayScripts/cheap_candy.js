"use sripts"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    //       price ranges
];

function getcandyPrice(products)
{
 let numCandy = products.length;
 let four = [];
for (let i = 1; i < numCandy; i++)
{
 if (products[i].price<=4)
 {
     four.push(products[i].product);
 }
 }
 return four
}
console.log ("The candy that cost $4.00 is " + getcandyPrice(products))
//----------------------------------------------------------------------------------------//
function getcandyName(products)
{
 let numCandy = products.length;
 let name = [];
for (let i = 1; i < numCandy; i++)
{
 if (products[i].product.indexOf("M&Ms")>=0) //Tried randomly, Why did that work??????//
 {
     name.push(products[i].product);
 }
 }
 return name
}
console.log ("The candy that has M&M is " + getcandyName(products))
//----------------------------------------------------------------------------------------------//
function findcandyName(products)
{
 let numCandy = products.length;
 let name = [];
for (let i = 0; i < numCandy; i++)
{
 if (products[i].product.indexOf("Swedish")>=0) //Tried randomly, Why did that work??????//
 {
     name.push(products[i].product);
 }
 }
 return name
}
console.log ("Yes we have " + findcandyName(products))
