import { useEffect, useState } from "react";

const getLocalStorage = (key:any, initialValue: any) => {
    const savedValue = JSON.parse(localStorage.getItem(key) || '');

    if (savedValue) return savedValue;

    if (initialValue instanceof Function) initialValue();

    return initialValue;
};

export default function useLocalStorage(key:any, initialValue:any) {
    const [value, setValue] = useState(() => {
        return getLocalStorage(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}