# uas-abl
UAS Arsitektur Berbasis Layanan

# Deskripsi Project
Implementasi membuat Restful API (REST Server) yang disertai dengan autentikasi/security (key, limit, dan login) dari instansi Perusahaan Perdagangan Ritel 

# Kelompok 3:
1.⁠ ⁠Eryagiandi Septiawan (2021080295) (Ketua)
2.⁠ ⁠Panji Jaya Sutra (20220801517)
3.⁠ ⁠Richard Martin T (20190801445)
4.⁠ ⁠Samuel Abraham (20210801313)
5.⁠ ⁠Reivandy Alvito Maurico S. (20220801521)

# Teknologi, Lib/Framework Yang Digunakan
- NodeJs v22.11.0
- axios: 1.7.9
- bcryptjs: 2.4.3
- dotenv: 16.4.7
- express: 4.21.2
- express-rate-limit: 7.5.0
- jsonwebtoken: 9.0.2
- nodemon: 3.1.9

# Demo yang akan Dilakukan
- Penjelasan pada masing-masing kode file
- Simulasi Akses ke Un-Protected API
- Simulasi Akses ke Public API dengan API Key
- Simulasi Login untuk generate JWT
- Simulasi Akses ke API menggunakan JWT
- Simulasi Implementasi Rate limit

# Cara menjalankan project
Lakukan clone project di github jika belum memiliki:
`git clone https://github.com/panjivj/uas-abl.git`

buka folder project:
`cd uas-abl`

Mulai install library:
`npm install`

Jalankan project:
`npm run dev`
apabila terdapat error nodemon pastikan untuk menginstall nodemon terlebih dahulu dengan ketik:
`npm i -g nodemon`

Aplikasi penguji rate limiter:
`node testRateLimit.js`

# Struktur Project
/
├── src/
│   ├── config/
│   │   └── rateLimit.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   └── apiKey.js
│   ├── routes/
│   │   └── api.js
│   ├── utils/
│   │   └── authUtils.js
│   └── server.js
├── .env
└── package.json
└── testRateLimit.js