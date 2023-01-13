import { getData, getToken, saveData } from "./dataStorage.js";
import { closePanel } from "../ui/actions/actions.js";
import { homeUI } from "../pages/home.js";
import { userProfile } from "./userProfile.js";

export function navLogoutBtn() {
    const user = getData(getToken('userAccess'));

    if (user) {
        const menu = document.querySelector('.menu');

        const element = `
            <div class="nav-logout" style="width: 90%; margin: 1rem auto;">
                <input 
                    class="nav-logout-btn rounded-pill py-1 px-5 w-100" 
                    style="border: 1px solid rgb(200, 5, 5); background: white; color: rgb(200, 5, 5);"
                    type="button" 
                    value="Logout">
            </div>
        `;

        menu.insertAdjacentHTML('beforeend', element)
    }

    const navLogout = document.querySelector('.nav-logout');
    navLogout?.addEventListener('click', () => {
        saveData(`userAccess`, "");
        navLogout.remove();
        closePanel();
        homeUI();
        userProfile();
    });

}