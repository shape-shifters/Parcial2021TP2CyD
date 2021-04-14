/**
 * Dado un array de numeros enteros, complete las funciones para que retorne un array conteniendo 
 * solo los numeros pares y solo numeros impares respectivamente
 */

const even = function(numbers){
    even_arr = []
    numbers.forEach((num) => {
        if (num%2 == 0) {
            even_arr.push(num)
        }
    });
    return even_arr;
}

const odd = function(numbers){
    odd_arr = []
    numbers.forEach(function (num) {
        if (num%2 != 0) {
            odd_arr.push(num)
        }
    });
    return odd_arr;
}

// TESTS (no modificar)
const arrEqual = (a1,a2) => JSON.stringify(a1) == JSON.stringify(a2);
console.log(arrEqual(even([4,2,6,1,0,2,5]),[4,2,6,0,2]));
console.log(arrEqual(odd([4,2,6,1,0,2,5]),[1,5]));
