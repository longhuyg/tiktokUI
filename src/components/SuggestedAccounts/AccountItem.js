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
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/43f64dfa14db9964fd98660a56878062.jpeg?lk3s=a5d48078&x-expires=1715817600&x-signature=ADtxVTKxEZq3fFTT0FNCVNHxtfU%3D"
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
