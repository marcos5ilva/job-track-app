import React, {Component, useState} from 'react';
import { Row, Col, Modal, Button, ButtonToolbar} from 'react-bootstrap';
import Card from '../Card';
import AddCardModal from '../AddCardModal';




export default function List ({data, index: listIndex, addCard, removeCard, editCard, addInterviewQuestion}){
 
    const [modalShow, setModalShow] = useState(false);
   
    return (
        <div className="Container list">
       
            <header>
                <h2 className="list-title">{data.title}</h2>
                {data.creatable && (
                    <ButtonToolbar>
                        
                        <Button size="sm" block onClick = {()=> setModalShow(true)}>
                           <i className="fa fa-plus" aria-hidden="true"></i>
                        </Button>
                        <AddCardModal
                             show = {modalShow}
                             onHide= {()=>setModalShow(false)}
                             addCard={addCard}
                        />
                    </ButtonToolbar>)
                }
                    
            </header>
            <ul>
                
                {data.cards.map((card, index) => <Card key={card._id} listIndex= {listIndex} index={index} data={card} removeCard={removeCard} editCard ={editCard} addInterviewQuestion={addInterviewQuestion}/>)}
            </ul>
               
        </div>
    );
    
}
