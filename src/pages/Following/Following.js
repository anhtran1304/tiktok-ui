import styles from './Following.module.scss'
import classNames from 'classnames/bind';

const cx =classNames.bind(styles);

function Following() {
    return ( 
        <div className={cx('wrapper')}>
            <h2>Following page</h2>
        </div>
     );
}

export default Following;