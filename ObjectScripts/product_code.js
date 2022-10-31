function parseCode(code)
{

let productCode = code.indexOf(":");
let productNum = code.indexOf("-");
let product = code.substring (0, productCode);
let number = code.substring (productCode, productNum);
let size = code.substring(productNum);


let item = {
    product:product,
    number:number,
    size: size,
};

return item;
}



let supplierCode = "ABC:7890-M";
console.log(parseCode(supplierCode));
