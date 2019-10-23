import React, { useState} from 'react';
import {loadLists} from '../../services/api';
import List from '../List';
import BoardContext from './context';
import produce from 'immer';


const data = loadLists();

console.log(data[0].cards);
console.log(data[0].cards[1]);

export default function Board(){

    const [lists, setLists] = useState(data);

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