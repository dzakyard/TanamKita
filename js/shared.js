// --- SMOOTH NAVIGATION FUNCTION ---
function smoothNavigate(page) {
    // Avoid reload if already on same page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === page) return;

    // Fade out animation
    const mainContent = document.querySelector('main') || document.body;
    mainContent.style.transition = 'opacity 0.3s ease-out';
    mainContent.style.opacity = '0';

    // Load new page after fade out
    setTimeout(() => {
        window.location.href = page;
    }, 300);
}

// --- NOTIFICATION FUNCTION (SWEET ALERT STYLE) ---
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-[2000] transition-all duration-300 ${
        type === 'success' 
            ? 'bg-green-500 text-white' 
            : type === 'error'
            ? 'bg-red-500 text-white'
            : 'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    notification.style.animation = 'slideIn 0.3s ease-out forwards';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


// --- 1. SIMULASI DATABASE USER (List of Dictionaries) ---
const usersDB = [
    { 
        email: "ridwan@tanamkita.com", 
        password: "12345678", 
        name: "Ridwan Haneef",
        role: "member"
    },
    { 
        email: "Abdul@tanamkita.com", 
        password: "tanamansehat", 
        name: "Abdul Hadir",
        role: "member"
    },
    { 
        email: "admin@tanamkita.com", 
        password: "admin", 
        name: "Administrator",
        role: "admin"
    }
];

// --- 2. FUNGSI VALIDASI LOGIN ---
function handleLogin(event) {
    event.preventDefault(); // Mencegah halaman reload saat submit

    // Ambil nilai dari input form
    const emailInput = document.getElementById('login-email').value;
    const passwordInput = document.getElementById('login-password').value;

    // Logika pencarian data (Validasi)
    // Mencari user di dalam array usersDB yang email DAN password-nya cocok
    const userFound = usersDB.find(user => user.email === emailInput && user.password === passwordInput);

    if (userFound) {
        // Jika user ditemukan (Login Sukses)
        showNotification(`Login Berhasil! 🎉 Selamat datang kembali, ${userFound.name}.`, 'success');
        closeModal('login-modal');
        
        // Opsional: Reset form
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
    } else {
        // Jika user tidak ditemukan (Login Gagal)
        showNotification("Login Gagal! Email atau password salah. Coba: budi@tanamkita.com / 12345678", 'error');
    }
}

// --- 3. BLOG DATA ---
const blogData = {
    'anggrek': {
        title: "Cara Merawat Anggrek di Rumah dengan Mudah",
        date: "15 Desember 2025",
        category: "Tips & Trik",
        image: "https://images.unsplash.com/photo-1567359781514-3b963547cf48?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p class="lead text-xl text-gray-800 font-medium mb-8">Anggrek adalah salah satu bunga terindah dan paling dicari oleh pecinta tanaman. Namun, banyak yang merasa tanaman ini sulit dirawat. Padahal, dengan tips yang tepat, merawat anggrek di rumah sangat mudah!</p>
            
            <h3>1. Pencahayaan Yang Tepat</h3>
            <p>Anggrek menyukai cahaya terang namun tidak langsung terkena sinar matahari. Tempat terbaik adalah dekat jendela yang mendapat cahaya pagi atau sore. Jika terkena sinar matahari langsung saat siang hari, daun bisa terbakar.</p>

            <h3>2. Sirkulasi Udara</h3>
            <p>Anggrek membutuhkan aliran udara yang baik (aerasi). Jangan letakkan di sudut ruangan yang pengap. Akar anggrek juga butuh bernapas, itulah sebabnya pot anggrek biasanya memiliki banyak lubang.</p>

            <h3>3. Pemupukan Teratur</h3>
            <p>Gunakan pupuk khusus anggrek (NPK dengan kadar P tinggi) seminggu sekali. Semprotkan pada daun dan akar, bukan pada bunga.</p>

            <h3>Kesimpulan</h3>
            <p>Kunci merawat anggrek adalah kesabaran. Jangan terlalu sering dipindah-pindah, biarkan ia beradaptasi dengan lingkungannya.</p>
        `
    },
    'pepaya': {
        title: "Cara Mudah Menanam Pepaya di Pot",
        date: "10 Desember 2025",
        category: "Panduan",
        image: "https://images.unsplash.com/photo-1517260739337-6799d2ff9af7?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p class="lead text-xl text-gray-800 font-medium mb-8">Menikmati buah pepaya hasil panen sendiri tentu memberikan kepuasan tersendiri. Kabar baiknya, Anda tidak memerlukan kebun yang luas. Pepaya jenis California atau Calina sangat cocok ditanam dalam pot (tabulampot).</p>
            
            <h3>1. Persiapan Pot dan Media Tanam</h3>
            <p>Gunakan pot berdiameter minimal 40-50 cm. Pastikan bagian bawahnya memiliki lubang drainase yang baik agar air tidak menggenang. Campurkan tanah, pupuk kandang, dan sekam bakar dengan perbandingan 1:1:1 sebagai media tanam.</p>

            <h3>2. Pemilihan Bibit</h3>
            <p>Pilihlah bibit pepaya varietas unggul yang genjah (cepat berbuah) dan pohonnya pendek, seperti Pepaya California. Bibit bisa dibeli di toko pertanian atau disemai sendiri dari biji buah yang matang sempurna.</p>

            <h3>3. Perawatan Rutin</h3>
            <p>Siram tanaman secara teratur, terutama di musim kemarau, namun jangan sampai becek. Berikan pupuk NPK setiap dua minggu sekali untuk memacu pertumbuhan. Jangan lupa pangkas daun-daun tua yang menguning.</p>

            <h3>Kesimpulan</h3>
            <p>Dengan perawatan yang tepat, pepaya dalam pot bisa mulai berbuah dalam waktu 7-9 bulan. Selain menghasilkan buah yang sehat, tanaman ini juga mempercantik halaman rumah Anda.</p>
        `
    },
    'lidah-mertua': {
        title: "Manfaat Lidah Mertua sebagai Pembersih Udara Alami",
        date: "08 Desember 2025",
        category: "Rekomendasi",
        image: "https://images.unsplash.com/photo-1627917235222-38374244ce67?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p class="lead text-xl text-gray-800 font-medium mb-8">Sansevieria atau Lidah Mertua bukan tanaman biasa. NASA menobatkannya sebagai salah satu tanaman pembersih udara terbaik di dunia.</p>
            <h3>Menyerap Racun Berbahaya</h3>
            <p>Tanaman ini terbukti mampu menyerap formaldehida, benzena, dan trichloroethylene—zat kimia berbahaya yang sering ditemukan pada cat dinding, karpet, dan perabot rumah tangga.</p>
            <h3>Produksi Oksigen di Malam Hari</h3>
            <p>Uniknya, Lidah Mertua melakukan fotosintesis Crassulacean Acid Metabolism (CAM), yang artinya ia melepaskan oksigen di malam hari. Sangat cocok diletakkan di kamar tidur untuk meningkatkan kualitas tidur Anda.</p>
            <h3>Perawatan Super Mudah</h3>
            <p>Lidah Mertua sangat toleran terhadap kekeringan. Anda cukup menyiramnya 2-3 minggu sekali. Ia juga tahan banting di ruangan minim cahaya.</p>
        `
    }
};

function openBlog(blogId) {
    const data = blogData[blogId];
    if (data) {
        // Isi konten detail
        document.getElementById('detail-title').innerText = data.title;
        document.getElementById('detail-date').innerText = data.date;
        document.getElementById('detail-category').innerText = data.category;
        document.getElementById('detail-img').src = data.image;
        document.getElementById('detail-content').innerHTML = data.content;
        
        // Pindah ke halaman detail
        window.location.href = 'blog-detail.html?id=' + blogId;
    }
}

// --- FUNGSI MODAL ---
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// --- SET ACTIVE NAV LINK BASED ON CURRENT PAGE ---
function setActiveNav() {
    const raw = window.location.pathname.split('/').pop() || 'index.html';
    const currentFile = raw.split('?')[0] || 'index.html';

    // Map detail pages to their parent nav target
    const pageMap = {
        'blog-detail.html': 'blog.html'
    };

    const current = pageMap[currentFile] || currentFile;

    // Desktop nav links (buttons with class .nav-link)
    document.querySelectorAll('.nav-link').forEach(btn => {
        const onclick = btn.getAttribute('onclick') || '';
        const m = onclick.match(/smoothNavigate\(['"](.+?)['"]\)/);
        if (!m) return;
        const target = m[1].split('?')[0];

        if (target === current) {
            btn.classList.add('text-secondary', 'border-secondary');
            btn.classList.remove('border-transparent');
        } else {
            btn.classList.remove('text-secondary', 'border-secondary');
            if (!btn.classList.contains('border-transparent')) btn.classList.add('border-transparent');
        }
    });

    // Mobile menu buttons inside #mobile-menu
    document.querySelectorAll('#mobile-menu button').forEach(btn => {
        const onclick = btn.getAttribute('onclick') || '';
        const m = onclick.match(/smoothNavigate\(['"](.+?)['"]\)/);
        if (!m) return;
        const target = m[1].split('?')[0];

        if (target === current) {
            btn.classList.remove('text-white');
            btn.classList.add('text-secondary', 'font-semibold');
        } else {
            btn.classList.remove('text-secondary', 'font-semibold');
            if (!btn.classList.contains('text-white')) btn.classList.add('text-white');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNav);

// Also run when navbar is dynamically injected
document.addEventListener('navbar:ready', setActiveNav);
