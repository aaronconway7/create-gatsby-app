import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

import SEO from '../components/seo'
import Emoji from '../components/Emoji'

const StyledHome = styled.div`
    h1 {
        ${tw`font-bold`};
    }
`

const Home = () => (
    <>
        <SEO title={`Home`} />
        <StyledHome>
            <h1>
                Hello World! <Emoji emoji={`👋`} label={`Waving Hand`} />
            </h1>
            <p>Welcome to your new Gatsby site.</p>
            <Link to={`/page-2/`}>Go to page 2</Link>
        </StyledHome>
    </>
)

export default Home
