import React    from 'react';
import {Link}   from 'react-router-dom';

export default class SolutionsPage extends React.Component{
    constructor(){
        super();
        // set state
        this.state={};
        this.state.links=[
            {
                endpoint:'/solutions/salon-system',
                title:'salon web-system',
            },
            {
                endpoint:'/solutions/takeaway-system',
                title:'takeaway web-system',
            },
        ];
    }
    render(){
        const Solutions=()=>{
            return this.state.links.map((a,b)=>{
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
                available solutions
                <div>
                    <Solutions/>
                </div>
            </div>
        );
    }
}