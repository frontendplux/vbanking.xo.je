import { AboutUsPage } from "./page/aboutus.js";
import { APIPage } from "./page/api.js";
import { Error404Page, GeneralError404Page, Normal404Page } from "./page/auth/404.js";
import { ForgotPassword } from "./page/auth/forget-pass.js";
import { Login_phone, LoginPhoneFunction } from "./page/auth/login-phone.js";
import { Login, LoginFunction } from "./page/auth/login.js";
import { PasscodeEntry, passcodeEntryFunction } from "./page/auth/passcode.js";
import { VerifyEmail, verifyEmailFunction } from "./page/auth/signup-2.js";
import { Welcome, welcomeFunction } from "./page/auth/signup-3.js";
import { SignUp, submitSignup } from "./page/auth/signup.js";
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



export const company={
    name:"pygg",
    logo:"/upload/icon/pygg.png",
    server:"/api/main.php",
    atmLogo:"/upload/icon/atm.png",
    aboutImg:"/upload/icon/about.png",
    url:"https://pygg.com.ng"
}


export const toggleNav = (color = '#1877f2', title = 'Notification', message = 'New update available') => {
    // 1. Create/Ensure a container for stacking exists
    let stackContainer = document.getElementById('mflow-toast-stack');
    if (!stackContainer) {
        stackContainer = document.createElement('div');
        stackContainer.id = 'mflow-toast-stack';
        // Fixed at top, centered, and Z-indexed to the moon
        stackContainer.className = "position-fixed top-0 start-0 end-0 p-4 d-flex flex-column align-items-center justify-content-center gap-3";
        stackContainer.style.zIndex = "9999";
        stackContainer.style.pointerEvents = "none";
        document.body.appendChild(stackContainer);
    }

    // 2. Create the unique Toast element
    const toast = document.createElement('div');
    toast.className = "w-100 mw-sm translate-middle-y opacity-0";
    toast.style.transition = "all 0.5s cubic-bezier(0.23,1,0.32,1)";
    toast.style.pointerEvents = "auto";
    
    // Internal HTML with monieFlow Glassmorphism
    toast.innerHTML = `
        <div class="bg-white col-12 col-lg-5 bg-opacity-90 border border-white shadow-lg rounded-4 p-4 d-flex align-items-center gap-4 border-start mx-auto" style="backdrop-filter: blur(20px); border-left: 4px solid ${color};">
            <div class="d-flex align-items-center justify-content-center flex-shrink-0 rounded-3 shadow-sm" style="width: 40px; height: 40px; background-color: ${color}20;">
                <div class="rounded-circle" style="width: 12px; height: 12px; background-color: ${color}; animation: pulse 1.5s infinite;"></div>
            </div>
            <div class="flex-grow-1">
                <h6 class="text-uppercase fw-bold text-muted mb-1" style="font-size: 11px; letter-spacing: 1px;">${title}</h6>
                <p class="fw-light text-dark mb-0 text-wrap" style="font-size: 14px;">${message}</p>

            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="btn btn-link text-muted p-0" style="transition: color 0.3s;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
    `;

    // 3. Add to stack
    stackContainer.prepend(toast);

    // 4. Animate "Drop"
    setTimeout(() => {
        toast.classList.remove('translate-middle-y', 'opacity-0');
        toast.style.transform = "translateY(0)";
        toast.style.opacity = "1";
    }, 10);

    // 5. Automatic "Return" (Remove) after 4 seconds
    setTimeout(() => {
        toast.style.transform = "translateY(-10px)";
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 4000);
};


export function SEO({
  title = "Pygg - Smart Banking App",
  description = "Pygg is a secure digital banking app in Nigeria. Send money, pay bills, and manage your finances بسهولة.",
  keywords = "banking app Nigeria, send money Nigeria, fintech Nigeria, Pygg",
  image = "/upload/icon/pygg.png",
  url = "https://pygg.com.ng",
  type = "website"
} = {}) {

  // Title
  document.title = title;

  // Helper function
  const setMeta = (attr, name, content) => {
    let element = document.querySelector(`meta[${attr}="${name}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attr, name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  // Basic SEO
  setMeta("name", "description", description);
  setMeta("name", "keywords", keywords);

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:image", image);
  setMeta("property", "og:url", url);
  setMeta("property", "og:type", type);

  // Twitter
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", image);

  // Canonical
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

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

        case '/auth':
            switch (url2) {

                case '/':
                case '/login':
                      app.innerHTML= Login();
                      LoginFunction();
                    break;
                
                case '/login-phone':
                    app.innerHTML=Login_phone();
                    LoginPhoneFunction();
                    break;
                
                
                case '/signup':
                    app.innerHTML=SignUp();
                    submitSignup();
                    break;    

                case '/sigup-2':
                    app.innerHTML=VerifyEmail();
                    verifyEmailFunction();
                    break;
                
                
                case '/signup-3':
                    app.innerHTML=Welcome();
                    welcomeFunction();
                    break;

                default:
                    app.innerHTML=Normal404Page();
                    break;
            }
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