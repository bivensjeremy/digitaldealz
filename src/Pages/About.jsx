import React from 'react';
import {Link} from 'react-router-dom';

function About(){
    return (
        <div>
            <h1 class="text-uppercase text-center text-black about-title">About</h1>
            <hr class="store-header-line" />
            <h1 class="text-uppercase text-center text-black cart-title-long mb-5">About this thrift shop</h1>
            
            <div class="container">
                <section class="about-container bg-dark">
                   
            <h3 class="text-light">The Website</h3>
            <p class="text-light">
                First and foremost, this is a real working website. Yes, the shopping cart, payment information and other functions work. <em>If you buy something and proceed through the shopping cart,</em> I will ship it. Please read through the <Link to='/FAQ'>FAQs</Link> if you have questions about my store policies. 
            </p>
            <h3 class="text-light">The Project</h3>
            <p class="text-light">
                This project is a representation of my experience in React.  Without going into much detail as to what React is (for the non-coders in the house), a great way to get practice in this coding language is through a commerce website. 
            </p>
            <h3 class="text-light">The Inventory</h3>
            <p class="text-light">
                Where did all these clothes come from, you ask? In my college days, between 2006-2012, I worked in a clothing store in the mall.  As such, I had access to all the latest fashion! As you may remember, the 2000s was a crazy time for hip-hop.  We did not exactly buy clothes true to our size! Many of the clothes are much bigger than I can ever hope to fit 🤣 ! What this means to you is, most are extremely lightly worn. Because they've always been in such good condition, I have been reluctant to throw them away.  I've always intended to sell them at the flea market, but I have no desire to wheel, deal and haggle.
            </p> 

            <button class="btn btn-outline-primary"><Link to='/Store' class="nav-link">Take Me to the Shop!</Link></button>
                
        </section>
                
            </div>
            
        </div>
        
    );
};

export default About;