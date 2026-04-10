import { Header } from "./header.js";

export function Dashboard() {
    return /*html*/`
    <div class="container p-0 min-vh-100 d-flex">
        <aside class="d-none d-lg-flex flex-column flex-shrink-0 p-4 bg-white border-end vh-100 sticky-top" style="width: 280px;">
            <div class="mb-5">
                <h2 class="fw-bold fs-3"><span style="color: #f68b1e;">J-</span>BANK</h2>
                <small class="text-muted fw-bold">PREMIUM MEMBER</small>
            </div>

            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item mb-2">
                    <a href="#" class="nav-link active rounded-3 p-3 shadow-sm" style="background-color: var(--jumia-orange); color: white;">
                        <i class="bi bi-grid-1x2-fill me-3"></i> Home
                    </a>
                </li>
                <li class="nav-item mb-2">
                    <a href="#" class="nav-link text-dark p-3 rounded-3 hover-bg-light">
                        <i class="bi bi-basket3 me-3 text-warning"></i> Food Basket
                    </a>
                </li>
                <li class="nav-item mb-2">
                    <a href="#" class="nav-link text-dark p-3 rounded-3 hover-bg-light">
                        <i class="bi bi-currency-bitcoin me-3 text-warning"></i> Crypto Exchange
                    </a>
                </li>
                <li class="nav-item mb-2">
                    <a href="#" class="nav-link text-dark p-3 rounded-3 hover-bg-light">
                        <i class="bi bi-wallet2 me-3"></i> My Wallet
                    </a>
                </li>
                <li class="nav-item mb-2">
                    <a href="#" class="nav-link text-dark p-3 rounded-3 hover-bg-light">
                        <i class="bi bi-credit-card me-3"></i> Virtual Cards
                    </a>
                </li>
                <li class="nav-item mt-4 pt-4 border-top">
                    <a href="#" class="nav-link text-danger p-3 rounded-3 hover-bg-light">
                        <i class="bi bi-box-arrow-left me-3"></i> Logout
                    </a>
                </li>
            </ul>

            <div class="card border-0 bg-dark text-white rounded-4 p-3 mt-4">
                <small class="opacity-50">Concierge</small>
                <p class="small mb-2 fw-bold">Need Help?</p>
                <button class="btn btn-warning btn-sm w-100 rounded-pill fw-bold">Chat with Agent</button>
            </div>
        </aside>

        <main class="flex-grow-1 overflow-auto">
            
            <nav class="navbar navbar-expand bg-white border-bottom sticky-top py-3 px-4">
                <div class="container">
                    <h5 class="fw-bold mb-0">Overview Dashboard</h5>
                    <div class="ms-auto d-flex align-items-center gap-4">
                        <div class="search-box d-none d-md-block">
                            <div class="input-group input-group-sm rounded-pill border px-2">
                                <span class="input-group-text bg-transparent border-0"><i class="bi bi-search"></i></span>
                                <input type="text" class="form-control border-0 shadow-none" placeholder="Search transactions...">
                            </div>
                        </div>
                        <i class="bi bi-bell fs-5 text-muted"></i>
                        <div class="d-flex align-items-center gap-2 ps-3 border-start">
                            <div class="rounded-circle bg-warning text-dark fw-bold d-flex align-items-center justify-content-center" style="width: 35px; height: 35px;">AC</div>
                            <span class="fw-bold small d-none d-md-inline">Alex Chukwuma</span>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="p-4">
                <div class="row g-4 mb-4">
                    <div class="col-xl-8">
                        <div class="card border-0 shadow-sm rounded-4 text-white overflow-hidden" style="background: linear-gradient(135deg, #282828 0%, #454545 100%); min-height: 200px;">
                            <div class="card-body p-4 d-flex flex-column justify-content-between">
                                <div class="d-flex justify-content-between align-items-start">
                                    <div>
                                        <small class="opacity-50 text-uppercase fw-bold" style="letter-spacing: 1px;">Available Balance</small>
                                        <h1 class="display-5 fw-bold mt-1 d-flex"><sup class="mt-3 me-1" style="font-size:xx-small">₦</sup><small style="font-size:x-large">1,450,200.50</small></h1>
                                    </div>
                                    <span class="badge bg-warning text-dark px-3 py-2">History</span>
                                </div>
                                <div class="d-flex gap-3">
                                    <button class="btn btn-warning px-4 py-2 rounded-pill fw-bold">Add Money</button>
                                    <button class="btn btn-outline-light px-4 py-2 rounded-pill fw-bold border-opacity-25">Transfer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card border-0 rounded-4 bg-white h-100">
                            <div class="card-body p-4">
                                <h6 class="fw-bold mb-3">Live Market Rates</h6>
                                <div class="list-group list-group-flush">
                                    <div class="list-group-item d-flex justify-content-between px-0 py-2 border-0">
                                        <span class="small text-muted"><i class="bi bi-currency-bitcoin text-warning me-2"></i>BTC/NGN</span>
                                        <span class="small fw-bold text-success"><sup>₦</sup><small style="font-size:20px">95,450,200</small> <i class="bi bi-caret-up-fill"></i></span>
                                    </div>
                                    <div class="list-group-item d-flex justify-content-between px-0 py-2 border-0">
                                        <span class="small text-muted"><i class="bi bi-gem text-primary me-2"></i>ETH/NGN</span>
                                        <span class="small fw-bold text-danger">₦3,850,000 <i class="bi bi-caret-down-fill"></i></span>
                                    </div>
                                    <div class="list-group-item d-flex justify-content-between px-0 py-2 border-0">
                                        <span class="small text-muted"><i class="bi bi-currency-dollar text-success me-2"></i>USD/NGN</span>
                                        <span class="small fw-bold">₦1,540.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-4 mb-4">
                    <div class="col-lg-8">
                        <div class="bg-white rounded-4  p-4 mb-4">
                            <h6 class="fw-bold mb-4">Quick Services</h6>
                            <div class="row g-2 text-center">
                                ${
                                    [
                                        ['airtime','Airtime','bi-phone-vibrate'],
                                        ['airtime/data','Data','bi-wifi'],
                                        ['bill','Bills','bi-lightning-charge'],
                                        ['/grant','Grants','bi-shield-check'],
                                        ['/loan','Loan','bi-cash-stack'],
                                        ['/saving','Savings','bi-wallet'],
                                ].map(e=>{
                                        return`<a data-link href="${e[0]}" class="col-md-3 text-dark text-decoration-none col-3">
                                            <div class="p-3 bg-light rounded-4 mb-2 hover-shadow transition" style="cursor: pointer;">
                                                <i class="bi ${e[2]} text-warning fs-3"></i>
                                            </div>
                                            <small class="fw-bold">${e[1]}</small>
                                        </a>`
                                    }).join('')
                                }
                            </div>
                        </div>

                        <div class="bg-white rounded-4  p-4">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h6 class="fw-bold mb-0">Active Food Basket Savings</h6>
                                <button class="btn btn-sm btn-outline-warning rounded-pill">Manage Basket</button>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <div class="fs-1 me-3">🧺</div>
                                <div class="flex-grow-1">
                                    <div class="d-flex justify-content-between mb-1">
                                        <span class="fw-bold">Christmas Mega Basket Plan</span>
                                        <span class="text-muted small">₦315,000 / ₦700,000</span>
                                    </div>
                                    <div class="progress rounded-pill" style="height: 12px;">
                                        <div class="progress-bar bg-warning" style="width: 45%"></div>
                                    </div>
                                </div>
                            </div>
                            <p class="small text-muted mb-0"><i class="bi bi-info-circle me-1"></i> You are 12 days ahead of schedule. Keep it up!</p>
                        </div>


                        <div class="bg-white rounded-4 my-3  p-4">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h6 class="fw-bold mb-0">Active Food Basket Savings</h6>
                                <button class="btn btn-sm btn-outline-warning rounded-pill">Manage Basket</button>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <div class="fs-1 me-3">🧺</div>
                                <div class="flex-grow-1">
                                    <div class="d-flex justify-content-between mb-1">
                                        <span class="fw-bold">Christmas Mega Basket Plan</span>
                                        <span class="text-muted small">₦315,000 / ₦700,000</span>
                                    </div>
                                    <div class="progress rounded-pill" style="height: 12px;">
                                        <div class="progress-bar bg-warning" style="width: 45%"></div>
                                    </div>
                                </div>
                            </div>
                            <p class="small text-muted mb-0"><i class="bi bi-info-circle me-1"></i> You are 12 days ahead of schedule. Keep it up!</p>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="bg-white rounded-4 h-100 overflow-hidden">
                            <div class="p-4 border-bottom d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold mb-0">Recent Activity</h6>
                                <a href="#" class="small text-warning text-decoration-none fw-bold">See All</a>
                            </div>
                            <div class="p-0">
                                <div class="p-3 border-bottom d-flex align-items-center">
                                    <div class="rounded-circle bg-light p-2 me-3 text-success"><i class="bi bi-arrow-down-left"></i></div>
                                    <div class="flex-grow-1">
                                        <h6 class="mb-0 small fw-bold">Kuda Transfer</h6>
                                        <small class="text-muted" style="font-size: 0.7rem;">Today, 10:30 AM</small>
                                    </div>
                                    <div class="text-end fw-bold text-success">+ ₦10k</div>
                                </div>
                                <div class="p-3 border-bottom d-flex align-items-center">
                                    <div class="rounded-circle bg-light p-2 me-3 text-warning"><i class="bi bi-basket"></i></div>
                                    <div class="flex-grow-1">
                                        <h6 class="mb-0 small fw-bold">Food Basket Debit</h6>
                                        <small class="text-muted" style="font-size: 0.7rem;">Today, 08:00 AM</small>
                                    </div>
                                    <div class="text-end fw-bold text-danger">- ₦700</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <style>
        .hover-bg-light:hover { background-color: #f8f9fa; }
        .transition { transition: all 0.3s ease; }
        .hover-shadow:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
    </style>
    ${Header()}
    `;
}