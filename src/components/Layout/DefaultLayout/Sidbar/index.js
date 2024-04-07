import classNames from 'classnames/bind';
import styles from './Sidbar.module.scss';

const cx = classNames.bind(styles);

function Sidbar() {
    return <aside className={cx('Sibar')}> Sibar</aside>;
}

export default Sidbar;
