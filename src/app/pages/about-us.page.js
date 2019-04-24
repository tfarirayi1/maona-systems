import React
    from 'react';

import $about
    from 'styles/about.module.css';

import {PhoneIcon,EmailIcon} 
    from 'mdi-react';

export default class OathPage extends React.Component {

    render() {

        return (

            <div
            className={`${$about.page}`}>

                <div
                className={$about.paragraph}
                className={$about.welcome}>

                    Welcome to maona.systems
    
                </div>

                <div
                className={`${$about.paragraph}`}>

                    We develop and maintain interactive websites for various types of organisations

                </div>

                <div
                className={`${$about.paragraph}`}>

                    {/* The purpose of our work is to computerise business processes and facillitate the processing and management of distributed information. */}
                    
                    Discuss your website requirements with us
                    <div>
                        <div>

                            &nbsp;&nbsp;Email serdesk@maona.systems
                            <br/>
                            &nbsp;&nbsp;Phone 0334 4455 353
                            
                        </div>
                        {/* <PhoneIcon size="1em"/>&nbsp;0334 4455 353 */}

                        {/* <div></div> */}
                    </div>
                    


                    <div>

                        {/* <EmailIcon size="1em"/>&nbsp;service@maona.systems */}
                        <br/>Trouble logging in?<br/>
                        &nbsp;&nbsp;Then email your client id to service@maona.systems

                    </div>

                </div>

            </div>

        );

    }

}