import { useState, useEffect } from 'react';

function useDelayFun(value, delay) {
    // tạo biến lưu giá trị
    const [selectValue, setSelectValue] = useState(value);
    // sử dụng callback để delay khi nhập
    useEffect(() => {
        const handelr = setTimeout(() => setSelectValue(value), delay);
        // xóa sự kiện cũ
        return () => clearTimeout(handelr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return selectValue;
}

export default useDelayFun;
