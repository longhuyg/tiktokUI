import classNames from 'classnames/bind';
import styles from './MenuItems.module.scss';
import Button from '../../../../Button';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    const clases = cx('Menu-items', {
        separate: data.separate,
    });

    return (
        <Button className={clases} icon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
