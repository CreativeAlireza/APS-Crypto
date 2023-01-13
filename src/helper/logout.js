import { userProfile } from "./userProfile.js";
import { homeUI } from "../pages/home.js";
import { saveData } from "./dataStorage.js";

export function logOut() {
    const logoutBtn = document.querySelector('.logout-btn');
    const navLogout = document.querySelector('.nav-logout');

    logoutBtn.addEventListener('click', () => {
        saveData(`userAccess`, "");
        userProfile();
        homeUI();
        navLogout.remove();
    })
}