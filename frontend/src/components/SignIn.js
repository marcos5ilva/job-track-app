import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { directive } from '@babel/types';

export default class SignIn  extends Component{

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
                                        <input type="text" className="form-control " id="lastNameInput" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <i className="fa fa-lock fa-2x col-2" aria-hidden="true"></i>
                                    <div className="col-10">
                                        <input type="text" className="form-control " id="passwordInput" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="form-group row ">
                                    <div className="col-12">
                                        <input type="submit" value="Sign In" className="form-control btn btn-primary " id="signInButton" />
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