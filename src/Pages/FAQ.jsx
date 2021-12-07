import React from 'react';
import QandACard from '../components/QandACard'
import questions from '../questions';

function createCard(questions){
    return(
       <QandACard
            question={questions.question}
            answer={questions.answer}
        />  
    )  
};

function FAQ(){
    return (
        <div>
            <h1 class="text-uppercase text-center text-black faq-title">FAQ</h1>
            <hr class="store-header-line" />
            <h1 class="text-uppercase text-center text-black cart-title-long mb-5">Frequently Asked Questions</h1>

            <div class="container">
                <section class="faq-container bg-dark rounded">
                    <div class="faqs">
                    {questions.map(createCard)}
                    </div> 
                </section>
            </div>
        </div> 
    );
};

export default FAQ;