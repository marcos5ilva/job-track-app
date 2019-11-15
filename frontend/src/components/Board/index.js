import React, { useState,useEffect, Component} from 'react';
import {loadLists} from '../../services/api';
import List from '../List';
import BoardContext from './context';
import produce from 'immer';
import axios from 'axios';







//const data = loadLists();


export default function Board(){
    
  //const [lists,setLists] = useState(data);

  //console.log(data[0].cards);
  //console.log(data[0].cards[1]);

   
    

   useEffect(() => {
     axios.get('http://localhost:5000/lists')
   .then(res => {
     setLists(res.data.lists)
   })
   .catch(e =>{
     console.log(e)
   })
  
   })

   const [lists,setLists] = useState([]);

    console.log('Lists after: ')
    console.log(lists);
    //console.log(lists[0].cards);

   
    function move(fromList, toList, from, to){
        setLists(produce(lists, draft =>{
            const dragged = draft[fromList].cards[from];

             draft[fromList].cards.splice(from, 1);
             draft[toList].cards.splice(to, 0,dragged);
         }))
     }
    return (
        <BoardContext.Provider value={{lists, move}}>
             <div className="Container board">
            {lists.map((list, index) =><List key={list.title} index = {index}  data={list}/>)}
        </div>
        </BoardContext.Provider>
       
    ) 
}
// export default class Board extends Component{

//     constructor(props){
//         super(props);

//        this.lists = loadLists();

//     }

//     render(){
//         const [lists, setLists] = useState(this.lists);
//         return (
//             <div className="Container board">
//                 {this.lists.map(list =><List key={list.title} data={list}/>)}
              

//             </div>
//         )
//     }
// }