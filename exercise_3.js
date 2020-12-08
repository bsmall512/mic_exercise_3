// Exercise #3: Array / Object Manipulation
function priceFilter(arr){
    return arr.filter(product => product.price >= 75)
}

function weightFilter(arr){
    return arr.filter(product => product.weight > 1.8)
}
    
function keyIdMap(arr){
    let retObj = {};
    arr.forEach((product, ix, arr) => {
        let temp = product.id
        delete product.id;
        retObj[temp] = product;        
    })
    return retObj;
}
 