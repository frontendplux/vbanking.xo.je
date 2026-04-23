import { company, router, toggleNav } from "../../script.js";
export function Login() {
   window.toggleview = (e) => {
  const input = document.getElementById('pass');

  if (e.classList.contains('bi-eye')) {
    e.classList.remove('bi-eye');
    e.classList.add('bi-eye-slash');
    input.type = "text";
  } else {
    e.classList.add('bi-eye');
    e.classList.remove('bi-eye-slash');
    input.type = "password";
  }
};
    return /*html*/`
    <div class="container-fluid vh-100">
        <div class="row h-100">
            <div class="col-lg-6 d-none d-lg-flex flex-column justify-content-between p-5 text-white" 
                 style="background: linear-gradient(rgba(40, 40, 40, 0.8), rgba(40, 40, 40, 0.8)), 
                        url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1000&q=80'); 
                        background-size: cover; background-position: center;">
                
                <a class="navbar-brand fw-bold fs-3 text-white" href="/">
                    <img src="${company.logo}" style="width: 40px;" alt="">
                </a>

                <div>
                    <h1 class="display-4 fw-bold mb-4">Secure access to your <span class="text-success">Premium</span> wealth.</h1>
                    <p class="lead opacity-75">Your financial security is our top priority. Access your dashboard with multi-layer encryption and biometric-ready protocols.</p>
                </div>

                <div class="d-flex gap-4 small opacity-50">
                    <span>&copy; 2026 ${company.name} Group</span>
                    <a href="#" class="text-white text-decoration-none">Privacy Policy</a>
                    <a href="#" class="text-white text-decoration-none">Terms of Service</a>
                </div>
            </div>
            

            <div class="col-lg-6 d-flex align-items-center justify-content-center bg-white">
                <div class="p-4 p-md-5 w-100" style="max-width: 450px;">
                    <div class="d-lg-none text-center mb-4">
                        <h2 class="fw-bold"><img src="${company.logo}" style="width: 100px;" class="border-2 border p-3 px-4 rounded-circle border-success" alt=""></h2>
                    </div>

                    <h2 class="fw-bold mb-2">Welcome Back</h2>
                    <p class="text-muted mb-4">Enter your credentials to manage your account.</p>

                    <form>
                        <div class="mb-3">
                            <label class="form-label small fw-bold text-uppercase text-muted">Email Address</label>
                            <div class="input-group border rounded-3 p-1">
                                <span class="input-group-text border-0 bg-transparent text-muted"><i class="bi bi-envelope"></i></span>
                                <input type="email" id="email" class="form-control border-0 shadow-none" placeholder="name@example.com" required>
                            </div>
                        </div>

                        <div class="mb-2">
                            <label class="form-label small fw-bold text-uppercase text-muted">Password</label>
                            <div class="input-group border rounded-3 p-1 position-relative">
                                <span class="input-group-text border-0 bg-transparent text-muted"><i class="bi bi-shield-lock"></i></span>
                                <input type="password" id="pass" class="form-control border-0 shadow-none" placeholder="••••••••" required>
                                <i class="bi bi-eye m-2" onclick="toggleview(this)"></i>
                            </div>
                        </div>

                        <div class="text-end mb-4">
                            <a data-link href="/auth/forget-password" class="small fw-bold text-decoration-none text-success">Forgot password?</a>
                        </div>

                        <button type="submit" id="btn-sub" class="btn btn-success w-100 py-3 rounded-pill fw-bold shadow-sm mb-4">
                            Sign In to Account
                        </button>

                        <div class="position-relative mb-4 text-center">
                            <hr>
                            <span class="position-absolute top-50 start-50 translate-middle bg-white px-3 small text-muted">OR CONTINUE WITH</span>
                        </div>

                        <div class="row g-2 mb-4">
                            <div class="col-6 ">
                                <a data-link  href="/auth/login" class="btn btn-outline-light active border text-dark w-100 py-2">
                                    <i class="bi bi-envelope-heart-fill me-2"></i> Email
                                </a>
                            </div>
                            <div class="col-6">
                                <a data-link  href="/auth/login-phone"  class="btn btn-outline-light  border text-dark w-100 py-2">
                                    <i class="bi bi-phone-vibrate-fill me-2"></i> Phone
                                </a>
                            </div>
                        </div>

                        <p class="text-center text-muted small mb-0">
                            Don't have an account? <a data-link href="/auth/signup" class="fw-bold text-decoration-none text-success">Open an account</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
}




export function LoginFunction(){
    const form = document.querySelector('form');

    form.onsubmit = async (e) => {
        e.preventDefault();

        const email = document.getElementById('email');
        const pass  = document.getElementById('pass');
        const btn   = document.getElementById('btn-sub');

        try {
            // UI lock
            btn.disabled = true;
            btn.innerHTML = "<span class='spinner-border spinner-border-sm'></span>";
            email.disabled = true;
            pass.disabled = true;

            const response = await fetch(company.server, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "auth",
                    sub_action: "email",
                    email: email.value.trim(),
                    pass: pass.value.trim()
                })
            });

            const text = await response.text();
            console.log("RAW RESPONSE:", text);

            let req;
            try {
                req = JSON.parse(text);
            } catch {
                throw new Error("Invalid server response");
            }

            if(req.success){
                toggleNav('green','Authentication Successful', req.message);

                localStorage.setItem('user', req.data.id);
                sessionStorage.setItem('token', req.data.uid);

                router('/member');
            } else {
                toggleNav('red', 'Authentication Failed', req.message);
            }

        } catch (err) {
            console.error(err);
            toggleNav('red', 'Error', 'Something went wrong. Try again.');
        } finally {
            // UI unlock (always runs)
            btn.disabled = false;
            btn.innerHTML = "Sign In to Account";
            email.disabled = false;
            pass.disabled = false;
        }
    };
}