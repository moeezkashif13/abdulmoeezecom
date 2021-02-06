import React from 'react';

import Auxx from '../Auxx/Auxx';

import EachShoe from './EachShoe/EachShoe';

// import {
//     BrowserRouter,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
  


const URL = ['https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBeat_Black_1024x1024@2x.jpg?v=1606432414','https://cdn.shopify.com/s/files/1/1241/4530/products/AtomDual_Grey_1024x1024@2x.jpg?v=1609974926','https://cdn.shopify.com/s/files/1/1241/4530/products/MarathonMilano_Blue_1024x1024@2x.jpg?v=1609974889','https://cdn.shopify.com/s/files/1/1241/4530/products/MistBluePerfil_720x.jpg?v=1538979012'];



const URL1= ['https://cdn.shopify.com/s/files/1/1241/4530/products/MistBluePerfil_1024x1024@2x.jpg?v=1538979012','https://cdn.shopify.com/s/files/1/1241/4530/products/MateriaBootBluePerfil_1024x1024@2x.jpg?v=1570440660','https://cdn.shopify.com/s/files/1/1241/4530/products/VolcanoBlackPerfil_1024x1024@2x.jpg?v=1538979061','https://cdn.shopify.com/s/files/1/1241/4530/products/VolcanoBluePerfil_1024x1024@2x.jpg?v=1538979059'];


const URL2= ['https://cdn.shopify.com/s/files/1/1241/4530/products/perfilblack_1024x1024@2x.jpg?v=1531731011','https://cdn.shopify.com/s/files/1/1241/4530/products/MarathonOriginBlackPerfil_720x.jpg?v=1568022693','https://cdn.shopify.com/s/files/1/1241/4530/products/MarathonSkinBluePerfil_1_720x.jpg?v=1550159891','https://cdn.shopify.com/s/files/1/1241/4530/products/MarathonMilano_Blue_perfil_720x.jpg?v=1609974891'];


const URL3= ['https://cdn.shopify.com/s/files/1/1241/4530/products/Negra_01_1024x1024@2x.jpg?v=1549360758','https://cdn.shopify.com/s/files/1/1241/4530/products/Bolso_block_blanco_1_1024x1024@2x.jpg?v=1567393345','https://cdn.shopify.com/s/files/1/1241/4530/products/PocketYBlue1_720x.jpg?v=1571143899','https://cdn.shopify.com/s/files/1/1241/4530/products/PocketXBeige1_720x.jpg?v=1571143811'];


const URL4= ['https://cdn.shopify.com/s/files/1/1241/4530/products/TokioDarkGrey_front_1024x1024@2x.jpg?v=1580749367','https://cdn.shopify.com/s/files/1/1241/4530/products/MatchWhite_white_540x.jpg?v=1580748681','https://cdn.shopify.com/s/files/1/1241/4530/products/TokioDarkGrey_front_1024x1024@2x.jpg?v=1580749367','https://cdn.shopify.com/s/files/1/1241/4530/products/MatchWhite_white_540x.jpg?v=1580748681'];

// const URL = ['2','2','2','2'];

// const URL1 = ['2','2','2','2'];


// const URL2 = ['2','2','2','2'];


// const URL3 = ['2','2','2','2'];


// const URL4 = ['2','2','2','2'];





