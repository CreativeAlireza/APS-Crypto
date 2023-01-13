import { NavPanelActions } from "./actions.js";
import { homeUI } from "../../pages/home.js";

export function initUI(){
    NavPanelActions();
    homeUI();
}