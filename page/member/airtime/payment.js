export function ConfirmPurchase(data) {
    // Mock data for demonstration if no data is passed
    const tx = data || {
        type: "Data Bundle",
        recipient: "08064549921",
        network: "MTN 🇳🇬",
        plan: "3.5GB Monthly Plan",
        amount: 1500,
        cashback: 30
    };

    return /*html*/`
    <div class="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light px-3">
        <div class="col-md-5 col-lg-4">
            
            <div class="card border-0 shadow-lg rounded-5 overflow-hidden position-relative">
                
                <div class="p-4 bg-dark text-white text-center position-relative">
                    <h6 class="text-uppercase opacity-50 small fw-bold mb-1" style="letter-spacing: 2px;">Review Transaction</h6>
                    <h2 class="fw-bold mb-0">₦${tx.amount.toLocaleString()}</h2>
                    
                    <div class="position-absolute start-0 top-100 translate-middle bg-light rounded-circle" style="width: 24px; height: 24px; z-index: 2;"></div>
                    <div class="position-absolute end-0 top-100 translate-middle bg-light rounded-circle" style="width: 24px; height: 24px; z-index: 2;"></div>
                </div>

                <div style="border-top: 2px dashed #eee; margin-top: -1px;"></div>

                <div class="card-body p-4 pt-4">
                    <div class="d-flex justify-content-between mb-3">
                        <span class="text-muted small">Service Type</span>
                        <span class="fw-bold small text-dark">${tx.type}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span class="text-muted small">Network</span>
                        <span class="fw-bold small text-dark">${tx.network}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span class="text-muted small">Recipient</span>
                        <span class="fw-bold small text-dark">${tx.recipient}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span class="text-muted small">Plan Detail</span>
                        <span class="fw-bold small text-dark text-end" style="max-width: 60%;">${tx.plan}</span>
                    </div>
                    
                    <hr class="my-4 opacity-10">

                    <div class="bg-success-subtle p-3 rounded-4 d-flex align-items-center mb-4 border border-success border-opacity-10">
                        <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 38px; height: 38px;">
                            <i class="bi bi-gift-fill fs-5"></i>
                        </div>
                        <div>
                            <small class="d-block text-success fw-bold text-uppercase" style="font-size: 0.65rem;">Premium Cashback</small>
                            <h6 class="text-dark fw-bold mb-0">+ ₦${tx.cashback}</h6>
                        </div>
                    </div>

                    <div class="text-center mb-4">
                        <small class="text-muted d-block mb-2 text-uppercase fw-bold" style="font-size: 0.6rem;">Pay From</small>
                        <div class="d-inline-flex align-items-center p-2 bg-light rounded-pill px-3 border">
                            <i class="bi bi-wallet2 text-warning me-2"></i>
                            <span class="fw-bold small">Main Wallet (₦1,450k)</span>
                        </div>
                    </div>

                    <div class="d-grid gap-2">
                        <button class="btn btn-dark py-3 rounded-pill fw-bold shadow-sm btn-pay" onclick="handleFinalPay()">
                            Pay ₦${tx.amount} Now
                        </button>
                        <button class="btn btn-link text-muted text-decoration-none fw-bold small py-2" onclick="history.back()">
                            Go Back
                        </button>
                    </div>
                </div>

                <div class="card-footer bg-white border-0 text-center pb-4 pt-0">
                    <div class="d-flex align-items-center justify-content-center opacity-50">
                        <i class="bi bi-shield-lock-fill text-success me-2"></i>
                        <span style="font-size: 0.65rem;" class="fw-bold">SECURED BY J-BANK VAULT PROTECTION</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .bg-success-subtle { background-color: #f1faf2 !important; }
        
        .btn-pay {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-pay:hover {
            background-color: #000;
            transform: translateY(-1px);
        }

        .btn-pay:active {
            transform: scale(0.97);
        }

        /* Create a "ticket" look with a subtle gradient */
        .card {
            background: #fff;
        }
    </style>

    <script>
        function handleFinalPay() {
            const btn = document.querySelector('.btn-pay');
            btn.disabled = true;
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Authorizing...';
            
            // Simulating API call
            setTimeout(() => {
                // Here we would route to the "Success" celebration page
                alert('Success! Your data bundle is now active.');
                window.location.href = '/dashboard';
            }, 2500);
        }
    </script>
    `;
}