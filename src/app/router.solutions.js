import React                from 'react';
import SolutionsPage        from 'page.solutions';
import TakeawaySystemPage   from 'page.solutions--takeaway-system';
import SalonSystemPage      from 'page.solutions--salon-system';
import BlankPage            from 'page.blank';
import RouteBroker          from 'broker.route';
import {Route,Switch}       from 'react-router-dom';

export default class SolutionsRouter extends React.Component{
    constructor(){
        super();
        // load procedures
        this._renderRoutes=RouteBroker.renderRoutes.bind(this);
        // set state
        this.state={};
        this.state.routes=[
            {
                endpoint:'/solutions',
                component:SolutionsPage,
                exact:true,
            },
            {
                endpoint:'/solutions/salon-system',
                component:SalonSystemPage,
                exact:true,
            },
            {
                endpoint:'/solutions/takeaway-system',
                component:TakeawaySystemPage,
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