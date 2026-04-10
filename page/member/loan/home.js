export function LoanPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="row mb-4 align-items-center">
            <div class="col-md-7">
                <h3 class="fw-bold mb-1">Credit & Loans</h3>
                <p class="text-muted small">Access instant credit based on your savings and transaction history.</p>
            </div>
            <div class="col-md-5 text-md-end">
                <div class="p-3 bg-white d-inline-flex align-items-center rounded-4 shadow-sm border">
                    <div class="me-3 text-start">
                        <small class="text-muted d-block fw-bold" style="font-size: 0.6rem;">CREDIT SCORE</small>
                        <h5 class="fw-bold mb-0 text-success">740 <span class="fs-6 opacity-50">/ 850</span></h5>
                    </div>
                    <i class="bi bi-speedometer2 fs-3 text-success"></i>
                </div>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-8">
                
                <div class="card border-0 shadow-sm rounded-5 overflow-hidden mb-4">
                    <div class="row g-0">
                        <div class="col-md-8 p-4 p-md-5 bg-dark text-white">
                            <span class="badge bg-warning text-dark fw-bold mb-3">INSTANT APPROVAL</span>
                            <h2 class="fw-bold mb-2">Get up to ₦250,000</h2>
                            <p class="opacity-75 mb-4">Need a quick boost? Get an instant nano-loan with 0.1% daily interest. No paperwork required.</p>
                            <button class="btn btn-warning rounded-pill px-5 fw-bold py-2">Apply Now</button>
                        </div>
                        <div class="col-md-4 bg-warning d-none d-md-flex align-items-center justify-content-center">
                            <i class="bi bi-lightning-charge-fill text-dark" style="font-size: 80px;"></i>
                        </div>
                    </div>
                </div>

                <h5 class="fw-bold mb-3">Specialized Financing</h5>
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="card border-0 shadow-sm rounded-4 p-4 h-100">
                            <div class="bg-light p-3 rounded-4 d-inline-block mb-3" style="width: fit-content;">
                                <i class="bi bi-basket3 text-warning fs-3"></i>
                            </div>
                            <h6 class="fw-bold">Basket Overdraft</h6>
                            <p class="small text-muted mb-4">Borrow up to 50% of your Food Basket value. Keep your savings growing while you spend.</p>
                            <button class="btn btn-outline-dark w-100 rounded-pill fw-bold btn-sm mt-auto">Learn More</button>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="card border-0 shadow-sm rounded-4 p-4 h-100">
                            <div class="bg-light p-3 rounded-4 d-inline-block mb-3" style="width: fit-content;">
                                <i class="bi bi-currency-bitcoin text-primary fs-3"></i>
                            </div>
                            <h6 class="fw-bold">Crypto-Backed Credit</h6>
                            <p class="small text-muted mb-4">Use your BTC or ETH as collateral for low-interest loans. Don't sell your assets, borrow against them.</p>
                            <button class="btn btn-outline-dark w-100 rounded-pill fw-bold btn-sm mt-auto">Check Eligibility</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="bg-white rounded-4 shadow-sm p-4 mb-4">
                    <h6 class="fw-bold mb-4">Active Repayments</h6>
                    
                    <div class="mb-4">
                        <div class="d-flex justify-content-between mb-2">
                            <small class="fw-bold">Nano Loan #102</small>
                            <small class="text-warning fw-bold">14 Days Left</small>
                        </div>
                        <div class="progress rounded-pill mb-2" style="height: 10px;">
                            <div class="progress-bar bg-dark" style="width: 65%"></div>
                        </div>
                        <div class="d-flex justify-content-between small">
                            <span class="text-muted">Paid: ₦32,500</span>
                            <span class="fw-bold">Bal: ₦17,500</span>
                        </div>
                    </div>
                    <button class="btn btn-dark w-100 rounded-pill fw-bold btn-sm py-2">Quick Repay</button>
                </div>

                <div class="card border-0 rounded-4" style="background-color: #fef5ed;">
                    <div class="card-body p-4">
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi bi-lightbulb-fill text-warning fs-4 me-3"></i>
                            <h6 class="fw-bold mb-0">Credit Tip</h6>
                        </div>
                        <p class="small text-muted mb-0">Repaying your Food Basket loans on time increases your overall J-Bank Credit Score by up to 40 points!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .rounded-5 { border-radius: 2rem !important; }
        .bg-warning { background-color: #f68b1e !important; }
    </style>
    `;
}