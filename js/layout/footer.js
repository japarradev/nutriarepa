export  function renderFooter()
{
const footer        = document.querySelector('footer')
const footerContent = 
    `<div class="footer-modern-body section-xl context-dark">
    <div class="container">
        <div class="row row-40 row-md-50 justify-content-xl-between">
            <div class="col-md-10 col-lg-3 col-xl-4 wow fadeInRight">
                <div class="inset-xl-right-70 block-1">
                <h5 class="footer-modern-title">Galería</h5>
                <div class="row row-10 gutters-10" data-lightgallery="group">
                    <div class="col-4 col-sm-2 col-lg-4">
                        <!-- Thumbnail Minimal--><a class="thumbnail-minimal"
                            href="images/footer-gallery/footer-gallery-01.webp" data-lightgallery="item"><img 
                            src="images/footer-gallery/footer-gallery-01-thumbnail.webp"
                            alt="Imagen nutriarepa footer slide 1" height="93" width="93" loading="lazy"></a>
                    </div>
                    <div class="col-4 col-sm-2 col-lg-4">
                        <!-- Thumbnail Minimal--><a class="thumbnail-minimal"
                            href="images/footer-gallery/footer-gallery-02.webp" data-lightgallery="item"><img
                            src="images/footer-gallery/footer-gallery-02-thumbnail.webp"
                            alt="Imagen nutriarepa footer slide 2" height="93" width="93" loading="lazy"></a>
                    </div>
                    <div class="col-4 col-sm-2 col-lg-4">
                        <!-- Thumbnail Minimal--><a class="thumbnail-minimal"
                            href="images/footer-gallery/footer-gallery-03.webp" data-lightgallery="item"><img
                            src="images/footer-gallery/footer-gallery-03-thumbnail.webp"
                            alt="Imagen nutriarepa footer slide 3" height="93" width="93" loading="lazy"></a>
                    </div>
                    <div class="col-4 col-sm-2 col-lg-4">
                        <!-- Thumbnail Minimal--><a class="thumbnail-minimal"
                            href="images/footer-gallery/footer-gallery-04.webp" data-lightgallery="item"><img
                            src="images/footer-gallery/footer-gallery-04-thumbnail.webp"
                            alt="Imagen nutriarepa footer slide 4" height="93" width="93" loading="lazy"></a>
                    </div>
                    <div class="col-4 col-sm-2 col-lg-4">
                        <!-- Thumbnail Minimal--><a class="thumbnail-minimal"
                            href="images/footer-gallery/footer-gallery-05.webp" data-lightgallery="item"><img
                            src="images/footer-gallery/footer-gallery-05-thumbnail.webp"
                            alt="Imagen nutriarepa footer slide 5" height="93" width="93" loading="lazy"></a>
                    </div>
                    <div class="col-4 col-sm-2 col-lg-4">
                        <!-- Thumbnail Minimal--><a class="thumbnail-minimal"
                            href="images/footer-gallery/footer-gallery-06.webp" data-lightgallery="item"><img
                            src="images/footer-gallery/footer-gallery-06-thumbnail.webp"
                            alt="Imagen nutriarepa footer slide 6" height="93" width="93" loading="lazy"></a>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-7 col-lg-5 wow fadeInRight" data-wow-delay=".1s">
                <h5 class="footer-modern-title">Nuestros Productos</h5>
                <ul class="footer-modern-list footer-modern-list-2 d-sm-inline-block d-md-block">
                <li><a href="arepa-yuca-sin-queso">Arepa de yuca Original</a></li>
                <li><a href="arepa-yuca-queso">Arepa de yuca queso</a></li>
                <li><a href="arepa-yuca-semilla">Arepa de yuca semillas</a></li>
                <li><a href="arepa-platano">Arepa de plátano</a></li>
                <li><a href="arepa-arroz">Arepa de arroz</a></li>
                <li><a href="arepa-santandereana">Arepa Santandereana</a></li>
                <li><a href="bolsa-ecologica">Bolsa ecológica</a></li>
                </ul>
            </div>
            <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 wow fadeInRight" data-wow-delay=".2s">
                <h5 class="footer-modern-title">Contáctenos</h5>
                <ul class="contacts-creative">
                <li>
                    <div class="unit unit-spacing-sm flex-column flex-md-row">
                        <div class="unit-left"><span class="icon mdi mdi-map-marker"></span></div>
                        <div class="unit-body"><a href="https://g.page/nutriarepa?share">Envíos a nivel nacional</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="unit unit-spacing-sm flex-column flex-md-row">
                        <div class="unit-left"><span class="icon mdi mdi-phone"></span></div>
                        <div class="unit-body"><a href="tel:+573123213282">+57 (312) 321 32 82</a></div>
                    </div>
                </li>
                <li>
                    <div class="unit unit-spacing-sm flex-column flex-md-row">
                        <div class="unit-left"><span class="icon mdi mdi-email-outline"></span></div>
                        <div class="unit-body"><a href="mailto:nutriarepasangil@gmail.com">nutriarepasangil@gmail.com</a>
                        </div>
                    </div>
                </li>
                </ul>
                <ul class="list-inline list-social-3 list-inline-sm">
                <li><a class="icon mdi mdi-facebook icon-xxs" href="https://www.facebook.com/Nutriarepa.co"></a><br>
                </li>
                <li><a class="icon mdi mdi-instagram icon-xxs" href="https://www.instagram.com/nutriarepa.co/"></a><br>
                </li>
                <li><a class="icon mdi mdi-whatsapp icon-xxs" href="https://wa.me/573123213282/"></a><br>
                </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    <div class="footer-modern-panel text-center">
    <div class="container">
        <p class="rights"><span>©&nbsp; </span><span
            class="copyright-year"></span><span>&nbsp;</span><span>Nutriarepa</span><span>.&nbsp;
            All rights reserved.</span><span>&nbsp;</span><a href="privacy-policy">Privacy
            Policy</a><span>.</span>
        </p>
    </div>
    </div>        
    ` 
    footer.innerHTML = footerContent;

}

