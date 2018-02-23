var logicOne = true;
var logicTwo = false;
console.log(logicOne == logicTwo);
// false, ponieważ true != false

var firstNumber = 20;
var secondNumber = 3;
var resultModulo = 0;

resultModulo = firstNumber % secondNumber;
console.log(resultModulo);
// 2

var firstString = "This is the first string, ";
var secondString = "and this is the second string.";
var joinedStrings = "";

joinedStrings = (firstString + secondString);
console.log(joinedStrings);
// This is the first string, and this is the second string.

var myNumber = 4;
var myString = "4";

console.log(myNumber == myString);
console.log(myNumber === myString);
/* W pierwszym przypadku zwraca true, ponieważ zmienne przechowują te same wartości.
Natomiast, w drugim przypadku zwraca false, ponieważ zmienne są innego typu. */

var counter = 145;

counter++;
console.log(counter);

counter--;
console.log(counter);

var checkOne = 2;
var checkTwo = 1;
var result = null;

result = (checkOne > checkOne);
console.log(result);
// false
