import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Poper.module.scss';

const cx = classNames.bind(styles);

function wapper({ children, className }) {
    return <div className={cx('wapper', className)}>{children}</div>;
}

wapper.propTypes = {
    children: PropTypes.node,
    classNames: PropTypes.string,
};

export default wapper;
