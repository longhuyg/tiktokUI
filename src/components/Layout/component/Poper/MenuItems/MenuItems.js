import classNames from 'classnames/bind';
import styles from './MenuItems.module.scss';
import Button from '../../../../Button';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    return (
        <Button className={cx('Menu-items')} icon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
