import React, {Component} from 'react';
import { Modal, Button, ButtonToolbar} from 'react-bootstrap';
import Card from '../Card';
import AddCardModal from '../AddCardModal';




export default function List ({data, index: listIndex}){
 
    const [modalShow, setModalShow] = React.useState(false);
   
    return (
        <div className="Container list">
            <header>
                <h2>{data.title}</h2>
                {data.creatable && (
                    <ButtonToolbar>
                        
                        <Button variant="primary" size="lg" onClick = {()=> setModalShow(true)} block>
                           <i className="fa fa-plus" aria-hidden="true"></i>
                        </Button>
                        <AddCardModal
                             show = {modalShow}
                             onHide= {()=>setModalShow(false)}
                        />
                    </ButtonToolbar>)
                }
                    
            </header>
            <ul>
                
                {data.cards.map((card, index) => <Card key={card.id} listIndex= {listIndex} index={index} data={card}/>)}
            </ul>
                
        </div>
    );
    
}
