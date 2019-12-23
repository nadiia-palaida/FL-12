let a = parseInt(prompt('Enter a', ''));
let b = parseInt(prompt('Enter b', ''));
let c = parseInt(prompt('Enter c', ''));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c && a === c) {
        alert('Equilateral triangle');
    } else if (a !== b && b !== c && a !== c) {
        alert('Scalene triangle');
    } else {
        alert('Isosceles triangle');
    }
} else {
    alert('Triangle doesn’t exist');
}
