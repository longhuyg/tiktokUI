import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuItems.module.scss';
import Button from '../../../../components/Button';

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

MenuItems.propTypes = {
    data: PropTypes.node,
    onClick: PropTypes.func,
};

export default MenuItems;
