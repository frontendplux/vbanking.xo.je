export function CreateCardPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4">
            <a href="/virtual-card" class="text-decoration-none text-muted small fw-bold">
                <i class="bi bi-arrow-left me-1"></i> BACK TO CARDS
            </a>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="row g-4">
                    
                    <div class="col-md-6">
                        <div class="card border-0 shadow-sm rounded-5 p-4 p-md-5 h-100">
                            <h4 class="fw-bold mb-4">Design Your Card</h4>
                            
                            <div class="mb-4">
                                <label class="form-label small fw-bold text-muted text-uppercase">Currency Type</label>
                                <div class="d-flex gap-3">
                                    <div class="flex-grow-1">
                                        <input type="radio" class="btn-check" name="currency" id="usd" checked>
                                        <label class="btn btn-outline-dark w-100 py-3 rounded-4 fw-bold" for="usd">
                                            🇺🇸 USD Card
                                        </label>
                                    </div>
                                    <div class="flex-grow-1">
                                        <input type="radio" class="btn-check" name="currency" id="ngn">
                                        <label class="btn btn-outline-dark w-100 py-3 rounded-4 fw-bold" for="ngn">
                                            🇳🇬 NGN Card
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="form-label small fw-bold text-muted text-uppercase">Card Label (Alias)</label>
                                <input type="text" class="form-control border-0 bg-light rounded-3 py-3 shadow-none fw-bold" placeholder="e.g. Netflix & Chill">
                            </div>

                            <div class="mb-5">
                                <label class="form-label small fw-bold text-muted text-uppercase">Select Theme</label>
                                <div class="d-flex gap-3">
                                    <div class="theme-circle active" style="background: #1a1a1a;" data-color="dark"></div>
                                    <div class="theme-circle" style="background: #0d47a1;" data-color="blue"></div>
                                    <div class="theme-circle" style="background: #1b5e20;" data-color="green"></div>
                                    <div class="theme-circle" style="background: #b71c1c;" data-color="red"></div>
                                </div>
                            </div>

                            <div class="d-grid">
                                <button class="btn btn-dark py-3 rounded-pill fw-bold shadow-sm" onclick="processCreation()">
                                    Generate Card (₦1,500 Fee)
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 text-center">
                        <div class="sticky-top" style="top: 2rem;">
                            <h6 class="text-muted fw-bold mb-4">LIVE PREVIEW</h6>
                            
                            <div id="previewCard" class="card-visual mx-auto p-4 rounded-5 text-white text-start shadow-lg mb-4" 
                                 style="background: linear-gradient(135deg, #1a1a1a 0%, #3d3d3d 100%); width: 100%; max-width: 400px; height: 230px;">
                                <div class="d-flex justify-content-between">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" height="15" class="brightness-0 invert">
                                    <i class="bi bi-wifi fs-4 opacity-50"></i>
                                </div>
                                <div class="mt-5 pt-3">
                                    <h4 class="fw-bold mb-1" style="letter-spacing: 3px;">**** **** **** ****</h4>
                                    <div class="d-flex gap-4 small mt-2">
                                        <div><small class="opacity-50 d-block">VALID THRU</small> 04/29</div>
                                        <div><small class="opacity-50 d-block">CVV</small> ***</div>
                                    </div>
                                </div>
                                <div class="mt-4 text-uppercase fw-bold small">ALEX CHUKWUMA</div>
                            </div>

                            <div class="p-4 bg-white rounded-4 shadow-sm border border-dashed text-start">
                                <h6 class="fw-bold small mb-2"><i class="bi bi-info-circle me-2 text-warning"></i>Why use a J-Virtual Card?</h6>
                                <ul class="list-unstyled small text-muted mb-0">
                                    <li class="mb-2">✅ No monthly maintenance fees.</li>
                                    <li class="mb-2">✅ Works on Netflix, Facebook, & Amazon.</li>
                                    <li>✅ Secure: Freeze/Unfreeze instantly via app.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .theme-circle {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            cursor: pointer;
            border: 3px solid transparent;
            transition: all 0.2s;
        }
        .theme-circle.active {
            border-color: #f68b1e;
            transform: scale(1.2);
        }
        .border-dashed { border: 2px dashed #eee !important; }
        
        /* Preview Card Color Classes */
        .bg-blue { background: linear-gradient(135deg, #0d47a1 0%, #1976d2 100%) !important; }
        .bg-green { background: linear-gradient(135deg, #1b5e20 0%, #388e3c 100%) !important; }
        .bg-red { background: linear-gradient(135deg, #b71c1c 0%, #d32f2f 100%) !important; }
        .bg-dark { background: linear-gradient(135deg, #1a1a1a 0%, #3d3d3d 100%) !important; }
    </style>

    <script>
        document.querySelectorAll('.theme-circle').forEach(circle => {
            circle.addEventListener('click', function() {
                document.querySelectorAll('.theme-circle').forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                
                const color = this.getAttribute('data-color');
                const preview = document.getElementById('previewCard');
                preview.className = 'card-visual mx-auto p-4 rounded-5 text-white text-start shadow-lg mb-4 bg-' + color;
            });
        });

        function processCreation() {
            alert('Initiating card creation... ₦1,500 will be deducted from your wallet.');
            // Implementation logic here
        }
    </script>
    `;
}