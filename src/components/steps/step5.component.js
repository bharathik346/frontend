import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

class Step5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            payload:{}
        };
    }

    componentWillMount() {
        const { payload } = this.props;
        console.log('Testing the payload data componentwillmount' ,payload);
        this.setState({ payload });
    }

    componentWillReceiveProps(nextProps) {
        const {payload} = this.props;
        console.log('Testing the payload data componentwillreceiveprops' ,payload);

        if(payload !== nextProps.payload){
            this.setState({payload:nextProps.payload})
        }
    }

    handleClick = (value) => {

        if(value ===  'next'){
            this.props.onAction({currentStep:4 , weight:this.state.weight})
        }else{
            this.props.onAction({currentStep:2})
        }
          
    };

    getSenderDetails = (payload) => {
        return (
            <div className="border m-5">
             <table className="table table-striped">
                    <thead>
                        <tr>
                            <th colSpan="2">
                                Sender Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                {get(payload,'from.name')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Street
                            </td>
                            <td>
                                {get(payload,'from.address')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                            State
                            </td>
                            <td>
                                {get(payload,'from.state')}
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                            City
                            </td>
                            <td>
                                {get(payload,'from.city')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ZipCode
                            </td>
                            <td>
                                {get(payload,'from.zip')}
                            </td>
                        </tr>
                    </tbody>
                </table>
              
           </div>
        );
    }

    getReceiverDetails = (payload) => {
        return (
            <div className="border m-5">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th colSpan="2">
                                Receiver Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                {get(payload,'to.name')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Street
                            </td>
                            <td>
                                {get(payload,'to.address')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                            State
                            </td>
                            <td>
                                {get(payload,'to.state')}
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                            City
                            </td>
                            <td>
                                {get(payload,'to.city')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ZipCode
                            </td>
                            <td>
                                {get(payload,'to.zip')}
                            </td>
                        </tr>
                    </tbody>
                </table>
            
           </div>
        );
    }

    getWeightDetails = (payload) => {
        return (
            <div className="border m-5">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th colSpan="2">
                                Shipping Weight Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Weight
                            </td>
                            <td>
                            {get(payload,'weight')}
                            </td>
                        </tr>
                    </tbody>
                </table>
           </div>
        );
    }

    getShippingOptionDetails = (payload) => {
        return (
            <div className="border m-5"> 
            <table className="table table-striped">
                    <thead>
                        <tr>
                            <th colSpan="2">
                            Shipping Option Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Option
                            </td>
                            <td>
                                {get(payload,'shippingOption')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Shipping Cost
                            </td>
                            <td>
                                USD {get(payload,'weight')*(0.40)*(get(payload,'shippingOption') === 1 ? 1 : 1.5)}
                            </td>
                        </tr>
                    </tbody>
                </table>
           </div>
        );
    }

    getContent = () => {
        const payload = JSON.parse(sessionStorage.getItem("payload"));
        return (
           <div>
               {this.getSenderDetails(payload)}
               {this.getReceiverDetails(payload)}
               {this.getWeightDetails(payload)}
               {this.getShippingOptionDetails(payload)}
           </div>
        );
    }

    render() {
        const {payload} = this.props;
       
        console.log('Tesint gthe payload render',payload);
        return(
            <div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> Shipping Confirmation Details </h5>
                        <div>
                            {this.getContent()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Step5.propTypes = {
    children : PropTypes.bool,
    onAction: PropTypes.func,
    payload: PropTypes.object
};

Step5.defaultProps = {
    children : true,
    onAction : () => {},
    payload:{}
}


export  default Step5;