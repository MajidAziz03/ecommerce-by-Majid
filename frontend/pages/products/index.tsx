import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../../Components/Announcement'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Newsletter from '../../Components/Newsletter'
import Products from '../../Components/Products'
import { mobile } from '../../Components/Responsive'

const Title = styled.h1`
    font-size: 22px;
    color : black;
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;


`

const Filter = styled.div`
    margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin: 20px;
  ${mobile({ marginRight: "0px" })}

`

const Select = styled.select`
z-index: 2;
margin: 20px;
padding: 10px;
cursor: pointer;
  ${mobile({ margin: "10px 0px" })}


`

const Option = styled.option`

`

const ProductList = () => {

    return (
        <>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select name='color' >
                        <Option disabled >
                            Color
                        </Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name='size'>
                        <Option disabled >
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select>
                        <Option value={"newest"}  >
                            Newest
                        </Option>
                        <Option value={"low to high"} >Price (low to high)</Option>
                        <Option value={"high to low"} >Price (high to low)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </>
    )
}

export default ProductList