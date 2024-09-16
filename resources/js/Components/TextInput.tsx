import { forwardRef, useEffect, useImperativeHandle, useRef, InputHTMLAttributes } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={`tw-border-gray-300 dark:tw-border-gray-700 dark:tw-bg-gray-900 dark:tw-text-gray-300 focus:tw-border-indigo-500 dark:focus:tw-border-indigo-600 focus:tw-ring-indigo-500 dark:focus:tw-ring-indigo-600 tw-rounded-md tw-shadow-sm ${className}`}
            ref={localRef}
        />

    );
});
