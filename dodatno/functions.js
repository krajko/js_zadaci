//#1.
function removeDuplicates(array) {
    let newArray = [];

    newArray = array.reduce((accumulator, current) => {
        if (!newArray.includes(current)) {
            newArray.push(current);
        }

        return newArray;
    });
    
    return newArray;
}
export { removeDuplicates };

//#2.
function removeGarbage(array) {
    let garbage = [null, undefined, false, 0];

    return array.filter((element) => (garbage.indexOf(element) === -1 && !Number.isNaN(element)));
}
export { removeGarbage };

//#3.
function sortByKey(objects, key, order) {
    let sorted = {};

    if (order === "asc") {
        sorted = [...objects].sort((a, b) => {
            let keyA = a[key];
            let keyB = b[key];

            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
    } else {
        sorted = [...objects].sort((a, b) => {
            let keyA = a[key];
            let keyB = b[key];
    
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            return 0;
        });
    }

    return sorted;
}
export { sortByKey };

//#4.
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
export { getRandomElement };

//#5.
function swap(array, index1, index2) {
    let tmp = array[index1];

    array[index1] = array[index2]; 
    array[index2] = tmp;  

    return array;
}
export { swap };

//#6.1
function generateArray1(length) {
    let array = [];

    for (let i = 0; i < length; i++) {
        array[i] = i;
    }

    return array;
}
export { generateArray1 };

//#6.2
function generateArray2(length)
 {
     let array = new Array(length);

     length--;
     while (length >= 0) {
         array[length] = length;
         length--;
    }

    return array;
 }
 export { generateArray2 };

//#7.1
function max1(array) {
    let max = array[0];
    array.forEach((element) => {
        if (element > max) {
            max = element;
        }
    })

    return max;
}
export { max1 };

//#7.2
function max2(array) {
    return array.reduce((accumulator, current) => {
        if (current > accumulator) {
            accumulator = current;
        }

        return accumulator;
    })
}
export { max2 };

//#8.
function oddEvenPartition(array, key = "") {

    if (key === 'odd') {
        return array.filter((element) => element % 2 != 0);
    }  
    if (key === 'even') {
        return array.filter((element) => element % 2 == 0);
    }

    let newArray = [];
    newArray['odd'] = array.filter((element) => element % 2 != 0);
    newArray['even'] = array.filter((element)=> element % 2 == 0);
    
    return newArray;
}
export { oddEvenPartition };

//#9.
function shuffle(array) {
    let newArray = array;

    array.forEach((element, i) => {
        let rand = Math.floor(Math.random() * array.length);
        let tmp = array[rand];

        newArray[rand] = element;
        newArray[i] = tmp;
    })

    return newArray;
}
export { shuffle };

//#10.
function subtractArrays(array1, array2) {
    return array1.filter((element) => !array2.includes(element));
}
export { subtractArrays };