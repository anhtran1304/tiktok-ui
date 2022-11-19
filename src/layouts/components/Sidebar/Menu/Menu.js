import PropTypes from 'prop-types';
import className from 'classnames/bind';
import styles from './Menu.module.scss'

const cx = className.bind(styles)
function Menu({children}) {
    return ( 
        <nav className={cx('wrapper')}>
            {children}
        </nav>
     );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Menu;