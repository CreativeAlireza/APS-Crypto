import {NavPanelActions} from "./ui/actions/actions.js";
import { signUpUI } from "./authentication/signup/signup.js";

const navList = document.querySelector('.nav-list');



NavPanelActions();

navList.addEventListener('click', (e) => {
    switch (e.target.innerText) {
        case "Sign In":
            signUpUI();
            break;
        default:
    }
});