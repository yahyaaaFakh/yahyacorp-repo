import images from './images'

export const navLinks = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'services', label: 'Layanan' },
  { id: 'works', label: 'Portofolio' },
  { id: 'teams', label: 'Tim' },
  { id: 'testimonials', label: 'Testimoni' },
  { id: 'pricing', label: 'Harga' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Kontak' },
]

export const heroData = [
  {
    image: images.hero[0],
    title: 'Desain terbaik untuk website bisnis Anda',
    description: 'Kami membantu perusahaan membangun kehadiran digital yang kuat, cepat, dan mudah diingat oleh pelanggan.',
    link: '#about',
  },
  {
    image: images.hero[1],
    title: 'Rencanakan masa depan bisnis Anda',
    description: 'Strategi digital yang terukur untuk membantu bisnis Anda tumbuh lebih stabil dan berkelanjutan.',
    link: '#services',
  },
  {
    image: images.hero[2],
    title: 'Rasakan perbedaannya',
    description: 'Tim profesional kami siap mengubah ide Anda menjadi produk digital yang berkualitas.',
    link: '#works',
  },
]

export const skills = [
  { label: 'HTML / CSS / JavaScript', value: 90 },
  { label: 'Responsive Design', value: 95 },
  { label: 'UI / UX Design', value: 75 },
]

export const servicesData = [
  { icon: 'fa-solid fa-mobile-screen-button', title: 'Desain Responsif', description: 'Tampilan website yang nyaman di semua perangkat, dari ponsel hingga layar desktop.' },
  { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Desain Kreatif', description: 'Konsep visual yang segar dan unik agar brand Anda menonjol dari kompetitor.' },
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Optimasi SEO', description: 'Struktur dan konten yang ramah mesin pencari agar mudah ditemukan calon pelanggan.' },
  { icon: 'fa-solid fa-gauge-high', title: 'Performa Cepat', description: 'Website ringan dengan waktu muat singkat demi pengalaman pengguna terbaik.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Aman & Andal', description: 'Praktik keamanan modern dan kompatibilitas luas di berbagai browser.' },
  { icon: 'fa-solid fa-headset', title: 'Dukungan Pelanggan', description: 'Tim support yang siap membantu Anda setiap hari kerja dengan respons cepat.' },
]

export const worksData = [
  { title: 'Jalan Sunyi', category: 'Web Design', image: images.works[0] },
  { title: 'Gadis Fotografer', category: 'Branding', image: images.works[1] },
  { title: 'Sebuah Perbedaan', category: 'Web Design', image: images.works[2] },
  { title: 'Pola Alam', category: 'Branding', image: images.works[3] },
  { title: 'Cerita Senja', category: 'Photography', image: images.works[4] },
  { title: 'Sonata Musim Dingin', category: 'Web Design', image: images.works[5] },
  { title: 'Langkah Kecil', category: 'Branding', image: images.works[6] },
  { title: 'Apresiasi', category: 'Photography', image: images.works[7] },
  { title: 'Hari Bahagia', category: 'Web Design', image: images.works[8] },
]

export const teamsData = [
  { name: 'Gabriel Hart', role: 'CEO', description: 'Memimpin visi dan arah strategis perusahaan.' },
  { name: 'David Antony', role: 'Manager', description: 'Mengawasi proyek agar selesai tepat waktu.' },
  { name: 'Nicholas Perry', role: 'UX Designer', description: 'Merancang pengalaman pengguna yang intuitif.' },
  { name: 'Sarah Wills', role: 'Developer', description: 'Membangun antarmuka yang cepat dan rapi.' },
  { name: 'Sophia Pitt', role: 'Developer', description: 'Menulis kode bersih dan mudah dirawat.' },
  { name: 'Taylor Lopez', role: 'Developer', description: 'Fokus pada integrasi dan performa aplikasi.' },
  { name: 'Ryan Giggs', role: 'Content Writer', description: 'Meracik tulisan yang menarik dan persuasif.' },
  { name: 'David Smith', role: 'SEO Expert', description: 'Membawa website Anda ke halaman pertama.' },
].map((t, i) => ({ ...t, image: images.team[i] }))

export const testimonialsData = [
  { name: 'John Wills', role: 'Manager', text: 'Hasil kerjanya luar biasa. Website kami jadi lebih modern, cepat, dan jumlah pelanggan baru meningkat tajam dalam sebulan.' },
  { name: 'Jasmine Perry', role: 'Accountant', text: 'Tim yang profesional dan komunikatif. Setiap revisi ditangani dengan cepat tanpa mengurangi kualitas desain.' },
  { name: 'Rocky Johnson', role: 'CEO', text: 'Kami sangat puas. Mereka memahami kebutuhan bisnis kami dan menerjemahkannya menjadi tampilan yang memukau.' },
]

export const pricingData = [
  { plan: 'Basic', price: 'Rp 750rb', features: ['Wireframing', 'Visual Design', '5 halaman', 'Hosting gratis', 'Dukungan & bantuan'] },
  { plan: 'Premium', price: 'Rp 2,2jt', featured: true, features: ['Wireframing', 'Visual Design', '15 halaman', 'Hosting gratis', 'Dukungan & bantuan'] },
  { plan: 'Ultimate', price: 'Rp 5,2jt', features: ['Wireframing', 'Visual Design', 'Halaman tak terbatas', 'Hosting gratis', 'Dukungan & bantuan'] },
]

export const blogData = [
  { image: images.blog[0], date: '15 Nov 2026', title: 'Para Pencinta Kopi', description: 'Cerita menarik tentang budaya ngopi dan bagaimana brand kopi lokal membangun komunitasnya.' },
  { image: images.blog[1], date: '10 Nov 2026', title: 'Tips Desain UI', description: 'Beberapa prinsip sederhana agar antarmuka aplikasi Anda terlihat rapi dan mudah digunakan.' },
  { image: images.blog[2], date: '07 Nov 2026', title: 'Hari yang Indah', description: 'Inspirasi visual dan cara memilih foto yang tepat untuk memperkuat identitas brand Anda.' },
]
