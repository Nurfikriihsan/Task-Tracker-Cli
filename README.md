## Task Tracker CLI

Aplikasi Command Line Interface (CLI) untuk melacak tugas Anda. Dengan aplikasi ini, Anda dapat menambahkan, memperbarui, menghapus, dan mengelola status tugas yang perlu diselesaikan.

## Project URL
[project URL](https://github.com/Nurfikriihsan/Task-Tracker-Cli)


## Fitur

- Menambahkan Tugas: Menambahkan tugas baru ke dalam daftar.
- Memperbarui Tugas: Memperbarui deskripsi tugas yang ada.
- Menghapus Tugas: Menghapus tugas yang tidak lagi diperlukan.
- Menandai Status Tugas: Menandai tugas sebagai "Sedang Dikerjakan" atau "Selesai".
- Menampilkan Tugas: Menampilkan daftar semua tugas atau tugas berdasarkan statusnya.

## Persyaratan

- Node.js: Pastikan Node.js terinstal di komputer Anda. Anda dapat mengunduhnya di [Node.js](https://nodejs.org/).

## Instalasi

1. Clone atau Unduh Proyek
   - git clone [https://github.com/Nurfikriihsan/Task-Tracker-Cli.git](https://github.com/Nurfikriihsan/Task-Tracker-Cli.git)
   - cd task-tracker-cli

2. Inisialisasi Proyek
   - Install dependensi (walaupun proyek ini tidak memerlukan dependensi eksternal):
     npm install

## Penggunaan

Setelah proyek terinstal, Anda dapat menjalankan berbagai perintah CLI menggunakan `node task-cli.js` di terminal.

1.) Menambahkan Tugas :
node task-cli.js add "Buy groceries"  

2.) Memperbarui Tugas :
node task-cli.js update 1 "Buy groceries and cook dinner"

3.) Menghapus Tugas :
node task-cli.js delete 1

4.) Menandai Tugas Sebagai Sedang Dikerjakan :
node task-cli.js mark-in-progress 1

5.) Menandai Tugas Sebagai Selesai :
node task-cli.js mark-done 2

6.) Menampilkan Semua Tugas :
node task-cli.js list

7.) Menampilkan Tugas Berdasarkan Status :
node task-cli.js list todo
node task-cli.js list in-progress
node task-cli.js list done

## Kontak 

Jika Anda memiliki pertanyaan atau umpan balik, hubungi saya melalui:
- GitHub: [https://github.com/Nurfikriihsan](https://github.com/Nurfikriihsan)
