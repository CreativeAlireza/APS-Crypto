import { getData, getToken } from "./dataStorage.js";
import { firstCharToUpperCase } from "./firstCharToUpperCase.js";

export function userProfile() {
    const userIcon = document.querySelector('.user-icon');
    const userName = document.querySelector('.user-name');
   
    const user = getData(getToken('userAccess'));

    if(user){
        userName.textContent = firstCharToUpperCase(user.firstName);
        userIcon.src = `/public/assests/images/${user.gender.toLowerCase()}.png`;
    } else {
        userName.textContent = 'Profile';
        userIcon.src = `/public/assests/images/defaultImage.png`;
    }
}