let trying = [

    [
    {itemName:'First Boot',url:URL1[0],size:'XS',price:'40',totalPriceInitial:'40.00'},
    {itemName:'Second Boot',url:URL1[1],size:'SM',price:'40',totalPriceInitial:'40.00'},
    {itemName:'Third Boot',url:URL1[2],size:'ML',price:'40',totalPriceInitial:'40.00'},
    {itemName:'Fourth Boot',url:URL1[3],size:'XL',price:'40',totalPriceInitial:'40.00'},
]

,[
    {itemName:'First Shoe',url:URL2[0],size:'XS',price:'60',totalPriceInitial:'60.00'},
    {itemName:'Second Shoe',url:URL2[1],size:'SM',price:'60',totalPriceInitial:'60.00'},
    {itemName:'Third Shoe',url:URL2[2],size:'ML',price:'60',totalPriceInitial:'60.00'},
    {itemName:'Fourth Shoe',url:URL2[3],size:'XL',price:'60',totalPriceInitial:'60.00'},
]

,[
    {itemName:'First Accessory',url:URL3[0],size:'XS',price:'80',totalPriceInitial:'80.00'},
    {itemName:'Second Accessory',url:URL3[1],size:'SM',price:'80',totalPriceInitial:'80.00'},
    {itemName:'Third Accessory',url:URL3[2],size:'ML',price:'80',totalPriceInitial:'80.00'},
    {itemName:'Fourth Accessory',url:URL3[3],size:'XL',price:'80',totalPriceInitial:'80.00'},
]

,[
    {itemName:'First Wear',url:URL4[0],size:'XS',price:'40',totalPriceInitial:'40.00'},
    {itemName:'Second Wear',url:URL4[1],size:'SM',price:'10',totalPriceInitial:'10.00'},
    {itemName:'Third Wear',url:URL4[2],size:'ML',price:'80',totalPriceInitial:'80.00'},
    {itemName:'Fourth Wear',url:URL4[3],size:'XL',price:'10',totalPriceInitial:'10.00'},
],

[
    {itemName:'First Sneaker',url:URL[0],size:'XS',price:'30',totalPriceInitial:'30.00'},
    {itemName:'Second Sneaker',url:URL[1],size:'SM',price:'30',totalPriceInitial:'30.00'},
    {itemName:'Third Sneaker',url:URL[2],size:'ML',price:'30',totalPriceInitial:'30.00'},
    {itemName:'Fourth Sneaker',url:URL[3],size:'XL',price:'30',totalPriceInitial:'30.00'},
],

]


const Arr = props=>{

    let check;


    // RENDERINGGG SNEAKERSSS
    if(props.collection==='BOOT'){
    
        check = trying[1].map((elem,index)=>{

            return(


                <Auxx key={index}>
    
            {/* <EachShoe key={index} shoe={elem.itemName} pic={elem.url}/>          */}
            <EachShoe  price={elem.price}  key={index} size={elem.size} totalPriceInitial = {elem.totalPriceInitial} shoe={elem.itemName} pic={elem.url}/>
           </Auxx>

            
)
        })

    // RENDERINGGG BOOTTSSS

    }else if(props.collection==='SNEAKERS'){
        check = trying[0].map((elem,index)=>{

            return( <Auxx key={index}>
    
            {/* <EachShoe key={index} shoe={elem.itemName} pic={elem.url}/>          */}
            {/* <Container> */}
            <EachShoe  price={elem.price} key={index} size={elem.size} totalPriceInitial = {elem.totalPriceInitial} shoe={elem.itemName} pic={elem.url}/>
            {/* </Container> */}
           </Auxx>
)
        })
    
    }


    // RENDERINGGG COMINGG SOONN

    else if(props.collection==='SHOES'){
        check = trying[2].map((elem,index)=>{

            return( <Auxx key={index}>
    
            {/* <EachShoe key={index} shoe={elem.itemName} pic={elem.url}/>          */}
               
            <EachShoe price={elem.price} key={index} size={elem.size} totalPriceInitial = {elem.totalPriceInitial} shoe={elem.itemName} pic={elem.url}/>
           </Auxx>
)
        })
    
    }


    // 

    else if(props.collection==='ACCESSORIES'){
        check = trying[3].map((elem,index)=>{

            return( <Auxx key={index}>
    
            {/* <EachShoe key={index} shoe={elem.itemName} pic={elem.url}/>       */}

            <EachShoe price={elem.price}  key={index} size={elem.size} totalPriceInitial = {elem.totalPriceInitial} shoe={elem.itemName} pic={elem.url}/>   
               
           </Auxx>
)
        })
    
    }


    // 
    else if(props.collection==='WEAR'){
        check = trying[4].map((elem,index)=>{
            
            return( <Auxx key={index}>
    
            <EachShoe marginTop="10px" price={elem.price} key={index} size={elem.size} totalPriceInitial = {elem.totalPriceInitial} shoe={elem.itemName} pic={elem.url}/>         
               
           </Auxx>
)
        })
    
    }

return <Auxx>{check}</Auxx>


}


export default Arr;