import React, {Component} from 'react';
import Card from '../Card';



export default function List ({data, index: listIndex}){
 

    
    return (
        <div className="Container list">
            <header>
                <h2>{data.title}</h2>
                {data.creatable && (<button type ="button">
                 <i className="fa fa-plus" aria-hidden="true"></i>
                </button>)}
                    
            </header>
            <ul>
                {data.cards.map((card, index) => <Card key={card.id} listIndex= {listIndex} index={index} data={card}/>)}
            </ul>
                
        </div>
    );
    
}