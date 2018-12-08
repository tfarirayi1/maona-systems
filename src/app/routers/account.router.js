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
import RouteBroker
    from 'brokers/route.broker';

export default class AccountRouter extends React.Component{
    constructor(){
        super();
        // LOAD FUNCTIONS
        this.renderRoutes=RouteBroker.renderRoutes.bind(this);
        // SET STATE
        this.state={};
        this.state.routes=[
            {
                component:HomePage,
                endpoint:'/account',
                exact:true,
            },
            {
                endpoint:'/account/billing',
                component:BillingPage,
                exact:true,
            },
            {
                endpoint:'/account/projects',
                component:ProjectsPage,
                exact:true,
            },
        ];
    }

    render(){
        return(
            <Switch>
                {
                    this._renderRoutes()
                }
                <Route component={BlankPage}/>
            </Switch>
        );
    }
}