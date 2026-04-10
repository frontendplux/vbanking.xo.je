export function MyWalletPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="row mb-4">
            <div class="col-12">
                <div class="card border-0 shadow-lg rounded-5 overflow-hidden position-relative" style="background: linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%); min-height: 220px;">
                    <div class="position-absolute top-0 end-0 p-4 opacity-10">
                        <i class="bi bi-wallet2" style="font-size: 120px;"></i>
                    </div>

                    <div class="card-body p-4 p-md-5 text-white position-relative" style="z-index: 2;">
                        <div class="d-flex justify-content-between align-items-start mb-4">
                            <div>
                                <h6 class="text-uppercase opacity-50 fw-bold small mb-1" style="letter-spacing: 2px;">Main Wallet Balance</h6>
                                <h1 class="display-4 fw-bold mb-0">₦1,450,200<span class="fs-4 opacity-50">.50</span></h1>
                            </div>
                            <div class="text-end">
                                <span class="badge bg-warning text-dark fw-bold px-3 py-2 rounded-pill">PREMIUM USER</span>
                            </div>
                        </div>

                        <div class="d-flex gap-2 gap-md-3">
                            <button class="btn btn-warning rounded-pill px-4 fw-bold shadow-sm" onclick="location.href='/deposit'">
                                <i class="bi bi-plus-lg me-1"></i> Add Money
                            </button>
                            <button class="btn btn-outline-light rounded-pill px-4 fw-bold" onclick="location.href='/transfer'">
                                <i class="bi bi-send me-1"></i> Send
                            </button>
                            <button class="btn btn-outline-light rounded-pill px-4 fw-bold" onclick="location.href='/bills'">
                                <i class="bi bi-receipt me-1"></i> Pay Bills
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
                    <div class="p-4 border-bottom bg-white d-flex justify-content-between align-items-center">
                        <h5 class="fw-bold mb-0">Account Activity</h5>
                        <div class="dropdown">
                            <button class="btn btn-light btn-sm rounded-pill px-3 border" type="button">
                                All Transactions <i class="bi bi-chevron-down ms-1"></i>
                            </button>
                        </div>
                    </div>

                    <div class="list-group list-group-flush">
                        <div class="list-group-item p-4 border-0 border-bottom d-flex align-items-center hover-item">
                            <div class="bg-success-subtle text-success p-3 rounded-4 me-3">
                                <i class="bi bi-award-fill fs-4"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="mb-0 fw-bold">Business Grant Disbursement</h6>
                                <small class="text-muted">ID: GR-9912 • Today, 11:20 AM</small>
                            </div>
                            <div class="text-end text-success fw-bold">
                                + ₦250,000.00
                            </div>
                        </div>

                        <div class="list-group-item p-4 border-0 border-bottom d-flex align-items-center hover-item">
                            <div class="bg-danger-subtle text-danger p-3 rounded-4 me-3">
                                <i class="bi bi-safe2 fs-4"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="mb-0 fw-bold">Savings Slot #01 Weekly Dues</h6>
                                <small class="text-muted">Auto-Debit • Sat, April 04</small>
                            </div>
                            <div class="text-end text-danger fw-bold">
                                - ₦1,500.00
                            </div>
                        </div>

                        <div class="list-group-item p-4 border-0 border-bottom d-flex align-items-center hover-item">
                            <div class="bg-primary-subtle text-primary p-3 rounded-4 me-3">
                                <i class="bi bi-people-fill fs-4"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="mb-0 fw-bold">Referral Bonus Withdrawal</h6>
                                <small class="text-muted">From Bonus Wallet • Yesterday</small>
                            </div>
                            <div class="text-end text-success fw-bold">
                                + ₦5,000.00
                            </div>
                        </div>

                        <div class="list-group-item p-4 border-0 d-flex align-items-center hover-item">
                            <div class="bg-dark text-white p-3 rounded-4 me-3">
                                <i class="bi bi-percent fs-4"></i>
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="mb-0 fw-bold">Daily Loan Interest (0.1%)</h6>
                                <small class="text-muted">Nano Loan #102 • Yesterday</small>
                            </div>
                            <div class="text-end text-danger fw-bold">
                                - ₦50.00
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-3 text-center bg-light">
                        <button class="btn btn-link text-dark fw-bold text-decoration-none small">View Full Statement</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
                    <h6 class="fw-bold mb-3">Scheduled This Week</h6>
                    <div class="d-flex justify-content-between mb-3 border-bottom pb-2">
                        <div class="small">
                            <span class="d-block fw-bold">Saturday Savings (3 Slots)</span>
                            <span class="text-muted small">Apr 11, 2026</span>
                        </div>
                        <span class="fw-bold text-danger">₦4,500.00</span>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                        <div class="small">
                            <span class="d-block fw-bold text-muted">Estimated Loan Interest</span>
                        </div>
                        <span class="fw-bold text-muted opacity-50">₦350.00</span>
                    </div>
                </div>

                <div class="card border-0 rounded-4 p-4" style="background-color: #fef5ed; border: 1px dashed #f68b1e !important;">
                    <h6 class="fw-bold mb-2">Notice something wrong?</h6>
                    <p class="small text-muted mb-3">If you have questions about an auto-debit or a grant disbursement, we're here to help.</p>
                    <button class="btn btn-dark w-100 rounded-pill fw-bold btn-sm">Report a Transaction</button>
                </div>
            </div>
        </div>
    </div>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .bg-success-subtle { background-color: #e8f5e9 !important; }
        .bg-danger-subtle { background-color: #fff5f5 !important; }
        .bg-primary-subtle { background-color: #e3f2fd !important; }
        .hover-item { transition: background 0.2s; cursor: pointer; }
        .hover-item:hover { background-color: #fbfbfb; }
    </style>
    `;
}