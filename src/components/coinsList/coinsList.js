export function coinsList(){
    const main = document.querySelector('.main');

    const element = `
        <div
            class="coinsList-row row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 text-center d-flex justify-content-around align-items-center">
            <div class="col-lg-11 col-md-10 col-sm-10">
                <table class="table caption-top mw-75">
                    <caption>List of Coins</caption>
                    <thead class="table-dark">
                        <tr>
                            <th scope="col" class="rounded-start"></th>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Price</th>
                            <th scope="col" class="py-2 px-0 rounded-end">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><i class="fa-light fa-star"></i></th>
                            <td>1</td>
                            <td>Bitcoin</td>
                            <td>BTC</td>
                            <td>8646846</td>
                            <td>5454656546</td>
                        </tr>
                        <tr>
                            <th scope="row"><i class="fa-solid fa-star" style="color: yellow;"></i></i></th>
                            <td>2</td>
                            <td>Etherium</td>
                            <td>ETH</td>
                            <td>5465465</td>
                            <td>54545454654</td>
                        </tr>
                        <tr>
                            <th scope="row"><i class="fa-light fa-star"></i></th>
                            <td>3</td>
                            <td>ADA</td>
                            <td>ADA</td>
                            <td>455654656</td>
                            <td>545646546546</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;

    main.insertAdjacentHTML('beforeend', element);
}