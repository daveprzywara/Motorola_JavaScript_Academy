var newList = [1, 2, 3]

for(var i = 0; i < newList.length; i++) {
  console.log(newList[i]);
}

var fruits = ['banana', 'orange', 'lemon', 'apple']

console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

for(var j = 0; j < newList.length+1; j++) {
  console.log(fruits[j]);
}

var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
var sumTwo = 0;

for(var i = 0; i < tab.length; i++) {
  if(tab[i] % 2 == 0) {
    sum += tab[i];
  }
}
console.log(sum);

for(var j = 0; j < tab.length; j++) {
  sumTwo += tab[j];
}
console.log(sumTwo);

var max = 0;

for(var i = 0; i < tab.length; i++) {
  if (tab[i] > max) {
    max = tab[i]
  }
}
console.log(max);

var arrWithNumbers = [2,3,5,2,3,5,1,2,4];
var firstIndex = 0;

for(var j = 0; j < arrWithNumbers.length; j++) {
  for(var i = 0; i < arrWithNumbers.length; i++) {
    if (firstIndex === arrWithNumbers[i]) {
    break;
  }
  firstIndex = arrWithNumbers[j];
  }
}
console.log(firstIndex);


for(var i = tab.length; i > -1; i--) {
  console.log(tab[i]);
}
