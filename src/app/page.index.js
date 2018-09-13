import React    from 'react';
import {Link}   from 'react-router-dom';
import          'styles/index.css';

export default class IndexPage extends React.Component{
    render(){
        const Neutral=()=>(
            <div className="index---neutral-menu">
                <div>
                    <Link to="/solutions">solutions</Link>
                </div>
                <div>
                    <Link to="/about-us">about-us</Link>
                </div>
                <div>
                    <Link to="/glossary">glossary</Link>
                </div>
            </div>
        );

        const Content=()=>{
            const currentUser=this.props.userId;
            if(currentUser){
                return(
                    <React.Fragment>
                        <div className="index---authenticated-menu">
                            <div>
                                <Link to="/account">account</Link>
                            </div>
                        </div>
                        <Neutral/>
                    </React.Fragment>

                );
            }else{
                return(
                    <React.Fragment>
                        <div className="index---unauthenticated-menu">
                            <div>
                                <Link to="/login">login</Link>
                            </div>
                            <div>
                                <Link to="/register">register</Link>
                            </div>
                        </div>
                        <Neutral/>
                    </React.Fragment>
                );
            }
        };
        return(
            <div className="index">
                <Content/>
            </div>
        );
    }
}