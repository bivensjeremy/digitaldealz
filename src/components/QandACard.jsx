import React from 'react';

function QandACard(props){
    return(
        <div>
            <h3 class="question">{props.question}</h3>
            <p class="answer">{props.answer}</p>
        </div> 
    )
}


export default QandACard