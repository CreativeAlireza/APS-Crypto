import {NavPanelActions} from "./ui/actions/actions.js";
import { logInUI } from "./authentication/login/login.js";

const navList = document.querySelector('.nav-list');



NavPanelActions();

navList.addEventListener('click', (e) => {
    switch (e.target.innerText) {
        case "Sign In":
            logInUI();
            break;
        default:
    }
});