import React from 'react';
import {Link} from 'react-router-dom';

function Contact(){
    return (
        <div>
            <h1 class="text-uppercase text-center text-black contact-title">Contact Me</h1>
            <hr class="store-header-line" />
            <h1 class="text-uppercase text-center text-black cart-title-long mb-5">Didn't see what you were looking for in the <Link to='/FAQ'>FAQs</Link> Page?</h1>
            
            <div class="container contact-form">
                <div class="row">
                    <div class="col-md-6">
                        <img src="images/paperplane.png" alt="paper-plane" class="w-100 p-3" />
                    </div>
                   
                    <div class="col-md-6">
                        <form method="post">      
                            <div class="form-group">
                                <input type="text" name="Name" class="form-control" placeholder="Your Name" value="" />
                            </div>
                            
                            <div class="form-group">
                                <input type="email" name="Email" class="form-control" placeholder="Your Email" value="" />
                            </div>
                        
                            <div class="form-group">
                                <textarea name="Message" class="form-control message-body" placeholder="Your Message *"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <button class="btn btn-primary" type="submit">Send</button>
                            </div>

                        </form>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;