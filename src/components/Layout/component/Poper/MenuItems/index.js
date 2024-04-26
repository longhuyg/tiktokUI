import Tippy from '@tippyjs/react/headless';
import { Wapper as PopperWrrapper } from '../../Poper';
import classNames from 'classnames/bind';
import styles from './MenuItems.module.scss';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFN = () => {};

function Menu({ props, items = [], hideOnClick = false, onChange = defaultFN }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.Children;

            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.Children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItems>
            );
        });
    };
    return (
        <Tippy
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 800]}
            placement="bottom-end"
            render={(atrrs) => (
                <div className={cx('content')} tabIndex={-1} {...atrrs}>
                    <PopperWrrapper className={cx('Menu-Popper')}>
                        {history.length > 1 && (
                            <Header
                                title={'language'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, history.length - 1));
                                }}
                            ></Header>
                        )}
                        {renderItems()}
                    </PopperWrrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {props}
        </Tippy>
    );
}

export default Menu;
