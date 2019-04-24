import {Auth as Cognito} from 'aws-amplify';

export default class LoginOperator{
    
    static configure(){

        Cognito.configure({

            identityPoolId:'eu-west-1:25388842-fe3f-47da-b371-8523843a6018',
            userPoolId:'eu-west-1_CTOnEIecG',
            userPoolWebClientId:'1f39eiq38scgarj4l6hdnmlqct',
            mandatorySignIn:false,

        });

    }

    static signIn(){
        
        const {emailInput,passwordInput}=this.state;
        
        Cognito.signIn(emailInput,passwordInput)
            .then((Param1)=>{

                console.log(Param1);

            })
            .catch((Param1)=>{

                console.log(Param1);

            });
    }

    static signOut(){

        Cognito.signOut()
            .then((Param1)=>{

                console.log(Param1);

            })
            .catch((Param1)=>{

                console.log(Param1);

            });

    }

    static register(){

        const {emailInput,passwordInput}=this.state;

        const details={
            username:emailInput,
            password:passwordInput,
        };
        
        Cognito.signUp(details)
            .then((Param1)=>{
                
                console.log(Param1);

            })
            .catch((Param1)=>{
                
                console.log(Param1);
                
            });
    }

    static verifyUser(){

        Cognito.currentSession()
            .then((p1)=>{
                
                const {accessToken}=p1;

                this.setState({
                    userId:accessToken.payload.username,
                });

            })
            .catch((Param1)=>{
                
                this.setState({
                    userId:"no-user",
                });

            });

    }

    static changePassword(){
        
        const {history}=this.props;
        
        const {emailInput}=this.state;
        
        history.push({
            pathname:'/login/reset-password',
            state:{
                emailInput,
            },
        });

    }

    static resetPassword(){

        const {history}=this.props;
        
        const {emailInput}=this.state;
        
        Cognito.forgotPassword(emailInput)
            .then((Param1)=>{
                
                const result=Param1;//eslint-disable-line
        
                history.push({
                    pathname:'/login/change-password',
                    state:{
                        emailInput,
                    },
                });

            }) 
            .catch((Param1)=>{

                const error=Param1.code||Param1;
                console.log(error);

            });

    }

    static setNewPassword(){

        const {history}=this.props;

        const {emailInput,verificationCodeInput,passwordInput}=this.state;

        Cognito.forgotPasswordSubmit(emailInput,verificationCodeInput,passwordInput)
            .then((Param1)=>{
        
                history.push({
                    pathname:'/login',
                    state:{
                        targetUser:emailInput,
                    },
                });

            })
            .catch((Param1)=>{

                const error=Param1.code||Param1;//eslint-disable-line

            });
    }
}