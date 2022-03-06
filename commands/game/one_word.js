module.exports = {
    name: 'satu',
    description: "host a game party",
    async execute(message, args, client, Discord, cmd) {
        
		const channel = message.channel.id;
        const joinEmoji = '✅';
        const quitEmoji = '⛔';
		const teamOne = '⬅';
        const teamTwo = '➡';
		const reset = '📌';
		
        /*
		
        const teamOne = "⚙";
        const teamTwo = "🟢";
        const quitEmoji = "🔴";
		saveAs(blob, "static.txt");
        */
        const my_list = [];
		
		const kata = ['rakyat', 'sejarah', 'cara', 'seni', 'dunia', 'informasi', 'peta', 'dua', 'keluarga', 'pemerintah', 'kesehatan', 'sistem', 'komputer', 'daging', 'tahun', 'Terima kasih', 'musik', 'orang', 'membaca', 'metode', 'data', 'makanan', 'memahami', 'teori', 'hukum', 'burung', 'literatur', 'masalah', 'perangkat lunak', 'kontrol', 'pengetahuan', 'kekuasaan', 'kemampuan', 'ekonomi', 'cinta', 'Internet', 'televisi', 'Sains', 'Perpustakaan', 'alam', 'fakta', 'produk', 'ide', 'suhu', 'investasi', 'daerah', 'masyarakat', 'aktivitas', 'cerita', 'industri', 'media', 'hal', 'oven', 'masyarakat', 'definisi', 'keamanan', 'kualitas', 'perkembangan', 'bahasa', 'pengelolaan', 'pemain', 'variasi', 'video', 'pekan', 'keamanan', 'negara', 'ujian', 'film', 'organisasi', 'peralatan', 'fisika', 'analisis', 'aturan', 'seri', 'pikiran', 'dasar', 'pacar', 'arah', 'strategi', 'teknologi', 'tentara', 'kamera', 'kebebasan', 'kertas', 'lingkungan', 'anak', 'contoh', 'bulan', 'kebenaran', 'pemasaran', 'Universitas', 'menulis', 'artikel', 'departemen', 'perbedaan', 'sasaran', 'berita', 'hadirin', 'penangkapan ikan', 'pertumbuhan', 'penghasilan', 'pernikahan', 'pengguna', 'kombinasi', 'kegagalan', 'arti', 'obat-obatan', 'filsafat', 'guru', 'komunikasi', 'malam', 'kimia', 'penyakit', 'cakram', 'energi', 'bangsa', 'jalan', 'peran', 'Sup', 'pengiklanan', 'tempat', 'kesuksesan', 'tambahan', 'Apartemen', 'pendidikan', 'matematika', 'momen', 'lukisan', 'politik', 'perhatian', 'keputusan', 'peristiwa', 'Properti', 'belanja', 'murid', 'kayu', 'kompetisi', 'distribusi', 'hiburan', 'kantor', 'populasi', 'Presiden', 'satuan', 'kategori', 'rokok', 'konteks', 'pengantar', 'peluang', 'pertunjukan', 'pengemudi', 'penerbangan', 'panjang', 'Majalah', 'koran', 'hubungan', 'pengajaran', 'sel', 'pedagang', 'temuan', 'Danau', 'anggota', 'pesan', 'telepon', 'pemandangan', 'penampilan', 'asosiasi', 'konsep', 'pelanggan', 'kematian', 'diskusi', 'perumahan', 'inflasi', 'Pertanggungan', 'suasana hati', 'wanita', 'nasihat', 'darah', 'upaya', 'ekspresi', 'pentingnya', 'pendapat', 'pembayaran', 'realitas', 'tanggung jawab', 'situasi', 'keahlian', 'penyataan', 'kekayaan', 'aplikasi', 'kota', 'daerah', 'kedalaman', 'perkebunan', 'dasar', 'nenek', 'jantung', 'perspektif', 'foto', 'resep', 'studio', 'tema', 'koleksi', 'depresi', 'imajinasi', 'gairah', 'persentase', 'sumber', 'pengaturan', 'iklan', 'agen', 'Kampus', 'koneksi', 'kritik', 'utang', 'keterangan', 'Penyimpanan', 'kesabaran', 'sekretaris', 'larutan', 'administrasi', 'aspek', 'sikap', 'Direktur', 'kepribadian', 'psikologi', 'rekomendasi', 'tanggapan', 'pilihan', 'penyimpanan', 'Versi: kapan', 'alkohol', 'argumen', 'keluhan', 'kontrak', 'tekanan', 'jalan raya', 'kehilangan', 'keanggotaan', 'milik', 'persiapan', 'daging panggang', 'Persatuan', 'perjanjian', 'kanker', 'mata uang', 'pekerjaan', 'rekayasa', 'pintu masuk', 'interaksi', 'campuran', 'Pilihan', 'wilayah', 'republik', 'tradisi', 'virus', 'aktor', 'kelas', 'pengiriman', 'perangkat', 'kesulitan', 'drama', 'pemilihan', 'mesin', 'sepak bola', 'panduan', 'hotel', 'pemilik', 'prioritas', 'perlindungan', 'saran', 'ketegangan', 'variasi', 'kecemasan', 'suasana', 'kesadaran', 'mandi', 'roti', 'calon', 'iklim', 'perbandingan', 'kebingungan', 'konstruksi', 'tangga berjalan', 'emosi', 'karyawan', 'pemberi pekerjaan', 'tamu', 'tinggi', 'kepemimpinan', 'mall', 'Pengelola', 'operasi', 'rekaman', 'Sampel', 'angkutan', 'amal', 'sepupu', 'bencana', 'editor', 'efisiensi', 'kegembiraan', 'cakupan', 'masukan', 'gitar', 'pekerjaan rumah', 'pemimpin', 'mama', 'hasil', 'izin', 'presentasi', 'promosi', 'cerminan', 'lemari es', 'resolusi', 'pendapatan', 'sidang', 'penyanyi', 'tenis', 'keranjang', 'bonus', 'kabinet', 'masa kanak-kanak', 'Gereja', 'pakaian', 'kopi', 'makan malam', 'menggambar', 'rambut', 'pendengaran', 'prakarsa', 'pertimbangan', 'laboratorium', 'pengukuran', 'mode', 'Lumpur', 'jeruk', 'puisi', 'polisi', 'kemungkinan', 'prosedur', 'Ratu', 'perbandingan', 'hubungan', 'restoran', 'kepuasan', 'sektor', 'tanda tangan', 'makna', 'lagu', 'gigi', 'kota', 'kendaraan', 'volume', 'istri', 'kecelakaan', 'Bandara', 'janji temu', 'kedatangan', 'anggapan', 'baseball', 'Bab', 'komite', 'percakapan', 'Database', 'antusiasme', 'kesalahan', 'penjelasan', 'petani', 'gerbang', 'gadis', 'aula', 'sejarawan', 'RSUD', 'cedera', 'petunjuk', 'pemeliharaan', 'pabrikan', 'makanan', 'persepsi', 'pai', 'puisi', 'kehadiran', 'usul', 'penerimaan', 'penggantian', 'revolusi', 'sungai', 'putra', 'pidato', 'teh', 'Desa', 'peringatan', 'pemenang', 'pekerja', 'penulis', 'pendampingan', 'napas', 'pembeli', 'dada', 'cokelat', 'kesimpulan', 'kontribusi', 'Kue kering', 'keberanian', 'ayah', 'meja', 'laci', 'pembentukan', 'penyelidikan', 'sampah', 'kebutuhan sehari-hari', 'sayang', 'kesan', 'peningkatan', 'kemerdekaan', 'serangga', 'inspeksi', 'inspektur', 'raja', 'tangga', 'Tidak bisa', 'penalti', 'piano', 'kentang', 'profesi', 'profesor', 'kuantitas', 'reaksi', 'persyaratan', 'salad', 'saudari', 'supermarket', 'lidah', 'kelemahan', 'pernikahan', 'perselingkuhan', 'ambisi', 'analis', 'apel', 'penugasan', 'asisten', 'kamar mandi', 'kamar tidur', 'Bir', 'hari ulang tahun', 'perayaan', 'kejuaraan', 'pipi', 'klien', 'konsekuensi', 'keberangkatan', 'berlian', 'kotoran', 'telinga', 'harta benda', 'persahabatan', 'upacara pemakaman', 'gen', 'pacar perempuan', 'topi', 'indikasi', 'maksud', 'wanita', 'Tengah malam', 'perundingan', 'kewajiban', 'penumpang', 'Pizza', 'platform', 'penyair', 'polusi', 'pengakuan', 'reputasi', 'kemeja', 'Pak', 'pembicara', 'orang asing', 'operasi', 'simpati', 'kisah', 'tenggorokan', 'pelatih', 'paman', 'anak muda', 'waktu', 'kerja', 'film', 'air', 'uang', 'contoh', 'ketika', 'bisnis', 'belajar', 'permainan', 'kehidupan', 'membentuk', 'udara', 'hari', 'tempat', 'nomor', 'bagian', 'bidang', 'ikan', 'kembali', 'proses', 'panas', 'tangan', 'pengalaman', 'pekerjaan', 'buku', 'akhir', 'titik', 'Tipe', 'rumah', 'ekonomi', 'nilai', 'tubuh', 'pasar', 'memandu', 'minat', 'negara', 'radio', 'kursus', 'perusahaan', 'harga', 'ukuran', 'kartu', 'Daftar', 'pikiran', 'berdagang', 'garis', 'peduli', 'kelompok', 'mempertaruhkan', 'kata', 'gemuk', 'memaksa', 'kunci', 'lampu', 'pelatihan', 'nama', 'sekolah', 'atas', 'jumlah', 'tingkat', 'memesan', 'praktek', 'riset', 'nalar', 'melayani', 'bagian', 'jaringan', 'bos', 'olahraga', 'seru', 'rumah', 'halaman', 'ketentuan', 'tes', 'menjawab', 'suara', 'fokus', 'urusan', 'jenis', 'tanah', 'papan', 'minyak', 'gambar', 'mengakses', 'Kebun', 'jangkauan', 'kecepatan', 'alasan', 'masa depan', 'lokasi', 'tuntutan', 'Latihan', 'gambar', 'kasus', 'menyebabkan', 'pesisir', 'tindakan', 'usia', 'buruk', 'kapal', 'catatan', 'hasil', 'bagian', 'bangunan', 'mouse', 'uang tunai', 'kelas', 'Tidak ada apa-apa', 'Titik', 'rencana', 'toko', 'pajak', 'samping', 'subjek', 'ruang angkasa', 'aturan', 'persediaan', 'cuaca', 'peluang', 'angka', 'pria', 'model', 'sumber', 'awal', 'bumi', 'program', 'ayam', 'desain', 'fitur', 'kepala', 'bahan', 'tujuan', 'pertanyaan', 'batu', 'garam', 'bertindak', 'kelahiran', 'mobil', 'anjing', 'obyek', 'skala', 'matahari', 'catatan', 'laba', 'menyewa', 'kecepatan', 'gaya', 'perang', 'bank', 'keahlian', 'setengah', 'dalam', 'di luar', 'standar', 'bis', 'menukarkan', 'mata', 'api', 'posisi', 'tekanan', 'menekankan', 'keuntungan', 'keuntungan', 'kotak', 'bingkai', 'isu', 'melangkah', 'sepeda', 'wajah', 'barang', 'logam', 'cat', 'tinjauan', 'ruang', 'layar', 'struktur', 'melihat', 'Akun', 'bola', 'disiplin', 'medium', 'Bagikan', 'keseimbangan', 'sedikit', 'hitam', 'bawah', 'pilihan', 'hadiah', 'dampak', 'mesin', 'membentuk', 'alat', 'angin', 'alamat', 'rata-rata', 'karier', 'budaya', 'pagi', 'pot', 'tanda', 'meja', 'tugas', 'kondisi', 'kontak', 'kredit', 'telur', 'harapan', 'Es', 'jaringan', 'Utara', 'persegi', 'percobaan', 'tanggal', 'memengaruhi', 'tautan', 'Pos', 'bintang', 'suara', 'modal', 'tantangan', 'teman', 'diri sendiri', 'tembakan', 'sikat', 'pasangan', 'perdebatan', 'keluar', 'depan', 'fungsi', 'kekurangan', 'hidup', 'tanaman', 'plastik', 'titik', 'musim panas', 'rasa', 'tema', 'melacak', 'sayap', 'otak', 'tombol', 'klik', 'menginginkan', 'kaki', 'gas', 'pengaruh', 'melihat', 'hujan', 'dinding', 'basis', 'kerusakan', 'jarak', 'merasa', 'pasangan', 'tabungan', 'staf', 'Gula', 'target', 'teks', 'satwa', 'Pengarang', 'anggaran', 'diskon', 'mengajukan', 'tanah', 'pelajaran', 'menit', 'petugas', 'fase', 'referensi', 'daftar', 'langit', 'panggung', 'tongkat', 'judul', 'Masalah', 'mangkuk', 'menjembatani', 'kampanye', 'karakter', 'klub', 'tepian', 'bukti', 'kipas', 'surat', 'kunci', 'maksimum', 'novel', 'pilihan', 'mengemas', 'Taman', 'banyak', 'perempat', 'kulit', 'menyortir', 'berat', 'bayi', 'Latar Belakang', 'membawa', 'piring', 'faktor', 'buah', 'kaca', 'persendian', 'menguasai', 'otot', 'merah', 'kekuatan', 'lalu lintas', 'perjalanan', 'sayur-mayur', 'menarik', 'bagan', 'gigi', 'ideal', 'dapur', 'tanah', 'catatan', 'ibu', 'bersih', 'berpesta', 'prinsip', 'relatif', 'penjualan', 'musim', 'sinyal', 'Roh', 'jalan', 'pohon', 'melambai', 'sabuk', 'bangku', 'Komisi', 'salinan', 'menjatuhkan', 'minimum', 'jalur', 'kemajuan', 'proyek', 'laut', 'Selatan', 'status', 'hal-hal', 'tiket', 'wisata', 'sudut', 'biru', 'sarapan', 'kepercayaan diri', 'anak perempuan', 'derajat', 'dokter', 'dot', 'mimpi', 'tugas', 'karangan', 'ayah', 'biaya', 'keuangan', 'jam', 'jus', 'membatasi', 'keberuntungan', 'susu', 'mulut', 'perdamaian', 'pipa', 'kursi', 'stabil', 'badai', 'zat', 'tim', 'menipu', 'sore', 'kelelawar', 'pantai', 'kosong', 'menangkap', 'rantai', 'pertimbangan', 'krim', 'awak kapal', 'rinci', 'emas', 'wawancara', 'anak', 'tanda', 'cocok', 'misi', 'nyeri', 'kesenangan', 'skor', 'baut', 'seks', 'toko', 'mandi', 'setelan', 'nada', 'jendela', 'agen', 'pita', 'memblokir', 'tulang', 'kalender', 'topi', 'mantel', 'kontes', 'sudut', 'pengadilan', 'cangkir', 'daerah', 'pintu', 'Timur', 'jari', 'garasi', 'menjamin', 'lubang', 'kait', 'melaksanakan', 'lapisan', 'kuliah', 'berbohong', 'tata krama', 'pertemuan', 'hidung', 'parkir', 'mitra', 'Profil', 'menghormati', 'Nasi', 'rutin', 'Jadwal', 'renang', 'telepon', 'tip', 'musim dingin', 'perusahaan penerbangan', 'tas', 'pertarungan', 'tempat tidur', 'tagihan', 'mengganggu', 'kue', 'kode', 'melengkung', 'perancang', 'dimensi', 'gaun', 'meredakan', 'keadaan darurat', 'malam', 'perpanjangan', 'tanah pertanian', 'bertarung', 'celah', 'nilai', 'hari libur', 'kengerian', 'kuda', 'tuan rumah', 'Suami', 'pinjaman', 'kesalahan', 'Gunung', 'paku', 'kebisingan', 'kesempatan', 'kemasan', 'sabar', 'berhenti sebentar', 'frasa', 'bukti', 'balapan', 'lega', 'pasir', 'kalimat', 'bahu', 'merokok', 'perut', 'rangkaian', 'turis', 'handuk', 'liburan', 'Barat', 'roda', 'anggur', 'lengan', 'ke samping', 'rekan', 'bertaruh', 'meniup', 'berbatasan', 'cabang', 'dada', 'saudara laki-laki', 'sobat', 'kelompok', 'keping', 'pelatih', 'menyeberang', 'dokumen', 'minuman', 'debu', 'ahli', 'lantai', 'Tuhan', 'golf', 'kebiasaan', 'besi', 'hakim', 'pisau', 'lanskap', 'liga', 'surat', 'kekacauan', 'warga asli', 'pembukaan', 'induk', 'pola', 'pin', 'kolam', 'pound', 'meminta', 'gaji', 'malu', 'penampungan', 'sepatu', 'perak', 'memecahkan', 'tangki', 'memercayai', 'membantu', 'memanggang', 'batang', 'lonceng', 'sepeda', 'menyalahkan', 'anak laki-laki', 'bata', 'kursi', 'kabinet', 'petunjuk', 'kerah', 'komentar', 'pertemuan', 'Iblis', 'diet', 'takut', 'bahan bakar', 'sarung tangan', 'jaket', 'makan siang', 'Monitor', 'hak Tanggungan', 'perawat', 'laju', 'panik', 'puncak', 'pesawat', 'hadiah', 'baris', 'sandwich', 'terkejut', 'dengki', 'semprot', 'kejutan', 'sampai', 'transisi', 'akhir pekan', 'Selamat datang', 'halaman', 'alarm', 'membengkokkan', 'sepeda', 'gigitan', 'buta', 'botol', 'kabel', 'lilin', 'staf', 'awan', 'konser', 'menangkal', 'bunga', 'kakek', 'menyakiti', 'lutut', 'pengacara', 'kulit', 'memuat', 'cermin', 'leher', 'pensiun', 'piring', 'ungu', 'menghancurkan', 'mengirimkan', 'rok', 'mengiris', 'salju', 'spesialis', 'pukulan', 'mengalihkan', 'sampah', 'lagu', 'daerah', 'amarah', 'menghadiahkan', 'penawaran', 'pahit', 'sepatu bot', 'serangga', 'kamp', 'Permen', 'karpet', 'kucing', 'juara', 'saluran', 'jam', 'kenyamanan', 'sapi', 'retakan', 'insinyur', 'pintu masuk', 'kesalahan', 'rumput', 'pria', 'neraka', 'menyorot', 'kejadian', 'Pulau', 'candaan', 'juri', 'kaki', 'bibir', 'pasangan', 'motor', 'saraf', 'jalan', 'pena', 'kebanggaan', 'pendeta', 'hadiah', 'janji', 'penduduk', 'resort', 'cincin', 'atap', 'tali', 'berlayar', 'skema', 'naskah', 'kaus kaki', 'stasiun', 'kaki', 'menara', 'truk', 'saksi', 'A', 'Anda', 'dia', 'bisa', 'akan', 'jika', 'satu', 'banyak', 'paling', 'lainnya', 'menggunakan', 'membuat', 'bagus', 'Lihat', 'Tolong', 'Pergilah', 'Bagus', 'makhluk', 'sedikit', 'mungkin', 'tetap', 'publik', 'Baca', 'menyimpan', 'Mulailah', 'memberi', 'manusia', 'lokal', 'umum', 'dia', 'spesifik', 'panjang', 'bermain', 'merasa', 'tinggi', 'malam ini', 'taruh', 'umum', 'mengatur', 'mengubah', 'sederhana', 'masa lalu', 'besar', 'mungkin', 'tertentu', 'hari ini', 'besar', 'pribadi', 'saat ini', 'Nasional', 'memotong', 'alami', 'fisik', 'menunjukkan', 'mencoba', 'memeriksa', 'kedua', 'panggilan', 'pindah', 'membayar', 'membiarkan', 'meningkatkan', 'Lajang', 'individu', 'berbelok', 'bertanya', 'membeli', 'penjaga', 'memegang', 'utama', 'menawarkan', 'potensi', 'profesional', 'internasional', 'bepergian', 'memasak', 'alternatif', 'mengikuti', 'spesial', 'bekerja', 'utuh', 'menari', 'mengizinkan', 'dingin', 'komersial', 'rendah', 'pembelian', 'Sepakat', 'utama', 'bernilai', 'jatuh', 'diperlukan', 'positif', 'menghasilkan', 'Cari', 'hadiah', 'membelanjakan', 'bicara', 'kreatif', 'memberi tahu', 'biaya', 'menyetir', 'hijau', 'mendukung', 'senang', 'menghapus', 'kembali', 'Lari', 'kompleks', 'jatuh tempo', 'efektif', 'Tengah', 'reguler', 'menyimpan', 'Mandiri', 'meninggalkan', 'asli', 'mencapai', 'istirahat', 'Menyajikan', 'jam tangan', 'Cantik', 'mengenakan biaya', 'aktif', 'merusak', 'negatif', 'aman', 'tinggal', 'mengunjungi', 'visual', 'memengaruhi', 'menutupi', 'laporan', 'Bangkit', 'berjalan', 'putih', 'di luar', 'muda', 'memilih', 'unik', 'apa pun', 'klasik', 'terakhir', 'mengangkat', 'mencampur', 'pribadi', 'berhenti', 'mengajar', 'barat', 'perhatian', 'akrab', 'terbang', 'resmi', 'luas', 'nyaman', 'memperoleh', 'mungkin', 'kaya', 'menyimpan', 'berdiri', 'muda', 'gagal', 'berat', 'Halo', 'memimpin', 'mendengarkan', 'berharga', 'khawatir', 'menangani', 'terkemuka', 'bertemu', 'melepaskan', 'menjual', 'menyelesaikan', 'normal', 'tekan', 'mengendarai', 'rahasia', 'sebaran', 'musim semi', 'keras', 'tunggu', 'cokelat', 'dalam', 'menampilkan', 'mengalir', 'memukul', 'objektif', 'menembak', 'menyentuh', 'membatalkan', 'bahan kimia', 'menangis', 'membuang', 'ekstrim', 'dorongan', 'konflik', 'makan', 'mengisi', 'resmi', 'melompat', 'menendang', 'di depan', 'lulus', 'melempar', 'terpencil', 'total', 'merawat', 'luas', 'melecehkan', 'mengalahkan', 'membakar', 'menyetorkan', 'mencetak', 'menaikkan', 'tidur', 'di suatu tempat', 'maju', 'di manapun', 'terdiri atas', 'gelap', 'dobel', 'seri', 'setara', 'memperbaiki', 'mempekerjakan', 'intern', 'Ikuti', 'membunuh', 'peka', 'mengetuk', 'menang', 'menyerang', 'mengeklaim', 'konstan', 'menyeret', 'minum', 'Tebak', 'minor', 'menarik', 'mentah', 'lembut', 'padat', 'memakai', 'aneh', 'takjub', 'tahunan', 'menghitung', 'mati', 'ragu', 'memberi makan', 'selama-lamanya', 'membuat terkesan', 'bukan siapa-siapa', 'mengulang', 'bulat', 'menyanyi', 'menggeser', 'mengupas', 'sedangkan', 'mengharapkan', 'menggabungkan', 'memerintah', 'menggali', 'membagi', 'setara', 'menggantung', 'berburu', 'awal', 'berbaris', 'menyebutkan', 'bau', 'rohani', 'penelitian', 'mengikat', 'dewasa', 'singkat', 'gila', 'melarikan diri', 'mengumpulkan', 'membenci', 'sebelumnya', 'memperbaiki', 'kasar', 'sedih', 'menggores', 'sakit', 'memukul', 'mempekerjakan', 'luar', 'terluka', 'liar', 'tertawa', 'berbaring', 'mobil', 'tidak menyenangkan', 'biasa', 'menanggapi', 'kerajaan', 'senior', 'membelah', 'tekanan', 'berjuang', 'berenang', 'kereta', 'atas', 'mencuci', 'kuning', 'mengubah', 'menabrak', 'bergantung', 'melipat', 'lucu', 'merebut', 'bersembunyi', 'merindukan', 'izin', 'mengutip', 'pulih', 'menyelesaikan', 'gulungan', 'tenggelam', 'tergelincir', 'meluangkan', 'mengira', 'manis', 'mengayun', 'memutar', 'di atas', 'biasa', 'luar negeri', 'berani', 'tenang', 'konsentrat', 'memperkirakan', 'agung', 'pria', 'Milikku', 'mengingatkan', 'diam', 'menolak', 'menyesali', 'mengungkap', 'bergegas', 'menggoyang', 'menggeser', 'bersinar', 'mencuri', 'mengisap', 'mengelilingi', 'siapa saja', 'beruang', 'cemerlang', 'tantangan', 'Sayang', 'menunda', 'mabuk', 'Perempuan', 'buru-buru', 'tidak bisa dihindari', 'Undang', 'ciuman', 'rapi', 'pop', 'memukul', 'berhenti', 'membalas', 'perwakilan', 'melawan', 'meninggal dunia', 'menggosok', 'konyol', 'senyum', 'mengeja', 'menggeliat', 'bodoh', 'merobek', 'sementara', 'besok', 'bangun', 'membungkus', 'kemarin'];

        const embed = new Discord.MessageEmbed()
            .setColor('#40E0D0')
            .setTitle('Therapy with Dhias')
            .setThumbnail('https://media.discordapp.net/attachments/690193806720630823/856780574543183922/Screenshot_20210622-131935_Instagram.jpg?width=566&height=468')
            .setDescription('Clients(s)\n\n'
                + `${my_list}\n`
				+ `${joinEmoji} for Join\n`
				+ `${quitEmoji} for Quit\n`
                + `${teamOne} for TeamOne\n`
                + `${teamTwo} for TeamTwo\n`
				+ `${reset} for RESET\n`)
            .setFooter('Aku adalah bait', 'https://cdn.discordapp.com/emojis/862780896243089440.png?v=1');
   
        const messageEmbed = await message.channel.send(embed);
        messageEmbed.react(joinEmoji).then(() => messageEmbed.react(quitEmoji).then(() => messageEmbed.react(teamOne).then(() => messageEmbed.react(teamTwo).then(() => messageEmbed.react(reset)))));
        
        function getPlayer(){
            let text = "";
            my_list.forEach(list);
            function list(item, index) {
                text +="<@" + item + ">, "; 
            }
            return text;
        }

        function refresh(){
            let text = "";
            my_list.forEach(list);
            function list(item, index) {
                text += (index+1) + ". <@" + item + ">\n"; 
            }

            const newEmbed = new Discord.MessageEmbed()
            .setColor('#40E0D0')
            .setTitle('Rise with Dhias')
            .setThumbnail('https://media.discordapp.net/attachments/690193806720630823/856780574543183922/Screenshot_20210622-131935_Instagram.jpg?width=566&height=468')
            .setDescription('Supporter(s)\n\n'
                + `${text}\n`
				+ `${joinEmoji} for Join\n`
				+ `${quitEmoji} for Quit\n`
                + `${teamOne} for TeamOne\n`
                + `${teamTwo} for TeamTwo\n`
				+ `${reset} for RESET\n`)
            .setFooter('Aku adalah bait', 'https://cdn.discordapp.com/emojis/862780896243089440.png?v=1');
            delete text;
            return newEmbed;
        }

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            
            if (reaction.emoji.name === "✅") {
                const player = await reaction.message.guild.members.cache.get(user.id);
                let id = my_list.indexOf(player);
                if(id==-1){
					if(my_list.length<4){
						my_list.push(player);
						messageEmbed.edit(refresh());
                   		messageEmbed.react(joinEmoji).then(() => messageEmbed.react(quitEmoji).then(() => messageEmbed.react(teamOne).then(() => messageEmbed.react(teamTwo).then(() => messageEmbed.react(reset)))));
					}
                }
            }
			if (reaction.emoji.name === "⛔") {
                const player = await reaction.message.guild.members.cache.get(user.id);
                let id = my_list.indexOf(player);
                if(id!=-1){
					my_list.splice(id, 1);
                	messageEmbed.edit(refresh());
                	messageEmbed.react(joinEmoji).then(() => messageEmbed.react(quitEmoji).then(() => messageEmbed.react(teamOne).then(() => messageEmbed.react(teamTwo).then(() => messageEmbed.react(reset)))));
				}
            }
            if (reaction.emoji.name == "⬅") {
				const player = await reaction.message.guild.members.cache.get(user.id);
				let id = my_list.indexOf(player);
                if(id%2==0){
					let numb = Math.floor(Math.random() * kata.length);
					const user0 = client.users.cache.get(my_list[0].id).send(kata[numb]);
					const user1 = client.users.cache.get(my_list[2].id).send(kata[numb]);
					messageEmbed.reactions.removeAll();
					messageEmbed.edit(refresh());
                	messageEmbed.react(joinEmoji).then(() => messageEmbed.react(quitEmoji).then(() => messageEmbed.react(teamOne).then(() => messageEmbed.react(teamTwo).then(() => messageEmbed.react(reset)))));
				}
            }
			if (reaction.emoji.name == "➡") {
                const player = await reaction.message.guild.members.cache.get(user.id);
                let id = my_list.indexOf(player);
                if(id%2==1){
					let numb = Math.floor(Math.random() * kata.length);
					const user0 = client.users.cache.get(my_list[1].id).send(kata[numb]);
					const user1 = client.users.cache.get(my_list[3].id).send(kata[numb]);
					messageEmbed.reactions.removeAll();
					messageEmbed.edit(refresh());
                	messageEmbed.react(joinEmoji).then(() => messageEmbed.react(quitEmoji).then(() => messageEmbed.react(teamOne).then(() => messageEmbed.react(teamTwo).then(() => messageEmbed.react(reset)))));
				}
            }
			if (reaction.emoji.name == "📌") {
                const player = await reaction.message.guild.members.cache.get(user.id);
                let id = my_list.indexOf(player);
                if(id!=-1){
					delete messageEmbed;
					delete my_list;
					console.log(my_list);
				}
            }
        });

 
        /* client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === regisEmoji) {
                    await message.send("yey");
                }
                if (reaction.emoji.name === teamTwo) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }

        }); */

	}
 
}   