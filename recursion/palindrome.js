function palindrome(str = "") {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    const len = str.length - 1;
    if (str[0] === str[len]) {
        return palindrome(str.substring(1, len));
    }
    return false;
}

console.log(palindrome("hello"));
console.log(palindrome("abba"));
console.log(palindrome("123454321"));
