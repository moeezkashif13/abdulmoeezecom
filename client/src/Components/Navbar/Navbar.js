import React from 'react';
// import './Navbar.css';


require('./Navbar.css');

// import { AiOutlineUser,AiOutlineShoppingCart,AiOutlineSearch } from "react-icons/ai";

const Navbar = ()=>{

    return(
        <nav>

<ul id="ulList">

<li className="listItem"><a href="#!">Men</a></li>
<li className="listItem"><a href="#!">Women</a></li>
<li className="listItem"><a href="#!">Outlet</a></li>
<li className="listItem"><a href="#!">Blog</a></li>
<li className="listItem"><a href="#!">About</a></li>
<li className="listItem"><a href="#!">Contact</a></li>

</ul>

<div className="logo">

<img alt="logo" src="https://cdn.shopify.com/s/files/1/1241/4530/files/logo_home_360x.png?v=1582201056"/>

</div>

<div className="remaining">

{/* <li><a href="#!"><AiOutlineSearch/></a></li>

<li><a href="#!"><AiOutlineUser/></a></li>

<li><a href="#!"><AiOutlineShoppingCart/></a></li> */}



</div>

        </nav>
    )

}


export default Navbar;