import { AboutUsPage } from "./page/aboutus.js";
import { APIPage } from "./page/api.js";
import { ForgotPassword } from "./page/auth/forget-pass.js";
import { Login } from "./page/auth/login.js";
import { PasscodeEntry, passcodeEntryFunction } from "./page/auth/passcode.js";
import { SignUp } from "./page/auth/signup.js";
import { Home } from "./page/home.js";
import { AirtimePage, DataPage } from "./page/member/airtime/home.js";
import { ConfirmPurchase } from "./page/member/airtime/payment.js";
import { AssetsPage } from "./page/member/assets/home.js";
import { BillsPage } from "./page/member/bill/home.js";
import { CreateCardPage } from "./page/member/card/create.js";
import { FundWithdrawCard } from "./page/member/card/funding.js";
import { VirtualCardPage } from "./page/member/card/home.js";
import { RedeemGiftCardPage } from "./page/member/crypto/giftcard.js";
import { CryptoExchangePage } from "./page/member/crypto/home.js";
import { DepositPage } from "./page/member/deposit/home.js";
import { FoodBasketPackages, FoodBasketPage, SubscriptionSuccess } from "./page/member/foodbasket.js";
import { GrantPage } from "./page/member/grant/home.js";
import { TransactionHistoryPage } from "./page/member/history.js";
import { Dashboard } from "./page/member/home.js";
import { LoanApplyPage } from "./page/member/loan/apply.js";
import { LoanPage } from "./page/member/loan/home.js";
import { LogoutPage } from "./page/member/logout.js";
import { NotificationPage } from "./page/member/notification.js";
import { Profile } from "./page/member/profile.js";
import { CreateSlotPage} from "./page/member/saving/create.js";
import { SavingsPage } from "./page/member/saving/home.js";
import { ReferralHub } from "./page/member/saving/referral.js";
import { TransferPage } from "./page/member/transfer/home.js";
import { MyWalletPage } from "./page/member/wallet/home.js";
import { PrivacyPolicyPage } from "./page/privacypolicy.js";
import { TermsConditionsPage } from "./page/terms-and-condition.js";

export const router = (path) => {
    const current = window.location.pathname;

    // Update browser history
    if (current !== path) {
        history.pushState({}, '', path + window.location.search);
    } else {
        history.replaceState({}, '', path + window.location.search);
    }

    // Load the page content
    loadPage(path);
};

// Initialize router on page load
window.addEventListener('DOMContentLoaded', () => {
    router(window.location.pathname);
});

// Handle back/forward browser buttons
window.onpopstate=() => {
    router(window.location.pathname); // no need to call router() here
}

// Attach click listeners to all links with data-link
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (link) {
        e.preventDefault(); // prevent full page reload
        router(link.getAttribute('href')); // call your SPA router
    }
});

document.addEventListener('submit', (e) => {
    const form = e.target;

    if (form.matches('form[data-link]')) {
        e.preventDefault();

        const formData = new FormData(form);
        const params = new URLSearchParams(formData).toString();
        const action = form.getAttribute('action');

        const newUrl = action + '?' + params;

        // Handle history properly
        if (window.location.pathname === action) {
            history.replaceState({}, '', newUrl);
        } else {
            history.pushState({}, '', newUrl);
        }

        // ✅ Always use router (not loadPage directly)
        router(action);
    }
});

