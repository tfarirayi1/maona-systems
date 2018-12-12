import React 
    from 'react';

import $about
    from 'styles/about.module.css';

export default class OathPage extends React.Component{
    render(){
        return(
            <div 
            className={`${$about.page}`}>
                
                <div
                className={`${$about.paragraph}`}>
                
                    We develop and maintain interactive websites for various types of organisations.

                </div>

                <div
                className={`${$about.paragraph}`}>

                    Our purpose is to facillitate the processing and management of distributed information by computerising primary business processes.

                </div>

            </div>
        );
    }
}