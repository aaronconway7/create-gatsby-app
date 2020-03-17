/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

import Header from '../components/header'
import Footer from '../components/footer'

// All versions
const GlobalStyle = createGlobalStyle`
    body {
        ${tw`text-gray-900 min-h-screen`};
    }

    main {
        ${tw`max-w-screen-md m-auto p-32`};
    }

    a {
        ${tw`border py-2 px-4 inline-block rounded bg-gray-500 hover:bg-gray-400`};
    }
`

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
