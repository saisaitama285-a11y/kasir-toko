window.renderRiwayat = async function(container) {
    container.innerHTML = `
        <div class="bg-white p-6 rounded-[2rem] border mt-6">
            <h3 class="font-black mb-4">Riwayat Transaksi</h3>
            <div id="hist-list" class="divide-y">Memuat...</div>
        </div>`;
    loadRiwayatData();
};

window.loadRiwayatData = async function() {
    const listEl = document.getElementById('hist-list');
    const snap = await getPublicCol('transactions').get();
    let docs = snap.docs.map(d => ({id: d.id, ...d.data()}));
    
    listEl.innerHTML = docs.map(d => `
        <div class="flex justify-between items-center py-4">
            <div>
                <div class="font-bold text-sm">INV-${d.id.slice(-4)}</div>
                <div class="text-[10px] text-slate-400">${d.timestamp?.toDate().toLocaleString()}</div>
            </div>
            <div class="flex items-center gap-3">
                <div class="font-black text-indigo-600">Rp ${d.total.toLocaleString()}</div>
                <button onclick="deleteTransaction('${d.id}')" class="text-red-500">🗑️</button>
            </div>
        </div>`).join('') || 'Tidak ada data';
};
