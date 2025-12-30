// Ganti dengan data dari Firebase Console > Project Settings > Web Apps
const firebaseConfig = {


  apiKey: "AIzaSyCqlgi-B8nUBRuL8bHh10rBuAdIQ9EBk9U",


  authDomain: "kasir-toko-2eb38.firebaseapp.com",


  projectId: "kasir-toko-2eb38",


  storageBucket: "kasir-toko-2eb38.firebasestorage.app",


  messagingSenderId: "384536807400",


  appId: "1:384536807400:web:6e05e4677423449306865d",


  

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Helper akses koleksi
const getPublicCol = (col) => db.collection(col);

// Mock User (Sesuaikan dengan sistem auth Anda)
const currentUser = {
    name: "Staff Admin",
    outlet: "Outlet Pusat",
    role: "spv" // atau 'kasir'
};
