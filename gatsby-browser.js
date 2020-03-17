/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import ContextProvider from './src/global-state/state'
import Layout from './src/layouts/layout'

import 'tailwindcss/dist/base.css'
import 'tailwindcss/dist/components.css'
import 'tailwindcss/dist/utilities.css'

export const wrapRootElement = ({ element }) => {
    return (
        <ContextProvider>
            <Layout>{element}</Layout>
        </ContextProvider>
    )
}
