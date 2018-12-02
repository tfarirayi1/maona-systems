import React                from 'react';
import ExamplesPage         from 'page.examples';
import TakeawaySystemPage   from 'page.examples--takeaway-system';
import SalonSystemPage      from 'page.examples--salon-system';
import BlankPage            from 'page.blank';
import RouteBroker          from 'broker.route';
import {Route,Switch}       from 'react-router-dom';

export default class SolutionsRouter extends React.Component{
    constructor(){
        super();
        // load procedures
        this.renderRoutes=RouteBroker.renderRoutes.bind(this);
        // set state
        this.state={};
        this.state.routes=[
            {
                endpoint:'/examples',
                component:ExamplesPage,
                exact:true,
            },
            {
                endpoint:'/examples/salon-system',
                component:SalonSystemPage,
                exact:true,
            },
            {
                endpoint:'/examples/takeaway-system',
                component:TakeawaySystemPage,
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