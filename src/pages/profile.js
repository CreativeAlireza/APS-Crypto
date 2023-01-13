import { clearMain } from "../ui/domActions/domActions.js";
import { getData, getToken } from "../helper/dataStorage.js";
import { firstCharToUpperCase } from "../helper/firstCharToUpperCase.js";
import { logOut } from "../helper/logout.js";
import { profileNav } from "../helper/profileNav.js";

export function profileUI(props) {
    const main = clearMain();

    const user = props ? getData(`user${props}`) : getData(getToken('userAccess'));

    const element = `
        <div class="container container-lg container-md container-sm text-center" style="width: 75%;">
            <div class="row mt-5 mb-1 border rounded shadow p-3">
                <div class="col col-12 col-lg-6 col-md-6 col-sm-12 col-sm-12">
                    <img src="/public/assests/images/${user?.gender.toLowerCase()}.png" alt="" class="w-100">
                </div>

                <div class="col d-flex flex-column justify-content-evenly text-start fs-4">
                    <div class="ps-5 mt-3">
                        <p class="mt-3" style="margin-bottom: 0;">${firstCharToUpperCase(user?.firstName)} ${firstCharToUpperCase(user?.lastName)}<i class="fa-solid fa-badge-check text-primary ps-2"></i></p>
                        <p style="margin-bottom: 0;">${user?.email}</i></p>
                        <span class="text-secondary d-block">${user?.userName}</span>
                        <p class="mt-2">Joined Since ${user?.signUpDate}</p>
                    </div>
                    <div>
                        <input 
                        class="logout-btn rounded-pill py-1 px-5 text-danger w-100" 
                        style="border: 1px solid red; background: white;"
                        type="button" 
                        value="Logout">
                    </div>
                </div>

            </div>
            <div style="font-size: 0.8rem;" class="text-start text-secondary mb-5 pb-3">
                <p class="fs-6" style="margin-bottom: 0;">Note:</p>
                <p>
                    Due to Authentication and Security Reasons You Can Not Edit Your Information.
                    If there is an error in your Information, please contact us.
                </p>
            </div>
        </div>
    `;

    main.insertAdjacentHTML('afterbegin', element);

    logOut();
    profileNav();
}

