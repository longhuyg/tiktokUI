import classNames from 'classnames/bind';
import styles from './Poper.module.scss';

const cx = classNames.bind(styles);

function wapper({ children, className }) {
    return <div className={cx('wapper', className)}>{children}</div>;
}

export default wapper;
