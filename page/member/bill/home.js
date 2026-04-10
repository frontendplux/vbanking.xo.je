export function BillsPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4 d-flex justify-content-between align-items-center">
            <div>
                <h3 class="fw-bold mb-1">Pay Bills</h3>
                <p class="text-muted small">Pay your utility bills instantly with zero service charge.</p>
            </div>
            <div class="d-none d-md-block">
                <button class="btn btn-outline-dark rounded-pill fw-bold btn-sm px-3">
                    <i class="bi bi-clock-history me-1"></i> Bill History
                </button>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-7">
                <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
                    
                    <label class="form-label small fw-bold text-muted text-uppercase mb-3">What are you paying for?</label>
                    <div class="row g-3 mb-4 text-center">
                        <div class="col-4 col-md-3">
                            <div class="bill-cat-btn active border rounded-4 p-2 py-3" onclick="selectBill('elec')">
                                <div class="fs-3 mb-1">💡</div>
                                <small class="d-block fw-bold">Electricity</small>
                            </div>
                        </div>
                        <div class="col-4 col-md-3">
                            <div class="bill-cat-btn border rounded-4 p-2 py-3" onclick="selectBill('tv')">
                                <div class="fs-3 mb-1">📺</div>
                                <small class="d-block fw-bold">Cable TV</small>
                            </div>
                        </div>
                        <div class="col-4 col-md-3">
                            <div class="bill-cat-btn border rounded-4 p-2 py-3" onclick="selectBill('net')">
                                <div class="fs-3 mb-1">🌐</div>
                                <small class="d-block fw-bold">Internet</small>
                            </div>
                        </div>
                        <div class="col-4 col-md-3 d-none d-md-block">
                            <div class="bill-cat-btn border rounded-4 p-2 py-3" onclick="selectBill('water')">
                                <div class="fs-3 mb-1">💧</div>
                                <small class="d-block fw-bold">Water</small>
                            </div>
                        </div>
                    </div>

                    <div id="billForm">
                        <div class="mb-3">
                            <label class="form-label small fw-bold text-muted text-uppercase">Select Provider</label>
                            <select class="form-select border-0 bg-light rounded-3 py-3 fw-bold shadow-none">
                                <option>IKEDC (Ikeja Electric)</option>
                                <option>EKEDC (Eko Electric)</option>
                                <option>AEDC (Abuja Electric)</option>
                                <option>PHED (Port Harcourt)</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label small fw-bold text-muted text-uppercase">Meter Number / Account ID</label>
                            <div class="input-group border rounded-3 p-1 bg-light">
                                <input type="number" class="form-control border-0 bg-transparent shadow-none fw-bold" placeholder="0421 9920 112">
                                <button class="btn btn-warning rounded-3 fw-bold small px-3">Verify</button>
                            </div>
                            <div class="mt-2 px-1">
                                <small class="text-success fw-bold d-none" id="meterOwner"><i class="bi bi-check-circle-fill me-1"></i> Alex Chukwuma - Pre-Paid</small>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="form-label small fw-bold text-muted text-uppercase">Amount (₦)</label>
                            <div class="input-group border rounded-3 p-1 bg-light">
                                <span class="input-group-text border-0 bg-transparent fw-bold">₦</span>
                                <input type="number" class="form-control border-0 bg-transparent shadow-none fw-bold" placeholder="5,000">
                            </div>
                            <div class="d-flex gap-2 mt-2">
                                <button class="btn btn-sm btn-outline-secondary rounded-pill px-3" onclick="setAmt(2000)">₦2k</button>
                                <button class="btn btn-sm btn-outline-secondary rounded-pill px-3" onclick="setAmt(5000)">₦5k</button>
                                <button class="btn btn-sm btn-outline-secondary rounded-pill px-3" onclick="setAmt(10000)">₦10k</button>
                            </div>
                        </div>

                        <button class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow">Continue to Payment</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="card border-0 rounded-4 mb-4" style="background-color: #fef5ed; border: 1px dashed #f68b1e !important;">
                    <div class="card-body p-4">
                        <div class="d-flex align-items-center mb-3">
                            <div class="bg-warning p-2 rounded-circle me-3">
                                <i class="bi bi-arrow-repeat fs-4"></i>
                            </div>
                            <h6 class="fw-bold mb-0">Never get disconnected</h6>
                        </div>
                        <p class="small text-muted mb-3">Setup **Auto-Pay** for your electricity or TV subscription and we'll handle it for you every month.</p>
                        <button class="btn btn-warning w-100 rounded-pill fw-bold btn-sm">Setup Auto-Pay</button>
                    </div>
                </div>

                <div class="bg-white rounded-4 shadow-sm p-4">
                    <h6 class="fw-bold mb-3">Recent Payments</h6>
                    <div class="list-group list-group-flush">
                        <div class="list-group-item px-0 py-3 d-flex align-items-center border-0 border-bottom">
                            <div class="bg-light p-2 rounded-3 me-3">💡</div>
                            <div class="flex-grow-1">
                                <h6 class="mb-0 small fw-bold">IKEDC - Meter 042...</h6>
                                <small class="text-muted">April 02, 2026</small>
                            </div>
                            <div class="text-end">
                                <h6 class="mb-0 small fw-bold">₦10,000</h6>
                                <span class="badge bg-success-subtle text-success" style="font-size: 0.6rem;">SUCCESS</span>
                            </div>
                        </div>
                        <div class="list-group-item px-0 py-3 d-flex align-items-center border-0">
                            <div class="bg-light p-2 rounded-3 me-3">📺</div>
                            <div class="flex-grow-1">
                                <h6 class="mb-0 small fw-bold">DSTV Compact</h6>
                                <small class="text-muted">March 15, 2026</small>
                            </div>
                            <div class="text-end">
                                <h6 class="mb-0 small fw-bold">₦12,500</h6>
                                <span class="badge bg-success-subtle text-success" style="font-size: 0.6rem;">SUCCESS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .bill-cat-btn {
            cursor: pointer;
            transition: all 0.2s ease;
            background: #fff;
        }
        .bill-cat-btn:hover {
            border-color: #f68b1e !important;
            transform: translateY(-3px);
        }
        .bill-cat-btn.active {
            border-color: #f68b1e !important;
            background-color: #fef5ed;
            box-shadow: 0 5px 15px rgba(246, 139, 30, 0.1);
        }
        .bg-success-subtle { background-color: #e8f5e9 !important; }
    </style>
    `;
}