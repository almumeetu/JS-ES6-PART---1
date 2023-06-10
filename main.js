// problem 7. Write a JavaScript program to convert a specified number into an array of digits.

function numberToDigits(number) {

    var digits = [];

    // convert the number to a string
    var numberString = number.toString();

    for (var i = 0; i < numberString.length; i++){
        digits.push(parseInt(numberString.charAt(i)));
    }

    return digits;
}

console.log(numberToDigits(123456)); // [1,2,3,4,5,6]

console.log(numberToDigits(2468)); // [2,4,6,8]

console.log(numberToDigits(135790)); // [1,3,5,7,9,0]

// problem 8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.

// problem 10. Write a JavaScript program to extract values at specified indexes from a specified array.

