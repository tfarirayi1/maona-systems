import React    from 'react';
import {Link}   from 'react-router-dom';

export default class SolutionsPage extends React.Component{
    constructor(){
        super();
        // set state
        this.state={};
        this.state.menu=[
            {
                endpoint:'/solutions/salon-system',
                title:'salon system',
            },
            {
                endpoint:'/solutions/takeaway-system',
                title:'takeaway system',
            },
            {
                endpoint:'/solutions/restaurant-system',
                title:'restaurant system',
            },
            {
                endpoint:'/solutions/restaurant-system',
                title:'ecommerce system',
            },
        ];
    }
    render(){
        const Menu=()=>{
            return this.state.menu.map((a,b)=>{
                const item=a;
                const position=b;
                    return(
                        <div key={position}>
                            <Link to={item.endpoint}>{item.title}</Link>
                        </div>
                    );
            });
        };
        return(
            <div className="solutions">
                applicable solutions
                <div>
                    <Menu/>
                </div>
            </div>
        );
    }
}