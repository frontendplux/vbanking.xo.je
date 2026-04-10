export function TermsConditionsPages() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-5 text-center">
            <h3 class="fw-bold mb-1">Terms & Conditions</h3>
            <p class="text-muted small">Last Updated: April 08, 2026</p>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="card border-0 shadow-sm rounded-5 bg-dark text-white p-4 p-md-5 mb-5">
                    <h5 class="fw-bold text-warning mb-4">The "J-Bank" Essentials</h5>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <h1 class="display-6 fw-bold mb-2">30%</h1>
                            <p class="small opacity-75">Fixed ROI for 50 weeks of disciplined savings.</p>
                        </div>
                        <div class="col-md-4">
                            <h1 class="display-6 fw-bold mb-2">SAT</h1>
                            <p class="small opacity-75">All weekly dues must be credited before Saturday 11:59 PM.</p>
                        </div>
                        <div class="col-md-4">
                            <h1 class="display-6 fw-bold mb-2">2x</h1>
                            <p class="small opacity-75">Double penalty applied for missed weekly contributions.</p>
                        </div>
                    </div>
                </div>

                <div class="accordion accordion-flush" id="termsAccordion">
                    
                    <div class="accordion-item border-0 mb-3 shadow-sm rounded-4 overflow-hidden">
                        <h2 class="accordion-header">
                            <button class="accordion-button fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#c1">
                                1. Savings Slots & ROI Eligibility
                            </button>
                        </h2>
                        <div id="c1" class="accordion-collapse collapse show" data-bs-parent="#termsAccordion">
                            <div class="accordion-body text-muted small lh-lg">
                                * A one-time activation fee of **₦1,500** applies to open a savings account.
                                <br>* Each individual Savings Slot requires a **₦1,000** activation fee.
                                <br>* Weekly contributions are fixed at **₦1,500 per slot** for a duration of **50 weeks**.
                                <br>* To be eligible for the 30% Return on Investment (ROI), users must bring at least **one (1) successful referral** within the first 30 days of account opening.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item border-0 mb-3 shadow-sm rounded-4 overflow-hidden">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#c2">
                                2. Deadlines & Penalties
                            </button>
                        </h2>
                        <div id="c2" class="accordion-collapse collapse" data-bs-parent="#termsAccordion">
                            <div class="accordion-body text-muted small lh-lg">
                                * The weekly deadline for funding your account is **Saturday at 23:59 (WAT)**.
                                <br>* Failure to credit your account by the deadline results in a **Double Penalty** (2x the weekly contribution per slot).
                                <br>* Forfeiture of interest: No interest/ROI will be calculated or paid for the specific week(s) where a contribution was missed.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item border-0 mb-3 shadow-sm rounded-4 overflow-hidden">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#c3">
                                3. Credit, Loans & Interest
                            </button>
                        </h2>
                        <div id="c3" class="accordion-collapse collapse" data-bs-parent="#termsAccordion">
                            <div class="accordion-body text-muted small lh-lg">
                                * Interest on all loans is calculated at a rate of **0.1% daily**.
                                <br>* Approved loans and grants are disbursed directly to the user's **Main Wallet**.
                                <br>* **Automatic Deductions:** The user authorizes J-Bank to automatically deduct loan repayments, daily interest, and savings dues from their Main Wallet balance.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item border-0 mb-3 shadow-sm rounded-4 overflow-hidden">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#c4">
                                4. Referral Bonuses
                            </button>
                        </h2>
                        <div id="c4" class="accordion-collapse collapse" data-bs-parent="#termsAccordion">
                            <div class="accordion-body text-muted small lh-lg">
                                * A referral bonus of **₦1,000** is earned only when the referred individual successfully registers and pays their **₦1,500 account opening fee**.
                                <br>* Referral bonuses are credited to the Referral Wallet and may be withdrawn to the Main Wallet at any time.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item border-0 mb-3 shadow-sm rounded-4 overflow-hidden">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#c5">
                                5. Physical Incentives (Food Basket)
                            </button>
                        </h2>
                        <div id="c5" class="accordion-collapse collapse" data-bs-parent="#termsAccordion">
                            <div class="accordion-body text-muted small lh-lg">
                                * Non-cash incentives (Indomie, Rice, Maggi, etc.) are only redeemable upon completion of the **50-week cycle** without more than two (2) missed contributions.
                                <br>* J-Bank reserves the right to substitute items of similar value based on market availability.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-5 p-4 bg-light rounded-4 text-center border">
                    <p class="small text-muted mb-4">By clicking "Accept" or continuing to use J-Bank, you agree to these terms.</p>
                    <button class="btn btn-dark rounded-pill px-5 fw-bold py-2">I Accept & Agree</button>
                </div>
            </div>
        </div>
    </div>

    ${LegalPage()}
    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .accordion-button:not(.collapsed) {
            background-color: #fff9ef;
            color: #f68b1e;
            box-shadow: none;
        }
        .accordion-button:focus { box-shadow: none; border: none; }
    </style>
    `;
}


export function LegalPage() {
    return /*html*/`
    <div class="container p-5 bg-white shadow-sm rounded-4 my-5">
        <h2 class="fw-bold border-bottom pb-3 mb-4">Terms of Service</h2>
        <div class="content text-muted lh-lg" style="font-size: 0.9rem;">
            <section class="mb-4">
                <h6 class="text-dark fw-bold">1. SERVICE OVERVIEW</h6>
                <p>J-Bank provides a structured savings and credit ecosystem. Users participate in 50-week disciplined savings cycles to earn high-yield returns and physical food incentives.</p>
            </section>
            
            <section class="mb-4">
                <h6 class="text-dark fw-bold">2. FINANCIAL DISCIPLINE & PENALTIES</h6>
                <p>The user acknowledges that the 30% ROI is contingent upon absolute discipline. Missing the Saturday 11:59 PM deadline triggers a <strong>Double Penalty</strong> and loss of that week's interest.</p>
            </section>

            <section class="mb-4">
                <h6 class="text-dark fw-bold">3. AUTO-DEBIT AUTHORIZATION</h6>
                <p>You hereby authorize J-Bank to perform automated debits for loan repayments, daily interest (0.1%), and weekly savings dues from your wallet balance without further notice.</p>
            </section>
        </div>
        <div class="mt-5 pt-4 border-top">
            <button class="btn btn-dark px-5 py-2 rounded-pill fw-bold">Download PDF Version</button>
        </div>
    </div>
    `;
}


export function TermsConditionsPage() {
    return /*html*/`
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom py-3">
        <div class="container">
            <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
                <div class="bg-dark text-white rounded-3 px-2 me-2">J</div>
                <span style="letter-spacing: -1px;">BANK <span class="text-warning">PREMIUM</span></span>
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto gap-3">
                    <li class="nav-item"><a class="nav-link small fw-bold" href="/dashboard">Dashboard</a></li>
                    <li class="nav-item"><a class="nav-link small fw-bold" href="/savings">Savings</a></li>
                    <li class="nav-item"><a class="nav-link small fw-bold text-warning" href="/terms">Terms</a></li>
                    <li class="nav-item">
                        <a class="btn btn-dark btn-sm rounded-pill px-4 fw-bold shadow-sm" href="/wallet">My Wallet</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    ${HeroHeader()}

    <main class="bg-light py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="card border-0 shadow-sm rounded-5 overflow-hidden">
                        
                        <div class="bg-white p-5 border-bottom">
                            <h1 class="fw-bold mb-2">Terms and Conditions</h1>
                            <p class="text-muted mb-0">Effective Date: April 08, 2026 | Version 2.4.0</p>
                        </div>

                        <div class="card-body p-5 bg-white text-muted lh-lg" style="font-size: 0.95rem;">
                            
                            <section class="mb-5">
                                <h4 class="text-dark fw-bold mb-3">1. ACCOUNT ACTIVATION & SLOTS</h4>
                                <p>By registering on J-Bank, you agree to the following fee structure:</p>
                                <ul>
                                    <li><strong>Account Opening Fee:</strong> A one-time payment of <strong>₦1,500</strong> is required to activate your primary savings profile.</li>
                                    <li><strong>Savings Slot Fee:</strong> Each independent savings slot requires a <strong>₦1,000</strong> activation fee. You may subscribe to as many slots as you desire.</li>
                                </ul>
                            </section>

                            <section class="mb-5">
                                <h4 class="text-dark fw-bold mb-3">2. SAVINGS PROTOCOL & ROI</h4>
                                <p>J-Bank is built on a 50-week disciplined savings cycle. By activating a slot, you commit to:</p>
                                <ul>
                                    <li>Contributing <strong>₦1,500 weekly</strong> per active slot for exactly <strong>50 weeks</strong>.</li>
                                    <li><strong>30% Interest:</strong> A fixed ROI of 30% will be applied to the total contribution amount at the end of the 50-week term.</li>
                                    <li><strong>Referral Eligibility:</strong> To qualify for the 30% ROI, you are mandated to bring at least <strong>one (1) referral</strong> within the first 30 days of your registration. Failure to do so will result in the forfeiture of interest, though your principal remains secure.</li>
                                </ul>
                            </section>

                            <section class="mb-5 p-4 rounded-4" style="background-color: #fff5f5; border: 1px dashed #ff000040;">
                                <h4 class="text-danger fw-bold mb-3">3. THE SATURDAY DEADLINE & PENALTIES</h4>
                                <p class="text-dark fw-bold">Discipline is our core value. Please read these penalty clauses carefully:</p>
                                <ul>
                                    <li><strong>Funding Deadline:</strong> All slots must be funded by <strong>Saturday at 23:59 (11:59 PM)</strong> each week.</li>
                                    <li><strong>Double Penalty:</strong> If you miss the Saturday deadline, you will be penalized <strong>double the contribution amount</strong> (₦3,000 per missed slot).</li>
                                    <li><strong>Interest Loss:</strong> No interest will be calculated for any week in which a payment was missed or a penalty was applied.</li>
                                </ul>
                            </section>

                            <section class="mb-5">
                                <h4 class="text-dark fw-bold mb-3">4. LOANS, GRANTS & AUTO-DEBITS</h4>
                                <p>Our credit system is integrated directly with your Main Wallet:</p>
                                <ul>
                                    <li><strong>Loan Interest:</strong> All approved loans attract a daily interest rate of <strong>0.1%</strong>.</li>
                                    <li><strong>Withdrawals:</strong> Approved grants and loans are credited to your Main Wallet. You may withdraw these to your external bank or use them within the app.</li>
                                    <li><strong>Automated Repayment:</strong> You hereby grant J-Bank irrevocable authority to <strong>automatically deduct</strong> loan repayments, daily interest, and mandatory weekly savings dues from your Main Wallet balance.</li>
                                </ul>
                            </section>

                            <section class="mb-5">
                                <h4 class="text-dark fw-bold mb-3">5. INCENTIVES & FOOD BASKETS</h4>
                                <p>Successful completion of a 50-week cycle entitles the user to physical incentives, including:</p>
                                <div class="row g-2 mt-2">
                                    <div class="col-6 col-md-3"><span class="badge bg-light text-dark border w-100 p-2">Indomie Carton</span></div>
                                    <div class="col-6 col-md-3"><span class="badge bg-light text-dark border w-100 p-2">5kg Rice</span></div>
                                    <div class="col-6 col-md-3"><span class="badge bg-light text-dark border w-100 p-2">Spaghetti & Milk</span></div>
                                    <div class="col-6 col-md-3"><span class="badge bg-light text-dark border w-100 p-2">Milo & Maggi</span></div>
                                </div>
                            </section>

                        </div>

                        <div class="p-5 bg-light text-center border-top">
                            <h6 class="fw-bold mb-3">Do you agree to these terms?</h6>
                            <button class="btn btn-dark rounded-pill px-5 py-3 fw-bold shadow">I Accept the Terms of Service</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="bg-dark text-white pt-5 pb-3">
        <div class="container">
            <div class="row g-4 mb-5">
                <div class="col-md-4">
                    <h5 class="fw-bold mb-3">J-BANK <span class="text-warning">PREMIUM</span></h5>
                    <p class="small opacity-50">Empowering the Jumia community through disciplined savings, instant credit, and social impact grants.</p>
                </div>
                <div class="col-md-2 offset-md-1">
                    <h6 class="small fw-bold text-uppercase text-warning mb-3">Platform</h6>
                    <ul class="list-unstyled small opacity-75">
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Virtual Cards</a></li>
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Crypto Exchange</a></li>
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Food Baskets</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h6 class="small fw-bold text-uppercase text-warning mb-3">Legal</h6>
                    <ul class="list-unstyled small opacity-75">
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Terms of Service</a></li>
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Privacy Policy</a></li>
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Penalty FAQs</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h6 class="small fw-bold text-uppercase text-warning mb-3">Support</h6>
                    <p class="small opacity-75 mb-0">support@jbank-premium.com</p>
                    <div class="d-flex gap-3 mt-3">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter-x"></i>
                        <i class="bi bi-instagram"></i>
                    </div>
                </div>
            </div>
            <hr class="opacity-10">
            <div class="text-center">
                <p class="small opacity-50 mb-0">© 2026 J-Bank Premium. Licensed by the Central Bank of Nigeria. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        section p, section li { color: #6c757d; }
        .nav-link:hover { color: #f68b1e !important; }
        .navbar-brand { font-size: 1.4rem; }
    </style>
    `;
}

export function HeroHeader() {
    return /*html*/`
    <header class="hero-section position-relative overflow-hidden bg-dark text-white">
        <div class="position-absolute top-0 start-0 w-100 h-100 opacity-25" 
             style="background: radial-gradient(circle at 20% 30%, #f68b1e 0%, transparent 50%), 
                        radial-gradient(circle at 80% 70%, #0d6efd 0%, transparent 50%); filter: blur(80px);">
        </div>

        <div class="container position-relative" style="z-index: 2; padding: 100px 0;">
            <div class="row align-items-center g-5">
                <div class="col-lg-7 text-center text-lg-start">
                    <div class="badge bg-warning text-dark mb-3 px-3 py-2 rounded-pill fw-bold animate__animated animate__fadeInDown">
                        <i class="bi bi-star-fill me-2"></i>THE #1 SAVINGS PLATFORM FOR JUMIA PARTNERS
                    </div>
                    <h1 class="display-3 fw-bold mb-4 lh-1">
                        Save Disciplined. <br>
                        <span class="text-warning">Earn 30% ROI.</span>
                    </h1>
                    <p class="lead opacity-75 mb-5 pe-lg-5">
                        Join thousands of smart savers in our 50-week challenge. Secure your future, access instant business grants, and earn monthly food baskets—all with J-Bank Premium.
                    </p>
                    
                    <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                        <button class="btn btn-warning btn-lg rounded-pill px-5 fw-bold py-3 shadow-lg" onclick="location.href='/signup'">
                            Start Your First Slot
                        </button>
                        <button class="btn btn-outline-light btn-lg rounded-pill px-5 fw-bold py-3">
                            <i class="bi bi-play-circle me-2"></i>How it Works
                        </button>
                    </div>

                    <div class="row mt-5 pt-4 g-4 border-top border-white border-opacity-10">
                        <div class="col-4">
                            <h4 class="fw-bold mb-0">₦2.4B+</h4>
                            <small class="opacity-50 text-uppercase" style="font-size: 0.7rem; letter-spacing: 1px;">Total Saved</small>
                        </div>
                        <div class="col-4 border-start border-white border-opacity-10">
                            <h4 class="fw-bold mb-0">12k+</h4>
                            <small class="opacity-50 text-uppercase" style="font-size: 0.7rem; letter-spacing: 1px;">Active Savers</small>
                        </div>
                        <div class="col-4 border-start border-white border-opacity-10">
                            <h4 class="fw-bold mb-0">98%</h4>
                            <small class="opacity-50 text-uppercase" style="font-size: 0.7rem; letter-spacing: 1px;">Payout Rate</small>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 d-none d-lg-block animate__animated animate__fadeInRight">
                    <div class="hero-card-stack position-relative">
                        <div class="card border-0 shadow-lg rounded-5 p-4 bg-white text-dark position-relative" style="z-index: 3; transform: rotate(-2deg);">
                            <div class="d-flex justify-content-between mb-4">
                                <div class="bg-dark text-white p-2 rounded-3 fw-bold">J-BANK</div>
                                <i class="bi bi-wifi fs-4 text-muted rotate-90"></i>
                            </div>
                            <h6 class="text-muted small mb-1">SAVINGS BALANCE</h6>
                            <h2 class="fw-bold mb-4">₦1,450,200.00</h2>
                            <div class="d-flex justify-content-between align-items-end">
                                <div>
                                    <small class="text-muted d-block">WEEKLY SLOT</small>
                                    <span class="fw-bold">₦1,500.00</span>
                                </div>
                                <div class="text-end">
                                    <small class="text-muted d-block">ROI STATUS</small>
                                    <span class="badge bg-success-subtle text-success rounded-pill fw-bold">30% SECURED</span>
                                </div>
                            </div>
                        </div>
                        <div class="card border-0 shadow position-absolute top-0 start-0 w-100 h-100 rounded-5 bg-warning" style="z-index: 2; transform: translate(15px, 15px) rotate(2deg); opacity: 0.8;"></div>
                        <div class="card border-0 shadow position-absolute top-0 start-0 w-100 h-100 rounded-5 bg-primary" style="z-index: 1; transform: translate(30px, 30px) rotate(5deg); opacity: 0.4;"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="position-absolute bottom-0 start-0 w-100 overflow-hidden" style="line-height: 0;">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style="position: relative; display: block; width: calc(100% + 1.3px); height: 60px;">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,101.55,123.4,103.17,184.11,94.34,244.83,85.51,300.5,75.2,321.39,56.44Z" fill="#f8f9fa"></path>
            </svg>
        </div>
    </header>

    <style>
        .hero-section { min-height: 80vh; background-color: #0c0c0c !important; }
        .rotate-90 { transform: rotate(90deg); }
        .bg-success-subtle { background-color: #e8f5e9 !important; }
        .hero-card-stack { width: 100%; max-width: 400px; margin: 0 auto; }
        .rounded-5 { border-radius: 2rem !important; }
        
        /* Animation */
        @keyframes float {
            0% { transform: translateY(0px) rotate(-2deg); }
            50% { transform: translateY(-15px) rotate(-1deg); }
            100% { transform: translateY(0px) rotate(-2deg); }
        }
        .hero-card-stack > .card:first-child {
            animation: float 4s ease-in-out infinite;
        }
    </style>
    `;
}