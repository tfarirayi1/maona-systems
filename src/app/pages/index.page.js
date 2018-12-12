import React
    from 'react';

import {Link}
    from 'react-router-dom';

import $index
    from 'styles/index.module.css';

import $menu
    from 'styles/menu.module.css';

export default class IndexPage extends React.Component{
    render(){
        const Neutral=(
            <React.Fragment>
                    
                    <Link
                    className={$menu.item} 
                    to="/about-us">
                        
                        About-us
                
                    </Link>
                
            </React.Fragment>

        );

        let Menu;

        if (this.props.userId) {
            Menu=(
                <React.Fragment>
            
                        <Link 
                        className={$menu.item}
                        to="/account">

                            Account

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
                            
                            Login

                        </Link>

                        <Link 
                        className={$menu.item}
                        to="/register">
                        
                            Register

                        </Link>

                    {Neutral}

                </React.Fragment>
            );
        }

        return(
            <div 
            className={$index.page}>
            
                <div
                className={$menu.menu}>

                    {Menu}

                </div>
            
            </div>
        );
    }
}