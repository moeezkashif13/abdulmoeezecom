import React,{Component} from 'react';
import {connect} from 'react-redux';

import Auxx from '../Auxx/Auxx';

// import Cart from '../Cart/Cart';
// import {Link,BrowserRouter,Route,Switch} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


import EachShoe from '../New IN/EachShoe/EachShoe';

// import Cart from '../Cart/Cart';
// import Avien from './avien';
// import DropdownExampleSelection from '../Dropdown/Dropdown';
  
// import {Link,BrowserRouter,Switch,Route} from 'react-router-dom';

require('./MainPage.css');

AOS.init();

class MainPage extends Component{

    state = {
        zoomIt : false,
        shoeImageURL : null,
        targ : null,
        other : null,
counterInDifferentColorsFunc : -1,

    }

    componentDidUpdate(){

        let boxes = document.querySelectorAll('.box');

    
   
    
        boxes.forEach(elem=>{
    
            elem.addEventListener('click',this.differentColors);
    
        })
        
    
    }




    componentDidMount(){

        // document.addEventListener('aos:in', ({ detail }) => {
        //     console.log('animated in', detail);
        //   });
          
        //   document.addEventListener('aos:out', ({ detail }) => {
        //     console.log('animated out', detail);
        //   });
          

        let check = document.querySelectorAll('.singleFeature');

    let nodeToArray = Array.from(check);
    
    let Recommended = nodeToArray.splice(6,9);



    Recommended.forEach(elem=>{
        elem.classList.add('recommended');

elem.children[0].style.margin='0px !important'

    })

    


    }

    differentColors = event=>{
    
        let trying = document.querySelector("#trying");

        let normalLink = event.target.style.backgroundImage;

        let starting = normalLink.indexOf('h');

        let ending = normalLink.lastIndexOf('"');

let mainURL = normalLink.slice(starting,ending);

this.setState({shoeImageURL:mainURL})

        trying.style.backgroundImage = `url(${this.state.shoeImageURL})`;

    }

    addToCart = ()=>{

        this.props.sendToCartJS(this.props.sendItToAppJS);


    }

    mouseEnteringInTryingDIV = event=>{

        console.log('enterinngggg');
        

        let trying = document.querySelector("#trying");
        
        let normalLink = event.target.style.backgroundImage;
console.log(normalLink);

if(normalLink=='url("undefined")'){
    return;
}else if(normalLink){
        let starting = normalLink.indexOf('h');

        let ending = normalLink.lastIndexOf('"');

let mainURL = normalLink.slice(starting,ending);


this.setState({shoeImageURL:mainURL,zoomIt:true},()=>{

    trying.style.backgroundImage = `url(${this.state.shoeImageURL})`;

})

}


    }

