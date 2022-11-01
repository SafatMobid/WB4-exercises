let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];

let studentNum = students.length;


function getAverage(scores) 
{
    let scoreNum = scores.length
    let scoresTotal = 0;
    let average = 0;

    for (let i = 0; i < scoreNum; i++) {
        scoresTotal += scores[i];
        average = scoresTotal / scoreNum;
   }
   return average;
}

for (let i=0; i < studentNum; i++)
{
    console.log(students[i].name + ":");
    console.log (getAverage (students[i].scores));
}



