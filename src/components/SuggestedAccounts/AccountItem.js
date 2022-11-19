import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1669053600&x-signature=CyeAft5RJcnYR0Xjn%2FwZckeaLkk%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('username')}>
                    <p>theanh28entertainment</p>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>Theanh28 Entertainment</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
