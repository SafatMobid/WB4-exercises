"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

function getlunchCost(lunch)
{
    let lunchCost = 0;

    let numLunch = lunch.length;
    for (let i= 0; i < numLunch; i++)
    {lunchCost += lunch[i].price}
    return lunchCost
}

let lunchCost1 = getlunchCost(lunch);
let totalFull = lunchCost1 * 1.18;
console.log(totalFull)
