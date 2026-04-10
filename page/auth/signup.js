export function SignUp() {
    return /*html*/`
    <div class="container-fluid min-vh-100 bg-light">
        <div class="row justify-content-center py-5">
            <div class="col-md-8 col-lg-5">
                
                <div class="text-center mb-4">
                    <h2 class="fw-bold"><span style="color: #f68b1e;">J-</span>BANK</h2>
                    <p class="text-muted small text-uppercase fw-bold" style="letter-spacing: 2px;">Premium Account Opening</p>
                </div>

                <div class="card border-0 shadow-sm rounded-4 mb-4">
                    <div class="card-body p-3">
                        <div class="d-flex justify-content-between px-3">
                            <div class="text-center">
                                <div class="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center mb-1 mx-auto" style="width: 30px; height: 30px; font-size: 0.8rem;">1</div>
                                <small class="fw-bold">Bio-Data</small>
                            </div>
                            <div class="flex-grow-1 border-top mt-3 mx-2 opacity-25"></div>
                            <div class="text-center">
                                <div class="rounded-circle border d-flex align-items-center justify-content-center mb-1 mx-auto text-muted" style="width: 30px; height: 30px; font-size: 0.8rem;">2</div>
                                <small class="text-muted">Verification</small>
                            </div>
                            <div class="flex-grow-1 border-top mt-3 mx-2 opacity-25"></div>
                            <div class="text-center">
                                <div class="rounded-circle border d-flex align-items-center justify-content-center mb-1 mx-auto text-muted" style="width: 30px; height: 30px; font-size: 0.8rem;">3</div>
                                <small class="text-muted">Payment</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card border-0 shadow-lg rounded-4 overflow-hidden" id="step1">
                    <div class="card-body p-4 p-md-5">
                        <h4 class="fw-bold mb-4">Personal Information</h4>
                        <form>
                            <div class="mb-3">
                                <label class="form-label small fw-bold text-muted text-uppercase">Email Address</label>
                                <input type="email" class="form-control form-control-lg bg-light border-0" placeholder="alex@example.com">
                            </div>

                            <div class="mb-4">
                                <label class="form-label small fw-bold text-muted text-uppercase">Phone Number</label>
                                <div class="input-group">
                                    <select class="form-select bg-light border-0 fw-bold" style="max-width: 100px;">
                                        <option value="+234">🇳🇬 +234</option>
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+44">🇬🇧 +44</option>
                                        <option value="+233">🇬🇭 +233</option>
                                    </select>
                                    <input type="tel" class="form-control form-control-lg bg-light border-0" placeholder="801 234 5678">
                                </div>
                            </div>

                            <button type="button" class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow" onclick="document.getElementById('step1').classList.add('d-none'); document.getElementById('step2').classList.remove('d-none');">
                                Continue to Verification
                            </button>
                        </form>
                    </div>
                </div>

        
<div class="card border-0 shadow-lg rounded-4 overflow-hidden d-none" id="step3">
    <div class="card-body p-4 p-md-5">
        <div class="text-center mb-4">
            <div class="display-6 mb-2">💳</div>
            <h4 class="fw-bold">Activate Your Vault</h4>
            <p class="text-muted small">Transfer ₦600 to your reserved wallet to finish.</p>
        </div>

        <div class="bg-light p-4 rounded-4 border mb-4">
            <div class="mb-3">
                <label class="small text-uppercase fw-bold text-muted d-block mb-1">Bank Name</label>
                <h6 class="fw-bold">J-BANK / STERLING BANK</h6>
            </div>
            <div class="mb-3">
                <label class="small text-uppercase fw-bold text-muted d-block mb-1">Account Number</label>
                <div class="d-flex justify-content-between align-items-center">
                    <h4 class="fw-bold mb-0 text-dark" id="accNumber">0099210044</h4>
                    <button class="btn btn-sm btn-outline-warning rounded-pill px-3 py-1" onclick="alert('Copied!')">
                        <i class="bi bi-copy"></i> Copy
                    </button>
                </div>
            </div>
            <div>
                <label class="small text-uppercase fw-bold text-muted d-block mb-1">Account Name</label>
                <h6 class="fw-bold text-uppercase">JBANK-ALEX CHUKWUMA</h6>
            </div>
        </div>

        <div class="d-flex justify-content-between mb-2">
            <span class="text-muted small">Registration Fee</span>
            <span class="fw-bold">₦600.00</span>
        </div>
        <div class="d-flex justify-content-between mb-4">
            <span class="text-muted small">Service Charge</span>
            <span class="text-success fw-bold">FREE</span>
        </div>

        <hr>

        <div class="text-center py-3">
            <div class="spinner-border text-warning mb-3" role="status" id="paymentSpinner">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="small fw-bold text-uppercase" id="paymentStatus">Waiting for deposit...</p>
        </div>

        <button type="button" class="btn btn-jumia w-100 py-3 rounded-pill fw-bold shadow" id="confirmPay" onclick="simulatePayment()">
            I have sent the money
        </button>
    </div>
</div>

<div class="card border-0 shadow-lg rounded-4 overflow-hidden d-none text-center" id="step4">
    <div class="card-body p-5">
        <div class="mb-4">
            <div class="bg-success-subtle d-inline-flex p-4 rounded-circle">
                <i class="bi bi-check-lg display-4 text-success"></i>
            </div>
        </div>
        <h2 class="fw-bold">Welcome to Premium!</h2>
        <p class="text-muted mb-4">Your ₦600 was debited successfully. Your J-Bank vault is now fully active and ready for your first deposit.</p>
        
        <div class="bg-light p-3 rounded-3 mb-4 text-start">
            <div class="d-flex justify-content-between small mb-1">
                <span class="text-muted">Transaction ID:</span>
                <span class="fw-bold">JB-REG-99120</span>
            </div>
            <div class="d-flex justify-content-between small">
                <span class="text-muted">Status:</span>
                <span class="text-success fw-bold">Active</span>
            </div>
        </div>

        <a href="/dashboard" class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow text-decoration-none">
            Go to My Dashboard <i class="bi bi-arrow-right ms-2"></i>
        </a>
    </div>
</div>

<script>
    // Simple logic for the demo flow
    function simulatePayment() {
        const btn = document.getElementById('confirmPay');
        const statusText = document.getElementById('paymentStatus');
        
        btn.disabled = true;
        statusText.innerText = "Verifying Transaction...";
        
        setTimeout(() => {
            statusText.innerText = "Debiting ₦600 Registration Fee...";
            statusText.classList.add('text-warning');
            
            setTimeout(() => {
                document.getElementById('step3').classList.add('d-none');
                document.getElementById('step4').classList.remove('d-none');
            }, 2000);
        }, 2000);
    }
</script>


                <div class="card border-0 shadow-lg rounded-4 overflow-hidden d-none" id="step2">
                    <div class="card-body p-4 p-md-5">
                        <div class="d-flex align-items-center mb-4">
                            <div class="bg-warning-subtle p-2 rounded-3 me-3">
                                <i class="bi bi-shield-check text-warning fs-3"></i>
                            </div>
                            <h4 class="fw-bold mb-0">Identity & Wallet</h4>
                        </div>

                        <div class="alert alert-warning border-0 small mb-4">
                            <i class="bi bi-info-circle-fill me-2"></i> 
                            A one-time registration fee of <strong>₦600</strong> applies to activate your premium vault.
                        </div>

                        <div class="mb-4">
                            <label class="form-label small fw-bold text-muted text-uppercase">Bank Verification Number (BVN)</label>
                            <input type="password" class="form-control form-control-lg bg-light border-0 text-center fw-bold" placeholder="22XXXXXXXXX" maxlength="11" style="letter-spacing: 4px;">
                            <p class="text-center mt-2 small text-muted">Dial <span class="text-dark fw-bold">*565*0#</span> to check your BVN</p>
                        </div>

                        <div class="bg-dark text-white p-4 rounded-4 mb-4">
                            <div class="d-flex justify-content-between mb-3">
                                <small class="opacity-50 text-uppercase">Assigned Wallet ID</small>
                                <span class="badge bg-success">Active</span>
                            </div>
                            <h5 class="fw-bold mb-1">JBANK-8821004491</h5>
                            <p class="small opacity-75 mb-0 text-warning">Reserved for: ALEX CHUKWUMA</p>
                        </div>

                        <div class="text-center mb-4">
                            <p class="small text-muted mb-2">To complete registration, credit your wallet with ₦600. It will be instantly debited for activation.</p>
                            <h3 class="fw-bold text-dark">Total: ₦600.00</h3>
                        </div>

                        <button type="submit" class="btn btn-jumia w-100 py-3 rounded-pill fw-bold shadow">
                            Credit Wallet & Activate
                        </button>
                        
                        <button type="button" class="btn btn-link text-muted w-100 mt-3 text-decoration-none small" onclick="document.getElementById('step2').classList.add('d-none'); document.getElementById('step1').classList.remove('d-none');">
                            Go Back
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `;
}