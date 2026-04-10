export function ForgotPassword() {
    return /*html*/`
    <div class="container-fluid vh-100 bg-white">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-6 col-lg-4 p-4">
                
                <div class="text-center mb-5">
                    <a href="/" class="text-decoration-none text-dark">
                        <h2 class="fw-bold"><span style="color: #f68b1e;">J-</span>BANK</h2>
                    </a>
                </div>

                <div id="requestForm">
                    <div class="text-center mb-4">
                        <div class="bg-light d-inline-flex p-3 rounded-circle mb-3">
                            <i class="bi bi-shield-lock text-warning fs-2"></i>
                        </div>
                        <h3 class="fw-bold">Reset Password</h3>
                        <p class="text-muted small">Enter your email and we'll send you an OTP to reset your access.</p>
                    </div>

                    <form onsubmit="handleResetRequest(event)">
                        <div class="mb-4">
                            <label class="form-label small fw-bold text-muted text-uppercase">Registered Email</label>
                            <div class="input-group border rounded-3 p-1 bg-light">
                                <span class="input-group-text border-0 bg-transparent text-muted"><i class="bi bi-envelope"></i></span>
                                <input type="email" class="form-control border-0 bg-transparent shadow-none" placeholder="alex@example.com" required>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow mb-3">
                            Send Reset Instructions
                        </button>
                        
                        <div class="text-center">
                            <a href="/login" class="text-muted small text-decoration-none fw-bold">
                                <i class="bi bi-arrow-left me-1"></i> Back to Login
                            </a>
                        </div>
                    </form>
                </div>

                <div id="successMessage" class="d-none text-center">
                    <div class="bg-success-subtle d-inline-flex p-4 rounded-circle mb-4">
                        <i class="bi bi-send-check display-5 text-success"></i>
                    </div>
                    <h3 class="fw-bold">Check your email</h3>
                    <p class="text-muted mb-4">We've sent a 6-digit verification code to <strong>al***@email.com</strong>. Please enter it below.</p>
                    
                    <div class="d-flex justify-content-center gap-2 mb-4">
                        <input type="text" class="form-control text-center fw-bold fs-4 border-0 bg-light rounded-3" style="width: 50px; height: 60px;" maxlength="1">
                        <input type="text" class="form-control text-center fw-bold fs-4 border-0 bg-light rounded-3" style="width: 50px; height: 60px;" maxlength="1">
                        <input type="text" class="form-control text-center fw-bold fs-4 border-0 bg-light rounded-3" style="width: 50px; height: 60px;" maxlength="1">
                        <input type="text" class="form-control text-center fw-bold fs-4 border-0 bg-light rounded-3" style="width: 50px; height: 60px;" maxlength="1">
                    </div>

                    <button class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow mb-4">
                        Verify Code
                    </button>

                    <p class="small text-muted">
                        Didn't receive code? <a href="#" class="text-warning fw-bold text-decoration-none">Resend in 00:59</a>
                    </p>
                </div>

            </div>
        </div>
    </div>

    <script>
        function handleResetRequest(e) {
            e.preventDefault();
            document.getElementById('requestForm').classList.add('d-none');
            document.getElementById('successMessage').classList.remove('d-none');
        }
    </script>
    `;
}