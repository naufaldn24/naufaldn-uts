// Membuat variabel dengan tipe data boolean
let isTrue = true; // Menyimpan nilai true
let isFalse = false; // Menyimpan nilai false

console.log(isTrue); // Output: true
console.log(isFalse); // Output: false

// Menggunakan tipe data boolean dalam kondisi if
let a = 5;
let b = 10;

if (a < b) {
  console.log("a lebih kecil dari b"); // Output: a lebih kecil dari b
} else {
  console.log("a lebih besar dari atau sama dengan b");
}

// Menggunakan tipe data boolean hasil operasi perbandingan
let isEqual = a === b;
console.log(isEqual); // Output: false (karena a tidak sama dengan b)

let isGreaterThan = a > b;
console.log(isGreaterThan); // Output: false (karena a tidak lebih besar dari b)

let isLessThan = a < b;
console.log(isLessThan); // Output: true (karena a lebih kecil dari b)
