const axios = require("axios");

// Konfigurasi
const API_URL = "http://localhost:3000/api/public"; // Endpoint yang diproteksi rate limiter
const API_KEY = "secretkey1"; // Sesuaikan dengan API_KEY di .env
const MAX_REQUESTS = 101; // Kirim 101 request (melebihi limit 100 request/15 menit)

async function testRateLimiter() {
  let successCount = 0;
  let blockedCount = 0;

  console.log(`Mengirim ${MAX_REQUESTS} request ke ${API_URL}...\n`);

  for (let i = 1; i <= MAX_REQUESTS; i++) {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          "x-api-key": API_KEY,
        },
      });

      successCount++;
      console.log(`Request #${i}: Berhasil (Status: ${response.status})`);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        blockedCount++;
        console.log(`Request #${i}: Diblokir (Rate Limit Exceeded)`);
      } else {
        console.log(`Request #${i}: Error - ${error.message}`);
      }
    }
  }

  console.log("\nHasil Test:");
  console.log(`✅ Request Berhasil: ${successCount}`);
  console.log(`⛔ Request Diblokir: ${blockedCount}`);
  console.log(
    `\nTips: Jika "Request Diblokir" ≥ 1, rate limiter berfungsi dengan benar.`
  );
}

// Jalankan test
testRateLimiter();