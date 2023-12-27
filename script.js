function toggleContent(id) {
    var content = document.getElementById(id);
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
}

function goHome() {
    // Ganti URL sesuai dengan halaman utama Anda
    window.location.href = "udin.html";
}