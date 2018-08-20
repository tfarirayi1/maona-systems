import React from 'react';

export default class TakeawaySystemPage extends React.Component{
    constructor(){
        super();
        // set state
        this.state={};
        this.state.data=[
            {
                key:'function',
                value:'allow customers to request your service in advance',
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
        const Details=()=>{
            return this.state.data.map((a,b)=>{
                const item=a;
                const position=b;
                return(
                    <div key={position}>
                        <div>{item.key}</div>
                        <div>{item.value}</div>
                    </div>
                );
            });
        };
        return(
            <div className="solutions.takeaway-system">
                <div>
                    takeaway web-system info 
                </div>
                <Details/>
            </div>
        );
    }
}