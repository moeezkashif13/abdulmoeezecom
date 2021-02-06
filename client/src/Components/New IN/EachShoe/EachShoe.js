import React from 'react';
import {connect} from 'react-redux';
import { Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// import MainPage from './Components/MainPage/MainPage';
// import {Link} from 'react-router-dom';
import {sendbro} from './RELEATEDIMAGES';
require('./EachShoe.css');

AOS.init();

let arr = [];



const EachShoe = props=>{




    const changeMainPage = event=>{

        props.sendItToAppJS(props);

        showImageURL(event);

    }

    const showImageURL = event=>{
        let clickedImage = event.target.style.backgroundImage;
        
        
        
        
        
        let starting = clickedImage.indexOf('h');




        let ending = clickedImage.lastIndexOf('"');

let mainURL = clickedImage.slice(starting,ending);

let avi = sendbro(mainURL);

        // let imagesArr = [{
        //     first : 
        //     second :             third : 
        //     zonLast : mainURL,

        // }]

        let imagesArr = [

    //         [
    //             'https://cdn.shopify.com/s/files/1/1241/4530/products/MatchGrape_front_540x.jpg?v=1580748561',
    // 'https://cdn.shopify.com/s/files/1/1241/4530/products/MatchBlue_front_540x.jpg?v=1580748908',
    
    // 'https://cdn.shopify.com/s/files/1/1241/4530/products/MatchBlack_front_540x.jpg?v=1580747956',
    // mainURL
    
    
    // ]

    ...avi,


        ]



        // // console.log(event.target.style.backgroundImage);
        // let avien = {...props};
        

        // let releatedImages = Object.create({});
        
        // // console.log(av);
        // // console.log(...imagesArr);

        // imagesArr.forEach((elem,index)=>{
        //     releatedImages[index] = elem;
        //     // releatedImages.main = clickedImage
        //     // av['main'] = clickedImage;

        // })

        // // console.log(releatedImages);
        

        // props.sendDifferentColorsImages(releatedImages);
        props.sendDifferentColorsImages(imagesArr)
        

    }

    
    return(
//         <Col lg={3} md={6} sm={6} xs={12}>
//         <div className="column firstColumn" onClick={changeMainPage}>


// <a href="#!">

// <div className="pic" style={{backgroundImage:`url(${props.pic})`}}></div>

// <h6>{props.shoe}</h6>

// </a>

// </div>
//  </Col> 

<div className="column" onClick={changeMainPage} data-aos="fade-down" data-aos-offset="0"
    data-aos-delay="0"
    data-aos-duration="700"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top">

<a href="#!" className="columnLink">

<div className="picAndTextContainer">

<div  className="pic" style={{backgroundImage:`url(${props.pic})`}}></div>

<h6 style={{marginTop:props.marginTop}} className="itemName">{props.shoe}</h6>
<h6 style={{textAlign:'center',color:'red',fontWeight:'600',fontSize:'1.8rem'}}>{props.totalPriceInitial}</h6>

</div>

</a>


</div>



    )

}

const mapStateToProps = state=>{
    return{

    }
}


const mapDispatchToProps = dispatch=>{
    return{

        sendItToAppJS : mainObj=>dispatch({type:'sendItToAppJS',main:mainObj}),
        sendDifferentColorsImages : releated=>dispatch({type:'sendDifferentColorsImages',releated})

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(EachShoe);