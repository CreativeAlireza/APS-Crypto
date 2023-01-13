import { homeUI } from "../pages/home.js";

export function logoToHome() {
    const navbarBrand = document.querySelector('.navbar-brand');
    navbarBrand.addEventListener('click', () => homeUI());
}