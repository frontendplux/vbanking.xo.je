export function TransactionHistoryPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="row mb-4 align-items-end">
            <div class="col-md-6">
                <h3 class="fw-bold mb-1">Transaction History</h3>
                <p class="text-muted small">Comprehensive record of all your financial activities.</p>
            </div>
            <div class="col-md-6 text-md-end">
                <button class="btn btn-outline-dark rounded-pill fw-bold px-4 btn-sm me-2">
                    <i class="bi bi-download me-2"></i> Export PDF
                </button>
                <button class="btn btn-dark rounded-pill fw-bold px-4 btn-sm">
                    <i class="bi bi-calendar3 me-2"></i> Filter Date
                </button>
            </div>
        </div>

        <div class="d-flex gap-2 mb-4 overflow-auto pb-2" style="white-space: nowrap;">
            <button class="btn btn-dark rounded-pill px-4 btn-sm fw-bold">All</button>
            <button class="btn btn-light border rounded-pill px-4 btn-sm fw-bold">Savings Slots</button>
            <button class="btn btn-light border rounded-pill px-4 btn-sm fw-bold">Referral Bonuses</button>
            <button class="btn btn-light border rounded-pill px-4 btn-sm fw-bold">Loan Repayments</button>
            <button class="btn btn-light border rounded-pill px-4 btn-sm fw-bold">Grants</button>
        </div>

        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="table-responsive">
                <table class="table table-hover align-middle mb-0">
                    <thead class="bg-light">
                        <tr class="small text-muted text-uppercase" style="letter-spacing: 1px;">
                            <th class="ps-4 py-3 border-0">Transaction Detail</th>
                            <th class="border-0">Category</th>
                            <th class="border-0">Date & Time</th>
                            <th class="border-0 text-end pe-4">Amount</th>
                        </tr>
                    </thead>
                    <tbody class="border-top-0">
                        <tr>
                            <td class="ps-4">
                                <div class="d-flex align-items-center">
                                    <div class="bg-success-subtle text-success p-2 rounded-3 me-3">
                                        <i class="bi bi-safe2 fs-5"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-0 small fw-bold">Slot #01 Weekly Deposit</h6>
                                        <small class="text-muted">Week 12 of 50</small>
                                    </div>
                                </div>
                            </td>
                            <td><span class="badge bg-light text-dark rounded-pill border fw-normal">Savings</span></td>
                            <td class="small text-muted">Apr 04, 2026 • 11:59 PM</td>
                            <td class="text-end pe-4 fw-bold text-danger">- ₦1,500.00</td>
                        </tr>

                        <tr>
                            <td class="ps-4">
                                <div class="d-flex align-items-center">
                                    <div class="bg-primary-subtle text-primary p-2 rounded-3 me-3">
                                        <i class="bi bi-people-fill fs-5"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-0 small fw-bold">Referral Bonus</h6>
                                        <small class="text-muted">Ref: Chidi_Graphics</small>
                                    </div>
                                </div>
                            </td>
                            <td><span class="badge bg-light text-dark rounded-pill border fw-normal">Bonus</span></td>
                            <td class="small text-muted">Apr 03, 2026 • 02:30 PM</td>
                            <td class="text-end pe-4 fw-bold text-success">+ ₦1,000.00</td>
                        </tr>

                        <tr>
                            <td class="ps-4">
                                <div class="d-flex align-items-center">
                                    <div class="bg-dark text-white p-2 rounded-3 me-3">
                                        <i class="bi bi-percent fs-5"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-0 small fw-bold">Daily Loan Interest</h6>
                                        <small class="text-muted">Nano Loan ID: 102</small>
                                    </div>
                                </div>
                            </td>
                            <td><span class="badge bg-light text-dark rounded-pill border fw-normal">Credit</span></td>
                            <td class="small text-muted">Apr 03, 2026 • 12:00 AM</td>
                            <td class="text-end pe-4 fw-bold text-danger">- ₦50.00</td>
                        </tr>

                        <tr>
                            <td class="ps-4">
                                <div class="d-flex align-items-center">
                                    <div class="bg-warning-subtle text-warning p-2 rounded-3 me-3">
                                        <i class="bi bi-award-fill fs-5"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-0 small fw-bold">Business Grant Credit</h6>
                                        <small class="text-muted">Gov. SME Support</small>
                                    </div>
                                </div>
                            </td>
                            <td><span class="badge bg-light text-dark rounded-pill border fw-normal">Grants</span></td>
                            <td class="small text-muted">Mar 28, 2026 • 09:15 AM</td>
                            <td class="text-end pe-4 fw-bold text-success">+ ₦250,000.00</td>
                        </tr>

                        <tr>
                            <td class="ps-4">
                                <div class="d-flex align-items-center">
                                    <div class="bg-danger-subtle text-danger p-2 rounded-3 me-3">
                                        <i class="bi bi-shield-x fs-5"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-0 small fw-bold">Late Contribution Penalty</h6>
                                        <small class="text-muted">Double Fine Applied</small>
                                    </div>
                                </div>
                            </td>
                            <td><span class="badge bg-danger text-white rounded-pill fw-bold">Penalty</span></td>
                            <td class="small text-muted">Mar 21, 2026 • 11:59 PM</td>
                            <td class="text-end pe-4 fw-bold text-danger">- ₦3,000.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="p-4 border-top bg-light d-flex justify-content-between align-items-center">
                <small class="text-muted">Showing 1-10 of 248 transactions</small>
                <nav>
                    <ul class="pagination pagination-sm mb-0">
                        <li class="page-item disabled"><a class="page-link border-0 bg-transparent text-dark" href="#"><i class="bi bi-chevron-left"></i></a></li>
                        <li class="page-item active"><a class="page-link border-0 rounded-circle mx-1" href="#" style="background: #1a1a1a;">1</a></li>
                        <li class="page-item"><a class="page-link border-0 rounded-circle mx-1 text-dark" href="#">2</a></li>
                        <li class="page-item"><a class="page-link border-0 bg-transparent text-dark" href="#"><i class="bi bi-chevron-right"></i></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <style>
        .bg-success-subtle { background-color: #e8f5e9 !important; }
        .bg-primary-subtle { background-color: #e3f2fd !important; }
        .bg-warning-subtle { background-color: #fff9ef !important; }
        .bg-danger-subtle { background-color: #ffebee !important; }
        .table thead th { font-weight: 700; font-size: 0.75rem; }
        .hover-item { transition: all 0.2s; }
        .table-hover tbody tr:hover { background-color: #fbfbfb; }
    </style>
    `;
}