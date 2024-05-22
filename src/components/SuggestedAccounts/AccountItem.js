import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wapper as PopperWrrapper } from '../../Layout/component/Poper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrrapper>
                    <AccountPreview />
                </PopperWrrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[200, 0]} placement="bottom" render={renderPreview} offset={[30, 0]}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('Avatar')}
                        src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7325749780766785538.jpeg?lk3s=a5d48078&nonce=91378&refresh_token=91840800350b8e8e56647286aa4d6d9f&x-expires=1716523200&x-signature=wp%2BqRdwYiOWBAaOMHO31P7XWuMQ%3D&shp=a5d48078&shcp=81f88b70&quot"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('item-nickname')}>
                            <strong>Pewpew</strong>
                            <FontAwesomeIcon className={cx('item-check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('item-name')}>Tạp hóa Pew Pew</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
