import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image'

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_300x300.webp?x-expires=1668506400&x-signature=JxhAwZMlFWUhaj9%2BKkUBcvlJ5Kw%3D"
                alt="mixi"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>mixigaming</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>Độ Phùng</span>
            </div>
        </div>
    );
}

export default AccountItem;
