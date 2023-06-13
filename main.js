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

function filterArray(array, valuesToFilter) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        
        var currentValue = array[i];   

        if (!valuesToFilter.includes(currentValue)) {

            result.push(currentValue);
        }
    }

    return result;

}

console.log(filterArray([1,2,3,4,5,6], [2,4])); // [1,3,5,6]

console.log(filterArray(["a", "b", "c", "d", "e", "f"], ["a","e","f"])); // ["b","c","d"]


// problem 10. Write a JavaScript program to extract values at specified indexes from a specified array.

function extractValuesAtIndex (array, indexs) {

    var extractValue = [];

    for (var i = 0; i < indexs.length; i++) {

        var currentValue = indexs[i];

        if(currentValue >= 0 && currentValue < array.length) {

            extractValue.push(array[currentValue]); 
        }
    }
    return extractValue;
}

console.log(extractValuesAtIndex (["a", "b", "c", "d", "e", "f"], [0, 2, 5])); // ["a", "c", "f"]

console.log(extractValuesAtIndex (["4", "7", "1", "9", "3", "5"], [1, 2, 3])); // ["7", "1", "9"]


// problem 11. Write a JavaScript program to generate a random hexadecimal color code.

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(random_hex_color_code()) // #61f140

  /////////////////////////
  ///////////////////////////////
  /////////////

  function randomHexColor() {
    const hexCharecters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexCharecters.length);
        color += hexCharecters[randomIndex];
    }
    return color;
  }
  console.log(randomHexColor()); // #E5D499

