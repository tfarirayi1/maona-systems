import React
    from 'react';

import {Route}
    from 'react-router-dom';

export default class RouteOperator{

    static renderRoutes(){

        return this.state.routes.map((p1,p2)=>{

            const item=p1;

            const position=p2;

            const component=(p1)=>{

                const routeObject=p1;
                
                const props={};

                props.userId=this.props.userId;
                
                return React.createElement(item.view,Object.assign(props,routeObject)); //https://reactjs.org/docs/react-api.html#createelement

            };

            return(

                <Route 
                key={position} 
                exact={item.exact} 
                path={item.target} 
                render={component}/>

            );

        });

    }

}