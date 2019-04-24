import React
    from 'react';

import {Link}
    from 'react-router-dom';

import $account
    from 'styles/account.home.module.css';

import $page
    from 'styles/page.module.css';

import $menu
    from 'styles/menu.module.css';

export default class AccountHomePage extends React.Component{
   
    constructor(){
        
        super();
        this.state={};

        this.state.menu=[
            {
                target:'/account/billing',
                title:'billing',
            },
            {
                target:'/account/projects',
                title:'projects',
            },
        ];

    }

    render(){
        console.log(this.props)
        return(

            <div 
            className={$page.page}>
            
                <div
                className={$page.head}>
            
                    <div>
            
                        account
            
                    </div>
            
                </div>
            
                <div 
                className={$page.body}>

                    <div
                    className={$menu.menu}>

                        {
                            
                            this.state.menu.map(
                            
                                (Param1,Param2)=>{

                                    const item=Param1;

                                    const position=Param2;

                                    return(

                                        <div 
                                        key={position}
                                        >

                                            <Link 
                                            to={item.target}
                                            className={$menu.item}
                                            >
                                                {item.title}

                                            </Link>

                                        </div>

                                    );

                                }
                            
                            )

                        }

                    </div>
                
                </div>

            </div>

        );

    }

}