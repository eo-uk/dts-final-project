import { useEffect, useRef } from 'react';
import { TextArea } from 'web-components-lib/lib';

export default function LibTextArea({
    name,
    value,
    setValue,
    placeholder,
    rows,
    extraStyle,
}) {

    const ref = useRef();

    useEffect(() => {
        ref.current.name = name;
        ref.current.value = value;
        ref.current.setValue = setValue;
        ref.current.placeholder = placeholder;
        ref.current.rows = rows;
        ref.current.extraStyle = extraStyle;
    }, [])

    return (
        <c-text-area ref={ref}></c-text-area>
    )
}