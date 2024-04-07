import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../component/Header';
import Sidbar from './Sidbar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidbar></Sidbar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
