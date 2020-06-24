import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/common/Button.css'

class Button extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={styles.button}>
                <p className={styles.textButton}>{this.props.name}</p>
            </div>
        );
    }
}

Button.propTypes = {
    name:PropTypes.string.isRequired
  };

export default Button;