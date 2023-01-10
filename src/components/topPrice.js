export function topPrice() {
    const chartRow = document.querySelector('.chart-row');

    const element = `
        <div class="col m-5 mw-75" style="min-width: 40%;max-width: 90%;">
            <div class="top-chart border rounded shadow p-3">
                <p class="top-charts-price text-start fs-4 ps-1 mb-4">Top Price</p>
                <div class="d-flex justify-content-between my-2">
                    <a class="coin-info d-flex align-items-center text-decoration-none text-dark" href="">
                        <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt=""
                            class="coin-image">
                        <span class="coin-id fs-5 ms-2 me-1">Bitcoin</span>
                        <span class="text-muted" style="font-size: small;">BTC</span>
                    </a>
                    <div id="tooltip" role="tooltip">
                        Click for More Info
                        <div id="arrow" data-popper-arrow></div>
                    </div>
                    <p class="d-flex align-items-end fs-5">54683764</p>
                </div>
                <div class="d-flex justify-content-between my-2">
                    <a class="coin-info d-flex align-items-center text-decoration-none text-dark" href="">
                        <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt=""
                            class="coin-image">
                        <span class="coin-id fs-5 ms-2 me-1">Bitcoin</span>
                        <span class="text-muted" style="font-size: small;">BTC</span>
                    </a>
                    <div id="tooltip" role="tooltip">
                        Click for More Info
                        <div id="arrow" data-popper-arrow></div>
                    </div>
                    <p class="d-flex align-items-end fs-5">54683764</p>
                </div>
                <div class="d-flex justify-content-between my-2">
                    <a class="coin-info d-flex align-items-center text-decoration-none text-dark" href="">
                        <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt=""
                            class="coin-image">
                        <span class="coin-id fs-5 ms-2 me-1">Bitcoin</span>
                        <span class="text-muted" style="font-size: small;">BTC</span>
                    </a>
                    <div id="tooltip" role="tooltip">
                        Click for More Info
                        <div id="arrow" data-popper-arrow></div>
                    </div>
                    <p class="d-flex align-items-end fs-5" style="margin-bottom: 0.6rem">54683764</p>
                </div>
            </div>
        </div>
    `;

    chartRow.insertAdjacentHTML('afterbegin', element);
}