// Soal 1 

let angka = 9; 

for (let i = 1; i <= 10; i++) {
    let total = i * angka; 
    console.log(`${i} X ${angka} = ${total}`)
}

// Soal 2 

let text = 'ses'; 

let lowertext = text.replace(/\s+/g, '').toLowerCase();

let balikantext = lowertext.split('').reverse().join('');

if (lowertext === balikantext) {
    console.log(`${lowertext} adalah palindrome`);
} else {
    console.log(`${lowertext} bukan palidrome`);
}

// Soal 3 
let cm = 100000; 
let km = cm / 100000;

console.log(`${cm} cm adalah ${km} km`);

// Soal 4 
let inputNumber = 2000; 

let numToString = inputNumber.toString();
let format = numToString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

let resultRp = `Rp. ${format},00`;

console.log(resultRp);

// Soal 5 
let textAwal = "Hello world"; 
let hapusBagian = "ell"; 

let index = textAwal.indexOf(hapusBagian);

if (index !== -1) {
    textAwal = textAwal.slice(0, index) + textAwal.slice(index + hapusBagian.length);
}

console.log(textAwal); 

// Soal 6 
let textBelumKapital = "cek eck"
let kapitalText = textBelumKapital
    .split(' ') 
    .map(wakil => wakil.charAt(0).toUpperCase() + wakil.slice(1)) 
    .join(' '); 

console.log(kapitalText)

// Soal 7 
let strAwal = "The QuiCk BrOwN Fox"; 

let tukarString = strAwal
    .split('') .map(char => 
        char === char.toUpperCase() 
            ? char.toLowerCase() // Benar 
            : char.toUpperCase() // Salah 
    ).join(''); 

console.log(tukarString); 

// Soal 8 
let bilangan1 = 42;
let bilangan2 = 27; 

if (bilangan1 > bilangan2) {
    console.log(bilangan1); 
} else {
    console.log(bilangan2); 
}

// Soal 9 
let num1 = 42;
let num2 = 27;
let num3 = 18;

let numbers = [num1, num2, num3];

numbers.sort((a, b) => a - b); 

console.log(numbers[0], numbers[1], numbers[2]);

// Soal 10 
let input = 2; 

if (typeof input === 'string') {
    console.log(1);
} else if (typeof input === 'number') {
    console.log(2);
} else {
    console.log(3);
}


// Soal 11 
let inputA = 'An apple a day keeps the doctor away. Mhd Ali Aja'; 

let results = inputA.replace(/a/gi, '*');

console.log(results);