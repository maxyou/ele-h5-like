import React from 'react'
import Footer from '@/components/footer/footer'
import Shops from '@/businesses/shops/shops.js'
import Category from '@/businesses/category/category.js'
import styled from 'styled-components'
const StyledDiv = styled.div`
    
    overflow-x: hidden;
    background-color:#eeeeee;
`
export default function Home() {
    return (
        <StyledDiv>
            <Category />
            <Shops />
            <Footer />
        </StyledDiv>
    );
  }