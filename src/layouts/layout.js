import React, { useContext } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import tw from 'twin.macro'

import '../css/tailwind.css'
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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${tw`font-bold`}
    }

    a {
        ${tw`opacity-50 transition duration-300 ease-in-out hover:opacity-75 hover:underline`}
    }
`

const StyledBody = styled.div`
    ${tw`min-h-screen grid`}
    grid-template-rows: 1fr auto;

    footer {
        ${tw`row-start-2 row-end-3`}
    }
`

const Layout = ({ children }) => {
    const { darkMode } = useContext(DarkModeContext)

    return (
        <ThemeProvider theme={{ darkMode }}>
            <GlobalStyle />
            <StyledBody>
                <ThemeToggle />
                <main>{children}</main>
                <Footer />
            </StyledBody>
        </ThemeProvider>
    )
}

export default Layout
