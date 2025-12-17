 // Atualiza ano do rodapé
    document.getElementById('year').textContent = new Date().getFullYear();

    // Toggle menu mobile
    (function () {
        var menuToggle = document.getElementById('menuToggle');
        var nav = document.getElementById('mainNav');

        if (!menuToggle || !nav) return;

        menuToggle.addEventListener('click', function () {
            var open = nav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', open);
        });
    })();