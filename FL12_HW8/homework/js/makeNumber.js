let arr;

function makenumber(str) {
    let newStr = '';
    arr = str.split('');
    arr.forEach(function (letter) {
        if (letter >= 0 && letter <= 9 ) {
            newStr += letter;
        }
    })

    if(newStr !== '') {
        newStr = parseInt(newStr);
    }

    return newStr;
}

makenumber('155gfgd455');
