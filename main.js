import { countries } from "./arrays/countries.js";
import { webTechs } from "./web_techs.js";


// ***************************************Ejercicios: Nivel 2***************************************************


// 1. Cree un archivo de countries.js separado y almacene el array de países en este archivo, cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo.Acceda a ambos archivos en el archivo main.js


// 2. Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let arrayFormat = text.replaceAll(/[\.\,]/g, "").split(" ");
console.log(arrayFormat.length);


// 3. En el siguiente carrito de compras agregue, elimine, edite artículos

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(shoppingCart);

// 4. En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'.Si no existe agregar a la lista de países.

if (countries.indexOf("Ethiopia") >= 0) {
    console.log("ETHIOPIA");
} else {
    countries.push("Ethiopia")
}


// 5. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'.Si no existe, agregue Sass al array e imprima el array.

if (webTechs.indexOf("Sass") >= 0) {
    console.log('Sass es un preproceso de CSS');
} else {
    webTechs.push("Sass");
}


//  6. Concatene las siguientes dos variables y guardelas en una variable fullStack.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);







// *********************Ejercicios: Nivel 3*********************


// 1. El siguiente es un array de 10 edades de estudiantes:

//  Ordene el array y encuentre la edad mínima y máxima

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages.sort());
console.log("edad minima: " + ages[0]);
console.log("edad maxima: " + ages[ages.length - 1]);

// Encuentre la edad media(un elemento intermedio o dos elementos intermedios divididos por dos)

console.log("edad media: " + ages[(ages.length) / 2]);

//  Encuentre la edad promedio(todos los elementos divididos por el número de elementos)
let promedio = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / ages.length;
console.log(`edad promedio: ${promedio}`);

// Encuentre el rango de las edades(max menos min)

console.log(`el rango es ${ages[ages.length - 1] - ages[0]}`);

// Compare el valor de(mínimo promedio) y(máximo  promedio), use el método _abs()_

console.log(Math.abs(ages[0] - promedio));
console.log(Math.abs(ages[ages.length - 1] - promedio));



// 2. Cortar los diez primeros países de la array de países

console.log(countries.slice(0, 10));

// 3. Encuentre el país o países de en medio en el array de países
console.log(countries.splice((countries.length / 2), 1));

// 4. Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.

let arrayMitad = countries.splice(countries.length / 2, countries.length)

console.log(countries.length);
console.log(arrayMitad.length);


