export function CryptoExchangePage() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="row mb-4 align-items-center">
            <div class="col-md-6">
                <h3 class="fw-bold mb-1">Crypto Exchange</h3>
                <p class="text-muted small">Trade top assets instantly using your J-Bank balance.</p>
            </div>
            <div class="col-md-6">
                <div class="d-flex gap-3 justify-content-md-end overflow-auto pb-2">
                    <div class="bg-white p-2 px-3 rounded-4 shadow-sm border-start border-4 border-warning">
                        <small class="text-muted d-block" style="font-size: 0.6rem;">BTC / NGN</small>
                        <span class="fw-bold small">₦95,420,000 <span class="text-success" style="font-size: 0.6rem;">+1.2%</span></span>
                    </div>
                    <div class="bg-white p-2 px-3 rounded-4 shadow-sm border-start border-4 border-primary">
                        <small class="text-muted d-block" style="font-size: 0.6rem;">ETH / NGN</small>
                        <span class="fw-bold small">₦3,850,200 <span class="text-danger" style="font-size: 0.6rem;">-0.5%</span></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-7">
                <div class="card border-0 shadow-sm rounded-5 overflow-hidden">
                    <div class="p-2 bg-light m-4 rounded-pill d-flex">
                        <button class="btn btn-dark flex-grow-1 rounded-pill fw-bold py-2 shadow-sm" id="btnBuy" onclick="setTradeMode('buy')">Buy</button>
                        <button class="btn btn-link text-muted flex-grow-1 rounded-pill fw-bold text-decoration-none py-2" id="btnSell" onclick="setTradeMode('sell')">Sell</button>
                    </div>

                    <div class="card-body px-4 pb-5">
                        <div class="mb-3">
                            <label class="form-label small fw-bold text-muted text-uppercase">You Pay</label>
                            <div class="input-group input-group-lg border-0 bg-light rounded-4 p-2">
                                <input type="number" class="form-control border-0 bg-transparent fw-bold shadow-none" placeholder="0.00" id="payAmt">
                                <select class="form-select border-0 bg-white rounded-3 fw-bold shadow-sm" style="max-width: 120px;" id="payCoin">
                                    <option value="NGN">🇳🇬 NGN</option>
                                    <option value="BTC">₿ BTC</option>
                                </select>
                            </div>
                            <small class="text-muted mt-2 d-block">Wallet Balance: <span class="fw-bold text-dark">₦1,450,200</span></small>
                        </div>

                        <div class="text-center my-3">
                            <div class="bg-dark d-inline-flex p-2 rounded-circle text-white shadow">
                                <i class="bi bi-arrow-down-up fs-5"></i>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="form-label small fw-bold text-muted text-uppercase">You Receive</label>
                            <div class="input-group input-group-lg border-0 bg-light rounded-4 p-2">
                                <input type="number" class="form-control border-0 bg-transparent fw-bold shadow-none" placeholder="0.00" id="receiveAmt" readonly>
                                <select class="form-select border-0 bg-white rounded-3 fw-bold shadow-sm" style="max-width: 120px;" id="receiveCoin">
                                    <option value="BTC">₿ BTC</option>
                                    <option value="ETH">💎 ETH</option>
                                    <option value="NGN">🇳🇬 NGN</option>
                                </select>
                            </div>
                        </div>

                        <button class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow-lg" onclick="executeTrade()">
                            Execute Instant Swap
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-dark text-white">
                    <h6 class="fw-bold mb-3">Crypto Portfolio</h6>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="d-flex align-items-center">
                            <div class="bg-warning rounded-circle p-2 me-3" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;">
                                <i class="bi bi-currency-bitcoin text-dark"></i>
                            </div>
                            <div>
                                <small class="d-block opacity-50">Bitcoin</small>
                                <span class="fw-bold">0.024 BTC</span>
                            </div>
                        </div>
                        <div class="text-end">
                            <span class="fw-bold d-block">₦2,290,080</span>
                            <small class="text-success">+4.2%</small>
                        </div>
                    </div>
                    <hr class="opacity-10">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                            <div class="bg-primary rounded-circle p-2 me-3" style="width: 35px; height: 35px; display: flex; align-items: center; justify-content: center;">
                                <i class="bi bi-gem text-white"></i>
                            </div>
                            <div>
                                <small class="d-block opacity-50">Ethereum</small>
                                <span class="fw-bold">0.12 ETH</span>
                            </div>
                        </div>
                        <div class="text-end">
                            <span class="fw-bold d-block">₦462,024</span>
                            <small class="text-danger">-1.1%</small>
                        </div>
                    </div>
                </div>

                <div class="card border-0 rounded-4" style="background-color: #fef5ed; border: 1px dashed #f68b1e !important;">
                    <div class="card-body p-4">
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi bi-shield-lock-fill text-warning fs-4 me-3"></i>
                            <h6 class="fw-bold mb-0">Trader's Note</h6>
                        </div>
                        <p class="small text-muted mb-0">Remember, **Savings Slot** dues (₦1,500/week) are auto-deducted from your Main Wallet. Ensure you keep enough Naira to avoid penalties before buying more crypto!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .bg-warning-subtle { background-color: #fef5ed !important; }
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
    </style>

    <script>
        function setTradeMode(mode) {
            const buy = document.getElementById('btnBuy');
            const sell = document.getElementById('btnSell');
            if(mode === 'buy') {
                buy.className = "btn btn-dark flex-grow-1 rounded-pill fw-bold py-2 shadow-sm";
                sell.className = "btn btn-link text-muted flex-grow-1 rounded-pill fw-bold text-decoration-none py-2";
            } else {
                sell.className = "btn btn-dark flex-grow-1 rounded-pill fw-bold py-2 shadow-sm";
                buy.className = "btn btn-link text-muted flex-grow-1 rounded-pill fw-bold text-decoration-none py-2";
            }
        }

        function executeTrade() {
            alert('Trade Processing... Your J-Bank wallet will be updated instantly.');
        }
    </script>
    `;
}