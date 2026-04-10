export function PrivacyPolicyPage() {
    return /*html*/`
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom py-3">
        <div class="container">
            <a class="navbar-brand fw-bold d-flex align-items-center" href="/">
                <div class="bg-dark text-white rounded-3 px-2 me-2">J</div>
                <span style="letter-spacing: -1px;">BANK <span class="text-warning">PREMIUM</span></span>
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto gap-3">
                    <li class="nav-item"><a class="nav-link small fw-bold" href="/dashboard">Dashboard</a></li>
                    <li class="nav-item"><a class="nav-link small fw-bold" href="/terms">Terms</a></li>
                    <li class="nav-item"><a class="nav-link small fw-bold text-warning" href="/privacy">Privacy</a></li>
                    <li class="nav-item"><a class="btn btn-dark btn-sm rounded-pill px-4 fw-bold shadow-sm" href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <section class="bg-dark text-white py-5 position-relative overflow-hidden">
        <div class="position-absolute top-50 start-50 translate-middle opacity-10">
            <i class="bi bi-shield-lock" style="font-size: 20rem;"></i>
        </div>
        <div class="container py-4 position-relative" style="z-index: 2;">
            <div class="row justify-content-center text-center">
                <div class="col-lg-8">
                    <h1 class="display-4 fw-bold mb-3">Your Privacy is our <span class="text-warning">Priority</span></h1>
                    <p class="lead opacity-75">We use bank-grade encryption to ensure your data and your money stay exactly where they belong—with you.</p>
                </div>
            </div>
        </div>
    </section>

    <main class="py-5 bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="card border-0 shadow-sm rounded-5 p-4 p-md-5 bg-white">
                        
                        <div class="mb-5">
                            <h3 class="fw-bold text-dark">Data Collection & Usage</h3>
                            <p class="text-muted">To provide a seamless banking experience, we collect specific information required by the Central Bank of Nigeria (CBN) and for the technical operation of your J-Bank account.</p>
                        </div>

                        <div class="row g-4 mb-5">
                            <div class="col-md-6">
                                <div class="p-4 rounded-4 bg-light h-100">
                                    <h6 class="fw-bold text-dark mb-3"><i class="bi bi-person-badge me-2 text-warning"></i>Identity Data</h6>
                                    <p class="small text-muted mb-0">We collect your <strong>Full Name, BVN, and NIN</strong> to verify your identity and prevent fraud. We do not store your BVN; we only use it to verify your details against the national database.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-4 rounded-4 bg-light h-100">
                                    <h6 class="fw-bold text-dark mb-3"><i class="bi bi-wallet2 me-2 text-warning"></i>Financial Data</h6>
                                    <p class="small text-muted mb-0">We track your <strong>transaction history, loan balances, and savings dues</strong> to manage your 50-week cycle and ensure accurate ROI calculations.</p>
                                </div>
                            </div>
                        </div>

                        <hr class="my-5 opacity-10">

                        <section class="mb-5">
                            <h5 class="fw-bold text-dark mb-3">How We Protect Your Data</h5>
                            <p class="text-muted small lh-lg">
                                J-Bank Premium employs <strong>AES-256 GCM encryption</strong> for all sensitive data. Your connection to our servers is secured via <strong>TLS 1.3</strong>. Furthermore, all automated deductions (Savings/Loans) are processed via secure API tokens, ensuring your raw bank credentials are never stored on our local servers.
                            </p>
                        </section>

                        <section class="mb-5">
                            <h5 class="fw-bold text-dark mb-3">Third-Party Sharing</h5>
                            <p class="text-muted small lh-lg">
                                We do not sell your data. We only share necessary information with:
                                <br>• <strong>Payment Processors:</strong> To handle your deposits and withdrawals.
                                <br>• <strong>Regulatory Bodies:</strong> When mandated by Nigerian law or anti-money laundering (AML) protocols.
                                <br>• <strong>Credit Bureaus:</strong> Specifically for loan performance reporting.
                            </p>
                        </section>

                        <section class="mb-5">
                            <h5 class="fw-bold text-dark mb-3">Cookies & Tracking</h5>
                            <p class="text-muted small lh-lg">
                                We use "Strictly Necessary" cookies to keep you logged in and "Functional" cookies to remember your preferences (like your Virtual Card themes). You can manage cookie settings in your browser at any time.
                            </p>
                        </section>

                        <div class="p-4 rounded-4 border border-dashed text-center">
                            <p class="small text-muted mb-0">Questions about your data? Contact our Data Protection Officer at <strong>dpo@jbank-premium.com</strong></p>
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
                    <p class="small opacity-50">Secure, disciplined, and rewarding. The future of community banking starts here.</p>
                </div>
                <div class="col-md-2 offset-md-1">
                    <h6 class="small fw-bold text-uppercase text-warning mb-3">Links</h6>
                    <ul class="list-unstyled small opacity-75">
                        <li class="mb-2"><a href="/terms" class="text-white text-decoration-none">Terms of Service</a></li>
                        <li class="mb-2"><a href="/privacy" class="text-white text-decoration-none">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h6 class="small fw-bold text-uppercase text-warning mb-3">Social</h6>
                    <div class="d-flex gap-3">
                        <i class="bi bi-twitter-x"></i><i class="bi bi-linkedin"></i>
                    </div>
                </div>
            </div>
            <hr class="opacity-10">
            <div class="text-center">
                <p class="small opacity-50 mb-0">© 2026 J-Bank Premium. Built with integrity.</p>
            </div>
        </div>
    </footer>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .border-dashed { border: 2px dashed #dee2e6 !important; }
        .nav-link:hover { color: #f68b1e !important; }
    </style>
    `;
}