import { TOP3_MARKETS } from "../../api/urls.js";
import { fetchData } from "../../api/fetchAPI.js";

export async function topMarketCap(){
    const chartRow = document.querySelector('.chart-row');

    const coins = await fetchData(TOP3_MARKETS);

    const element = `
        <div class="col m-5 mw-75" style="min-width: 40%;max-width: 90%;">
            <div class="top-chart border rounded shadow p-3">
                <p class="top-charts-price text-start fs-4 ps-1 mb-4">
                    Top Market Cap  <span class="fs-5">〽</span>
                </p>
                ${String(coins.map(el => `
                    <div class="d-flex justify-content-between align-items-start my-2">
                            <a class="coin-info d-flex align-items-center text-decoration-none text-dark" href="">
                                <img src="${el.image}"
                                    alt="${el.name}"
                                    style="width: 2rem;height: 2rem;"
                                    class="coin-image">
                                <span class="coin-id fs-5 ms-2 me-1">${el.name}</span>
                                <span class="text-muted" style="font-size: small;">${el.symbol}</span>
                            </a>
                            <div id="tooltip" role="tooltip">
                                Click for More Info
                                <div id="arrow" data-popper-arrow></div>
                            </div>
                            <p class="d-flex align-items-end fs-5">${el.market_cap}</p>
                        </div>
                    `
                )).replaceAll(",", "")}
            </div>
        </div>
    `;

    chartRow.insertAdjacentHTML('beforeend', element);
}