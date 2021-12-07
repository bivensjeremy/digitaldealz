import React  from 'react';
import Shirt from '../components/Shirt'

const Store = function({products, onAddToCart}){

return (
    <div>
        <h1 class="text-uppercase text-center text-black store-header">Store</h1>
        <hr class="store-header-line" />
    <div class="inventory row row-cols-1 row-cols-md-4 g-4">
        {products.map((products) => (
            <Shirt products={products} onAddToCart={onAddToCart} />
        ))}
    </div>
    </div>

    );
};

export default Store;