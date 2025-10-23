// ===== JAVASCRIPT BUATAN SENDIRI =====

// SLIDER OTOMATIS
let currentSlide = 0;
const slider = document.getElementById('slider');

if (slider) {
    const slides = document.querySelectorAll('.slide');
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    setInterval(nextSlide, 3000);
}

// FILTER PRODUK
function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// VALIDASI FORM
function validateForm(event) {
    event.preventDefault();
    
    document.querySelectorAll('[id$="-error"]').forEach(el => el.textContent = '');
    
    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    if (name.length < 3) {
        document.getElementById('name-error').textContent = 'Nama minimal 3 karakter';
        isValid = false;
    }
    
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Email tidak valid';
        isValid = false;
    }
    
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10,13}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').textContent = 'Nomor telepon 10-13 digit';
        isValid = false;
    }
    
    const message = document.getElementById('message').value.trim();
    if (message.length < 10) {
        document.getElementById('message-error').textContent = 'Pesan minimal 10 karakter';
        isValid = false;
    }
    
    if (isValid) {
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('success-message').textContent = 
            `Terima kasih ${name}! Pesan Anda telah dikirim.`;
        document.getElementById('contact-form').reset();
        
        setTimeout(() => {
            document.getElementById('success-message').style.display = 'none';
        }, 5000);
    }
    
    return false;
}