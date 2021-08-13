
/*
#1. Fizz Buzz using Modulus Operator

num divisible y 3 = Fizz
num divisible by 5 - Buzz
num divisible by 3 and 5 - FizzBuzz
*/



/* function sayFizzBuss(num){
    
    for(let i = 1; i <= num; i++){
     if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
     }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    };
};

sayFizzBuss(30); */




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
#2. Harmless Ransom Note using Time complexity & bIg O Notation

Big O Notation is used to classified how scalable an algorithm of function is and help us to determine
how fast an algorithm can run depending on the input size
*/

/* function harmlessRansomNote (noteText, magazineText){
    //define arrays of noteText
    let noteArr = noteText.split(' ');
    //define arrays of magazineText
    let magazineArr = magazineText.split(' ');
    //define magazine objects that includes all the text in magazineText
    let magazineObj = {};

    //check if the word exist in magazineText and increment it depending the number of time the word appear in magazineText
    magazineArr.forEach(word => {
        if(!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });
    //define it is possible to make a note to true by default

    let noteIsPossible = true;

    //check if the array of words in noteText is in magazineText
    noteArr.forEach(word => {
        if(magazineObj[word]){
            //decrement the word if it is in magazineObj
            magazineObj[word]--;
            if(magazineObj[word] < 0) noteIsPossible = false;
        }else noteIsPossible = false;
    });

    console.log(noteIsPossible);
    //return noteIsPossible;
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 
'puerto rico is a place of great wonder and excitment it has many secret waterfall locations that i am an admirer of you must hike quite a distamce..'); */



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*
#3 Caesar Cipher

*/

/* function caesarCipher(str, num){

    num = num % 26;
    let lowerCaseString = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newString ='';


    for(i = 0; i < lowerCaseString.length; i++){
        let currentLetter = lowerCaseString[i];
        if(currentLetter === ' '){
            newString += currentLetter;
            continue;
        }

        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;

        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = 26 + newIndex;

        if(str[i] === str[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase();
        } else newString += alphabet[newIndex];
    };

    console.log(newString);
    //return newString;
}

//caesarCipher('Zoo Keeper', 2);

//caesarCipher('Big Car', -16);

caesarCipher('Javascript', -900); */



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
  #4  Is Palindrome
*/

/* function isPalindrome(string){
    string = string.toLowerCase();
    let charactersArr = string.split('');
    let validCharacters =  'abcdefghijklmnopqrstuvwxyz'.split('');

    let letterArr = [];

    charactersArr.forEach(char => {
        if(validCharacters.indexOf(char) > -1){
            letterArr.push(char);
        }
    })

    if(letterArr.join('') === letterArr.reverse().join('')){
        return true;
    }else {
        return false;
    }
};

//console.log(isPalindrome("Madam I'M Adam"));
//console.log(isPalindrome("race car"));
console.log(isPalindrome("Coding Javascript")); */


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 #5 Reverse word
*/

/* function reverseWord(string){
    string = string.toLowerCase();
    let wordArr = string.split(' ');
    let reverseWordArr = [];
    
    wordArr.forEach(word => {
        let reversedWord = '';
        for(let i = word.length - 1; i >= 0; i--){
            reversedWord += word[i];
        }

        reverseWordArr.push(reversedWord);
    });

    console.log(reverseWordArr.join(' '));
    
};

reverseWord('Come home as early as possible'); */



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 #6 Reverse Array
*/

/* function reverseArrayInPlace(arr){
    for(let i = 0; i < arr.length / 2; i++){
        let temVar = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temVar;
    }

    console.log(arr);
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8 ,9]); */



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 #7 mean, median, mode
*/

