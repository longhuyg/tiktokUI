import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faCloudArrowUp, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import logo from '../../Image/logo-Tiktok.jpg';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={logo} />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('btnsearch')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('ActionUser')}>
                    <FontAwesomeIcon icon={faCloudArrowUp} />
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </header>
    );
}

export default Header;
