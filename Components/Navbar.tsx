import { SearchSharp, ShoppingBasket } from '@mui/icons-material'
import { Badge, InputBase } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
background-color: transparent;
color: black;
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: start;
    padding-left: 12px;
    align-items: center;
    gap: 1rem;
`


const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Logo = styled.h1`
font-size: 22px;
color: black;
font-weight: 600;
`

const Right = styled.div`
    flex: 1;
    justify-content: flex-end;
`
const Language = styled.span`
    font-size: 14px;

`

const Search = styled.div`
    background-color: white;
    padding: 0px 0px 0px 12px;
    display: flex;
    border-radius: 5px;
    width: 47%;
    border: 1px solid lightgray;
    height: 32px;
`
const Icon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: black;
`

const RightSec = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 1rem;
margin-right: 22px;
`
const BodyRight = styled.span`
    font-size: 18px;
    font-weight: 500;
    color: black;
    cursor: pointer;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <Search>
                        <InputBase placeholder='Search here' />
                        <Icon>
                            <SearchSharp />
                        </Icon>
                    </Search>
                </Left>
                <Center> <Logo>  Shop wid Majid </Logo> </Center>
                <Right>
                    <RightSec>
                        <BodyRight>SignIn </BodyRight>
                        <BodyRight>SignUp </BodyRight>
                        <BodyRight> <Badge badgeContent={4} color="primary">
                            <ShoppingBasket />
                        </Badge> </BodyRight>
                    </RightSec>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;