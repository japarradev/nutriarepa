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
    const nav = document.querySelector('.rd-navbar-wrap');
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

    const navContent2 = 
    `<nav class="rd-navbar rd-navbar-creative rd-navbar-creative-2" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="100px" data-xl-stick-up-offset="112px" data-xxl-stick-up-offset="132px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
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
          
                <div class="rd-navbar-aside-element">
                  <!-- RD Navbar Search-->
                  <div class="rd-navbar-search rd-navbar-search-2">
                   
                    <a class="rd-navbar-fixed-element-3 icon-shopping-cart  rd-navbar-basket fl-bigmug-line-shopping202"  href="carrito.html"><span>${products.length > 0 ? products.length : '' }</span></a>
                  </div>
                  <!-- RD Navbar Basket-->
                  
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
    const navContent = 
    `<nav class="rd-navbar rd-navbar-creative rd-navbar-creative-2" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="100px" data-xl-stick-up-offset="112px" data-xxl-stick-up-offset="132px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
            <div class="rd-navbar-collapse-toggle rd-navbar-fixed-element-1" data-rd-navbar-toggle=".rd-navbar-collapse"><span></span></div>
            <div class="rd-navbar-aside-outer">
              <div class="rd-navbar-aside">
                <div class="rd-navbar-collapse">
                <ul class="contacts-classic">
                <li><span class="contacts-classic-title" Contáctenos:</span> <a class="link"
                      href="tel:+573123213282">+57 (312) 321 32 82</a> </li>
                <li><a href="mailto:nutriarepasangil@gmail.com">nutriarepasangil@gmail.com</a></li>
              </ul><a class="rd-navbar-basket rd-navbar-basket-mobile fl-bigmug-line-shopping202" href="#"><span>2</span></a>
                </div>
                <!-- RD Navbar Panel-->
                <div class="rd-navbar-panel">
                  <!-- RD Navbar Toggle-->
                  <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                  <!-- RD Navbar Brand-->
                  <div class="rd-navbar-brand">
                  <!--Brand--><a class="brand" href="index.html"><img class="brand-logo-dark" src="images/logo.png"
                      alt="logo-nutriarepa" height="104" width="234"><img class="brand-logo-light"
                      src="images/logo_blanco.png" alt="Logo nutriarepa" height="104" width="234"></a>
                </div>
                </div>
                <div class="rd-navbar-aside-element">
                <!-- RD Navbar Search-->
          
                <div class="rd-navbar-aside-element">
                  <!-- RD Navbar Search-->
                  <div class="rd-navbar-search rd-navbar-search-2">
                   
                    <a class="rd-navbar-fixed-element-3 icon-shopping-cart  rd-navbar-basket fl-bigmug-line-shopping202"  href="carrito.html"><span>${products.length > 0 ? products.length : '' }</span></a>
                  </div>
                  <!-- RD Navbar Basket-->
                  
                </div>
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
          </nav> `

    nav.innerHTML = navContent;
}