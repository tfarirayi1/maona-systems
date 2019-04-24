import React
    from 'react';

import $account
    from 'styles/account.billing.module.css';

import $page
    from 'styles/page.module.css';

export default class AccountBillingPage extends React.Component{
    
    render(){
    
        return(
    
            <div 
            className="account--billing">
            
                <div
                className={$page.title}>
            
                    billing
            
                </div>
            
            </div>

        );

    }
    
}