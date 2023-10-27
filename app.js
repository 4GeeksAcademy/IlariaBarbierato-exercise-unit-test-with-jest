// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

function fromDollarToYen (valorDollar){
    let valorEuro = valorDollar/oneEuroIs.USD;
    let valorYen = valorEuro*oneEuroIs.JPY;
    return (valorYen);
}

function fromYenToPound (valorYen){
    let valorEuro = valorYen/oneEuroIs.JPY;
    let valorPound = valorEuro*oneEuroIs.GBP;
    return (valorPound);
}

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = {
    "suma" : sum, 
    "fromEuroToDollar" : fromEuroToDollar, 
    "fromDollarToYen" : fromDollarToYen, 
     "fromYenToPound": fromYenToPound
}
