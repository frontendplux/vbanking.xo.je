export function TransferPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4">
            <h3 class="fw-bold mb-1">Send Money</h3>
            <p class="text-muted small">Instant transfers to any bank in Nigeria.</p>
        </div>

        <div class="row g-4">
            <div class="col-lg-7">
                <div class="bg-white rounded-4 shadow-sm p-2 d-flex mb-4">
                    <button class="btn btn-dark flex-grow-1 rounded-pill fw-bold py-2 px-4" id="btnJumia">
                        <i class="bi bi-shield-check me-2"></i> To J-Bank
                    </button>
                    <button class="btn btn-link text-muted flex-grow-1 rounded-pill fw-bold text-decoration-none py-2 px-4" id="btnOther">
                        To Other Bank
                    </button>
                </div>

                <div class="card border-0 shadow-sm rounded-4 p-4">
                    <div class="mb-3" id="bankSelector">
                        <label class="form-label small fw-bold text-muted text-uppercase">Select Destination Bank</label>
                        <select class="form-select border-0 bg-light rounded-3 py-3 fw-bold shadow-none">
                            <option>J-Bank Premium (Instant & Free)</option>
                            <option>Kuda Microfinance</option>
                            <option>Zenith Bank</option>
                            <option>GTBank</option>
                            <option>Moniepoint</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label small fw-bold text-muted text-uppercase">Account Number</label>
                        <div class="input-group border rounded-3 p-1 bg-light">
                            <input type="number" class="form-control border-0 bg-transparent shadow-none fw-bold" placeholder="0123456789">
                            <button class="btn btn-warning rounded-3 fw-bold small px-3">Verify</button>
                        </div>
                        <div class="mt-2 px-1">
                            <small class="text-success fw-bold" id="accountName">
                                <i class="bi bi-person-check-fill me-1"></i> FATIMA ADEBayo
                            </small>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label small fw-bold text-muted text-uppercase">Amount (₦)</label>
                        <div class="input-group border rounded-3 p-1 bg-light">
                            <span class="input-group-text border-0 bg-transparent fw-bold">₦</span>
                            <input type="number" class="form-control border-0 bg-transparent shadow-none fw-bold" placeholder="0.00">
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                            <small class="text-muted">Balance: ₦1,450,200.50</small>
                            <small class="text-warning fw-bold" style="cursor:pointer" onclick="setMax()">SEND ALL</small>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label small fw-bold text-muted text-uppercase">Remark (Optional)</label>
                        <input type="text" class="form-control border-0 bg-light rounded-3 py-3 shadow-none fw-bold" placeholder="e.g. For Dinner">
                    </div>

                    <button class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow">Confirm Transfer</button>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="bg-white rounded-4 shadow-sm p-4 mb-4">
                    <h6 class="fw-bold mb-3">Recent Recipients</h6>
                    <div class="d-flex gap-3 overflow-auto pb-2" style="scrollbar-width: none;">
                        <div class="text-center" style="min-width: 70px;">
                            <div class="rounded-circle bg-light d-flex align-items-center justify-content-center mb-1 mx-auto" style="width: 50px; height: 50px;">
                                <span class="fw-bold text-primary">OC</span>
                            </div>
                            <small class="d-block text-muted" style="font-size: 0.7rem;">Obinna</small>
                        </div>
                        <div class="text-center" style="min-width: 70px;">
                            <div class="rounded-circle bg-light d-flex align-items-center justify-content-center mb-1 mx-auto" style="width: 50px; height: 50px;">
                                <span class="fw-bold text-success">FA</span>
                            </div>
                            <small class="d-block text-muted" style="font-size: 0.7rem;">Fatima</small>
                        </div>
                        <div class="text-center" style="min-width: 70px;">
                            <div class="rounded-circle bg-light d-flex align-items-center justify-content-center mb-1 mx-auto" style="width: 50px; height: 50px;">
                                <span class="fw-bold text-warning">SJ</span>
                            </div>
                            <small class="d-block text-muted" style="font-size: 0.7rem;">Samuel</small>
                        </div>
                        <div class="text-center" style="min-width: 70px;">
                            <div class="rounded-circle bg-light d-flex align-items-center justify-content-center mb-1 mx-auto" style="width: 50px; height: 50px;">
                                <i class="bi bi-plus-lg"></i>
                            </div>
                            <small class="d-block text-muted" style="font-size: 0.7rem;">More</small>
                        </div>
                    </div>
                </div>

                <div class="card border-0 rounded-4 bg-dark text-white overflow-hidden">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h6 class="fw-bold mb-0">Daily Limit</h6>
                            <i class="bi bi-info-circle opacity-50"></i>
                        </div>
                        <div class="progress bg-secondary bg-opacity-50 rounded-pill mb-2" style="height: 8px;">
                            <div class="progress-bar bg-warning" style="width: 35%"></div>
                        </div>
                        <div class="d-flex justify-content-between small">
                            <span class="opacity-75">Spent: ₦350k</span>
                            <span class="fw-bold text-warning">Limit: ₦5.0M</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}