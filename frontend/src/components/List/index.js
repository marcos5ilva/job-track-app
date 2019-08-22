import React, {Component} from 'react';
import Card from '../Card';



export default function List ({data}){
 

    
        return (
            <div className="Container list">
                <header>
                    <h2>{data.title}</h2>
                    {data.creatable && (<button type ="button">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>)}
                    
                </header>
                
                <ul>
                  {data.cards.map(card => <Card key={card.id} data={card}/>)}
                </ul>
                
            </div>
        );
    
}