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
//------------------------------------------------------------------------------------------------------------------------------------------------//
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
    let lotmovies=[]
    
    for (let i = 0; i < numfilm; i++)
    {
     if (academyMembers[i].films.length>=3)
     {
         lotmovies.push (academyMembers[i].name);
     }
     }
     return lotmovies
    }
    console.log ("Actor that been in more then three movie is " + (getactorMovies(academyMembers)))
//-----------------------------------------------------------------------------------------------------------------------------------------//
    function getactorBob(academyMembers)
    {
     let numActor = academyMembers.length;
     let actorBob=[]
     
     for (let i = 0; i < numActor; i++)
     {
      if ((academyMembers[i].name.indexOf("Bob")==0))
      {
          actorBob.push (academyMembers[i].name);
      }
      }
      return actorBob
     }
     console.log ("Actor with the name of " + (getactorBob(academyMembers)))
//--------------------------------------------------------------------------------------------------------------------------------------------//
     function getmovieA(academyMembers)
    {
     let numMovie = academyMembers.length;
     let actor=[]
     
     for (let i = 0; i < numMovie; i++)
     {
        let films = academyMembers[i].films.length;
        for (let f = 0; f < films; f++)
            if ((academyMembers[i].films[f].indexOf("A")==0))
                {
                    actor.push (academyMembers[i].name);
                    break
                 }
     }
        return actor
    }
        console.log ("Actor with movies that start with A " + (getmovieA(academyMembers)))