export function AssetsPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="row mb-4 align-items-end">
            <div class="col-md-7">
                <h6 class="text-uppercase fw-bold text-muted small mb-1" style="letter-spacing: 1px;">Total Net Worth</h6>
                <div class="d-flex align-items-center gap-3">
                    <h1 class="fw-bold mb-0">₦4,850,200.50</h1>
                    <span class="badge bg-success-subtle text-success rounded-pill px-3 py-2 small">
                        <i class="bi bi-graph-up-arrow me-1"></i> +2.4%
                    </span>
                </div>
            </div>
            <div class="col-md-5 text-md-end mt-3 mt-md-0">
                <div class="btn-group rounded-pill overflow-hidden shadow-sm">
                    <button class="btn btn-dark fw-bold px-4">Portfolio</button>
                    <button class="btn btn-outline-dark fw-bold px-4">Analytics</button>
                </div>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-8">
                <div class="row g-3 mb-4">
                    <div class="col-md-6">
                        <div class="card border-0 shadow-sm rounded-4 p-4 h-100 position-relative overflow-hidden">
                            <div class="d-flex justify-content-between align-items-start mb-4">
                                <div class="bg-warning-subtle p-3 rounded-4">
                                    <i class="bi bi-wallet2 fs-3 text-warning"></i>
                                </div>
                                <span class="text-muted small fw-bold">30.1%</span>
                            </div>
                            <h6 class="text-muted small fw-bold mb-1">Main Wallet</h6>
                            <h3 class="fw-bold mb-0">₦1,450,200</h3>
                            <div class="mt-3">
                                <small class="text-success"><i class="bi bi-arrow-up-short"></i> Instant Liquidity</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="card border-0 shadow-sm rounded-4 p-4 h-100 bg-dark text-white">
                            <div class="d-flex justify-content-between align-items-start mb-4">
                                <div class="bg-white bg-opacity-10 p-3 rounded-4 border border-white border-opacity-10">
                                    <i class="bi bi-currency-bitcoin fs-3 text-warning"></i>
                                </div>
                                <span class="opacity-50 small fw-bold">64.8%</span>
                            </div>
                            <h6 class="opacity-50 small fw-bold mb-1">Crypto Assets</h6>
                            <h3 class="fw-bold mb-0">₦3,155,000</h3>
                            <div class="mt-3">
                                <small class="text-warning"><i class="bi bi-lightning-fill"></i> High Growth</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="card border-0 shadow-sm rounded-4 p-4" style="background: linear-gradient(to right, #ffffff, #fef9f3);">
                            <div class="row align-items-center">
                                <div class="col-md-2 text-center border-end">
                                    <div class="fs-1 mb-1">🧺</div>
                                    <small class="fw-bold text-muted">Food Basket</small>
                                </div>
                                <div class="col-md-6 ps-md-4 py-3 py-md-0">
                                    <h5 class="fw-bold mb-1">₦245,000.00</h5>
                                    <p class="small text-muted mb-0">Physical Asset Value (Locked until Dec 2026)</p>
                                    <div class="progress mt-2" style="height: 6px; width: 200px;">
                                        <div class="progress-bar bg-warning" style="width: 100%"></div>
                                    </div>
                                </div>
                                <div class="col-md-4 text-md-end">
                                    <button class="btn btn-outline-warning rounded-pill fw-bold btn-sm px-4">Manage Vault</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
                    <div class="p-4 border-bottom d-flex justify-content-between align-items-center bg-white">
                        <h6 class="fw-bold mb-0">Asset Performance</h6>
                        <select class="form-select form-select-sm border-0 bg-light rounded-pill px-3 shadow-none" style="width: auto;">
                            <option>Last 30 Days</option>
                            <option>Last 12 Months</option>
                        </select>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover align-middle mb-0">
                            <thead class="bg-light">
                                <tr class="small text-muted">
                                    <th class="ps-4 border-0">ASSET</th>
                                    <th class="border-0">HOLDINGS</th>
                                    <th class="border-0">AVG. PRICE</th>
                                    <th class="border-0 pe-4 text-end">CHANGE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="ps-4">
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="rounded-circle bg-warning text-dark p-2 d-flex align-items-center justify-content-center" style="width: 35px; height: 35px;">
                                                <i class="bi bi-currency-bitcoin"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-0 small fw-bold">Bitcoin</h6>
                                                <small class="text-muted">BTC</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="small fw-bold">0.024 BTC</td>
                                    <td class="small">₦95,200,450</td>
                                    <td class="pe-4 text-end text-success fw-bold small">+4.2%</td>
                                </tr>
                                <tr>
                                    <td class="ps-4">
                                        <div class="d-flex align-items-center gap-3">
                                            <div class="rounded-circle bg-primary text-white p-2 d-flex align-items-center justify-content-center" style="width: 35px; height: 35px;">
                                                <i class="bi bi-gem"></i>
                                            </div>
                                            <div>
                                                <h6 class="mb-0 small fw-bold">Ethereum</h6>
                                                <small class="text-muted">ETH</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="small fw-bold">0.82 ETH</td>
                                    <td class="small">₦3,850,000</td>
                                    <td class="pe-4 text-end text-danger fw-bold small">-1.5%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card border-0 shadow-sm rounded-4 mb-4 text-center p-4">
                    <h6 class="fw-bold mb-3">Portfolio Health</h6>
                    <div class="position-relative d-inline-block mx-auto mb-3">
                        <div class="rounded-circle border border-5 border-success d-flex align-items-center justify-content-center" style="width: 120px; height: 120px;">
                            <h2 class="fw-bold mb-0 text-success">85</h2>
                        </div>
                    </div>
                    <p class="small text-muted mb-0">Your portfolio is highly diversified. Your Food Basket provides excellent inflation protection.</p>
                </div>

                <div class="bg-white rounded-4 shadow-sm p-4">
                    <h6 class="fw-bold mb-3">Asset Activity</h6>
                    <div class="list-group list-group-flush">
                        <div class="list-group-item px-0 py-3 d-flex align-items-center border-0 border-bottom">
                            <div class="bg-light p-2 rounded-3 me-3 text-warning"><i class="bi bi-plus-lg"></i></div>
                            <div class="flex-grow-1">
                                <h6 class="mb-0 small fw-bold">Bought BTC</h6>
                                <small class="text-muted">Today, 09:45 AM</small>
                            </div>
                            <div class="text-end fw-bold small text-dark">₦25,000</div>
                        </div>
                        <div class="list-group-item px-0 py-3 d-flex align-items-center border-0">
                            <div class="bg-light p-2 rounded-3 me-3 text-success"><i class="bi bi-shield-check"></i></div>
                            <div class="flex-grow-1">
                                <h6 class="mb-0 small fw-bold">Food Basket Funding</h6>
                                <small class="text-muted">Yesterday</small>
                            </div>
                            <div class="text-end fw-bold small text-dark">₦700</div>
                        </div>
                    </div>
                    <button class="btn btn-light w-100 rounded-pill fw-bold btn-sm mt-3">Full Statement</button>
                </div>
            </div>
        </div>
    </div>

    <style>
        .bg-warning-subtle { background-color: #fef5ed !important; }
        .table-hover tbody tr:hover { background-color: #fdfaf7; }
    </style>
    `;
}