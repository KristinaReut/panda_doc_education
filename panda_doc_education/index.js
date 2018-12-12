const toBinary = (number) => {
    let arr = [];
    while (number >= 1) {
        arr.unshift(number % 2);
        number = parseInt(number / 2);
    }
    return parseInt(arr.join(''));
}