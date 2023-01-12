export function overview() {
    console.log('overview');

    return `
        <div class="col-12 col-lg-5 col-md-10 col-sm-12 mt-3">
            <div class="card border-0">
                <div class="card-body shadow rounded" style="padding-top: 34px; padding-bottom: 30px;">
                    <h5 class="text-start" style="margin-top: -1rem">Overview</h5>
                    <h6 class="card-subtitle mb-2 mt-3 text-muted text-start ps-5">Your Current Balance</h6>
                    <p class="fs-1 text-start ps-5">$326,591.<span class="fs-6">195</span></p>
                    <input type="button" value="Buy" class="btn btn-success py-1 px-5 text-success me-2"
                        style="background: none;">
                    <input type="button" value="Sell" class="btn btn-danger py-1 px-5 text-danger ms-2"
                        style="background: none;">
                </div>
            </div>
        </div>
    `;
}