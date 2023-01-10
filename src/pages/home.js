import { topCharts } from "../components/topCharts.js";
import { clearMain } from "../ui/domActions/domActions.js";

export function homeUI() {
    clearMain();
    topCharts();
}