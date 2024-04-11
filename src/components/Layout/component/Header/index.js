import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import logo from '../../Image/logo-Tiktok.jpg';
import AccountItem from '../../../Accounts';
import { Wapper as PopperWrrapper } from '../Poper';
import Button from '../../../Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResults, setSearchResults] = useState([]);
    const [visible, setVisible] = useState(true);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 3000);
    }, []);

    return (
        <header className={cx('wapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                </div>

                <Tippy
                    interactive
                    visible={searchResults.length > 0}
                    onClickOutside={hide}
                    render={(atrrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...atrrs}>
                            <PopperWrrapper>
                                <h4 className={cx('search-lable')}> Accounts</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            onClick={visible ? hide : show}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('btnsearch')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('ActionUser')}>
                    <Button text> Upload</Button>
                    <Button primary>login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
