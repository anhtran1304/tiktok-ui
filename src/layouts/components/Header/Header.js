import classNames from 'classnames/bind';
import { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCircleHalfStroke,
    faCoins,
    faArrowRightFromBracket,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay, faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import config from '~/config';

import Button from '~/components/Button/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Search from '../Search';
import { ModalContext } from '~/components/ModalProvider';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleHalfStroke} />,
        title: 'Dark mode',
    },
];

function Header() {
    //Switch log in log out
    // true: logged in
    // false: log out
    const currentUser = false;
    const context = useContext(ModalContext);
    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/getcoins',
        },
        {
            icon: <FontAwesomeIcon icon={faCirclePlay} />,
            title: 'LIVE Studio',
            to: '/livestudio',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <Button
                            text
                            leftIcon={<FontAwesomeIcon icon={faPlus} to={config.routes.upload} />}
                        >
                            Upload
                        </Button>
                    ) : (
                        <Button
                            text
                            leftIcon={
                                <FontAwesomeIcon icon={faPlus} onClick={context.handleShowModal} />
                            }
                        >
                            Upload
                        </Button>
                    )}

                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy
                                className={cx('messages-btn')}
                                delay={[0, 100]}
                                content="Messages"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                offset={[0, 7]}
                                className={cx('inbox-btn')}
                                delay={[0, 100]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary onClick={context.handleShowModal}>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1608869201062914.jpeg?x-expires=1669291200&x-signature=DLsJn6QCDnsC2XMCn7N5lgFoFPA%3D"
                                alt="Tran The Anh"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
