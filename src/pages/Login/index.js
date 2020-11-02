import React,{Component} from 'react';
import style from './login.module.scss'
import LoginInput from './components/LoginInput/index.js'

class Index extends Component {
    render() {
        return (
        <div className={style.login}>
            <div className={style.loginHead}>我是login页--头部</div>
            <div className={style.loginBody}>
                <LoginInput />
            </div>
        </div>
        )
    }
}
export default Index;