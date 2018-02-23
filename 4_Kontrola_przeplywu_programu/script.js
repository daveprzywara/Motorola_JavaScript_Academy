var firstNumber = 5;
var secondNumber = 10;

if (firstNumber > secondNumber) {
  console.log("First one is greater.");
} else {
  console.log("Second one is greater or equal.");
}

var numberOne = 10;
var numberTwo = 20;
var numberThree = 30;

if (numberOne > (numberTwo && numberThree)) {
  console.log("Number one is greater.");
} else if (numberTwo > (numberOne && numberThree)) {
  console.log("Number two is greater.");
} else {
  console.log("Number three is greater or numbers are equal.");
}

for(var i = 0; i < 10; i++) {
  console.log("Lubie JavaScript");
}

var result = 0;
for(var i = 1; i < 11; i++) {
  console.log(i);
}

var n = 6;

for(var i = 0; i < n+1; i++) {
  if (i % 2 == 0) {
    console.log(i + " - parzysta");
  } else {
    console.log(i + " - nieparzysta");
  }
}


for(var i = 0; i < 10; i++) {
  console.log("i = " + i +", j = " + j);
}

for(var j = 0; j < 10; j++) {
  console.log("i = " + i +", j = " + j);
}



// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}


var newStars = "";

for(var i = 1; i < size+1; i++) {
  newStars += "* "
  console.log(newStars);
}