// Function to load content into the #app element
async function loadPage(path) {
     const fullUrl = new URL(path, window.location.origin);

    var path = fullUrl.pathname;
    const params = Object.fromEntries(fullUrl.searchParams.entries());
    // console.log(path);   // /category
    // console.log(params); // { c: "mobile-accessories" }
    const app = document.getElementById('app');

    const url='/'+path.split('/')[1];
    const url2=path.split('/')[2] ? `/${path.split('/')[2]}` : '/';
    switch (url) {
        case '/':
            app.innerHTML= Home();
            break;

        case '/login':
            app.innerHTML= Login();
            break;
        case '/signup':
            app.innerHTML= SignUp();
            break;
        case '/forget-password':
            app.innerHTML= ForgotPassword();
            break;
        case '/passcode':
            app.innerHTML= PasscodeEntry();
            passcodeEntryFunction()
            break;
        case '/member':
            app.innerHTML= Dashboard();
            break;
        case '/profile':
            app.innerHTML= Profile();
            break;
        case '/notify': 
          app.innerHTML=NotificationPage(); 
          break;
          case '/history':
            app.innerHTML=TransactionHistoryPage(); 
            break;
        case '/foodbasket':
            app.innerHTML= FoodBasketPage();
            break;
        case '/create-foodbasket':
            app.innerHTML=FoodBasketPackages()
            break
        case '/success-foodbasket':
            app.innerHTML=SubscriptionSuccess()
            break;
        case '/logout':
            app.innerHTML=LogoutPage();
            break;
        case '/terms-and-conditions':
            app.innerHTML=TermsConditionsPage();
            break;
        case '/privacy-policy':
            app.innerHTML=PrivacyPolicyPage();
            break;
        case '/about-us':
            app.innerHTML=AboutUsPage();
            break;
        case '/api':
            app.innerHTML=APIPage();
            break;
        case '/airtime':
            //  alert(path.split('/')[2])
             switch (url2) {
                case '/':
                     app.innerHTML=AirtimePage();
                    break;

                case '/data':
                     app.innerHTML=DataPage();
                    break;

                case '/payment':
                     app.innerHTML=ConfirmPurchase();
                    break;
                case '/data':
                     app.innerHTML=DataPage();
                    break;
                case '/data':
                     app.innerHTML=DataPage();
                    break;
                case '/data':
                     app.innerHTML=DataPage();
                    break;
             
                default:
                    break;
             }
            break;


            case '/bill':
            //  alert(path.split('/')[2])
             switch (url2) {
                case '/':
                     app.innerHTML=BillsPage();
                    break;
                }
            break;

            case '/transfer':
                 switch (url2) {
                    case '/':
                        app.innerHTML=TransferPage();
                        break;
                 
                    default:
                        break;
                 }
                break;


            case '/deposit':
                 switch (url2) {
                    case '/':
                        app.innerHTML=DepositPage();
                        break;
                 
                    default:
                        break;
                 }
                break;

            case '/asset':
                 switch (url2) {
                    case '/':
                        app.innerHTML=AssetsPage();
                        break;
                 
                    default:
                        break;
                 }
                break;

            case '/grant':
                 switch (url2) {
                    case '/':
                        app.innerHTML=GrantPage();
                        break;
                 
                    default:
                        break;
                 }
                break;

            case '/saving':
                 switch (url2) {
                    case '/':
                        app.innerHTML=SavingsPage();
                        break;

                    case  '/referral':
                        app.innerHTML=ReferralHub();
                     break;

                    case '/create':
                      app.innerHTML=CreateSlotPage();
                      break;

                    default:
                        
                        break;
                 }
                break;
            case '/card':
                switch (url2) {
                    case '/':
                        app.innerHTML=VirtualCardPage()
                        break;
                    
                    case '/create':
                        app.innerHTML=CreateCardPage();
                        break;

                    case '/fund':
                        app.innerHTML=FundWithdrawCard();
                        break;

                    default:
                        break;
                }
                break;
            
            case '/wallet':
                app.innerHTML=MyWalletPage();
                break;

            
            case '/loan':
                 switch (url2) {
                    case '/':
                        app.innerHTML=LoanPage();
                        break;
                 
                    case '/apply':
                        app.innerHTML=LoanApplyPage();
                        break;
                    default:
                        break;
                 }
                break;
            
            case '/crypto':
                 switch (url2) {
                    case '/':
                        app.innerHTML=CryptoExchangePage();
                        break;
                 
                    case '/redeem':
                        app.innerHTML=RedeemGiftCardPage();
                        break;
                    default:
                        break;
                 }
                break;

    }
}