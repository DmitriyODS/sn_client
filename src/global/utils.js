import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function toNumber(value, defaultValue = 0) {
    if (!value) {
        return defaultValue;
    }

    const parsedValue = parseInt(value, 10);

    if (!isNaN(parsedValue)) {
        return parsedValue;
    } else {
        return defaultValue;
    }
}
