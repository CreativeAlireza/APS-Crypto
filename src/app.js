import { NavPanelActions } from "./ui/actions/actions.js";
import { logInUI } from "./pages/login.js";
import { homeUI } from "./pages/home.js";
import { portfolioUI } from "./pages/portfolio.js";
import { aboutUI } from "./pages/about.js";

const navList = document.querySelector('.nav-list');

NavPanelActions();
homeUI();

navList.addEventListener('click', (e) => {
    switch (e.target.innerText) {
        case "Home":
            homeUI();
            break;
        case "Portfolio":
            portfolioUI();
            break;
        case "About":
            aboutUI();
            break;
        case "Sign In":
            logInUI();
            break;
        default:
            homeUI();
    }
});