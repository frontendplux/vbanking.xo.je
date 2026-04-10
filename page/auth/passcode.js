export function passcodeEntryFunction(){
     let code = "";
         window.pressKey=function(num) {
            if (code.length < 4) {
                code += num;
                updateDots();
                if (code.length === 4) {
                    // Simulate verification
                    setTimeout(() => {
                        alert("Access Granted! Loading your J-Bank Vault...");
                        window.location.href = "/dashboard";
                    }, 300);
                }
            }
        }

        window.deleteKey=function() {
            code = code.slice(0, -1);
            updateDots();
        }

         window.updateDots=function() {
            for (let i = 1; i <= 4; i++) {
                const dot = document.getElementById('dot-' + i);
                if (i <= code.length) {
                    dot.classList.add('dot-filled');
                } else {
                    dot.classList.remove('dot-filled');
                }
            }
        }
}

export function PasscodeEntry() {
    return /*html*/`
    <div class="container-fluid vh-100 bg-white d-flex align-items-center justify-content-center">
        <div class="w-100" style="max-width: 350px;">
            
            <div class="text-center mb-5">
                <div class="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                    <i class="bi bi-person-fill text-muted fs-1"></i>
                </div>
                <h4 class="fw-bold mb-1">Welcome back, Alex</h4>
                <p class="text-muted small">Enter your 4-digit security passcode</p>
            </div>

            <div class="d-flex justify-content-center gap-3 mb-5">
                <div class="rounded-circle border border-2 border-warning" style="width: 15px; height: 15px;" id="dot-1"></div>
                <div class="rounded-circle border border-2 border-warning" style="width: 15px; height: 15px;" id="dot-2"></div>
                <div class="rounded-circle border border-2 border-warning" style="width: 15px; height: 15px;" id="dot-3"></div>
                <div class="rounded-circle border border-2 border-warning" style="width: 15px; height: 15px;" id="dot-4"></div>
            </div>

            <div class="container text-center">
                <div class="row g-3 mb-3">
                    <div class="col-4"><button class="btn btn-keypad" onclick="pressKey(1)">1</button></div>
                    <div class="col-4"><button class="btn btn-keypad" onclick="pressKey(2)">2</button></div>
                    <div class="col-4"><button class="btn btn-keypad" onclick="pressKey(3)">3</button></div>
                </div>
                <div class="row g-3 mb-3">
                    <div class="col-4"><button class="btn btn-keypad" onclick="pressKey(4)">4</button></div>
                    <div class="col-4"><button class="btn btn-keypad" onclick="pressKey(5)">5</button></div>
                    <div class="col-4"><button class="btn btn-keypad" onclick="pressKey(6)">6</button></div>
                </div>
                <div class="row g-3 mb-3">
                    <div class="col-4"><button class="btn btn-keypad" onclick="pressKey(7)">7</button></div>
                    <div class="col-4"><button class="btn btn-keypad" onclick="pressKey(8)">8</button></div>
                    <div class="col-4"><button class="btn btn-keypad" onclick="pressKey(9)">9</button></div>
                </div>
                <div class="row g-3">
                    <div class="col-4"><button class="btn border-0 py-3 text-muted small fw-bold">FORGOT?</button></div>
                    <div class="col-4"><button class="btn btn-keypad" onclick="pressKey(0)">0</button></div>
                    <div class="col-4"><button class="btn border-0 py-3 text-warning fs-4" onclick="deleteKey()"><i class="bi bi-backspace"></i></button></div>
                </div>
            </div>

            <div class="text-center mt-5">
                <p class="small text-muted mb-0">Not Alex? <a href="/login" class="text-warning fw-bold text-decoration-none">Switch Account</a></p>
            </div>
        </div>
    </div>

    <style>
        .btn-keypad {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 1px solid #f1f1f1;
            background: #fdfdfd;
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--jumia-dark);
            transition: all 0.2s ease;
        }
        .btn-keypad:active {
            background-color: var(--jumia-orange);
            color: white;
            transform: scale(0.95);
        }
        .dot-filled {
            background-color: var(--jumia-orange) !important;
        }
    </style>

    <script>
        let code = "";
        function pressKey(num) {
            if (code.length < 4) {
                code += num;
                updateDots();
                if (code.length === 4) {
                    // Simulate verification
                    setTimeout(() => {
                        alert("Access Granted! Loading your J-Bank Vault...");
                        window.location.href = "/dashboard";
                    }, 300);
                }
            }
        }

        function deleteKey() {
            code = code.slice(0, -1);
            updateDots();
        }

        function updateDots() {
            for (let i = 1; i <= 4; i++) {
                const dot = document.getElementById('dot-' + i);
                if (i <= code.length) {
                    dot.classList.add('dot-filled');
                } else {
                    dot.classList.remove('dot-filled');
                }
            }
        }
    </script>
    `;
}