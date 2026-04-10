export function LogoutPage() {
    return /*html*/`
    <div class="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
        <div class="row justify-content-center w-100">
            <div class="col-lg-5 col-md-8 text-center">
                
                <div class="mb-4">
                    <div class="bg-white shadow-sm d-inline-flex p-4 rounded-circle mb-3">
                        <i class="bi bi-shield-check text-success display-1"></i>
                    </div>
                    <h2 class="fw-bold">Securely Logged Out</h2>
                    <p class="text-muted">Your J-Bank session has been safely closed.</p>
                </div>

                <div class="card border-0 shadow-sm rounded-5 p-4 mb-4 text-start bg-white">
                    <h6 class="fw-bold mb-3 small text-uppercase text-muted" style="letter-spacing: 1px;">Before you go...</h6>
                    
                    <div class="d-flex align-items-center mb-3">
                        <div class="bg-warning-subtle p-2 rounded-3 me-3 text-warning">
                            <i class="bi bi-calendar-event-fill fs-5"></i>
                        </div>
                        <div>
                            <p class="mb-0 small fw-bold">Next Saturday Deadline</p>
                            <small class="text-muted">April 11, 2026 (3 Days Left)</small>
                        </div>
                    </div>

                    <div class="d-flex align-items-center">
                        <div class="bg-primary-subtle p-2 rounded-3 me-3 text-primary">
                            <i class="bi bi-people-fill fs-5"></i>
                        </div>
                        <div>
                            <p class="mb-0 small fw-bold">Referral Eligibility</p>
                            <small class="text-success">Active • 18 days remaining</small>
                        </div>
                    </div>
                </div>

                <div class="d-grid gap-3">
                    <button class="btn btn-dark py-3 rounded-pill fw-bold shadow" onclick="location.href='/login'">
                        Log Back In
                    </button>
                    <a href="https://jumia.com.ng" class="btn btn-link text-decoration-none text-muted fw-bold small">
                        Continue to Jumia Shopping
                    </a>
                </div>

                <div class="mt-5 p-3 rounded-4 bg-white border border-dashed opacity-75">
                    <p class="small text-muted mb-0">
                        <i class="bi bi-lock-fill me-1"></i> 
                        <strong>Security Tip:</strong> Never share your J-Bank PIN or Referral OTP with anyone, even if they claim to be from Jumia Support.
                    </p>
                </div>

            </div>
        </div>
    </div>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .bg-warning-subtle { background-color: #fef5ed !important; }
        .bg-primary-subtle { background-color: #e3f2fd !important; }
        .border-dashed { border: 2px dashed #dee2e6 !important; }
        
        /* Smooth Fade In */
        .container-fluid {
            animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
    `;
}