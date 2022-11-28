import styles from './Setting.module.scss'
import classNames from 'classnames/bind';

const cx =classNames.bind(styles);

function Setting() {
    return ( 
        <div className={cx('wrapper')}>
            <h2>Setting page</h2>
        </div>
     );
}

export default Setting;