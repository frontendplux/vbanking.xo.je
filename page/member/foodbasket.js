import { Header } from "./header.js";

export function FoodBasketPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="d-flex justify-content-between align-items-end mb-4">
            <div>
                <h6 class="text-uppercase fw-bold text-muted small mb-1" style="letter-spacing: 1px;">Savings Vault</h6>
                <h3 class="fw-bold">My Food Basket</h3>
            </div>
            <div class="text-end">
                <span class="badge bg-success-subtle text-success border border-success px-3 py-2 rounded-pill">
                    <i class="bi bi-shield-check me-1"></i> Secured for December
                </span>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">
                    <div class="card-body p-4 p-md-5 bg-dark text-white position-relative">
                        <div class="row align-items-center">
                            <div class="col-md-7">
                                <h5 class="fw-bold text-warning mb-3">ULTIMATE PLAN (₦700/Day)</h5>
                                <h1 class="display-4 fw-bold mb-2">₦245,000</h1>
                                <p class="opacity-75 mb-4">You have successfully saved for <strong>350 of 350 days</strong>. Your basket is ready for pickup!</p>
                                <div class="progress bg-secondary bg-opacity-50 rounded-pill mb-3" style="height: 12px;">
                                    <div class="progress-bar bg-warning" style="width: 100%"></div>
                                </div>
                                <div class="d-flex justify-content-between small">
                                    <span>Progress: 100%</span>
                                    <span>Goal: ₦245,000</span>
                                </div>
                            </div>
                            <div class="col-md-5 text-center d-none d-md-block">
                                <div class="display-1 opacity-25">🧺</div>
                                <button class="btn btn-warning fw-bold px-4 py-2 mt-3 rounded-pill">Generate Pickup Code</button>
                            </div>
                        </div>
                        <div class="position-absolute top-0 end-0 m-4 opacity-10">
                            <i class="bi bi-basket3" style="font-size: 150px;"></i>
                        </div>
                    </div>
                </div>

                <h5 class="fw-bold mb-3">Basket Contents</h5>
                <div class="row g-3">
                    <div class="col-md-6 col-xl-4">
                        <div class="card border-0 shadow-sm rounded-4 p-3 h-100">
                            <div class="d-flex align-items-center">
                                <div class="bg-warning-subtle p-2 rounded-3 me-3 fs-4">🍚</div>
                                <div>
                                    <h6 class="mb-0 fw-bold small">1 Bag of Rice</h6>
                                    <small class="text-success fw-bold">Ready</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card border-0 shadow-sm rounded-4 p-3 h-100">
                            <div class="d-flex align-items-center">
                                <div class="bg-warning-subtle p-2 rounded-3 me-3 fs-4">🛢️</div>
                                <div>
                                    <h6 class="mb-0 fw-bold small">10L Veg. Oil</h6>
                                    <small class="text-success fw-bold">Ready</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card border-0 shadow-sm rounded-4 p-3 h-100">
                            <div class="d-flex align-items-center">
                                <div class="bg-warning-subtle p-2 rounded-3 me-3 fs-4">🍝</div>
                                <div>
                                    <h6 class="mb-0 fw-bold small">1 Ctn Spaghetti</h6>
                                    <small class="text-success fw-bold">Ready</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card border-0 shadow-sm rounded-4 p-3 h-100">
                            <div class="d-flex align-items-center">
                                <div class="bg-warning-subtle p-2 rounded-3 me-3 fs-4">🍠</div>
                                <div>
                                    <h6 class="mb-0 fw-bold small">5 Large Yams</h6>
                                    <small class="text-success fw-bold">Ready</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card border-0 shadow-sm rounded-4 p-3 h-100">
                            <div class="d-flex align-items-center">
                                <div class="bg-warning-subtle p-2 rounded-3 me-3 fs-4">🍗</div>
                                <div>
                                    <h6 class="mb-0 fw-bold small">Special Gift Item</h6>
                                    <small class="text-success fw-bold">Ready</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card border-0 shadow-sm rounded-4 p-3 h-100 border-dashed bg-light d-flex align-items-center justify-content-center">
                            <small class="text-muted">+ 15 more items</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card border-0 shadow-sm rounded-4 mb-4">
                    <div class="card-body p-4 text-center">
                        <h6 class="fw-bold mb-3">Manual Contribution</h6>
                        <p class="small text-muted mb-4">Missed a day? Top up your basket manually to stay on track.</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-light border-0">₦</span>
                            <input type="number" class="form-control bg-light border-0" placeholder="700">
                        </div>
                        <button class="btn btn-dark w-100 rounded-pill fw-bold">Fund Basket Now</button>
                    </div>
                </div>

                <div class="card border-0 shadow-sm rounded-4">
                    <div class="card-header bg-white border-0 p-4 pb-0">
                        <h6 class="fw-bold mb-0">Recent Funding</h6>
                    </div>
                    <div class="card-body p-0">
                        <div class="list-group list-group-flush">
                            <div class="list-group-item d-flex justify-content-between align-items-center px-4 py-3">
                                <div>
                                    <small class="d-block fw-bold">Daily Auto-Debit</small>
                                    <small class="text-muted">April 08, 2026</small>
                                </div>
                                <span class="text-success fw-bold">+ ₦700</span>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center px-4 py-3">
                                <div>
                                    <small class="d-block fw-bold">Daily Auto-Debit</small>
                                    <small class="text-muted">April 07, 2026</small>
                                </div>
                                <span class="text-success fw-bold">+ ₦700</span>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center px-4 py-3 border-0">
                                <div>
                                    <small class="d-block fw-bold">Manual Top-up</small>
                                    <small class="text-muted">April 06, 2026</small>
                                </div>
                                <span class="text-success fw-bold">+ ₦2,100</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-light border-0 text-center py-3">
                        <a href="#" class="small text-warning fw-bold text-decoration-none">Download Statement (PDF)</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .border-dashed { border: 2px dashed #dee2e6 !important; }
        .bg-warning-subtle { background-color: #fef5e7 !important; }
    </style>
    `;
}




export function FoodBasketPackages() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="text-center mb-5">
            <h6 class="text-uppercase fw-bold text-warning mb-2" style="letter-spacing: 2px;">Step 1: Choose Your Plan</h6>
            <h2 class="fw-bold">Select a Food Basket Package</h2>
            <p class="text-muted">Commit to a daily saving plan for 350 days and secure your home supplies.</p>
        </div>

        <div class="row g-4 justify-content-center">
            
            <div class="col-xl-3 col-md-6">
                <div class="card border-0 shadow-lg rounded-4 h-100 position-relative overflow-hidden card-hover">
                    <div class="bg-dark p-4 text-center text-white">
                        <span class="badge bg-warning text-dark position-absolute top-0 end-0 m-3 fw-bold">BEST VALUE</span>
                        <h5 class="fw-bold mb-1">Ultimate Basket</h5>
                        <h2 class="fw-bold mb-0">₦700 <span class="fs-6 opacity-50">/ day</span></h2>
                    </div>
                    <div class="card-body p-4">
                        <ul class="list-unstyled small mb-4">
                            <li class="mb-2"><i class="bi bi-check2-circle text-warning me-2"></i> 1 Bag of Rice</li>
                            <li class="mb-2"><i class="bi bi-check2-circle text-warning me-2"></i> 1 Carton Tomatoes</li>
                            <li class="mb-2"><i class="bi bi-check2-circle text-warning me-2"></i> 10L Veg & 5L Palm Oil</li>
                            <li class="mb-2"><i class="bi bi-check2-circle text-warning me-2"></i> 1 Ctn Spaghetti & Indomie</li>
                            <li class="mb-2"><i class="bi bi-check2-circle text-warning me-2"></i> 5 Large Tubers of Yam</li>
                            <li class="mb-2"><i class="bi bi-check2-circle text-warning me-2"></i> Basin of Garri & Big Salt</li>
                            <li class="mb-2"><i class="bi bi-star-fill text-warning me-2"></i> <strong>Special Gift Item</strong></li>
                        </ul>
                        <button class="btn btn-dark w-100 rounded-pill fw-bold py-2 mt-auto">Subscribe Plan</button>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6">
                <div class="card border-0 shadow-sm rounded-4 h-100 card-hover">
                    <div class="bg-warning p-4 text-center text-dark">
                        <h5 class="fw-bold mb-1">Standard Basket</h5>
                        <h2 class="fw-bold mb-0">₦300 <span class="fs-6 opacity-75">/ day</span></h2>
                    </div>
                    <div class="card-body p-4">
                        <ul class="list-unstyled small mb-4">
                            <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> 50kg Food Supplies</li>
                            <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> 1/2 Carton Tomatoes</li>
                            <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> 5L Veg & 2L Palm Oil</li>
                            <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> 1/2 Carton Spaghetti</li>
                            <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> 5 Tubers of Yam</li>
                            <li class="mb-2"><i class="bi bi-check2 text-success me-2"></i> 400g Milk & Milo</li>
                            <li class="mb-2"><i class="bi bi-gift text-warning me-2"></i> Gift Item Included</li>
                        </ul>
                        <button class="btn btn-outline-dark w-100 rounded-pill fw-bold py-2">Subscribe Plan</button>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6">
                <div class="card border-0 shadow-sm rounded-4 h-100 card-hover">
                    <div class="bg-light p-4 text-center text-dark border-bottom">
                        <h5 class="fw-bold mb-1">Basic Basket</h5>
                        <h2 class="fw-bold mb-0">₦200 <span class="fs-6 opacity-50">/ day</span></h2>
                    </div>
                    <div class="card-body p-4">
                        <ul class="list-unstyled small mb-4">
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 1/2 Bag of Rice</li>
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 1 Roll Sachet Tomatoes</li>
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 1L Veg & 1L G.Nut Oil</li>
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 3 Pkts Spaghetti</li>
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 2 Tubers of Yam</li>
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 400g Milk & Milo</li>
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 3 Cans of Sardines</li>
                        </ul>
                        <button class="btn btn-outline-secondary w-100 rounded-pill fw-bold py-2">Subscribe Plan</button>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6">
                <div class="card border-0 shadow-sm rounded-4 h-100 card-hover">
                    <div class="bg-white p-4 text-center text-dark border-bottom">
                        <h5 class="fw-bold mb-1">Mini Basket</h5>
                        <h2 class="fw-bold mb-0">₦100 <span class="fs-6 opacity-50">/ day</span></h2>
                    </div>
                    <div class="card-body p-4">
                        <ul class="list-unstyled small mb-4">
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 10kg Rice</li>
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 1 Roll Sachet Tomatoes</li>
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 1 Pkt Knorr Cubes</li>
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 1 Pkt Spaghetti</li>
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 1L Groundnut Oil</li>
                            <li class="mb-2"><i class="bi bi-check2 text-muted me-2"></i> 1L Palm Oil</li>
                        </ul>
                        <button class="btn btn-outline-secondary w-100 rounded-pill fw-bold py-2">Subscribe Plan</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5 p-4 bg-warning-subtle rounded-4 border border-warning border-opacity-25">
            <div class="d-flex align-items-center">
                <i class="bi bi-info-circle-fill fs-3 text-warning me-3"></i>
                <div>
                    <h6 class="fw-bold mb-1">Auto-Debit Information</h6>
                    <p class="small mb-0 text-muted">By subscribing, ₦700 will be automatically debited from your main wallet daily for 350 days. You can pause or cancel your subscription at any time from your settings.</p>
                </div>
            </div>
        </div>
    </div>

    <style>
        .card-hover {
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }
        .bg-warning-subtle {
            background-color: #fff9ef !important;
        }
    </style>
    ${Header()}
    `;
}




export function SubscriptionSuccess() {
    return /*html*/`
    <div class="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
        <div class="col-md-6 col-lg-5 text-center">
            
            <div class="mb-4 position-relative">
                <div class="bg-success-subtle rounded-circle d-inline-flex p-5 animate-bounce">
                    <i class="bi bi-shield-fill-check display-1 text-success"></i>
                </div>
                <span class="position-absolute top-0 start-50 translate-middle-x fs-1 opacity-50" style="margin-left: -80px; margin-top: 20px;">🍚</span>
                <span class="position-absolute top-0 start-50 translate-middle-x fs-1 opacity-50" style="margin-left: 80px; margin-top: 20px;">🍗</span>
            </div>

            <h2 class="fw-bold mb-2">Vault Activated!</h2>
            <p class="text-muted mb-4 px-lg-5">
                Congratulations, Alex! Your <strong>Ultimate Basket (₦700/Day)</strong> is now active. 
                Your first contribution has been successfully debited.
            </p>

            <div class="card border-0 shadow-sm rounded-4 text-start mb-4 overflow-hidden">
                <div class="p-3 bg-dark text-white d-flex justify-content-between align-items-center">
                    <small class="fw-bold text-uppercase opacity-75">Subscription ID</small>
                    <code class="text-warning fw-bold">JB-FB-88210-2026</code>
                </div>
                <div class="card-body p-4">
                    <div class="d-flex justify-content-between mb-3">
                        <span class="text-muted small">Daily Debit:</span>
                        <span class="fw-bold text-dark">₦700.00</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span class="text-muted small">Target Date:</span>
                        <span class="fw-bold text-dark">March 24, 2027</span>
                    </div>
                    <div class="d-flex justify-content-between mb-0">
                        <span class="text-muted small">Status:</span>
                        <span class="badge bg-success-subtle text-success">Running Smoothly</span>
                    </div>
                </div>
            </div>

            <div class="d-grid gap-2">
                <button class="btn btn-dark py-3 rounded-pill fw-bold shadow" onclick="window.location.href='/foodbasket'">
                    View My Basket Progress
                </button>
                <button class="btn btn-link text-muted text-decoration-none fw-bold small" onclick="window.location.href='/dashboard'">
                    Back to Dashboard
                </button>
            </div>

            <p class="mt-5 small text-muted text-uppercase fw-bold mb-3" style="letter-spacing: 1px;">Share the security</p>
            <div class="d-flex justify-content-center gap-3">
                <button class="btn btn-outline-light border rounded-circle text-dark" style="width: 45px; height: 45px;"><i class="bi bi-whatsapp"></i></button>
                <button class="btn btn-outline-light border rounded-circle text-dark" style="width: 45px; height: 45px;"><i class="bi bi-facebook"></i></button>
                <button class="btn btn-outline-light border rounded-circle text-dark" style="width: 45px; height: 45px;"><i class="bi bi-twitter-x"></i></button>
            </div>
        </div>
    </div>

    <style>
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-bounce {
            animation: bounce 2s infinite ease-in-out;
        }
        .bg-success-subtle {
            background-color: #e8f5e9 !important;
        }
    </style>
    `;
}