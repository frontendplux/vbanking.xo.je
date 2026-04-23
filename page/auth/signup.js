import { company, router, toggleNav } from "../../script.js";

export function SignUp() {
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
    <div class="container-fluid min-vh-100 bg-light">
        <div class="row justify-content-center py-5">
            <div class="col-md-8 col-lg-5">
                
                <div class="text-center mb-4">
                    <h2 class="fw-bold"><img src="${company.logo}" style="width: 90px;" alt=""></h2>
                    <p class="text-muted small text-uppercase fw-bold" style="letter-spacing: 2px;">${company.name} Account Opening</p>
                </div>

                <div class="card border-0 shadow-sm rounded-4 mb-4">
                    <div class="card-body p-3">
                        <div class="d-flex justify-content-between px-3">
                            <div class="text-center">
                                <div class="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center mb-1 mx-auto" style="width: 30px; height: 30px; font-size: 0.8rem;">1</div>
                                <small class="fw-bold">Bio-Data</small>
                            </div>
                            <div class="flex-grow-1 border-top mt-3 mx-2 opacity-25"></div>
                            <div class="text-center">
                                <div class="rounded-circle border d-flex align-items-center justify-content-center mb-1 mx-auto text-muted" style="width: 30px; height: 30px; font-size: 0.8rem;">2</div>
                                <small class="text-muted">Verification</small>
                            </div>
                            <div class="flex-grow-1 border-top mt-3 mx-2 opacity-25"></div>
                            <div class="text-center">
                                <div class="rounded-circle border d-flex align-items-center justify-content-center mb-1 mx-auto text-muted" style="width: 30px; height: 30px; font-size: 0.8rem;">3</div>
                                <small class="text-muted">Welcome</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card border-0 shadow-lg rounded-4 overflow-hidden" id="step1">
                    <div class="card-body p-4 p-md-5">
                        <h4 class="fw-bold mb-4">Personal Information</h4>
                        <form>

                            <div class="d-flex gap-2">
                                <div class="mb-3">
                                <label class="form-label small fw-bold text-muted text-uppercase">Firstname</label>
                                 <div class="input-group border rounded-3 p-1">
                                      <span class="input-group-text border-0 bg-transparent text-muted">
                                    <i class="bi bi-person"></i>
                                </span>
                                <input type="text" id="firstname" class="form-control form-control-lg bg-light border-0" placeholder="firstname">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label small fw-bold text-muted text-uppercase">Lastname</label>
                                <div class="input-group border rounded-3 p-1">
                                      <span class="input-group-text border-0 bg-transparent text-muted">
                                    <i class="bi bi-person"></i>
                                </span>
                                <input type="text" id="lastname" class="form-control form-control-lg bg-light border-0" placeholder="lastname">
                                </div>
                            </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label small fw-bold text-muted text-uppercase">Email Address</label>
                                <div class="input-group border rounded-3 p-1">
                                      <span class="input-group-text border-0 bg-transparent text-muted">
                                    <i class="bi bi-envelope-heart"></i>
                                </span>
                                <input type="email" id="email" class="form-control form-control-lg bg-light border-0" placeholder="Email address">
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="form-label small fw-bold text-muted text-uppercase">Phone Number</label>
                                <div class="input-group border rounded-3 p-1">
                                      <span class="input-group-text border-0 bg-transparent text-muted">
                                    <i class="bi bi-telephone"></i>
                                </span>
                                       <input 
                                    type="tel"
                                    id="phone"
                                    class="form-control border-0 shadow-none"
                                    placeholder="+2348012345678"
                                    inputmode="tel"
                                    autocomplete="tel"
                                    pattern="^\+[1-9]\d{6,14}$"
                                    title="Enter phone in international format (e.g. +2348012345678)"
                                    required>
                            </div>
                            </div>

                            <div class="mb-2">
                                <label class="form-label small fw-bold text-uppercase text-muted">Password</label>
                                <div class="input-group border rounded-3 p-1 position-relative">
                                    <span class="input-group-text border-0 bg-transparent text-muted"><i class="bi bi-shield-lock"></i></span>
                                    <input 
                                        type="password" 
                                        id="pass" 
                                        class="form-control border-0 shadow-none" 
                                        placeholder="••••••••" 
                                        minlength="6"
                                        pattern=".{6,}"
                                        title="Password must be at least 6 characters"
                                        required>
                                    <i class="bi bi-eye m-2" onclick="toggleview(this)"></i>
                                </div>
                            </div>



                            <button id="btn-sub" type="submit" class="btn btn-dark w-100 py-3 my-4 rounded-pill fw-bold shadow">
                                Continue to Verification
                            </button>
                        </form>
                    </div>
                </div>
                <div class="fw-medium my-5 text-center fs-5 text-secondary">I have an Account? <a href="/auth/login" class="text-capitalize text-success" data-link>log in</a></div>
      </div>
            </div>
        </div>
    </div>
    `;
}


export async function submitSignup() {

    document.querySelector('form').onsubmit=async e=>{
        e.preventDefault();
       const btn = document.getElementById("btn-sub");
        const params = new URLSearchParams(window.location.search);

        btn.disabled = true;
        btn.innerHTML = "<span class='spinner-border spinner-border-sm'></span>";
        

       const data = {
            firstname: document.getElementById("firstname").value.trim(),
            lastname: document.getElementById("lastname").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            pass: document.getElementById("pass").value.trim(),
            referral: params.get('ref') || null   // ✅ FIXED KEY
        };



        const req = await fetch(company.server, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                action: "auth",
                sub_action: "signup-1",
                ...data
            })
        }).then(res => res.text());
        
        console.log(req);
        const res = JSON.parse(req);

        if (res.success) {
            toggleNav("green", "Success", res.message);
            sessionStorage.setItem('user',res.data.user);
            sessionStorage.setItem('email', res.data.email)
            router("/auth/sigup-2");
        } else {
            toggleNav("red", "Failed", res.message);
        }
         btn.disabled = false;
        btn.innerHTML = "Continue to Verification";
    }
}