<!DOCTYPE html>
<html>

<head>
    <title>Daftar Nilai Naufal-DN</title>
</head>

<body>
    <h2>Input Nilai Mahasiswa</h2>
    <form method="POST">
        Nama: <input type="text" name="nama" required><br>
        Nilai: <input type="number" name="nilai" required><br>
        <input type="submit" value="Cek Nilai">
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $nama = $_POST['nama'];
        $nilai = $_POST['nilai'];

        // Klasifikasi nilai
        if ($nilai >= 80) {
            $grade = "A";
        } elseif ($nilai >= 70) {
            $grade = "B";
        } elseif ($nilai >= 60) {
            $grade = "C";
        } elseif ($nilai >= 50) {
            $grade = "D";
        } else {
            $grade = "Tidak Lulus";
        }

        // Menampilkan hasil
        echo "<h3>Hasil Klasifikasi Nilai</h3>";
        echo "Nama: $nama<br>";
        echo "Nilai: $nilai<br>";
        echo "Grade: $grade<br>";
    }
    ?>
</body>

</html>