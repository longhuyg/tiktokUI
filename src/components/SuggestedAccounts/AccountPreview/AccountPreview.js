import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '../../Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('Avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/43f64dfa14db9964fd98660a56878062.jpeg?lk3s=a5d48078&x-expires=1715817600&x-signature=ADtxVTKxEZq3fFTT0FNCVNHxtfU%3D"
                    alt=""
                />
                <Button className={cx('btnFollow')} primary>
                    Follow
                </Button>
            </header>
            <div className={cx('Body')}>
                <p className={cx('item-nickname')}>
                    <strong>Pewpew</strong>
                    <FontAwesomeIcon className={cx('item-check')} icon={faCheckCircle} />
                </p>
                <p className={cx('item-name')}>Tạp hóa Pew Pew</p>
                <p className={cx('analytics')}>
                    <strong className={cx('Number')}>8.2M </strong>
                    <span className={cx('lable')}>Followers</span>
                    <strong className={cx('Number')}>8.2M </strong>
                    <span className={cx('lable')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
