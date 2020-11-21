import React,{Component} from 'react';
import styles from './index.module.scss';
import Tab from './Tab/index';
import img1 from './pattemImg/img/艾斯.jpeg';
class Index extends Component {
    render() {
        return (
        <div className={styles.homePage}>
            <div>
                <img src={img1} alt='111'></img>
            {/* <Tab></Tab> */}
            </div>
        </div>
        )
    }
}
export default Index;