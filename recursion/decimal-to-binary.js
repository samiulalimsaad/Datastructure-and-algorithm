function decimalToBinary(number, result = "") {
    if (number === 0 && result === "") {
        return "0";
    }
    if (number === 0) {
        return result + "";
    }
    return decimalToBinary(parseInt(number / 2), number % 2) + result;
}

console.log(decimalToBinary(0));
console.log(decimalToBinary(1));
console.log(decimalToBinary(2));
console.log(decimalToBinary(3));
console.log(decimalToBinary(10));
console.log(decimalToBinary(15));

// 00 => 0
// 01 => 1
// 10 => 2
// 11 => 3
