export function CreateSlotPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4">
            <a href="/savings" class="text-decoration-none text-muted small fw-bold">
                <i class="bi bi-arrow-left me-1"></i> BACK TO SAVINGS
            </a>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="card border-0 shadow-lg rounded-5 overflow-hidden">
                    <div class="bg-dark p-5 text-center text-white">
                        <div class="bg-warning d-inline-flex p-3 rounded-circle mb-3 shadow">
                            <i class="bi bi-plus-circle-fill fs-1 text-dark"></i>
                        </div>
                        <h3 class="fw-bold">Activate New Slot</h3>
                        <p class="opacity-75 small">50 Weeks • 30% ROI • Weekly Food Incentives</p>
                    </div>

                    <div class="card-body p-4 p-md-5">
                        <div class="p-4 rounded-4 bg-light mb-4 border border-dashed">
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">Activation Fee (Per Slot)</span>
                                <span class="fw-bold">₦1,000.00</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">Initial Weekly Contribution</span>
                                <span class="fw-bold">₦1,500.00</span>
                            </div>
                            <hr>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="fw-bold">Total to Pay Now</span>
                                <span class="fw-bold text-dark fs-4">₦2,500.00</span>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="form-label small fw-bold text-muted text-uppercase">Slot Nickname (Optional)</label>
                            <input type="text" class="form-control border-0 bg-light rounded-3 py-3 shadow-none fw-bold" placeholder="e.g. December Rice Fund">
                        </div>

                        <div class="alert bg-danger-subtle border-0 rounded-4 p-3 mb-4">
                            <h6 class="fw-bold text-danger small mb-2"><i class="bi bi-shield-lock-fill me-2"></i>THE J-BANK DISCIPLINE CODE</h6>
                            <ul class="list-unstyled mb-0" style="font-size: 0.8rem;">
                                <li class="mb-2">⚠️ <strong>Saturday Deadline:</strong> Account must be funded by Sat 11:59 PM.</li>
                                <li class="mb-2">⚠️ <strong>Missed Week:</strong> Double penalty fine & zero interest for that week.</li>
                                <li class="">⚠️ <strong>Referral:</strong> Must refer 1 person within 30 days for ROI eligibility.</li>
                            </ul>
                        </div>

                        <div class="text-center mb-4">
                            <small class="text-muted d-block mb-1">Source: Main Wallet</small>
                            <span class="badge bg-dark rounded-pill px-3">Balance: ₦1,450,200</span>
                        </div>

                        <div class="d-grid">
                            <button class="btn btn-warning py-3 rounded-pill fw-bold shadow-sm" onclick="confirmNewSlot()">
                                Agree & Activate Slot
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .bg-danger-subtle { background-color: #fff5f5 !important; }
        .border-dashed { border: 2px dashed #dee2e6 !important; }
        .btn-warning { background-color: #f68b1e !important; border: none; color: white !important; }
    </style>

    <script>
        function confirmNewSlot() {
            // Logic for debiting 2,500 and creating the slot record
            alert('Slot Activated! Your first ₦1,500 contribution has been logged.');
            window.location.href = '/savings';
        }
    </script>
    `;
}