import React
    from 'react';
import {Link}
    from 'react-router-dom';
import $index
    from 'styles/index.module.css';

export default class IndexPage extends React.Component{
    render(){
        const Neutral=(
            <div>

                <div 
                className={$index.link}>
                
                    <Link 
                    to="/about-us">
                        about-us
                    </Link>

                </div>
                
                <div 
                className={$index.link}>
                    
                    <Link 
                    to="/examples">
                        examples
                    </Link>

                </div>

            </div>
        );

        let Moderated;

        if (this.props.userId) {
            Moderated=(
                <React.Fragment>
                    
                    <div>
                    
                        <div
                        className={$index.link}>
                    
                            <Link 
                            to="/account">
                                account
                            </Link>
                    
                        </div>
                    
                    </div>
                    
                    {Neutral}
                
                </React.Fragment>
            );
        } else {
            Moderated=(
                <React.Fragment>
                    <div>
                        
                        <div
                        className={$index.link}>

                            <Link 
                            to="/login">
                                
                                login

                            </Link>
                        
                        </div>

                        <div
                        className={$index.link}>

                            <Link 
                            to="/register">
                            
                                register

                            </Link>

                        </div>

                    </div>

                    {Neutral}

                </React.Fragment>
            );
        }

        return(
            <div>

                {Moderated}
                
            </div>
        );
    }
}