//the average of the array
/* function getMean(array) {
 let sum = 0;

 array.forEach(num => {
     sum += num;
 })

 let mean = sum / array.length;

 //return mean;
 console.log(mean)
};


//the median item of the array
function getMedian(array) {
    array.sort(function(a, b) {return a - b});
    let median;

    if(array.length % 2 !== 0){
        median = array[Math.floor(array.length / 2)];
    }else{
        let mid1 = array[(array.length / 2) - 1];
        let mid2 = array[(array.length / 2)];

        median = (mid1 + mid2) / 2;
    }

    //return median;
    console.log(median)
}


//The item that apeared most in the array
function getMode(array) {

    let modeObj = {};

    array.forEach(num => {
        if(!modeObj[num])
            modeObj[num] = 0;
            modeObj[num]++;
        
    });

    let maxFrequency = 0;

    let modes = [];
    for(let num in modeObj){
        if(modeObj[num] > maxFrequency){
            modes = [num];
            maxFrequency = modeObj[num]
        }
        else if (modeObj[num] === maxFrequency){
            modes.push(num);
        }
    }

    if (modes.length === Object.keys(modeObj).length) modes = [];

    //return modes;
    console.log(modes)
    
}

function meanMedianMode(array) {

    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array),
    };
    
}

//meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]);
meanMedianMode([9, 10, 23, 10, 23, 9]);
 */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 #8 Between Two Sets
 use every method to test whether all elements in the array pass the test implemented by the particular function
*/

/* function getTotalx(a, b){
    let result = 0;

    for(let i = 1; i <= 100; i++){
        if(a.every(int => (i % int == 0))){
            if(b.every(int => (int % i == 0))){
                result++;
            }
        }
    }
    //return result;
    console.log(result);
}

getTotalx([2, 6], [24, 36]) */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*
 #9 Simple Array Sum
*/

/* function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    
    for (let i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    
    return sum

} 
simpleArraySum([2, 5, 6])
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


*/

/*
 #10 Compare the triplets
*/

/* function compareTriplets(a, b){
    let point = [];
    let alice = 0;
    let bob = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            alice++;
        }
        else if (a[i] < b[i]){
            bob++;
        }
    }
    point =[alice, bob]

    return point;
};
console.log(compareTriplets([17, 28, 30], [99, 16, 8])); */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 #11 2D Array - DS

 function hourglassSum(arr) {
    // Write your code here
    let max = -9999;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = arr[i + 1][j + 1];
            for (let k = 0; k < 3; k++) {
                sum += arr[i][j + k];
                sum += arr[i + 2][j + k]
            }
            if (sum > max) max = sum;
        }
    }

    return max;

}
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/**
 * #12 - Two sum
 * 
 * 
 */
/* function twoSum(numArray, sum){
    let pairs = [];
    let hashTable = [];
    for (let i = 0; i < numArray.length; i++){
        let currNum = numArray[i];
        let counterpart = sum - currNum;
        if(hashTable.indexOf(counterpart) != -1){
            pairs.push([currNum, counterpart]);
        }

        hashTable.push(currNum);
    }

    //return pairs;
    console.log(pairs);
}

twoSum([1, 6, 4, 5, 3, 3], 7) */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Extral knowledge about recursive
/* function factorial(num){
    if(num <= 2){
        return num;
    }else{
        return num * factorial(num - 1);
    }

    
} 

factorial(4);
*/

/**
 * #13 - Binary search - using recursive function
 * 
 * 
 */

/* function binarySearch(numArray, key){
    let middleIdx = Math.floor(numArray.length) / 2;
    let middleElem = numArray[middleIdx];

    if(middleElem === key) return true;
    else if(middleElem < key && numArray.length > 1){
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1){
        return binarySearch(numArray.splice(0, middleIdx), key);
    }

    else return false;

}
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56); */


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * #14 - Fibonacci
 * 
 * 
 */

/* function fibonacci(position){
    if(position < 3) return 1;

    else return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(20)) */


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * #14 - Fibonacci using Memoized
 * 
 */

/* function fibMemo(index, cache){
    cache = cache || [];
    if(cache[index]) return cache[index];
    else{
        if(index < 3) return 1;
        else{
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }
    }
    return cache[index];
}

console.log(fibMemo(50));
 */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * #14 - Sieve of Eratosthenes - return all prime numbers up to num in an array
 * 
 */

