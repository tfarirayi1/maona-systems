import React
    from 'react';

import BlankPage
    from 'pages/blank.page';

import IndexPage
    from 'pages/index.page';

import RegisterPage
    from 'pages/register.page';
    
import AboutUsPage
    from 'pages/about-us.page';

import GlossaryPage
    from 'pages/glossary.page';

import LoginRouter
    from 'routers/login.router';

import ExamplesRouter
    from 'routers/examples.router';

import AccountRouter
    from 'routers/account.router';

import RouteBroker
    from 'brokers/route.broker';
    
import {Switch,Route}   
    from 'react-router-dom';

export default class IndexRouter extends React.Component{
    constructor(){
        super();
        // LOAD PROCEDURES
        this.renderRoutes=RouteBroker.renderRoutes.bind(this);
        // SET STATE
        this.state={};
        this.state.routes=[
            {
                endpoint:'/',
                component:IndexPage,
                exact:true,
            },
            {
                endpoint:'/register',
                component:RegisterPage,
                exact:true,
            },
            {
                endpoint:'/login',
                component:LoginRouter,
                exact:false,
            },
            {
                endpoint:'/account',
                component:AccountRouter,
                exact:false,
            },
            {
                endpoint:'/examples',
                component:ExamplesRouter,
                exact:false,
            },  
            {
                endpoint:'/about-us',
                component:AboutUsPage,
                exact:true,
            },
            {
                endpoint:'/glossary',
                component:GlossaryPage,
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