import React
    from 'react';
import {Link}
    from 'react-router-dom';

export default class SolutionsPage extends React.Component{
    render(){
        const Menu=(
            <div>
                <div>
                    <Link to='/examples/salon-interface'>
                        salon interface
                    </Link>
                </div>
                <div>
                    <Link to='/examples/takeaway-interface'>
                        takeaway interface
                    </Link>
                </div>
                <div>
                    <Link to='/examples/restaurant-interface'>
                        restaurant interface
                    </Link>
                </div>
            </div>
        );

        return(
            <div>
                examples
                <div>
                    {Menu}
                </div>
            </div>
        );
    }
}