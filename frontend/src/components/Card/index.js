import React, {Component, useRef} from 'react';
import { useDrag, useDrop } from 'react-dnd';



export default function Card ({data}){

    
        const ref = useRef();

        const [{ isDragging }, dragRef] = useDrag({
            item: {type: 'CARD', id: data.id},
            collect: monitor =>({isDragging: monitor.isDragging(),
            }),
        });

        const[ , dropRef] = useDrop({
            accept:'CARD',
            hover(item, monitor){
                console.log(item.id);
                console.log(data.id);
            },

        })

 
    
    dragRef(dropRef(ref));

        
    

        return (
            <div className="Container" ref={dragRef}>
               <div className="card cards">
                <div className="card-body">
                    <h4 className="card-title">{data.labels}</h4>
                    <p className="card-text">{data.content}</p>
                    
                </div>
                </div>
            </div>
        )
    
}