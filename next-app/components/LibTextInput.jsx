import { useEffect, useRef } from 'react';
import { TextInput } from 'web-components-lib/lib';

export default function LibTextInput({
    name,
    value,
    setValue,
    placeholder,
    extraStyle,
}) {

    const ref = useRef();

    useEffect(() => {
        ref.current.name = name;
        ref.current.value = value;
        ref.current.setValue = setValue;
        ref.current.placeholder = placeholder;
        ref.current.extraStyle = extraStyle;
    }, [])

    return (
        <c-text-input ref={ref}></c-text-input>
    )
}