import React from 'react'

import ContextProvider from './src/store/state'
import SEO from './src/components/SEO'
import Layout from './src/layouts/layout'

const App = ({ element }) => {
    return (
        <ContextProvider>
            <SEO />
            <Layout>{element}</Layout>
        </ContextProvider>
    )
}

export default App
