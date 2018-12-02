import React                from 'react';
import LoginBroker          from 'broker.login';
import IndexRouter          from 'router.index';
import NavigationBroker     from 'broker.navigation';
import {withRouter}         from 'react-router-dom';
import {MenuIcon,HomeIcon,InformationIcon,MagnifyPlusIcon,MagnifyMinusIcon,SettingsIcon}  from 'mdi-react';
import                      'styles/frame.css';

class Frame extends React.Component{
    constructor(){
        super();
        // load procedures
        this.navigateUp=NavigationBroker.navigateUp.bind(this);
        this.signOut=LoginBroker.signOut.bind(this);
        this.verifyUser=LoginBroker.verifyUser.bind(this);
        this.configureAuthentication=LoginBroker.configure.bind(this);
        // set state
        this.state={}
        this.state.userId='';
        // perform initial actions
        document.title='maona-systems';
        this.configureAuthentication();
    }

    componentDidMount(){
        // this._verifyUser();
    }

    render(){
        const ToolPanel=()=>{
            if(this.props.location.pathname==='/'){
                return null;
            }else{
                return(
                    <div className="frame__tool-panel">
                        <div className="frame__button">
                            <MenuIcon size="1em" tabIndex="0" onClick={this.navigateUp}/>
                        </div>
                        <div className="frame__button">
                            <InformationIcon size="1em" tabIndex="0"/>
                        </div>
                        <div className="frame__button">
                            <SettingsIcon size="1em" tabIndex="0"/>
                        </div>
                    </div>
                );
            }
        };
        
        return(
            <div className="frame">
                <ToolPanel/>
                <div className="frame---view-panel">
                    <IndexRouter userId={this.state.userId}/>
                </div>
            </div>
        );
    }
}
export default withRouter(Frame);