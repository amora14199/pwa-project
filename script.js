document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form berhasil dikirim!'); // Menampilkan pesan sesuai tugas 
            this.reset();
        });
    }
});