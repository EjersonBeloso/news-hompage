const menuNav = document.querySelector(".menu-nav");
const menuItem = document.querySelector(".menu-item");
const nav = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const hamBurgerMenu = document.querySelector(".hamburger-menu");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		hamBurgerMenu.classList.add("open");
		nav.classList.add("open");
		hamBurgerMenu.style.backgroundColor = "transparent";
		menuNav.classList.add("open");

		showMenu = true;
	} else {
		hamBurgerMenu.classList.remove("open");
		hamBurgerMenu.style.backgroundColor = "#000";
		nav.classList.remove("open");
		menuNav.classList.remove("open");

		showMenu = false;
	}
}
