(function () {
    //Adiciona o evento para abrir o menu mobile;
    document.getElementById("menu-button").addEventListener("click", function () {
        document.getElementById("mobile-menu").classList.add("show");
    });

    //Adiciona o evento para fechar o menu mobile;
    document.getElementById("close-menu").addEventListener("click", function () {
        document.getElementById("mobile-menu").classList.remove("show");
    });

    //Fecha o menu quando qualquer link do menu for clicado;
    const mobileLinks = document.querySelectorAll(".mobile-link");
    mobileLinks.forEach(link => {
        link.addEventListener("click", function () {
            document.getElementById("mobile-menu").classList.remove("show");
        });
    });
})();
