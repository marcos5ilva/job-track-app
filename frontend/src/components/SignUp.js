import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { directive } from '@babel/types';

export default class SignUp  extends Component{

    render(){
        return (
            <React.Fragment>
                <div className="row  justify-content-center verticalAlignment">
                    <form className="col-4 ">
                        <div className="card signUPsignInCard">
                            <div className="card-body">
                                <div className="form-group row">
                                    <i className="fa fa-user  fa-2x col-2" aria-hidden="true"></i>
                                    <div className="col-10">
                                        <input type="text" className="form-control " id="firsNameInput" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <i className="fa fa-user-plus fa-2x col-2" aria-hidden="true"></i>
                                    <div className="col-10">
                                        <input type="text" className="form-control " id="lastNameInput" placeholder="Last Name"/>
                                    </div>
                                </div>
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
                             
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )

    }
}