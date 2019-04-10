import React
    from 'react';

import ExamplesPage
    from 'pages/examples.page';

import TakeawaySystemPage
    from 'pages/examples.takeaway-system.page';

import SalonSystemPage
    from 'pages/examples.salon-system.page';

import BlankPage
    from 'pages/blank.page';

import RouteOperator
    from 'operators/route.operator';

import {Route,Switch}
    from 'react-router-dom';

export default class SolutionsRouter extends React.Component{
    constructor(){
        super();
        // LOAD FUNCTIONS
        this.renderRoutes=RouteOperator.renderRoutes.bind(this);
        // SET STATE
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