
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

