import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '../common/Button';
import styles from '../../styles/general/Header.css'

class Header extends Component{

    render(){
        return(
            <div>
            <div className={styles.buttons}><Button name="О театре" />
            <Button name="Репертуар" />
            <Button name="Билеты" />
            </div>
                
            </div>
        );
    }
}

export default Header;