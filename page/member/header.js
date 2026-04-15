export function Header(){
    return /*html*/`
    <div class="d-lg-none">
    <div class="fixed-bottom bg-white border-top shadow-lg pb-0 pt-2" style="border-radius: 20px 20px 0 0;">
        <div class="container">
            <div class="row text-center align-items-center">
                
                <div class="col px-0">
                    <a data-link href="/member" class="text-decoration-none d-flex flex-column align-items-center transition" style="color: #f68b1e;">
                        <i class="bi bi-house-door-fill fs-4"></i>
                        <span style="font-size: 0.65rem; font-weight: 700;">Home</span>
                    </a>
                </div>

                <a data-link href="/foodbasket"  class="col px-0">
                    <a href="#" class="text-decoration-none d-flex flex-column align-items-center text-muted transition">
                        <i class="bi bi-basket3 fs-4"></i>
                        <span style="font-size: 0.65rem; font-weight: 600;">Basket</span>
                    </a>
                </a>

                <a data-link href="/transfer" class="col px-0">
                    <div class="position-relative" style="top: -20px;">
                        <button class="btn btn-warning rounded-circle shadow-lg d-flex align-items-center justify-content-center mx-auto border-4 border-white" 
                                style="width: 55px; height: 55px; background-color: #f68b1e; color: white;">
                            <i class="bi bi-send-fill fs-4"></i>
                        </button>
                        <span class="d-block mt-1 text-dark fw-bold" style="font-size: 0.65rem;">Transfer</span>
                    </div>
                </a>

                <a data-link href="/crypto"  class="col px-0">
                    <a href="#" class="text-decoration-none d-flex flex-column align-items-center text-muted transition">
                        <i class="bi bi-currency-bitcoin fs-4"></i>
                        <span style="font-size: 0.65rem; font-weight: 600;">Crypto</span>
                    </a>
                </a>

                <div class="col px-0">
                    <a data-link href="/profile" class="text-decoration-none d-flex flex-column align-items-center text-muted transition">
                        <div class="bg-light rounded-circle d-flex align-items-center justify-content-center" style="width: 28px; height: 28px;">
                            <i class="bi bi-person-fill" style="font-size: 0.9rem;"></i>
                        </div>
                        <span style="font-size: 0.65rem; font-weight: 600;">Me</span>
                    </a>
                </div>

            </div>
        </div>
    </div>
</div>

<style>
    /* Prevent content from being hidden behind the fixed footer */
    body {
        padding-bottom: 80px;
    }
    
    .transition {
        transition: transform 0.2s ease-in-out;
    }
    
    .col a:active {
        transform: scale(0.9);
    }
</style>

    `
}