import React
    from 'react';

import LoginPage
    from 'pages/login.page';

import ResetPasswordPage
    from 'pages/login.reset-password.page';

import ChangePasswordPage
    from 'pages/login.change-password.page';

import BlankPage
    from 'pages/blank.page';

import RouteOperator
    from 'operators/route.operator';

import {Switch,Route}
    from 'react-router-dom';

export default class LoginRouter extends React.Component{
    
    constructor(){
    
        super();
    
        // LOAD FUNCTIONS
        this.renderRoutes=RouteOperator.renderRoutes.bind(this);
    
        // SET STATE
        this.state={};
        this.state.routes=[
            {
                target:'/login',
                view:LoginPage,
                exact:true,
            },
            {
                target:'/login/reset-password',
                view:ResetPasswordPage,
                exact:true,
            },
            {
                target:'/login/change-password',
                view:ChangePasswordPage,
                exact:true,
            },
        ];

    }

    render(){

        return(

            <Switch>

                {

                    this.renderRoutes()

                }

                <Route component={BlankPage}/>

            </Switch>

        );

    }

}