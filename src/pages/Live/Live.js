import styles from './Live.module.scss'
import classNames from 'classnames/bind';

const cx =classNames.bind(styles);

function Live() {
    return ( 
        <div className={cx('wrapper')}>
            <h2>Live page</h2>
        </div>
     );
}

export default Live;