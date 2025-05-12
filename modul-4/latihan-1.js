let nama = "Naufal";
let Nama = "Dzaki";
let nAmA = "Niardi";
let NAMA = "NDN";

console.log(nama); // Output: Naufal
console.log(Nama); // Output: Dzaki
console.log(nAmA); // Output: Niardi
console.log(NAMA); // Output: NDN

// Mencoba mengakses dengan kapitalisasi berbeda akan error:
// console.log(nAm); // ReferenceError: nAm is not defined

// Penulisan keyword yang benar
let angka = 5;
while (angka > 0) {
  console.log(angka);
  angka--;
}

// Penulisan keyword yang salah (akan menghasilkan SyntaxError)
// WHILE (angka < 3) { // SyntaxError: Unexpected token '('
//   console.log("Masih kurang dari 3");
//   angka++;
// }

function sapa() {
  console.log("Halo!");
}

function Sapa() {
  console.log("Hai!");
}

sapa(); // Output: Halo!
Sapa(); // Output: Hai!

// Mencoba memanggil dengan kapitalisasi berbeda akan error:
// Sapa(); // Ini akan bekerja
// sApa(); // TypeError: sApa is not a function