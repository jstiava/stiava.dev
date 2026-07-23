'use client'

import { createContext, JSX, useMemo, useState } from 'react';
import { ThemeProvider } from "./theme-provider";

export const SessionContext = createContext<{
    isDark: boolean,
    toggleDarkMode: () => any
}>({
    isDark: false,
    toggleDarkMode: () => { }
});

export default function SessionContextWrapper({
    children
} : {
    children : JSX.Element
}) {

    const [isDark, setIsDark] = useState(true)

    const toggleDarkMode = () => {
        setIsDark(prev => !prev);
    }

    const value = useMemo(
        () => ({
            isDark,
            toggleDarkMode,
        }),
        [isDark, toggleDarkMode]
    );

    return (
        <SessionContext.Provider
            value={value}
        >
            <ThemeProvider
                attribute="class"
                forcedTheme={isDark ? 'dark' : 'light'}
            >
                {children}
            </ThemeProvider>
        </SessionContext.Provider>
    )
}