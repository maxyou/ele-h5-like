import React, {Fragment} from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'
import Order from 'businesses/order/order'

const StyledDivHeader = styled.div`

    height: 200px;
    background-color: #9090f0;

`

export default (props) => {

    console.log(props)

    return (
        <div>
            <StyledDivHeader></StyledDivHeader>
            <Order {...props}></Order>
        </div>
    )
  }