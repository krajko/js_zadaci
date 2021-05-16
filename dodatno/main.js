import * as functions from "./functions.js";

//#1.
let duplicates = [4, 2, 4, 3, 5, 2, 1, 1, 5, 6, 3, 4, 4, 5, 5 , 3, 2, 2];
console.log(duplicates);
console.log("#1:", functions.removeDuplicates(duplicates));

//#2.
let garbage = [null, 1, undefined, 2, 0, false, NaN, 3];
console.log(garbage);
console.log("#2: ", functions.removeGarbage(garbage));

//#3.
let objects = [{
        fname: "John",
        lname: "Doe",
        age: 21

    },
    {
        fname: "Jane",
        lname: "Moe",
        age: 35
    },
    {
        fname: "Ben",
        lname: "Dover",
        age: 11
    }
];
console.log(objects);
console.log("#3:", functions.sortByKey(objects, 'age', 'asc'));
console.log("#3:", functions.sortByKey(objects, 'age'));

//#4.
let random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("#4: ", functions.getRandomElement(random));

//#5.
let swap = [1, 2, 3, 4, 5];
console.log(swap);
console.log("#5. ", functions.swap(swap, 0, 3));

//#6.
console.log("#6.1:", functions.generateArray1(5));
console.log("#6.2:", functions.generateArray2(5));

//#7.
let max = [1, 4, 2, 8, 5, 3];
console.log(max);
console.log("#7", functions.max1(max));
console.log("#7", functions.max2(max));

//#8.
let partition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(partition);
console.log("#8:", functions.oddEvenPartition(partition));
console.log("#8:", functions.oddEvenPartition(partition, 'odd'));
console.log("#8:", functions.oddEvenPartition(partition, 'even'));

//#9.
let shuffle = [1, 2, 3, 4, 5];
console.log(shuffle);
console.log("#9:", functions.shuffle(shuffle));

//#10. 
let array1 = [1, 2, 3, 4, 5];
let array2 = [2, 4];
console.log(array1);
console.log(array2);
console.log("#10:", functions.subtractArrays(array1, array2));