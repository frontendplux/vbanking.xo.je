export function RedeemGiftCardPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4">
            <h3 class="fw-bold mb-1">Redeem Gift Card</h3>
            <p class="text-muted small">Convert your cards to instant Naira in your Main Wallet.</p>
        </div>

        <div class="row g-4">
            <div class="col-lg-7">
                <div class="card border-0 shadow-sm rounded-5 p-4 p-md-5">
                    <div class="mb-4">
                        <label class="form-label small fw-bold text-muted text-uppercase">Select Card Type</label>
                        <div class="row g-3">
                            <div class="col-4">
                                <input type="radio" class="btn-check" name="cardType" id="itunes" checked>
                                <label class="btn btn-outline-light border text-dark w-100 py-3 rounded-4 fw-bold d-flex flex-column align-items-center" for="itunes">
                                    <i class="bi bi-apple fs-3 mb-1"></i> <small>iTunes</small>
                                </label>
                            </div>
                            <div class="col-4">
                                <input type="radio" class="btn-check" name="cardType" id="amazon">
                                <label class="btn btn-outline-light border text-dark w-100 py-3 rounded-4 fw-bold d-flex flex-column align-items-center" for="amazon">
                                    <i class="bi bi-amazon fs-3 mb-1"></i> <small>Amazon</small>
                                </label>
                            </div>
                            <div class="col-4">
                                <input type="radio" class="btn-check" name="cardType" id="steam">
                                <label class="btn btn-outline-light border text-dark w-100 py-3 rounded-4 fw-bold d-flex flex-column align-items-center" for="steam">
                                    <i class="bi bi-controller fs-3 mb-1"></i> <small>Steam</small>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label small fw-bold text-muted text-uppercase">Card Amount ($)</label>
                        <div class="input-group input-group-lg border-0 bg-light rounded-4 p-2">
                            <span class="input-group-text border-0 bg-transparent fw-bold">$</span>
                            <input type="number" class="form-control border-0 bg-transparent fw-bold shadow-none" placeholder="100" id="cardAmt">
                        </div>
                        <div class="mt-2 d-flex justify-content-between">
                            <small class="text-muted">Rate: <span class="fw-bold text-dark">₦1,250 / $1</span></small>
                            <small class="text-success fw-bold">You get: ₦125,000</small>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label small fw-bold text-muted text-uppercase">Card Code / PIN</label>
                        <input type="text" class="form-control border-0 bg-light rounded-3 py-3 shadow-none fw-bold" placeholder="XXXX-XXXX-XXXX-XXXX">
                    </div>

                    <div class="mb-5">
                        <label class="form-label small fw-bold text-muted text-uppercase">Upload Card Image (Optional)</label>
                        <div class="border border-dashed rounded-4 p-4 text-center bg-light" style="cursor: pointer;">
                            <i class="bi bi-camera fs-2 text-muted"></i>
                            <p class="small text-muted mb-0">Drag & drop or click to upload</p>
                        </div>
                    </div>

                    <button class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow-lg" onclick="redeemCard()">
                        Redeem to Main Wallet
                    </button>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="card border-0 rounded-4 bg-dark text-white p-4 mb-4">
                    <h6 class="fw-bold text-warning mb-3"><i class="bi bi-shield-lock me-2"></i>Verification Info</h6>
                    <p class="small opacity-75">Gift card redemptions are manually verified by our team. Verification usually takes **5 to 15 minutes**.</p>
                    <hr class="opacity-10">
                    <div class="small">
                        <i class="bi bi-check2-circle text-success me-2"></i> Funds credited to <strong>Main Wallet</strong>.
                    </div>
                </div>

                <div class="bg-white rounded-4 shadow-sm p-4">
                    <h6 class="fw-bold mb-3">Recent Redemptions</h6>
                    <div class="list-group list-group-flush">
                        <div class="list-group-item px-0 py-3 d-flex justify-content-between border-0 border-bottom">
                            <div class="d-flex align-items-center">
                                <div class="bg-light p-2 rounded-3 me-3 text-dark"><i class="bi bi-apple"></i></div>
                                <div>
                                    <h6 class="mb-0 small fw-bold">$50 iTunes</h6>
                                    <small class="text-muted">Completed</small>
                                </div>
                            </div>
                            <span class="fw-bold small text-success">+ ₦62,500</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .border-dashed { border: 2px dashed #dee2e6 !important; }
        .btn-check:checked + .btn-outline-light {
            background-color: #f68b1e !important;
            border-color: #f68b1e !important;
            color: white !important;
        }
    </style>

    <script>
        function redeemCard() {
            alert('Your card is being verified. Funds will hit your Main Wallet shortly!');
        }
    </script>
    `;
}