import React
    from 'react';

import LoginBroker
    from 'brokers/login.broker';

import IndexRouter
    from 'routers/index.router';

import NavigationBroker
    from 'brokers/navigation.broker';

import {withRouter}
    from 'react-router-dom';

import {ArrowLeftThickIcon,InformationIcon,SettingsIcon,ArrowUpThickIcon}
    from 'mdi-react';

import 'styles/global.css';

import $frame
    from 'styles/frame.module.css';

class Frame extends React.Component{
    constructor(){
        super();
        // LOAD FUNCTIONS
        this.navigateUp=NavigationBroker.navigateUp.bind(this);
        this.signOut=LoginBroker.signOut.bind(this);
        this.verifyUser=LoginBroker.verifyUser.bind(this);
        this.configureAuthentication=LoginBroker.configure.bind(this);
        // SET STATE
        this.state={}
        this.state.userId='';
        // PERFORM INITIAL ACTIONS
        document.title='Maona Systems';
        this.configureAuthentication();
    }

    componentDidMount(){
        // this._verifyUser();
    }

    render(){
        const ToolPanel=(
            <div className={$frame.tool_panel}>
                <div className={$frame.button}>
                    <ArrowUpThickIcon size="1em" tabIndex="0" onClick={this.navigateUp}/>
                </div>
                <div className={$frame.button}>
                    <ArrowLeftThickIcon size="1em" tabIndex="0"/>
                </div>
                <div className={$frame.button}>
                    <SettingsIcon size="1em" tabIndex="0"/>
                </div>
            </div>
        );

        return(
            <div 
            className={$frame.frame}>
                
                {ToolPanel}
                
                <div 
                className={$frame.view_panel}>
                    
                    <IndexRouter userId={this.state.userId}/>
                
                </div>
                
            </div>
        );
    }
}
export default withRouter(Frame);