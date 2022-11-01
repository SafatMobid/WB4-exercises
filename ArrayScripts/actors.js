let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

   function getactormemId(academyMembers, member)
   {
    let numActors = academyMembers.length;
    
    for (let i = 0; i < numActors; i++)
    {
     if (academyMembers[i].memID==member)
     {
         return academyMembers[i].name
     }
     }
    }
    console.log ("The Actor in seat 187 is " + (getactormemId(academyMembers, 187)))
//---------------------------------------------------------------------------------------------------------------------------------------------//
function getactorMovies(academyMembers)
   {
    let numfilm = academyMembers.length;
    
    for (let i = 3; i < numfilm; i++)
    {
     if (academyMembers[i].films>=3)
     {
         return academyMembers[i].name
     }
     }
    }
    console.log ("The Actor in seat 187 is " + (getactorMovies(academyMembers)))