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
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7325749780766785538.jpeg?lk3s=a5d48078&nonce=91378&refresh_token=91840800350b8e8e56647286aa4d6d9f&x-expires=1716523200&x-signature=wp%2BqRdwYiOWBAaOMHO31P7XWuMQ%3D&shp=a5d48078&shcp=81f88b70&quot"
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
