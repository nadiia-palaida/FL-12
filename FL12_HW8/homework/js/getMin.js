let i = 0;

function getMin(...args) {
    let min = args[i];

    for (; i < args.length; i++) {
        if (min > args[i]) {
            min = args[i];
        }
    }

    return min;
}

getMin(0, 2, 1);