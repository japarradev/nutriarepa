function addToCart()
{
    const productName     = document.querySelector("#productName");
    const productPrice    = document.querySelector("#productPrice");
    const productQauntity = document.querySelector("#productQuantity");
    const productImage    = document.querySelector("#productImage");

    let products = [];
    let index = -1;
    const currentPage = window.location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

    if (sessionStorage.getItem('shopping-cart')) 
    {
		products = JSON.parse(sessionStorage.getItem('shopping-cart'));
        index = products.findIndex(item=> item.productName === productName.value)
    }
    
    if(index === -1)
    {
        const product = 
        {

            productName:productName.value,
            productQuantity:productQauntity.value,
            productPrice: productPrice.value,
            productImage:productImage.value,
            productUrl:currentPage

        }

        products.push(product)
        
    }    
    else
    {
        products[index].productQuantity = Number(products[index].productQuantity) + Number(productQauntity.value);
    }

    const productsJSON = JSON.stringify(products);

    sessionStorage.setItem('shopping-cart', productsJSON);

    console.log(productsJSON)

    const iconsShoppingCart = document.querySelectorAll('.icon-shopping-cart');
   
    for(let item = 0; item < iconsShoppingCart.length; item++)
    {
        iconsShoppingCart[item].innerHTML = `<span>${products.length > 0 ? products.length : '' }</span>`
        
    }
    
    Swal.fire({text: 'Te gustaría agregar mas productos al carrito',
    confirmButtonText:'Finalizar compra',
    cancelButtonText: 'Si',
    showCancelButton: true,
    confirmButtonColor: '#35296E',
    cancelButtonColor: '#049344',
    reverseButtons: true,

    icon:'success'}).then((result)=>{
        if (result.isConfirmed) 
        {
            window.location.href = "carrito.html";
        } 
    });
   
}