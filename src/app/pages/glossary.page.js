import React 
    from 'react';

export default class GlossaryPage extends React.Component{
    constructor(){
        super();
        // SET STATE
        this.state={};
        this.state.data=[
            {
                key:'web-system',
                value:'_a website, or a set of interdependent websites designed to implement one or more business processes',
            },
            {
                key:'business process',
                value:'_activities or tasks performed successively to achieve a specific result',
            },
        ];
    }
    render(){
        const List=this.state.data.map((a,b)=>{
            const item=a;
            const index=b;
            return(
                <div key={index}>
                    <div>{item.key}</div>
                    <div>{item.value}</div>
                </div>
            );
        });
        return(
            <div className="glossary">
                <div>
                    glossary
                </div>
                {List}
            </div>
        );
    }
}