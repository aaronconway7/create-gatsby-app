import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledFooter = styled.footer`
    /* ${tw`bg-gray-100 p-4 border-t`}; */
`

const Footer = () => (
    <StyledFooter>
        © {new Date().getFullYear()}, Made by
        {` `}
        <a href={`https://aaronconway.co.uk`} target={`_blank`}>
            Aaron
        </a>
    </StyledFooter>
)

export default Footer
