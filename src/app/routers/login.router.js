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
import RouteBroker
    from 'brokers/route.broker';
import {Switch,Route}
    from 'react-router-dom';

export default class LoginRouter extends React.Component{
    constructor(){
        super();
        // LOAD FUNCTIONS
        this.renderRoutes=RouteBroker.renderRoutes.bind(this);
        // SET STATE
        this.state={};
        this.state.routes=[
            {
                endpoint:'/login',
                component:LoginPage,
                exact:true,
            },
            {
                endpoint:'/login/reset-password',
                component:ResetPasswordPage,
                exact:true,
            },
            {
                endpoint:'/login/change-password',
                component:ChangePasswordPage,
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