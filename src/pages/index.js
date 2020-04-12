import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/SEO'
import Emoji from '../components/Emoji'

const StyledHome = styled.div``

const Home = () => {
    return (
        <StyledHome>
            <SEO title={`Home`} />
            <h1>
                Hello World! <Emoji emoji={`👋`} label={`Waving Hand`} />
            </h1>
            <p>Welcome to your new Gatsby site.</p>
            <Link to={`/page-2/`}>Go to page 2</Link>
        </StyledHome>
    )
}

export default Home
