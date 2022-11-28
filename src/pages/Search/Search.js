import styles from './Search.module.scss'
import classNames from 'classnames/bind';

const cx =classNames.bind(styles);

function Search() {
    return ( 
        <div className={cx('wrapper')}>
            <h2>Search page</h2>
        </div>
     );
}

export default Search;