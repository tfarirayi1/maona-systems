import React 
    from 'react';

export default class TakeawaySystemPage extends React.Component{
    render(){
        const data=[
            {
                subject:'function',
                text:'allow customers to request your service in advance',
            },
            {
                subject:'setup fee',
                text:'193.41gbp per website',
            },
            {
                subject:'maintenance fee',
                text:'1.23gbp per day',
            },
            {
                subject:'cloud computing fee',
                text:'0.439gbp+ per day',
            },
        ];

        const Details=data.map((p1,p2)=>{
            const item=p1;
            const position=p2;
            
            return(
                <div key={position}>
                    <div>{item.subject}</div>
                    <div>{item.text}</div>
                </div>
            );
        });

        return(
            <div>
                <div>
                    takeaway web-system info 
                </div>
                <div>
                    {Details}
                </div>
            </div>
        );
    }
}