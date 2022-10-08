const Objects = document.querySelectorAll('.reveal');

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('revealed');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, { threshold: [1] });

Objects.forEach((Object) => {
    appearOnScroll.observe(Object);
});