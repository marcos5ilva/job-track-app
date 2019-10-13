import React, {Component, useRef, useContext} from 'react';
import { useDrag, useDrop } from 'react-dnd';
import BoardContext from '../Board/context';
import Board from '../Board';



export default function Card ({data, index, listIndex}){

    
        const ref = useRef();
        const { move } = useContext(BoardContext);

        const [{ isDragging }, dragRef] = useDrag({
            item: {type: 'CARD', index, listIndex},
            collect: monitor =>({isDragging: monitor.isDragging(),
            }),
        });

        const[ , dropRef] = useDrop({
            accept:'CARD',
            hover(item, monitor){

                // console.log(item.index);
                // console.log(data.index);

                const draggedListIndex = item.listIndex;
                const targetListIndex = listIndex;
                const draggedIndex = item.index;
                const targetIndex = index;

                if(draggedIndex === targetIndex){
                    return;
                }
                
                const targetSize = ref.current.getBoundingClientRect();
                const targetCenter = (targetSize.bottom - targetSize.top) / 2;
               
                const draggedOffset = monitor.getSourceClientOffset();
                const draggedTop = draggedOffset.y - targetSize.top;
                
                if(draggedIndex < targetIndex && draggedTop < targetCenter){
                    return;
                }

                if(draggedIndex > targetIndex && draggedTop > targetCenter){
                    return;
                }

                move(draggedListIndex, targetListIndex,  draggedIndex, targetIndex);
                item.index = targetIndex;
                item.listIndex = targetListIndex;

            },

        })

    dragRef(dropRef(ref));

        return (
            <div className="Container" ref={ref} isDragging={isDragging}>
               <div className="card cards">
                <div className="card-body">
                    <h4 className="card-title">{data.labels}</h4>
                    <p className="card-text">{data.content}</p>
                    
                </div>
                </div>
            </div>
        )
    
}