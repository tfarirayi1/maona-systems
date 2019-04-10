import React 
    from 'react';

import {Redirect} 
    from 'react-router-dom';

import LoginOperator 
    from 'operators/login.operator'; 

import FormOperator
    from 'operators/form.operator';

import $form
    from 'styles/form.module.css';

import $page
    from 'styles/page.module.css';

export default class LoginPage extends React.Component{
    constructor(){
        super();

        // LOAD FUNCTIONS
        // this.login=LoginBroker.signIn.bind(this);
        this.changePassword=LoginOperator.changePassword.bind(this);
        this.handleInputChange=FormOperator.handleInputChange.bind(this);
        this.traverseForm=FormOperator.traverseForm.bind(this);
        this.login=this.login.bind(this);
        
        // SET STATE
        this.form=React.createRef();
        this.formSubmitButton=React.createRef();
        this.state={};
        this.state.emailField='';
        this.state.passwordField='';
        this.state.inputIconSize='';
        this.state.submitButtonIconSize='1.2em';
    }

    login(){
        window.alert(JSON.stringify(
            this.state.emailField
        ));
    }

    render(){
        let Form;

        if (this.props.userId==='') {
            Form=(
                <div 
                className={$form.form} 
                ref={this.form}>
                    
                    <div 
                    className={$form.inputFields}>

                        <div 
                        className={$form.inputField}>
                            
                            <label 
                            className={$form.inputFieldLabel}
                            htmlFor="emailField">

                                email

                            </label>

                            <input 
                            id="emailField"
                            className={$form.emailField}
                            type="text"
                            value={this.state.emailField}
                            onChange={this.handleInputChange}
                            onKeyDown={this.traverseForm}
                            />

                        </div>

                        <div 
                        className={$form.inputField}>

                            <label
                            className={$form.inputFieldLabel} 
                            htmlFor="passwordField">

                                password

                            </label>
                            
                            <input 
                            id="passwordField"
                            className={$form.passwordField}
                            type="password"
                            value={this.state.passwordField}
                            onChange={this.handleInputChange}
                            onKeyDown={this.traverseForm}
                            />

                        </div>

                    </div>

                    <div 
                    className={$form.submitButtons}>

                        <div 
                        tabIndex="0" 
                        className={$form.button}
                        onClick={this.changePassword}>
                        
                            change-password
                        
                        </div>
                        
                        <div 
                        tabIndex="0"
                        className={$form.button}
                        ref={this.formSubmitButton} 
                        onClick={this.login}>

                            login

                        </div>

                    </div>

                </div>
            );
        } else {
            Form=(
                <Redirect to='/account'/>
            );
        }

        return(
            <div 
            className="page">

                <div
                className={$page.title}>

                    Login

                </div>

                {Form}

            </div>
        );
    }
}