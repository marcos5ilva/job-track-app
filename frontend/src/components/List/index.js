import React, {Component} from 'react';
import Card from '../Card';



export default class List extends Component{
    constructor (props){
        super(props);
    }

    render(){
        return (
            <div className="Container list">
                <header>
                    <h2>Searching</h2>
                    <button type ="button">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </header>
                <ul>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ul>
            </div>
        )
    }
}