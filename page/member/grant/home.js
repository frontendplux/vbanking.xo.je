export function GrantPage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="row mb-5 align-items-center">
            <div class="col-md-8">
                <h3 class="fw-bold mb-1">Empowerment Grants</h3>
                <p class="text-muted small">Non-repayable funding for business growth, education, and social impact.</p>
            </div>
            <div class="col-md-4 text-md-end">
                <div class="p-3 bg-white d-inline-flex align-items-center rounded-4 shadow-sm border">
                    <i class="bi bi-award-fill fs-3 text-warning me-3"></i>
                    <div class="text-start">
                        <small class="text-muted d-block fw-bold" style="font-size: 0.6rem;">COMMUNITY STATUS</small>
                        <h5 class="fw-bold mb-0">Gold Tier</h5>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4 mb-5">
            <div class="col-md-4">
                <div class="card border-0 shadow-sm rounded-5 overflow-hidden h-100 card-hover">
                    <div class="p-4 bg-primary text-white text-center">
                        <i class="bi bi-briefcase-fill display-4"></i>
                        <h5 class="fw-bold mt-3">SME Growth</h5>
                        <small class="opacity-75">Up to ₦1,000,000</small>
                    </div>
                    <div class="card-body p-4">
                        <p class="small text-muted mb-4">Support for small businesses with over 6 months of active J-Bank transactions.</p>
                        <button class="btn btn-dark w-100 rounded-pill fw-bold btn-sm">Check Eligibility</button>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card border-0 shadow-sm rounded-5 overflow-hidden h-100 card-hover">
                    <div class="p-4 bg-success text-white text-center">
                        <i class="bi bi-book-half display-4"></i>
                        <h5 class="fw-bold mt-3">Scholarship Fund</h5>
                        <small class="opacity-75">₦150,000 per Session</small>
                    </div>
                    <div class="card-body p-4">
                        <p class="small text-muted mb-4">Available for students maintaining a consistent Food Basket savings plan.</p>
                        <button class="btn btn-dark w-100 rounded-pill fw-bold btn-sm">Apply Now</button>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card border-0 shadow-sm rounded-5 overflow-hidden h-100 card-hover">
                    <div class="p-4 bg-warning text-dark text-center">
                        <i class="bi bi-flower1 display-4"></i>
                        <h5 class="fw-bold mt-3">Agro-Pioneer</h5>
                        <small class="text-dark opacity-75">Up to ₦2,500,000</small>
                    </div>
                    <div class="card-body p-4">
                        <p class="small text-muted mb-4">Specialized funding for farmers and food processors within the J-Food network.</p>
                        <button class="btn btn-dark w-100 rounded-pill fw-bold btn-sm">Register Interest</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-8">
                <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
                    <div class="card-header bg-white border-0 p-4">
                        <h6 class="fw-bold mb-0">My Applications</h6>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover align-middle mb-0">
                            <thead class="bg-light">
                                <tr class="small text-muted">
                                    <th class="ps-4 border-0">GRANT NAME</th>
                                    <th class="border-0">DATE</th>
                                    <th class="border-0">STATUS</th>
                                    <th class="border-0 pe-4 text-end">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="ps-4">
                                        <h6 class="mb-0 small fw-bold">Women in Tech 2026</h6>
                                        <small class="text-muted">ID: GR-9912</small>
                                    </td>
                                    <td class="small">April 01, 2026</td>
                                    <td><span class="badge bg-warning-subtle text-warning px-3 rounded-pill">In Review</span></td>
                                    <td class="pe-4 text-end"><button class="btn btn-sm btn-light rounded-circle"><i class="bi bi-eye"></i></button></td>
                                </tr>
                                <tr>
                                    <td class="ps-4">
                                        <h6 class="mb-0 small fw-bold">Micro-Agro Seed</h6>
                                        <small class="text-muted">ID: GR-8840</small>
                                    </td>
                                    <td class="small">March 12, 2026</td>
                                    <td><span class="badge bg-success-subtle text-success px-3 rounded-pill">Approved</span></td>
                                    <td class="pe-4 text-end"><button class="btn btn-sm btn-light rounded-circle text-success"><i class="bi bi-download"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card border-0 rounded-4 bg-dark text-white p-4 mb-4">
                    <h6 class="fw-bold text-warning mb-3">Impact Tracker</h6>
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <h2 class="fw-bold mb-0">₦450k</h2>
                        <small class="opacity-50">Total Grants Received</small>
                    </div>
                    <div class="small opacity-75">
                        <i class="bi bi-info-circle me-1"></i> You are in the top 5% of J-Bank community contributors.
                    </div>
                </div>

                <div class="p-4 rounded-4 bg-white shadow-sm">
                    <h6 class="fw-bold mb-3">Improve Your Chances</h6>
                    <div class="d-flex gap-3 mb-3">
                        <div class="text-warning"><i class="bi bi-1-circle-fill fs-4"></i></div>
                        <p class="small text-muted mb-0">Maintain an active **Food Basket** for at least 3 months.</p>
                    </div>
                    <div class="d-flex gap-3 mb-3">
                        <div class="text-warning"><i class="bi bi-2-circle-fill fs-4"></i></div>
                        <p class="small text-muted mb-0">Link your BVN and verify your business address.</p>
                    </div>
                    <div class="d-flex gap-3">
                        <div class="text-warning"><i class="bi bi-3-circle-fill fs-4"></i></div>
                        <p class="small text-muted mb-0">Achieve a **Gold Tier** community status.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .card-hover { transition: transform 0.3s ease; cursor: pointer; }
        .card-hover:hover { transform: translateY(-10px); }
        .bg-warning-subtle { background-color: #fff9ef !important; }
        .bg-success-subtle { background-color: #e8f5e9 !important; }
</style>
    `;
}