import styles from './Feedback.module.scss'
import classNames from 'classnames/bind';

const cx =classNames.bind(styles);

function Feedback() {
    return ( 
        <div className={cx('wrapper')}>
            <h2>Feedback page</h2>
        </div>
     );
}

export default Feedback;