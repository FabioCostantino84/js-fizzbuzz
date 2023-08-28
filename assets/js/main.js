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

let fieldsElement = document.querySelector('.fields');

for (let i = 1; i <= 100; i++) {

    const fieldElement = document.createElement('div')

    fieldElement.classList.add('box')

    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log('fizzbuzz');
        fieldElement.append('fizzbuzz')
        fieldElement.classList.add('bg-red')

    } else if ((i % 3) === 0) {
        console.log('fizz');
        fieldElement.append('fizz')
        fieldElement.classList.add('bg-green')

    } else if ((i % 5) === 0) {
        console.log('buzz');
        fieldElement.append('buzz')
        fieldElement.classList.add('bg-yellow')


    } else {
        console.log(i);
        fieldElement.append(i)


    }

    fieldsElement.append(fieldElement)

}
