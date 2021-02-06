import React from 'react';
import Auxx from '../../Auxx/Auxx';
import {connect} from 'react-redux';
import ItemsShowingInCheckout from '../ItemsShowingInCheckout/ItemsShowingInCheckout';


require('../Checkout.css');

require('./ItemsShowingInCheckoutCONTAINER.css')


let trees = [];
let idsArr = [];
// let nowMainArray = [];

const ItemsShowingInCheckoutCONTAINER = props=>{

if(props.twoDetails!==null){
  trees.push(props.twoDetails);
idsArr.push(props.twoDetails.id);
}
let x = (names) => names.filter((v,i) => names.indexOf(v) == i)
let newIDS = x(idsArr); // 'John', 'Paul', 'George', 'Ringo'
let check = newIDS.map(elem=>{
  const result = trees.filter(tree => {
    return tree.id == elem;
   });
   return result;  
})
let avien = ch=>{
  let mapped = ch.map(elem=>{
   return elem.slice().pop(-1);
  })
  return mapped;
}
let mained = avien(check);
let checkBRO = [...mained];
// props.sendItToAppSAMP([props.sendToItemsShowingInCheckout,checkBRO]);

let arr = [];
  let sendToItemsShowingInCheckout;
  if(props.sendToItemsShowingInCheckout!==null&&props.signal){
    sendToItemsShowingInCheckout = props.sendToItemsShowingInCheckout.map((elem,index)=>{
// totalPriceInitial={elem.totalPriceInitial}
// console.log(elem,index);
// console.log(checkBRO);

console.log(elem);


let obj3 = {...elem,...checkBRO[index]}
arr.push(obj3);

let one = 1;
let oneMultiplied = 10;
return <ItemsShowingInCheckout key={index} pic={elem.pic} totalPriceInitial = {checkBRO[index]?checkBRO[index].multipliedTotal:elem.price}  quantityInNumbers ={checkBRO[index]?checkBRO[index].quantityInNumbers:1}  itemName={elem.shoe} size={elem.size} />})
}
let toSAMP = arr.map(elem=>{
  if(!elem.hasOwnProperty('quantityInNumbers')){
    console.log('yesss');
    
    elem['quantityInNumbers'] = 1;
    elem['multipliedTotal'] = 1*elem.price;

  }
  
})


props.sendItToAppSAMP(arr);

const sendSignalToAppSAMPFUNC = ()=>{
  props.sendSignalToAppSAMP(true);
}

    return(

        <Auxx>
    <div className="discountCodeEtcOptions">
<div className="ItemsShowingInCheckout">

{/* <ItemsShowingInCheckout /> */}

{sendToItemsShowingInCheckout}


</div>





          <input  onClick={sendSignalToAppSAMPFUNC} type="submit" className="btn" value="Stripe Secure Checkout" />







</div>

</Auxx>




        )
} 


      const mapStateToProps = state=>{

        return{
      
            // sendItToAppJS : state.sendItToAppJS,
      
            sendToItemsShowingInCheckout : state.sendToItemsShowingInCheckout,
      
            signal: state.signal,
      
      
            twoDetails : state.twoDetails,
      
      
        }
      
      }
      
      
      const mapDispatchToProps = dispatch=>{
      
        return{
      
          sendItToAppSAMP : mainArr=>dispatch({type:'sendItToAppSAMP',arr:mainArr}),
      
          sendSignalToAppSAMP : indic=>dispatch({type:'sendSignalToAppSAMP',indic,})
        }
      
      }
      
export default connect(mapStateToProps,mapDispatchToProps)(ItemsShowingInCheckoutCONTAINER);
      