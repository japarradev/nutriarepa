export function renderProducts()
{
    const products = document.querySelector('#products');
    if(products)
    {
        products.innerHTML = `
     <div class="col-sm-6 col-md-4 col-lg-3">
        <!-- Product-->
        <article class="product wow fadeInRight" data-wow-delay=".1s">
           <div class="product-body">
              <div class="product-figure"><a href="arepa-yuca-queso"><img
                 src="images/productos/arepa-yuca-queso/arepa-yuca-queso-1.webp" loading="lazy" alt="Arepa de queso" ></a> </div>
              <h5 class="product-title"><a href="arepa-yuca-queso">Arepa
                 de Yuca <br>
                 </a>
              </h5>
              <div class="product-price-wrap">
                 <div class="product-price">Rellena de Queso</div>
              </div>
           </div>
           <div class="product-button-wrap">
           </div>
        </article>
     </div>
     <div class="col-sm-6 col-md-4 col-lg-3">
        <!-- Product-->
        <article class="product wow fadeInRight" data-wow-delay=".2s">
           <div class="product-body">
              <div class="product-figure"><a href="arepa-yuca-semilla"><img
                 src="images/productos/arepa-yuca-semilla/arepa-yuca-semilla-1.webp" loading="lazy" alt="Arepa de semilla" ></a> </div>
              <h5 class="product-title"><a href="arepa-yuca-semilla">Arepa
                 de Yuca<br>
                 </a>
              </h5>
              <div class="product-price-wrap">
                 <div class="product-price">Con semillas</div>
              </div>
           </div>
           <div class="product-button-wrap">
           </div>
        </article>
     </div>
   
     <div class="col-sm-6 col-md-4 col-lg-3">
        <!-- Product-->
        <article class="product wow fadeInRight" data-wow-delay=".3s">
           <div class="product-body">
              <div class="product-figure"><a href="arepa-santandereana"><img
                 src="images/productos/arepa-santandereana/arepa-santandereana1.webp" loading="lazy" alt="Arepa santandereana" > </a></div>
              <h5 class="product-title"><a href="arepa-santandereana">Arepa
                 Santandereana<br>
                 </a>
              </h5>
              <div class="product-price-wrap">
                 <div class="product-price">Maíz y chicharrón</div>
              </div>
           </div>
           <div class="product-button-wrap">
           </div>
        </article>
     </div>

     `
    } 
}

        