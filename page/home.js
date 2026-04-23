import { company, SEO } from "../script.js";


export function Home() {
    SEO({
  title: "Pygg - Secure Banking App in Nigeria",
  description: "Send money instantly, pay bills, and manage your finances with Pygg. Fast, secure, and built for Nigerians.",
  keywords: "Pygg, banking app Nigeria, fintech app, transfer money Nigeria",
  image: "/upload/icon/pygg.png",
  url: "https://pygg.com.ng"
});

    return /*html*/`
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
        <div class="container">
            <a class="navbar-brand fw-bold d-flex align-items-center" href="#" style="color: var(--jumia-dark);">
              <img src="/upload/icon/pygg.png" width="40px" height="40px" alt="pygg logo">
            </a>
             <div class="d-flex gap-2">
                <div class="d-block d-lg-none">
                    <a data-link class="btn btn-outline-dark px-4 rounded-pill" href="/auth/">Login</a>
                     <a data-link href="/auth/signup" class="btn btn-success px-4 rounded-pill shadow-sm">Open Account</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
             </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
                    <li class="nav-item"><a  class="nav-link px-3" href="#">Personal</a></li>
                    <li class="nav-item"><a class="nav-link px-3" href="#">Business</a></li>
                    <li class="nav-item"><a class="nav-link px-3" href="#">Invest</a></li>
                    <li class="nav-item px-lg-3 d-none d-lg-block">
                        <a data-link class="btn btn-outline-dark px-4 rounded-pill" href="/auth/">Login</a>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        <a data-link href="/auth/signup" class="btn btn-success px-4 rounded-pill shadow-sm">Open Account</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="py-5" style="background: linear-gradient(180deg, #fff 0%, #fdf5ed 100%);">
        <div class="container py-5">
            <div class="row align-items-center g-5 p-0">
                <div class="col-lg-6">
                    <h1 class="display-3 fw-bold mb-4" style="line-height: 1.1;">Banking that <span class="text-success">moves</span> with you.</h1>
                    <p class="lead text-muted mb-5">Experience the premium side of finance. Zero hidden fees, instant <span class="text-success">${company.name}</span> rewards, and a card that makes a statement.</p>
                    <div class="d-flex gap-3">
                        <a data-link href="/auth/signup" class="btn btn-success btn-lg px-4 py-3 shadow">Get Started Now</a>
                        <a data-link href="/help/terms-and-conditions" class="btn btn-link text-dark fw-bold text-decoration-none d-flex align-items-center">
                            <i class="bi bi-play-circle-fill fs-3 me-2 text-success"></i> See how it works
                        </a>
                    </div>
                    <div class="mt-5 d-flex align-items-center gap-4 opacity-75">
                        <small class="fw-bold">TRUSTED BY</small>
                        <i class="bi bi-apple fs-4"></i>
                        <i class="bi bi-google fs-4"></i>
                        <i class="bi bi-stripe fs-4"></i>
                    </div>
                </div>
                <div class="col-lg-6 d-md-block position-relative text-center">
                    <div class="card-stack position-relative">
                        <div class="card shadow-lg border-0  text-white p-4 mx-auto " style="background-image:linear-gradient(#00000031,#00000031), url(${company.atmLogo}); background-position: center; background-repeat: no-repeat;
    background-size: cover;  width: 350px; height: 220px; border-radius: 15px; transform: rotate(-5deg); z-index: 2;">
                           <div class="d-flex justify-content-between">
                               <small class="text-success text-uppercase">${company.name}</small>
                               <img src="${company.logo}"  width="30px" alt="logo">
                           </div>
                           <div class="mt-auto">
                               <div class="h5 mb-1" style="letter-spacing: 2px;">**** **** **** 8842</div>
                               <small class="opacity-50 text-white">ALEX CHUKWUMA</small>
                           </div>
                        </div>
                        <div class="card shadow border-0  position-absolute bg-success p-4" style="max-width: 350px; height: 220px; border-radius: 15px; top: 20px;  left: 0; right: 0; margin: auto; transform: rotate(5deg); z-index: 1;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="py-5 bg-white">
        <div class="container py-5 text-center">
            <h6 class="text-uppercase fw-bold text-success" style="letter-spacing: 2px;">Why Choose Us</h6>
            <h2 class="fw-bold mb-5">Smart features for smart people</h2>
            <div class="d-lg-flex g-4 mt-2">
                <div class="col-md-4">
                    <div class="p-4 border-0 text-center  h-100">
                        <div class="bg-light rounded-circle d-flex mx-auto justify-content-center align-items-center p-4 mb-4" style="width: 100px; height:100px">
                            <i class="bi bi-shield-lock-fill fs-1 text-dark"></i>
                        </div>
                        <h4 class="fw-bold">Bank-Grade Security</h4>
                        <p class="text-muted">Multi-layered encryption and biometric locks to keep your money safe 24/7.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4 border-0 h-100">
                        <div class="bg-light rounded-circle d-flex justify-content-center align-items-center mx-auto p-4 mb-4 text-warning"  style="width: 100px; height:100px">
                            <i class="bi bi-lightning-charge-fill fs-2 text-success"></i>
                        </div>
                        <h4 class="fw-bold">Instant Transfers</h4>
                        <p class="text-muted">Send and receive money within seconds to any local or international account.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4 border-0 h-100">
                        <div class="bg-light rounded-circle d-flex justify-content-center align-items-center mx-auto p-4 mb-4"   style="width: 100px; height:100px">
                            <i class="bi bi-gift-fill fs-2 text-dark"></i>
                        </div>
                        <h4 class="fw-bold">${company.name} Cashback</h4>
                        <p class="text-muted">Earn 5% cashback on every purchase made by <span class="text-success">${company.name}</span> using your ${company.name} card.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>



<section class="py-5 bg-white">
    <div class="container py-5">
        <div class="d-lg-flex align-items-center">
            <div class="col-lg-6">
                <div class="position-relative">
                    <img src="${company.aboutImg}" 
                         class="img-fluid rounded-4 shadow-lg" 
                         alt="Premium Banking Experience">
                    <div class="position-absolute bottom-0 start-0 bg-white p-4 shadow-lg rounded-4 m-3 d-none d-md-block" style="max-width: 200px;">
                        <h1 class="fw-bold mb-0 text-warning">10+</h1>
                        <p class="small text-muted mb-0 fw-bold">Years of Trust across Africa</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 px-3">
                <h6 class="text-uppercase fw-bold mb-3 text-success" style="letter-spacing: 2px;">Our Story</h6>
                <h2 class="display-5 fw-bold mb-4">Redefining the <span style="color: var(--jumia-dark);">Premium</span> Standard.</h2>
                <p class="lead text-muted mb-4">
                    ${company.name} was born from a simple idea: Banking should be as seamless as your favorite shopping experience. 
                </p>
                <p class="text-muted mb-5">
                    We've combined ${company.name} deep understanding of digital ecosystems with world-class financial security. Our mission is to provide high-net-worth individuals and growing businesses with tools that don't just store money, but accelerate wealth.
                </p>

                <div class="row p-0 g-4">
                    <div class="col-6">
                        <div class="d-flex align-items-center">
                            <h3 class="fw-bold mb-0 me-2">2M+</h3>
                            <span class="small text-muted lh-sm">Active<br>Users</span>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center">
                            <h3 class="fw-bold mb-0 me-2">15</h3>
                            <span class="small text-muted lh-sm">African<br>Countries</span>
                        </div>
                    </div>
                </div>

                <div class="mt-5">
                    <button class="btn btn-outline-success rounded-pill px-4 py-2 fw-bold">
                        Read Annual Report 2026 <i class="bi bi-file-earmark-pdf ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="container">
    <div class="d-lg-flex g-0 rounded-4 overflow-hidden shadow-sm border">
        <div class="col-md-4 bg-success text-white p-4 text-center">
            <h5 class="fw-bold mb-1">Our Mission</h5>
            <p class="small opacity-75 mb-0">Democratizing premium wealth management.</p>
        </div>
        <div class="col-md-4 bg-white p-4 text-center border-start border-end">
            <h5 class="fw-bold mb-1">Our Vision</h5>
            <p class="small text-muted mb-0">To be Africa's #1 digital private bank by 2030.</p>
        </div>
        <div class="col-md-4 bg-white p-4 text-center">
            <h5 class="fw-bold mb-1 text-success">Our Values</h5>
            <p class="small text-muted mb-0">Integrity, Innovation, and Impact.</p>
        </div>
    </div>
</div>


    <section class="py-5 bg-light" id="contact">
    <div class="container py-5">
        <div class="row p-0 g-5 align-items-center">
            <div class="col-lg-5">
                <h6 class="text-uppercase fw-bold mb-3 text-success" style=" letter-spacing: 2px;">Contact Us</h6>
                <h2 class="display-6 fw-bold mb-4">We're here to help you grow.</h2>
                <p class="text-muted mb-5">Have questions about our premium plans or need technical support? Reach out to our 24/7 dedicated concierge team.</p>
                
                <div class="d-flex align-items-center mb-4">
                    <div class="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                        <i class="bi bi-geo-alt-fill text-warning"></i>
                    </div>
                    <div>
                        <h6 class="mb-0 fw-bold">Headquarters</h6>
                        <small class="text-muted">10 Kingsway Road, Ikoyi, Lagos, Nigeria</small>
                    </div>
                </div>

                <div class="d-flex align-items-center mb-4">
                    <div class="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                        <i class="bi bi-telephone-fill text-warning"></i>
                    </div>
                    <div>
                        <h6 class="mb-0 fw-bold">Premium Support</h6>
                        <small class="text-muted">+234 800 J-BANK-PREM</small>
                    </div>
                </div>

                <div class="d-flex align-items-center">
                    <div class="bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                        <i class="bi bi-envelope-at-fill text-warning"></i>
                    </div>
                    <div>
                        <h6 class="mb-0 fw-bold">Email Us</h6>
                        <small class="text-muted">concierge@j-bank.com</small>
                    </div>
                </div>
            </div>

            <div class="col-lg-7">
                <div class="card border-0 shadow-lg p-4 p-md-5 rounded-4">
                    <form>
                        <div class="row p-0 g-3">
                            <div class="col-md-6">
                                <label class="form-label small fw-bold text-uppercase">Full Name</label>
                                <input type="text" class="form-control form-control-lg bg-light border-0" placeholder="John Doe">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label small fw-bold text-uppercase">Email Address</label>
                                <input type="email" class="form-control form-control-lg bg-light border-0" placeholder="john@example.com">
                            </div>
                            <div class="col-12">
                                <label class="form-label small fw-bold text-uppercase">Subject</label>
                                <select class="form-select form-select-lg bg-light border-0">
                                    <option selected>Account Opening</option>
                                    <option>Investment Inquiry</option>
                                    <option>Report a Card Issue</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label class="form-label small fw-bold text-uppercase">Message</label>
                                <textarea class="form-control bg-light border-0" rows="4" placeholder="How can we help?"></textarea>
                            </div>
                            <div class="col-12 mt-4">
                                <button type="submit" class="btn btn-dark btn-lg w-100 py-3 fw-bold shadow-sm" style="background-color: var(--jumia-dark);">
                                    Send Message <i class="bi bi-send ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="py-5 bg-white" id="services">
    <div class="container py-5">
        <div class="text-center mb-5">
            <h6 class="text-uppercase fw-bold" style="color: #f68b1e; letter-spacing: 2px;">Our Premium Services</h6>
            <h2 class="display-6 fw-bold">Financial Solutions for Every Need</h2>
        </div>

        <div class="row p-0 g-4 mb-5">
            <div class="col-md-4">
                <div class="card card-premium p-4 border-0 shadow-sm h-100 bg-light">
                    <i class="bi bi-cash-coin fs-1 text-warning mb-3"></i>
                    <h4 class="fw-bold">Loans & Grants</h4>
                    <p class="text-muted small">Access quick business loans or non-repayable grants tailored for growth.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-premium p-4 border-0 shadow-sm h-100 bg-light">
                    <i class="bi bi-wallet2 fs-1 text-warning mb-3"></i>
                    <h4 class="fw-bold">Digital Wallet</h4>
                    <p class="text-muted small">Securely store, send, and receive funds instantly with zero transaction fees.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-premium p-4 border-0 shadow-sm h-100 bg-light">
                    <i class="bi bi-piggy-bank fs-1 text-warning mb-3"></i>
                    <h4 class="fw-bold">Premium Savings & Dues</h4>
                    <p class="text-muted small">Automated savings and organized collection for group dues and associations.</p>
                </div>
            </div>
        </div>

        <div class="text-center mt-5 mb-4">
            <h3 class="fw-bold">🧺 Food Basket Savings</h3>
            <p class="text-muted">Save daily for 350 days and secure your family's festive supplies.</p>
        </div>

        <div class="row p-0 g-4">
            <div class="col-lg-3 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-4 overflow-hidden border-top border-warning border-5">
                    <div class="card-body p-4">
                        <div class="badge bg-dark text-white mb-2">ULTIMATE</div>
                        <h4 class="fw-bold mb-0">₦700 <span class="small text-muted fw-light">/ daily</span></h4>
                        <hr>
                        <ul class="list-unstyled small mb-4" style="line-height: 1.8;">
                            <li><i class="bi bi-check2 text-success me-2"></i><strong>1 Bag of Rice</strong></li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1 Carton Tomatoes</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>10L Veg Oil / 5L Palm Oil</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1 Carton Spaghetti / Indomie</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>5 Tubers of Yam</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>Big Milk & Choco Beverage</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>Basin of Garri</li>
                            <li><i class="bi bi-gift text-warning me-2"></i><strong>Special Gift Item</strong></li>
                        </ul>
                        <button class="btn btn-dark w-100 rounded-pill fw-bold mt-auto">Choose Plan</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-4 overflow-hidden border-top border-warning border-5">
                    <div class="card-body p-4">
                        <div class="badge bg-warning text-dark mb-2">STANDARD</div>
                        <h4 class="fw-bold mb-0">₦300 <span class="small text-muted fw-light">/ daily</span></h4>
                        <hr>
                        <ul class="list-unstyled small mb-4" style="line-height: 1.8;">
                            <li><i class="bi bi-check2 text-success me-2"></i><strong>50kg Supplies</strong></li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1/2 Carton Tomatoes</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>5L Veg Oil / 2L Palm Oil</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1/2 Carton Spaghetti</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>5 Tubers of Yam</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>400g Milk & Milo</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>2kg Semo / Wheat</li>
                            <li><i class="bi bi-gift text-warning me-2"></i>Gift Item</li>
                        </ul>
                        <button class="btn btn-outline-dark w-100 rounded-pill fw-bold mt-auto">Choose Plan</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-4 overflow-hidden border-top border-warning border-5">
                    <div class="card-body p-4">
                        <div class="badge bg-light text-dark border mb-2">BASIC</div>
                        <h4 class="fw-bold mb-0">₦200 <span class="small text-muted fw-light">/ daily</span></h4>
                        <hr>
                        <ul class="list-unstyled small mb-4" style="line-height: 1.8;">
                            <li><i class="bi bi-check2 text-success me-2"></i><strong>1/2 Bag of Rice</strong></li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1 Roll Sachet Tomatoes</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1L Veg Oil / 1L G.Nut Oil</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>3 Packets Spaghetti</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>2 Tubers of Yam</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>400g Milk / Milo</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1kg Semo / Wheat</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>3 Sardines</li>
                        </ul>
                        <button class="btn btn-outline-dark w-100 rounded-pill fw-bold mt-auto">Choose Plan</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="card border-0 shadow-sm h-100 rounded-4 overflow-hidden border-top border-warning border-5">
                    <div class="card-body p-4">
                        <div class="badge bg-light text-dark border mb-2">ECONOMY</div>
                        <h4 class="fw-bold mb-0">₦100 <span class="small text-muted fw-light">/ daily</span></h4>
                        <hr>
                        <ul class="list-unstyled small mb-4" style="line-height: 1.8;">
                            <li><i class="bi bi-check2 text-success me-2"></i><strong>10kg Rice</strong></li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1 Roll Sachet Tomatoes</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1 Pkt Knorr</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1 Spaghetti</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1L Groundnut Oil</li>
                            <li><i class="bi bi-check2 text-success me-2"></i>1L Palm Oil</li>
                        </ul>
                        <button class="btn btn-outline-dark w-100 rounded-pill fw-bold mt-auto">Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5 bg-light" id="digital-services">
    <div class="container py-5">
        <div class="row p-0 g-5 align-items-center">
            
            <div class="col-lg-6 order-2 order-lg-1">
                <div class="position-relative">
                    <div class="card border-0 shadow-lg p-4 text-white position-relative overflow-hidden" 
                         style="background: linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%); border-radius: 20px; z-index: 2;">
                        <div class="d-flex justify-content-between mb-5">
                            <span class="fw-bold opacity-75">PREMIUM VIRTUAL</span>
                            <i class="bi bi-cpu fs-3 text-warning"></i>
                        </div>
                        <h3 class="mb-4" style="letter-spacing: 4px;">4412 8821 0045 9901</h3>
                        <div class="d-flex justify-content-between align-items-end">
                            <div>
                                <small class="d-block opacity-50 small text-uppercase">Card Holder</small>
                                <span class="fw-semibold">JUMIA CUSTOMER</span>
                            </div>
                            <div>
                                <small class="d-block opacity-50 small text-uppercase">Expiry</small>
                                <span class="fw-semibold">12/28</span>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" height="30" alt="Mastercard">
                        </div>
                        <div class="position-absolute" style="width: 150px; height: 150px; background: var(--jumia-orange); filter: blur(80px); bottom: -50px; right: -50px; opacity: 0.3;"></div>
                    </div>
                    
                    <div class="position-absolute top-0 start-0 translate-middle-y bg-white shadow-sm p-3 rounded-3 d-flex align-items-center" style="z-index: 3; margin-top: -20px;">
                        <i class="bi bi-globe2 text-primary me-2"></i>
                        <span class="small fw-bold">Dollar Spending Enabled</span>
                    </div>
                    <div class="position-absolute bottom-0 end-0 translate-middle-y bg-white shadow-sm p-3 rounded-3 d-flex align-items-center" style="z-index: 3; margin-bottom: -20px;">
                        <i class="bi bi-shield-check text-success me-2"></i>
                        <span class="small fw-bold">Instant Freeze/Unfreeze</span>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 order-1 order-lg-2">
                <h6 class="text-uppercase fw-bold mb-3" style="color: #f68b1e; letter-spacing: 2px;">Digital Lifestyle</h6>
                <h2 class="display-6 fw-bold mb-4">Bills and payments, <span class="text-warning">simplified.</span></h2>
                <p class="text-muted mb-4">From global shopping to local utilities, manage everything from one dashboard with zero downtime.</p>
                
                <div class="row p-0 g-4">
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <div class="bg-white p-2 rounded shadow-sm me-3">
                                <i class="bi bi-phone-vibrate text-warning fs-4"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-1">VTU & Data</h6>
                                <p class="small text-muted">Instant top-up for all networks with up to 3% cashback.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <div class="bg-white p-2 rounded shadow-sm me-3">
                                <i class="bi bi-lightning-charge text-warning fs-4"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-1">Utility Bills</h6>
                                <p class="small text-muted">Pay Electricity, Cable TV (DSTV/GOTV), and Water bills instantly.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <div class="bg-white p-2 rounded shadow-sm me-3">
                                <i class="bi bi-card-checklist text-warning fs-4"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-1">Virtual Cards</h6>
                                <p class="small text-muted">Create unlimited virtual NGN/USD cards for safe online shopping.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-start">
                            <div class="bg-white p-2 rounded shadow-sm me-3">
                                <i class="bi bi-arrow-repeat text-warning fs-4"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-1">Recurrent Payments</h6>
                                <p class="small text-muted">Set and forget. Automate your monthly bills and subscriptions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-5">
                    <a data-link href="/bill" class="btn btn-jumia px-5 py-3 rounded-pill fw-bold shadow">Start Paying Bills</a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .btn-jumia {
    background-color: #f68b1e;
    color: white;
    border: none;
    transition: all 0.3s ease;
}
.btn-jumia:hover {
    background-color: #e07b19;
    color: white;
    transform: translateY(-2px);
}
</style>
<section class="py-5 bg-white" id="digital-assets">
    <div class="container py-5">
        <div class="row p-0  g-5 align-items-center">
            
            <div class="col-lg-6">
                <h6 class="text-uppercase fw-bold mb-3" style="color: #f68b1e; letter-spacing: 2px;">Exchange & Assets</h6>
                <h2 class="display-6 fw-bold mb-4">Trade Assets at <span class="text-warning">Real-Time</span> Rates.</h2>
                <p class="text-muted mb-4">Whether it's Bitcoin, Ethereum, or a stray Amazon Gift Card, J-Bank Premium provides a secure bridge between your digital assets and your local bank account.</p>
                
                <div class="row p-0 g-3 mt-2">
                    <div class="col-sm-6">
                        <div class="p-3 border rounded-3 bg-light">
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-currency-bitcoin text-warning fs-3 me-2"></i>
                                <h6 class="fw-bold mb-0">Crypto Trade</h6>
                            </div>
                            <p class="small text-muted mb-0">Buy and sell BTC, ETH, and USDT instantly with your NGN wallet.</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="p-3 border rounded-3 bg-light">
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-gift-fill text-primary fs-3 me-2"></i>
                                <h6 class="fw-bold mb-0">Gift Cards</h6>
                            </div>
                            <p class="small text-muted mb-0">Cash out iTunes, Amazon, and Steam cards at premium market rates.</p>
                        </div>
                    </div>
                </div>

                <div class="mt-5 d-flex gap-3">
                    <button class="btn btn-dark px-4 py-2 rounded-pill fw-bold shadow">Start Trading</button>
                    <button class="btn btn-outline-dark px-4 py-2 rounded-pill fw-bold">View Rates</button>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
                    <div class="card-header bg-white py-3 border-bottom">
                        <div class="d-flex justify-content-between align-items-center">
                            <h6 class="fw-bold mb-0">Live Market Rates</h6>
                            <span class="badge bg-success-subtle text-success border border-success">Live Updates</span>
                        </div>
                    </div>
                    <div class="list-group list-group-flush">
                        <div class="list-group-item d-flex justify-content-between align-items-center py-3">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-warning bg-opacity-10 p-2 me-3">
                                    <i class="bi bi-currency-bitcoin text-warning fs-5"></i>
                                </div>
                                <div>
                                    <h6 class="mb-0 fw-bold">Bitcoin</h6>
                                    <small class="text-muted">BTC / NGN</small>
                                </div>
                            </div>
                            <div class="text-end">
                                <div class="fw-bold">₦95,450,200</div>
                                <small class="text-success"><i class="bi bi-caret-up-fill"></i> 1.2%</small>
                            </div>
                        </div>
                        <div class="list-group-item d-flex justify-content-between align-items-center py-3">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-primary bg-opacity-10 p-2 me-3">
                                    <i class="bi bi-gem text-primary fs-5"></i>
                                </div>
                                <div>
                                    <h6 class="mb-0 fw-bold">Ethereum</h6>
                                    <small class="text-muted">ETH / NGN</small>
                                </div>
                            </div>
                            <div class="text-end">
                                <div class="fw-bold">₦3,850,000</div>
                                <small class="text-danger"><i class="bi bi-caret-down-fill"></i> 0.4%</small>
                            </div>
                        </div>
                        <div class="list-group-item d-flex justify-content-between align-items-center py-3">
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-info bg-opacity-10 p-2 me-3">
                                    <i class="bi bi-apple text-info fs-5"></i>
                                </div>
                                <div>
                                    <h6 class="mb-0 fw-bold">Apple Gift Card</h6>
                                    <small class="text-muted">Standard Rate</small>
                                </div>
                            </div>
                            <div class="text-end">
                                <div class="fw-bold">₦980 / $</div>
                                <small class="text-muted">Instant Pay</small>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-light text-center border-0 py-3">
                        <small class="text-muted"><i class="bi bi-info-circle me-1"></i> No hidden fees. Instant wallet credit.</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section class="py-5 bg-white">
    <div class="container py-5">
        <div class="row p-0 align-items-center g-5">
            <div class="col-lg-5">
                <div class="badge bg-warning-subtle text-warning px-3 py-2 mb-3 fw-bold">FOR DEVELOPERS</div>
                <h2 class="display-6 fw-bold mb-4">Built by developers, <span style="color: #f68b1e;">for developers.</span></h2>
                <p class="text-muted mb-4"> Integrate J-Bank's premium payment infrastructure into your own applications. From automated payroll to instant checkout, our API is built for scale.</p>
                
                <ul class="list-unstyled mb-5">
                    <li class="mb-3 d-flex align-items-center">
                        <i class="bi bi-check-circle-fill text-warning me-3"></i>
                        <span>RESTful API with JSON responses</span>
                    </li>
                    <li class="mb-3 d-flex align-items-center">
                        <i class="bi bi-check-circle-fill text-warning me-3"></i>
                        <span>Webhooks for real-time transaction alerts</span>
                    </li>
                    <li class="mb-3 d-flex align-items-center">
                        <i class="bi bi-check-circle-fill text-warning me-3"></i>
                        <span>Sandbox environment for safe testing</span>
                    </li>
                </ul>

                <div class="d-flex gap-3">
                    <a data-link href="/api" class="btn btn-dark px-4 py-2 rounded-pill fw-bold">View Documentation</a>
                    <a data-link href="/member" class="btn btn-outline-dark px-4 py-2 rounded-pill fw-bold">Get API Key</a>
                </div>
            </div>

            <div class="col-lg-7">
                <div class="card bg-dark border-0 shadow-lg rounded-4 overflow-hidden">
                    <div class="card-header bg-secondary bg-opacity-10 border-0 d-flex gap-2 p-3">
                        <div class="rounded-circle bg-danger" style="width: 12px; height: 12px;"></div>
                        <div class="rounded-circle bg-warning" style="width: 12px; height: 12px;"></div>
                        <div class="rounded-circle bg-success" style="width: 12px; height: 12px;"></div>
                    </div>
                    <div class="card-body p-4">
                        <pre class="mb-0" style="color: #a9b7c6; font-family: 'Courier New', Courier, monospace; font-size: 0.9rem;">
<span style="color: #cc7832;">curl</span> https://api.j-bank.com/v1/transfer \
  -u sk_live_jumia_premium_8842: \
  -d <span style="color: #6a8759;">amount</span>=<span style="color: #6897bb;">500000</span> \
  -d <span style="color: #6a8759;">currency</span>=<span style="color: #6a8759;">"NGN"</span> \
  -d <span style="color: #6a8759;">recipient</span>=<span style="color: #6a8759;">"ACC_99210044"</span> \
  -d <span style="color: #6a8759;">description</span>=<span style="color: #6a8759;">"Vendor Payment"</span>
                        </pre>
                        
                        <hr class="my-4 opacity-25 bg-light">
                        
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="small text-uppercase opacity-50 text-white">Response</span>
                            <span class="badge bg-success">200 OK</span>
                        </div>
                        <pre class="mt-3 mb-0" style="color: #6a8759; font-family: 'Courier New', Courier, monospace; font-size: 0.85rem;">
{
  "status": "success",
  "message": "Transfer Initiated",
  "data": { "reference": "JB_TRX_99218" }
}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



    <footer class="py-5 text-white" style="background-color: #282828;">
        <div class="container">
            <div class="row p-0">
                <div class="col-md-4 mb-4">
                    <h5 class="fw-bold mb-4"><span style="color: #f68b1e;">J-</span>BANK</h5>
                    <p class="small opacity-50">Providing premium financial solutions for the digital age. Registered and regulated by the Central Bank.</p>
                </div>
                <div class="col-6 col-md-2 mb-4">
                    <h6 class="fw-bold small mb-3">Product</h6>
                    <ul class="list-unstyled small opacity-75">
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Savings</a></li>
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Investments</a></li>
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Cards</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-2 mb-4">
                    <h6 class="fw-bold small mb-3">Legal</h6>
                    <ul class="list-unstyled small opacity-75">
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Privacy</a></li>
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Terms</a></li>
                        <li class="mb-2"><a href="#" class="text-white text-decoration-none">Cookies</a></li>
                    </ul>
                </div>
            </div>
            <hr class="mt-5 opacity-25">
            <div class="d-flex justify-content-between small opacity-50">
                <p>&copy; 2026 J-Bank Group. All rights reserved.</p>
                <div class="d-flex gap-3">
                    <i class="bi bi-twitter-x"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>
        </div>
    </footer>
    `;
}