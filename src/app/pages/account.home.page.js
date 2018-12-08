import React
    from 'react';
import {Link}
    from 'react-router-dom';

export default class AccountHomePage extends React.Component{
    constructor(){
        super();
        // SET STATE
        this.state={};
        this.state.menu=[
            {
                endpoint:'/account/billing',
                title:'billing',
            },
            {
                endpoint:'/account/projects',
                title:'projects',
            },
        ];
    }

    render(){
        return(
            <div className="account--home">
                <div>
                    <div>
                        your account
                    </div>
                    <div>
                        {this.props.userId}
                    </div>
                </div>
                {
                    this.state.menu.map((a,b)=>{
                        const item=a;
                        const position=b;
                            return(
                                <div key={position}>
                                    <Link to={item.endpoint}>{item.title}</Link>
                                </div>
                            );
                    })
                }
            </div>
        );
    }
}