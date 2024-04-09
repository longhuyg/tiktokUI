import classNames from 'classnames/bind';
import styles from './Poper.module.scss';

const cx = classNames.bind(styles);

function wapper({ children }) {
    return <div className={cx('wapper')}>{children}</div>;
}

export default wapper;
