import React, { Component } from 'react';
import styles from './login.module.scss'
import LoginInput from './components/LoginInput/index.js'

class Index extends Component {
    render () {
        return (
            <div className={styles.login}>
                <div className={styles.loginHead}>我是login页--头部</div>
                <div className={styles.loginBody}>
                <LoginInput />
                    <div className={styles.flickerButton} >
                      <div className={[styles.flickerButtonOne]} >Hover me</div>
                      <div className={styles.flickerButtonTwo} >Hover me</div>
                      <div className={styles.flickerButtonThree} >Hover me</div>
                    </div>
                 
                </div>
            </div>
        )
    }
}
export default Index;