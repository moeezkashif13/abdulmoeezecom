// import React, { Component, } from 'react';
// import ReactDOM from 'react-dom';

// import './CartItems.css';
// import {connect} from 'react-redux';
// // import Auxx from '../../Auxx/Auxx';

// // import { v4 as uuidv4 } from 'uuid';
// import { nanoid } from 'nanoid'
// import { v4 as uuidv4 } from 'uuid';


// import Parentttt from './DropdownQuantity/DropdownQuantity';


// class CartItems extends Component{



// state = {
// 	quantity : null,

//     tryi : false,
    
//     run : 1,
// toDropdown : false,
//     check : nanoid(),
//     uuidBRO : uuidv4(),
//     ch: null,

// }


// componentDidMount(){

// console.log('diddd mounttt');
// let quantityInNumbers =20;
// let multipliedTotal = 80;

// if(this.props.sendQuantityToCartItems!==null){
// console.log('diddd mounttt inn iffff');

//     this.changePrice();


// }else{
//     console.log('diddd mounttt in elseeee');
    
// }



// }


// componentDidUpdate(prevProps,prevState){

  
// // let mainID = this.state.uuidBRO;
// // let multipliedTotal = 10;
// // let quantityInNumbers = 1;
// // // console.log(quantityInNumbers,mainID,multipliedTotal);
// // this.props.twoDetails({id:mainID,quantityInNumbers,multipliedTotal});

// console.log('diddd updateee');



// if(this.props.sendQuantityToCartItems!=prevProps.sendQuantityToCartItems){

//     console.log('diddd updateeee inn iffff');
//     this.changePrice();
    
// }else{
//     console.log('diddd updatee inn elseeee');

    
// }


    
// }

//  timePairs(times)
// {
//   const result = []
//   for (let i = 0, n = times.length; i + 1 < n; i += 2) {
//     result.push([times[i], times[i + 1]])
//   }
//   return result
// }



// changePrice = (didmount)=>{
//     let quantity = this.props.sendQuantityToCartItems;
// console.log(quantity);
//     let quantityInNumbers = parseInt(quantity);

// console.log(quantityInNumbers,'lineee 76');


// if(!quantityInNumbers){
//     quantityInNumbers = 1;
// }
// console.log(quantityInNumbers,'lineee 83');

    
//     let totalPriceBefore = this.props.eachContainerTotalPrice;
//         let totalPrice;

//     if(totalPriceBefore!==null){
//        totalPrice =  totalPriceBefore.childNodes[1].firstChild;
//     }
    
//     // let realPrice = document.querySelector('.realPrice');
    
//     let realPrice = this.props.individualMainPrices.childNodes[1].firstChild;
 
//     // REALLL PRICEEE ME HAII MASLAA YAHANN PE WO EVENT TARGET WLAAA KAAMM HONAAA JESE UPPR TOTAL PRICE ME HUWAA
    
//     // ho saktaa jbb me yahann ke JSX me kchh add krunn to ye walaa function maslaa kare price waghera show karne me kyunn ke yahann pe mene manually elements ko selecttt kiyaa waa

//     let mainID = this.props.eachContainerTotalPrice.parentElement.id;

// 	if(realPrice!==null){

// 		let mainTotal = realPrice.innerText.split("$");

// 		let [nothing,totalWithoutDollar] = mainTotal;

		
// 		let totalWithoutDollarNUMBER = parseInt(totalWithoutDollar);
        

//         let multipliedTotal = quantityInNumbers*totalWithoutDollarNUMBER;
        
    
//         totalPrice.innerText = `$${multipliedTotal}.00`;

//     // let mainID = this.props.eachContainerTotalPrice.parentElement.id;

//     console.log(quantityInNumbers,mainID,multipliedTotal);
    


//     this.props.twoDetails({id:mainID,quantityInNumbers,multipliedTotal});
    

//         this.props.signal(false)
        
//         // this.props.twoDetails({quantityInNumbers,multipliedTotal});
//     }
//     // let multipliedTotal = 10;
//     // console.log(quantityInNumbers,mainID,multipliedTotal);
//     // console.log(quantityInNumbers);
    
    
//     // this.props.twoDetails({id:mainID,quantityInNumbers,multipliedTotal});



// }




    
// render(){



      
//     return(


// <div className="mainContainer"  id={`iddddd`+this.state.check}>

// <div className="chal chal1">


// <div className="price" style={{alignSelf:'flex-start'}}>
//     <p>Product</p>
// </div>

// <div className="imageAndOtherFlex">

// <div className="imag">
//     <img src={this.props.pic} alt="..."/>
// </div>

// <div className="productDetails">

// {/* // {props.sendItToAppJS!==null? */}


// {/* // <Auxx> */}
// {/* // {threeElements} */}
// {/* </Auxx> */}
// {/* :null} */}

// <a href="#!">{this.props.shoe}</a>
// <p>Size : {this.props.size}</p>
// <a href="#!">Remove</a>



// </div>

// </div>




// </div>


// <div className="chal chal2">

// <div className="price">
//     <p>Price</p>
// </div>

// <div className="mainPrice">
//     {/* <p className="realPrice" style={{color:'red'}}>$10.00</p> */}

//     <p className="realPrice" style={{color:'red'}}>${this.props.price}.00</p>
    
// </div>


// </div>


// <div className="chal chal3">

