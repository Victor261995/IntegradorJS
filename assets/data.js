const stock=[







   {id:1,
    name:"Mark Lanegan Blues Funeral" ,  
   precio:1500,
   descripcion:"lanzado en el 2010 , con influencias del blues y rock pesado ",
   imgcard:"./assets/img/mark-lanegan.jpg",
   categoria:"Blues/Rock",
   masvendidos:false,
   
   }

,
   {id:2,
    name:"Red Hot Chilli Peppers Unlimited Love" ,  
   precio:2500,
   descripcion:"lanzado en el 2022.Marca el retono de Frusciante a la banda .Necesita mas descripcion?",
   categoria:"Funk/Rock",
   imgcard:"./assets/img/portada-2.jpg",
 masvendidos:true,
   
   
   },

   {id:3,
    name:"Return Of the Dream Canteen" ,  
   precio:2500,
   imgcard:"./assets/img/portada-p.jpg",
   descripcion: "Lanzado en el 2022,secuela de Unlimited Love,quizas un poco mas funky que el anterior",
   categoria:"funk/Rock",
   
masvendidos:true,
   
   
   },
   {id:4,
    name:"Pearl Jam Ten" ,  
   precio:3200,
   imgcard:"./assets/img/pearljam2.jpg",
   descripcion:"lanzado en 1991 ,Perteneciente a la epoca grunge , muy buen disco debut  ",
   categoria:"Rock",
masvendidos:false,
   
   },

  {id:5,
    name:"Pearl Jam Vs" ,  
   precio:1500,
   descripcion:"lanzado en 1993 ,con un sonido mas pesado que su antecesor",
  imgcard:"./assets/img/pearljam.jpg",
  // "./assets/img/products/diego.png"
   categoria:"Rock",
   masvendidos:true,
   
   },

    
   {id:6,
      name:"La Renga Despedazado por mil Partes " ,  
     precio:1500,
     descripcion:"lanzado en 1996 ,una de las bandas mas convocantes de la Argentina de rock pesado ",
     imgcard:"/assets/img/larenga.jpg",
     categoria:"Rock",
     masvendidos:true,
     
     },

     ,

     {id:7,
      name:"Pearl Jam Binaural" ,  
     precio:1500,
     descripcion:"lanzado en el 2000 ,con un sonido mas experimental ",
     imgcard:"./assets/img/Pearljam-binaural.jpg",
     categoria:"Rock",
     masvendidos:false,
     
     },

     {id:8,
      name:"La Renga La esquina del infinito" ,  
     precio:1500,
     descripcion:"lanzado en el 2000 ",
     imgcard:"./assets/img/larenga2.jpg",
     categoria:"Rock",
     categoria:"masvendidos",
     masvendidos:true,
     }
  ,
     {id:9,
      name:"Mark Lanegan & Isobel Campell Hawk" ,  
     precio:1500,
     descripcion:"lanzado en el 2010 ,un dico con muchas influencias del blues y rock , cantado por dos voces antagonicas  ",
     imgcard: "./assets/img/laneganisobel.jpg",
     categoria:"Blues/Rock",
     masvendidos:false,
     
     },
  
  ,

  {id:10,
   name:"Virus Relax" ,  
  precio:3500,
  descripcion:"Rock/new wave 1984.Mitico Disco de la banda Virus ",
  imgcard: "./assets/img/relax984Virus.jpg",
  categoria:"Rock",
  masvendidos:true,
  
  },
  {id:11,
   name:"Slikpnot" ,  
  precio:3700,
  descripcion:"Disco de esos que cantan con mascaritas ",
  imgcard: "./assets/img/Slipknot.jpeg",
  categoria:"Metal",
  masvendidos:false,
  
  },
 

  {id:12,
   name:"Pantera Vulgar Display of Power" ,  
  precio:4000,
  descripcion:" Una banda metalosa ",
  imgcard: "./assets/img/Pantera.jpeg",
  categoria:"Metal",
  masvendidos:false,
  
  },
{id:13,
   name:"Nirvana Nevermind" ,  
  precio:4500,
  descripcion:"Disco representante del grunge de los 90' ",
  imgcard: "./assets/img/nirvana.jpg",
  categoria:"",
  masvendidos:true,
  
  },
  {id:14,
   name:"Megadeath Rust in Peace" ,  
  precio:4000,
  descripcion:"Uno de los mejores discos de Mustaine y compania",
  imgcard: "./assets/img/Megadeath.jpeg",
  categoria:"Metal",
  masvendidos:false,
  
  },

  {id:15,
   name:"Stick Figure Wisdom" ,  
  precio:4000,
  descripcion:"Unos de los mejores discos de reggae del 2022",
  imgcard: "./assets/img/Stickfigurewisdom.jpg",
  categoria:"Reggae",
  masvendidos:false,
  
  },

  {id:16,
   name:"Rondamon Si Seras" ,  
  precio:900,
  descripcion:"Unos de los mejores bandas de reggae Argentino",
  imgcard: "./assets/img/rondamon-2.jpg",
  categoria:"Reggae",
  masvendidos:false,
  
  },

  {id:18,
   name:"Gary Clark Jr This Land" ,  
  precio:1700,
  descripcion:"Uno de los mejores guitarristas de blues/rock de los ultimos tiempos ",
  imgcard: "./assets/img/Thisland.jpg",
  categoria:"Blues/Rock",
  masvendidos:false,
  
  },


];


const initialRender = (index = 0, category = undefined) => {
   const discosMasVendidos = stock.filter((cd) => cd.masvendidos=== true);
   products.innerHTML = discosMasVendidos.map(renderProduct).join("");
 };

 
 
 const renderDiscosMasVendidos = (e) => {
   if (e.target.dataset.categoria==="Los mas Vendidos") {
      titlecategory.innerHTML=`Los Mas Vendidos`
     initialRender();
     renderDividedProducts(index);
   }
 };

