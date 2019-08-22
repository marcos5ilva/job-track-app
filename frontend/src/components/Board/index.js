import React, {Component} from 'react';
import {loadLists} from '../../services/api';
import List from '../List';
import {Link} from 'react-router-dom';


export default class Board extends Component{

    constructor(props){
        super(props);

       this.lists = loadLists();

    }

    render(){
        return (
            <div className="Container board">
                {this.lists.map(list =><List key={list.title} data={list}/>)}
              

            </div>
        )
    }
}