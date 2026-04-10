export function ReferralHub() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4">
            <h3 class="fw-bold mb-1">Referral Hub</h3>
            <p class="text-muted small">Earn ₦1,000 for every friend who joins. Stay eligible for your 30% ROI.</p>
        </div>

        <div class="row g-4">
            <div class="col-lg-7">
                <div class="card border-0 shadow-sm rounded-5 bg-dark text-white p-4 p-md-5 mb-4 position-relative overflow-hidden">
                    <div class="position-relative" style="z-index: 2;">
                        <h6 class="text-warning fw-bold text-uppercase mb-2" style="letter-spacing: 2px;">Your Unique Link</h6>
                        <h2 class="fw-bold mb-4">Invite & Earn ₦1,000</h2>
                        
                        <div class="input-group bg-white bg-opacity-10 border border-white border-opacity-25 rounded-pill p-2 mb-4">
                            <input type="text" class="form-control bg-transparent border-0 text-white fw-bold ps-3 shadow-none" value="jbank.app/ref/alex88" id="refLink" readonly>
                            <button class="btn btn-warning rounded-pill px-4 fw-bold" onclick="copyRef()">Copy Link</button>
                        </div>

                        <div class="d-flex gap-3">
                            <button class="btn btn-outline-light rounded-circle" style="width: 45px; height: 45px;"><i class="bi bi-whatsapp"></i></button>
                            <button class="btn btn-outline-light rounded-circle" style="width: 45px; height: 45px;"><i class="bi bi-facebook"></i></button>
                            <button class="btn btn-outline-light rounded-circle" style="width: 45px; height: 45px;"><i class="bi bi-twitter-x"></i></button>
                        </div>
                    </div>
                    <i class="bi bi-gift-fill position-absolute end-0 bottom-0 text-white opacity-10" style="font-size: 150px; transform: translate(20%, 20%);"></i>
                </div>

                <div class="card border-0 shadow-sm rounded-4 p-4 mb-4 border-start border-4 border-success">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 class="fw-bold mb-1">ROI Eligibility Status</h6>
                            <p class="small text-muted mb-0">Requirement: 1 Referral every 30 days.</p>
                        </div>
                        <div class="text-end">
                            <span class="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-bold">ELIGIBLE</span>
                            <small class="d-block text-muted mt-1" style="font-size: 0.7rem;">Expires in 18 days</small>
                        </div>
                    </div>
                </div>

                <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
                    <div class="p-4 border-bottom bg-white">
                        <h6 class="fw-bold mb-0">My Referrals</h6>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover align-middle mb-0">
                            <thead class="bg-light">
                                <tr class="small text-muted">
                                    <th class="ps-4 border-0">USER</th>
                                    <th class="border-0">DATE</th>
                                    <th class="border-0">BONUS</th>
                                    <th class="border-0 pe-4 text-end">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="ps-4">
                                        <div class="d-flex align-items-center">
                                            <div class="rounded-circle bg-warning-subtle text-warning fw-bold d-flex align-items-center justify-content-center me-3" style="width: 35px; height: 35px; font-size: 0.8rem;">EO</div>
                                            <span class="small fw-bold">Emeka Okon</span>
                                        </div>
                                    </td>
                                    <td class="small">Apr 05, 2026</td>
                                    <td class="small fw-bold">₦1,000</td>
                                    <td class="pe-4 text-end"><span class="badge bg-success-subtle text-success rounded-pill">Paid</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="card border-0 shadow-sm rounded-4 p-4 mb-4 text-center" style="background: linear-gradient(135deg, #212529 0%, #343a40 100%); color: white;">
                    <h6 class="opacity-50 small fw-bold mb-3 text-uppercase">Referral Bonus Wallet</h6>
                    <h1 class="fw-bold mb-4">₦14,000</h1>
                    <button class="btn btn-warning w-100 rounded-pill fw-bold py-3 shadow-sm" onclick="withdrawBonus()">
                        Withdraw to Main Wallet
                    </button>
                </div>

                <div class="card border-0 rounded-4 bg-light p-4">
                    <h6 class="fw-bold mb-3"><i class="bi bi-shield-check me-2 text-primary"></i>Rules of Engagement</h6>
                    <div class="small text-muted">
                        <div class="d-flex mb-3">
                            <div class="me-3">✅</div>
                            <p class="mb-0">Bonus is credited **instantly** once your friend completes registration and pays the ₦1,500 account opening fee.</p>
                        </div>
                        <div class="d-flex mb-3">
                            <div class="me-3">✅</div>
                            <p class="mb-0">You must maintain at least **1 active referral per month** to unlock the 30% ROI on your savings slots.</p>
                        </div>
                        <div class="d-flex">
                            <div class="me-3">✅</div>
                            <p class="mb-0">Referral bonuses can be used to fund your **Weekly Savings (₦1,500)** or withdrawn for personal use.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .bg-warning-subtle { background-color: #fef5ed !important; }
        .bg-success-subtle { background-color: #e8f5e9 !important; }
    </style>

    <script>
        function copyRef() {
            const link = document.getElementById('refLink');
            link.select();
            document.execCommand('copy');
            alert('Referral link copied to clipboard!');
        }
        function withdrawBonus() {
            // Logic to move ₦14,000 from Bonus Wallet to Main Wallet
            alert('₦14,000 successfully moved to your main wallet!');
        }
    </script>
    `;
}