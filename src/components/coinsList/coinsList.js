import { COINS_MARKETS } from "../../api/urls.js";
import { fetchData } from "../../api/fetchAPI.js";

export async function coinsList(){
    const main = document.querySelector('.main');
    
    const coins = await fetchData(COINS_MARKETS);

    const element = `
        <div
            class="coinsList-row row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 text-center d-flex justify-content-around align-items-center">
            <div class="col-lg-11 col-md-11 col-sm-12 table-responsive">
                <table class="table caption-top">
                    <caption>List of Coins</caption>
                    <thead class="table-dark">
                        <tr>
                        <th scope="col" class="rounded-start"></th>
                        <th scope="col">#</th>
                        <th scope="col" style="width: 1rem !important">Name</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Price</th>
                        <th scope="col" class="py-2 px-0 rounded-end">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${String(coins.map((el, i) => 
                        `
                            <tr>
                                <th scope="row"><i class="fa-light fa-star text-warning"></i></th>
                                <td>${++i}</td>
                                <td class="d-flex justify-content-start">
                                    <img 
                                        src="${el.image}" 
                                        style="width: 2rem"
                                        alt="${el.name}">
                                    <div class="d-flex align-items-center ps-3">
                                        ${el.name}
                                    </div>
                                </td>
                                <td>${el.symbol.toUpperCase()}</td>
                                <td>${el.current_price}</td>
                                <td>${el.market_cap}</td>
                            </tr>
                        `
                    )).replaceAll(",", "")}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    main.insertAdjacentHTML('beforeend', element);
}