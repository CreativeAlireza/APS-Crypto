import {NavPanelActions} from "./ui/actions/actions.js";
import { logInUI } from "./pages/login.js";
import { homeUI } from "./pages/home.js";

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
        default:
            homeUI();
    }
});