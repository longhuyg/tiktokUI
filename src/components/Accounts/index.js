import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('Avata')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9e9c8c7eee14e50d6487d8ebc0775df3~c5_100x100.jpeg?lk3s=a5d48078&amp;x-expires=1712898000&amp;x-signature=IlFbecypUUQujkPw3HKmlFOjgxM%3D"
                alt="Hoaa"
            ></img>
            <div className={cx('info')}>
                <p className={cx('Name')}>
                    <span className={cx('NameInfo')}>Nguyễn văn a</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCircleCheck} />
                </p>
                <span className={cx('Username')}>hello </span>
            </div>
        </div>
    );
}

export default AccountItem;
