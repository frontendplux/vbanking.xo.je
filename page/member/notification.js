export function NotificationPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h3 class="fw-bold mb-1">Notifications</h3>
                <p class="text-muted small">Stay updated on your savings, loans, and bonuses.</p>
            </div>
            <button class="btn btn-light rounded-pill fw-bold btn-sm border px-3">
                Mark all as read
            </button>
        </div>

        <div class="row g-4">
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
                    
                    <div class="list-group-item p-4 border-0 border-bottom bg-danger bg-opacity-10 d-flex align-items-start">
                        <div class="bg-danger text-white p-3 rounded-4 me-3">
                            <i class="bi bi-alarm-fill fs-4"></i>
                        </div>
                        <div class="flex-grow-1">
                            <div class="d-flex justify-content-between">
                                <h6 class="mb-1 fw-bold text-danger">MANDATORY DEPOSIT DUE</h6>
                                <small class="text-muted">2 hours ago</small>
                            </div>
                            <p class="small text-dark mb-2">Saturday is approaching! Ensure your Main Wallet has at least <strong>₦4,500</strong> for your 3 Savings Slots to avoid the <strong>Double Penalty</strong>.</p>
                            <button class="btn btn-danger btn-sm rounded-pill fw-bold px-3">Fund Wallet Now</button>
                        </div>
                    </div>

                    <div class="list-group-item p-4 border-0 border-bottom d-flex align-items-start">
                        <div class="bg-success-subtle text-success p-3 rounded-4 me-3">
                            <i class="bi bi-person-plus-fill fs-4"></i>
                        </div>
                        <div class="flex-grow-1">
                            <div class="d-flex justify-content-between">
                                <h6 class="mb-1 fw-bold">Referral Bonus Received!</h6>
                                <small class="text-muted">Today, 09:15 AM</small>
                            </div>
                            <p class="small text-muted mb-0"><strong>Emeka Okon</strong> just registered. <strong>₦1,000</strong> has been added to your Referral Wallet. Keep it up!</p>
                        </div>
                    </div>

                    <div class="list-group-item p-4 border-0 border-bottom d-flex align-items-start">
                        <div class="bg-dark text-white p-3 rounded-4 me-3">
                            <i class="bi bi-percent fs-4"></i>
                        </div>
                        <div class="flex-grow-1">
                            <div class="d-flex justify-content-between">
                                <h6 class="mb-1 fw-bold">Daily Interest Applied</h6>
                                <small class="text-muted">Yesterday</small>
                            </div>
                            <p class="small text-muted mb-0">Your daily interest of 0.1% (₦50) for Nano-Loan #102 was deducted from your Main Wallet.</p>
                        </div>
                    </div>

                    <div class="list-group-item p-4 border-0 d-flex align-items-start">
                        <div class="bg-warning-subtle text-warning p-3 rounded-4 me-3">
                            <i class="bi bi-award-fill fs-4"></i>
                        </div>
                        <div class="flex-grow-1">
                            <div class="d-flex justify-content-between">
                                <h6 class="mb-1 fw-bold text-dark">Grant Application Approved</h6>
                                <small class="text-muted">2 days ago</small>
                            </div>
                            <p class="small text-muted mb-2">Congratulations! Your <strong>Agro-Pioneer Grant</strong> of ₦250,000 has been disbursed to your Main Wallet.</p>
                            <button class="btn btn-outline-dark btn-sm rounded-pill fw-bold px-3">View Receipt</button>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-lg-4">
                <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
                    <h6 class="fw-bold mb-3">Notification Settings</h6>
                    <div class="form-check form-switch mb-3">
                        <input class="form-check-input" type="checkbox" checked>
                        <label class="form-check-label small fw-bold">Saturday Deadline Alerts</label>
                    </div>
                    <div class="form-check form-switch mb-3">
                        <input class="form-check-input" type="checkbox" checked>
                        <label class="form-check-label small fw-bold">Referral Bonus Alerts</label>
                    </div>
                    <div class="form-check form-switch mb-3">
                        <input class="form-check-input" type="checkbox" checked>
                        <label class="form-check-label small fw-bold">Loan Interest Summaries</label>
                    </div>
                    <hr>
                    <button class="btn btn-light w-100 rounded-pill fw-bold btn-sm">Email Preferences</button>
                </div>

                <div class="p-4 rounded-4" style="background-color: #fef5ed; border: 1px dashed #f68b1e;">
                    <h6 class="fw-bold mb-2 small text-uppercase">Road to 50 Weeks</h6>
                    <p class="small text-muted mb-0">Maintain your streak for 5 more weeks to unlock your first incentive: <strong>1 Carton of Indomie!</strong> 🍜</p>
                </div>
            </div>
        </div>
    </div>

    <style>
        .bg-danger-subtle { background-color: #fff5f5 !important; }
        .bg-success-subtle { background-color: #e8f5e9 !important; }
        .bg-warning-subtle { background-color: #fef5ed !important; }
        .list-group-item { transition: background 0.2s; cursor: pointer; }
        .list-group-item:hover { background-color: #f8f9fa; }
    </style>
    `;
}