// <div className="price">
//     <p>Quantity</p>
// </div>

// <div className="mainPrice" style={{position:'relative'}}>
//     {/* <p>11111</p> */}


// <Parentttt  toDropdown={this.state.toDropdown} />

// </div>


// </div>

// <div className="chal chal4">

// <div className="price">
//     <p>Total</p>
// </div>

// <div className="mainPrice">
//     <p className="totalPrice">${this.props.totalPriceInitial}</p>
// </div>

// </div> 

//         </div>


//     )
// }
// }

// const mapStateToProps = state=>{

//     return{

// 		sendItToAppJS : state.sendItToAppJS,
		
//         sendQuantityToCartItems : state.sendQuantityToCartItems,
        
//         eachContainerTotalPrice : state.eachContainerTotalPrice,

//         individualMainPrices : state.individualMainPrices,

//         // sendItToAppSAMP : state.sendItToAppSAMP        

//     }

// }


// const mapDispatchToProps = dispatch=>{

//     return{
//         twoDetails : mainDetail=>dispatch({type:'twoDetails',main:mainDetail}),
//         signal : indicator=>dispatch({type:'signal',sign:indicator})

//     }

// }






// export default connect(mapStateToProps,mapDispatchToProps)(CartItems);


import React, { Component, } from 'react';

import './CartItems.css';
import {connect} from 'react-redux';
import Parentttt from './DropdownQuantity/DropdownQuantity';
import { nanoid } from 'nanoid'
import { v4 as uuidv4 } from 'uuid';


class CartItems extends Component{



state = {
	quantity : null,

    tryi : false,
    
    run : 1,
toDropdown : false,
    check : nanoid(),
    uuidBRO : uuidv4(),
    ch: null,

}


componentDidMount(){

let quantityInNumbers =20;
let multipliedTotal = 80;

if(this.props.sendQuantityToCartItems!==null){

    this.changePrice();


}



}


componentDidUpdate(prevProps,prevState){

  



if(this.props.sendQuantityToCartItems!=prevProps.sendQuantityToCartItems){

    this.changePrice();
    
}


    
}

 timePairs(times)
{
  const result = []
  for (let i = 0, n = times.length; i + 1 < n; i += 2) {
    result.push([times[i], times[i + 1]])
  }
  return result
}



changePrice = (didmount)=>{
    let quantity = this.props.sendQuantityToCartItems;
    let quantityInNumbers = parseInt(quantity);


if(!quantityInNumbers){
    quantityInNumbers = 1;
}

    
    let totalPriceBefore = this.props.eachContainerTotalPrice;
        let totalPrice;

    if(totalPriceBefore!==null){
       totalPrice =  totalPriceBefore.childNodes[1].firstChild;
    }
    
    
    let realPrice = this.props.individualMainPrices.childNodes[1].firstChild;
 
 
    let mainID = this.props.eachContainerTotalPrice.parentElement.id;

	if(realPrice!==null){

		let mainTotal = realPrice.innerText.split("$");

		let [nothing,totalWithoutDollar] = mainTotal;

		
		let totalWithoutDollarNUMBER = parseInt(totalWithoutDollar);
        

        let multipliedTotal = quantityInNumbers*totalWithoutDollarNUMBER;
        
    
        totalPrice.innerText = `$${multipliedTotal}.00`;


    


    this.props.twoDetails({id:mainID,quantityInNumbers,multipliedTotal});
    

        this.props.signal(false)
        
    }

}




    
render(){



      
    return(


<div className="mainContainer"  id={`iddddd`+this.state.check}>

<div className="chal chal1">


<div className="price" style={{alignSelf:'flex-start'}}>
    <p>Product</p>
</div>

<div className="imageAndOtherFlex">

<div className="imag">
    <img src={this.props.pic} alt="..."/>
</div>

<div className="productDetails">


<a href="#!">{this.props.shoe}</a>
<p>Size : {this.props.size}</p>
<a href="#!">Remove</a>



</div>

</div>




</div>



<div className="chal chal2">

<div className="price">
    <p>Total</p>
</div>

<div className="mainPrice" id="diffp">
    <p className="totalPrice">${this.props.price}.00</p>
</div>

</div> 


<div className="chal chal3">

<div className="price">
    <p>Quantity</p>
</div>

<div className="mainPrice" style={{position:'relative'}}>


<Parentttt  toDropdown={this.state.toDropdown} />

</div>


</div>

<div className="chal chal4">

<div className="price">
    <p>Total</p>
</div>

<div className="mainPrice">
    <p className="totalPrice">${this.props.totalPriceInitial}</p>
</div>

</div> 

        </div>


    )
}
}

const mapStateToProps = state=>{

    return{

		sendItToAppJS : state.sendItToAppJS,
		
        sendQuantityToCartItems : state.sendQuantityToCartItems,
        
        eachContainerTotalPrice : state.eachContainerTotalPrice,

        individualMainPrices : state.individualMainPrices,

        // sendItToAppSAMP : state.sendItToAppSAMP        

    }

}


const mapDispatchToProps = dispatch=>{

    return{
        twoDetails : mainDetail=>dispatch({type:'twoDetails',main:mainDetail}),
        signal : indicator=>dispatch({type:'signal',sign:indicator})

    }

}






export default connect(mapStateToProps,mapDispatchToProps)(CartItems);

