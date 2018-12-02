export default class NavigationBroker{

    static navigateUp(){
        const {location,history}=this.props;
        const path=location.pathname.split('/');

        history.push('/'+path[path.length-2]);
    }
}