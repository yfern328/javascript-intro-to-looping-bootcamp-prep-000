function forLoop(array){                                                                         //function that passes an array as an argument
    for (let i = 0; i < 25; i++){                                                               //start at i=0, if i is less than 25 run fucntion, then add 1 to i
    i === 1 ? array.push("I am 1 strange loop.") : array.push(`I am ${i} strange loop.`);       //if i is 1, add a string to the end of array, otherwise add an interpolation to the end of array
    }
    return array;                                                                               //return contents of array
}

function whileLoop(number){                                                                     //function that passes a number as an argument
  while (number > 0){                                                                           //while number is greater than zero log the number and then subract 1 from it
    console.log(number);
    number--;
  }
  return ("done");                                                                              //when number = 0, return "done"
}

function maybeTrue() {                                          //followed instructions and copied maybeTrue function from Read me file
  return Math.random() >= 0.5;
}

function doWhileLoop(array){
  do{
    array.pop();                                              //remove last element of array while array length is greater than 0 and maybeTrue returns true
  } while (array.length > 0 && maybeTrue());
  return array;                                              //return the contents of array
}
