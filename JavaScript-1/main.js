// console.log("Welcome to JavaScript");
// var firstName = 'Nabendu';
// var age = 40;
// var isDeveloper = true;
// console.log(firstName);
// console.log(age);
// console.log(isDeveloper);

// function varExp(){
//     if(true){
//         var num1 = 10;
//         console.log("Inside if var " + num1);
//     }
//     console.log("Outside if var " + num1);
// }

// varExp();
// console.log("Outside function var " + num1);


// if(true){
//     let num2 = 20;
//     console.log("Inside if let " + num2);
// }
// console.log("Outside if let " + num2);

// const num3 = 40;
// num3 = 55;

//Primitive data Types - String, Number, boolean, null, undefined, Symbols
const name = 'Nabendu';
const age = 40;
// const rating = 5.5;
// const isDeveloper = true;
// const x = null;
// let y;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isDeveloper);
// console.log(typeof x);
// console.log(typeof y);

//String concatenation
// console.log('My name is ' + name + ' and i am ' + age + ' year\'s old');
// console.log(`My name is ${name} and i am ${age} year's old.`);

//String methods
// const str = 'Hello JavaScript';

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(0, 7));
// console.log(str.includes('Java'));
// console.log(str.includes('Cobol'));

//Arrays
const languages = ['JavaScript', 'Java', 'C++', 'Golang', 'Kotlin', 5, true];
// console.log(languages);
// console.log(languages[2]);

// languages[2] = 'C';
// console.log(languages);

// languages.pop();
// languages.pop();
// console.log(languages);

// languages.push('Pascal');
// languages.unshift('Rust');
// console.log(languages);

// languages.shift();
// console.log(languages);

// console.log(Array.isArray(languages));
// console.log(Array.isArray(languages[0]));
// console.log(languages.includes('Java'));
// console.log(languages.includes('Cobol'));

//Objects
const person = {
    firstName: 'Nabendu',
    'last Name': 'Biswas',
    age: 40,
    isDeveloper: true,
    hobbies: ['coding', 'teaching', 'youtubing'],
    address: {
        hno: 95,
        city: 'Bhopal',
        state: 'MP'
    }
}

console.log(person.firstName);
console.log(person['last Name']);
console.log(person.hobbies[1]);
console.log(person.address.city);

console.log(Object.keys(person));
console.log(Object.values(person));

const first = Object.keys(person);
console.log(first[0]);





