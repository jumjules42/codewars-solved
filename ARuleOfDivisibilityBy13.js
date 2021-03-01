function thirt(n) {
    const nByThirty = n.toString().split("").reverse().reduce((accu, el, index) => accu += el * (Math.pow(10, index) % 13), 0);
    return n !== nByThirty ? thirt(nByThirty) : nByThirty;
}

console.log(thirt(1234567));