const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const listMobile = document.getElementById("list-mobile");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("show");
    listMobile.classList.toggle("list-mobile");
});
