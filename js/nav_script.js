function updateNavigation() {
    var scrollPosition = window.scrollY;
    var sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionMarginOffset = 67;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');
        let navLink = document.querySelector('nav a[href="'+ '#' + sectionId + '"]');

        if (scrollPosition >= sectionTop - sectionMarginOffset) {
            // Remove the '.active-nav' class from all links
            document.querySelectorAll('a').forEach(function(link) {
                link.classList.remove('active-nav');
            });
            // Add the '.active-nav' class to the corresponding link
            navLink.classList.add('active-nav');
        }
    });
}

// Initial call to updateNavigation
updateNavigation();

// Call updateNavigation on scroll
window.addEventListener('scroll', updateNavigation);



