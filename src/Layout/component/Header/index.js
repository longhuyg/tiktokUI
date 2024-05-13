import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../../assets/Image/logo-Tiktok.jpg';
import Button from '../../../components/Button';
import Menu from '../Poper/MenuItems';
import { Mesenger, Notification, UploadIcon } from '../../../components/icon';
import Image from '../../../components/image';
import Search from '../Search';
import config from '../../../config';

const cx = classNames.bind(styles);

const DATA_MENU = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        Children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feadback and help',
        to: './feadback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    //handle
    const handleMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };
    const UserMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: './feadback',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: './coins',
        },
        ...DATA_MENU,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: './logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <Search></Search>

                <div className={cx('ActionUser')}>
                    {currentUser ? (
                        <div className={cx('currentUser')}>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Tin Nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Mesenger />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Thông báo" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Notification />
                                    <span className={cx('button__badge')}>2</span>
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <div>
                            <Button text> Upload</Button>
                            <Button primary>login</Button>
                        </div>
                    )}
                    <Menu
                        items={currentUser ? UserMenu : DATA_MENU}
                        onChange={handleMenuChange}
                        props={
                            currentUser ? (
                                <Image
                                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/5ac84db9fed60cfd5ff90dd88096efdc~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1713243600&x-signature=HNDnK7RManHCeW800ki02xGs0uo%3D"
                                    className={cx('User-avatar')}
                                    alt="nguyen van a"
                                ></Image>
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                                </button>
                            )
                        }
                    ></Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
