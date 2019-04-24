import React
    from 'react';

import {Switch,Route}
    from 'react-router-dom';

import HomePage
    from 'pages/account.home.page';

import BillingPage
    from 'pages/account.billing.page';

import ProjectsPage
    from 'pages/account.projects.page';

import BlankPage
    from 'pages/blank.page';

import RouteOperator
    from 'operators/route.operator';

export default class AccountRouter extends React.Component{
    
    constructor(){
        super();
        console.log(this.props)
    
        // LOAD FUNCTIONS
        this.renderRoutes=RouteOperator.renderRoutes.bind(this);
    
        // SET STATE
        this.state={};
        this.state.routes=[
            {
                target:'/account',
                view:HomePage,
                exact:true,
            },
            {
                target:'/account/billing',
                view:BillingPage,
                exact:true,
            },
            {
                target:'/account/projects',
                view:ProjectsPage,
                exact:true,
            },
        ];
    }

    render(){
        console.log(this.props)
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