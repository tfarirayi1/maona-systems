import React
    from 'react';

import IndexRouter
    from 'routers/index.router';

import LoginOperator
    from 'operators/login.operator';
    
import NavigationOperator
    from 'operators/navigation.operator';

import {withRouter}
    from 'react-router-dom';

import {ArrowLeftThickIcon,InformationIcon,HomeIcon,SettingsIcon,ArrowUpThickIcon}
    from 'mdi-react';

import 'styles/global.css';

import $frame
    from 'styles/frame.module.css';

import $shadows
    from 'styles/shadows.module.css';

class Frame extends React.Component{

    constructor(){

        super();
        // LOAD FUNCTIONS
        this.handleKeyPress=this.handleKeyPress.bind(this);
        this.upwards=NavigationOperator.upwards.bind(this);
        this.backwards=NavigationOperator.backwards.bind(this);
        this.signOut=LoginOperator.signOut.bind(this);
        this.verifyUser=LoginOperator.verifyUser.bind(this);
        this.configureAuthentication=LoginOperator.configure.bind(this);
        
        // SET STATE
        this.upButton=React.createRef();
        this.backButton=React.createRef();
        this.settingsButton=React.createRef();
        this.state={};
        this.state.userId='';
        this.state.toolIconSize='1.2em';
        
        // PERFORM INITIAL ACTIONS
        document.title='Maona Systems';
        this.configureAuthentication();

    }

    componentDidMount(){

        this.verifyUser();

    }

    handleKeyPress(p1){

        const event=p1;

        if(event.key===' ' || event.key==='Enter'){

            this[event.target.id].current.click();
            
        }

    }

    render(){

        const Tools=(
        
            <div 
            className={$frame.tools}
            >

                {/* <div
                id="upButton"
                className={$frame.button}
                tabIndex="0" 
                ref={this.upButton}
                onClick={this.upwards}
                onKeyDown={this.handleKeyPress}
                >

                    <ArrowUpThickIcon 
                    className={$frame.symbol}
                    size={this.state.toolIconSize} 
                    />
                    Up

                </div> */}

                <div
                id="backButton"
                className={$frame.button}
                tabIndex="0"
                ref={this.backButton}
                onClick={this.backwards}
                onKeyDown={this.handleKeyPress}
                >

                    <HomeIcon 
                    className={$frame.symbol}
                    size={this.state.toolIconSize}
                    />

                </div>

                <div
                id="settingsButton"
                className={$frame.button}
                tabIndex="0"
                ref={this.settingsButton}
                onClick={this.goBack}
                onKeyDown={this.handleKeyPress}
                >

                    <SettingsIcon 
                    className={$frame.symbol}
                    size={this.state.toolIconSize}
                    />

                </div>

            </div>
        );

        return(

            <div 
            className={$frame.frame}>
                
                {Tools}
                
                <div 
                className={$frame.content}>
                    
                    <IndexRouter userId={this.state.userId}/>
                
                </div>
                
            </div>

        );
    
    }

}

export default withRouter(Frame);
