const mainContent = document.querySelector('.main-content');

let products = [];
let total = 0;





if (sessionStorage.getItem('shopping-cart')) 
{
    products = JSON.parse(sessionStorage.getItem('shopping-cart'));
    itemsGrid = products.map((item,index) =>{

        total +=  item.productPrice * item.productQuantity;

        return `<tr id ="${index}">
            <td><a class="table-cart-figure" href="${item.productUrl}"><img src="${item.productImage}" alt="${item.productName}}" width="146" height="132"/></a><a class="table-cart-link" href="${item.productUrl}">${item.productName}</a></td>
            <td>${convertPesos(item.productPrice)}</td>
            <td>
                <div class="table-cart-stepper">
                    <input class="form-input" type="number" data-zeros="true" value="${item.productQuantity}"  onchange="addToCart(this.value ,${index})" min="1" max="1000" >
                </div>
            </td>
            <td id="td-${index}-quantity">${convertPesos(item.productPrice * item.productQuantity)}</td>
            <td><input class ="btn btn-danger" type="button" value="Eliminar" onclick="deleteProduct(this)"></td>
            
        </tr>
        `
    }).join('')
    
}
if(products.length > 0)
{
    mainContent.innerHTML = 
    `<!-- Shopping Cart-->
    <section class="section section-sm bg-default text-md-start">
       <div class="container">
          <h3 class="fw-medium">Carrito de compras</h3>
          <p class="post-modern-text">
          Tenemos excelentes <strong>DESCUENTOS</strong> a mayor cantidad y recuerda que hacemos envios a nivel nacional desde 3 productos elige los que mas te gusten
          </p>
          <div class="table-custom-responsive">
             <table class="table-custom table-cart">
                <thead>
                   <tr>
                      <th>Nombre del producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Total</th>
                   </tr>
                </thead>
                <tbody>
                   
                    ${itemsGrid}
                </tbody>
             </table>
          </div>
       </div>
    </section>
    <!-- Section Datos -->
    <section class="section section-sm section-last bg-default text-md-start">
       <div class="container">
          <div class="row row-50 justify-content-center ">
             <div class="col-md-10 col-lg-6 order-2 order-md-1">
                <h3 class="fw-medium">Datos de envio</h3>
                <form id="cart-form" class="rd-form rd-mailform form-checkout">
                   <div class="row row-30">
                      <div class="col-sm-6">
                         <div class="form-wrap">
                            <input class="form-input" id="checkout-first-name-1" type="text" name="name"  data-constraints="@Required"/>
                            <label class="form-label" for="checkout-first-name-1">Nombres</label>
                         </div>
                      </div>
                      <div class="col-sm-6">
                         <div class="form-wrap">
                            <input class="form-input" id="checkout-last-name-1" type="text" name="name"  data-constraints="@Required"/>
                            <label class="form-label" for="checkout-last-name-1">Apellidos</label>
                         </div>
                      </div>
                      <div class="col-12">
                         <div class="form-wrap">
                            <input class="form-input" id="checkout-address-1" type="text" name="name" data-constraints="@Required"/>
                            <label class="form-label" for="checkout-address-1">Dirección</label>
                         </div>
                      </div>
                      <div class="col-12">
                         <div class="form-wrap">
                            <input class="form-input" id="checkout-neighborhood-1" type="text" name="name" data-constraints="@Required"/>
                            <label class="form-label" for="checkout-neighborhood-1">Barrio y/o conjunto</label>
                         </div>
                      </div>
                      <div class="col-12">
                         <div class="form-wrap">
                            <input class="form-input" id="checkout-city-1" type="text" name="name" data-constraints="@Required"/>
                            <label class="form-label" for="checkout-city-1">Ciudad</label>
                         </div>
                      </div>
                      <div class="col-sm-6">
                         <div class="form-wrap">
                            <input class="form-input" id="checkout-email-1" type="email" name="email" data-constraints="@Email @Required"/>
                            <label class="form-label" for="checkout-email-1">Corréo electronico</label>
                         </div>
                      </div>
                      <div class="col-sm-6">
                         <div class="form-wrap">
                            <input class="form-input" id="checkout-phone-1" type="text" name="phone" data-constraints="@Numeric @Required"/>
                            <label class="form-label" for="checkout-phone-1">Teléfono</label>
                         </div>
                      </div>
                      
                      <div class="col-sm-12">
                         <div class="form-wrap">
                  
                           <select class ="form-input" name="bill-required" id="checkout-bill-required"  data-constraints="@Required">
                              <option value="">Factura electrónica</option>
                              <option value="Si">Si requiero factura electrónica</option>
                              <option value="No">No requiero factura electrónica</option>
                           </select>
                        
                         </div>
                      </div>
                      
                      <div class="col-12">
                        <div class="form-wrap hide-stepper">
                           <input class="form-input" id="checkout-id" type="number" name="identification" />
                           <label class="form-label" for="checkout-id">Documento</label>
                        </div>
                      </div>

                      <div>
                        <div class="group-sm">
                           <button class="button button-primary">Realizar pedido</button>
                        </div>
                      </div>
                      
                   </div>
                </form>
             </div>
             <div class="col-md-10 col-lg-6  order-1 order-md-2">
                <h3 class="fw-medium">TOTAL</h3>
                <div class="table-custom-responsive">
                   <table class="table-custom table-custom-primary table-checkout">
                      <tbody>
                         <tr>
                            <td>Total productos</td>
                            <td id="total-productos">${convertPesos(total)}</td>
                         </tr>
                         <tr>
                            <td>Envio</td>
                            <td>gratis</td>
                         </tr>
                         <tr>
                            <td>Total</td>
                            <td id="total-neto">${convertPesos(total)}</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
                <p style="text-align: left;">
                Nuestros productos  están diseñados para brindar bienestar🍃 a tu cuerpo y deleitar🤤 tu paladar con una variedad de sabores deliciosos ¡atrévete a descubrirlos¡, es así que obtendrás un producto:
                </p>
               
                <p style="text-align: left;">
               
                </p>
                <ul style="text-align: left;" >
                <li>🌟Lleno de sabor natural</li>
                <li>🌟Saludable, ¡sin aditivos ni conservantes! </li>
                <li>🌟Obtendrás las propiedades de cada materia prima</li>
                <li>🌟Con envío ¡GRATIS! 🚛</li>
                <li>🌟Lo mejor es que cada vez que compras Nutriarepa, estás apoyando el agro santandereano 🌱</li>

                <p style="text-align: left;">
               ¡GRACIAS¡
                </p>
                </ul>
             </div>
          </div>
       </div>
    </section>`

    const form = document.querySelector('#cart-form');

    form.addEventListener('submit', (event)=>{
      event.preventDefault();

      

      const name           = document.querySelector('#checkout-first-name-1');
      const lastname       = document.querySelector('#checkout-last-name-1');
      const address        = document.querySelector('#checkout-address-1');
      const neighborhood   = document.querySelector('#checkout-neighborhood-1');
      const city           = document.querySelector('#checkout-city-1');
      const Email          = document.querySelector('#checkout-email-1');
      const phone          = document.querySelector('#checkout-phone-1');
      const billRequired   = document.querySelector('#checkout-bill-required');
      const identification = document.querySelector('#checkout-id');


      let validateForm = true;

      if(name.value === '')
      {
         validateForm = false;
         Swal.fire(
            'Error!',
            'Debe ingresar los nombres!',
            'error'
          )
      }
      if(lastname.value === '' && validateForm)
      {
         validateForm = false;
         Swal.fire(
            'Error!',
            'Debe ingresar los apellidos!',
            'error'
          )
      }
      if(address.value === '' && validateForm)
      {
         validateForm = false;
         Swal.fire(
            'Error!',
            'Debe ingresar la dirección!',
            'error'
          )
      }
      if(neighborhood.value === '' && validateForm)
      {
         validateForm = false;
         Swal.fire(
            'Error!',
            'Debe ingresar el barrio o conjunto!',
            'error'
          )
      }
      if(city.value === '' && validateForm)
      {
         validateForm = false;
         Swal.fire(
            'Error!',
            'Debe ingresar la ciudad!',
            'error'
          )
      }

      if(phone.value === '' && validateForm)
      {
         validateForm = false;
         Swal.fire(
            'Error!',
            'Debe ingresar el teléfono!',
            'error'
          )
      }

      if(billRequired.value === '' && validateForm)
      {
         validateForm = false;
         Swal.fire(
            'Error!',
            'Debe seleccionar si requiere factura electrónica',
            'error'
          )
      }
      if((identification.value === '' || identification.value === '0')   && billRequired.value === 'Si' && validateForm ) 
      {
         validateForm = false;
         Swal.fire(
            'Error!',
            'Es necesario el documento de identidad cuando se requiere factura electrónica',
            'error'
          )
      }

      if(validateForm)
      {
         
         total = 0

         const productItems = products.map(item => {
            total += item.productPrice * item.productQuantity
            return `${item.productQuantity}+${item.productName}%0A`
         }).join('')

        
        

         products = [];

         const iconsShoppingCart = document.querySelectorAll('.icon-shopping-cart');
   
         for(let item = 0; item < iconsShoppingCart.length; item++)
         {
            iconsShoppingCart[item].innerHTML = `<span>${products.length > 0 ? products.length : '' }</span>`
            
         }

         const productsJSON = JSON.stringify(products);
         sessionStorage.setItem('shopping-cart', productsJSON);
         
         mainContent.innerHTML = 
         `<!-- Shopping Cart-->
         <section class="section section-sm bg-default text-md-start">
            <div class="container">
            <h4 class="box-icon-modern-title">No hay nutriarepa en el carrito de compra</h4>
               <a class="button button-lg button-primary button-zakaria" href="nuestros-productos.html">Yo quiero</a>
            </div>
         </section>`
         
         const url = `https://api.whatsapp.com/send?phone=+573022649964&text=Hola%21%F0%9F%91%8B+%2ANutriarepa%2A+me+encantaria+estos+productos%0A%0A%2AOrden+de+compra%2A%0ANombre%3A${encodeURIComponent(name.value) + ' ' + encodeURIComponent(lastname.value)}%0ADirecci%C3%B3n%3A${encodeURIComponent(address.value)}%0ABarrio+y%2Fo+Conjuto%3A${encodeURIComponent(neighborhood.value)}%0ACiudad%3A${encodeURIComponent(city.value)}%0ACorreo%3A${encodeURIComponent(Email.value)}%0ATel%C3%A9fono%3A${encodeURIComponent(phone.value)}%0AFE%3A${encodeURIComponent(billRequired.value)}%0ADocumento%3A${encodeURIComponent(identification.value)}%0A%0A%F0%9F%8C%9F%2APedido%2A%0A${productItems}%0A%2ATotal%2A%0A${encodeURIComponent(convertPesos(total))}%0A%0A%2A%C2%BFMedios+de+pago%3F%2A%0A%2A%C2%A1Gracias%C2%A1%2A`

         const message = 
         

         window.open(url, '_blank')
      }
      
      


    })
    


}
else
{
   mainContent.innerHTML = 
   `<!-- Shopping Cart-->
   <section class="section section-sm bg-default text-md-start">
      <div class="container">
      <h4 class="box-icon-modern-title">No hay nutriarepa en el carrito de compra</h4>
         <a class="button button-lg button-primary button-zakaria" href="nuestros-productos.html">Yo quiero</a>
      </div>
   </section>
   `
}
function addToCart(value, id)
{
    products[id].productQuantity = Number(value)
    console.log(value)

    const productsJSON = JSON.stringify(products);
    sessionStorage.setItem('shopping-cart', productsJSON);

    const labelTotal = document.querySelector(`#td-${id}-quantity`)

    labelTotal.innerHTML = convertPesos(Number(products[id].productPrice) * Number(products[id].productQuantity))
    
    total = 0
    products.forEach(item => total += item.productPrice * item.productQuantity) 

    const labelTotalProducts = document.querySelector('#total-productos')
    const labelTotalNeto     = document.querySelector('#total-neto')

    labelTotalProducts.innerHTML = convertPesos(total)
    labelTotalNeto.innerHTML     = convertPesos(total)

}   

