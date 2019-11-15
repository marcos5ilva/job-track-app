import React, { useState,useEffect, Component} from 'react';
import {loadLists} from '../../services/api';
import List from '../List';
import BoardContext from './context';
import produce from 'immer';
import axios from 'axios';


const data = loadLists();


export default function Board(){
    
  const [lists,setLists] = useState(data);

   
  // const [lists,setLists] = useState([]);

  //  useEffect(() => {
  //     axios.get('http://localhost:5000/lists')
  //     .then(res => {
  //       setLists(res.data.lists)
  //     })
  //   .catch(e =>{
  //     console.log(e)
  //   })
  
  //  })


   
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
            {console.log('lists: '+lists)}
             <div className="Container board">
            {lists.map((list, index) =><List key={list.title} index = {index}  data={list}/>)}
        </div>
        </BoardContext.Provider>
       
    ) 
}
