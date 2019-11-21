import React, { useState,useEffect, useCallback, useReducer} from 'react';
import {loadLists} from '../../services/api';
import List from '../List';
import BoardContext from './context';

import produce from 'immer';
import axios from 'axios';


//const data = loadLists();




export default function Board(){
    
 // const [lists,setLists] = useState(data);

   
   const [lists,setLists] = useState([]);
   const [firstList,setFirstList] = useState([]);
   //const [lists, listsDispatch] = useReducer(listsReducer, [])

  

    useEffect(() => {
        
       axios.get('http://localhost:5000/lists')
       .then(res => {
           const data = res.data.lists;
           if(data){
           setLists(data);
           console.log(data[0].cards)
           }
       })
     .catch(e =>{
       console.log(e)
     })
       
    },[])

   
    const addCard = async (newCard)=>{
        try{
           const card = await axios.patch('http://localhost:5000/cards/add/5dc7786edce42e2fa6b761f3',newCard)
            const newList = [...lists];
            if(card.data){
                newList[0].cards.push(card.data)               
            }
            setLists(newList)

        } catch(e){
            console.log("error")
        }
    }

    const removeCard = async (card)=>{
        try{
            axios.delete('http://localhost:5000/cards/'+card._id)
            
            console.log('card', card.list)
            lists.forEach(list => {
                console.log(list)
                if(list._id === card.list){
                    list.cards = list.cards.filter(cardList => {
                        return cardList._id !== card._id;
                    })
                }
            })

            console.log('newLists', [...lists])
            setLists([...lists]);
        } catch(e){
            console.log(e);
        }
    }



    

   

   
    function move(fromList, toList, from, to){
        console.log('fromList: '+ fromList);
        console.log('toList: '+ toList);
        console.log('from: '+ to);

        setLists(produce(lists, draft =>{
            const dragged = draft[fromList].cards[from];

             draft[fromList].cards.splice(from, 1);
             draft[toList].cards.splice(to, 0,dragged);
         }))
     }

    return (
        <BoardContext.Provider value={{lists, move}}>
           
             <div className="Container board">
                {lists.map((list, index) =><List key={list.title} index = {index}  data={list} addCard={addCard} removeCard={removeCard}/>)}
            </div>
        </BoardContext.Provider>
       
    ) 
}
