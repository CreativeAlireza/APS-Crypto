import { topCharts } from "../components/charts/topCharts.js";
import { coinsList } from "../components/coinsList/coinsList.js";
import { clearMain } from "../ui/domActions/domActions.js";

export function homeUI() {
    clearMain();
    topCharts();
    coinsList();
}