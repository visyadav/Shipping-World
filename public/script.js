


    document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll('.nav-link');
        const currentPath = window.location.pathname.split('/').pop();

        links.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            if (linkPath === currentPath) {
                link.classList.add('active-link');
            }
        });
    });