/* function sieveOfEratosthenes (n){
    let primes = [];
    for(let i = 0; i <= n; i++){
        primes[i] = true;
    }

    primes[0] = false;
    primes[1] = false;
    for(let i = 2; i<= Math.sqrt(n); i++){
        for(let j = 2; j * i <= n; j++){
            primes[i * j] = false;
        }

    }

    let result = [];

    for(let i = 0; i <= primes.length; i++){
        if(primes[i]) result.push(i);
    }

    //return result;
    console.log(result)
}
sieveOfEratosthenes(20) */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * #15 - Bubble Sort - return array, sorted with bubble sort
 * 
 */

/* function bubblesort(array){
    for(let i = array.length; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log(array);
}

bubblesort([20, 3, 8, 2, 1, 4]); */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * #16 - Left Rotation
 * 
 * 
 * function rotateLeft(d, arr) {
  // check if there's even something to rotate
  if(arr.length < 2) {
    return arr.slice(0); // always return a copy
  }

  // get the number of actual rotations to perform
  var n = d % arr.length;

  // check if there's any need to rotate
  if(n === 0) {
    return arr.slice(0); // always return a copy
  }

  // slice and concat
  if(n < 0) {
    return arr.slice(n).concat(arr.slice(0, arr.length+n));
  } else {
    return arr.slice(n).concat(arr.slice(0, n));
  }
}
 */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * #17 - Sparse Arrays
 * 
 * 
 * function matchingStrings(strings, queries) {
    // Write your code here

let result=[];
    let counts={};
    
    for (let str of strings) 
    counts[str] = counts[str] ? counts[str] + 1 : 1;
    
    for(let i=0;i<queries.length;i++)
    if(counts.hasOwnProperty(queries[i]))
    result.push(counts[queries[i]]);
    else
     result.push(0);
    
    return result;
}
 */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * #18 - Array Manipulation
 * 
 * 
 * 
function arrayManipulation(n, queries) {
    // Write your code here
    
    let max = 0;
    const params = [];
    
    for(let q=0; q<queries.length; q++){
        
        const query = queries[q];
        const qstart = query[0];
        const qend = query[1];
        const qval = query[2];
        
        params.push({
            key: qstart,
            val: qval
        });
        
        params.push({
            key: qend,
            val: -qval
        });
    }
    
    //sort the parameters by key
    params.sort((item1, item2) => {
        if(item1.key === item2. key){
            return item2.val - item1.val;
        }
        
        return item1.key - item2.key;
    });
    
    let sum = 0;
    
    for(let i=0; i<params.length; i++){
        const param = params[i];
        sum += param.val;
        
        if(sum > max){
            max = sum;
        }
    }

    return max;

}

 */


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * #19 - Array Manipulation
 * 
 * 
 * function componentsInGraph(gb) {
    // establish array of n * 2 to represent nodes
    const arr = new Array(gb.length * 2 + 1).fill(-1); // -1 = not connected
    function relabel(oldLabel, newLabel){
        for(let i = 1; i < arr.length; i++){
            if(arr[i]===oldLabel) arr[i] = newLabel;
        }
    }

    let label = 1;
    for(const [nodeG, nodeB] of gb){
        if(arr[nodeG] < 0){
            arr[nodeG] = label;
        }else{
            relabel(arr[nodeG], label);
        }

        if(arr[nodeB] < 0){
            arr[nodeB] = label;
        }else{
            relabel(arr[nodeB], label);
        }

        label++;
    }
    // hash count and establish min/max
    const counts = {};
    for(const num of arr){
        if(num < 0) continue; // skip unconnected
        counts[num] = (counts[num] || 0) + 1;
    }
    
    // return min/max
    return [Math.min(...Object.values(counts)), Math.max(...Object.values(counts))];
}
 * /


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * #16 - merge Sort
 * 
 */

/* function mergeSort(arr){
    if(arr.length < 2) return arr;

    let middleIndex = Math.floor(arr,length / 2);
    let firstHalf = arr.slice(0, middleIndex);
    let secondHalf = arr.slice(middleIndex);

}

function merge (array1, array2){
    let result = [];

    while (array1.length && array2.length){
        let minElem;
        if(array1[0] < array2[0]) minElem = array1.shift();
        else minElem = array2.shift();
        result.push(minElem);
    }

} */

 