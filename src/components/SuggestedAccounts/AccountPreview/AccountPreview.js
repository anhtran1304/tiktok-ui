import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1669226400&x-signature=l4uIch1ro8OlhJ94MbBUHxwkkmQ%3D"
                    alt=""
                />
                <Button className={cx('button')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('username')}>
                        <strong>theanh28entertainment</strong>
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    </p>
                    <p className={cx('name')}>Theanh28 Entertainment</p>
                </div>
                <div>
                    <p className={cx('analytics')}>
                        <strong className={cx('follower-count')}>8M</strong>
                        <span className={cx('follower')}>Followers</span>
                        <strong className={cx('like-count')}>588.6M</strong>
                        <span className={cx('like')}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
