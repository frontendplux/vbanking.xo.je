import { company, router, toggleNav } from "../../script.js";

export function VerifyEmail() {
    // Helper to handle OTP input focus jumping
    window.handleOtpPaste = (e) => {
    e.preventDefault();

    const data = (e.clipboardData || window.clipboardData)
        .getData("text")
        .replace(/\D/g, ""); // remove non-numbers

    const inputs = document.querySelectorAll("#otp-form input");

    inputs.forEach((input, index) => {
        input.value = data[index] || "";
    });

    // focus last filled input
    const lastIndex = Math.min(data.length, inputs.length) - 1;
    if (inputs[lastIndex]) {
        inputs[lastIndex].focus();
    }
};

    window.handleOtpInput = (e) => {
        const input = e.target;
        if (input.value.length >= 1) {
            const next = input.nextElementSibling;
            if (next && next.tagName === 'INPUT') {
                next.focus();
            }
        }
    };

    window.handleOtpKeydown = (e) => {
        if (e.key === 'Backspace' && !e.target.value) {
            const prev = e.target.previousElementSibling;
            if (prev && prev.tagName === 'INPUT') {
                prev.focus();
            }
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
                                <div class="rounded-circle bg-success text-white d-flex align-items-center justify-content-center mb-1 mx-auto" style="width: 30px; height: 30px; font-size: 0.8rem;">
                                    <i class="bi bi-check-lg"></i>
                                </div>
                                <small class="text-muted">Bio-Data</small>
                            </div>
                            <div class="flex-grow-1 border-top mt-3 mx-2 opacity-25"></div>
                            <div class="text-center">
                                <div class="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center mb-1 mx-auto" style="width: 30px; height: 30px; font-size: 0.8rem;">2</div>
                                <small class="fw-bold">Verification</small>
                            </div>
                            <div class="flex-grow-1 border-top mt-3 mx-2 opacity-25"></div>
                            <div class="text-center">
                                <div class="rounded-circle border d-flex align-items-center justify-content-center mb-1 mx-auto text-muted" style="width: 30px; height: 30px; font-size: 0.8rem;">3</div>
                                <small class="text-muted">Welcome</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
                    <div class="card-body p-4 p-md-5 text-center">
                        <div class="mb-4">
                            <div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                                <i class="bi bi-patch-check text-success fs-1"></i>
                            </div>
                            <h4 class="fw-bold">Verify your Email</h4>
                            <p class="text-muted">We've sent a 6-digit code to <br> <span class="text-dark fw-bold">${sessionStorage.getItem('email') || ''}</span></p>
                        </div>

                        <form id="otp-form">
                            <div class="d-flex justify-content-center gap-2 mb-4">
                                <input type="text" class="form-control form-control-lg text-center p-1 fw-bold border-2 rounded-3" style="width: 45px; height: 55px;" maxlength="1" inputmode="numeric" oninput="handleOtpInput(event)" onkeydown="handleOtpKeydown(event)" onpaste="handleOtpPaste(event)">
                                <input type="text" class="form-control form-control-lg text-center p-1 fw-bold border-2 rounded-3" style="width: 45px; height: 55px;" maxlength="1" inputmode="numeric" oninput="handleOtpInput(event)" onkeydown="handleOtpKeydown(event)" onpaste="handleOtpPaste(event)">
                                <input type="text" class="form-control form-control-lg text-center p-1 fw-bold border-2 rounded-3" style="width: 45px; height: 55px;" maxlength="1" inputmode="numeric" oninput="handleOtpInput(event)" onkeydown="handleOtpKeydown(event)" onpaste="handleOtpPaste(event)">
                                <input type="text" class="form-control form-control-lg text-center p-1 fw-bold border-2 rounded-3" style="width: 45px; height: 55px;" maxlength="1" inputmode="numeric" oninput="handleOtpInput(event)" onkeydown="handleOtpKeydown(event)" onpaste="handleOtpPaste(event)">
                                <input type="text" class="form-control form-control-lg text-center p-1 fw-bold border-2 rounded-3" style="width: 45px; height: 55px;" maxlength="1" inputmode="numeric" oninput="handleOtpInput(event)" onkeydown="handleOtpKeydown(event)" onpaste="handleOtpPaste(event)">
                                <input type="text" class="form-control form-control-lg text-center p-1 fw-bold border-2 rounded-3" style="width: 45px; height: 55px;" maxlength="1" inputmode="numeric" oninput="handleOtpInput(event)" onkeydown="handleOtpKeydown(event)" onpaste="handleOtpPaste(event)">
                            </div>

                            <button type="submit" class="btn btn-dark w-100 py-3 mb-3 rounded-pill fw-bold shadow">
                                Verify Account
                            </button>
                            
                            <p class="text-muted small">
                                Didn't receive the code? <br>
                                <a href="#" class="text-success text-decoration-none fw-bold">Resend Code</a> or <a href="#" class="text-secondary text-decoration-none">Change Email</a>
                            </p>
                        </form>
                    </div>
                </div>

                <div class="mt-4 text-center">
                    <a href="/auth/signup" class="text-muted text-decoration-none small" data-link>
                        <i class="bi bi-arrow-left me-1"></i> Back to Sign Up
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;
}



export function verifyEmailFunction(){
    if(sessionStorage.getItem('email') == null){
        router('/auth/signup');
    }
    function getOtp() {
        const inputs = document.querySelectorAll("#otp-form input");
        let otp = "";

        inputs.forEach(input => {
            otp += input.value.trim();
        });

        return otp;
    }

    function validateOtp() {
        const otp = getOtp();

        if (otp.length !== 6) {
            toggleNav("red", "Error", "Enter 6-digit OTP");
            return false;
        }

        if (!/^[0-9]{6}$/.test(otp)) {
            toggleNav("red", "Error", "Invalid OTP format");
            return false;
        }

        return otp;
    }

    document.getElementById("otp-form").onsubmit = async (e) => {
        e.preventDefault();

        const user_id = sessionStorage.getItem('user');
        if (!user_id) {
            toggleNav("red", "Error", "Session expired");
            router('/auth/signup');
            return;
        }

        const otp = validateOtp();
        if (!otp) return;

        const btn = e.target.querySelector("button");
        btn.disabled = true;
        btn.innerHTML = "<span class='spinner-border spinner-border-sm'></span>";

        try {
            const res = await fetch(company.server, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "auth",
                    sub_action:"signup-2",
                    user_id: user_id,
                    otp: otp
                })
            }).then(r => r.json());

            if (res.success) {
                toggleNav("green", "Verified", res.message);
                localStorage.setItem('user', res.data.id);
                sessionStorage.setItem('token', res.data.uid);
                router("/auth/signup-3");
            } else {
                toggleNav("red", "Failed", res.message);
            }

        } catch (err) {
            toggleNav("red", "Error", "Network issue");
        } finally {
            btn.disabled = false;
            btn.innerHTML = "Verify Account";
        }
    };
}



