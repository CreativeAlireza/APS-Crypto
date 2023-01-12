import { clearMain } from "../ui/domActions/domActions.js";
import { combinatorFirstLast } from "../helper/combinatorFirstLast.js";
import { overview } from "../components/portfolio/overview.js";
import { topCurrencies } from "../components/portfolio/topCurrencies.js";
import { tradeHistory } from "../components/portfolio/tradeHistory.js";

export function portfolioUI(){
    const main = clearMain();
    
    const element = `
        <div class="portfolio container text-center">
            <div class="row row-lg-10 row-md-8 row-sm-6 align-items-center text-center my-3">
            </div> 
        <div>
    `;

main.insertAdjacentHTML('afterbegin', element);

const overviewAndTopCurrenciesRow = main.children[0].children[0];
combinatorFirstLast(overviewAndTopCurrenciesRow, overview, topCurrencies);

const portfolio = document.querySelector('.portfolio');
portfolio.insertAdjacentHTML('beforeend', tradeHistory());
}