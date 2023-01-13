import { topCharts } from "../components/charts/topCharts.js";
import { coinsList } from "../components/coinsList/coinsList.js";
import { clearMain } from "../ui/domActions/domActions.js";
import { userProfile } from "../helper/userProfile.js";
import { profileNav } from "../helper/profileNav.js";

export function homeUI() {
    clearMain();
    topCharts();
    coinsList();
    userProfile();
    profileNav();
}