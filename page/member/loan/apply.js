export function LoanApplyPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4">
            <a href="/loans" class="text-decoration-none text-dark d-flex align-items-center mb-2">
                <i class="bi bi-arrow-left me-2"></i> <span class="fw-bold small">Back to Credit</span>
            </a>
            <h3 class="fw-bold">Apply for Nano-Loan</h3>
        </div>

        <div class="row g-4 justify-content-center">
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm rounded-5 overflow-hidden">
                    <div class="bg-dark p-4 text-white d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                            <div class="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center fw-bold me-3" style="width: 40px; height: 40px;">1</div>
                            <div>
                                <h6 class="mb-0 fw-bold">Loan Terms</h6>
                                <small class="opacity-50 text-uppercase" style="font-size: 0.6rem;">Step 1 of 3</small>
                            </div>
                        </div>
                        <div class="text-end">
                            <small class="opacity-50 d-block">Eligible Limit</small>
                            <h5 class="fw-bold text-warning mb-0">₦250,000</h5>
                        </div>
                    </div>

                    <div class="card-body p-4 p-md-5">
                        <div class="mb-5">
                            <label class="form-label d-flex justify-content-between">
                                <span class="fw-bold text-muted small text-uppercase">How much do you need?</span>
                                <span class="fw-bold text-dark fs-4" id="amtDisplay">₦50,000</span>
                            </label>
                            <input type="range" class="form-range custom-range" min="5000" max="250000" step="1000" value="50000" id="loanRange">
                            <div class="d-flex justify-content-between mt-2 text-muted small">
                                <span>₦5,000</span>
                                <span>₦250,000</span>
                            </div>
                        </div>

                        <div class="mb-5">
                            <label class="form-label fw-bold text-muted small text-uppercase mb-3">Repayment Period</label>
                            <div class="row g-3">
                                <div class="col-4">
                                    <input type="radio" class="btn-check" name="duration" id="d1" checked>
                                    <label class="btn btn-outline-light border text-dark w-100 py-3 rounded-4 fw-bold" for="d1">14 Days</label>
                                </div>
                                <div class="col-4">
                                    <input type="radio" class="btn-check" name="duration" id="d2">
                                    <label class="btn btn-outline-light border text-dark w-100 py-3 rounded-4 fw-bold" for="d2">30 Days</label>
                                </div>
                                <div class="col-4">
                                    <input type="radio" class="btn-check" name="duration" id="d3">
                                    <label class="btn btn-outline-light border text-dark w-100 py-3 rounded-4 fw-bold" for="d3">60 Days</label>
                                </div>
                            </div>
                        </div>

                        <div class="bg-light rounded-4 p-4 mb-5 border-start border-warning border-4">
                            <h6 class="fw-bold mb-3">Repayment Summary</h6>
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted small">Interest Rate (0.1% daily)</span>
                                <span class="fw-bold small">₦700.00</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted small">Service Fee</span>
                                <span class="fw-bold small">₦0.00</span>
                            </div>
                            <hr class="opacity-10">
                            <div class="d-flex justify-content-between">
                                <span class="fw-bold">Total Repayment</span>
                                <span class="fw-bold text-dark fs-5">₦50,700.00</span>
                            </div>
                            <div class="mt-3 bg-white p-2 rounded-3 text-center border">
                                <small class="text-muted">Due Date: <strong>April 22, 2026</strong></small>
                            </div>
                        </div>

                        <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" id="termsCheck">
                            <label class="form-check-label small text-muted" for="termsCheck">
                                I agree to the J-Bank <a href="#" class="text-warning text-decoration-none fw-bold">Loan Terms & Conditions</a> and authorize auto-debit for repayment.
                            </label>
                        </div>

                        <button class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow-sm" onclick="showStep2()">Next: Purpose of Loan</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
                <div class="card border-0 rounded-4 bg-white shadow-sm p-4 mb-4">
                    <div class="text-center mb-3">
                        <i class="bi bi-shield-lock text-success display-4"></i>
                    </div>
                    <h6 class="fw-bold text-center">Fast & Secure</h6>
                    <p class="small text-muted text-center mb-0">Our AI-powered approval system processes your application in under 60 seconds. Funds are disbursed instantly to your wallet.</p>
                </div>
                
                <div class="p-4 rounded-4" style="background-color: #fef5ed; border: 1px dashed #f68b1e;">
                    <h6 class="fw-bold mb-2 small text-uppercase">Why you qualify:</h6>
                    <ul class="list-unstyled mb-0">
                        <li class="small mb-2"><i class="bi bi-check2 text-success me-2"></i> Active Food Basket Plan</li>
                        <li class="small mb-2"><i class="bi bi-check2 text-success me-2"></i> Consistent Wallet Funding</li>
                        <li class="small"><i class="bi bi-check2 text-success me-2"></i> KYC Level 3 Verified</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .custom-range::-webkit-slider-thumb {
            background: #f68b1e;
            box-shadow: 0 0 0 4px rgba(246, 139, 30, 0.2);
        }
        .btn-check:checked + .btn-outline-light {
            background-color: #f68b1e !important;
            border-color: #f68b1e !important;
            color: white !important;
        }
    </style>

    <script>
        const range = document.getElementById('loanRange');
        const display = document.getElementById('amtDisplay');
        if(range) {
            range.addEventListener('input', (e) => {
                display.innerText = '₦' + parseInt(e.target.value).toLocaleString();
            });
        }
    </script>
    `;
}