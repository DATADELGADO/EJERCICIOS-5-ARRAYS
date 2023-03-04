//1. Declara un array _vacío_.

let array = [];

//2. Declara un array com mas de 5 elementos.

let array1 = [1, 2, 3, 4, 5, 6, 7]

//3. Encuentra la longitud de tu array.

console.log(array1.length);

//4. Obtenga el primer elemento, el elemento del medio y el último elemento de un array.

console.log(`primer elemento: ${array1[0]}`);
console.log(`elemento medio: ${array1[3]}`);
console.log(`ultimo elemento: ${array1[array1.length - 1]}`);


// 5. Declara un array llamado _mixedDataTypes_, coloque diferentes tipos de datos en el array y encuentre la longitud del array.El tamaño del array debe ser mayor que 5.

let _mixedDataTypes_ = ["steven", 2, 3, false, true, [0, 2]];

// 6. Declare un variable array de nombre _itCompanies_ y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.

let _itCompanies_ = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Imprima el array usando _console.log()_.

console.log(_itCompanies_);

// 8. Imprima el número de empresas en el array.

console.log(_itCompanies_.length);

// 9. Imprime la primer empresa, la intermedia y la última empresa

console.log(`primer empresa: ${_itCompanies_[0]}`);
console.log(`empresa medio: ${_itCompanies_[3]}`);
console.log(`ultima empresa: ${_itCompanies_[_itCompanies_.length - 1]}`);

// 10. Imprime cada empresa.

for (let i = 0; i < _itCompanies_.length; i++) {
    console.log(_itCompanies_[i]);
}

//11. Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.  /// revisar

console.log(_itCompanies_.join(" ").toLocaleUpperCase().split(" "));

// for (let i = 0; i < _itCompanies_.length; i++) {
//     console.log(_itCompanies_[i].toLocaleUpperCase());
// }


//12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
console.log(`${_itCompanies_[0]}, ${_itCompanies_[1]}, ${_itCompanies_[2]}, ${_itCompanies_[3]}, ${_itCompanies_[4]}, ${_itCompanies_[5]} y ${_itCompanies_[6]} son grandes empresas de TI`);



//13. Compruebe si existe una determinada empresa en el array itCompanies.Si existe, retorna la empresa; de lo contrario, retorna la empresa _no existe_
let empresa = "Amazon";
if (_itCompanies_.indexOf(empresa)) {
    console.log(_itCompanies_[_itCompanies_.indexOf(empresa)]);
} else {
    console.log("La empresa no existe");
}


//14. Filtre las empresas que tienen más de una 'o' sin el método _filter()_
let arrayEmpresas = [];
for (let i = 0; i < _itCompanies_.length; i++) {
    if (_itCompanies_[i].match(/[o]{2,}/g)) {
        arrayEmpresas.push(_itCompanies_[i]);
    }
}
console.log(arrayEmpresas);

//15. Ordene el array usando el método _sort()_

_itCompanies_.sort();
console.log(_itCompanies_);

//16. Invierte la array usando el método _reverse()_

_itCompanies_.reverse();
console.log(_itCompanies_);


//17. Cortar las primeras 3 empresas del array

console.log(_itCompanies_.slice(0, 3));

//18. Cortar las últimas 3 empresas del array

console.log(_itCompanies_.slice(_itCompanies_.length - 3, _itCompanies_.length));


//19. Cortar la empresa o empresas intermedias de TI del array

console.log(_itCompanies_.slice(_itCompanies_.length / 2, _itCompanies_.length / 2 + 1));

//20. Eliminar la primera empresa de TI del array
_itCompanies_.shift();
console.log(_itCompanies_);


//21. Eliminar la empresa o empresas intermedias de TI del array

let _itCompanies_2 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
_itCompanies_2.splice(3, 1);
console.log(_itCompanies_2);

//22. Elimine la última empresa de TI del array

_itCompanies_2.splice(_itCompanies_2.length - 1, 1);
console.log(_itCompanies_2);

//23. Eliminar todas las empresas de TI

_itCompanies_2.splice(0);
console.log(_itCompanies_2);




