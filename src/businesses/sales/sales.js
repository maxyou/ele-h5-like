import React, {Fragment} from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'
import Order from 'businesses/order/order'

export default (props) => {

    console.log(props)

    return (
        <div>
            sales
            <Order {...props}></Order>
        </div>
    )
  }