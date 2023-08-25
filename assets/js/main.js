/* 
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

//stampare in console i numeri da 1 a 100
//stampare in console per i multipli di 3 "Fizz"
//stampare in console per i multipli di 3 "Fizz"
//stampare in console sia per i multipli di 3 e di 5 "FizzBuzz"

let element = document.getElementById('list');

for (let i = 1; i <= 100; i++) {
    
    const liElement = document.createElement('li');

    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("FizzBuzz");
        liElement.append ('FizzBuzz')
       
    } else if ((i % 3) === 0) {
        console.log("Fizz");
        liElement.append ('Fizz')

    } else if ((i % 5) === 0) {
        console.log("Buzz");
        liElement.append ('Buzz')

       
    } else {
        console.log(i);
        liElement.append (i);

      
    }

    element.append(liElement);

}
