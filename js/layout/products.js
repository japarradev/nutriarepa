export function renderProducts()
{
    const products = document.querySelector('#products');
    if(products)
    {
        products.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-3">
        <!-- Product-->
        <article class="product wow fadeInRight">
           <div class="product-body">
              <div class="product-figure"><a href="arepa-yuca-sin-queso.html"><img
                 src="images/productos/arepa-yuca/arepa-yuca-1.png"  loading="lazy" alt="Arepa yuca" height="153" width="222"> </a>
              </div>
              <h5 class="product-title"><a href="arepa-yuca-sin-queso.html">Arepa
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
              <div class="product-figure"><a href="arepa-yuca-queso.html"><img
                 src="images/productos/arepa-yuca-queso/arepa-yuca-queso-1.jpg" loading="lazy" alt="Arepa de queso" height="153"
                 width="222"></a> </div>
              <h5 class="product-title"><a href="arepa-yuca-queso.html">Arepa
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
              <div class="product-figure"><a href="arepa-yuca-semilla.html"><img
                 src="images/productos/arepa-yuca-semilla/arepa-yuca-semilla-1.jpg" loading="lazy" alt="Arepa de semilla" height="153"
                 width="222"></a> </div>
              <h5 class="product-title"><a href="arepa-yuca-semilla.html">Arepa
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
              <div class="product-figure"><a href="arepa-platano.html"><img
                 src="images/productos/arepa-platano/arepa-platano-1.jpg" loading="lazy" alt="Arepa de platano" height="153" width="222"></a>
              </div>
              <h5 class="product-title"><a href="arepa-platano.html">Arepa
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
              <div class="product-figure"><a href="arepa-arroz.html"><img
                 src="images/productos/arepa-arroz/arepa-arroz-1.jpg" loading="lazy" alt="Arepa de arroz" height="153" width="222"> </a></div>
              <h5 class="product-title"><a href="arepa-arroz.html">Arepa
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
              <div class="product-figure"><a href="arepa-santandereana.html"><img
                 src="images/productos/arepa-santandereana/arepa-santandereana1.jpg" loading="lazy" alt="Arepa santandereana" height="153"
                 width="222"> </a></div>
              <h5 class="product-title"><a href="arepa-santandereana.html">Arepa
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
              <div class="product-figure"><a href="bolsa-ecologica.html"><img
                 src="images/productos/bolsa-ecologica/bolsa-ecologica-1.jpg" loading="lazy" alt="Bolsa ecológica" height="153" width="222"> </a>
              </div>
              <h5 class="product-title"><a href="bolsa-ecologica.html">Bolsa ecológica<br>
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

        