import React from 'react'
import styled from 'styled-components'
import Icon from 'businesses/sales/icon'

const StyledFood = styled.div`
    background-color: #f080c0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items:stretch;
    margin-bottom:1px;
`

const StyledFoodInfo = styled.div`
    background-color: #c0d0c0;
    flex: 1 0 auto;



`
export default (props) => {

    // console.log(props)

    return (
        <StyledFood>
            <Icon url={props.image_path}></Icon>
            <StyledFoodInfo>
                {props.name}
            </StyledFoodInfo>
        </StyledFood>
    )
  }