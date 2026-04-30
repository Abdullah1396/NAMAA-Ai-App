function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('sidebar').classList.remove('active');
}

function startScanning() {
    const scanBtn = document.querySelector('.scan-inner');
    scanBtn.innerHTML = "⌛ فحص...";
    
    setTimeout(() => {
        alert("✨ تم التعرف على شجرة 'السدر' المحلية!\nحصلت على +100 نقطة نماء 🌱");
        document.getElementById('points').innerText = "1,350";
        scanBtn.innerHTML = "📸<p>ابدأ الفحص</p>";
    }, 2000);
}
