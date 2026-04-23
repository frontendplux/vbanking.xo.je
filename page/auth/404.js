export function Error404Page() {
    return /*html*/`
    <div class="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
        <div class="text-center px-4">
            <div class="position-relative mb-5">
                <h1 class="display-1 fw-bold text-dark opacity-10" style="font-size: 12rem;">404</h1>
                <div class="position-absolute top-50 start-50 translate-middle">
                    <div class="bg-warning text-dark p-4 rounded-circle shadow-lg d-inline-flex">
                        <i class="bi bi-search fs-1"></i>
                    </div>
                </div>
            </div>

            <h2 class="fw-bold mb-3">Transaction Failed: Page Not Found</h2>
            <p class="text-muted mb-5 mx-auto" style="max-width: 500px;">
                It seems the page you’re looking for has moved or no longer exists. 
                Don’t worry, your <strong>Savings Slots</strong> and <strong>Main Wallet</strong> balance are perfectly safe.
            </p>

            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button class="btn btn-dark btn-lg rounded-pill px-5 fw-bold shadow-sm" onclick="location.href='/dashboard'">
                    <i class="bi bi-house-door me-2"></i> Back to Dashboard
                </button>
                <button class="btn btn-outline-dark btn-lg rounded-pill px-5 fw-bold" onclick="history.back()">
                    <i class="bi bi-arrow-left me-2"></i> Go Back
                </button>
            </div>

            <div class="mt-5 pt-4 border-top border-dark border-opacity-10">
                <p class="small text-muted mb-0">
                    Need help finding a specific feature? 
                    <a href="/support" class="text-warning fw-bold text-decoration-none">Contact Treasury Support</a>
                </p>
            </div>
        </div>
    </div>

    <style>
        /* Animation for the search icon to make it look like it's "looking" */
        @keyframes scan {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(15deg); }
        }
        .bi-search {
            display: inline-block;
            animation: scan 3s ease-in-out infinite;
        }

        h1 {
            user-select: none;
            letter-spacing: -10px;
        }

        .btn-lg {
            font-size: 1rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    </style>
    `;
}



export function GeneralError404Page() {
    return /*html*/`
    <div class="container-fluid vh-100 d-flex align-items-center justify-content-center bg-white">
        <div class="text-center px-4">
            <div class="mb-5 d-flex justify-content-center">
                <div class="position-relative">
                    <i class="bi bi-wallet2 text-light opacity-50" style="font-size: 10rem;"></i>
                    <div class="position-absolute top-50 start-50 translate-middle">
                        <span class="display-1 fw-bold text-dark">404</span>
                    </div>
                </div>
            </div>

            <h2 class="fw-bold text-dark mb-3">Oops! You've gone off-ledger.</h2>
            <p class="text-muted mb-5 mx-auto" style="max-width: 480px;">
                The page you are looking for has been moved, deleted, or never existed in the first place. 
                Don’t worry—this isn't a missed <strong>Saturday Deadline</strong>. Your funds and ROI are still secure.
            </p>

            <div class="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
                <a href="/dashboard" class="btn btn-dark btn-lg rounded-pill px-5 fw-bold shadow-sm d-flex align-items-center">
                    <i class="bi bi-speedometer2 me-2"></i> Return to Dashboard
                </a>
                <a href="/support" class="btn btn-outline-dark btn-lg rounded-pill px-5 fw-bold d-flex align-items-center">
                    <i class="bi bi-chat-dots me-2"></i> Contact Support
                </a>
            </div>

            <div class="mt-5 pt-4">
                <p class="small text-uppercase text-muted fw-bold mb-3" style="letter-spacing: 2px;">Popular Destinations</p>
                <div class="d-flex justify-content-center gap-4 flex-wrap">
                    <a href="/savings" class="text-decoration-none text-dark small fw-bold">Savings Slots</a>
                    <a href="/loans" class="text-decoration-none text-dark small fw-bold">Micro Loans</a>
                    <a href="/crypto" class="text-decoration-none text-dark small fw-bold">Crypto Trade</a>
                    <a href="/referrals" class="text-decoration-none text-dark small fw-bold">Referral Bonus</a>
                </div>
            </div>
        </div>
    </div>

    <style>
        /* Floating animation for the background wallet icon */
        @keyframes floatWallet {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(-2deg); }
        }
        .bi-wallet2 {
            display: inline-block;
            animation: floatWallet 5s ease-in-out infinite;
            color: #f68b1e !important;
            opacity: 0.15 !important;
        }

        .display-1 {
            letter-spacing: -5px;
            text-shadow: 2px 2px 0px #fff;
        }

        .btn-lg {
            font-size: 0.95rem;
            padding: 0.8rem 2.5rem;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .display-1 { font-size: 5rem; }
            .bi-wallet2 { font-size: 7rem !important; }
        }
    </style>
    `;
}



export function Normal404Page() {
    return /*html*/`
    <div class="vh-100 d-flex flex-column">
        <nav class="navbar navbar-light bg-white border-bottom py-3">
            <div class="container justify-content-center">
                <a class="navbar-brand fw-bold" href="/">
                    <span class="bg-dark text-white rounded-2 px-2 me-1">J</span>
                    BANK
                </a>
            </div>
        </nav>

        <main class="flex-grow-1 d-flex align-items-center bg-white">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="mb-4">
                            <i class="bi bi-exclamation-octagon display-1 text-warning"></i>
                        </div>

                        <h1 class="fw-bold text-dark display-4 mb-3">404</h1>
                        <h3 class="fw-bold mb-3">Page Not Found</h3>
                        
                        <p class="text-muted mb-5">
                            We’re sorry, but the page you were looking for doesn’t exist or has been moved to a new address. 
                        </p>

                        <div class="d-grid d-sm-flex gap-3 justify-content-center">
                            <a href="/" class="btn btn-dark px-5 py-3 rounded-pill fw-bold shadow-sm">
                                Go to Homepage
                            </a>
                            <button onclick="history.back()" class="btn btn-outline-secondary px-5 py-3 rounded-pill fw-bold">
                                Go Back
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="py-4 bg-light text-center border-top">
            <p class="small text-muted mb-0">
                &copy; 2026 J-Bank Premium. If you think this is a mistake, please 
                <a href="/contact" class="text-dark fw-bold">Contact Support</a>.
            </p>
        </footer>
    </div>

    <style>
        body { background-color: #ffffff; }
        .display-1 { font-size: 6rem; }
        .btn-dark { background-color: #1a1a1a; border: none; }
        .btn-dark:hover { background-color: #333; }
        h1, h3 { letter-spacing: -1px; }
    </style>
    `;
}