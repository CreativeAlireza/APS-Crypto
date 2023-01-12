export function tradeHistory() {
  return `
    <div class="row row-lg-10 row-md-10 row-sm-6 align-items-center text-center mb-3">
      <div class="col-12 col-lg-12 col-md-10 col-sm-12 mt-3">
          <div class="border rounded shadow d-flex flex-column border-0">
              <p class="fs-5 text-start ps-4 pt-2">Trade History</p>
              <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Currency VS</th>
                      <th scope="col">Date</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Fee</th>
                      <th scope="col">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BTC/USD</td>
                      <td>29.01.2023</td>
                      <td class="text-secondary">$9,681.63</td>
                      <td class="text-danger">-$2</td>
                      <td><i class="fa-solid fa-arrow-down text-danger"></i></td>
                    </tr>
                    <tr>
                      <td>BTC/ETH</td>
                      <td>28.01.2023</td>
                      <td class="text-secondary">$3,900</td>
                      <td class="text-secondary">$0</td>
                      <td><i class="fa-solid fa-arrow-up text-success"></i></td>
                    </tr>
                    <tr>
                      <td>ETH/XRP</td>
                      <td>28.01.2023</td>
                      <td class="text-secondary">$10,000</td>
                      <td class="text-danger">-$30</td>
                      <td><i class="fa-solid fa-arrow-down text-danger"></i></td>
                    </tr>
                    <tr>
                      <td>ETH/USD</td>
                      <td>26.01.2023</td>
                      <td class="text-secondary">$390</td>
                      <td class="text-secondary">$0</td>
                      <td><i class="fa-solid fa-arrow-up text-success"></i></td>
                    </tr>
                    <tr>
                      <td>BTC/USD</td>
                      <td>24.01.2023</td>
                      <td class="text-secondary">$25,000</td>
                      <td class="text-secondary">$0</td>
                      <td><i class="fa-solid fa-arrow-up text-success"></i></td>
                    </tr>
                    <tr>
                      <td>BCC/USD</td>
                      <td>23.01.2023</td>
                      <td class="text-secondary">$5,000</td>
                      <td class="text-danger">-$10</td>
                      <td><i class="fa-solid fa-arrow-down text-danger"></i></td>
                    </tr>
                    <tr>
                      <td>LTC/USD</td>
                      <td>23.01.2023</td>
                      <td class="text-secondary">$30,000</td>
                      <td class="text-danger">-$68</td>
                      <td><i class="fa-solid fa-arrow-up text-success"></i></td>
                    </tr>
                    <tr>
                      <td>USD/ETH</td>
                      <td>23.01.2023</td>
                      <td class="text-secondary">$1,750</td>
                      <td class="text-secondary">$0</td>
                      <td><i class="fa-solid fa-arrow-up text-success"></i></td>
                    </tr>
                    <tr>
                      <td>BTC/USD</td>
                      <td>10.01.2023</td>
                      <td class="text-secondary">$250</td>
                      <td class="text-danger">-$10</td>
                      <td><i class="fa-solid fa-arrow-down text-danger"></i></td>
                    </tr>
                    <tr>
                      <td>BTC/ADA</td>
                      <td>01.01.2023</td>
                      <td class="text-secondary">$2250</td>
                      <td class="text-secondary">$0</td>
                      <td><i class="fa-solid fa-arrow-up text-success"></i></td>
                    </tr>
                  </tbody>
                </table>
          </div>
      </div>
    </div>`
}