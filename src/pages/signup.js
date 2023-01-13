import { clearMain } from "../ui/domActions/domActions.js";
import { saveData } from "../helper/dataStorage.js";
import { logInUI } from "./login.js";
import { currnetDateFormat } from "../helper/currentDateFormat.js";
import { profileUI } from "../pages/profile.js";
import { navLogoutBtn } from "../helper/navLogoutBtn.js";

function getUserDataInSignup(){
    const signupBtn = document.querySelector('.signup-btn');
    const firstname = document.querySelector('#firstname');
    const lastname = document.querySelector('#lastname');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const flexCheckDefault = document.querySelector('#flexCheckDefault');

    const gender = document.querySelector('.gender-dorpdown');
    let genderValue = "";
    gender.addEventListener('click', (e) => genderValue = e.target.innerText);

    const UserId = randomUserId();

    signupBtn.addEventListener('click', () => {
        const user = {
            firstName: firstname.value,
            lastName: lastname.value,
            userId: `user${UserId}`,
            userName: username.value,
            email: email.value,
            password: password.value,
            isOver18: flexCheckDefault.checked,
            gender: genderValue,
            signUpDate: currnetDateFormat()
        }
        saveData(`user${UserId}`, JSON.stringify(user));
        saveData(`userAccess`, user.userId);
        navLogoutBtn();
        profileUI(UserId);
    })
}

function randomUserId(){
    const randomUmber = Math.floor(Math.random() * 1000 - 100);
    return randomUmber > 0 ? randomUmber : randomUmber * -1;
}

function goToLoginPage(){
    const userLogin = document.querySelector('.user-login');
    userLogin.addEventListener('click', () => logInUI())
}

export function signUpUI(){
    const sheet = new CSSStyleSheet();

    // clear main tag and insert sign up form elements
    const main = clearMain();
    
    main.classList.add('d-flex', 'justify-content-center', 'align-items-center')

    const element = `
    <section class="signup d-flex flex-column justify-content-between border rounded bg-light shadow m-5 p-4">
        <p class="fs-4 text-center">Sign Up</p>
        <form class="mt-5">
            <div class="p-2 d-flex justify-content-between">
                <div>
                    <label for="firstname" class="d-block">First Name</label>
                    <input type="text" name="firstname" id="firstname" required class="inputs input-split ps-2">
                </div>
                <div>
                    <label for="lastname" class="d-block ms-2">Last Name</label>
                    <input type="text" name="lastname" id="lastname" required class="inputs input-split ps-2 ms-2">
                </div>
            </div>

            <div class="p-2">
                <label for="username" class="d-block">Username</label>
                <input type="text" name="username" id="username" required class="w-100 inputs ps-2">
            </div>

            <div class="p-2">
                <label for="email" class="d-block">Email</label>
                <input type="email" name="email" id="email" required class="w-100 inputs ps-2">
            </div>

            <div class="p-2">
                <label for="password" class="d-block">Password</label>
                <input type="password" name="password" id="password" required class="form-control w-100 inputs ps-2">
            </div>

            <div class="d-flex justify-content-between">
                <div class="dropdown me-1">
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                        Gender
                    </button>
                    <ul class="gender-dorpdown dropdown-menu">
                        <li><a class="dropdown-item" href="#">Male</a></li>
                        <li><a class="dropdown-item" href="#">Female</a></li>
                    </ul>
                </div>
                <div class="p-2 me-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        I am over 18 years old
                    </label>
                </div>
            </div>

            <input type="button" value="Sign Up" class="signup-btn bg-light border w-100 p-2 my-3">

            <div>
                Already have an account?
                <input type="button" value="Log In" class="user-login bg-light border-0 text-primary">
            </div>
        </form>
        <div></div>
    </section>
    `;

    main.insertAdjacentHTML('afterbegin', element);

    // get user data by sign up form
    getUserDataInSignup();

    // go to log in page if user already has an account  
    goToLoginPage();

    // add CSS Styles
    sheet.replaceSync(`
    .signup{
        width: 28rem;
        min-height: 32rem;
    }
    div > input {
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    .inputs {
        height: 2rem;
    }
    body {
        
        background: rgba(226,226,226, 0.3);
        opacity: 0.8;
        background-size: 20px 20px;
        background-position: 0 0,10px 10px;
    }
    .input-split {
        width: 95%;
    }
    `);
    
    document.adoptedStyleSheets = [sheet];
}
