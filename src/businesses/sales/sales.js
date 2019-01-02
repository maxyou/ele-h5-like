import React from 'react'
import styled from 'styled-components'
import Order from '@/businesses/order/order'
import ShopDetail from '@/businesses/sales/shopdetail'

const StyledDivHeader = styled.div`

    height: 100px;
    background-color: #9090f0;

`

export default (props) => {

    // console.log(props)

    return (
        <div>
            <StyledDivHeader>
                <ShopDetail {...props}></ShopDetail>
            </StyledDivHeader>
            <Order {...props}></Order>
        </div>
    )
  }