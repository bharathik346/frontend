import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

class Wizard extends Component {
    constructor(props){
        super(props);
        this.state = {
            children : [],
            currentStep: 1
        };
    }

    componentWillMount() {
        const { children } = this.props;
        this.setState({ children });
    }

    componentWillReceiveProps(nextProps) {
        const {currentStep} = this.props;
        if(currentStep !== nextProps.currentStep){
            this.setState({currentStep:nextProps.currentStep})
        }
    }

    getChildren= () => {
        const {children, currentStep} = this.state;
        const content = [];

        map(children,(child,index) => {
           content.push(<div>
                {(currentStep - 1) === index ? child : null}
            </div>);
        })

        return content;

    }
    render() {
        return(
            <div>
                {this.getChildren()}
            </div>
        )
    }
}

Wizard.propTypes = {
    children : PropTypes.bool
};

Wizard.defaultProps = {
    children : true
}


export  default Wizard;