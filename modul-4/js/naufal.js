// Deklarasi variabel
var panjangBalok = 10;
var lebarBalok = 5;
var tinggiBalok = 7;

// Hitung volume
var volumeBalok = panjangBalok * lebarBalok * tinggiBalok;

// Dapatkan elemen HTML berdasarkan ID
var panjangElement = document.getElementById("panjang");
var lebarElement = document.getElementById("lebar");
var tinggiElement = document.getElementById("tinggi");
var volumeElement = document.getElementById("volume");

// Tampilkan nilai dan hasil di dalam elemen HTML
panjangElement.textContent = panjangBalok;
lebarElement.textContent = lebarBalok;
tinggiElement.textContent = tinggiBalok;
volumeElement.textContent = volumeBalok;

console.log("Volume balok adalah: " + volumeBalok);
