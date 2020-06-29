const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    console.log(nav);
    nav.classList.toggle("active");
});

