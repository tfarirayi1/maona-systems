export default class NavigationOperator{

    static upwards(){

        const {location,history}=this.props;

        const path=location.pathname.split('/');

        history.push('/'+path[path.length-2]);

    }

    static backwards(){

        const {history}=this.props;

        history.go(-1);

    }

}