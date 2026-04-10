export function VirtualCardPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4 d-flex justify-content-between align-items-center">
            <div>
                <h3 class="fw-bold mb-1">Virtual Cards</h3>
                <p class="text-muted small">Create secure cards for global payments and online subscriptions.</p>
            </div>
            <button class="btn btn-dark rounded-pill fw-bold px-4" onclick="createNewCard()">
                <i class="bi bi-plus-lg me-2"></i> Create New Card
            </button>
        </div>

        <div class="row g-4">
            <div class="col-lg-6">
                <div class="card-visual mb-4 p-4 rounded-5 text-white position-relative shadow-lg overflow-hidden" 
                     style="background: linear-gradient(135deg, #1a1a1a 0%, #3d3d3d 100%); height: 240px;">
                    
                    <div class="d-flex justify-content-between align-items-start position-relative" style="z-index: 2;">
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" height="15" class="mb-4 brightness-0 invert">
                            <h5 class="fw-bold mb-0" id="cardHolder">ALEX CHUKWUMA</h5>
                        </div>
                        <div class="text-end">
                            <span class="badge bg-white bg-opacity-10 rounded-pill px-3 py-1 small">Active</span>
                        </div>
                    </div>

                    <div class="mt-4 pt-2 position-relative" style="z-index: 2;">
                        <h3 class="fw-bold mb-1" style="letter-spacing: 4px;">**** **** **** 8840</h3>
                        <div class="d-flex gap-4 small opacity-75">
                            <div><small class="d-block opacity-50">EXP</small> 04/28</div>
                            <div><small class="d-block opacity-50">CVV</small> ***</div>
                        </div>
                    </div>

                    <div class="position-absolute end-0 bottom-0 p-4 opacity-25">
                        <i class="bi bi-cpu fs-1"></i>
                    </div>
                </div>

                <div class="row g-3">
                    <div class="col-6">
                        <button class="btn btn-light border w-100 rounded-4 py-3 fw-bold small">
                            <i class="bi bi-eye me-2"></i> Show Details
                        </button>
                    </div>
                    <div class="col-6">
                        <button class="btn btn-light border w-100 rounded-4 py-3 fw-bold small text-danger">
                            <i class="bi bi-snow me-2"></i> Freeze Card
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
                    <h6 class="text-muted small fw-bold text-uppercase mb-3">Card Balance</h6>
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h2 class="fw-bold mb-0">$420.50</h2>
                        <span class="text-muted fw-bold">₦630,750.00</span>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-warning rounded-pill fw-bold py-2">Fund Card</button>
                        <button class="btn btn-outline-dark rounded-pill fw-bold py-2">Withdraw to Wallet</button>
                    </div>
                </div>

                <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
                    <div class="p-4 border-bottom bg-white d-flex justify-content-between">
                        <h6 class="fw-bold mb-0">Card Activity</h6>
                        <a href="#" class="small text-decoration-none text-warning fw-bold">View All</a>
                    </div>
                    <div class="list-group list-group-flush">
                        <div class="list-group-item d-flex justify-content-between align-items-center p-3 px-4 border-0 border-bottom">
                            <div class="d-flex align-items-center">
                                <div class="bg-light p-2 rounded-3 me-3"><i class="bi bi-netflix text-danger"></i></div>
                                <div>
                                    <h6 class="mb-0 small fw-bold">Netflix Subscription</h6>
                                    <small class="text-muted">Apr 01, 2026</small>
                                </div>
                            </div>
                            <span class="fw-bold small">-$12.99</span>
                        </div>
                        <div class="list-group-item d-flex justify-content-between align-items-center p-3 px-4 border-0">
                            <div class="d-flex align-items-center">
                                <div class="bg-light p-2 rounded-3 me-3"><i class="bi bi-apple"></i></div>
                                <div>
                                    <h6 class="mb-0 small fw-bold">iCloud Storage</h6>
                                    <small class="text-muted">Mar 28, 2026</small>
                                </div>
                            </div>
                            <span class="fw-bold small">-$0.99</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .card-visual {
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
        }
        .card-visual:hover {
            transform: translateY(-5px) rotateX(5deg);
        }
        .bg-light { background-color: #f8f9fa !important; }
    </style>
    `;
}