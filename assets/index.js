const products=document.querySelector(".products-container");
const browse=document.querySelector(".findCD");
const resultsContainer=document.querySelector(".results");
const browseBtn=document.querySelector(".search-btn");
const sectionDiscos=document.querySelector(".Discos")
const login=document.querySelector(".navbar-login")
const productsCart=document.querySelector(".cart-content");

const total=document.querySelector(".total");

const category =document.querySelector(".categorias");

const categorylist=document.querySelectorAll(".categoria ");
const menuhambur=document.querySelector(".menu-label");
const cartMenu=document.querySelector(".cart");
const titlecategory=document.querySelector(".titlecategory");
const barsMenu=document.querySelector(".nav-list");
const cartbtn=document.querySelector(".cart-label");
const succesModal=document.querySelector(".add-modal");
const emptyBtn=document.querySelector(".btn-empty");
const deleteBtn = document.querySelector(".btn-delete");
const buyBtn = document.querySelector(".btn-buy");








let cart=JSON.parse(localStorage.getItem('cart'))||[];

  const saveLocalstorage =(cartList)=>{

  localStorage.setItem('cart',JSON.stringify(cartList));


};

const renderProduct = (product) => {
const {name,precio,descripcion,imgcard,id}=product;
return`
<div class="product">
 <img src="${imgcard}" alt=""/>
      <div class="product-info"    
      top
    <div class="product-top">
     <h3>${name}</h3>
     <p>${descripcion}</p>
     <p>$${precio}</p>
     </div>
     <button class="add-btn"
     data-id='${id}'
      data-name='${name}'
     
     data-precio='${precio}'
     data-img='${imgcard}'>Añadir al Carrito</button>
   </div>
</div>
`;
  };

 

 const renderTitle=(categoria)=>{
 if(categoria==="Los Mas Vendidos"){
  titlecategory.innerHTML=`Los Mas Vendidos`
 
   }else{
  titlecategory.innerHTML=`${categoria}`

     }


  };





 const filtrardiscos =(categoria)=>{
    const filtrar=stock.filter(

   (cd)=>cd.categoria===categoria

  )
 ;
  if(filtrar.length>0){
    products.innerHTML=filtrar.map(renderProduct).join('');

    }else{ renderError();

}

};

const filtrados=(e)=>{ 
  filtrardiscos(e.target.dataset.categoria);
 renderTitle(e.target.dataset.categoria);

}


 const estadoboton=(selectedBtn)=>{
    const categ=[...categorylist];
    categ.forEach((categbtn)=>{
    if(categbtn.dataset.category!==selectedBtn){
    categbtn.classList.remove("active")
return;


  }
    categbtn.classList.add("active")

});


};



 const cambiarFiltro=(e)=>{
  const selectedBtn=e.target.dataset.categoria;
   cambiarFiltro(selectedBtn);

}


const applyFilter=(e)=>{

  filtrados(e);
cambiarFiltro(e);


}

const toggleMenu=()=>{

  barsMenu.classList.toggle("open-menu");
  if(cartMenu.classList.contains("open-cart")){
  cartMenu.classList.remove("open-cart");
  return;
  
  }
  
  
  
  };

  const toggleCart = () => {
    cartMenu.classList.toggle("open-cart");
    if (barsMenu.classList.contains("open-menu")) {
      barsMenu.classList.remove("open-menu");
      return;
    }

  };
  
  const closeOnClick=(e)=>{
    if(!e.target.classList.contains("navbar-link"))return;
     barsMenu.classList.remove("open-menu");
  
     overlay.classList.remove('show-overlay')
  
  };
  
  const closeOnScroll=()=>{
  
  if(
     !barsMenu.classList.contains("open-menu")&&
     !cartMenu.classList.contains("open-cart")
  
  )
  return;
    barsMenu.classList.remove("open-menu");
    cartMenu.classList.remove("open-cart");

}


const renderCart=(cartCd)=>{
   const{id,name,precio,imgcard,cantidad}=cartCd;
  return`
   <div class="cart-item">

  <img src=${imgcard} alt="Caratula CD" />


  <div class="item-info">
  <h3 class=item-title>${name}</h3>
   <p class="precio-item">$${precio}</p>
  </div>
   <div class="manipular-item"> 
   <span class="cantidad menos"data-id=${id}>-</span>
   <span class="cantidad-item">${cantidad}</span>
   <span class="cantidad mas" data-id=${id}>+</span>
  </div>
</div>`;

}



