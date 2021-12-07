import React from 'react';
import {Link} from 'react-router-dom';


function Header({totalItems}){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to='/' class="navbar-brand text-uppercase"><h2>Digital Dealz</h2></Link>
        <div class="collapse navbar-collapse d-flex justify-content-end">
      
      <ul class="navbar-nav">
        <li class="header-item">
          <Link to='/About' class="nav-link">About</Link>
        </li>
        <li class="header-item">
        <Link to='/FAQ' class="nav-link">FAQs</Link>
        </li>
        <li class="header-item">
        <Link to='/Store' class="nav-link">Store</Link>
        </li>
        <li class="header-item">
        <Link to='/Contact' class="nav-link">Contact</Link>
        </li>
        <li class="header-item">
          <Link to='/Cart' class="nav-link">
            <i class="fas fa-shopping-bag fa-lg"></i>
            <span class="top-0 start-100 translate-middle badge rounded-pill bg-primary">{totalItems} <span class="visually-hidden">cart quantity</span></span>
          </Link>
        </li>
      </ul>

    </div>
  </div>

</nav> 

    )

}

export default Header;