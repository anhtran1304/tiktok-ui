import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={data.nickname}
                />
                <Button className={cx('button')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('username')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && (
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        )}
                    </p>
                    <p
                        className={cx('name')}
                    >{`${data.first_name} ${data.last_name}`}</p>
                </div>
                <div>
                    <p className={cx('analytics')}>
                        <strong className={cx('follower-count')}>
                            {data.followers_count}
                        </strong>
                        <span className={cx('follower')}>Followers</span>
                        <strong className={cx('like-count')}>
                            {data.likes_count}
                        </strong>
                        <span className={cx('like')}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
