import React from 'react'
import styled from 'styled-components'
import imgs from '@/resources/img/index'

export default function IconCategory(props) {
    // console.log(props)

    const StyledImg = styled.img`
        width: ${props.w};
        height: ${props.h};
        /* border-radius: 25%; */
        /* background-color:blue; */
    `

    // return (<StyledDiv style={{ backgroundImage: 'url(' + props.url + ')' }}></StyledDiv>)    
    return (<StyledImg src={imgs[props.url]} alt="avatar"/>)
}