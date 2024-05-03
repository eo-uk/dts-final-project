import { useEffect, useRef } from 'react';
import { SelectInput } from 'web-components-lib/lib';

export default function LibSelectInput({
    name,
    value,
    setValue,
    placeholder,
    options,
    extraStyle,
}) {

    const ref = useRef();

    useEffect(() => {
        ref.current.value = value;
        ref.current.setValue = setValue;
        ref.current.placeholder = placeholder;
        ref.current.name = name;
        ref.current.options = options;
        ref.current.extraStyle = extraStyle;
    }, [])

    return (
        <c-select-input ref={ref}></c-select-input>
    )
}