import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

class Step4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            shippingoption:1,
            isError:false
        };
    }
    handleClick = (value) => {

        if(value ===  'next'){
            if(!isNil(this.state.shippingoption) && !isEmpty(this.state.shippingoption)){   
                this.props.onAction({currentStep:5 , shippingoption:this.state.shippingoption})
            }else{
                this.setState({isError:true})
            }
           
        }else{
            this.props.onAction({currentStep:3})
        }
          
    };
    componentWillMount() {
        const payload = JSON.parse(sessionStorage.getItem("payload"));
        console.log('Tesintg the comwillmount');
        this.setState({
            shippingoption: get(payload,'shippingOption')
        })
    }

    handleChange =(e)=>{
        console.log(e.target.id , e.target.value);
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
                    <label for="shippingoption">Shipping Option</label>
                    <select id="shippingoption" className="form-control" onChange={this.handleChange}>
                        <option value="1">
                            ground
                        </option>
                        <option value="1.5">
                            priority
                        </option>
                    </select>
                </div>
            </form>
        );
    }

    render() {
       
        return(
            <div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> Get Shipping Option </h5>
                        <div>
                            {this.getContent()}
                        </div>
                        <div class="float-right clearfix">
                        <button type="button" class="btn btn-primary ml-2" onClick={()=>{this.handleClick('prev')}} >Prev</button>
                        <button type="button" class="btn btn-primary ml-2" onClick={()=>{this.handleClick('next')}} >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Step4.propTypes = {
    children : PropTypes.bool,
    onAction: PropTypes.func
};

Step4.defaultProps = {
    children : true,
    onAction : () => {}
}


export  default Step4;