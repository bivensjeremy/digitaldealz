import React, { useState, useEffect } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { commerce } from './lib/commerce';


import Landing from './Pages/Landing';
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import Pricing from './Pages/Pricing';
import Store from './Pages/Store';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';


import Header from './components/Header';
import Footer from './components/Footer';


function App(){
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState({});

  const fetchProducts = async() => {
      const {data} = await commerce.products.list();
      setProducts(data);
  }

  const fetchCart = async () => {
      setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productID, quantity) => {
      const {cart} = await commerce.cart.add(productID, quantity);
      setCart(cart);
  }

  const handleUpdateCartQty = async (productID, quantity) =>{
    const {cart} = await commerce.cart.update(productID, { quantity });
    setCart(cart);
  }

  const handleRemoveFromCart = async(productID) =>{
    const {cart} = await commerce.cart.remove(productID);
    setCart(cart);
  }
  const refreshCart = async() => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  const handleCaptureCheckout = async(checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  const handleEmptyCart = async() =>{
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  }

  useEffect(() =>   {
      fetchProducts();
      fetchCart();
  }, []);


  return (
    <Router>
      <div>
        <Header totalItems={cart.total_items} />
      </div>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/About' component={About}/>
        <Route path='/FAQ' component={FAQ}/>
        <Route path='/Pricing' component={Pricing}/>
        <Route path='/Store'>
          <Store products={products} onAddToCart={handleAddToCart} />
        </Route>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Cart'>
          <Cart 
            cart={cart} 
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart ={handleEmptyCart}
          />
        </Route>


        <Route path='/Checkout'>
          <Checkout 
            component={cart} 
            cart={cart}
            order={order}
            onCaptureCheckout={handleCaptureCheckout}
            error={errorMessage}
            totalItems={cart.total_items}
          />
        </Route>


      </Switch>
      


      <div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;