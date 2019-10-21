import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { directive, thisExpression } from '@babel/types';
import axios from 'axios';

export default class SignIn  extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
            this.state = {
            email:'',
            password:'',   
        };


    }

    //  componentDidMount(){
    //      axios.post('http://localhost:5000/users/signin')
    //          .then( response => {
    //              this.setState({ user: response.data});
    //          })
    //          .catch(error =>{
    //              console.log(error);

    //          })
    // }

    onChangeHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){
       e.preventDefault();
        console.log(e);
        console.log("teste");
        console.log(this.state.email);
        const user = {
            email: this.state.email,
            password: this.state.password,
        }

       

        axios.post('http://localhost:5000/users/signin', user)
            .then( res => {
                console.log(res.data);
                //this.setState({ user: response.data});
                this.props.history.push('/board');
              
            })
            .catch(e =>{
                console.log(e);

            })
    }

    render(){
        return (
            <React.Fragment>
                <div className="row  justify-content-center verticalAlignment">
                    <form className="col-4 ">
                        <div className="card signUPsignInCard">
                            <div className="card-body">
                                <div className="form-group row">
                                    <i className="fa fa-envelope fa-2x col-2" aria-hidden="true"></i>
                                    <div className="col-10">
                                        <input type="text" className="form-control " name = 'email' id="emailInput" placeholder="Email"
                                        required
                                        value = {this.state.email}
                                        onChange={this.onChangeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <i className="fa fa-lock fa-2x col-2" aria-hidden="true"></i>
                                    <div className="col-10">
                                        <input type="text" className="form-control " name= "password" id="passwordInput" placeholder="Password"
                                        required
                                        value = {this.state.password}
                                        onChange={this.onChangeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row ">
                                    <div className="col-12">
                                        <input type="submit" value="Sign In" className="form-control btn btn-primary " id="signInButton" 
                                        onClick={(e) => this.onSubmit(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )

    }
}