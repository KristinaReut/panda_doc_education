let array = [4, 5, 2, 6, 10, 20];
let result = [];
let prev;

while (array.length) {
    prev = array[0];
    result.push(array[0]);
    array.splice(0, 1);
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= prev * 2) {
            prev = array[i];
            result.push(array[i]);
            array.splice(i, 1);
            i--;
        }
    }
}

console.log(result);