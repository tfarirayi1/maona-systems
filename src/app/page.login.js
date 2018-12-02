import React 
    from 'react';
import {Redirect} 
    from 'react-router-dom';
import FormBroker 
    from 'broker.form';
import LoginBroker 
    from 'broker.login';
import {PencilIcon} 
    from 'mdi-react';
import {ArrowRightBoldIcon} 
    from 'mdi-react';
import $form
    from 'styles/form.module.css';

export default class LoginPage extends React.Component{
    constructor(){
        super();
        // LOAD FUNCTIONS
        this.loginFunction=LoginBroker.signIn.bind(this);
        this.changePasswordFunction=LoginBroker.changePassword.bind(this);
        // SET STATE
        this.form=React.createRef();
        this.formSubmitButton=React.createRef();
        this.state={};
        this.state.emailInput="";
        this.state.passwordInput="";
        this.state.inputIconSize="0.5em";
        this.state.submitButtonIconSize="0.8em";
    }

    render(){
        let Form;

        if (this.props.userId==='') {
            Form=(
                <div 
                className="form" 
                ref={this.form}>
                    
                    <div 
                    className={$form.input}>

                        <div 
                        className={$form.component}>
                            
                            <PencilIcon 
                            className={$form.input_icon} 
                            size={this.state.inputIconSize}/>

                            <span 
                            className={$form.input_label}>
                                Email
                            </span>

                        </div>

                        <div 
                        className={$form.component}>

                            <PencilIcon 
                            className={$form.input_icon} 
                            size={this.state.inputIconSize}/>
                            
                            <span 
                            className={$form.input_label}>

                                Password

                            </span>

                        </div>

                    </div>

                    <div 
                    className={$form.submit_buttons}>

                        <div 
                        className={$form.component}
                        className={$form.button}>
                            
                            <div 
                            ref={this.formSubmitButton} 
                            tabIndex="0" 
                            onClick={this.login}>

                                Login

                            </div>

                            <ArrowRightBoldIcon 
                            className={$form.submit_icon}
                            size={this.state.submitButtonIconSize}/>

                        </div>
                    
                        <div 
                        className={$form.component}
                        className={$form.button}>

                            <div 
                            className="form__change-password-button" 
                            tabIndex="0" 
                            onClick={this.changePassword}>
                            
                                    Change-password
                            
                            </div>

                            <ArrowRightBoldIcon 
                            className={$form.submit_icon} 
                            size={this.state.submitButtonIconSize}/>

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
                className="page__content">

                    {Form}

                </div>

            </div>
        );
    }
}