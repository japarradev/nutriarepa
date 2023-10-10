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
    const nav = document.querySelector('.rd-navbar-nav-wrap');
    const cart = document.querySelector('.rd-navbar-aside-element');
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

    const shoppingCart = 
    `
    <!-- RD Navbar Search-->
    <div class="rd-navbar-search rd-navbar-search-2">
     
      <a class="rd-navbar-fixed-element-3 icon-shopping-cart  rd-navbar-basket fl-bigmug-line-shopping202"  href="carrito"><span>${products.length > 0 ? products.length : '' }</span></a>
    </div>
    <!-- RD Navbar Basket-->
    `
    const navContent =  menu.join('')
        

    nav.innerHTML = navContent;
    cart.innerHTML = shoppingCart;
}