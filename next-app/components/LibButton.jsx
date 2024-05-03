import { useEffect, useRef } from 'react';
import { Button } from 'web-components-lib/lib';

export default function LibButton({
    text,
    extraStyle,
    handleClick,
}) {

    const ref = useRef();

    useEffect(() => {
        ref.current.text = text;
        ref.current.extraStyle = extraStyle;
    }, [])

    return (
        <c-button ref={ref} onClick={handleClick}></c-button>
    )
}