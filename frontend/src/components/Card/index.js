import React, {Component} from 'react';



export default class List extends Component{
    constructor (props){
        super(props);
    }

    render(){
        return (
            <div className="Container">
               <div class="card">
                <div class="card-body">
                    This is some text within a card body.
                    
                </div>
                </div>
            </div>
        )
    }
}