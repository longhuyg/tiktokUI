import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    icon,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //delete event listeners when button is disabled
    if (disabled) {
        Object.keys(props).forEach((propskey) => {
            if (propskey.startsWith('on') && typeof propskey === 'function') {
                delete props[propskey];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('Wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    });
    return (
        <Comp className={classes} {...props}>
            {icon && <span className={cx('IconStyle')}> {icon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
