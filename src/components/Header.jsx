import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledHeader = styled.header`
    ${tw`bg-gray-900 p-6 text-white font-bold`};
`

const Header = () => (
    <StyledHeader>
        <span>Header</span>
    </StyledHeader>
)

export default Header
