import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    const [darkMode, setDarkMode] = useState(isDarkMode);

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    setDarkMode((mutation.target as HTMLElement).getAttribute('data-theme') === 'dark');
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
        });

        return () => observer.disconnect();
    }, []);

    return darkMode;
};