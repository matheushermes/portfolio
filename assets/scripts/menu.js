document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuToggle = document.getElementById("menu-toggle");

    // Abre o menu ao clicar no botão de menu
    menuButton.addEventListener("click", function() {
        if (menuToggle.checked) {
            mobileMenu.style.display = "block";
        } else {
            mobileMenu.style.display = "none";
        }
    });

    // Fecha o menu quando clicar fora (no caso de não ter o botão de fechar)
    window.addEventListener("click", function(event) {
        if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            menuToggle.checked = false;
            mobileMenu.style.display = "none";
        }
    });
});
