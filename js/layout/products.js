export function renderProducts()
{
    const products = document.querySelector('#products');
    if(products)
    {
        products.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-3">
        <!-- Product-->
        <article class="product wow fadeInRight">
           <div class="product-body">
              <div class="product-figure"><a href="arepa-yuca-sin-queso"><img
                 src="images/productos/arepa-yuca/arepa-yuca-1.webp"  loading="lazy" alt="Arepa yuca" > </a>
              </div>
              <h5 class="product-title"><a href="arepa-yuca-sin-queso">Arepa
                 de Yuca<br>
                 </a>
              </h5>
              <div class="product-price-wrap">
                 <div class="product-price">Original</div>
              </div>
           </div>
           <div class="product-button-wrap">
           </div>
        </article>
     </div>
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
        <article class="product wow fadeInLeft" data-wow-delay=".1s">
           <div class="product-body">
              <div class="product-figure"><a href="arepa-platano"><img
                 src="images/productos/arepa-platano/arepa-platano-1.webp" loading="lazy" alt="Arepa de platano" ></a>
              </div>
              <h5 class="product-title"><a href="arepa-platano">Arepa
                 de Plátano</a>
              </h5>
              <div class="product-price-wrap">
                 <div class="product-price">Rellena de queso</div>
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
              <div class="product-figure"><a href="arepa-arroz"><img
                 src="images/productos/arepa-arroz/arepa-arroz-1.webp" loading="lazy" alt="Arepa de arroz" > </a></div>
              <h5 class="product-title"><a href="arepa-arroz">Arepa
                 de Arroz integral<br>
                 </a>
              </h5>
              <div class="product-price-wrap">
                 <div class="product-price">Con Chía</div>
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
     <div class="col-sm-6 col-md-4 col-lg-3">
        <!-- Product-->
        <article class="product wow fadeInRight" data-wow-delay=".3s">
           <div class="product-body">
              <div class="product-figure"><a href="bolsa-ecologica"><img
                 src="images/productos/bolsa-ecologica/bolsa-ecologica-1.webp" loading="lazy" alt="Bolsa ecológica" > </a>
              </div>
              <h5 class="product-title"><a href="bolsa-ecologica">Bolsa ecológica<br>
                 </a>
              </h5>
              <div class="product-price-wrap">
                 <div class="product-price">100% degradable</div>
              </div>
           </div>
           <div class="product-button-wrap">
           </div>
        </article>
     </div>
     `
    } 
}

        