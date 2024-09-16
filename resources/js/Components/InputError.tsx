import { HTMLAttributes } from 'react';

export default function InputError({ message, className = '', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p {...props} className={'tw-text-sm tw-text-red-600 dark:tw-text-red-400 ' + className}>
            {message}
        </p>
    ) : null;
}
