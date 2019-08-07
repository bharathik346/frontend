import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

class Step3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            weight:'',
            isError:false
        };
    }
    handleClick = (value) => {

        if(value ===  'next'){
            if(!isNil(this.state.weight) && !isEmpty(this.state.weight)){   
                console.log('test weight',this.state.weight); 
                this.props.onAction({currentStep:4 , weight:this.state.weight})
            }else{
                this.setState({isError:true})
            }
           
        }else{
            this.props.onAction({currentStep:2})
        }
          
    };

    handleChange =(e)=>{
        console.log(e.target.id , e.target.value);
        this.setState({
            [e.target.id] : e.target.value,
            isError:false
        })
    }
    componentWillMount() {
        const payload = JSON.parse(sessionStorage.getItem("payload"));
        console.log('Tesintg the comwillmount');
        this.setState({
            weight: get(payload,'weight')
        })
    }

    getContent = () => {
        return (
            <form>
                <div className={`${this.state.isError? "alert alert-danger": ""}`}>{this.state.isError ?'Please Fill all the Details' : null}</div>
            
                <div className="form-group">
                    <label for="name">Weight</label>
                    <input type="text" className="form-control" id="weight" pattern="[0-9]{5}"  placeholder="Weight" value={this.state.weight} onChange={this.handleChange} />
                </div>
            </form>
        );
    }

    render() {
       
        return(
            <div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> Get Weight  </h5>
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

Step3.propTypes = {
    children : PropTypes.bool,
    onAction: PropTypes.func
};

Step3.defaultProps = {
    children : true,
    onAction : () => {}
}


export  default Step3;