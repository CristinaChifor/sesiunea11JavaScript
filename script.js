
// operatorul type of

const myProducts = ["Camasa, Pantaloni, Pantofi"];
console.log(`My products:`, myProducts);
console.log(`First item in my products is ${myProducts[0]}`);
console.log(`length of myProducts in array is ${myProducts.length}`);

//adaugare de elemente 

const newItem = "Shoes";
myProducts.push(newItem);
console.log(`My products after push`, myProducts);

// modificarea unui element

myProducts[0] = "Tricou";
console.log(`lista noua `, myProducts);

// stergere element

myProducts.pop();
console.log(`after pop-ing`, myProducts);

// stergerea unui element de la inceputul array=ului

myProducts.shift();
console.log(`after shift`, myProducts);

// gasirea indexului unui element din array

const indexOfPantaloni = myProducts.indexOf("Panataloni");
console.log(`elementul pantaloni se afla in lista la indexul ${indexOfPantaloni}`);

// slice returneaza o portiune din array fara a modifica array-ul initial
// subset al unui aray

const subsetOfMyProducts = myProducts.slice(1,3);
console.log(`subset from 1 to 3 is`, subsetOfMyProducts);

// splice modifica array-ul original intr-o var noua

myProducts.splice(2, 1);
console.log(`My products after splice (2,1),`, myProducts);

// CONCATENARE DE ARRAY-URI

myProducts.concat(subsetOfMyProducts);
console.log(`after concat(subsetOfMyProducts): `, myProducts);

