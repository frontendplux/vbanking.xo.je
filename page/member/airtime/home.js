export function AirtimePage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4">
            <h3 class="fw-bold mb-1">Airtime & Data</h3>
            <p class="text-muted small">Top up your phone and get up to 3% cashback instantly.</p>
        </div>

        <div class="row g-4">
            <div class="col-lg-7">
                <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
                    <label class="form-label small fw-bold text-muted text-uppercase mb-3">Select Network</label>
                    <div class="row g-3 mb-4 text-center">
                        <div class="col-3">
                            <div class="network-btn active border rounded-4 p-2 py-3" onclick="selectNetwork('mtn')">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/MTN_Logo.svg" height="30" class="mb-2">
                                <small class="d-block fw-bold">MTN</small>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="network-btn border rounded-4 p-2 py-3" onclick="selectNetwork('airtel')">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Airtel_logo.svg" height="30" class="mb-2">
                                <small class="d-block fw-bold">Airtel</small>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="network-btn border rounded-4 p-2 py-3" onclick="selectNetwork('glo')">
                                <img src="https://seeklogo.com/images/G/glo-logo-D0D3A63A5E-seeklogo.com.png" height="30" class="mb-2">
                                <small class="d-block fw-bold">Glo</small>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="network-btn border rounded-4 p-2 py-3" onclick="selectNetwork('9mobile')">
                                <img src="https://seeklogo.com/images/9/9mobile-logo-E320A8E332-seeklogo.com.png" height="30" class="mb-2">
                                <small class="d-block fw-bold">9mobile</small>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label small fw-bold text-muted text-uppercase">Phone Number</label>
                        <div class="input-group border rounded-4 p-1 bg-light">
                            <input type="tel" class="form-control border-0 bg-transparent shadow-none fw-bold" placeholder="0801 234 5678">
                            <button class="btn border-0 text-warning"><i class="bi bi-person-lines-fill fs-5"></i></button>
                        </div>
                    </div>

                    <label class="form-label small fw-bold text-muted text-uppercase mb-3">Amount (₦)</label>
                    <div class="row g-2 mb-4">
                        <div class="col-3"><button class="btn btn-outline-light border text-dark w-100 rounded-3 py-2 fw-bold" onclick="setAmount(100)">100</button></div>
                        <div class="col-3"><button class="btn btn-outline-light border text-dark w-100 rounded-3 py-2 fw-bold" onclick="setAmount(200)">200</button></div>
                        <div class="col-3"><button class="btn btn-outline-light border text-dark w-100 rounded-3 py-2 fw-bold" onclick="setAmount(500)">500</button></div>
                        <div class="col-3"><button class="btn btn-outline-light border text-dark w-100 rounded-3 py-2 fw-bold" onclick="setAmount(1000)">1000</button></div>
                    </div>
                    
                    <div class="input-group border rounded-4 p-1 bg-light mb-4">
                        <span class="input-group-text border-0 bg-transparent fw-bold">₦</span>
                        <input type="number" id="airtimeAmount" class="form-control border-0 bg-transparent shadow-none fw-bold" placeholder="Other Amount">
                    </div>

                    <button class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow">Buy Airtime Now</button>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="card border-0 rounded-4 bg-warning mb-4 overflow-hidden">
                    <div class="card-body p-4 text-dark position-relative">
                        <h5 class="fw-bold mb-1">Instant Cashback</h5>
                        <p class="small mb-0 opacity-75">Get 3% back into your wallet instantly.</p>
                        <div class="position-absolute end-0 bottom-0 m-2 opacity-25">
                            <i class="bi bi-gift-fill" style="font-size: 80px;"></i>
                        </div>
                    </div>
                </div>

                <div class="card border-0 shadow-sm rounded-4 h-100">
                    <div class="card-header bg-white border-0 p-4 pb-0">
                        <h6 class="fw-bold mb-0">Recent Top-ups</h6>
                    </div>
                    <div class="card-body p-0">
                        <div class="list-group list-group-flush">
                            <div class="list-group-item d-flex justify-content-between align-items-center px-4 py-3">
                                <div class="d-flex align-items-center">
                                    <div class="bg-warning-subtle p-2 rounded-circle me-3">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/MTN_Logo.svg" width="20">
                                    </div>
                                    <div>
                                        <small class="d-block fw-bold">08064549921</small>
                                        <small class="text-muted">Today, 09:15 AM</small>
                                    </div>
                                </div>
                                <span class="fw-bold">₦200</span>
                            </div>
                            <div class="list-group-item d-flex justify-content-between align-items-center px-4 py-3 border-0">
                                <div class="d-flex align-items-center">
                                    <div class="bg-primary-subtle p-2 rounded-circle me-3">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Airtel_logo.svg" width="20">
                                    </div>
                                    <div>
                                        <small class="d-block fw-bold">09012344401</small>
                                        <small class="text-muted">Yesterday, 10:30 PM</small>
                                    </div>
                                </div>
                                <span class="fw-bold">₦1,500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .network-btn {
            cursor: pointer;
            transition: all 0.2s ease;
            background: white;
        }
        .network-btn:hover {
            border-color: #f68b1e !important;
            transform: translateY(-2px);
        }
        .network-btn.active {
            border-color: #f68b1e !important;
            background-color: #fef5ed;
            box-shadow: 0 4px 10px rgba(246, 139, 30, 0.1);
        }
        .bg-warning-subtle { background-color: #fef5ed; }
        .bg-primary-subtle { background-color: #ffeef0; }
    </style>

    <script>
        function setAmount(val) {
            document.getElementById('airtimeAmount').value = val;
        }
        function selectNetwork(provider) {
            document.querySelectorAll('.network-btn').forEach(btn => btn.classList.remove('active'));
            // In real code, target the clicked element
            event.currentTarget.classList.add('active');
        }
    </script>
    `;
}

export function DataPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4">
            <h3 class="fw-bold mb-1">Internet Data</h3>
            <p class="text-muted small">Select a bundle to stay connected. Enjoy 2% cashback on every purchase.</p>
        </div>

        <div class="row g-4">
            <div class="col-lg-7">
                <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
                    
                    <div class="row g-3 mb-4">
                        <div class="col-md-4">
                            <label class="form-label small fw-bold text-muted text-uppercase">Network</label>
                            <select class="form-select border-0 bg-light rounded-3 py-2 fw-bold">
                                <option value="mtn">MTN 🇳🇬</option>
                                <option value="airtel">Airtel 🇳🇬</option>
                                <option value="glo">Glo 🇳🇬</option>
                                <option value="9mobile">9mobile 🇳🇬</option>
                            </select>
                        </div>
                        <div class="col-md-8">
                            <label class="form-label small fw-bold text-muted text-uppercase">Phone Number</label>
                            <div class="input-group border rounded-3 p-1 bg-light">
                                <input type="tel" class="form-control border-0 bg-transparent shadow-none fw-bold" placeholder="0801 234 5678">
                                <button class="btn border-0 text-warning"><i class="bi bi-person-lines-fill"></i></button>
                            </div>
                        </div>
                    </div>

                    <label class="form-label small fw-bold text-muted text-uppercase mb-3">Select Plan Type</label>
                    <ul class="nav nav-pills nav-fill mb-4 bg-light rounded-pill p-1" id="dataTabs" role="tablist">
                        <li class="nav-item">
                            <button class="nav-link active rounded-pill fw-bold py-2 small" data-bs-toggle="pill">DAILY</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link rounded-pill fw-bold py-2 small" data-bs-toggle="pill">WEEKLY</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link rounded-pill fw-bold py-2 small" data-bs-toggle="pill">MONTHLY</button>
                        </li>
                    </ul>

                    <div class="bundle-list" style="max-height: 400px; overflow-y: auto;">
                        <div class="list-group gap-2">
                            <label class="list-group-item d-flex justify-content-between align-items-center border rounded-4 p-3 hover-bundle" style="cursor: pointer;">
                                <div class="d-flex align-items-center">
                                    <input class="form-check-input me-3" type="radio" name="dataPlan" checked>
                                    <div>
                                        <h6 class="mb-0 fw-bold">1.5GB Monthly Plan</h6>
                                        <small class="text-muted">Valid for 30 Days</small>
                                    </div>
                                </div>
                                <span class="fw-bold text-dark">₦1,200</span>
                            </label>

                            <label class="list-group-item d-flex justify-content-between align-items-center border rounded-4 p-3 hover-bundle" style="cursor: pointer;">
                                <div class="d-flex align-items-center">
                                    <input class="form-check-input me-3" type="radio" name="dataPlan">
                                    <div>
                                        <h6 class="mb-0 fw-bold">3.5GB Monthly Plan</h6>
                                        <small class="text-muted">Valid for 30 Days</small>
                                    </div>
                                </div>
                                <span class="fw-bold text-dark">₦1,500</span>
                            </label>

                            <label class="list-group-item d-flex justify-content-between align-items-center border rounded-4 p-3 hover-bundle" style="cursor: pointer;">
                                <div class="d-flex align-items-center">
                                    <input class="form-check-input me-3" type="radio" name="dataPlan">
                                    <div>
                                        <h6 class="mb-0 fw-bold">15GB Monthly Plan</h6>
                                        <small class="text-muted">Valid for 30 Days</small>
                                    </div>
                                </div>
                                <span class="fw-bold text-dark">₦5,000</span>
                            </label>

                            <label class="list-group-item d-flex justify-content-between align-items-center border rounded-4 p-3 hover-bundle" style="cursor: pointer;">
                                <div class="d-flex align-items-center">
                                    <input class="form-check-input me-3" type="radio" name="dataPlan">
                                    <div>
                                        <h6 class="mb-0 fw-bold">40GB Monthly Plan</h6>
                                        <small class="text-muted">Valid for 30 Days</small>
                                    </div>
                                </div>
                                <span class="fw-bold text-dark">₦10,000</span>
                            </label>
                        </div>
                    </div>

                    <button class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow mt-4">Purchase Data</button>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="card border-0 shadow-sm rounded-4 mb-4" style="background: linear-gradient(135deg, #f68b1e 0%, #ff6a00 100%);">
                    <div class="card-body p-4 text-white">
                        <div class="d-flex justify-content-between mb-3">
                            <h6 class="fw-bold opacity-75 mb-0">Current Data Balance</h6>
                            <i class="bi bi-info-circle"></i>
                        </div>
                        <h2 class="fw-bold mb-1">8.42 GB</h2>
                        <p class="small opacity-75 mb-0">Expires: 12th May, 2026</p>
                    </div>
                </div>

                <div class="bg-white rounded-4 shadow-sm p-4 text-center">
                    <div class="mb-3">
                        <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold">HOT DEAL</span>
                    </div>
                    <h6 class="fw-bold">Get 10GB for ₦3,000</h6>
                    <p class="small text-muted mb-3">Exclusive J-Bank Premium offer for MTN users.</p>
                    <button class="btn btn-outline-warning w-100 rounded-pill fw-bold btn-sm">Activate Offer</button>
                </div>
            </div>
        </div>
    </div>

    <style>
        .hover-bundle:hover {
            border-color: #f68b1e !important;
            background-color: #fef5ed !important;
        }
        .nav-pills .nav-link.active {
            background-color: #282828 !important;
            color: white !important;
        }
        .nav-pills .nav-link {
            color: #6c757d;
        }
        /* Hide default radio circle and style custom row */
        .form-check-input:checked {
            background-color: #f68b1e;
            border-color: #f68b1e;
        }
        .bundle-list::-webkit-scrollbar {
            width: 4px;
        }
        .bundle-list::-webkit-scrollbar-thumb {
            background: #e0e0e0;
            border-radius: 10px;
        }
    </style>
    `;
}