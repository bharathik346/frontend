import React, { Component } from 'react';
import Wizard from '../core/wizard/wizard.component';
import Step1 from './steps/step1.component';
import Step2 from './steps/step2.component';
import Step3 from './steps/step3.component';
import Step4 from './steps/step4.component';
import Step5 from './steps/step5.component';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';


class ShippingLabelMaker extends Component {
  state = {
    currentStep: 1,
    payload:{},
    progressWidth:'0%'
  }
  
  handleActions = (data) => {
    console.log('Testing the data',data);
    const dummypayload = cloneDeep(this.state.payload);
    if(get(data,'senderAddress',false)){
      dummypayload.from = get(data,'senderAddress',{});
    }
    if(get(data,'receiverAddress',false)){
      dummypayload.to = get(data,'receiverAddress',{});
    }
    if(get(data,'weight',false)){
      dummypayload.weight = get(data,'weight',0);
    }
    if(get(data,'shippingoption',false)){
      dummypayload.shippingOption = get(data,'shippingoption',null);
    }

    sessionStorage.setItem("payload",JSON.stringify(dummypayload));
    let progressWidth = '20%';

    if(get(data,'currentStep',0) === 1){
      progressWidth = '20%';
    }else if(get(data,'currentStep',0) === 2){
      progressWidth = '40%';

    }else if(get(data,'currentStep',0) === 3){
      progressWidth = '60%';
      
    }else if(get(data,'currentStep',0) === 4){
      progressWidth = '80%';
      
    }else if(get(data,'currentStep',0) === 5){
      progressWidth = '100%';
      
    }

    this.setState({currentStep:get(data,'currentStep',0), payload:dummypayload,progressWidth})
  }
    render() {
      console.log('Testing the payload', this.state.payload);
        return (
          <div className="home">
            <h4 className="text-center">Shipping Label Maker</h4>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum reiciendis quo eum temporibus quae explicabo et consequuntur debitis enim esse aspernatur natus, quam cumque quaerat harum sequi sunt quis autem?</p> */}
            <div className="progress mt-5 mb-5">
                <div className="progress-bar" style={{width: this.state.progressWidth}} > 

                </div>
            </div>

           <div>
             <Wizard currentStep = {this.state.currentStep}>
                <Step1 onAction = {(data) => {this.handleActions(data)}} />
                <Step2 onAction = {(data) => {this.handleActions(data)}} />
                <Step3 onAction = {(data) => {this.handleActions(data)}}/>
                <Step4 onAction = {(data) => {this.handleActions(data)}}/>
                <Step5 payload = {this.state.payload}/>
             </Wizard>  
           </div>
          </div>
        );

      }
}

export default ShippingLabelMaker;