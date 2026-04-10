export function Profile() {
    return /*html*/`
    <div class="container-fluid p-0 bg-light min-vh-100 pb-5">
        
        <header class="p-4 text-white" style="background-color: var(--jumia-dark); border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;">
            <div class="d-flex align-items-center mb-4">
                <a href="/dashboard" class="text-white me-3"><i class="bi bi-arrow-left fs-4"></i></a>
                <h5 class="fw-bold mb-0">My Account</h5>
            </div>

            <div class="card border-0 shadow-sm rounded-4 bg-white text-dark">
                <div class="card-body p-4">
                    <div class="d-flex align-items-center">
                        <div class="position-relative">
                            <div class="rounded-circle bg-warning d-flex align-items-center justify-content-center fw-bold text-dark fs-3" style="width: 70px; height: 70px;">
                                AC
                            </div>
                            <span class="position-absolute bottom-0 end-0 bg-success border border-white border-3 rounded-circle" style="width: 18px; height: 18px;"></span>
                        </div>
                        <div class="ms-3">
                            <h5 class="fw-bold mb-0">Alex Chukwuma</h5>
                            <p class="small text-muted mb-0">Premium Gold Member • Tier 3</p>
                            <span class="badge bg-warning-subtle text-warning mt-2 px-3 py-1 fw-bold">KYC VERIFIED</span>
                        </div>
                        <div class="ms-auto">
                            <i class="bi bi-pencil-square text-muted fs-5"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="container mt-4">
            <h6 class="text-muted small fw-bold text-uppercase mb-3 px-2">Account & Security</h6>
            <div class="bg-white rounded-4 shadow-sm overflow-hidden mb-4">
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center py-3 px-4 border-0 border-bottom">
                        <i class="bi bi-shield-check text-success me-3 fs-5"></i>
                        <div class="flex-grow-1">
                            <h6 class="mb-0 fw-bold small">BVN Verification</h6>
                            <small class="text-muted">224******91</small>
                        </div>
                        <i class="bi bi-chevron-right text-muted small"></i>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center py-3 px-4 border-0 border-bottom">
                        <i class="bi bi-key text-warning me-3 fs-5"></i>
                        <div class="flex-grow-1">
                            <h6 class="mb-0 fw-bold small">Change Passcode</h6>
                            <small class="text-muted">Update your 4-digit security PIN</small>
                        </div>
                        <i class="bi bi-chevron-right text-muted small"></i>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center py-3 px-4 border-0">
                        <i class="bi bi-fingerprint text-primary me-3 fs-5"></i>
                        <div class="flex-grow-1">
                            <h6 class="mb-0 fw-bold small">Biometric Login</h6>
                            <small class="text-muted">Face ID or Fingerprint enabled</small>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" checked>
                        </div>
                    </a>
                </div>
            </div>

            <h6 class="text-muted small fw-bold text-uppercase mb-3 px-2">Preferences</h6>
            <div class="bg-white rounded-4 shadow-sm overflow-hidden mb-4">
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center py-3 px-4 border-0 border-bottom">
                        <i class="bi bi-basket3 text-warning me-3 fs-5"></i>
                        <div class="flex-grow-1">
                            <h6 class="mb-0 fw-bold small">Food Basket Settings</h6>
                            <small class="text-muted">Manage your ₦700/day plan</small>
                        </div>
                        <i class="bi bi-chevron-right text-muted small"></i>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center py-3 px-4 border-0 border-bottom">
                        <i class="bi bi-graph-up-arrow text-success me-3 fs-5"></i>
                        <div class="flex-grow-1">
                            <h6 class="mb-0 fw-bold small">Transaction Limits</h6>
                            <small class="text-muted">Daily limit: ₦5,000,000</small>
                        </div>
                        <i class="bi bi-chevron-right text-muted small"></i>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center py-3 px-4 border-0">
                        <i class="bi bi-translate text-info me-3 fs-5"></i>
                        <div class="flex-grow-1">
                            <h6 class="mb-0 fw-bold small">Language</h6>
                            <small class="text-muted">English (Nigeria)</small>
                        </div>
                        <i class="bi bi-chevron-right text-muted small"></i>
                    </a>
                </div>
            </div>

            <div class="bg-white rounded-4 shadow-sm overflow-hidden mb-5">
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center py-3 px-4 border-0 border-bottom">
                        <i class="bi bi-question-circle me-3 fs-5 text-muted"></i>
                        <span class="small fw-bold">Help Center</span>
                        <i class="bi bi-chevron-right text-muted ms-auto small"></i>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center py-3 px-4 border-0 text-danger">
                        <i class="bi bi-box-arrow-right me-3 fs-5"></i>
                        <span class="small fw-bold">Log Out</span>
                        <i class="bi bi-chevron-right ms-auto small"></i>
                    </a>
                </div>
            </div>

            <div class="text-center pb-5">
                <p class="text-muted small">Version 2.4.0 (Premium Gold)</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" height="20" class="opacity-25" alt="Mastercard">
            </div>
        </div>

        </div>
    `;
}