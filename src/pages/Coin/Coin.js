import styles from './Coin.module.scss'
import classNames from 'classnames/bind';

const cx =classNames.bind(styles);

function Coin() {
    return ( 
        <div className={cx('wrapper')}>
            <h2>Coin page</h2>
        </div>
     );
}

export default Coin;