import Tippy from '@tippyjs/react/headless';
import { Wapper as PopperWrrapper } from '../../Poper';
import classNames from 'classnames/bind';
import styles from './MenuItems.module.scss';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles);

function Menu({ props, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item}></MenuItems>);
    };
    return (
        <Tippy
            interactive
            delay={[0, 800]}
            placement="bottom-end"
            render={(atrrs) => (
                <div className={cx('content')} tabIndex={-1} {...atrrs}>
                    <PopperWrrapper className={cx('Menu-Popper')}>{renderItems()}</PopperWrrapper>
                </div>
            )}
        >
            {props}
        </Tippy>
    );
}

export default Menu;
