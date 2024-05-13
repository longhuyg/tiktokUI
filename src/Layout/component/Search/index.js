import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '../../../components/Accounts';
import { Wapper as PopperWrrapper } from '../Poper';
import { useDelayFun } from '../../../Hooks';
import * as searchServices from '../../../services/searchServices';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [show, setShow] = useState(true);
    const [Loading, setLoading] = useState(false);

    const Savedely = useDelayFun(searchValue, 800);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };
    const handleHide = () => {
        setShow(false);
    };

    useEffect(() => {
        if (!Savedely.trim()) {
            setSearchResults([]);
            return;
        }
        setLoading(true);

        const fetchAPI = async () => {
            const result = await searchServices.search(Savedely);
            setSearchResults(result);

            setLoading(false);
        };
        fetchAPI();
    }, [Savedely]);

    const handleOnChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <HeadlessTippy
            interactive
            visible={show && searchResults.length > 0}
            onClickOutside={handleHide}
            render={(atrrs) => (
                <div className={cx('search-result')} tabIndex={-1} {...atrrs}>
                    <PopperWrrapper>
                        <h4 className={cx('search-lable')}> Accounts</h4>
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result}></AccountItem>
                        ))}
                    </PopperWrrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleOnChange}
                    onFocus={() => setShow(true)}
                />
                {!!searchValue && !Loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {Loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('btnsearch')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
