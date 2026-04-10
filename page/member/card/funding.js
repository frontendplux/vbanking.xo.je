export function FundWithdrawCard() {
    return /*html*/`
    <div class="container-fluid p-4">
        <div class="mb-4">
            <a href="/virtual-card" class="text-decoration-none text-muted small fw-bold">
                <i class="bi bi-arrow-left me-1"></i> BACK TO CARDS
            </a>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-8">
                <div class="card border-0 shadow-lg rounded-5 overflow-hidden">
                    
                    <div class="p-2 bg-light m-3 rounded-pill d-flex">
                        <button class="btn btn-dark flex-grow-1 rounded-pill fw-bold py-2 shadow-sm" id="tabFund" onclick="switchMode('fund')">
                            Fund Card
                        </button>
                        <button class="btn btn-link text-muted flex-grow-1 rounded-pill fw-bold text-decoration-none py-2" id="tabWithdraw" onclick="switchMode('withdraw')">
                            Withdraw
                        </button>
                    </div>

                    <div class="card-body p-4 pt-2">
                        <div class="d-flex align-items-center justify-content-between bg-light p-4 rounded-4 mb-4 border border-dashed text-center">
                            <div id="sourceBox">
                                <small class="text-muted d-block mb-1 fw-bold">FROM</small>
                                <span class="fw-bold text-dark">Main Wallet</span>
                                <h6 class="mb-0 small text-success">₦1,450k</h6>
                            </div>
                            <div class="bg-white rounded-circle shadow-sm p-2">
                                <i class="bi bi-arrow-right-short fs-3 text-warning" id="directionIcon"></i>
                            </div>
                            <div id="destBox">
                                <small class="text-muted d-block mb-1 fw-bold">TO</small>
                                <span class="fw-bold text-dark">Virtual Card</span>
                                <h6 class="mb-0 small text-primary">$420.50</h6>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="form-label small fw-bold text-muted text-uppercase">Enter Amount</label>
                            <div class="input-group input-group-lg border-0 bg-light rounded-4 p-2">
                                <span class="input-group-text border-0 bg-transparent fw-bold" id="currencySymbol">₦</span>
                                <input type="number" class="form-control border-0 bg-transparent fw-bold shadow-none" placeholder="0.00" id="transferAmt">
                            </div>
                            <div class="d-flex justify-content-between mt-2 px-1">
                                <small class="text-muted" id="rateInfo">Exchange Rate: $1 = ₦1,500</small>
                                <small class="text-warning fw-bold" style="cursor:pointer" onclick="setFullBalance()">USE ALL</small>
                            </div>
                        </div>

                        <div class="bg-warning-subtle p-3 rounded-4 mb-4 border border-warning border-opacity-10">
                            <div class="d-flex justify-content-between">
                                <span class="small text-muted fw-bold">You will receive:</span>
                                <span class="fw-bold text-dark" id="receivedAmt">$0.00</span>
                            </div>
                        </div>

                        <button class="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow" id="actionBtn" onclick="processTransfer()">
                            Confirm Funding
                        </button>
                        
                        <p class="text-center text-muted mt-4 mb-0" style="font-size: 0.7rem;">
                            <i class="bi bi-info-circle me-1"></i> Funds are moved instantly between accounts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .rounded-5 { border-radius: 2.5rem !important; }
        .bg-warning-subtle { background-color: #fef5ed !important; }
        .border-dashed { border: 2px dashed #dee2e6 !important; }
        #transferAmt::placeholder { color: #ccc; }
    </style>

    <script>
        let mode = 'fund';

        function switchMode(newMode) {
            mode = newMode;
            const tabFund = document.getElementById('tabFund');
            const tabWithdraw = document.getElementById('tabWithdraw');
            const directionIcon = document.getElementById('directionIcon');
            const actionBtn = document.getElementById('actionBtn');
            const currencySymbol = document.getElementById('currencySymbol');
            const rateInfo = document.getElementById('rateInfo');

            if (mode === 'fund') {
                tabFund.className = "btn btn-dark flex-grow-1 rounded-pill fw-bold py-2 shadow-sm";
                tabWithdraw.className = "btn btn-link text-muted flex-grow-1 rounded-pill fw-bold text-decoration-none py-2";
                directionIcon.className = "bi bi-arrow-right-short fs-3 text-warning";
                actionBtn.innerText = "Confirm Funding";
                currencySymbol.innerText = "₦";
                rateInfo.style.visibility = "visible";
            } else {
                tabWithdraw.className = "btn btn-dark flex-grow-1 rounded-pill fw-bold py-2 shadow-sm";
                tabFund.className = "btn btn-link text-muted flex-grow-1 rounded-pill fw-bold text-decoration-none py-2";
                directionIcon.className = "bi bi-arrow-left-short fs-3 text-primary";
                actionBtn.innerText = "Confirm Withdrawal";
                currencySymbol.innerText = "$";
                rateInfo.style.visibility = "hidden";
            }
        }

        function processTransfer() {
            const btn = document.getElementById('actionBtn');
            btn.disabled = true;
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing...';
            
            setTimeout(() => {
                alert(mode === 'fund' ? 'Card successfully funded!' : 'Funds withdrawn to wallet!');
                window.location.href = '/virtual-card';
            }, 2000);
        }
    </script>
    `;
}