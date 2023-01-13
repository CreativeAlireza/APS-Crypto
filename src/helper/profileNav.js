import { profileUI } from "../pages/profile.js";
import { logInUI } from "../pages/login.js";
import { getToken } from "./dataStorage.js";

export function profileNav(){
    const userProfile = document.querySelector('.user-profile');
    userProfile.addEventListener('click', () => {
        if(getToken('userAccess')) profileUI();
        else logInUI();
    })
}