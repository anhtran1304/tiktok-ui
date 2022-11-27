import classNames from 'classnames/bind';
import { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userServices from '~/services/userServices';
import Button from '~/components/Button';
import { ModalContext } from '~/components/ModalProvider'

const cx = classNames.bind(styles);

function Sidebar({ shrink }) {
    const currentUser = false;
    const context = useContext(ModalContext)

    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const fetchAPI = async () => {
            if (!seeAll) {
                const result = await userServices.getSuggested(1, 5);
                setSuggestedUsers(result);
            } else {
                const result = await userServices.getSuggested(1, 15);
                setSuggestedUsers(result);
            }
        };

        fetchAPI();
    }, [seeAll]);

    return (
        <div className={cx('wrapper', { shrink: shrink })}>
            <div className={cx('inner')}>
                <div className={cx('tabs')}>
                    <NavLink
                        to={config.routes.home}
                        className={(nav) => cx('tab-item', { active: nav.isActive })}
                    >
                        <HomeIcon className={cx('icon')} />{' '}
                        <HomeActiveIcon className={cx('active-icon')} /> For You
                    </NavLink>

                    <NavLink
                        to={config.routes.following}
                        className={(nav) => cx('tab-item', { active: nav.isActive })}
                    >
                        <UserGroupIcon className={cx('icon')} />{' '}
                        <UserGroupActiveIcon className={cx('active-icon')} /> Following
                    </NavLink>

                    <NavLink
                        to={config.routes.live}
                        className={(nav) => cx('tab-item', { active: nav.isActive })}
                    >
                        <LiveIcon className={cx('icon')} />{' '}
                        <LiveActiveIcon className={cx('active-icon')} /> LIVE
                    </NavLink>
                </div>

                {!currentUser && (
                    <div className={cx('login')}>
                        <div className={cx('detail')}>
                            <p>Log in to follow creators, like videos, and view comments.</p>
                            <Button outline onClick={context.handleShowModal}>Log in</Button>
                        </div>
                    </div>
                )}

                <div className={cx('suggested')}>
                    <p className={cx('title')}>Suggested accounts</p>
                    {suggestedUsers.map((suggestedUser) => {
                        return <SuggestedAccounts key={suggestedUser.id} data={suggestedUser} />;
                    })}

                    {seeAll ? (
                        <div className={cx('see-all')} onClick={() => setSeeAll(false)}>
                            See less
                        </div>
                    ) : (
                        <div className={cx('see-all')} onClick={() => setSeeAll(true)}>
                            See all
                        </div>
                    )}
                </div>
                <div className={cx('following')}>
                    <p className={cx('title')}>Following accounts</p>
                    <div className={cx('see-all')}>See more</div>
                </div>

                {currentUser && (
                    <div className={'following'}>
                        <p className={cx('title')}>Following accounts</p>
                        {/* Update FollowingAccounts later =>> */}
                        {/* <FollowingAccounts />
                    <FollowingAccounts />
                    <FollowingAccounts />
                    <FollowingAccounts />
                    <FollowingAccounts /> */}
                        <div className={cx('see-all')}>See more</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sidebar;
