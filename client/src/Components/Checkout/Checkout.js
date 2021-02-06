import React from 'react';
// import ItemsShowingInCheckout from './ItemsShowingInCheckout/ItemsShowingInCheckout';

import ItemsShowingInCheckoutCONTAINER from './ItemsShowingInCheckoutCONTAINER/ItemsShowingInCheckoutCONTAINER';
// import {connect} from 'react-redux';
// import Auxx from '../Auxx/Auxx';
require('./Checkout.css');

// let trees = [];
// let idsArr = [];
// let nowMainArray = [];
const Checkout = props=>{

// if(props.twoDetails!==null){
//   trees.push(props.twoDetails);
// idsArr.push(props.twoDetails.id);
// }
// let x = (names) => names.filter((v,i) => names.indexOf(v) == i)
// let newIDS = x(idsArr); // 'John', 'Paul', 'George', 'Ringo'
// let check = newIDS.map(elem=>{
//   const result = trees.filter(tree => {
//     return tree.id == elem;
//    });
//    return result;  
// })
// console.log(check);
// let avien = ch=>{
//   let mapped = ch.map(elem=>{
//    return elem.slice().pop(-1);
//   })
//   return mapped;
// }
// let mained = avien(check);
// let checkBRO = [...mained];
//   let sendToItemsShowingInCheckout;
//   if(props.sendToItemsShowingInCheckout!==null&&props.signal){
//     sendToItemsShowingInCheckout = props.sendToItemsShowingInCheckout.map((elem,index)=>{
// // totalPriceInitial={elem.totalPriceInitial}

// let one = 1;
// let oneMultiplied = 10;
// return <ItemsShowingInCheckout totalPriceInitial = {checkBRO[index]?checkBRO[index].multipliedTotal:null}  quantityInNumbers ={checkBRO[index]?checkBRO[index].quantityInNumbers:null}  itemName={elem.shoe} size={elem.size} />})
// }



  return(

    <section className="checkoutSection">

<div className="checkoutHere">
  <p>Checkout Here</p>
</div>
{/* <Auxx> */}


<div className="twoSidesFlex">

<ItemsShowingInCheckoutCONTAINER/>
  
</div>

      </section>

  )


}

export default Checkout;
