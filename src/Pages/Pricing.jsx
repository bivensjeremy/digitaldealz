import React from 'react';

function Pricing(){
    return (
        <div>
          <div class="container">
            <h1 class="pricing-title">Pricing</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
            
            <div class="col">
            <div class="card pricing-card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">Tops</h3>
                    <p class="card-text">$20</p>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div class="col">
            <div class="card pricing-card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">Bottoms</h3>
                    <p class="card-text">$20</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            <div class="col">
            <div class="card pricing-card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">Shoes</h3>
                    <p class="card-text">$20</p>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div class="col">
            <div class="card pricing-card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">Accessories</h3>
                    <p class="card-text">Priced as Marked</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>   
        </div>
        
    );
};

export default Pricing;