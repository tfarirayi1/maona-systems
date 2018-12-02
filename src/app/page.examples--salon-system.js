import React from 'react';

export default class SalonSystemPage extends React.Component{
    constructor(){
        super();
        // set state
        this.state={};
        this.state.data=[
            {
                key:'function',
                value:'create and manage routine records of information',
            },
            {
                key:'setup fee',
                value:'193.41gbp per website',
            },
            {
                key:'maintenance fee',
                value:'1.23gbp per day',
            },
            {
                key:'cloud computing fee',
                value:'0.439gbp+ per day',
            },
        ];
    }

    render(){
        const Details=this.state.data.map((a,b)=>{
            const item=a;
            const position=b;
           
            return(
                <div key={position}>
                    <div>{item.key}</div>
                    <div>{item.value}</div>
                </div>
            );
        });
        return(
            <div>
                <div>
                    salon web-system info
                </div>
                {Details}
            </div>
        );
    }
}