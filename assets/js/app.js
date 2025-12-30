// assets/js/app.js
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('main-content');
    console.log("Memulai inisialisasi...");

    try {
        // 1. Cek apakah Firebase sudah siap
        if (typeof db === 'undefined') {
            throw new Error("Database (db) tidak ditemukan. Cek config.js");
        }

        // 2. Cek apakah fungsi UI sudah dimuat
        if (typeof renderSPVDashboard !== 'function') {
            throw new Error("Fungsi renderSPVDashboard tidak ditemukan. Cek ui.js");
        }

        // 3. Jalankan Tampilan
        console.log("Merender Dashboard...");
        renderSPVDashboard(container);
        
        // Inisialisasi ikon
        if (typeof lucide !== 'undefined') lucide.createIcons();

    } catch (error) {
        console.error(error);
        container.innerHTML = `
            <div class="p-6 bg-red-50 text-red-600 rounded-2xl border border-red-200">
                <h2 class="font-bold">Gagal Memuat Sistem</h2>
                <p class="text-sm">${error.message}</p>
                <button onclick="location.reload()" class="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg">Coba Lagi</button>
            </div>`;
    }
});
