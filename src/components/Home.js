import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderPage from '../containers/general/HeaderPage';
import styles from '../styles/Home.css';

class Home extends Component{

    render(){
        return(
            <div className={styles.homeScreen1}>
            <HeaderPage />
            </div>
        );
    }
}

export default Home;