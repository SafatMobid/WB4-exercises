//More Complicated version
function myscore()
{
let myScores = [92, 98, 84, 76, 89, 99, 100];
return myScores;
}
function yourscore()
{
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 
return yourScores;
}

function getmyAverage(myScores)
{
    let nummyScores = myScores.length;

    var total = 0;
    for(var i = 0; i < myScores.length; i++) 
    {total += myScores[i];}
    let avg = total / nummyScores;

    console.log(avg)
    console.log(myScores)
}
let test = myscore();
getmyAverage (test)

function getyourAverage(yourScores)
{
    let numyourScores = yourScores.length;

    var total = 0;
    for(var i = 0; i < yourScores.length; i++) 
    {total += yourScores[i];}
    let avg1 = total / numyourScores;

    console.log(avg1)
    console.log(yourScores)
}
let test1 = yourscore();
getyourAverage (test1)

//-----------------------------------------------------------------------------------------------------------
//simpler actual version
"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let numMyScores = myScores.length;
let numYourScores = yourScores.length;

function getAverage(scores) {
    let numScores = scores.length;
    let scoresTotal = 0;
    let average = 0;

    for (let i = 0; i < numScores; i++) {
        scoresTotal += scores[i];
        average = scoresTotal / numScores;
   }
   return average;
}

console.log(getAverage(myScores));
console.log(getAverage(yourScores));