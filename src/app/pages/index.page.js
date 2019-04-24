import React
    from 'react';

import {Link}
    from 'react-router-dom';

import $index
    from 'styles/index.module.css';

import $menu
    from 'styles/menu.module.css';

import $page
    from 'styles/page.module.css';

export default class IndexPage extends React.Component{
    
    render(){

        let Menu;

        const Neutral=(

            <React.Fragment>
                    
                    <Link
                    className={$menu.item} 
                    to="/about-us">
                        
                        help
                
                    </Link>
                
            </React.Fragment>

        );

        if (this.props.userId) {

            Menu=(

                <React.Fragment>
            
                        <Link 
                        className={$menu.item}
                        to="/account">

                            account

                        </Link>
                        
                    {Neutral}
                
                </React.Fragment>

            );

        } else {

            Menu=(

                <React.Fragment>
                    
                        <Link 
                        className={$menu.item}
                        to="/login">
                            
                            login

                        </Link>

                        <Link 
                        className={$menu.item}
                        to="/register">
                        
                            register

                        </Link>

                    {Neutral}

                </React.Fragment>

            );

        }

        return(

            <div 
            className={$page.page}>

                <div
                className={$page.head}>
                    
                    <div>
            
                        Home
            
                    </div>
            
                </div>
            
                <div
                className={$page.body}>

                    <div
                    className={$menu.menu}>

                        {Menu}

                    </div>

                </div>
            
            </div>

        );

    }

}