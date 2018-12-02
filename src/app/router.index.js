import React            from 'react';
import BlankPage        from 'page.blank';
import IndexPage        from 'page.index';
import RegisterPage     from 'page.register';
import AboutUsPage      from 'page.about-us';
import GlossaryPage     from 'page.glossary';
import LoginRouter      from 'router.login';
import ExamplesRouter   from 'router.examples';
import AccountRouter    from 'router.account';
import RouteBroker      from 'broker.route';
import {Switch,Route}   from 'react-router-dom';

export default class IndexRouter extends React.Component{
    constructor(){
        super();
        // load procedures
        this.renderRoutes=RouteBroker.renderRoutes.bind(this);
        // set state
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