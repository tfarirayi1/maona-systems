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
                
                    our business is to develop and maintain interactive websites for various types of organisations.

                </div>

                <div
                className={`${$about.paragraph}`}>

                    the main objective of our activities is to computerise primary business processes in order to facillitate the processing and management of distributed information.

                </div>

            </div>

        );

    }

}