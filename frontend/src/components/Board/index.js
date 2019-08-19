import React, {Component} from 'react';
import List from '../List';
import {Link} from 'react-router-dom';


export default class Board extends Component{

    constructor(props){
        super(props);

       this.name ='';

    }

    render(){
        return (
            <div className="Container board">
                <List/>
                <List/>
                <List/>
                <List/>

            </div>
        )
    }
}