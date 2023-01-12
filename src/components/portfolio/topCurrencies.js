export function topCurrencies() {
    return `
        <div class="col-12 col-lg-7 col-md-10 col-sm-12 mt-3">
            <div class="border rounded shadow d-flex flex-column border-0">
                <p class="fs-5 text-start ps-4 pt-2" style="font-weight: 500;">Top Currencies</p>
                <div class="d-flex justify-content-around">
                    <div class="d-flex flex-column w-25" style="margin-right: -2rem;">
                        <div class="d-flex justify-content-evenly">
                            <img src="https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256"
                            alt="" style="width: 2rem; height: 2rem;">
                            <p style="margin-bottom: 0; margin-top: 0.2rem;">Dogecoin</p>
                        </div>
                        <div class="mt-1">
                            <p class="d-inline">$521,457</p><span class="ms-2" style="font-size: small;">DOGE</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column w-25" style="padding-left: 2rem; border-left: 1px solid gray; margin-right: -2rem !important;">
                        <div class="d-flex justify-content-evenly">
                            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                            alt="" style="width: 2rem; height: 2rem;">
                            <p style="margin-bottom: 0; margin-top: 0.2rem;">Bitcoin</p>
                        </div>
                        <div class="mt-1">
                            <p class="d-inline">$6.1542</p><span class="ms-2" style="font-size: small;">BTC</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column w-25" style="padding-left: 2rem; border-left: 1px solid gray;">
                        <div class="d-flex justify-content-evenly">
                            <img src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                            alt="" style="width: 2rem; height: 2rem;">
                            <p style="margin-bottom: 0; margin-top: 0.2rem;">Ethereum</p>
                        </div>
                        <div class="mt-1">
                            <p class="d-inline">$563.047</p><span class="ms-2" style="font-size: small;">ETH</span>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-around my-4">
                    <div class="d-flex flex-column w-25" style="margin-right: -2rem;">
                        <div class="d-flex justify-content-evenly">
                            <img src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
                            alt="" style="width: 2rem; height: 2rem;">
                            <p style="margin-bottom: 0; margin-top: 0.2rem;">Ripple</p>
                        </div>
                        <div class="mt-1">
                            <p class="d-inline">$8  53,179</p><span class="ms-2" style="font-size: small;">XRP</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column w-25" style="padding-left: 2rem; border-left: 1px solid gray; margin-right: -2rem !important;">
                        <div class="d-flex justify-content-evenly">
                            <img src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422"
                            alt="" style="width: 2rem; height: 2rem;">
                            <p style="margin-bottom: 0; margin-top: 0.2rem;">Solana</p>
                        </div>
                        <div class="mt-1">
                            <p class="d-inline">$247,221</p><span class="ms-2" style="font-size: small;">SOL</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column w-25" style="padding-left: 2rem; border-left: 1px solid gray;">
                        <div class="d-flex justify-content-evenly">
                            <img src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"
                            alt="" style="width: 2rem; height: 2rem;">
                            <p style="margin-bottom: 0; margin-top: 0.2rem;">Cardano</p>
                        </div>
                        <div class="mt-1">
                            <p class="d-inline">$351,479</p><span class="ms-2" style="font-size: small;">ADA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}