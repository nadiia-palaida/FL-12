function addOne(x) {
    return x + 1;
}

function pipe(x, ...args) {
    for(let i = 0; i < args.length; i++) {
       x = args[i](x);
    }

    return x;
}

pipe(1, addOne);
