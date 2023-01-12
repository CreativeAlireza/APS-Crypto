import { NavPanelActions } from "./ui/actions/actions.js";
import { logInUI } from "./pages/login.js";
import { homeUI } from "./pages/home.js";
import { portfolioUI } from "./pages/portfolio.js";

const navList = document.querySelector('.nav-list');

NavPanelActions();
homeUI();

navList.addEventListener('click', (e) => {
    switch (e.target.innerText) {
        case "Sign In":
            logInUI();
            break;
        case "Home":
            homeUI();
            break;
        case "Portfolio":
            portfolioUI();
            break;
        default:
            homeUI();
    }
});