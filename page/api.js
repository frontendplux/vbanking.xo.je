export function APIPage() {
    return /*html*/`
    <div class="container-fluid">
        <div class="row min-vh-100">
            <nav class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse p-4">
                <div class="position-sticky pt-3 text-white">
                    <h5 class="fw-bold mb-4 text-warning">API Docs v1.0</h5>
                    <ul class="nav flex-column gap-2 small">
                        <li class="nav-item">
                            <a class="nav-link text-white opacity-75 active fw-bold border-start border-3 border-warning ps-2" href="#auth">Authentication</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white opacity-50" href="#wallets">Wallets & Balance</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white opacity-50" href="#savings">Savings Slots</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white opacity-50" href="#crypto">Crypto Rates</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white opacity-50" href="#webhooks">Webhooks</a>
                        </li>
                    </ul>
                    
                    <div class="mt-5 pt-5">
                        <h6 class="text-uppercase small opacity-25 fw-bold mb-3">Your Keys</h6>
                        <div class="bg-secondary bg-opacity-25 p-2 rounded small border border-secondary text-truncate">
                            pk_live_51M...
                        </div>
                    </div>
                </div>
            </nav>

            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-5 pb-2 mb-4 border-bottom">
                    <h2 class="fw-bold">Developer Portal</h2>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <button type="button" class="btn btn-sm btn-outline-dark rounded-pill px-3 me-2">Download Postman Collection</button>
                        <button type="button" class="btn btn-dark btn-sm rounded-pill px-3 shadow">Regenerate API Key</button>
                    </div>
                </div>

                <div class="row g-5">
                    <div class="col-xl-7">
                        <section id="auth" class="mb-5">
                            <h4 class="fw-bold text-dark">Authentication</h4>
                            <p class="text-muted">J-Bank Premium uses API keys to allow access to the API. You can register a new J-Bank API key in your developer dashboard. Your API keys carry many privileges, so be sure to keep them secure!</p>
                            <p class="text-muted">Authentication is performed via the <code>Authorization</code> header using the Bearer scheme.</p>
                            
                            <div class="alert alert-warning border-0 rounded-4 d-flex align-items-start small p-3">
                                <i class="bi bi-exclamation-triangle-fill me-3 fs-4"></i>
                                <div>
                                    <strong>Production Note:</strong> Never share your Secret Key (sk_live) in client-side code (JavaScript) or publicly accessible repositories.
                                </div>
                            </div>
                        </section>

                        <section id="wallets" class="mb-5">
                            <h4 class="fw-bold text-dark">Get Wallet Balance</h4>
                            <p class="text-muted">Retrieves the current balance of the Main Wallet, Savings Wallet, and Referral Bonus Wallet for a specific user.</p>
                            <table class="table table-sm small mt-3">
                                <thead class="text-muted text-uppercase">
                                    <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td><code>user_id</code></td><td>string</td><td>Required. The unique J-Bank ID.</td></tr>
                                    <tr><td><code>currency</code></td><td>string</td><td>Optional. Default: <code>NGN</code>.</td></tr>
                                </tbody>
                            </table>
                        </section>
                    </div>

                    <div class="col-xl-5">
                        <div class="sticky-top" style="top: 100px; z-index: 1;">
                            <div class="card border-0 shadow-lg rounded-4 overflow-hidden bg-dark text-white">
                                <div class="card-header bg-secondary bg-opacity-10 border-0 p-3 d-flex justify-content-between align-items-center">
                                    <span class="small fw-bold text-warning uppercase">Sample Request (Node.js)</span>
                                    <i class="bi bi-clipboard text-muted cursor-pointer" onclick="alert('Copied!')"></i>
                                </div>
                                <div class="card-body p-0">
<pre class="m-0 p-4" style="background: #1e1e1e; font-size: 0.85rem; color: #d4d4d4; line-height: 1.6;">
<span style="color: #569cd6;">const</span> axios = <span style="color: #dcdcaa;">require</span>(<span style="color: #ce9178;">'axios'</span>);

<span style="color: #569cd6;">const</span> getBalance = <span style="color: #569cd6;">async</span> () => {
  <span style="color: #569cd6;">try</span> {
    <span style="color: #569cd6;">const</span> response = <span style="color: #c586c0;">await</span> axios.get(
      <span style="color: #ce9178;">'https://api.jbank.com/v1/wallet'</span>,
      {
        <span style="color: #9cdcfe;">headers</span>: {
          <span style="color: #ce9178;">'Authorization'</span>: <span style="color: #ce9178;">'Bearer YOUR_API_KEY'</span>
        }
      }
    );
    <span style="color: #9cdcfe;">console</span>.<span style="color: #dcdcaa;">log</span>(response.<span style="color: #9cdcfe;">data</span>);
  } <span style="color: #569cd6;">catch</span> (error) {
    <span style="color: #9cdcfe;">console</span>.<span style="color: #dcdcaa;">error</span>(error);
  }
};
</pre>
                                </div>
                            </div>

                            <div class="card border-0 shadow-lg rounded-4 overflow-hidden mt-4 bg-dark text-white">
                                <div class="card-header bg-secondary bg-opacity-10 border-0 p-3">
                                    <span class="small fw-bold text-info uppercase">Response Structure</span>
                                </div>
<pre class="m-0 p-4" style="background: #1e1e1e; font-size: 0.85rem; color: #9cdcfe;">
{
  <span style="color: #ce9178;">"status"</span>: <span style="color: #ce9178;">"success"</span>,
  <span style="color: #ce9178;">"data"</span>: {
    <span style="color: #ce9178;">"main_wallet"</span>: 1450200.50,
    <span style="color: #ce9178;">"savings_slots"</span>: 3,
    <span style="color: #ce9178;">"currency"</span>: <span style="color: #ce9178;">"NGN"</span>
  }
}
</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <style>
        .sidebar { box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1); }
        .nav-link { padding: 0.5rem 0; transition: all 0.2s; }
        .nav-link:hover { opacity: 1 !important; color: #f68b1e !important; }
        code { background: #f1f1f1; color: #d63384; padding: 0.2rem 0.4rem; border-radius: 4px; }
        pre { border: none !important; outline: none !important; }
        .cursor-pointer { cursor: pointer; }
    </style>
    `;
}