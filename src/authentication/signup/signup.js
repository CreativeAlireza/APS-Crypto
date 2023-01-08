import { clearMain } from "../../ui/domActions/domActions.js";

const main = document.querySelector('.main');



export function signUp(){
    const sheet = new CSSStyleSheet();

    clearMain();

    main.classList.add('d-flex', 'justify-content-center', 'align-items-center')
    
    const element = `
    <section class="signup d-flex flex-column justify-content-between border rounded bg-light shadow m-5 p-4">
        <p class="fs-4 text-center">Sign Up</p>
        <form class="mt-5">
            <div class="p-2  d-flex justify-content-between">
                <div>
                    <label for="firstname" class="d-block">First Name</label>
                    <input type="text" name="firstname" id="firstname" class="inputs input-split ps-2">
                </div>
                <div>
                    <label for="lastname" class="d-block ms-2">Last Name</label>
                    <input type="text" name="lastname" id="lastname" class="inputs input-split ps-2 ms-2">
                </div>
            </div>

            <div class=" p-2 ">
                <label for="username" class="d-block">Username</label>
                <input type="text" name="username" id="username" class="w-100 inputs ps-2">
            </div>

            <div class=" p-2 ">
                <label for="email" class="d-block">Email</label>
                <input type="email" name="email" id="email" class="w-100 inputs ps-2">
            </div>

            <div class=" p-2 ">
                <label for="password" class="d-block">Password</label>
                <input type="password" name="password" id="password" class="w-100 inputs ps-2">
            </div>

            <div class=" p-2 ">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    I am over 18 years old
                </label>
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

    main.insertAdjacentElement('afterbegin', element);
    
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
