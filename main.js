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


//   problem 12. Write a JavaScript program to remove non-printable ASCII characters from a given string.

const remove_non_ASCII = str => str.replace(/[^\x20-\x7E]/g, ''); // ^ not\x20 hex code for space character- to \x7e hex code for ~ (tilde) character

console.log(remove_non_ASCII('äÄçÇéÉêw3resouröceÖÐþúÚ')); // w3resource

/////////////////////
////////////////

function removeNonASSCII(str) {
    return str.replace(/[^ -~]/g, "");    
            
}
console.log(removeNonASSCII("Éêw3resourö")); //w3resour

/////////////////////
///////////////////////////

function removeNonPrintableCharacters (str) {
    var printableStr = "";

    for ( var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);

        if (charCode >= 32 && charCode <= 126) {
            printableStr += str.charAt(i);
        }
    }

    return printableStr;
}

console.log(removeNonPrintableCharacters("Hello,\x0B\tWorld!")); // Hello, World!
console.log(removeNonPrintableCharacters("Éêw3resourö}<")); //w3resour 


// problem 13. Write a JavaScript program to convert a given string's length to bytes.

const lengthToBytes = (str) => {
  
    let size = new Blob([str]).size;
    // The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text
    // or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
    return size;
  } 
    
  console.log(lengthToBytes("Geeksforgeeks")) // 13
  console.log(lengthToBytes("true")) // 4
  console.log(lengthToBytes("false")) // 5
  console.log(lengthToBytes("12345")) // 5


//   problem 14. Write a JavaScript program to replace multiple object keys' names with the values provided.



//   problem 15. Write a JavaScript program to return the minimum-maximum value
//  of an array, after applying the provided function to set a comparing rule. 

const reduce_Which = (arr, comparator = (a, b) => a - b) =>

  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));

console.log(reduce_Which([1, 3, 2])); 

console.log(reduce_Which([10, 30, 20], (a, b) => b - a));  

console.log(reduce_Which(
  [{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }],
  (a, b) => a.age - b.age)); 

/////////////////////////
////////////

function minMax(array, comparator) {
    if (array.length === 0) {
      return undefined;
    }
  
    const sortedArray = array.sort(comparator);
    return sortedArray[0];
  }
  
  const numbers = [10, 30, 20];
  const comparator = (a, b) => a - b;
  console.log(minMax(numbers, comparator));
  console.log(minMax([{ name: 'Kevin', age: 16 }, { name: 'John', age: 20 }, { name: 'Ani', age: 19 }], comparator));


//   problem 16. Write a JavaScript function that returns true if the provided predicate function returns
//    true for all elements in a collection, false otherwise.



// problem 17. Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, 
// the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.



// problem 18. Write a JavaScript program to remove specified elements from the left of a given array of elements.

function removeElementsFromLeft(array, n){

    if (n >= array.length) {
        return [];
      }

    return array.slice(n); 
  }
  console.log(removeElementsFromLeft([1, 2, 3])); // [1,2,3]
  console.log(removeElementsFromLeft([1, 2, 3], 1)); // [2,3]
  console.log(removeElementsFromLeft([1, 2, 3], 2)); // [3]
  console.log(removeElementsFromLeft([1, 2, 3], 4)); // []


//problem 19. Write a JavaScript program to remove specified elements from the right of a given array of elements.


function removeElementsFromRight(array, n){

    if (n >= array.length) {
        return [];
      }

    return array.slice(0, array.length - n); 
  }

  console.log(removeElementsFromRight([1, 2, 3], 1)); // [1,2]
  console.log(removeElementsFromRight([1, 2, 3], 2)); // [1]
  console.log(removeElementsFromRight([1, 2, 3], 4)); // []
