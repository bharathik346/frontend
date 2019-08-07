import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isNil from 'lodash/isNil';

class Step1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            address:'',
            city:'',
            state:'',
            zip:'',
            isError:false
        };
    }
    handleClick = (value) => {

        if(value ===  'next'){
            const senderAddress = {};
            senderAddress.name = this.state.name;
            senderAddress.address = this.state.address;
            senderAddress.city = this.state.city;
            senderAddress.state = this.state.state;
            senderAddress.zip = this.state.zip;
            if(!isNil(this.state.name ) && !isNil(this.state.state ) && !isNil(this.state.city ) && !isNil(this.state.address ) && !isNil(this.state.zip ) ){
                console.log('Tesitng the validation',this.state.name);
                this.props.onAction({currentStep:2 , senderAddress})
            }else{
                this.setState({isError:true})
            }
           
        }
          
    };
    
    componentWillMount() {
        const payload = JSON.parse(sessionStorage.getItem("payload"));
        console.log('Tesintg the comwillmount');
        this.setState({
            name: get(payload,'from.name'),
            address:get(payload,'from.address'),
            city:get(payload,'from.city'),
            state:get(payload,'from.state'),
            zip:get(payload,'from.zip'),
        })
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.id] : e.target.value,
            isError:false
        })
    }

    getContent = () => {
        return (
            <form>
                <div className={`${this.state.isError? "alert alert-danger": ""}`}>{this.state.isError ?'Please Fill all the Details' : null}</div>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="name" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                </div>
            
            <div className="form-group">
                <label for="address">Street</label>
                <input type="text" className="form-control" id="address" placeholder="Address" value={this.state.address} onChange={this.handleChange}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label for="city">City</label>
                <input type="text" className="form-control" id="city" value={this.state.city} onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-4">
                <label for="state">State</label>
                <input type="text" className="form-control" id="state" value={this.state.state} onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-2">
                <label for="zip">Zip</label>
                <input type="text" pattern="[0-9]{5}" className="form-control" id="zip" value={this.state.zip} onChange={this.handleChange}/>
                </div>
            </div>
           
            </form>
        );
    }

    render() {
       
        return(
            <div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> Enter the sender's address  </h5>
                        <div>
                            {this.getContent()}
                        </div>
                        <div class="float-right clearfix">
                        <button type="button" class="btn btn-primary ml-2" onClick={()=>{this.handleClick('next')}} >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Step1.propTypes = {
    children : PropTypes.bool,
    onAction: PropTypes.func
};

Step1.defaultProps = {
    children : true,
    onAction : () => {}
}


export  default Step1;