    checking=()=>{
        this.setState({zoomIt:false},()=>{


            let trying = document.querySelector("#trying");
        

    trying.style.backgroundImage = `url(${this.state.shoeImageURL})`;

        })

    }

render(){

    let SPREADEDsendItToAppJS = {...this.props.sendItToAppJS};
   
    
        //    let boxesColors = document.createElement('a');
        //     boxesColors.setAttribute('class','box');
        //     boxesColors.setAttribute('style',`background-image:${eachi}`);

        let receivedDifferentColors = this.props.sendDifferentColorsImages;
        console.log(receivedDifferentColors);
        
let boxesBro;
        if(receivedDifferentColors!==null){
            boxesBro = receivedDifferentColors.map(elem=>{
                // console.log(elem);
return elem.map((eachi,index)=>{
    return <a href="#!" key={index} className="box" style={{backgroundImage:`url(${eachi})`}}>{'\u00A0'}</a>

})  
// return elem;
            })

        }
    

    

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    return(

        // <BrowserRouter>
        <Auxx>
{/* <TestZoom/> */}
        <section className="mainPageSection" data-aos="fade-down" data-aos-offset="0"
    data-aos-delay="0"
    data-aos-duration="700"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top"
>

<div className="firstSide" onMouseLeave={this.checking}>

<div id="trying"  onMouseEnter={this.mouseEnteringInTryingDIV} className="shoeimage" style={{backgroundImage:`url(${SPREADEDsendItToAppJS.pic})`}} ></div>}




</div>


<div className="secondSide" >
    
    {/* <h1>Alpha Beat Black</h1> */}

    <h1>{SPREADEDsendItToAppJS.shoe}</h1>

{/* <h4>€95.00</h4> */}

<h4>${SPREADEDsendItToAppJS.price}.00</h4>

<h4>Size : {SPREADEDsendItToAppJS.size}</h4>

<p className="description">A new redesign of our bestseller Alpha. With Beat, we have incorporated a marbled nylon surface, much more comfortable and warm for winter.</p>

<p className="description">Technical, minimalist and with a Blade Runner design.</p>

<p className="availablecolors">Available colors</p>

<div className="shoescolorflex">
 
 {/* <a href="#!" className="box" style={{marginLeft:'0px',backgroundImage:`url('https://cdn.shopify.com/s/files/1/1241/4530/products/TokioWhite_front_1024x.jpg?v=1580749499')`}}>{'\u00A0'}</a>

<a href="#!" className="box" style={{backgroundImage:`url('https://cdn.shopify.com/s/files/1/1241/4530/products/TokioBlue_front_1024x.jpg?v=1580749471')`}}>{'\u00A0'}</a>

 <a href="#!" className="box" style={{backgroundImage:`url('https://cdn.shopify.com/s/files/1/1241/4530/products/TokioOrange_front_1024x.jpg?v=1580749709')`}}>{'\u00A0'}</a> */}
  
{boxesBro}



{/* <a href="#!" className="box" style={{backgroundImage:`url(${SPREADEDsendItToAppJS.pic})`}}>{'\u00A0'}</a> */}

{/* <a href="#!" className="box" style={{backgroundImage:`url(${SPREADEDsendItToAppJS.pic})`}}>{'\u00A0'}</a> */}

</div>


{/* <div className="sizeflex">
    <p>Size</p>

<a href="#!" style={{marginLeft:'auto'}}> Size Chart</a>

</div> */}






{/* <button type="submit" className="cartbutton"> */}
    
{/* // <BrowserRouter>

// <div>
// <Link to='/checkout'>


// ADD TO CART
// </Link>
// {/* </button> */}

{/* // // <Switch>
// //     <Route path="/checkout" component={Checkout} />

// //     </Switch>
   
// // </div>
// //     </BrowserRouter> */}

{/* <Switch>
<Route path="/checkout" component={<Cart/>} />
<Link className="cartbutton" to="/checkout" onClick={this.addToCart}>Add To Cart</Link>
</Switch> */}
{/* <Link className="cartbutton" to="/checkout" onClick={this.addToCart}>Add To Cart</Link> */}
<a className="cartbutton" onClick={this.addToCart}>Add To Cart</a>


</div>


        </section>


<section className="whyDifferentSection">

<div className="whyUs">
<h1>Why Us ?</h1>

<div className="featuresFlex">

<div className="singleFeature">

<div style={{backgroundImage: `url(https://cdn.shopify.com/s/files/1/1241/4530/t/11/assets/01-Prestaciones.png?v=14408093769130641955)`}}></div>

<p>Advanced technical features</p>



</div>

<div className="singleFeature">

<div style={{backgroundImage: `url(https://cdn.shopify.com/s/files/1/1241/4530/t/11/assets/02-Minimal.png?v=11408318543327100840)`}} ></div>

<p>Minimalist design</p>



</div>

<div className="singleFeature">

<div style={{backgroundImage: `url(https://cdn.shopify.com/s/files/1/1241/4530/t/11/assets/03-Calidad.png?v=16383164991960461394)`}}></div>

<p>Affordable prices

</p>



</div>

<div className="singleFeature">

<div style={{backgroundImage: `url(https://cdn.shopify.com/s/files/1/1241/4530/t/11/assets/04-Precios.png?v=14709907656046389608)`}} ></div>

<p>High Quality Materials

</p>



</div>

<div className="singleFeature">

<div style={{backgroundImage: `url(https://cdn.shopify.com/s/files/1/1241/4530/t/11/assets/05-Unisex.png?v=3538364961926848663)`}} ></div>

<p>Uni design

</p>



</div>

<div className="singleFeature">

<div style={{backgroundImage: `url(https://cdn.shopify.com/s/files/1/1241/4530/t/11/assets/06-Veganos.png?v=18006436808747776259)`}} ></div>

<p>Vegan materials and processes

</p>

</div>


</div>


</div>

{/* <div className="whyUs"> */}
{/* <h1>You may also be interested in:</h1> */}

{/* <EachShoe phelayii="100%" unchayii="100%" shoe="First Recommended" pic="https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBeat_Black_1024x1024@2x.jpg?v=1606432414"/> */}


{/*  */}


{/* <div className="featuresFlex"> */}

{/* <div className="singleFeature">

<EachShoe shoe="First Recommended" pic="https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBeat_Black_1024x1024@2x.jpg?v=1606432414"/>



</div>

<div className="singleFeature">

<EachShoe   shoe="Second Recommended" pic="https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBeat_Black_1024x1024@2x.jpg?v=1606432414"/>


</div>

<div className="singleFeature">

<EachShoe   shoe="Third Recommended" pic="https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBeat_Black_1024x1024@2x.jpg?v=1606432414"/>


</div>

<div className="singleFeature">

<EachShoe   shoe="Secondddd Recommended" pic="https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBeat_Black_1024x1024@2x.jpg?v=1606432414"/>

</div> */}


{/* </div> */}


{/*  */}
{/* </div> */}

</section>
</Auxx>
// {/* </BrowserRouter> */}


    )
}

}


const mapStateToProps = state=>{

    return{

        sendItToAppJS : state.sendItToAppJS,
        sendDifferentColorsImages : state.sendDifferentColorsImages,

    }

}


const mapDispatchToProps = dispatch=>{

    return{
        sendToCartJS : detailsOfItem=>dispatch({type:'sendToCartJS',detailsOfItem:detailsOfItem})
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
