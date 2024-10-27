// Плавно скролиране към секция "Филми"
document.querySelector('.scroll-link').addEventListener('click', function(event) {
    event.preventDefault(); // Спираме стандартното поведение
    const targetSection = document.querySelector('#films');
    targetSection.scrollIntoView({
        behavior: 'smooth' // Плавно скролиране
    });
});