import React from 'react'
import styled from 'styled-components'
import Order from '@/businesses/order/order'
import ShopDetail from '@/businesses/sales/shopdetail'

const StyledDivSales = styled.div`
    // overflow-x: hidden;
    // overflow-y: auto;
    min-width:512px;
    background-color:#dddddd;
`

const StyledDivHeader = styled.div`    
    height: 230px;
`

export default (props) => {

    // console.log(props)

    return (
        <StyledDivSales>
            <StyledDivHeader>
                <ShopDetail {...props}></ShopDetail>
            </StyledDivHeader>
            <Order {...props}></Order>
        </StyledDivSales>
    )
  }