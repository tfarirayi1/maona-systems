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

import RouteOperator
    from 'operators/route.operator';
    
import {Switch,Route}   
    from 'react-router-dom';

export default class IndexRouter extends React.Component{
    
    constructor(){

        super();
        
        // LOAD PROCEDURES
        this.renderRoutes=RouteOperator.renderRoutes.bind(this);

        // SET STATE
        this.state={};
        this.state.routes=[ // associated with renderRoutes function in route.operator.js
            {
                destination:'/',
                view:IndexPage,
                exact:true,
            },
            {
                destination:'/register',
                view:RegisterPage,
                exact:true,
            },
            {
                destination:'/login',
                view:LoginRouter,
                exact:false,
            },
            {
                destination:'/account',
                view:AccountRouter,
                exact:false,
            },
            {
                destination:'/examples',
                view:ExamplesRouter,
                exact:false,
            },  
            {
                destination:'/about-us',
                view:AboutUsPage,
                exact:true,
            },
            {
                destination:'/glossary',
                view:GlossaryPage,
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