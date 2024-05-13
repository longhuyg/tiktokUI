import classNames from 'classnames/bind';
import styles from './Sidbar.module.scss';
import config from '../../../config';
import Menu, { MenuItem } from './Menu';
import { Home, Following, Friend, Discover, Live as Liveicon } from '../../../components/icon';

const cx = classNames.bind(styles);

function Sidbar() {
    return (
        <aside className={cx('Sibar')}>
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<Home />}></MenuItem>
                <MenuItem title="Following" to={config.routes.following} icon={<Following />}></MenuItem>
                <MenuItem title="Friend" to={config.routes.friend} icon={<Friend />}></MenuItem>
                <MenuItem title="Discover" to={config.routes.discover} icon={<Discover />}></MenuItem>
                <MenuItem title="Live" to={config.routes.live} icon={<Liveicon />}></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidbar;
