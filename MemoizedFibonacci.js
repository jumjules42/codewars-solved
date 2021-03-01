function fibonacci(number) {
    let a = 0, b = 1, c, s = 1;
    let array = [1];
    for(let i = 2; i <= number; i++) {
        c = a + b;
        array.push(c);
        s = s + c;
        a = b;
        b = c;
    }
    return array[number - 1];
}

console.log(fibonacci(60));