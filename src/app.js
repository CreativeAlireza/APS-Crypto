import { logInUI } from "./pages/login.js";
import { homeUI } from "./pages/home.js";
import { portfolioUI } from "./pages/portfolio.js";
import { aboutUI } from "./pages/about.js";
import { profileUI } from "./pages/profile.js";
import { transactionUI } from "./pages/Transaction.js";
import { initUI } from "./ui/actions/init.js";
import { logoToHome } from "./helper/logoToHome.js";
import { userProfile } from "./helper/userProfile.js";

const navList = document.querySelector('.nav-list');

initUI()

logoToHome();
userProfile();

navList.addEventListener('click', (e) => {
    switch (e.target.innerText) {
        case "Home":
            homeUI();
            break;
        case "Profile":
            profileUI();
            break;
        case "Portfolio":
            portfolioUI();
            break;
        case "Transaction":
            transactionUI();
            break;
        case "About":
            aboutUI();
            break;
        case "Sign In":
            logInUI();
            break;
        default:
            homeUI();
    }
});