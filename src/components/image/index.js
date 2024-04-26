import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import NoImage from '../../assets/Image/No-image.png';
import styles from './image.module.scss';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleFallback = () => {
        setFallback(NoImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            ref={ref}
            alt={alt}
            {...props}
            onError={handleFallback}
        ></img>
    );
});

export default Image;
