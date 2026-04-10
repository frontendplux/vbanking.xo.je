export function Login() {
    return /*html*/`
    <div class="container-fluid vh-100">
        <div class="row h-100">
            <div class="col-lg-6 d-none d-lg-flex flex-column justify-content-between p-5 text-white" 
                 style="background: linear-gradient(rgba(40, 40, 40, 0.8), rgba(40, 40, 40, 0.8)), 
                        url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1000&q=80'); 
                        background-size: cover; background-position: center;">
                
                <a class="navbar-brand fw-bold fs-3 text-white" href="/">
                    <span style="color: #f68b1e;">J-</span>BANK
                </a>

                <div>
                    <h1 class="display-4 fw-bold mb-4">Secure access to your <span style="color: #f68b1e;">Premium</span> wealth.</h1>
                    <p class="lead opacity-75">Your financial security is our top priority. Access your dashboard with multi-layer encryption and biometric-ready protocols.</p>
                </div>

                <div class="d-flex gap-4 small opacity-50">
                    <span>&copy; 2026 J-Bank Group</span>
                    <a href="#" class="text-white text-decoration-none">Privacy Policy</a>
                    <a href="#" class="text-white text-decoration-none">Terms of Service</a>
                </div>
            </div>
            

            <div class="col-lg-6 d-flex align-items-center justify-content-center bg-white">
                <div class="p-4 p-md-5 w-100" style="max-width: 450px;">
                    <div class="d-lg-none text-center mb-4">
                        <h2 class="fw-bold"><span style="color: #f68b1e;">J-</span>BANK</h2>
                    </div>

                    <h2 class="fw-bold mb-2">Welcome Back</h2>
                    <p class="text-muted mb-4">Enter your credentials to manage your account.</p>

                    <form>
                        <div class="mb-3">
                            <label class="form-label small fw-bold text-uppercase text-muted">Email Address</label>
                            <div class="input-group border rounded-3 p-1">
                                <span class="input-group-text border-0 bg-transparent text-muted"><i class="bi bi-envelope"></i></span>
                                <input type="email" class="form-control border-0 shadow-none" placeholder="name@example.com" required>
                            </div>
                        </div>

                        <div class="mb-2">
                            <label class="form-label small fw-bold text-uppercase text-muted">Password</label>
                            <div class="input-group border rounded-3 p-1">
                                <span class="input-group-text border-0 bg-transparent text-muted"><i class="bi bi-shield-lock"></i></span>
                                <input type="password" class="form-control border-0 shadow-none" placeholder="••••••••" required>
                            </div>
                        </div>

                        <div class="text-end mb-4">
                            <a data-link href="/forget-password" class="small fw-bold text-decoration-none" style="color: #f68b1e;">Forgot password?</a>
                        </div>

                        <button type="submit" class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow-sm mb-4" style="background-color: var(--jumia-dark);">
                            Sign In to Account
                        </button>

                        <div class="position-relative mb-4 text-center">
                            <hr>
                            <span class="position-absolute top-50 start-50 translate-middle bg-white px-3 small text-muted">OR CONTINUE WITH</span>
                        </div>

                        <div class="row g-2 mb-4">
                            <div class="col-6">
                                <button type="button" class="btn btn-outline-light border text-dark w-100 py-2 d-flex align-items-center justify-content-center">
                                    <i class="bi bi-google me-2"></i> Google
                                </button>
                            </div>
                            <div class="col-6">
                                <button type="button" class="btn btn-outline-light border text-dark w-100 py-2 d-flex align-items-center justify-content-center">
                                    <i class="bi bi-apple me-2"></i> Apple
                                </button>
                            </div>
                        </div>

                        <p class="text-center text-muted small mb-0">
                            Don't have an account? <a data-link href="/signup" class="fw-bold text-decoration-none" style="color: #f68b1e;">Open an account</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
}