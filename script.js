
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
 #6 Reverse word
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


/*
 #9 
*/