/*On récupère le burger et la nav */
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

/*On ajoute un écouteur d'évènement sur le "click" */
burger.addEventListener("click", () => {
    /*On toggle la classe qui permet de faire apparaître le menu */
    nav.classList.toggle("active");
});


/*BONUS : FAIRE DISPARAITRE LE MENU RESPONSIVE QUAND ON CLIQUE SUR UN LIEN */

/*On récupère nos li, s'assurer qu'on récupère une NodeList (ou quoique ce soit qui ait la méthode forEach()) */
const liens = document.querySelectorAll("li");

/*POUR CHAQUE LI */
liens.forEach(lien => {
    /*On ajoute un écouteur d'évènement sur le "click" */
    lien.addEventListener("click", () => {
            nav.classList.remove("active");
        }
    )
})