function deleteProduct(e)
{
    const productId = e.parentNode.parentNode.getAttribute("id")
    products.splice(productId,1)
    e.parentNode.parentNode.remove();

    const productsJSON = JSON.stringify(products);

    sessionStorage.setItem('shopping-cart', productsJSON);
    
    total = 0
    products.forEach(item => total += item.productPrice * item.productQuantity) 

    const labelTotalProducts = document.querySelector('#total-productos')
    const labelTotalNeto     = document.querySelector('#total-neto')

    const iconsShoppingCart = document.querySelectorAll('.icon-shopping-cart');
   
    for(let item = 0; item < iconsShoppingCart.length; item++)
    {
        iconsShoppingCart[item].innerHTML = `<span>${products.length > 0 ? products.length : '' }</span>`
        
    }

    labelTotalProducts.innerHTML = convertPesos(total)
    labelTotalNeto.innerHTML     = convertPesos(total)

    if(products.length === 0)
    {
      
      mainContent.innerHTML = 
      `<!-- Shopping Cart-->
      <section class="section section-sm bg-default text-md-start">
         <div class="container">
         <h4 class="box-icon-modern-title">No hay nutriarepa en el carrito de compra</h4>
            <a class="button button-lg button-primary button-zakaria" href="nuestros-productos.html">Yo quiero</a>
         </div>
      </section>
      `
    }


}



function convertPesos(number)
{
   return `$${new Intl.NumberFormat("es-CL").format(number)}`;
}

function sendOrder()
{
   alert('hI')
}