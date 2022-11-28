import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import Header from '~/layouts/components/Header';
import Sidebar from '../components/Sidebar';
import ModalForm from '~/components/ModalForm';
import styles from './DefaultLayout.module.scss';
import GetApp from '~/components/GetApp';
import { ModalContext } from '~/components/ModalProvider';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const context = useContext(ModalContext);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                <GetApp onHide={context.handleHideModal} />
            </div>

            {context.active && <ModalForm onHide={context.handleHideModal} />}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
