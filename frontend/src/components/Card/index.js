import React, {Component} from 'react';
import { useDrag } from 'react-dnd';



export default function Card ({data}){


    
        const [{ isDragging }, dragRef] = useDrag({
            item: {type: 'CARD'},
            collect: monitor =>({isDragging: monitor.isDragging()})
        });

    

 
    
    

        
    

        return (
            <div className="Container" ref={dragRef}>
               <div className="card cards">
                <div className="card-body">
                    This is some text within a card body.
                    
                </div>
                </div>
            </div>
        )
    
}