let arr;

function countNumbers(str) {
    let newStr = '';
    let count = {};
    arr = str.split('');
    arr.forEach(function (letter) {
        if (letter >= 0 && letter <= 9 ) {
            newStr += letter;
            if(count[letter] === undefined) {
                count[letter] = 1;
            } else {
                count[letter]++;
            }
        }
    });

    if(newStr !== '') {
        newStr = parseInt(newStr);
    }

    return count;
}

countNumbers('558d4fd4f888');
