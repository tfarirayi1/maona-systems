import React
    from 'react';

import LoginOperator
    from 'operators/login.operator';

import FormOperator
    from 'operators/form.operator';

export default class ResetPasswordPage extends React.Component{
    
    constructor(props){
    
        super(props);
    
        // LOAD PROCEDURES
        this._resetPassword=LoginOperator.resetPassword.bind(this);
        this._handleInputChange=FormOperator.handleInputChange.bind(this);
        this._traverseForm=FormOperator.traverseForm.bind(this);
    
        // SET STATE
        const {location}=props;
        this.form=React.createRef();
        this.formSubmitButton=React.createRef();
        this.state={};
        this.state.emailInput=location.state?location.state.emailInput?location.state.emailInput:'':'';
    
    }
    
    render(){
    
        const Form=(
    
            <div 
            ref={this.form}>
            
                <div>
            
                    <label 
                    htmlFor="emailInput">
            
                        email
            
                    </label>
            
                    <input 
                    id="emailInput" 
                    type="email" 
                    autoComplete="off" 
                    value={this.state.emailInput} 
                    onChange={this._handleInputChange} 
                    onKeyDown={this._traverseForm}/>
            
                </div>
            
                <div>
            
                    <div 
                    tabIndex="0" 
                    ref={this.formSubmitButton} 
                    onClick={this._resetPassword}>
                        
                        submit 
            
                    </div>
                    
                </div>

            </div>

        );
        
        return(
            
            <div>
            
                <div>
            
                    password-reset
            
                </div>
            
                {Form}
            
            </div>

        );

    }
    
}