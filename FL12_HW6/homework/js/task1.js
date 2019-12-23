const denomin = 2;
const multipl = 4;

let a = parseFloat(prompt('Enter a', ''));
let b = parseFloat(prompt('Enter b', ''));
let c = parseFloat(prompt('Enter c', ''));

if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Invalid input data');
}

let d = Math.pow(b, denomin) - multipl * a * c;

if (d < 0) {
    alert('No solution');
} else if (d === 0) {
    let res = -b / (denomin * a);
    alert(`x = ${res}`);
} else {
    let x1 = (-b + Math.sqrt(d)) / (denomin * a);
    let x2 = (-b - Math.sqrt(d)) / (denomin * a);
    alert(`x1 = ${x1} and x2 = ${x2}`);
}
