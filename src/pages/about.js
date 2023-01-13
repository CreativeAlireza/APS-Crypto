import { clearMain } from "../ui/domActions/domActions.js";
import { userProfile } from "../helper/userProfile.js";
import { profileNav } from "../helper/profileNav.js";

export function aboutUI() {
    const main = clearMain();

    const element = `
        <div class="container container-lg container-md container-sm text-center">
            <div class="row my-5">
                <div class="col-lg-4 col-md-4 col-md-12">
                    <div style="width: 90% !important;">
                        <img src="/public/assests/images/developer.jpg" alt="developer-image"
                            class="rounded-circle w-100 mt-2">
                    </div>
                </div>
                <div class="col-lg-8 col-md-8 col-md-12" style="text-align: justify;">
                    <div class="mt-5 ps-3">
                        <p>
                            Hello dear friends from the internet
                        </p>
                        <p>
                            I'm Alireza (but my friends call me CA). A gogoli Front End developer from Iran with 1+ of
                            experience in developing JavaScript and its libraries. I am still a Software Engineer
                            Student
                            and always passionate about developing programs that contains vast variety of users.
                        </p>
                        <p>
                            So, My purpose is to learn new titles and seek to become expert by getting deep into them.
                        <p>
                        </p>
                        You can always contact me by <a href="mailto:ar.dvlpr@outlook.com"" class="
                            font-monospace text-decoration-none">ar.dvlpr@outlook.com</a> or find me everywhere
                        with <a href="https://t.me/creativealireza" class="font-monospace text-decoration-none">@creativealireza</a>.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-lg-10 col-md-10 col-md-10" style="text-align: justify;">
                    <div class="pt-1">
                        <p>
                            This website is only for building my resume.
                            <br />
                            I used only vanilla JS to build it.
                        </p>
                        <p>
                            It has Log In and Sign Up, Home, Profile, Transaction, Portfolio and About pages.
                        </p>
                        <p>
                            Technologies:
                            <br />
                            APIs: CoinGecko
                            <br />
                            Framework: Bootstrap V5
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;

    main.insertAdjacentHTML('afterbegin', element);
    
    userProfile();
    profileNav();
}