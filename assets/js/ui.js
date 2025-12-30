window.renderSPVDashboard = function(container) {
    container.innerHTML = `
    <div class="max-w-2xl mx-auto w-full pb-20">
        <div class="flex justify-between items-center mb-8 px-2">
            <div>
                <h1 class="text-2xl font-black text-slate-800 tracking-tight">KASIR PRO</h1>
                <p class="text-slate-400 text-xs font-medium uppercase tracking-widest">Supervisor Mode</p>
            </div>
            <div class="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                <i data-lucide="user" class="text-indigo-600 w-5 h-5"></i>
            </div>
        </div>

        <div class="space-y-4 mb-8">
            <div class="bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
                <div class="relative z-10">
                    <p class="text-xs opacity-70 mb-1 font-bold">OMSET HARI INI</p>
                    <h2 id="total-selected" class="text-4xl font-black">Rp 0</h2>
                </div>
                <i data-lucide="trending-up" class="absolute right-[-10px] bottom-[-10px] w-32 h-32 opacity-10"></i>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-white p-6 rounded-[2rem] border border-slate-100">
                    <p class="text-[10px] text-slate-400 font-bold mb-1">BULAN INI</p>
                    <h3 id="total-month" class="text-lg font-bold text-slate-800">Rp 0</h3>
                </div>
                <div class="bg-white p-6 rounded-[2rem] border border-slate-100">
                    <p class="text-[10px] text-slate-400 font-bold mb-1">TAHUN INI</p>
                    <h3 id="total-year" class="text-lg font-bold text-slate-800">Rp 0</h3>
                </div>
            </div>
        </div>

        <div class="px-2 mb-6 text-sm font-bold text-slate-500 uppercase tracking-tight">Filter Laporan</div>
        <div class="bg-white p-2 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-2 mb-8">
            <input type="date" id="spv-date" class="flex-1 bg-transparent p-3 text-sm font-bold focus:outline-none" value="${new Date().toISOString().split('T')[0]}">
            <button onclick="loadSPVAnalytics()" class="bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-black hover:bg-indigo-600 transition-all">CEK</button>
        </div>

        <div class="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div class="flex justify-between items-center mb-6 px-2">
                <h3 class="font-black text-slate-800 tracking-tight text-lg">TRANSAKSI TERAKHIR</h3>
                <button onclick="loadRiwayatData()" class="bg-slate-50 p-2 rounded-full"><i data-lucide="refresh-cw" class="w-4 h-4 text-slate-400"></i></button>
            </div>
            <div id="hist-list" class="space-y-1">
                <div class="text-center py-10"><div class="animate-spin inline-block w-6 h-6 border-4 border-indigo-500 border-t-transparent rounded-full"></div></div>
            </div>
        </div>
    </div>`;

    loadSPVAnalytics();
    loadRiwayatData();
    if (typeof lucide !== 'undefined') lucide.createIcons();
};
