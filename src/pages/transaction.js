import { clearMain } from "../ui/domActions/domActions.js";
import { userProfile } from "../helper/userProfile.js";
import { profileNav } from "../helper/profileNav.js";

export function transactionUI() {
    const main = clearMain();

    const element = `
        <div class="container container-lg container-md container-sm py-5">
            <div class="row my-5 py-3 d-flex justify-content-between">
                <div class="col-12 col-lg-6 col-md-6 col-sm-12 mb-3 p-4 border rounded shadow">
                    <h3>Transaction</h3>
                    
                    <div class="my-3 mb-5 d-flex justify-content-between">
                        <div class="ps-1">
                            <label for="select-coin">Wallet</label>
                            <select name="select-coin" id="select-coin" class="w-25 form-control form-select"
                                onfocus='this.size=5;' onblur='this.size=1;' onchange='this.size=1; 
                                this.blur();' style="min-width: 8rem !important;">
                                <option selected>Currencies</option>
                                <option value="btc">Bitcoin</option>
                                <option value="eth">Etherium</option>
                                <option value="xrp">Ripple</option>
                                <option value="sol">Solana</option>
                                <option value="bnb">BNB</option>
                                <option value="doge">Dogecoin</option>
                            </select>
                        </div>

                        <div style="width: 10rem" class="pe-1">
                            <label for="amount-coin">Amount</label>
                            <input type="number" name="amount-coin" id="amount-coin" class="form-control">
                        </div>
                    </div>

                    <div class="pe-1">
                        <label for="address-recipt">Reciepient Address</label>
                        <input type="text" name="address-recipt" id="address-recipt" class="form-control">
                    </div>

                    <div class=" my-3 d-flex justify-content-evenly">
                        <input class="logout-btn rounded-pill py-1 px-5 w-100"
                            style="border: 1px solid green; color: white; background: rgba(1, 85, 1, 0.9);"
                            type="button" value="Send">
                    </div>
                </div>

                <div 
                    class="col-12 col-lg-5 col-md-6 col-sm-12
                        d-flex flex-column justify-content-evenly
                        ps-4 text-secondary">
                    <p class="fs-4" style="margin-bottom: 0;">
                        NOTE:
                    </p>

                    <p>
                        Be Sure to write the address Correctly.
                    </p>

                    <p>
                        Your are Responsible for the Transaction and our Website wont take the error.
                    </p>

                    <p>
                        You can check the history of your transactions in your Portfolio</p>
                </div>
            </div>
        </div>
    `;

    main.insertAdjacentHTML('afterbegin', element);
    
    userProfile();
    profileNav();
}