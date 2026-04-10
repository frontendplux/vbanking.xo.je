export function AboutUsPage() {
    return /*html*/`
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom py-3">
        <div class="container">
            <a class="navbar-brand fw-bold d-flex align-items-center" href="/">
                <div class="bg-dark text-white rounded-3 px-2 me-2">J</div>
                <span style="letter-spacing: -1px;">BANK <span class="text-warning">PREMIUM</span></span>
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto gap-3">
                    <li class="nav-item"><a class="nav-link small fw-bold" href="/">Home</a></li>
                    <li class="nav-item"><a class="nav-link small fw-bold text-warning" href="/about">About Us</a></li>
                    <li class="nav-item"><a class="nav-link small fw-bold" href="/terms">Terms</a></li>
                    <li class="nav-item"><a class="btn btn-dark btn-sm rounded-pill px-4 fw-bold shadow-sm" href="/signup">Join the Movement</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <section class="py-5 bg-dark text-white position-relative overflow-hidden">
        <div class="container py-5 position-relative" style="z-index: 2;">
            <div class="row align-items-center">
                <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="display-3 fw-bold mb-4">We are the bank for the <span class="text-warning">Disciplined.</span></h1>
                    <p class="lead opacity-75 mb-4">J-Bank Premium was born from a simple observation: small, consistent actions lead to massive life changes. We didn't build just another app; we built a system that rewards your commitment.</p>
                </div>
                <div class="col-lg-6">
                    <img src="https://images.unsplash.com/photo-1579621970795-87faff2f9050?auto=format&fit=crop&w=800&q=80" class="img-fluid rounded-5 shadow-lg d-none d-lg-block" alt="Growth">
                </div>
            </div>
        </div>
        <div class="position-absolute bottom-0 end-0 p-5 opacity-10">
            <i class="bi bi-graph-up-arrow" style="font-size: 15rem;"></i>
        </div>
    </section>

    <section class="py-5 bg-light">
        <div class="container py-5">
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="p-5 bg-white rounded-5 shadow-sm h-100 border-start border-5 border-warning">
                        <h2 class="fw-bold mb-3">Our Mission</h2>
                        <p class="text-muted">To empower every Jumia partner with the financial tools and discipline required to transition from daily survival to long-term wealth. We aim to turn your 50 weeks of sacrifice into a lifetime of stability.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-5 bg-white rounded-5 shadow-sm h-100 border-start border-5 border-primary">
                        <h2 class="fw-bold mb-3">Our Vision</h2>
                        <p class="text-muted">To become the backbone of Africa's digital economy by creating a "Discipline-as-a-Service" banking model where financial growth is guaranteed for those who stick to the plan.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 bg-white">
        <div class="container py-5">
            <div class="text-center mb-5">
                <h6 class="text-warning fw-bold text-uppercase" style="letter-spacing: 2px;">The Pillars of J-Bank</h6>
                <h2 class="fw-bold">Why We Are Different</h2>
            </div>
            <div class="row g-4 text-center">
                <div class="col-md-4">
                    <div class="p-4">
                        <div class="bg-light d-inline-flex p-4 rounded-circle mb-4">
                            <i class="bi bi-alarm text-dark fs-1"></i>
                        </div>
                        <h5 class="fw-bold">The Saturday Rule</h5>
                        <p class="small text-muted">We don't believe in "soft" deadlines. Our Saturday 11:59 PM cutoff isn't a suggestion—it's the guardrail that ensures your 50-week success.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4">
                        <div class="bg-light d-inline-flex p-4 rounded-circle mb-4">
                            <i class="bi bi-basket3 text-dark fs-1"></i>
                        </div>
                        <h5 class="fw-bold">Tangible Rewards</h5>
                        <p class="small text-muted">Cash is great, but stability is better. Our Food Basket incentives ensure that while you save for the future, your family is fed today.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4">
                        <div class="bg-light d-inline-flex p-4 rounded-circle mb-4">
                            <i class="bi bi-shield-check text-dark fs-1"></i>
                        </div>
                        <h5 class="fw-bold">Community Growth</h5>
                        <p class="small text-muted">We grow when you grow. Our referral-based ROI model ensures that we build a network of accountable, successful partners.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 bg-dark text-white">
        <div class="container py-4">
            <div class="row text-center g-4">
                <div class="col-md-3 col-6">
                    <h2 class="fw-bold text-warning mb-0">₦1.5B+</h2>
                    <p class="small opacity-50 text-uppercase">Paid in ROI</p>
                </div>
                <div class="col-md-3 col-6">
                    <h2 class="fw-bold text-warning mb-0">50k+</h2>
                    <p class="small opacity-50 text-uppercase">Active Slots</p>
                </div>
                <div class="col-md-3 col-6">
                    <h2 class="fw-bold text-warning mb-0">8.2k</h2>
                    <p class="small opacity-50 text-uppercase">Grants Issued</p>
                </div>
                <div class="col-md-3 col-6">
                    <h2 class="fw-bold text-warning mb-0">120k</h2>
                    <p class="small opacity-50 text-uppercase">Food Baskets Sent</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 bg-warning">
        <div class="container py-5 text-center">
            <h2 class="display-5 fw-bold text-dark mb-4">Ready to start your 50-week journey?</h2>
            <p class="lead text-dark opacity-75 mb-5 mx-auto" style="max-width: 600px;">Join thousands of Jumia partners who have unlocked their potential. Remember, discipline is the bridge between goals and accomplishment.</p>
            <button class="btn btn-dark btn-lg rounded-pill px-5 fw-bold py-3 shadow">Create My Account Now</button>
        </div>
    </section>

    <footer class="bg-white pt-5 pb-3 border-top">
        <div class="container">
            <div class="row g-4 mb-4">
                <div class="col-md-4">
                    <h5 class="fw-bold mb-3">J-BANK <span class="text-warning">PREMIUM</span></h5>
                    <p class="small text-muted">Licensed as a digital Microfinance Institution. Headquartered in Lagos, Nigeria.</p>
                </div>
                <div class="col-md-4 offset-md-4 text-md-end">
                    <div class="d-flex gap-3 justify-content-md-end">
                        <a href="/terms" class="text-dark text-decoration-none small fw-bold">Terms</a>
                        <a href="/privacy" class="text-dark text-decoration-none small fw-bold">Privacy</a>
                        <a href="/contact" class="text-dark text-decoration-none small fw-bold">Contact</a>
                    </div>
                    <p class="small text-muted mt-3 mb-0">© 2026 J-Bank Premium. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .nav-link:hover { color: #f68b1e !important; }
        h1, h2, h3 { letter-spacing: -1px; }
    </style>
    `;
}