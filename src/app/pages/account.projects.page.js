import React 
    from 'react';

import $account
    from 'styles/account.projects.module.css';

import $page
    from 'styles/page.module.css';

export default class AccountProjectsPage extends React.Component{
    
    render(){
    
        return(
    
            <div 
            className="account--projects">
            
                <div
                className={$page.title}>
            
                    projects
            
                </div>
            
            </div>

        );

    }

}