export function DepositPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4">
            <h3 class="fw-bold mb-1">Add Money</h3>
            <p class="text-muted small">Fund your wallet to power your food basket and crypto trades.</p>
        </div>

        <div class="row g-4">
            <div class="col-lg-7">
                <div class="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
                    <div class="p-4 bg-dark text-white">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <span class="badge bg-warning text-dark fw-bold px-3 py-2">DEDICATED ACCOUNT</span>
                            <i class="bi bi-shield-lock-fill text-warning fs-4"></i>
                        </div>
                        <p class="small opacity-75 mb-1">Transfer to this account to fund your wallet instantly</p>
                        <div class="bg-white bg-opacity-10 rounded-4 p-4 border border-white border-opacity-10 position-relative">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h6 class="text-uppercase small opacity-50 mb-2" style="letter-spacing: 1px;">Bank Name</h6>
                                    <h4 class="fw-bold mb-3">J-Bank / Rolec MFB</h4>
                                    
                                    <h6 class="text-uppercase small opacity-50 mb-2" style="letter-spacing: 1px;">Account Number</h6>
                                    <h2 class="fw-bold mb-0 text-warning" id="accNumber">8145499210</h2>
                                </div>
                                <div class="col-4 text-end">
                                    <button class="btn btn-warning rounded-circle shadow-lg p-3" onclick="copyText('8145499210')">
                                        <i class="bi bi-files fs-4"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 d-flex align-items-center gap-2">
                            <div class="rounded-circle bg-success" style="width: 10px; height: 10px;"></div>
                            <small class="fw-bold">Automatic Instant Funding Enabled</small>
                        </div>
                    </div>
                </div>

                <h6 class="fw-bold mb-3">Other Ways to Pay</h6>
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="card border-0 shadow-sm rounded-4 p-3 h-100 hover-card" style="cursor: pointer;">
                            <div class="d-flex align-items-center">
                                <div class="bg-primary-subtle p-3 rounded-4 me-3">
                                    <i class="bi bi-credit-card-2-front text-primary fs-3"></i>
                                </div>
                                <div>
                                    <h6 class="mb-0 fw-bold">Debit Card</h6>
                                    <small class="text-muted">Visa, Verve, Mastercard</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card border-0 shadow-sm rounded-4 p-3 h-100 hover-card" style="cursor: pointer;">
                            <div class="d-flex align-items-center">
                                <div class="bg-success-subtle p-3 rounded-4 me-3">
                                    <i class="bi bi-hash text-success fs-3"></i>
                                </div>
                                <div>
                                    <h6 class="mb-0 fw-bold">USSD Code</h6>
                                    <small class="text-muted">Dial *555# from your phone</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="bg-white rounded-4 shadow-sm p-4 mb-4">
                    <h6 class="fw-bold mb-3">Your Funding Limits</h6>
                    <div class="d-flex justify-content-between mb-2">
                        <span class="small text-muted">Daily Limit</span>
                        <span class="small fw-bold">₦5,000,000.00</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span class="small text-muted">Maximum Balance</span>
                        <span class="small fw-bold text-success">Unlimited</span>
                    </div>
                    <button class="btn btn-outline-dark w-100 rounded-pill fw-bold btn-sm">Increase Limits</button>
                </div>

                <div class="card border-0 rounded-4" style="background-color: #f8f9fa;">
                    <div class="card-body p-4">
                        <h6 class="fw-bold mb-2">Payment stuck?</h6>
                        <p class="small text-muted mb-3">Transfers usually take less than 60 seconds. If your wallet hasn't been credited after 30 minutes, please contact us.</p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-dark rounded-pill fw-bold btn-sm">Submit Receipt</button>
                            <button class="btn btn-link text-warning text-decoration-none fw-bold small">Chat with Support</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .hover-card:hover {
            background-color: #fef5ed !important;
            border: 1px solid #f68b1e !important;
            transform: translateY(-2px);
            transition: all 0.2s ease;
        }
        .bg-primary-subtle { background-color: #e3f2fd !important; }
        .bg-success-subtle { background-color: #e8f5e9 !important; }
    </style>

    <script>
        function copyText(text) {
            navigator.clipboard.writeText(text);
            alert('Account Number Copied!');
        }
    </script>
    `;
}