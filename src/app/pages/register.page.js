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
    
export default class RegisterPage extends React.Component{
    constructor(){
        super();

        // LOAD FUNCTIONS
        this.handleInputChange=FormOperator.handleInputChange.bind(this);
        this.traverseForm=FormOperator.traverseForm.bind(this);
        this.register=this.register.bind(this);
        // this.register=LoginOperator.register.bind(this);
        
        // WORKING MEMORY
        this.form=React.createRef();
        this.formSubmitButton=React.createRef();
        this.state={};
        this.state.emailField='';
        this.state.businessNameField='';
        this.state.passwordField='';
        this.state.passwordConfirmationField='';
    }

    register(){
        window.alert(JSON.stringify(
            this.state.emailField + ' ' + 
            this.state.businessNameField + ' ' +
            this.state.passwordField + ' ' +
            this.state.passwordConfirmationField
        ))
    }

    render(){
        let Form;

        if(this.props.userId===''){

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
                            autoComplete="off" 
                            value={this.state.emailField}
                            onChange={this.handleInputChange} 
                            onKeyDown={this.traverseForm}
                            />

                        </div>

                        <div
                        className={$form.inputField}>

                            <label 
                            className={$form.inputFieldLabel}
                            htmlFor="businessNameField">
                                
                                business name

                            </label>

                            <input 
                            id="businessNameField" 
                            className={$form.businessNameField}
                            placeholder=""
                            type="text" 
                            autoComplete="off" 
                            value={this.state.businessNameField}
                            onChange={this.handleInputChange} 
                            onKeyDown={this.traverseForm}/>

                        </div>

                        <div
                        className={`${$form.inputField}`}>

                            <label 
                            className={$form.inputFieldLabel}
                            htmlFor="passwordField">
                                
                                password

                            </label>

                            <input 
                            id="passwordField" 
                            className={$form.passwordField}
                            type="password" 
                            autoComplete="off" 
                            value={this.state.passwordField}
                            onChange={this.handleInputChange} 
                            onKeyDown={this.traverseForm}/>

                        </div>

                        <div
                        className={$form.inputField}>

                            <label 
                            className={$form.inputFieldLabel}
                            htmlFor="confirmPasswordField">
                                
                                confirm-password

                            </label>

                            <input 
                            id="confirmPasswordField" 
                            className={$form.confirmPasswordField}
                            type="password" 
                            autoComplete="off" 
                            value={this.state.comfirmPasswordField}
                            onChange={this.handleInputChange} 
                            onKeyDown={this.traverseForm}/>

                        </div>

                    </div>

                    <div
                    className={$form.submitButtons}>

                        <div 
                        tabIndex="0" 
                        ref={this.formSubmitButton}
                        className={$form.button}
                        onClick={this.register}
                        >
                            
                            submit
                        
                        </div>

                    </div>

                </div>

            );

        }else{
            
            Form=(
            
                <Redirect to='/account'/>
            
            );

        }

        return(

            <div 
            className="register">

                <div
                className={$page.title}>

                    Register

                </div>

                {Form}

            </div>

        );

    }
    
}