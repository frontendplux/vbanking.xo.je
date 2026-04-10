export function SavingsPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="row g-4 mb-4">
            <div class="col-md-6">
                <div class="card border-0 shadow-sm rounded-4 bg-dark text-white p-4">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <h6 class="text-uppercase small opacity-50 fw-bold">Fixed Savings Balance</h6>
                            <h2 class="fw-bold mb-0">₦450,000.00</h2>
                            <p class="text-warning small mt-2 mb-0">
                                <i class="bi bi-graph-up-arrow"></i> Target: +30% ROI in 50 Weeks
                            </p>
                        </div>
                        <div class="bg-white bg-opacity-10 p-3 rounded-4">
                            <i class="bi bi-safe2 fs-3 text-warning"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card border-0 shadow-sm rounded-4 p-4" style="background: linear-gradient(135deg, #f68b1e 0%, #ffac4d 100%);">
                    <div class="d-flex justify-content-between align-items-start text-white">
                        <div>
                            <h6 class="text-uppercase small opacity-75 fw-bold">Referral Bonus Wallet</h6>
                            <h2 class="fw-bold mb-0">₦14,000.00</h2>
                            <small>₦1,000 earned per successful registration</small>
                        </div>
                        <button class="btn btn-white bg-white text-dark rounded-circle p-3 shadow-sm border-0">
                            <i class="bi bi-people-fill fs-4"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-8">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fw-bold mb-0">Active Savings Slots</h5>
                    <button class="btn btn-dark btn-sm rounded-pill px-3 fw-bold" onclick="openNewSlot()">
                        <i class="bi bi-plus-lg me-1"></i> New Slot (₦1,000 Fee)
                    </button>
                </div>

                <div class="alert bg-warning-subtle border-warning border-opacity-25 rounded-4 p-4 mb-4">
                    <div class="d-flex">
                        <i class="bi bi-exclamation-triangle-fill fs-3 text-warning me-3"></i>
                        <div>
                            <h6 class="fw-bold mb-1">Savings Account Activation</h6>
                            <p class="small text-muted mb-3">A one-time fee of ₦1,500 is required to open your 50-week high-interest vault.</p>
                            <button class="btn btn-dark btn-sm rounded-pill px-4 fw-bold">Pay ₦1,500 to Activate</button>
                        </div>
                    </div>
                </div>

                <div class="card border-0 shadow-sm rounded-4 mb-3 overflow-hidden">
                    <div class="card-body p-0">
                        <div class="p-4 border-bottom d-flex justify-content-between align-items-center bg-white">
                            <div>
                                <h6 class="fw-bold mb-0">Slot #01 — Food & Growth</h6>
                                <small class="text-muted">₦1,500 Weekly | Week 12 of 50</small>
                            </div>
                            <span class="badge bg-success text-white px-3 py-2 rounded-pill">Status: Active</span>
                        </div>
                        <div class="p-4 bg-light bg-opacity-50">
                            <div class="row g-3">
                                <div class="col-6 col-md-3">
                                    <small class="text-muted d-block">Next Debit Date</small>
                                    <span class="fw-bold text-danger">Sat, April 11</span>
                                </div>
                                <div class="col-6 col-md-3">
                                    <small class="text-muted d-block">Expected ROI</small>
                                    <span class="fw-bold text-success">30% (₦22,500)</span>
                                </div>
                                <div class="col-12 col-md-6 text-md-end">
                                    <div class="progress rounded-pill mb-1" style="height: 8px;">
                                        <div class="progress-bar bg-dark" style="width: 24%"></div>
                                    </div>
                                    <small class="text-muted">24% Completed</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card border-0 rounded-4 mb-4" style="background-color: #fff5f5; border: 1px solid #ff000020 !important;">
                    <div class="card-body p-4">
                        <h6 class="fw-bold text-danger mb-3"><i class="bi bi-shield-exclamation me-2"></i>Critical Rules</h6>
                        <ul class="list-unstyled mb-0">
                            <li class="small mb-3 d-flex">
                                <i class="bi bi-x-circle-fill text-danger me-2"></i>
                                <span><strong>Saturday Deadline:</strong> Missing your weekly credit results in a <strong>Double Penalty</strong> and loss of ROI for that week.</span>
                            </li>
                            <li class="small mb-3 d-flex">
                                <i class="bi bi-people-fill text-primary me-2"></i>
                                <span><strong>Referral Rule:</strong> You must bring at least 1 referral within 30 days of opening to remain eligible for ROI.</span>
                            </li>
                            <li class="small d-flex">
                                <i class="bi bi-wallet2 text-dark me-2"></i>
                                <span><strong>Auto-Debit:</strong> Repayments & dues are deducted automatically from your main wallet.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="card border-0 shadow-sm rounded-4 p-4">
                    <h6 class="fw-bold mb-3">50-Week Incentives</h6>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-light text-dark border p-2 px-3 rounded-pill small">📦 Carton of Indomie</span>
                        <span class="badge bg-light text-dark border p-2 px-3 rounded-pill small">🌾 5kg Rice</span>
                        <span class="badge bg-light text-dark border p-2 px-3 rounded-pill small">🧂 Maggi</span>
                        <span class="badge bg-light text-dark border p-2 px-3 rounded-pill small">🍝 Spaghetti</span>
                        <span class="badge bg-light text-dark border p-2 px-3 rounded-pill small">🥛 Milk & Milo</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .bg-warning-subtle { background-color: #fff9ef !important; }
        .btn-white { background: white; color: black; transition: all 0.3s; }
        .btn-white:hover { background: #f8f9fa; transform: scale(1.05); }
    </style>
    `;
}