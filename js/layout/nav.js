import {headerMenu}  from '../global.js'


export function renderNav()
{

    let products = [];
    if (sessionStorage.getItem('shopping-cart')) 
    {
        products = JSON.parse(sessionStorage.getItem('shopping-cart'));
    }
    console.log(products.length)
    const currentPage = window.location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    const nav = document.querySelector('nav');
    const menu = headerMenu.map(item => {
        if(item.url === currentPage)
        {
            return `<li class="rd-nav-item active"><a class="rd-nav-link" href="${item.url}">${item.name}</a></li>`
        }
        else
        {
            return `<li class="rd-nav-item"><a class="rd-nav-link" href="${item.url}">${item.name}</a></li>`
        }
    });

    const navContent = 
    `
    <div class="rd-navbar-collapse-toggle rd-navbar-fixed-element-1" data-rd-navbar-toggle=".rd-navbar-collapse">
            <span></span></div>
          <div class="rd-navbar-aside-outer">
            <div class="rd-navbar-aside">
              <div class="rd-navbar-collapse">
                <ul class="contacts-classic">
                  <li><span class="contacts-classic-title" Contáctenos:</span> <a class="link"
                        href="tel:+573123213282">+57 (312) 321 32 82</a> </li>
                  <li><a href="mailto:nutriarepasangil@gmail.com">nutriarepasangil@gmail.com</a></li>
                </ul>
                <a class="icon-shopping-cart rd-navbar-basket rd-navbar-basket-mobile fl-bigmug-line-shopping202" href="#"><span>${products.length > 0 ? products.length : '' }</span></a>
              </div>
              <!-- RD Navbar Panel-->
              <div class="rd-navbar-panel">
                <!-- RD Navbar Toggle--> <button class="rd-navbar-toggle"
                  data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                <!-- RD Navbar Brand-->
                <div class="rd-navbar-brand">
                  <!--Brand--><a class="brand" href="index.html"><img class="brand-logo-dark" src="images/logo.png"
                      alt="logo-nutriarepa" height="104" width="234"><img class="brand-logo-light"
                      src="images/logo_blanco.png" alt="Logo nutriarepa" height="104" width="234"></a>
                </div>
              </div>
              <div class="rd-navbar-aside-element">
                <!-- RD Navbar Search-->
                <div class="rd-navbar-search rd-navbar-search-2">

                </div>
                <div class="rd-navbar-aside-element">
                  <!-- RD Navbar Search-->
                  <div class="rd-navbar-search rd-navbar-search-2">
                    <button class="rd-navbar-search-toggle rd-navbar-fixed-element-3" data-rd-navbar-toggle=".rd-navbar-search"><span></span></button>
                    <form class="rd-search" action="search-results.html" data-search-live="rd-search-results-live" method="GET">
                      <div class="form-wrap">
                        <input class="rd-navbar-search-form-input form-input" id="rd-navbar-search-form-input" type="text" name="s" autocomplete="off"/>
                        <label class="form-label" for="rd-navbar-search-form-input">Search...</label>
                        <div class="rd-search-results-live" id="rd-search-results-live"></div>
                        <button class="rd-search-form-submit fl-bigmug-line-search74" type="submit"></button>
                      </div>
                    </form>
                  </div>
                  <!-- RD Navbar Basket-->
                  <a class="icon-shopping-cart rd-navbar-basket rd-navbar-basket fl-bigmug-line-shopping202 d-none d-md-block .d-lg-block"  href="carrito.html"><span>${products.length > 0 ? products.length : '' }</span></a>
                </div>
              </div>
            </div>
            <div class="rd-navbar-main-outer">
              <div class="rd-navbar-main">
                <div class="rd-navbar-nav-wrap">
                 ${menu.join('')}
                </div>
              </div>
            </div>
        </nav>
    `

    nav.innerHTML = navContent;
}