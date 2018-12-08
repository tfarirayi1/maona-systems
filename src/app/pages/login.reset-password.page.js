import React
    from 'react';
import LoginBroker
    from 'brokers/login.broker';
import FormBroker
    from 'brokers/form.broker';

export default class ResetPasswordPage extends React.Component{
    constructor(props){
        super(props);
        // LOAD PROCEDURES
        this._resetPassword=LoginBroker.resetPassword.bind(this);
        this._handleInputChange=FormBroker.handleInputChange.bind(this);
        this._traverseForm=FormBroker.traverseForm.bind(this);
        // SET STATE
        const {location}=props;
        this.form=React.createRef();
        this.formSubmitButton=React.createRef();
        this.state={};
        this.state.emailInput=location.state?location.state.emailInput?location.state.emailInput:'':'';
    }
    
    render(){
        const Form=(
            <div ref={this.form}>
                <div>
                    <label htmlFor="emailInput">
                        email
                    </label>
                    <input id="emailInput" type="email" autoComplete="off" value={this.state.emailInput} onChange={this._handleInputChange} onKeyDown={this._traverseForm}/>
                </div>
                <div>
                    <div tabIndex="0" ref={this.formSubmitButton} onClick={this._resetPassword}>
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