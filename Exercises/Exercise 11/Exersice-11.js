//11a
const nums = [10, 20, 30];

nums[2] = 99;
console.log(nums);

//11b
const arr1 = [1, 20, 22, 24, 5];
const arr2 = ['hi', 'hello', 'good'];

function getLastValue(arr) {
    return arr[arr.length - 1];
}

console.log(getLastValue(arr1));
console.log(getLastValue(arr2));

//11c
const arr3 = [1, 20, 22, 24, 5];
const arr4 = ['hi', 'hello', 'good'];

function arraySwap(arr) {
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
}

arraySwap(arr3);
arraySwap(arr4);

console.log(arr3);
console.log(arr4);

//11d
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

//11e
for (let i = 5; i >= 0; i--) {
    console.log(i);
}

console.log('11f');
//11f

let i = 0;

while (i <= 10) {
    console.log(i);
    i += 2;
}

i = 5;

while (i >= 0) {
    console.log(i);
    i--;
}

console.log('11g');

//11g
const arr5 = [1, 2, 3];
const arr6 = [];

for (let i = 0; i < arr5.length; i++) {
    arr6.push(arr5[i] + 1);
}

console.log(arr6);

console.log('11h');

//11h

const arr7 = [1, 2, 3];
const arr8 = [-2, -1, 0, 99];

function addOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 1;
    }
    return arr;
}

console.log(addOne(arr7));
console.log(addOne(arr8));

console.log('11i');

//11i
const arr9 = [1, 2, 3];
const arr10 = [-2, -1, 0, 99];

function addNum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += num;
    }
    return arr;
}

console.log(addNum(arr9, 2));
console.log(addNum(arr9, 3));
console.log(addNum(arr10, 2));

console.log('11j');

//11j

const arr11 = [1, 1, 2];
const arr12 = [1, 1, 3];
const arr13 = [1, 2, 3];
const arr14 = [4, 5, 6];

function addArrays(array1, array2) {
    const arr = [];
    for (let i = 0; i < array1.length; i++) {
        arr[i] = array1[i] + array2[i];
    }
    return arr;
}

console.log(addArrays(arr11, arr12));
console.log(addArrays(arr13, arr14));

console.log('11k');

//11k
const arr15 = [1, -3, 5];
const arr16 = [-2, 3, -5, 7, 10];

function countPositive(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}

console.log(countPositive(arr15));
console.log(countPositive(arr16));

console.log('11l');

//11l
const arr17 = [1, -3, 5];
const arr18 = [-2, 3, -5, 7, 10];

function minMax(arr) {

    const minMaxobj = {
        min: arr[0],
        max: arr[0]
    };

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > minMaxobj.max) {
            minMaxobj.max = arr[i];
        }
        if (arr[i] < minMaxobj.min) {
            minMaxobj.min = arr[i];
        }
    }
    return minMaxobj;
}

console.log(minMax(arr17));
console.log(minMax(arr18));


console.log('11m');

//11m
function minMaxv2(arr) {
    if (arr.length < 1) {
        return { min: null, max: null };
    }

    const minMaxobj = {
        min: arr[0],
        max: arr[0]
    };

    if (arr.length === 1) {
        return minMaxobj;
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > minMaxobj.max) {
            minMaxobj.max = arr[i];
        }
        if (arr[i] < minMaxobj.min) {
            minMaxobj.min = arr[i];
        }
    }
    return minMaxobj;
}

console.log(minMaxv2([]));
console.log(minMaxv2([3]));

//11n
console.log('11m');

function countWords(arr) {
    const ans = {};
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (!ans[word]) {
            ans[word] = 1;
        }
        else {
            ans[word] += 1;
        }
    }
    return ans;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));

//11o
console.log('11o');

function findWord(arr, term) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === term) {
            index = i;
        }
    }
    return index;
}

console.log(findWord(['h', 'w', 'search', 'g'], 'search'));
console.log(findWord(['h', 'w', 'g'], 'search'));

//11p
console.log('11p');

function findWordV2(arr, term) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === term) {
            index = i;
            break;
        }
    }
    return index;
}

console.log(findWordV2(['search', 'h', 'w', 'search', 'g'], 'search'));

//11q

console.log('11q');

function finIndex(arr, term) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === term) {
            index = i;
            break;
        }
    }
    return index;
}

console.log(finIndex(['search', 'h', 'w', 'search', 'g'], 'w'));

//11r

console.log('11r');

function removeEggs(foods) {
    let ans = [];
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg') {
            continue;
        }
        else {
            ans.push(foods[i]);
        }
    }
    return ans;
}

console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));

//11s

console.log('11s');

function removeEggsV2(foods) {
    let ans = [];
    let count = 0;
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg' && count < 2) {
            count++;
            continue;
        }
        else {
            ans.push(foods[i]);
        }
    }
    return ans;
}

console.log(removeEggsV2(['egg', 'apple', 'egg', 'egg', 'ham']));

//11t

console.log('11t');

function removeEggsV3(foods) {
    foods = foods.reverse();
    let ans = [];
    let count = 0;
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === 'egg' && count < 2) {
            count++;
            continue;
        }
        else {
            ans.push(foods[i]);
        }
    }
    return ans;
}

console.log(removeEggsV3(['egg', 'apple', 'egg', 'egg', 'ham']));