const mostrarCart=()=>{
  if(!cart.length){
  productsCart.innerHTML=`<p class="empty-msg"> No hay productos en el carrito. </p>`;

 return;
}
productsCart.innerHTML=cart.map(renderCart).join("")


};

   const totalCarrito=()=>{
  return cart.reduce(
   (acc,cur)=>acc+Number(cur.precio)*Number(cur.cantidad),
  0


);

};

const mostrarTotal=()=>{

  total.innerHTML=`$${totalCarrito().toFixed(2)}`;

  };

const disableBtn=(btn)=>{
   if(!cart.length){
  btn.classList.add("disabled");
   return;

}
  btn.classList.remove("disabled");
}



const createStockData =(id,name,precio,imgcard)=>{
   return{id,name,precio,imgcard};
  
  };

  const existeProducto=(product)=>{
    return cart.find((item)=>item.id===product.id );
    
    
    };
    const añadirUnidad=(product)=>{

      cart=cart.map((cartCd)=>{
      
    return cartCd.id===product.id
    ?{...cartCd,cantidad:cartCd.cantidad+1}
      :cartCd;
      
      
      });
      
      };
      
      const crearProducto=(product)=>{
        cart= [...cart,{...product,cantidad:1}];
        
        };


  const addProducto=(e)=>{
    if(!e.target.classList.contains("add-btn"))return;
   const{id,name,precio,imgcard}=e.target.dataset;

   const product=createStockData(id,name,precio,imgcard);

     if(existeProducto(product)){
    añadirUnidad(product);
   mostrarmodal("se agrego una copia")

   }else{
   crearProducto(product);
   mostrarmodal("Se Agrego el CD al Carrito")

}

checkCartState();

};


  




const checkCartState=()=>{
  saveLocalstorage(cart);
  mostrarCart(cart);
mostrarTotal(cart);
disableBtn(buyBtn);
disableBtn(deleteBtn);

};

const mostrarmodal=(msg)=>{
  succesModal.classList.add("active-modal");
succesModal.textContent=msg;
setTimeout(()=>{
  succesModal.classList.remove("active-modal")
},1500);

};



const eliminarProducto=(productoExistente)=>{
cart=cart.filter(product=>product.id!==productoExistente.id)
checkCartState()
};





const sustraerProduct=(productoExistente)=>{
  cart=cart.map((cartCd)=>{
  return cartCd.id===productoExistente.id
  ?{
  ...cartCd,cantidad:cartCd.cantidad - 1}
  :cartCd;
  });
  
  };



const productMenos=(id)=>{

const productoExistente=cart.find(item=>item.id===id  );



if(productoExistente.cantidad===1){

if(window.confirm("¿eliminar este disco?")){

  eliminarProducto(productoExistente);
}
return;
}

sustraerProduct(productoExistente);


};



const productMas=(id)=>{

const productoExistente=cart.find((item)=>item.id===id );
añadirUnidad(productoExistente);


};

const cantidades=(e)=>{
if(e.target.classList.contains("menos")){
  productMenos(e.target.dataset.id);

}else if(e.target.classList.contains("mas")){
productMas(e.target.dataset.id);

}

checkCartState();

};










const resetCart=()=>{

cart=[];
checkCartState();

};

const finalizarCompra=()=>{
if(!cart.length)return;
if(window.confirm(
  "¿Desea completar su compra?")){
resetCart();
alert("la compra se ha realizado ");

};


};





const borrarCarrito=()=>{
  if(!cart.length)return;
  if (window.confirm(
    "¿Queres vaciar el carrito?")){
  resetCart();
  alert("No hay productos");
};
};


;




const init=()=>{
initialRender();

  category.addEventListener("click",applyFilter);
  category.addEventListener("click",renderDiscosMasVendidos)
cartbtn.addEventListener("click",toggleCart);
products.addEventListener("click",addProducto);
document.addEventListener("DOMContentLoaded", mostrarCart);
document.addEventListener("DOMContentLoaded", mostrarTotal);
menuhambur.addEventListener("click",toggleMenu);
barsMenu.addEventListener("click",closeOnClick);
window.addEventListener('scroll',closeOnScroll);
productsCart.addEventListener("click",cantidades);
buyBtn.addEventListener("click",finalizarCompra);
deleteBtn.addEventListener("click",borrarCarrito);
disableBtn(deleteBtn);
disableBtn(buyBtn);
};

init();