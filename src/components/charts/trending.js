import { TRENDING } from "../../api/urls.js";
import { fetchData } from "../../api/fetchAPI.js";

export async function trending() {
    const chartRow = document.querySelector('.chart-row');

    const {coins} = await fetchData(TRENDING);

    const element = `
        <div class="col m-5 mw-75" style="min-width: 40%;max-width: 90%;">
            <div class="top-chart border rounded shadow p-3">
                <p class="top-charts-price text-start fs-4 ps-1 mb-4">
                    Trending <span class="fs-5">📈</span>
                </p>
                ${String(coins.slice(0, 3).map(({item}) => `
                    <div class="d-flex justify-content-between align-items-start my-2">
                        <a class="coin-info d-flex align-items-center text-decoration-none text-dark" href="">
                            <img src="${item.large}"
                                alt="${item.name}"
                                style="width: 2rem;height: 2rem;"
                                class="coin-image">
                            <span class="coin-id fs-5 ms-2 me-1">${item.name}</span>
                            <span class="text-muted" style="font-size: small;">${item.symbol}</span>
                        </a>
                        <p class="d-flex align-items-end fs-5">${item.price_btc.toFixed(8)}btc</p>
                    </div>
                `
    )).replaceAll(",", "")}
            </div>
        </div>
    `;

    chartRow.insertAdjacentHTML('afterbegin', element);
}