import { company, router, toggleNav } from "../../script.js";

export function Welcome() {
    // Helper to preview the uploaded image
window.previewImage = (input) => {
    const file = input.files[0];

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    const maxSize = 2 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
        toggleNav("red", "Error", "Only JPG, PNG or WEBP allowed");
        input.value = "";
        return;
    }

    if (file.size > maxSize) {
        toggleNav("red", "Error", "Image must be less than 2MB");
        input.value = "";
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('profile-display').src = e.target.result;
        document.getElementById('upload-placeholder').classList.add('d-none');
        document.getElementById('profile-display').classList.remove('d-none');
    };
    reader.readAsDataURL(file);
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
                                <div class="rounded-circle bg-success text-white d-flex align-items-center justify-content-center mb-1 mx-auto" style="width: 30px; height: 30px; font-size: 0.8rem;">
                                    <i class="bi bi-check-lg"></i>
                                </div>
                                <small class="text-muted">Verification</small>
                            </div>
                            <div class="flex-grow-1 border-top mt-3 mx-2 opacity-25"></div>
                            <div class="text-center">
                                <div class="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center mb-1 mx-auto" style="width: 30px; height: 30px; font-size: 0.8rem;">3</div>
                                <small class="fw-bold">Welcome</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
                    <div class="card-body p-4 p-md-5 text-center">
                        <div class="mb-4">
                            <h3 class="fw-bold">Welcome to ${company.name}!</h3>
                            <p class="text-muted">You're almost there. Let's personalize your profile.</p>
                        </div>

                        <div class="mb-4 position-relative d-inline-block">
                            <div class="bg-light rounded-circle border d-flex align-items-center justify-content-center overflow-hidden" style="width: 130px; height: 130px;">
                                <i id="upload-placeholder" class="bi bi-person-fill text-secondary" style="font-size: 4rem;"></i>
                                <img id="profile-display" src="" class="img-fluid d-none" style="width: 100%; height: 100%; object-fit: cover;">
                            </div>
                            <label for="profile-input" class="btn btn-success rounded-circle position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center shadow" style="width: 40px; height: 40px; border: 3px solid #fff;">
                                <i class="bi bi-camera-fill text-white"></i>
                            </label>
                            <input type="file" id="profile-input" class="d-none" accept="image/*" onchange="previewImage(this)">
                        </div>

                        <div class="mb-5">
                            <h5 class="fw-bold mb-1">Add a Profile Photo</h5>
                            <p class="text-muted small px-lg-5">A photo helps your friends and the ${company.name} team recognize you.</p>
                        </div>

                        <div class="d-grid gap-3">
                            <button class="btn btn-dark py-3 rounded-pill fw-bold shadow-sm">
                                Complete Setup
                            </button>
                            <a data-link href="/member" class="btn btn-link text-muted text-decoration-none fw-bold small">
                                Skip for now
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row mt-5 g-3">
                    <div class="col-4 text-center">
                        <div class="bg-white p-3 rounded-4 shadow-sm border-0 h-100">
                            <i class="bi bi-shield-check text-success fs-4"></i>
                            <p class="small fw-bold mb-0 mt-2">Secure</p>
                        </div>
                    </div>
                    <div class="col-4 text-center">
                        <div class="bg-white p-3 rounded-4 shadow-sm border-0 h-100">
                            <i class="bi bi-lightning-charge text-warning fs-4"></i>
                            <p class="small fw-bold mb-0 mt-2">Fast</p>
                        </div>
                    </div>
                    <div class="col-4 text-center">
                        <div class="bg-white p-3 rounded-4 shadow-sm border-0 h-100">
                            <i class="bi bi-headset text-primary fs-4"></i>
                            <p class="small fw-bold mb-0 mt-2">24/7 Support</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `;
}




export function welcomeFunction(){

    const input = document.getElementById("profile-input");
    const btn = document.querySelector(".btn-dark");

    function validateImage(file){

        if(!file) return true; // allow empty (skip)

        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
        const maxSize = 2 * 1024 * 1024; // 2MB

        if(!allowedTypes.includes(file.type)){
            toggleNav("red", "Error", "Only JPG, PNG or WEBP allowed");
            return false;
        }

        if(file.size > maxSize){
            toggleNav("red", "Error", "Image must be less than 2MB");
            return false;
        }

        return true;
    }

    btn.onclick = async () => {

        const file = input.files[0];

        if(!validateImage(file)) return;

        const btnRef = btn;
        btnRef.disabled = true;
        btnRef.innerHTML = "<span class='spinner-border spinner-border-sm'></span>";

        try {

            const formData = new FormData();
            formData.append("action", "auth");
            formData.append("sub_action", "signup-3");
            formData.append("user", localStorage.getItem("user") || "");

            if(file){
                formData.append("profile", file);
            }

            const res = await fetch(company.server, {
                method: "POST",
                body: formData
            }).then(r => r.json());



            if(res.success){
                toggleNav("green", "Success", res.message);
                router('/member')
            }else{
                toggleNav("red", "Error", res.message);
            }

        } catch (err){
            toggleNav("red", "Error", "Upload failed");
        } finally {
            btnRef.disabled = false;
            btnRef.innerHTML = "Complete Setup";
        }
    };
}