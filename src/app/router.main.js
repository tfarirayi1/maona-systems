import React            from 'react';
import BlankPage        from 'page.blank';
import IndexPage        from 'page.index';
import RegisterPage     from 'page.register';
import LoginRouter      from 'router.login';
import SolutionsRouter  from 'router.solutions';
import OathPage         from 'page.oath';
import AccountRouter    from 'router.account';
import GlossaryPage     from 'page.glossary';
import RouteBroker      from 'broker.route';
import {Switch,Route}   from 'react-router-dom';

export default class MainRouter extends React.Component{
    constructor(){
        super();
        // load procedures
        this._renderRoutes=RouteBroker.renderRoutes.bind(this);
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
                endpoint:'/solutions',
                component:SolutionsRouter,
                exact:false,
            },  
            {
                endpoint:'/oath',
                component:OathPage,
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
        const RouteList=()=>{
            return this._renderRoutes();
        };
        return(
            <Switch>
                <RouteList/>
                <Route component={BlankPage}/>
            </Switch>
        );
    }
}