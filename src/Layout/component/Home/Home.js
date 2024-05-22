import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ShortVideo from './Shortvideos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faFlag, faShare, faHeart } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <ShortVideo />
            <div className={cx('wrapper-acount')}>
                <img
                    className={cx('Avatar')}
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7325749780766785538.jpeg?lk3s=a5d48078&nonce=91378&refresh_token=91840800350b8e8e56647286aa4d6d9f&x-expires=1716523200&x-signature=wp%2BqRdwYiOWBAaOMHO31P7XWuMQ%3D&shp=a5d48078&shcp=81f88b70&quot"
                    alt=""
                />
                <button className={cx('btnHeart')}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <strong className={cx('Number')}>8.2M </strong>

                <button className={cx('btnComment')}>
                    <FontAwesomeIcon icon={faCommentDots} />
                </button>
                <strong className={cx('Number')}>8.2M </strong>

                <button className={cx('btnflag')}>
                    <FontAwesomeIcon icon={faFlag} />
                </button>
                <strong className={cx('Number')}>8.2M </strong>

                <button className={cx('btnShare')}>
                    <FontAwesomeIcon icon={faShare} />
                </button>
                <strong className={cx('Number')}>8.2M </strong>
            </div>
        </div>
    );
}

export default HomePage;
