import React, { createContext, useEffect } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useLocalStorage(`darkMode`, false)

    useEffect(() => {
        setDarkMode(darkMode)
    }, [darkMode, setDarkMode])

    return (
        <DarkModeContext.Provider
            value={{
                darkMode,
                setDarkMode,
            }}
        >
            {children}
        </DarkModeContext.Provider>
    )
}
