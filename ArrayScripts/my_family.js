function getFamily()
{
    let family = ["John", "Jane", "Joe", "Jake"]
    return family;
}

function displayfamily(family)
{
    let memFamily = family.length;
    for (let i =0; i < memFamily; i++)
    {console.log(family[i]);}
}

let ourfamily = getFamily();
displayfamily (ourfamily)