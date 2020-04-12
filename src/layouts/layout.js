import React, { useContext } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import tw from 'twin.macro'

import { DarkModeContext } from '../store/darkMode'
import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
    body {
        ${tw`min-h-screen text-gray-900`}
        ${({ theme }) =>
            theme.darkMode
                ? tw`text-gray-100 bg-gray-900`
                : tw`text-gray-900 bg-gray-100`}
    }
`

const Layout = ({ children }) => {
    const { darkMode } = useContext(DarkModeContext)

    return (
        <ThemeProvider theme={{ darkMode }}>
            <GlobalStyle />
            <ThemeToggle />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
    )
}

export default Layout
