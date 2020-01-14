function convert(...args) {
    let res =[];

    for (let value of args) {
        console.log(value);
        if (typeof value === 'number') {
            res.push(String(value));
        } else if(typeof value === 'string') {
            res.push(+value);
        } else {
            res.push(value);
        }
    }
    return res;
}

function executeforEach(arr, sum){
    for (let i = 0; i < arr.length; i++) {
       let value = sum(arr[i]);
        if (typeof value === 'boolean') {
            if (!value) {
                arr.splice(i, 1);
            }
        } else if(value !== undefined) {
            arr[i] = value;
        }
    }
}

function sum(el) {
    console.log(el * c2);
}

function mapArray(arr, sumRet){
    let newArr = [...arr];
    executeforEach(newArr, sumRet);
    return newArr;
}

function sumRet(el) {
    if (typeof el === 'string') {
        +el;
    }
    return el + 3;
}

function filterArray(arr, filter){
    executeforEach(arr, filter);
    return arr;
}

function filter(el) {
    return el % c2 === 0;
}

function flipOver(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

function makeListFromRange(arr) {
    let newArr = [];

    for (let i = arr[0]; i <= arr [1]; i++) {
        newArr.push(i);
    }
    return newArr;
}

function getArrayOfKeys(arr, key) {
    executeforEach(arr, el => el[key]);
    return arr;
}

function substitute(arr) {
    let newArr = [];
    mapArray(arr, (el) => {
        if (el < 30){
            el = '*';
        }

        newArr.push(el);
        return el;
    })
    return newArr;
}

function getPastDay(date, number) {
    let copyDate = new Date(Number(date));
    copyDate.setDate(date.getDate() - number);
    return copyDate.getDate();
}

const date = new Date(2019, 3, 2);


function formatDate (date) {
    console.log(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`)
}

