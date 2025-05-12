<?php
echo "<h2>Logika AND (Disjungsi)</h2>";

// Logika AND dengan simbol &&
$a = true;
$b = false;

if ($a && $b) {
    echo "Kedua kondisi benar (AND)<br>";
} else {
    echo "Salah satu atau kedua kondisi salah (AND)<br>";
}

// Contoh lain dengan ekspresi angka
$x = 10;
$y = 20;

if ($x > 5 && $y < 30) {
    echo "Nilai x lebih dari 5 DAN y kurang dari 30 (AND)<br>";
} else {
    echo "Salah satu syarat tidak terpenuhi (AND)<br>";
}

echo "<h2>Logika OR (Konjungsi)</h2>";

// Logika OR dengan simbol ||
$c = false;
$d = true;

if ($c || $d) {
    echo "Salah satu atau kedua kondisi benar (OR)<br>";
} else {
    echo "Kedua kondisi salah (OR)<br>";
}

// Contoh lain dengan ekspresi angka
$age = 18;
$hasID = false;

if ($age >= 18 || $hasID) {
    echo "Dapat masuk ke acara (OR)<br>";
} else {
    echo "Tidak dapat masuk ke acara (OR)<br>";
}
?>