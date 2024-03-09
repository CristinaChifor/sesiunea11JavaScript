//console.log(`Hello World!`);

// declarare array [`a`,`b`, `c`]

const myProducts = [`Camasa`, `Pantaloni`,`Manusi`];
console.log(`myProducts:`, myProducts);
console.log(`First item in myProducts is ${myProducts[0]}`);
console.log(`Length of myProducts array is: ${myProducts.length}`);

// adaugare de elemente la sf array-ului .push

const newItem = "Pantofi";
myProducts.push(newItem);
console.log(`myProdycts after push:`, myProducts);

//const newItem2 = "Genti";
//myProducts.push(newItem2);
//console.log(`myProdycts after push:`, myProducts);

myProducts.push(25);
console.log(`myProducts after push:`, myProducts);

// modificarea unui element

myProducts [0] = "Tricou";
console.log(`myProducts after changing the first item`, myProducts);

// stergerea unui element de la sf array-ului .pop

myProducts.pop()
console.log(`myProducts after pop-ing the last item`, myProducts);

// adaugarea unui element la inceputul listei .unshift

myProducts.unshift(`Camasa`);
console.log(`myProducts after unshift`, myProducts);

// stergerea unui element de la inceputul array-ului .shift

myProducts.shift();
console.log(`myProducts after shift`, myProducts);

// indexOf - gasirea index-ului unui elem din array

const indexOfPantaloni = myProducts.indexOf(`Pantaloni`);
console.log(`Elementul Pantaloni se afla in lista la indexul ${indexOfPantaloni}`);

// subset al unui array .slice

const subsetOfMyProducts = myProducts.slice(1,3);
console.log(`Subset from 1 to 3 is`, subsetOfMyProducts);

// .splice sterge elem de la anumiti indecsi din array

myProducts.splice(2, 1, "Camasa");
console.log(`After splice(2, 1, "Camasa")`, myProducts);

// concatenare de doua sau mai multe array-uri

const concatenatedArrays = myProducts.concat(subsetOfMyProducts);
console.log(`After concat(subsetOfMyProducts)`, concatenatedArrays);

